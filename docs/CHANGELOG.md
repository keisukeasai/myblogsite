# Changelog — Project KAERITAKU

公開済みの変更を新しい順に記録する。日付は実施日。

---

## 2026-07-19 — Sprint 1（Version 1.0 準備）

### Added
- ブランドトップページ（Hero / ブランド紹介 / おすすめ記事 / 最新記事 / カテゴリ / SNS・楽天ROOM導線）
- 記事テンプレート: 目次（PC追従サイドバー／モバイル開閉）、関連記事（カテゴリ＋タグ採点）、著者カード、記事CTA
- 記事執筆用MDXコンポーネント: `Callout` / `Figure` / `ProductCard`
- Founderページ `/founder`（なぜ作ったか＋Person/ProfilePage構造化データ）
- ヘッダーのモバイルメニュー（ナビ＋カテゴリ＋SNS）、SNS導線コンポーネント
- ブランドアセット: 既定OGP画像・apple-touch-icon・icon 192/512・favicon 32・Web Manifest（sharpで生成）
- スキーマに `updatedDate`（→ `dateModified`）・`featured`
- ドキュメント: 記事テンプレート雛形（article-template.md）

### Changed
- 補助テキストのコントラストをWCAG AA準拠へ是正（`ink-400`→`ink-500`）
- `/about` を `/founder` に統合
- OGPを全ページで確保（既定画像フォールバック・`summary_large_image`）

### Removed
- プレースホルダの開発メモ記事2本（Tailwind / MDX）

---

## 2026-07-19 — ブランド刷新・ドキュメント整備

### Added
- ドキュメント体系を整備: `PROJECT.md`（ハブ）＋ `docs/`（BRAND_GUIDELINES / EDITORIAL_GUIDE / ROADMAP / CHANGELOG / DECISIONS）
- `PROJECT.md` を新設（プロジェクト管理の司令塔・Project KAERITAKU）
- SEO: 共通 `BaseHead`（canonical / robots / OGP / Twitter Card）と構造化データ（WebSite / Organization / Article / BreadcrumbList / Person）
- パンくず（表示 ＋ JSON-LD）
- 固定ページ: 404 / このサイトについて / お問い合わせ / プライバシーポリシー
- デザインシステム（トークン: color / type / radius / shadow、a11y基盤）

### Changed
- **ブランド刷新（Priority A）**: digital-style.jp 由来の青を廃し、ロゴ由来の sage・warm neutral 基調（MUJI / Apple 的な静けさ）へ全面移行
- トップページを記事一覧からブランドページへ再設計（メッセージ / コンセプト / カテゴリ / 最新記事）
- カードを静音化（カラフルなグラデーションを廃止）、Header / Footer 刷新
- レスポンシブ画像（widths / sizes / lazy、先頭のみ優先読み込み）

### Removed
- 未使用の `utils/thumb.ts`（グラデーション生成）

---

## 2026-07-18

### Added
- Astro v7 + Tailwind CSS v4 + MDX でサイト新規構築
- ブログのコンテンツコレクション（md / mdx）と記事一覧・詳細ページ
- カテゴリ6分類（gadget / interior / desk / storage / review / life）とカテゴリ別ページ
- ブランドロゴ・ファビコン（ライト / ダーク対応）
- アイキャッチ画像対応（未指定時はプレースホルダにフォールバック）
- サイトマップ・RSS・robots.txt
- 初回記事「はじめまして。『かえりたくなる部屋』を始めます。」

### Changed
- サイト名「かえりたくなる部屋」・メッセージ「帰りたくなる毎日を。」を設定
- 本番URL（`myblogsite-8ip.pages.dev`）を各設定に反映

### Infra
- GitHub リポジトリ作成、Cloudflare Pages で公開（master push で自動デプロイ）
