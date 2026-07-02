import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'zh']).default('en'),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    period: z.string(),
    status: z.enum(['active', 'completed', 'ongoing']).default('active'),
    tags: z.array(z.string()).default([]),
    url: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { articles, projects };
