const { defaultTheme } = require("vuepress");
const { nprogressPlugin } = require("@vuepress/plugin-nprogress");
const { docsearchPlugin } = require("@vuepress/plugin-docsearch");
module.exports = {
  head: [["link", { rel: "icon", href: "/fast-vue-admin-doc/images/logo.png" }]],
  plugins: [
    nprogressPlugin(),
    docsearchPlugin({
      // 配置项
    }),
  ],
  base: "/fast-vue-admin-doc",
  lang: "zh-CN",
  title: "fast-vue-admin",
  description: "fast-vue-admin中文文档",
  theme: defaultTheme({
    editLink: false,
    logo: "/images/logo.png",
    repo: "https://github.com/mao-118/fast-vue-admin",
    navbar: [
      {
        text: "指南",
        link: "/",
      },
      {
        text: "项目预览",
        link: "https://mao-118.github.io/fast-vue-admin/#/dashboard/index",
      },
      {
        text: "生态系统",
        children: [
          {
            text: "Vite中文网",
            link: "https://vitejs.cn/",
          },
          {
            text: "Pinia",
            link: "https://pinia.vuejs.org/",
          },
          {
            text: "Vue Router",
            link: "https://router.vuejs.org/zh/",
          },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          children: [
            "/guide/base/README.md",
            "/guide/base/Layout.md",
            "/guide/base/router.md",
            "/guide/base/mock.md",
          ],
        },
        {
          text: "进阶",
          children: [
            "/guide/advanced/theme.md",
            "/guide/advanced/cors.md",
            "/guide/advanced/globalization.md",
          ],
        },
      ],
    },
  }),
};
