import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string(),
    locale: z.enum(['en', 'fr', 'sw']),
    category: z.enum(['product-updates', 'industry-insights', 'how-to-guides', 'security-compliance', 'customer-stories']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    image: z.string(),
    imageAlt: z.string(),
    readingTime: z.number().int().positive(),
    seoTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    sources: z.array(z.object({
      title: z.string(),
      publisher: z.string(),
      url: z.string().url(),
    })).default([]),
  }),
});

export const collections = { blog };
