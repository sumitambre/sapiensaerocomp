import { isSanityConfigured } from '../env';
import { sanityClient } from './client';
import type { BlogPost, BlogPostSummary } from './types';

const postSummaryProjection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "updatedAt": _updatedAt,
  author,
  categories,
  mainImage {
    asset,
    alt,
    caption
  }
}`;

export async function getAllPosts(): Promise<BlogPostSummary[]> {
  if (!isSanityConfigured) return [];

  return sanityClient.fetch(
    `*[_type == "post" && defined(slug.current) && publishedAt <= now()]
      | order(publishedAt desc) ${postSummaryProjection}`,
    {},
    { next: { revalidate: 60, tags: ['posts'] } }
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isSanityConfigured) return null;

  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug && publishedAt <= now()][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "updatedAt": _updatedAt,
      author,
      categories,
      mainImage {
        asset,
        alt,
        caption
      },
      body,
      seoTitle,
      seoDescription
    }`,
    { slug },
    { next: { revalidate: 60, tags: [`post:${slug}`, 'posts'] } }
  );
}
