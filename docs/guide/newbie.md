# 新人指南

欢迎来到 FDCraft｜复读世界𒆙！

FDCraft 是一个以原版生存为主的插件服务器，主要面向复旦大学的学生。

::: tip 骨干招募

以下工作正在寻找协作者：

1. Minecraft 服务器相关：网络运维、插件开发、活动策划等
2. 新媒体宣传运营：视频制作、公众号编辑等

有意了解或加入者，请与腐竹联系。
:::

## 取得联系

首先，请通过微信公众号“复旦大学学生社团”访问社团系统，搜索“基岩社”加入社团。

然后，请加入我们的 QQ 群

> QQ 群：[1037308494](https://qm.qq.com/cgi-bin/qm/qr?k=5UByHLWaGmk0sAgFSGGYx78F_zgiArVk&jump_from=webapi)

## 进入服务器

系统要求：见 [Minecraft 官网](https://www.minecraft.net/zh-hans/store/minecraft-java-edition#features2)

### 在此之前

FDCraft｜复读世界𒆙采用自建账户系统登录，不进行正版验证和防沉迷认证。请前往 [FDCraft 用户中心](https://auth.fdc.hath.top)，使用复旦大学域名下的邮箱注册 FDCraft 账号。

Minecraft: Java Edition 需要 Java 运行时支持。请确保你的电脑上安装了正确版本的 Java Runtime Environment 或 Java Development Kit 并已正确配置 PATH。如果没有安装，可以前往 [Oracle Java 官方网站](https://www.oracle.com/java/technologies/downloads)下载安装。

### 配置客户端（Java 版）

分为开箱即用版、进阶定制版与高级定制版。请根据自身对 Minecraft: Java Edition 程序结构的理解程度选择阅读。

> **如何选择？**
>
> 开箱即用版：下载后可以直接登录账号、运行游戏并进入服务器，无需其他特殊操作。包内集成了 Fabric、Optifine 以及一些常用的 mod。
>
> 进阶定制版：支持使用部分其他启动器（如以前自己玩 Minecraft 时使用的启动器）登录 FDCraft 账号、运行游戏并进入服务器。自己以往的 mod 及配置等均可得到保留。需要一定的额外操作。
>
> 高级定制版：支持所有能自定义 Java 启动参数的启动器。适合对 Minecraft 正版验证机制、authlib-injector 及 yggdrasil 很熟悉的用户。需要诸多额外操作，并且可能需要自己解决许多未知的问题。

#### 教程｜开箱即用版

1. 前往群文件`FDCraft 客户端`文件夹，下载最新版的`FDCraft 启动器`
2. 解压得到`FDCraft`文件夹，放到合适的位置
3. 运行`FDCraft`文件夹中的`HMCL.exe`，如果是 macOS 或 Linux 用户，请将`HMCL.exe`直接改名为`HMCL.jar`后运行
4. 在弹出的窗口中，登录你在准备工作步骤中使用复旦大学域名邮箱注册的 FDCraft 账号
5. 在启动器中运行 FDCraft 版本（首次启动需要下载依赖库与资源文件，可能会使用较多时间，请耐心等待，后续启动速度将会大幅提升）
6. 游戏成功启动后，请在多人游戏中选择`FDCraft`（推荐） 或`FDCraft - IP直连`
7. 开始冒险吧！

#### 教程｜进阶定制版

本教程支持的启动器有：

1. Plain Craft Launcher 2 (PCL II)
2. Hello Minecraft! Launcher (HMCL)
3. BakaXL
4. 其他支持外置登录/authlib-injector登录/第三方登录/...的启动器

以 PCL II 为例

1. 打开 PCL II 启动器，确保已安装正确的游戏版本（见[关于 - 【主服】FDCraft｜复读世界𒆙 - 兼容版本](/about/#【主服】FDCraft｜复读世界𒆙)）
2. 在启动器中选择正确的 Minecraft 版本（一般来说，我们推荐使用和服务器特性版本相同的客户端，但实际上更高版本的客户端也是可以进入的）
3. 在`版本设置`-`设置`-`服务器选项`中，`登录方式`选择`第三方登录：Authlib Injector 或 Little Skin`，认证服务器见（见[关于 - 服务器概况 - 认证服务器地址](/about/#服务器概况)）
4. 回到 PCL II 首页，登录你的 FDCraft 账号并启动游戏
5. 选择多人游戏，添加服务器（地址见[关于 - 【主服】FDCraft｜复读世界𒆙 - Java 版地址](/about/#【主服】FDCraft｜复读世界𒆙)）
6. 开始冒险吧！

#### 教程｜高级定制版

::: warning
目前没有任何一位同学成功过，请谨慎尝试。
:::

请参考 [authlib-injector: wiki - 启动器规范](https://github.com/yushijinhun/authlib-injector/wiki/%E5%90%AF%E5%8A%A8%E5%99%A8%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83)自行配置。

### 配置客户端（基岩版）

FDCraft｜复读世界𒆙 通过 Geyser 提供基岩版支持。你可以使用任何平台的基岩版客户端进入服务器。但主机平台的操作略显复杂。

#### Windows / iOS / Android

::: danger
不支持任何形式的网易版！
:::

1. 打开基岩版客户端，添加服务器（地址见[关于 - 【主服】FDCraft｜复读世界𒆙 - 基岩版地址](/about/#【主服】FDCraft｜复读世界𒆙)）
2. 进入服务器，选择“使用 MOJANG 账户登录”
3. 接下来的窗口中，输入你刚刚注册的 FDCraft 账户邮箱及密码
4. 开始冒险吧！

#### Xbox One / Nintendo Switch / PlayStation 4

参见 https://github.com/Pugmatt/BedrockConnect

---

恭喜你！至此，你已经成功进入服务器了。接下来，请参考["第一天"](/guide/)中的内容快速了解本服务器的基本情况。
