// docs/.vuepress/config.ts
import {defineUserConfig} from 'vuepress'
import { mixTheme } from 'vuepress-theme-mix'


export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Doc Demo',
  description: 'Doc Demo',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `https://cdn.jansora.com/img/linux-shell.png` }]
  ],
  // Theme Config
  theme: mixTheme({
    themePlugins: {
      git: true
    },
    // logo: '/images/logo.png',
    title: '程序人生',



    navbar: [
      // {
      //   text: 'MySQL',
      //   link: "/mysql/basic/explain.md",
      // },
      // {
      //   text: '计算机算法',
      //   link: "/algorithms/data-structure/linked-list.md",
      // },
    ],

    sidebar: {
      // '/mysql/basic': [
      //   {
      //     type: 'group', text: '基础概念', link: '', children: ['/mysql/basic/explain.md']
      //   },
      // ],
      // '/algorithms/data-structure': [
      //   {
      //     type: 'group', text: '数据结构', link: '', children: ['/algorithms/data-structure/linked-list.md', '/algorithms/data-structure/array.md']
      //   },
      // ],
    },

  }),
  plugins: [
    {
      name: "vuepress-plugin-chart",
    },
    {
      name: "@renovamen/vuepress-plugin-mermaid",
    },
    {
      name: "@renovamen/vuepress-plugin-katex",
    },
  ],

})