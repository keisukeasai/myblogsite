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

  // 運営者(Founder)
  author: {
    name: 'タカヒロ', // TODO: 実名 or ハンドルに変更
    role: '編集長 / かえりたくなる部屋 運営者',
    url: '/founder',
  },

  // SNS・外部導線。値を入れると各所にリンクが表示される(空なら非表示)。
  social: {
    x: '', // 例: 'https://x.com/xxxx'
    instagram: '', // 例: 'https://www.instagram.com/xxxx'
    youtube: '', // 例: 'https://www.youtube.com/@xxxx'
    rakutenRoom: '', // 例: 'https://room.rakuten.co.jp/xxxx'
  },

  // お問い合わせ先(メール or フォームURL)。空なら準備中表示。
  contact: {
    email: '',
    formUrl: '',
  },
} as const;

// SNSリンクを配列で取得(設定済みのものだけ)
export type SocialKey = 'x' | 'instagram' | 'youtube' | 'rakutenRoom';
export const socialMeta: Record<SocialKey, { label: string; emoji: string }> = {
  x: { label: 'X (Twitter)', emoji: '𝕏' },
  instagram: { label: 'Instagram', emoji: '📷' },
  youtube: { label: 'YouTube', emoji: '▶' },
  rakutenRoom: { label: '楽天ROOM', emoji: '🛋️' },
};

export function activeSocials(): { key: SocialKey; url: string; label: string; emoji: string }[] {
  return (Object.keys(socialMeta) as SocialKey[])
    .filter((k) => site.social[k].length > 0)
    .map((k) => ({ key: k, url: site.social[k], ...socialMeta[k] }));
}

// 本番URLは astro.config.mjs の `site` を単一の情報源とする(Astro.site を参照)。
