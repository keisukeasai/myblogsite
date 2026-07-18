// サイト全体のブランド・メタ情報を一元管理する。
export const site = {
  name: 'かえりたくなる部屋',
  // ブランドメッセージ
  tagline: '帰りたくなる毎日を。',
  // 説明(meta description の既定値)
  description:
    'ガジェットとインテリアで、毎日の暮らしを少し心地よく。「かえりたくなる部屋」は、モノを通して暮らしが少し豊かになる体験を届けるライフスタイルメディアです。',
  // 英語ラベル(装飾見出し用)
  label: 'GADGET & INTERIOR MEDIA',
  locale: 'ja_JP',
  lang: 'ja',
  author: {
    name: 'タカヒロ',
    url: '/about',
  },
  // お問い合わせ先。メールまたはフォームURLのどちらかを設定すると
  // お問い合わせページにボタンが表示される(未設定なら準備中の案内を表示)。
  contact: {
    email: '', // 例: 'hello@example.com'
    formUrl: '', // 例: Google フォーム等のURL
  },
} as const;

// 本番URLは astro.config.mjs の `site` を単一の情報源とする(Astro.site を参照)。
