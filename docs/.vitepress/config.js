import pkg from '../../package.json'

/**
 * @type {import('vitepress').UserConfig}
 */

export default {
    title: 'FDCraft',
    lang: 'zh-CN',
    description: '基岩社',
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
    ],
    themeConfig: {
        repo: pkg.repository,
        siteTitle: 'FDCraft | 基岩社',
        logo: '/logo.svg',
        docsBranch: 'main',
        editLinks: false,
        editLinkText: '为此页提供修改建议',

        search: {
            provider: 'local'
        },

        nav: [
            { text: '复读指南', link: '/guide/' },
            { text: '动态', link: '/news/' },
            // { text: '世界树的故事', link: '/the-tree/' },
            { text: '关于', link: '/about/' },
            { text: '用户中心', link: 'https://auth.fdc.jingyijun.xyz' },
            { text: '复读百科', link: 'https://docs.qq.com/doc/DR0lJYVhWcGZUa0lk' },
            { text: '资源库', link: 'https://cloud.fdc.jingyijun.xyz' },
            {
                text: '旦星 SPS',
                items: [
                    {
                        text: '旦星一号',
                        link: 'http://mc.fdc.jingyijun.xyz:20410/'
                    },
                    {
                        text: '旦星二号',
                        link: 'http://mc.fdc.jingyijun.xyz:20411/'
                    },
                    {
                        text: '旦星三号',
                        link: 'http://mc.fdc.jingyijun.xyz:27216/'
                    }
                ]
            },
            {
                text: '友情链接',
                items: [
                    {
                        text: '上海交通大学 Minecraft 社',
                        link: 'https://mc.sjtu.cn/'
                    },
                    {
                        text: '山商 Minecraft 煤炭社',
                        link: 'https://www.mualliance.ltd/archives/463'
                    },
                    {
                        text: '燕山大学 Minecraft 学生同好者协会',
                        link: 'https://www.ysumc.club/'
                    },
                    {
                        text: '塔里木大学方块协作社',
                        link: 'https://www.tarucraft.club/'
                    },
                    {
                        text: 'MUA',
                        link: 'https://mualliance.ltd/'
                    },
                    {
                        text: '牛腩小镇',
                        link: 'https://www.newnan.city/'
                    }
                ]
            }
        ],

        sidebar: {
            '/news/': [],
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
            '/guide/tutorial/survival_redstone': 'auto',
            '/guide/tutorial/crashreport/': [
                {
                    text: 'PL的崩溃报告宝典',
                    items: [
                        {
                            text: '首页',
                            link: '/guide/tutorial/crashreport/'
                        },
                        {
                            text: 'Episode1 崩溃报告和日志在哪里？',
                            link: '/guide/tutorial/crashreport/Episode1'
                        },
                        {
                            text: 'Episode2 认识崩溃报告',
                            link: '/guide/tutorial/crashreport/Episode2'
                        },
                        {
                            text: 'Episode3 崩溃报告分类',
                            items: [
                                {
                                    text: 'Mod Loading has failed',
                                    link: '/guide/tutorial/crashreport/Episode3-1'
                                },
                                {
                                    text: 'NoClassFound',
                                    link: '/guide/tutorial/crashreport/Episode3-2'                                    
                                }
                            ]
                        }                        
                    ]
                }
            ],
            '/': [
                {
                    text: '复读指南',
                    items: [
                        {
                            text: '复读公约',
                            link: '/guide/rules'
                        },
                        {
                            text: '新人指南',
                            link: '/guide/newbie'
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
                    items: [
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
        },
        footer: {
            // message: '基岩社欢迎你！',
            copyright: 'Copyright © 2020-present KYLN24 & 基岩社'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    }
}
