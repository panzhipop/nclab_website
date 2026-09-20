// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 專案頁：網址是 https://<帳號>.github.io/<repo 名稱>/
  // repo 改名的話這兩行要跟著改，否則線上所有連結都會指到舊路徑
  site: 'https://panzhipop.github.io',
  base: '/nclab_website',
});
