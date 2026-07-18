// ブログのカテゴリ定義(一元管理)。
// slug が URL とフロントマターの値、name が表示名、emoji が一覧などのアイコン。
export const categories = [
  { slug: 'gadget', name: 'ガジェット', emoji: '📱' },
  { slug: 'interior', name: 'インテリア', emoji: '🪑' },
  { slug: 'desk', name: 'デスク環境', emoji: '🖥️' },
  { slug: 'storage', name: '収納', emoji: '📦' },
  { slug: 'review', name: 'レビュー', emoji: '⭐' },
  { slug: 'life', name: '暮らし', emoji: '☕' },
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
