import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    repo: z.url().optional(),
    live: z.url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    start: z.string().regex(/^\d{4}-\d{2}$/, 'Use YYYY-MM'),
    end: z
      .string()
      .regex(/^\d{4}-\d{2}$/, 'Use YYYY-MM')
      .optional(),
    location: z.string().optional(),
    summary: z.string(),
    highlights: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, experience };
