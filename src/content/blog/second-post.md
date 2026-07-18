---
title: Tailwind CSS の導入メモ
description: Astro プロジェクトに Tailwind CSS v4 を導入した手順のメモ。
pubDate: 2026-07-10
category: desk
tags: ["tailwind", "css"]
---

## 導入手順

Astro には公式の追加コマンドがあり、一発で導入できる。

```powershell
npx astro add tailwind
```

Tailwind CSS v4 からは設定ファイル（`tailwind.config.js`）が不要になり、CSS ファイルへの `@import "tailwindcss";` だけで動く。

## 記事本文のスタイル

記事本文には `@tailwindcss/typography` プラグインの `prose` クラスを使っている。見出し・リスト・コードブロックなどが自動で整う。

> Markdown で書いた内容が、そのまま読みやすく表示される。
