# Project KAERITAKU

「かえりたくなる部屋」を、長く育てるライフスタイルメディアとして管理するためのハブ。
詳細は `docs/` の各ドキュメントを参照。

> **帰りたくなる毎日を。** — ガジェットとインテリアで、毎日の暮らしを少し心地よく。

---

## ドキュメント

| ドキュメント | 内容 |
|---|---|
| [docs/BRAND_GUIDELINES.md](docs/BRAND_GUIDELINES.md) | ブランド指針・カラー・タイポ・ロゴ・トーン |
| [docs/EDITORIAL_GUIDE.md](docs/EDITORIAL_GUIDE.md) | 記事の書き方・フロントマター・公開前チェック |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Priority A / B / C と要対応事項 |
| [docs/CHANGELOG.md](docs/CHANGELOG.md) | 公開済み変更の履歴 |
| [docs/DECISIONS.md](docs/DECISIONS.md) | 主要な意思決定の記録 |

---

## サイト情報

| 項目 | 値 |
|---|---|
| 本番URL | https://myblogsite-8ip.pages.dev |
| GitHub | https://github.com/keisukeasai/myblogsite |
| ホスティング | Cloudflare Pages（`master` push で自動デプロイ） |
| 技術構成 | Astro v7 (TypeScript) / Tailwind CSS v4 / MDX |

---

## 単一情報源（変更するならここ）

| 変えたいもの | ファイル |
|---|---|
| サイト名・メッセージ・運営者・連絡先 | [`src/data/site.ts`](src/data/site.ts) |
| カテゴリ（絵文字・名前・スラッグ） | [`src/data/categories.ts`](src/data/categories.ts) |
| デザイントークン（色・影・余白） | [`src/styles/global.css`](src/styles/global.css) の `@theme` |
| SEO / メタ / 構造化データ | [`src/components/BaseHead.astro`](src/components/BaseHead.astro) |
| 公開URL | [`astro.config.mjs`](astro.config.mjs) ＋ [`public/robots.txt`](public/robots.txt) |

---

## 開発・公開

```powershell
npm run dev                 # 開発サーバー
npm run build && npm run preview   # 本番ビルド確認
git add . ; git commit -m "..." ; git push   # master push で自動公開
```

記事の追加方法・フロントマターは [docs/EDITORIAL_GUIDE.md](docs/EDITORIAL_GUIDE.md) を参照。

---

## 現在地

- **Priority A（基盤）完了。** 次は Priority B（検索 / 目次 / 関連記事 …）。
- 要対応: 連絡先・運営者名・サンプル記事の差し替え → [docs/ROADMAP.md](docs/ROADMAP.md)
