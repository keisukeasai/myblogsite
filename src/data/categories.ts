// ブログのカテゴリ定義(一元管理)。
// slug が URL とフロントマターの値、name が表示名。
// カテゴリのアイコンは線画(CategoryIcon / public の PNG マスク)で表現する。
export const categories = [
  { slug: 'gadget', name: 'ガジェット' },
  { slug: 'interior', name: 'インテリア' },
  { slug: 'desk', name: 'デスク環境' },
  { slug: 'storage', name: '収納' },
  { slug: 'review', name: 'レビュー' },
  { slug: 'life', name: '暮らし' },
] as const;

export type Category = (typeof categories)[number];
export type CategorySlug = Category['slug'];

// content.config.ts の z.enum に渡すためのスラッグ一覧
export const categorySlugs = categories.map((c) => c.slug) as [
  CategorySlug,
  ...CategorySlug[],
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
