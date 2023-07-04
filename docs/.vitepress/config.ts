import { defineConfig } from "vitepress";
export default defineConfig({
  title: "去伪存真",
  lastUpdated: true,
  base: "/my-comps-docs",
  outDir: "../dist",
  themeConfig: {
    siteTitle: "组件库",
    logo: "/logo.awebp",
    nav: [
      { text: "思路分享", link: "/guide/thinking" },
      { text: "组件库", link: "/components/" },
      { text: "Gitee", link: "https://gitee.com/getbetter/my-comps-docs" },
      { text: "Changelog", link: "https://gitee.com/getbetter/my-comps-docs/commits/master" },
    ],
    sidebar: {
      "/components/": [
        {
          text: "组件库",
          items: [
            { text: "九宫格抽奖", link: "/components/vue3-nine-grid-lottery" },
            { text: "虚拟滚动列表", link: "/components/vue3-virtual-list-comps" },
          ],
        },
      ],
      "/guide/": [
        {
          text: "开始",
          items: [
            { text: "思路分享", link: "/guide/thinking" },
            { text: "代码仓库", link: "/guide/source" },
          ],
        },
      ],
    },
    docFooter: { prev: "上一篇", next: "下一篇" },
    footer: {
      message: `去伪存真的组件库，欢迎学习交流，与点赞<a target="_blank" style="color: var(--vp-c-brand)" href="https://gitee.com/getbetter/my-comps-docs">Star ⭐</a>`,
      copyright: `<a target="_blank" href="https://gitee.com/getbetter/my-comps-docs/blob/master/LICENSE">MIT License 去伪存真 </a> | 版权所有 © ${new Date().getFullYear()}`,
    },
    lastUpdatedText: "最后更新时间",
    carbonAds: {
      code: "CEBDT27Y",
      placement: "vuejsorg",
    },
    algolia: {
      appId: "U8UOJRREDO", // 需要替换
      apiKey: "d1e3f7d28f7bf7e15a59ffe78faaa2d0", // 需要替换
      indexName: "docs", // 需要替换
      placeholder: "请输入关键词",
    },
  },
});
