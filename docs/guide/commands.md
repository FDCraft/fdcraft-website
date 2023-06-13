# 指令帮助

## Velocity跨服

| 指令          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| /server [tag] | 切换至FDC下的各个子服（如fdp、ppf），或在其他学校的服务器内切换子服。 |
| */hub*        | 如果你从[联合大厅](/about/server)进入FDC，可以通过这个指令切换至其他学校的服务器。 |

## Bukkit插件指令

 ::: tip 

WorldEdit与TwkBezierTemplate的指令不会在此处列出，请前往[教程搬运](/guide/learnspace)查看相应教程。

 :::

### 消息

| 指令  | 描述                           |
| ----- | ------------------------------ |
| /msg  | 发送私信给指定玩家。           |
| /me   | 以第三人称描述一件事。         |
| /r    | 快速回复回复你的最后一位玩家。 |
| /mail | 管理玩家在服务器内的邮件。     |
| /say  | 说话！                         |

### 信息

| 指令     | 描述                                 |
| -------- | ------------------------------------ |
| /near    | 列出一位玩家附近（或半径内）的玩家。 |
| /ping    | 啪！                                 |
| /mspt    | 查看服务器当前的MSPT。               |
| /depth   | 指出你当前相对于海平面的位置。       |
| /rules   | 查看服务器的规则。                   |
| /list    | 显示所有在线玩家。                   |
| /compass | 描述你当前的方位。                   |
| /getpos  | 获取你（或某一玩家）的当前坐标。     |

### 传送

| 指令                | 描述                                                     |
| ------------------- | -------------------------------------------------------- |
| /home \<homes\>      | 传送到家的位置。如果你有多个家，则后面的参数是必需的。   |
| /sethome \<name\>    | 在当前位置设置家。                                       |
| /delhome \<name\>    | 删除一个你创建的家。                                     |
| /tpa \<player\>      | 请求传送到指定的玩家。                                   |
| /tpahere            | 请求指定玩家传送到你的位置。                             |
| /tpaall             | 请求所有在线玩家传送到你的位置。                         |
| /tpaccept           | 接受传送请求。                                           |
| /tpacancel \[player\] | 取消所有待处理的传送请求。指定\[player\]来取消他的请求。 |
| /back               | 传送你至先前的位置。                                     |
| /spawn              | 传送至出生点。                                           |

### 点歌

**注意：需要在客户端上安装与mc版本匹配的[AllMusic](https://www.aliyundrive.com/s/fKHnLh1N5nC/folder/640065ce9bfc693744db43e99b3f8faa737c32d1)才能听歌。**

| 指令      | 描述 |
| ---------- | ------------------------------------------------------ |
| /music help | 获取点歌台的指令列表。 |
| /music \<音乐ID\> | 使用音乐id点歌，这个方法能准确地点歌，不会点错。 |
| /music search | 使用歌曲名搜索歌曲，这种方法无需查找id，但是容易点错。 |
| /music select \<序号\> | 点相应序号的歌曲。 |
| /music nextpage | 翻到下一页。 |
| /music lastpage | 翻到上一页。 |
| /music vote | 发起投票切歌。如果已经有人发起了投票，输入/music vote来同意。若30秒内，包括发起者在内共有2个人同意切歌，则会切歌，否则仍播放当前歌曲。 |
| /music list | 查看信息更为详细的歌曲列表。在点歌台的Hud能看到较为粗略的点歌列表。 |
| /music hud \<type\> \<x\> \<y\> | 设置各种hud的显示位置，默认为左中。type有4个可选项。info：歌曲信息， pic：专辑封面，lyric：歌词，list：播放列表。x与y的值请自行进行调试。 |
| /music hud enabld \<type\> | 开启/关闭相应的hud。 |
| /music hud picsize \<size\> | 调整专辑封面的大小。 |
| /music hud reset | 重置**所有**关于hud的设置。 |

### 椅子插件

| 指令       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| /sit       | 在当前位置坐下。也可以空手右键台阶或者楼梯来在那个位置坐下。 |
| /lay       | 在当前位置躺下。躺下的方向与你的朝向相同。                   |
| /crawl     | 爬！                                                         |
| /bellyflop | 变成鞘翅飞行的模样，与/crawl有点像。                         |
| /spin      | 旋转吧，雪月花！                                             |

### 旦星一号

| 指令                | 描述                                                     |
| ------------------- | -------------------------------------------------------- |
| /dynmap webregister | 获取旦星一号地空通信的注册码。                           |
| /dmarker            | 进行旦星一号的标记点操作，具体见[旦星一号](/guide/sps)。 |

### 其他

| 指令     | 描述                                         |
| -------- | -------------------------------------------- |
| /kit     | 获取指定的物品包（或查看所有可用的物品包）。 |
| /suicide | 自决。                                       |
| /afk     | 将你标记为暂时离开。                         |

## Leaves 假人指令

FDC使用的是由服务端Leaves提供的假人系统，假人的总指令为 `/bot`。它的使用与Carpet的假人系统有着非常大的不同。

**指令列表与说明参见[Leaves Fakeplayer](https://docs.leavesmc.top/zh/leaves/fakeplayer)。**

## MCDR指令

[MCDR](https://github.com/Fallen-Breath/MCDReforged)是一个基于python的服务端控制工具，可以给原版端或者其他服务端提供一些插件的支持.由于通过监听服务器内的聊天消息来识别指令，MCDR的指令标识与其他指令不同，一般为`!!XXXX`

### Task任务清单

非常好用的分锅插件（

| 指令                                           | 描述                               |
| ---------------------------------------------- | ---------------------------------- |
| !!task                                         | 显示任务概览。                     |
| !!task help                                    | 获取任务清单插件的指令列表。       |
| !!task overview                                | 显示任务概览，同`!!task`。         |
| !!task list                                    | 显示完整的任务清单。               |
| !!task list-all \<task\>                       | 显示完整的任务清单（包括子任务）。 |
| !!task detail \<task\>                         | 显示某个任务的详细信息。           |
| !!task add \<task\> \[description\]            | 添加一个任务与其描述。             |
| !!task remove/rm/delete/del \<task\>           | 删除某个任务。                     |
| !!task rename \<old task\> \<new task\>        | 重命名某个任务。                   |
| !!task change \<task\> \<new description\>     | 修改某个任务的描述。               |
| !!task done \<task\>                           | 将某个任务标记为完成。             |
| !!task undone \<task\>                         | 将某个任务标记为未完成。           |
| !!task deadline \<task\> \<period: day\>       | 设置某个任务的ddl。                |
| !!task deadline \<task\> clear                 | 清除某个任务的ddl。                |
| !!task priority \<task\> \<priority\>          | 设置某个任务的优先级。             |
| !!task player \<task\>                         | 查看某个玩家的任务列表。           |
| !!task res/responsible \<task\> \<player\>     | 设置某个任务的负责人。             |
| !!task unres/unresponsible \<task\> \<player\> | 删除某个任务的负责人。             |

### Stats数据统计

::: tip
FDC的建筑榜不是由这个插件构建的，不适用这里的命令。
:::

| 指令                                                         | 描述                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------- |
| !!stats                                                      | 显示Stats的帮助信息。                                |
| !!stats save <代名> <统计类别> <统计内容> <标题>             | 保存一个统计某个统计内容的快速计分板。               |
| !!stats del <代名>                                           | 移除某个快速计分板。                                 |
| !!stats list                                                 | 列出已保存的快速计分板。                             |
| !!stats query <玩家> <统计类别> <统计内容> [< -uuid>] [< -tell>] | 查询某个玩家某个统计内容的数值。                     |
| !!stats query <玩家> <代名> [< -uuid>] [< -tell>]            | 查询某个玩家某个快速计分板的数值。                   |
| !!stats rank <统计类别> <统计内容> [< -tell>]                | 在聊天栏显示某个统计内容的排行。                     |
| !!stats rank <代名> [< -tell>]                               | 在聊天栏显示某个快速计分板的排行。                   |
| !!stats scoreboard <统计类别> <统计内容> (标题)              | 显示一个一个统计某个统计内容的快速计分板，但不保存。 |
| !!stats scoreboard <代名>                                    | 显示某个快速计分板。                                 |
| !!stats scoreboard show                                      | 显示该插件的计分板。                                 |
| !!stats scoreboard hide                                      | 隐藏该插件的计分板                                   |

#### 参数说明

| 参数       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| <统计类别> | killed, killed_by, dropped, picked_up, used, mined, broken, crafted, custom |
| <统计内容> | killed, killed_by：生物ID                                    |
|            | picked_up, used, mined, broken, crafted：物品/方块ID         |
|            | custom：详见统计信息的json文件，或 [MC Wiki](https://minecraft.fandom.com/zh/wiki/统计信息) |
|            | 上述内容无需带`minecraft:`前缀                               |
| [< -uuid>] | 用uuid替换玩家名。                                           |
| [< -tell>] | 仅自己可见。                                                 |

### 其他

| 指令       | 描述                                   |
| ---------- | -------------------------------------- |
| !!jrrp     | 获取今日人品！                         |
| !!joinMOTD | 显示入服欢迎。                         |
| !!day      | 查询开服时间。                         |
| !!hitokoto | 获取一句[一言](https://hitokoto.cn/)！ |

