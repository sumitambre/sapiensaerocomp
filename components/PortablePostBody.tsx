import { PortableText, type PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import type { SanityImage } from '@/sanity/lib/types';

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset?._ref) return null;

      return (
        <figure className="my-10">
          <Image
            src={urlFor(value).width(1400).fit('max').auto('format').url()}
            alt={value.alt || ''}
            width={1400}
            height={800}
            className="h-auto w-full rounded-2xl"
          />
          {value.caption ? <figcaption className="mt-3 text-center text-sm text-gray">{value.caption}</figcaption> : null}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => <h2 className="mb-4 mt-12 text-3xl font-bold text-navy-900">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-3 mt-9 text-2xl font-bold text-heading">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-teal-500 pl-6 text-xl italic text-heading">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="my-5 leading-8">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="my-5 list-disc space-y-2 pl-6">{children}</ul>,
    number: ({ children }) => <ol className="my-5 list-decimal space-y-2 pl-6">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#';
      const external = href.startsWith('http');
      return (
        <a
          href={href}
          className="font-semibold text-teal-600 underline"
          rel={external ? 'noreferrer noopener' : undefined}
          target={external ? '_blank' : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortablePostBody({ value }: { value: Parameters<typeof PortableText>[0]['value'] }) {
  return <PortableText value={value} components={components} />;
}
