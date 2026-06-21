import type { PortableTextBlock } from '@portabletext/types';

export type SanityImage = {
  asset?: {
    _ref?: string;
    _type?: 'reference';
  };
  alt?: string;
  caption?: string;
};

export type BlogPostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  updatedAt: string;
  author?: string;
  categories?: string[];
  mainImage?: SanityImage;
};

export type BlogPost = BlogPostSummary & {
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
};
