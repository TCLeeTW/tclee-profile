import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Hardware', 'Civil Defense', 'AI', 'Market Development']),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'zh']).default('en'),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).min(1),
    year: z.string(),
    status: z.enum(['ongoing', 'completed']).default('ongoing'),
    order: z.number().default(99),
    ready: z.boolean().default(false),
    links: z
      .array(z.object({ label: z.string(), url: z.string(), source: z.string() }))
      .default([]),
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

const startups = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    status: z.enum(['active', 'closed']).default('closed'),
    order: z.number().default(99),
    ready: z.boolean().default(false),
    url: z.string().optional(),
    zh: z.object({ title: z.string().optional(), summary: z.string().optional() }).optional(),
  }),
});

export const collections = { articles, projects, startups };
