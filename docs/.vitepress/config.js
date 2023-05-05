import pkg from '../../package.json'

/**
 * @type {import('vitepress').UserConfig}
 */

export default {
    title: 'FDCraft',
    lang: 'zh-CN',
    description: '复读世界𒆙',
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
    ],
    themeConfig: {
        repo: pkg.repository,
        logo: '/logo.svg',
        docsBranch: 'main',
        editLinks: false,
        editLinkText: '为此页提供修改建议',

        nav: [
            { text: '复读指南', link: '/guide/' },
            { text: '动态', link: '/news/' },
            // { text: '世界树的故事', link: '/the-tree/' },
            { text: '用户中心', link: 'https://auth.fdc.jingyijun.xyz' },
            { text: '复读百科', link: 'https://docs.qq.com/doc/DR0lJYVhWcGZUa0lk' },
            {
                text: '旦星 SPS',
                items: [
                    {
                        text: '旦星一号',
                        link: 'https://mc.fdc.jingyijun.xyz:20410/'
                    }
                ]
            },
            { text: '关于', link: '/about/' },
            {
                text: '友情链接',
                items: [
                    {
                        text: 'MUA',
                        link: 'https://mualliance.ltd/'
                    },
                    {
                        text: '上海交通大学Minecraft社',
                        link: 'https://mc.sjtu.cn/'
                    },
                    {
                        text: '山商Minecraft煤炭社',
                        link: 'https://www.mualliance.ltd/archives/463'
                    },
                    {
                        text: '燕山大学Minecraft学生同好者协会',
                        link: 'https://www.ysumc.club/'
                    },
                    {
                        text: '塔里木大学方块协作社',
                        link: 'https://www.tarucraft.club/'
                    },                   
                    {
                        text: '牛腩小镇',
                        link: 'https://www.newnan.city/'
                    }
                ]
            }
        ],

        sidebar: {
            '/news/': false,
            '/the-tree/': 'auto',
            '/about/': [
                {
                    text: 'FDCraft',
                    link: '/about/'
                },
                {
                    text: '基岩社',
                    link: '/about/club'
                },
                {
                    text: '联动服务器',
                    link: '/about/server'
                }
            ],
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
                            text: '指令帮助',
                            link: '/guide/commands'
                        },
                        {
                            text: '教程搬运',
                            link: '/guide/learnspace'
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
