# Roadmap — Project KAERITAKU

改善項目を Priority A / B / C で管理する。完了項目は [CHANGELOG](CHANGELOG.md) にも記録する。

---

## Priority A — 基盤 ✅ 完了（2026-07-19）

理由: すべての土台。ここが揃わないと個別機能を作っても統一感・検索評価が出ない。

- [x] デザインシステム（Color / Type / Radius / Shadow トークン）
- [x] ブランドパレット刷新（sage / warm neutral）
- [x] トップをブランドページ化
- [x] カード静音化・Header / Footer 刷新
- [x] 共通Head（canonical / robots / OGP / Twitter Card）
- [x] 構造化データ（WebSite / Organization / Article / BreadcrumbList / Person）
- [x] パンくず（表示 ＋ JSON-LD）
- [x] 404 / about / contact / privacy
- [x] アクセシビリティ基盤（skip-link / focus-visible / reduced-motion）
- [x] レスポンシブ画像（widths / sizes / lazy）

---

## Priority B — 主要メディア機能

理由: 回遊性と信頼性。滞在時間と E-E-A-T に直結。

- [ ] 目次（TOC）
- [ ] 関連記事
- [ ] シェアボタン
- [ ] ページネーション
- [ ] 全文検索（Pagefind）
- [ ] タグ一覧ページ
- [ ] 記事執筆テンプレート（雛形ファイル）
- [ ] 利用規約ページ
- [ ] お問い合わせフォーム本実装

> 推奨着手順: ①全文検索 → ②目次 → ③関連記事（体験の伸びしろが大きい順）

---

## Priority C — 仕上げ

理由: 最後の詰め。効果は A / B より限定的。

- [ ] フォント最適化（日本語 subset ＋ preload）
- [ ] Lighthouse 95+ 実測・INP / CLS / LCP 詰め
- [ ] OGP画像の自動生成（Satori）
- [ ] FAQ 構造化データ
- [ ] ダークモード手動トグル（現状は OS 設定に自動追従）

---

## 要対応（ユーザー入力待ち）

- [ ] **連絡先**: [`src/data/site.ts`](../src/data/site.ts) の `contact`（メール or フォームURL）が空
- [ ] **運営者名**: 仮で「タカヒロ」。実名 / ハンドルへ変更
- [ ] **サンプル記事2本**（`second-post` / `hello-mdx` = 暫定デスク環境）を実記事へ差し替え or 削除
- [ ] 独自ドメイン導入時は `astro.config.mjs` の `site` と `public/robots.txt` を更新
