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

  // 運営者(Founder)。公開上の名義は「かえる」。
  author: {
    name: 'かえる',
    role: '編集長 / かえりたくなる部屋 運営者',
    url: '/founder/',
  },

  // SNS・外部導線。値を入れると各所にリンクが表示される(空なら非表示)。
  social: {
    x: 'https://x.com/kaeritaku_room',
    note: 'https://note.com/kaeritaku_room',
    threads: 'https://www.threads.com/@kaeritaku_room',
    rakutenRoom: 'https://room.rakuten.co.jp/kaeritaku_room/items',
  },

  // お問い合わせ先(メール or フォームURL)。空なら準備中表示。
  // 受信は Cloudflare Email Routing で管理用メールへ転送(転送先は非公開)。
  contact: {
    email: 'contact@kaeritaku.com',
    formUrl: '',
  },
} as const;

// SNSリンクを配列で取得(設定済みのものだけ)
export type SocialKey = 'x' | 'note' | 'threads' | 'rakutenRoom';
// 表示は静かな単色テキスト(絵文字・OS依存グリフは使わない)。
export const socialMeta: Record<SocialKey, { label: string }> = {
  x: { label: 'X' },
  note: { label: 'note' },
  threads: { label: 'Threads' },
  rakutenRoom: { label: '楽天ROOM' },
};

export function activeSocials(): { key: SocialKey; url: string; label: string }[] {
  return (Object.keys(socialMeta) as SocialKey[])
    .filter((k) => site.social[k].length > 0)
    .map((k) => ({ key: k, url: site.social[k], ...socialMeta[k] }));
}

// 本番URLは astro.config.mjs の `site` を単一の情報源とする(Astro.site を参照)。
