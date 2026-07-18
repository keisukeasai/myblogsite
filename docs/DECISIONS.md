# Decisions — Project KAERITAKU

主要な意思決定の記録（背景・理由・結果）。後から「なぜこうしたか」を追えるようにする。

---

## D-001: 技術スタックに Astro + Tailwind CSS + Cloudflare Pages
- **日付**: 2026-07-18
- **背景**: 表示が速くブログ / メディアに向く構成を求めた。
- **決定**: Astro（TypeScript, 静的生成）＋ Tailwind CSS v4 ＋ MDX。ホスティングは Cloudflare Pages（無料枠・帯域無制限・商用可）。
- **理由**: 既定でJSをほぼ出さず高速。Markdown / MDX を標準サポート。push で自動デプロイ。
- **結果**: 全ページ静的生成。`master` push で自動公開。

## D-002: Node.js はポータブル（ZIP）導入
- **日付**: 2026-07-18
- **背景**: 環境に Node 未インストール、管理者権限は使わない方針。
- **決定**: ZIP版 Node.js を `%LOCALAPPDATA%\Programs\nodejs` へ展開しユーザーPATHへ追加。
- **結果**: ツールシェルでは `node` 解決にPATH再設定が要る場合あり。`.claude/launch.json` は node.exe から `astro/bin/astro.mjs` を直接起動。

## D-003: カテゴリは「必須の単一分類 ＋ 自由なタグ」の二層
- **日付**: 2026-07-18
- **背景**: 主要導線となる固定分類が欲しい。
- **決定**: 6カテゴリ（gadget / interior / desk / storage / review / life）を必須の `category`（enumでバリデート）とし、`tags` は任意の補助ラベルとして併存。定義は [`src/data/categories.ts`](../src/data/categories.ts) に一元化。
- **理由**: 固定分類でナビ・SEO構造を安定させつつ、細かい切り口はタグで柔軟に。タイプミスはビルドで検出。

## D-004: ブランドを「静けさ・sage 基調」へ刷新（青を廃止）
- **日付**: 2026-07-19
- **背景**: ブリーフで Apple / MUJI / BALMUDA / Nothing 的な「余白・静けさ・上質さ」を要求。当初の digital-style.jp 由来の高彩度の青・カラフルなグラデーションと乖離。
- **決定**: ロゴ由来の paper `#FAF9F5` / ink `#222` / sage `#A7B8A2` を基軸にトークンを再定義。`accent-*` を sage に再定義して全体を無痛移行。派手なグラデーションは廃止。
- **理由**: ロゴが既に理想のパレットを持っていた。ブランド世界観との一致を最優先。
- **可逆性**: 方針が変われば `src/styles/global.css` の `@theme` の1箇所で調整可能。

## D-005: SEOは共通Head ＋ JSON-LD構造化データで底上げ
- **日付**: 2026-07-19
- **決定**: [`src/components/BaseHead.astro`](../src/components/BaseHead.astro) に canonical / robots / OGP / Twitter Card を集約。WebSite / Organization を全ページ、記事に Article ＋ BreadcrumbList、プロフィールに Person を付与。
- **理由**: 検索評価とSNSシェア時の表示を、実装の重複なく担保するため。

## D-006: ドキュメントを目的別に分割（PROJECT.md ハブ ＋ docs/）
- **日付**: 2026-07-19
- **背景**: 単一の `PROJECT.md` に情報が集中し、更新箇所が分かりにくくなった。
- **決定**: `PROJECT.md` を軽量なハブ（索引）として残し、詳細を `docs/` に分割（BRAND_GUIDELINES / EDITORIAL_GUIDE / ROADMAP / CHANGELOG / DECISIONS）。
- **理由**: 種類ごとに更新でき、可読性・保守性が上がる。ロードマップと決定の履歴を分離。

## D-007: Sprint 1 は「Version 1.0 公開品質」を目標に、コンポーネント設計を優先
- **日付**: 2026-07-19
- **背景**: 100記事以上の長期運営を前提に、単発の実装ではなく再利用可能な仕組みが必要。
- **決定**:
  - `/about` を `/founder` に統合（人と理由でE-E-A-Tを強化）。
  - プレースホルダの開発メモ記事2本を撤去（ブランド品質のため）。看板記事は content トラックで追加。
  - 記事テンプレートを再利用コンポーネント化（目次 / 関連記事 / 著者カード / CTA ＋ MDX用 Callout / Figure / ProductCard）。
  - ブランドアセットは `scripts/gen-brand-assets.mjs`（sharp）で元SVGから再生成可能に。
  - Analytics（Cloudflare / Search Console）は公開前P1へ後ろ倒し。
- **理由**: 執筆者（ChatGPT編集長含む）が迷わず量産でき、ブランド体験を崩さないため。

---

> 新しい決定は D-00N を追記し、日付・背景・決定・理由（必要なら可逆性）を書く。
