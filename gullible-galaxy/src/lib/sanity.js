import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '86pxfz8a', 
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2026-09-19', 
});