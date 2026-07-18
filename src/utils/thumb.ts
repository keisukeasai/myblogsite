// アイキャッチ画像がない記事用に、記事IDから決定論的にグラデーションを選ぶ
const gradients = [
  'from-sky-500 via-accent-600 to-indigo-600',
  'from-violet-500 via-purple-600 to-accent-700',
  'from-emerald-500 via-teal-600 to-accent-600',
  'from-amber-500 via-orange-500 to-rose-500',
  'from-accent-500 via-cyan-600 to-emerald-500',
  'from-rose-500 via-pink-600 to-violet-600',
];

export function pickGradient(id: string): string {
  const hash = [...id].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return gradients[hash % gradients.length];
}
