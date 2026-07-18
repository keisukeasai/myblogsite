# Roadmap — Project KAERITAKU

改善項目を Priority で管理する。完了項目は [CHANGELOG](CHANGELOG.md) にも記録する。

---

## Priority A — 基盤 ✅ 完了（2026-07-19）

- [x] デザインシステム（Color / Type / Radius / Shadow トークン）
- [x] ブランドパレット刷新（sage / warm neutral）
- [x] 共通Head（canonical / robots / OGP / Twitter Card）
- [x] 構造化データ（WebSite / Organization / Article / BreadcrumbList / Person）
- [x] パンくず（表示 ＋ JSON-LD）
- [x] アクセシビリティ基盤（skip-link / focus-visible / reduced-motion / コントラストAA是正）
- [x] レスポンシブ画像（widths / sizes / lazy）

## Sprint 1 — Version 1.0 ✅ 完了（2026-07-19）

- [x] ブランドトップページ（Hero / 紹介 / おすすめ / 最新 / カテゴリ / SNS・楽天ROOM導線）
- [x] 記事テンプレート（目次 / 関連記事 / 前後記事 / CTA / 著者カード / 画像レイアウト / 内部リンク）
- [x] 記事用MDXコンポーネント（Callout / Figure / ProductCard）
- [x] Header / Footer（モバイルメニュー・SNS導線）
- [x] Founderページ（なぜ作ったか・Person構造化）
- [x] ブランドアセット（OGP / favicon / apple-touch-icon / Web Manifest）
- [x] `updatedDate` / `featured` スキーマ、既定OGP画像
- [x] 記事テンプレート雛形・執筆ガイド整備

## 公開前 P1（Version 1.0 公開までに）

- [ ] **看板記事3本の掲載**（ChatGPT編集長＋運営者の content トラック）
- [ ] Cloudflare Web Analytics 導入（🧑 有効化）
- [ ] Google Search Console 登録・サイトマップ送信（🧑）
- [ ] `site.ts` に SNS / 楽天ROOM / 連絡先・運営者名を設定（🧑）
- [ ] 独自ドメイン（任意。導入時は `site` と `robots.txt` を更新）

## Priority B — 次フェーズ（公開後）

- [ ] 全文検索（Pagefind）
- [ ] タグ一覧ページ
- [ ] ページネーション
- [ ] シェアボタン
- [ ] 利用規約ページ / お問い合わせフォーム本実装

## Priority C — 仕上げ

- [ ] フォント最適化（日本語 subset ＋ preload）
- [ ] Lighthouse 95+ 実測・INP / CLS / LCP 詰め
- [ ] 目次のスクロール追従ハイライト（scroll-spy）
- [ ] OGP画像の記事別自動生成（Satori）
- [ ] FAQ 構造化データ / ダークモード手動トグル

---

🧑 = 運営者の操作が必要 / それ以外は実装で対応可
