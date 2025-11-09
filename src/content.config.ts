import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/project" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    author: z.string(),
    rank: z.number().optional(),
    demoLink: z.string().optional(),
    repoLink: z.string().optional(),
    disablePost: z.boolean().optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    author: z.string(),
    rank: z.number().optional(),
  }),
});

export const collections = {
  'project': projectCollection,
  'blog': blogCollection,
};

