export default {
    title: 'Doc Template',
    titleTemplate: 'Jansora\'s knowledge base',
    description: 'Just playing around.',
    cleanUrls: true,
    lang: 'zh-CN',
    lastUpdated: true,
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide' },
            {
                text: 'Dropdown Menu',
                items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                ]
            }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' },

                ]
            }
        ],
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: 'Jansora Knowledge base',
            copyright: 'Copyright © 2019-present Jansora'
        }
    }
}