# 教程搬运

本页提供各类技术的教程搬运，欢迎投稿

## 一、【真·纯萌新指南】Minecraft 基本操作
> 本文主要内容
> 1. Minecraft Java 版的基本结构
> 2. 如何安装模组/材质包/光影/数据包
> 3. 对一些常用的基础辅助模组的介绍

对于首次入坑 Minecraft Java Edition 的同学来说，没有像网易版那样的一键安装 模组/材质包 的功能确实是个比较难适应的操作，本文旨在帮助纯小白快速入坑 Java 版 MC。

观前提示：为了增进对游戏的整体理解，以免产生不必要的麻烦，**建议通读全文**而非直接跳到 `如何安装模组/材质包/光影/数据包` 部分。

### Minecraft JE 的基本结构
  Minecraft JE 由 `账号-游戏本体-启动器` 三个部分组成
- 账号
  > Minecraft账号可以理解成玩家在游戏内显示的名称，主要有 `正版账号/离线账户/外置登陆` 三种相互独立的形式。

  *注：目前 FDCraft 用的是外置登陆模式，所以**无需购买**所谓的正版账号*
  - 正版账号
    - 玩家在 [Minecraft官网](https://minecraft.net) 通过 Microsoft 账号购买游戏后，你的 Microsoft 账号/密码即为你的 Minecraft 正版账号/密码，通过这个账号，你可以登陆像 Hypixel 这样的正版服务器，并且在 [Minecraft官网](https://minecraft.net) 更换皮肤/游戏昵称等。
  - 离线账户
    - 即所谓的“盗版”，一般只需要输入你所希望显示的游戏内昵称即可。通过离线账户可以无需付钱即可游玩 Minecraft。其优点是单机游玩体验和正版并无二致，但是缺点是只能加入一些无**正版验证**（即只有正版玩家才能进入的）的服务器游玩。
  - 外置登陆
    - 外置登陆需要使用一个第三方的**认证服务器**。认证服务器是一个用以代替 Microsoft 服务器的账号系统（即正版账号的认证服务器是 Microsoft 服务器），从而让特定群体的玩家能够登陆某个服务器。FDCraft 的“用户中心/皮肤站账号”就是和正版账号相互独立的外置登陆账号，使用 `fudan.edu.cn` 结尾的邮箱在 [用户中心](https://auth.fdc.hath.top/) 注册后，可以快捷的更换皮肤等。

- 游戏本体
  - 游戏的所有本体文件均位于 `.minecraft` 的文件夹内（在~~狗都不用的~~官方启动器的游戏目录内，该文件夹是默认隐藏的，我们不建议使用官方启动器），内含游戏的各种资源如：源文件、存档、资源包etc. 在 HMCL 启动器中，该文件夹又称为游戏目录，可以自行设置目录名称。【注：本文为了方便起见，均使用 `.minecraft` 文件夹来代指该目录文件夹，实际情况下可以根据你的用途自行更改】
  - 主要文件夹
  > - mods：存放模组文件
  > - resourcepacks：存放资源包/材质包文件
  > - saves：存放存档文件（每个地图都是saves下的一个子文件夹）
  > - shaderpacks：存放光影文件
  > - screenshots：存放按下 `F2` 后产生的的游戏内画面截图

- 启动器
  > 启动器可以看做是一个连接了账号和游戏本体文件的多功能平台，主要分为官方启动器和第三方启动器。
  - 官方启动器
    - 仅包含最基本功能的启动器，仅能够实现**正版登陆、下载各个游戏版本、更换正版皮肤、启动 Minecraft 衍生的其他游戏（如基岩版/地下城/Legends）**，但是由于国内的下载以及更新速度极慢，无版本隔离，也没有 `.minecraft` 文件夹的快捷打开入口，所以基本没人愿意去用，在此便不予以赘述。
  - 第三方启动器
    - 是由非官方人员编写、能够在官方启动器的基本功能的基础上，实现更多实用功能（如版本隔离，即不同版本的游戏使用不同的目录文件夹以防止mod冲突）的启动器。
    - 主流的第三方启动器有 [HMCL](https://hmcl.huangyuhui.net/)、[PCL2](https://afdian.net/@LTCat)、[MultiMC](https://multimc.org/)，其中前两者在国内的用户数较多，且支持外置登陆，界面也更加美观简洁。

### 模组/材质包/数据包介绍以及安装
- 模组
  > 模组安装在 `.minecraft/mods` 文件夹内，直接将下载好的 `模组名.jar` 文件拖入该文件夹下即可，然后在启动器内刷新，就可以看到被成功安装的模组。多数第三方启动器都具有开关模组的勾选功能，其实质其实只是把 `模组名.jar` 改成了 `模组名.disabled`。
  - 模组加载器：即大家常说的的 Fabric 和 Forge 这两个，它们的作用是提供一些原版所没有的额外功能接口，可以理解为**一般的模组都会指定这两者的*其中之一*作为前置**。一般来说，大型模组整合包多数使用 Forge，1.14+的辅助性模组用的多为更加简洁的 Fabric。不过请记住，**Forge 和 Fabric 不可共存**，你只能根据实际游玩的需要选择一个。
  - 多数第三方启动器都提供了在安装游戏的同时，一键安装 Fabric 或者 Forge 的功能。
  - 下载模组的常用网站有国外的 [Curseforge](https://www.curseforge.com/minecraft/mc-mods) 和国内的 [MCMod百科](https://www.mcmod.cn/)，可根据实际需要进行选择。
  > *请注意：Fabric 和 Fabric API 是两个东西，有些 Fabric 模组在安装了 Fabric 后还需要在 `mods` 文件夹中安装 [Fabric API](https://www.curseforge.com/minecraft/mc-mods/fabric-api)，这个信息一般会写在模组介绍的前几行，请注意查看。建议安装 Fabric 的同时直接一并安装 Fabric API，以免后续安装模组时产生不必要的麻烦。*
- 材质包
  - 材质包直接存放于 `.minecraft/resorcepacks` 下，**不解压也可以正常使用**。在网上下载后直接拖入该文件夹，进入 `游戏-视频设置-资源包` 界面即可开关材质包。
  - 上文提到的 [Curseforge](https://www.curseforge.com/minecraft/texture-packs) 同样有材质包的分区，其他网站如 [Planetminecraft](https://www.planetminecraft.com/) 也是很好的 Minecraft 资源网站。
- 数据包
  - 数据包是 Minecraft 1.16 新加入的功能，为玩家进一步定制其 Minecraft 体验提供了一种新方式。数据包可用于覆盖或添加新的进度、维度、函数、战利品表、谓词、配方、结构、标签、自定义世界生成和生物群系，而不进行任何代码修改（完全使用原版指令）。
  - 数据包**只作用于**安装了这个数据包的地图，即每个数据包存放于 `.minecraft/saves/地图名称/datapacks` 内，和资源包一样，也**无需解压便可以正常使用**。[Planetminecraft](https://www.planetminecraft.com/) 上收集的数据包较为全面，是较为主流的数据包来源网站。

### 高版本常用**辅助性**模组介绍
> 为方便起见，以下所有模组链接均为笔者更加熟悉的 Curseforge 链接，但是国内打开速度较慢，有需要请自行搜索其他下载源

- 【体素地图】 [VoxelMap](https://www.curseforge.com/minecraft/mc-mods/voxelmap)
  - 适用于 Minecraft 版本 1.12 ～ 1.17
  - 一个简洁易用的小地图模组，基本无学习成本，萌新易上手
- Xaero的地图套装
  - 【小地图】 [Xaero's Minimap](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap)
  - 【世界地图】 [Xaero's Worldmap](https://www.curseforge.com/minecraft/mc-mods/xaeros-world-map) 
  - Minecraft 全版本适用
  - 稍有学习成本的一个进阶小地图模组，具有非常丰富的可自定义项目，在高版本（1.17+）较为流行
- 【旅行地图】[JourneyMap](https://www.curseforge.com/minecraft/mc-mods/journeymap)
  - Minecraft 全版本适用
  - 老牌小地图模组，在较低版本整合包中非常常见

- 【背包整理】[Inventory Profile Next](https://www.curseforge.com/minecraft/mc-mods/inventory-profiles-next)
  - 适用于 Minecraft 版本 1.14.4-1.19
  - R键整理背包/容器
  - 工具耐久不够时，自动替换背包中耐久更高的工具
  - 快速移动整个背包/容器的物品

- 【Masa工具箱】——一系列方便生存的模组
  - 【Masa前置库】[Malilib](https://www.curseforge.com/minecraft/mc-mods/malilib)
    - 是下列所有模组共同需要安装的前置模组
  - 【物品滚轮】[Item Scroller](https://www.curseforge.com/minecraft/mc-mods/item-scroller)
    - 按住 shift 和鼠标左键并且拖动鼠标可以快速移动物品
    - 等等非常多的物品相关操作，在游戏内使用快捷键 `I+C` 进入设置菜单
  - 【Tweakeroo】[Tweakeroo](https://www.curseforge.com/minecraft/mc-mods/tweakeroo)
    - 一系列小工具的合集，很实用
    - 具体教程可以自行b站搜索Tweakeroo

## 二、Minecraft 进阶
### 红石

### 生电

### 建筑

## 三、服务器运维

### 核心(Server Core)

### 插件

### 网络

#### 内网穿透 - frp

#### 反向代理 - Nginx

## 四、新媒体技术

### 视频录制 - ReplayMod

### 3D 制作 - Blender

## 五、其他
