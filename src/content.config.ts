import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/projects" }),
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

const blogsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blogs" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    author: z.string(),
    rank: z.number().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'blogs': blogsCollection,
};

