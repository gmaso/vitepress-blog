module.exports = {
  title: 'Gmaso Blog',
  description: 'About me.',
  lang: 'zh-CN',
  home: true,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // 设置 描述 和 关键词
    [
      "meta",
      { name: "keywords", content: "gmaso vue webpack 前端 个人成长" },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "希望保持写作习惯。",
      },
    ],
  ],
  themeConfig: {
    search: true,
    sidebar: {
      // 侧边栏
      "/": [
        {
          text: "2021",
          collapsable: false,
          children: [
            { text: "Charles 导入 p12 证书", link: "/2021/Charles-import-p12" },
          ],
        },
        {
          text: "2020",
          collapsable: true,
          children: [
            { text: "hello-world", link: "/2020/hello-world" },
            { text: "Linux 开发环境配置", link: "/2020/Linux-开发环境配置" },
            { text: "写作", link: "/2020/写" },
            { text: "博客部署", link: "/2020/博客部署" },
          ],
        },
      ],
    },
    nav: [
      // 顶部右侧导航栏
      {
        text: "2021", link: "/",
        activeMatch: "^/$|^/2021/"
      },
      {
        text: "VitePress",
        link: "https://vitepress.vuejs.org/",
      },
      {
        text: "关于我",
        link: "/about/",
      },
    ],
  },
  dest: 'public'
}