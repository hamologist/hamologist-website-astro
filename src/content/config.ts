import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
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

