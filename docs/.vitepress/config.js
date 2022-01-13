import pkg from '../../package.json'

/**
 * @type {import('vitepress').UserConfig}
 */

export default {
    title: 'FDCraft｜复读世界𒆙',
    lang: 'zh-CN',
    description: '世界树之下',
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
    ],
    themeConfig: {
        repo: pkg.repository,
        logo: '/logo.svg',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '为此页提供修改建议',

        // algolia: {
        //     apiKey: 'b573aa848fd57fb47d693b531297403c',
        //     indexName: 'vitejs',
        //     searchParameters: {
        //         facetFilters: ['tags:cn']
        //     }
        // },

        nav: [
            { text: '复读指南', link: '/guide/' },
            { text: '动态', link: '/news/' },
            { text: '世界树的故事', link: '/the-tree/' },
            { text: '用户中心', link: 'https://auth.fdc.hath.top/' },
            { text: '复读百科', link: 'https://docs.qq.com/doc/DR2Voam1PQU5iYkh2' },
            {
                text: '旦星 SPS',
                items: [
                    {
                        text: '旦星一号',
                        link: 'https://map.fdc.hath.top/'
                    }
                ]
            },
            { text: '关于', link: '/about/' }
        ],

        sidebar: {
            '/news/': 'auto',
            '/the-tree/': 'auto',
            '/about/': 'auto',
            '/': [
                {
                    text: '复读指南',
                    children: [
                        {
                            text: '新人指南',
                            link: '/guide/newbie'
                        },
                        {
                            text: '第一天',
                            link: '/guide/'
                        },
                        {
                            text: '特性简介',
                            link: '/guide/features'
                        },
                        {
                            text: '行政区划',
                            link: '/guide/regions'
                        },
                        {
                            text: '轨道交通',
                            link: '/guide/railways'
                        },
                        {
                            text: '指令帮助',
                            link: '/guide/commands'
                        },
                        {
                            text: '软件版本',
                            link: '/guide/softversion'
                        }
                    ]
                }, {
                    text: '官方设施',
                    children: [
                        {
                            text: '功能性建筑',
                            link: '/guide/functional-buildings'
                        },
                        {
                            text: '旦星 SPS',
                            link: '/guide/sps'
                        }
                    ]
                }
            ]
        }
    }
}
