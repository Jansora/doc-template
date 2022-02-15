import { defineConfig } from 'dumi';

const title = 'doc template';

export default defineConfig({
  title: `${title}`,
  favicon:
    'https://cdn.jansora.com/logo/logo.png',
  logo:
    'https://cdn.jansora.com/logo/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: false,
  // Because of using GitHub Pages
  base: `/`,
  publicPath: `/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/Jansora/doc/tree/main/mybatis',
    },
  ],
  locales: [['zh-CN', '中文']]
  // more config: https://d.umijs.org/config
});
