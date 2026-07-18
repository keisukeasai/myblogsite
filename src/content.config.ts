import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categorySlugs } from './data/categories';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      category: z.enum(categorySlugs),
      tags: z.array(z.string()).default([]),
      // アイキャッチ画像(任意)。記事ファイルからの相対パスで指定する
      image: image().optional(),
      imageAlt: z.string().optional(),
    }),
});

export const collections = { blog };
