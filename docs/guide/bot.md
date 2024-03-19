# Bot帮助

## 互通（ChatBridge）!!

互通命令仅在互通QQ群以及KOOK的聊天互通频道中生效。服务器内查看图片请安装 ChatImage 模组。

| 指令 | 返回内容                          |
| ----------------- | --------------------------------- |
| !!help            | 查看指令帮助                      |
| !!ping            | pong!!                            |
| !!online          | 查看FDC在线人数                   |
| !!stats           | 显示FDC的一些统计信息，具体见帮助 |
| !!info            | 显示服务器状态                    |

## 百橙（Sorabot）#

暂时使用 Nonebot 实现。请查看 [Sorabot使用指南](https://100oj.com/zh/%E5%B7%A5%E5%85%B7/SoraBot%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97)（有部分出入）或者输入 `#help` 查看

## Fufu（Nonebot）无指令头

### MC

| 指令                     | 返回内容                 |
| ------------------------ | ------------------------ |
| mcstatus                 | MC服务器状态查询         |
| mcver                    | MC最新版本查询           |
| leavesver                | Leaves服务端最新版本查询 |

### B站推送

见 https://github.com/Well2333/nonebot-plugin-bilichat 。

### 骰子娘

见 https://github.com/abrahum/nonebot_plugin_cocdicer 。

### 表情包

| 指令 | 返回内容                          |
| ----------------- | --------------------------------- |
| capoo            | 随机capoo               |
| 龙图 [num]      | 随机龙图                          |
| neko      | 随机猫猫                |
| cat [code]    | HTTP猫猫 |
| bunny        | 随机小兔兔               |
| 白圣女 \| bsn | 随机白圣女 |
| 来点fufu \| pl | 随机fufu |
| 小狐狸 \| kemomimi | 随机kemomimi |
| 甘城猫猫 \| Nacho | 随机甘城猫猫/猫羽雫 |
| 狗妈 \| nana | 随机狗妈 |
| pusheen | 随机pusheen猫 |
| 小鹦鹉 \| xyw | 随机小鹦鹉/小黄鸡 |

### 文字

| 指令                                                 | 返回内容       |
| ---------------------------------------------------- | -------------- |
| 疯狂星期[一二三四五六日] \| 狂乱[月火水金木土日]曜日 | 疯狂星期四文案 |
| 每日发电 [target]                                    | 发电文案       |
| rzb                                                  | 弱智吧语录     |
| 今天吃什么 \| 今天喝什么                             | 今天吃什么     |

### 娱乐

| 指令                                                         | 返回内容                       |
| ------------------------------------------------------------ | ------------------------------ |
| wordle -d [dict] -l [word_length]                            | wordle                         |
| handle                                                       | 汉兜                           |
| maze [-r --rows <ROWS>] [-c --cols <COLUMNS>]                | 走迷宫，使用WASD，转角自动转   |
| ^(?=.\*[a-zA-Z])(?=.\*_)[a-zA-Z_]+(#(?=[a-zA-Z]+$)[a-zA-Z]\*)?$ | wordle帮助，大概长成`_cho#abd` |

### 杂项

| 指令                    | 返回内容         |
| ----------------------- | ---------------- |
| batitle [text]\|[text2] | 碧蓝档案标题生成 |
| [emoji]+[emoji]         | Emoji合成        |
| muteme                  | 禁言自己         |