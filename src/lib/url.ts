/**
 * 把站台的 base 前綴接到站內絕對路徑前面。
 *
 * 為什麼需要這個：Astro 的 `base` 設定只影響它自己產生的資源路徑，
 * 我們寫在 .astro 裡的 href="/about"、src="/logo.png" 它不會動。
 * 部署到 GitHub Pages 專案頁時網址多了一層 /nclab_website，
 * 這些路徑就會全部指到不存在的位置。
 *
 * BASE_URL 在兩種環境下的值不一樣（本機是 "/"，線上是 "/nclab_website/"），
 * 而且結尾有沒有斜線取決於設定寫法，所以兩邊都先正規化再接，
 * 避免接出 "//about" 或 "/nclab_websiteabout" 這種結果。
 *
 *   withBase("/")          →  "/"  或  "/nclab_website/"
 *   withBase("/logo.png")  →  "/logo.png"  或  "/nclab_website/logo.png"
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
