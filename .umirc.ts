import { defineConfig } from "umi";

export default defineConfig({
  outputPath: './dist',
  hash: true,
  history: {
    type: 'hash',
  },
  routes: [
    {
      path: "/",
      component: "@/pages/index"
    },
    {
      path: "/home",
      component: "@/pages/index"
    },
    {
      path: "/download",
      component: "@/pages/download/index"
    },
    {
      path: "/about",
      component: "@/pages/about/index"
    }
  ],
  npmClient: 'pnpm',
});
