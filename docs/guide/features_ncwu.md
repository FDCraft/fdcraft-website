# 服务器特性&指令介绍

## 服务器保护

- Ledger & TheStarryGuard提供的核心保护
  - 记录方块变化与箱子变化（查箱子呼叫op）

| 指令       | 描述                                                       |
| ---------- | ---------------------------------------------------------- |
| /tsg check | 开启查询模式，再次输入指令关闭。可以查询某处方块变化的记录 |
| /tsg near  | 查询附近的方块变化。                                       |
| /tsg page  | 查询全局的方块变化。                                       |

- Creeper Firework 提供的地图保护
  - 苦力怕爆炸不破坏地形（但依然造成伤害并摧毁掉落物）
  - 苦力怕爆炸放出烟花（若客户端安装了Creeper Firework）

## 生电

### Carpet

- Carpet主体
  - 假人
  - TAB菜单显示
  - 经验吸收无冷却
  - 仙人掌扳手
- Carpet-Extra
  - Carpet精准放置协议
  - 更新抑制防崩
- Carpet-TIS-Addition
  - 光照线程同步
- GCA
  - 空手右键假人打开假人背包&潜行右键打开末影箱
  - 服务器重启假人驻留
  - 假人补货
  - 假人钓鱼
- PCA
  - [PCA](https://github.com/plusls/plusls-carpet-addition) 数据同步协议
- Carpet-AMS-Addition
  - 末影龙优化

### 其他 Mod

- Carpet 精确放置协议
- [Syncmatica](https://github.com/End-Tech/syncmatica) 共享原理图
- [AppleSkin](https://github.com/squeek502/AppleSkin) 饱食度显示
- [Xaero's World Map](https://minecraft.curseforge.com/projects/xaeros-world-map) 和 [Xaero's Minimap](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap) 地图自动识别
- Minihud 结构显示 & 服务器信息同步

## 传送

| 指令                  | 描述                                                     |
| --------------------- | -------------------------------------------------------- |
| /home \<homes\>       | 传送到家的位置。如果你有多个家，则后面的参数是必需的。   |
| /sethome \<name\>     | 在当前位置设置家。                                       |
| /delhome \<name\>     | 删除一个你创建的家。                                     |
| /tpa \<player\>       | 请求传送到指定的玩家。                                   |
| /tpahere              | 请求指定玩家传送到你的位置。                             |
| /tpaall               | 请求所有在线玩家传送到你的位置。                         |
| /tpaccept             | 接受传送请求。                                           |
| /tpacancel \[player\] | 取消所有待处理的传送请求。指定\[player\]来取消他的请求。 |
| /back                 | 传送你至先前的位置。                                     |
| /spawn                | 传送至出生点。                                           |

## 点歌

**注意：需要在客户端上安装与mc版本匹配的[AllMusic](https://www.aliyundrive.com/s/fKHnLh1N5nC/folder/640065ce9bfc693744db43e99b3f8faa737c32d1)才能听歌。**

| 指令                            | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| /music help                     | 获取点歌台的指令列表。                                       |
| /music \<音乐ID\>               | 使用音乐id点歌，这个方法能准确地点歌，不会点错。             |
| /music search                   | 使用歌曲名搜索歌曲，这种方法无需查找id，但是容易点错。       |
| /music select \<序号\>          | 点相应序号的歌曲。                                           |
| /music nextpage                 | 翻到下一页。                                                 |
| /music lastpage                 | 翻到上一页。                                                 |
| /music vote                     | 发起投票切歌。如果已经有人发起了投票，输入/music vote来同意。若30秒内，包括发起者在内共有2个人同意切歌，则会切歌，否则仍播放当前歌曲。 |
| /music list                     | 查看信息更为详细的歌曲列表。在点歌台的Hud能看到较为粗略的点歌列表。 |
| /music hud \<type\> \<x\> \<y\> | 设置各种hud的显示位置，默认为左中。type有4个可选项。info：歌曲信息， pic：专辑封面，lyric：歌词，list：播放列表。x与y的值请自行进行调试。 |
| /music hud enabld \<type\>      | 开启/关闭相应的hud。                                         |
| /music hud picsize \<size\>     | 调整专辑封面的大小。                                         |
| /music hud reset                | 重置**所有**关于hud的设置。                                  |

## 椅子

面朝下方按潜行键即可召唤“椅子”，右键坐下。再按潜行起身。

## 作物收获

手持锄头右键作物可以收获作物。
