# Vite+ Playground

[Vite+ v1.0.0-rc.0](https://github.com/voidzero-dev/vite-plus/releases/tag/v1.0.0-rc.0) を試すためのワークスペースです。公式の `vite:monorepo` テンプレートから作成しました。

## 構成

- `apps/website`: Vite で動く Web アプリ。画面とカウンターを編集して HMR を試せます。
- `packages/utils`: `vite-plus/test` を使うテストと、`vp pack` を使うライブラリの例です。
- `vite.config.ts`: 整形、Lint、型チェック、タスクキャッシュの設定です。

## 実行

Node.js は 22.18 以降の 22 系、24.11 以降の 24 系、または 26 以降が必要です。この Playground は pnpm 12.4.2 を使います。

```bash
git clone https://github.com/naokihaba/vite-plus-playgroudn.git
cd vite-plus-playgroudn
pnpm install
pnpm exec vp run dev
```

開発サーバーの URL を開き、`apps/website/src/main.ts` を編集してください。以下の `vp` コマンドは、グローバル版を使わない場合は `pnpm exec vp` に置き換えられます。

## 検証コマンド

```bash
vp check          # 整形、Lint、型チェック
vp run -r test    # Vitest 5 のテスト
vp run -r build   # Web アプリとライブラリのビルド
vp run ready      # 上記をまとめて実行
```

`vp run` はワークスペースのスクリプトを実行します。アプリの開発サーバーは `vp run dev`、ライブラリ単体のテストは `cd packages/utils && vp test` で試せます。
