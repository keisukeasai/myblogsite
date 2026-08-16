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
      // 更新日(任意)。設定すると SEO の dateModified と「更新日」表示に反映
      updatedDate: z.coerce.date().optional(),
      category: z.enum(categorySlugs),
      tags: z.array(z.string()).default([]),
      // トップの「おすすめ記事」に出す
      featured: z.boolean().default(false),
      // アフィリエイト導線を出すか。true で冒頭のPR表記と記事末尾の楽天ROOM CTA を表示。
      // 既定を true にしているのは、付け忘れたときに「表記なしで導線だけ出る」状態を防ぐため。
      // 収益導線を持たないエッセイ・記録系の記事では明示的に false を指定する。
      affiliate: z.boolean().default(true),
      // アイキャッチ画像(任意)。記事ファイルからの相対パスで指定する
      image: image().optional(),
      imageAlt: z.string().optional(),
    }),
});

export const collections = { blog };
