import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogHeader from '@/components/BlogHeader';
import Footer from '@/components/Footer';
import PortablePostBody from '@/components/PortablePostBody';
import { urlFor } from '@/sanity/lib/image';
import { getAllPosts, getPostBySlug } from '@/sanity/lib/queries';

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  const image = post.mainImage?.asset?._ref
    ? urlFor(post.mainImage).width(1200).height(630).fit('crop').auto('format').url()
    : '/images/hero-image.png';

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: 'article',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: `/blog/${post.slug}/`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: post.author ? [post.author] : undefined,
      images: [{ url: image, width: 1200, height: 630, alt: post.mainImage?.alt || post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://www.sapiensaerocomp.com').replace(/\/+$/, '');
  const postUrl = `${siteUrl}/blog/${post.slug}/`;
  const imageUrl = post.mainImage?.asset?._ref
    ? urlFor(post.mainImage).width(1400).height(800).fit('crop').auto('format').url()
    : undefined;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${postUrl}#article`,
        url: postUrl,
        headline: post.title,
        description: post.seoDescription || post.excerpt,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          name: post.author || 'Sapiens AeroComp',
          url: siteUrl,
        },
        publisher: { '@id': `${siteUrl}/#organization` },
        mainEntityOfPage: { '@id': `${postUrl}#webpage` },
        image: imageUrl ? [imageUrl] : undefined,
        inLanguage: 'en',
      },
      {
        '@type': 'WebPage',
        '@id': `${postUrl}#webpage`,
        url: postUrl,
        name: post.title,
        isPartOf: { '@id': `${siteUrl}/#website` },
        primaryImageOfPage: imageUrl ? { '@type': 'ImageObject', url: imageUrl } : undefined,
        breadcrumb: { '@id': `${postUrl}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${postUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog/` },
          { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
        ],
      },
    ],
  };

  return (
    <>
      <BlogHeader />
      <main className="bg-offwhite px-4 py-14">
        <article className="mx-auto max-w-4xl">
          <Link className="font-semibold text-teal-600" href="/blog">
            ← All articles
          </Link>
          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray">
              <time dateTime={post.publishedAt}>
                {new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(post.publishedAt))}
              </time>
              {post.author ? <span>· {post.author}</span> : null}
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-navy-900 sm:text-6xl">{post.title}</h1>
            {post.excerpt ? <p className="mt-6 text-xl leading-8">{post.excerpt}</p> : null}
            {post.categories?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span key={category} className="rounded-full bg-teal-600/10 px-3 py-1 text-xs font-semibold text-teal-600">
                    {category}
                  </span>
                ))}
              </div>
            ) : null}
          </header>

          {imageUrl ? (
            <figure className="my-10">
              <Image
                src={imageUrl}
                alt={post.mainImage?.alt || post.title}
                width={1400}
                height={800}
                className="w-full rounded-3xl object-cover"
                priority
              />
              {post.mainImage?.caption ? (
                <figcaption className="mt-3 text-center text-sm text-gray">{post.mainImage.caption}</figcaption>
              ) : null}
            </figure>
          ) : null}

          <div className="blog-body text-lg">{post.body ? <PortablePostBody value={post.body} /> : null}</div>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </>
  );
}
