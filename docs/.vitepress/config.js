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
            //{ text: '动态', link: '/news/' },
            // { text: '世界树的故事', link: '/the-tree/' },
            { text: '关于', link: '/about/' },
            { text: '用户中心', link: 'https://auth.fdc.jingyijun.xyz' },
            { text: '复读百科', link: 'https://docs.qq.com/doc/DR0lJYVhWcGZUa0lk' },
            { text: '资源库', link: 'https://cloud.fdc.jingyijun.xyz' },
            //{
            //    text: '旦星 SPS',
            //    items: [
            //        {
            //            text: '旦星一号（暂不可用）',
            //            link: 'http://mc.fdc.jingyijun.xyz:20410/'
            //        },
            //        {
            //            text: '旦星二号（暂不可用）',
            //            link: 'http://mc.fdc.jingyijun.xyz:20411/'
            //        },
            //        {
            //            text: '旦星三号（暂不可用）',
            //            link: 'http://mc.fdc.jingyijun.xyz:27216/'
            //        }
            //    ]
            //},
            {
                text: '友情链接',
                items: [
                    {
                        text: '上海交通大学 Minecraft 社',
                        link: 'https://mc.sjtu.cn/'
                    },
                    {
                        text: 'MUA',
                        link: 'https://mualliance.ltd/'
                    },
                    {
                        text: '牛腩小镇',
                        link: 'https://www.newnan.city/'
                    },
                    {
                        text: 'Christina Network',
                        link: 'https://christina.network/'
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
                            text: 'Episode3 崩溃报告分类&解决方法',
                            items: [
                                {
                                    text: '序言',
                                    link: '/guide/tutorial/crashreport/Episode3'
                                },
                                {
                                    text: 'Mod Loading has failed',
                                    link: '/guide/tutorial/crashreport/Episode3-1'
                                },
                                {
                                    text: 'NoClassFound',
                                    link: '/guide/tutorial/crashreport/Episode3-2'                                    
                                },
                                {
                                    text: 'Invalid id 4096',
                                    link: '/guide/tutorial/crashreport/Episode3-3'                                    
                                }                                
                            ]
                        },
                        {
                            text: 'Episode4 圣经',
                            link: '/guide/tutorial/crashreport/Episode4'
                        }
                    ]
                }
            ],
            '/': [
                {
                    text: '复读指南',
                    items: [
                        {
                            text: '新人指南',
                            link: '/guide/'
                        },
                        {
                            text: '复读公约',
                            link: '/guide/rules'
                        },
                        {
                            text: '第一天',
                            link: '/guide/newbie'
                        }
                    ]
                }, {
                    text: '资料查询',
                    items: [
                        {
                            text: '数据包列表',
                            link: '/guide/datapacks'
                        },
                        {
                            text: '旦星 SPS',
                            link: '/guide/sps'
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
                            text: 'Bot帮助',
                            link: '/guide/bot'
                        },
                        {
                            text: '教程搬运',
                            link: '/guide/learnspace'
                        }
                    ]
                }
            ]
        },
        footer: {
            // message: '基岩社欢迎你！',
            copyright: 'Copyright © 2020-present FDCraft & 基岩社'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    }
}
