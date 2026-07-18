# Project KAERITAKU

「かえりたくなる部屋」を、単なるブログではなく**長く育てるライフスタイルメディア**として管理するためのプロジェクトドキュメント。ブランド指針・ロードマップ・決定ログ・要対応事項を一元管理する。

---

## ブランド

| 項目 | 内容 |
|---|---|
| ブランド名 | かえりたくなる部屋 |
| メッセージ | 帰りたくなる毎日を。 |
| 説明 | ガジェットとインテリアで、毎日の暮らしを少し心地よく。 |
| 位置づけ | 商品紹介サイトではなく、**暮らしが少し豊かになる体験**を届けるメディア |
| 世界観 | Apple / MUJI / BALMUDA / Nothing 的な「余白・静けさ・上質さ」 |
| パレット | paper `#FAF9F5` / ink `#222` / accent = sage `#A7B8A2`（ロゴ由来）。**派手な青には戻さない** |

---

## サイト情報

| 項目 | 値 |
|---|---|
| 本番URL | https://myblogsite-8ip.pages.dev |
| GitHub | https://github.com/keisukeasai/myblogsite |
| ホスティング | Cloudflare Pages（無料プラン・`master` push で自動デプロイ） |
| 技術構成 | Astro v7 (TypeScript) / Tailwind CSS v4 / MDX / Cloudflare Pages |

---

## 単一情報源（変更するならここ）

| 変えたいもの | ファイル |
|---|---|
| サイト名・メッセージ・運営者・連絡先 | [`src/data/site.ts`](src/data/site.ts) |
| カテゴリ（絵文字・名前・スラッグ） | [`src/data/categories.ts`](src/data/categories.ts) |
| デザイントークン（色・影・余白） | [`src/styles/global.css`](src/styles/global.css) の `@theme` |
| SEO/メタ/構造化データ | [`src/components/BaseHead.astro`](src/components/BaseHead.astro) |
| 公開URL | [`astro.config.mjs`](astro.config.mjs) の `site` ＋ [`public/robots.txt`](public/robots.txt) |

---

## 開発・公開

```powershell
# 開発サーバー（プロジェクトルートで）
npm run dev

# 本番ビルド確認
npm run build && npm run preview

# 公開（master へ push すると Cloudflare Pages が自動ビルド）
git add . ; git commit -m "..." ; git push
```

### 記事の追加

`src/content/blog/` に `.md` / `.mdx` を置く。フロントマター:

```yaml
---
title: 記事タイトル
description: 一覧・検索・OGPに使う説明（100字前後）
pubDate: 2026-07-19
category: gadget   # gadget / interior / desk / storage / review / life
tags: ["任意タグ"]
image: ./images/cover.png   # 任意。省略時はカテゴリ絵文字のプレースホルダ
imageAlt: 画像の説明
---
```

推奨アイキャッチ: **16:9・1600×900px 前後**（ビルド時にWebP自動最適化）。

---

## ロードマップ

### Priority A — 基盤 ✅ 完了（2026-07-19）
- [x] デザインシステム（Color/Type/Radius/Shadow トークン）
- [x] ブランドパレット刷新（sage / warm neutral）
- [x] トップをブランドページ化
- [x] カード静音化・Header/Footer刷新
- [x] 共通Head（canonical/robots/OGP/Twitter）
- [x] 構造化データ（WebSite/Organization/Article/BreadcrumbList/Person）
- [x] パンくず（表示＋JSON-LD）
- [x] 404 / about / contact / privacy
- [x] アクセシビリティ基盤（skip-link/focus-visible/reduced-motion）
- [x] レスポンシブ画像（widths/sizes/lazy）

### Priority B — 主要メディア機能
- [ ] 目次（TOC）
- [ ] 関連記事
- [ ] シェアボタン
- [ ] ページネーション
- [ ] 全文検索（Pagefind）
- [ ] タグ一覧ページ
- [ ] 記事執筆テンプレート＋ガイド
- [ ] 利用規約ページ
- [ ] お問い合わせフォーム本実装

### Priority C — 仕上げ
- [ ] フォント最適化（日本語subset＋preload）
- [ ] Lighthouse 95+ 実測・INP/CLS/LCP詰め
- [ ] OGP画像の自動生成（Satori）
- [ ] FAQ構造化データ
- [ ] ダークモード手動トグル（現状はOS設定に自動追従）

---

## 決定ログ

| 日付 | 決定 |
|---|---|
| 2026-07-18 | Astro + Tailwind CSS で新規構築。Cloudflare Pagesで公開 |
| 2026-07-18 | サイト名「かえりたくなる部屋」・メッセージ確定。ロゴ/ファビコン反映 |
| 2026-07-18 | カテゴリ6分類を導入（gadget/interior/desk/storage/review/life） |
| 2026-07-19 | **ブランド刷新**: digital-style.jp由来の青を廃し、MUJI/Apple的な静けさ・sage基調へ（Priority A） |

---

## 要対応（ユーザー入力待ち）

- [ ] **連絡先**: `site.ts` の `contact`（メール or フォームURL）が空。設定するとお問い合わせページにボタンが表示される
- [ ] **運営者名**: 仮で「タカヒロ」。実名/ハンドルへ変更（`site.ts`）
- [ ] **サンプル記事2本**（`second-post`/`hello-mdx` = 暫定デスク環境）を実記事へ差し替え or 削除
- [ ] 独自ドメイン導入時は `astro.config.mjs` の `site` と `robots.txt` を更新
