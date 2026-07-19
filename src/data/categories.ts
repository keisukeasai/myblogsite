// ブログのカテゴリ定義(一元管理)。
// slug が URL とフロントマターの値、name が表示名、description がカテゴリページの説明文。
// カテゴリのアイコンは線画(CategoryIcon / public の PNG マスク)で表現する。
export const categories = [
  {
    slug: 'gadget',
    name: 'ガジェット',
    description: '毎日の暮らしを少し心地よくしてくれる、道具やガジェットの話。',
  },
  {
    slug: 'interior',
    name: 'インテリア',
    description: '部屋の居心地を整える、インテリアと家具の話。',
  },
  {
    slug: 'desk',
    name: 'デスク環境',
    description: '長く座っても疲れにくい、デスクまわりの環境づくり。',
  },
  {
    slug: 'storage',
    name: '収納',
    description: '疲れていても片付く、無理のない収納の仕組み。',
  },
  {
    slug: 'review',
    name: 'レビュー',
    description: '実際に使って分かったことを、いい点も気になる点も正直に。',
  },
  {
    slug: 'life',
    name: '暮らし',
    description: '帰りたくなる部屋と、日々の暮らしを整える記録。',
  },
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
