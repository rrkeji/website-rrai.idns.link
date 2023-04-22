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
  title: '软软AI-ChatGPT、Stable-diffusion、智能对话、AIGC',
  metas: [
    { name: 'keywords', content: '软软AI, ChatGPT, 文心一言, 通义千问, stable diffusion, AIGC, AI, huggingface, civitai' },
    { name: 'description', content: '软软AI,智能 AI 体验馆。ChatGPT、Stable-diffusion、智能对话、AIGC、提示词分享、模型分享。' },
  ],
});
