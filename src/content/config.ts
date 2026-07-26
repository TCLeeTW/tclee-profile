import { defineCollection, z } from 'astro:content';

export const ARTICLE_CATEGORIES = [
  'Hardware',
  'Civil Defense',
  'AI',
  'Market Development',
  'Startup',
  'Social Commentary',
] as const;

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(ARTICLE_CATEGORIES),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'zh']).default('en'),
    is_published: z.boolean().default(false),
  }),
});

export const PROJECT_CATEGORIES = [
  'Civil Defense',
  'BDM',
  'Startup',
  'Information Resilience',
  'Social Commentary',
] as const;

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(PROJECT_CATEGORIES),
    year: z.string(),
    status: z.enum(['ongoing', 'completed']).default('ongoing'),
    order: z.number().default(99),
    is_published: z.boolean().default(false),
    links: z
      .array(z.object({ label: z.string(), url: z.string(), source: z.string() }))
      .default([]),
    image: z.string().optional(),
    video: z.string().optional(),
    why: z.object({ heading: z.string(), paragraphs: z.array(z.string()) }).optional(),
    how: z.object({ heading: z.string(), items: z.array(z.string()) }).optional(),
    what: z.object({ heading: z.string(), items: z.array(z.string()), note: z.string().optional() }).optional(),
    zh: z
      .object({
        title: z.string().optional(),
        summary: z.string().optional(),
        why: z.object({ heading: z.string(), paragraphs: z.array(z.string()) }).optional(),
        how: z.object({ heading: z.string(), items: z.array(z.string()) }).optional(),
        what: z.object({ heading: z.string(), items: z.array(z.string()), note: z.string().optional() }).optional(),
      })
      .optional(),
  }),
});

export const collections = { articles, projects };
