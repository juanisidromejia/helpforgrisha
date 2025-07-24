import { defineCollection, z } from 'astro:content';

const updatesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string().optional(), // Or z.date() if you parse dates
    // Add any other frontmatter fields you expect in your markdown files
  }),
});

export const collections = {
  updates: updatesCollection,
};
