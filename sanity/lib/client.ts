import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
});

export const sanityWriteClient = process.env.SANITY_API_WRITE_TOKEN
  ? sanityClient.withConfig({
      token: process.env.SANITY_API_WRITE_TOKEN,
      useCdn: false,
    })
  : null;
