import "./style.css";
import heroImg from "./assets/hero.png";
import typescriptLogo from "./assets/typescript.svg";
import viteLogo from "./assets/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${typescriptLogo}" class="framework" alt="TypeScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Vite+ rc.0 Playground</h1>
    <p><code>src/main.ts</code> を編集して HMR を試してください。</p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Vite+ ドキュメント</h2>
    <p>開発と設定の手順</p>
    <ul>
      <li>
        <a href="https://viteplus.dev/guide/" target="_blank" rel="noopener noreferrer">
          <img class="logo" src="${viteLogo}" alt="" />
          Vite+ ガイド
        </a>
      </li>
      <li>
        <a href="https://viteplus.dev/guide/create" target="_blank" rel="noopener noreferrer">
          <img class="button-icon" src="${typescriptLogo}" alt="">
          プロジェクトの作成
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>試す</h2>
    <p>ターミナルで <code>vp run ready</code> を実行</p>
    <ul>
      <li><a href="https://github.com/voidzero-dev/vite-plus/releases/tag/v1.0.0-rc.0" target="_blank" rel="noopener noreferrer"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>rc.0 リリース</a></li>
      <li><a href="https://viteplus.dev/guide/test" target="_blank" rel="noopener noreferrer">Vitest 5</a></li>
      <li><a href="https://viteplus.dev/guide/build" target="_blank" rel="noopener noreferrer">ビルド</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
