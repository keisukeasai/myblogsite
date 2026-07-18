# 記事テンプレート

新しい記事は、これをコピーして `src/content/blog/<slug>.md`(または `.mdx`)として作成する。
`<slug>` がURLになる(英小文字・ハイフン推奨）。コンポーネントを使う場合は拡張子を `.mdx` にする。

---

## フロントマター(全項目)

```yaml
---
title: 記事タイトル(32〜40字まで)
description: 一覧・検索・OGP・meta に使う説明。100字前後で内容が伝わるように。
pubDate: 2026-07-19
updatedDate: 2026-08-01   # 任意。更新したら記入(SEOの更新日・表示に反映)
category: gadget          # gadget / interior / desk / storage / review / life
tags: ["タグ1", "タグ2"]   # 任意。関連記事の精度が上がる
featured: false           # true にするとトップの「おすすめ」に掲載
image: ./images/cover.png # 任意。16:9 / 1600×900px 推奨
imageAlt: 画像の説明
---
```

---

## 本文の基本構成(.md)

```markdown
導入(2〜4行)。何の記事で、誰に向けてかを最初に示す。

## 見出し(h2)

本文。段落は空行で区切る。**強調**は太字で。

- 箇条書き
- 箇条書き

### 小見出し(h3)

> 引用は blockquote で。

## まとめ

結論・どんな人に向くか。
```

> 見出し(##）から自動で**目次**が生成される。見出しは内容が分かる言葉にする。

---

## コンポーネントを使う場合(.mdx)

ファイル拡張子を `.mdx` にし、先頭でインポートする。

```mdx
---
title: ...
category: review
---
import Callout from '../../components/content/Callout.astro';
import Figure from '../../components/content/Figure.astro';
import ProductCard from '../../components/content/ProductCard.astro';
import cover from './images/cover.jpg';
import photo from './images/photo.jpg';

導入文。

## 使ってみた

<Figure src={photo} alt="デスクの様子" caption="実際の設置イメージ" />

<Callout type="point" title="ここがポイント">
特に良かったのは、静かさと佇まいのよさ。
</Callout>

## 気になったところ

<Callout type="warning">
サイズが大きめなので、事前に設置スペースの確認を。
</Callout>

## まとめ

<ProductCard
  name="商品名"
  note="毎日の心地よさが少し上がる、おすすめの一台。"
  href="https://楽天またはAmazonのURL"
  label="楽天で見る"
  image={cover}
/>
```

### コンポーネント一覧

| コンポーネント | 用途 | 主なprops |
|---|---|---|
| `Callout` | 補足ボックス | `type`(note/tip/point/warning), `title` |
| `Figure` | キャプション付き画像 | `src`(import), `alt`, `caption` |
| `ProductCard` | 商品紹介カード | `name`, `note`, `href`, `label`, `image` |

---

## 公開前チェック

[EDITORIAL_GUIDE.md](EDITORIAL_GUIDE.md#7-公開前チェックリスト) のチェックリストを参照。
