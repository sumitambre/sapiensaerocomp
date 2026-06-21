import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BlogHeader from '@/components/BlogHeader';
import Footer from '@/components/Footer';
import { isSanityConfigured } from '@/sanity/env';
import { urlFor } from '@/sanity/lib/image';
import { getAllPosts } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Engineering insights, product updates, and carbon-fiber UAV propulsion knowledge from Sapiens AeroComp.',
  alternates: { canonical: '/blog/' },
  openGraph: {
    type: 'website',
    url: '/blog/',
    title: 'Blog | Sapiens AeroComp',
    description: 'Engineering insights, product updates, and carbon-fiber UAV propulsion knowledge from Sapiens AeroComp.',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <BlogHeader />
      <main className="min-h-[70vh] bg-offwhite px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.35em] text-teal-600">Knowledge & updates</p>
          <h1 className="mt-4 text-4xl font-bold text-navy-900 sm:text-5xl">Sapiens AeroComp Blog</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8">
            Engineering notes, manufacturing insights, and updates from our carbon-fiber propulsion work.
          </p>

          {posts.length ? (
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post._id} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                  {post.mainImage?.asset?._ref ? (
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={urlFor(post.mainImage).width(900).height(560).fit('crop').auto('format').url()}
                        alt={post.mainImage.alt || post.title}
                        width={900}
                        height={560}
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </Link>
                  ) : null}
                  <div className="p-6">
                    <time className="text-xs font-semibold uppercase tracking-wider text-gray" dateTime={post.publishedAt}>
                      {new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(post.publishedAt))}
                    </time>
                    <h2 className="mt-3 text-2xl font-bold text-navy-900">
                      <Link className="hover:text-teal-600" href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 leading-7">{post.excerpt}</p>
                    <Link className="mt-5 inline-block font-semibold text-teal-600" href={`/blog/${post.slug}`}>
                      Read article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-3xl border border-gray/20 bg-white p-8">
              <h2 className="text-2xl font-bold text-navy-900">Articles are coming soon.</h2>
              <p className="mt-3">
                {isSanityConfigured
                  ? 'No posts have been published yet.'
                  : 'Connect the Sanity project using the environment variables to publish the first post.'}
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
