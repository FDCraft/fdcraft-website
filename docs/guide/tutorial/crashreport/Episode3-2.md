# NoClassFound

这一类报错的特征是抛出以下两种异常： 

```java
java.lang.NoClassDefFoundError
java.lang.ClassNotFoundException
```

此外还经常伴随空指针异常`java.lang.NullPointerException`。

当发生这个错误时，Minecraft不一定会生成崩溃报告。即使有，其报错描述往往是下面这句没有任何有效信息的话:

```markdown
Description: There was a severe problem during mod loading that has caused the game to fail
```

如果你在各种日志文件（latest.log / minecraft.log）的末尾发现了同样的异常，那么这个崩溃同样是这个类型。

从其字面意思上看，这个报错的意思是没有找到类，按理是Mod的代码出现了问题；但是这个错误经常是在一个Mod引用其他的Mod的类时发生的。

## 前置缺失

一个可能的原因是缺少了某个前置Mod，而且这个Mod往往是个核心Mod。这使得MC没有输出崩溃报告，且抛出了一个不太一样的异常。

一个由缺少CCC引起报错的例子：[minecraft-1.log](https://cloud.fdc.jingyijun.xyz/CrashReports/minecraft-1.log)

一个由缺少MixinBooter引起的报错的例子：[minecraft-2.log](https://cloud.fdc.jingyijun.xyz/CrashReports/minecraft-2.log)

## 乱改文件名

**来，上圣经！**

[大佬帮忙看下游戏启动崩溃问题 - 崩溃解答 - MC百科](https://bbs.mcmod.cn/thread-4159-1-1.html)

如果你发现玩家明明装了前置Mod，却还是报了这个异常，你就要翻到最下方的Mod List，看看这个玩家的Mod文件名是什么。如果出现了**中文前缀**，很有可能就是因此引起的。

这个问题出现的逻辑是这样的：

- FML搜索Mods文件夹，找到了两个相关（依赖或者联动）的Mod，从而通过最开始的检查 / 加载联动内容。

- FML按照**文件名顺序**一个个加载Mod，由于中文前缀，Mod的加载顺序变得混乱。

- 在加载到那个有依赖 / 联动的Mod时，本应先加载的被依赖 / 被联动的Mod却没有被加载。FML没有找到被依赖 / 被联动的Mod的相应类从而抛出异常。

（FML：奇怪，我明明看到了有那个Mod，为啥加载的时候就找不到了呢？）

这个问题一般发生在一些旧版本Mod上，它们高度依赖Mod的加载顺序，而加载顺序的混乱导致了崩溃的发生。解决方案是将相应的Mod的名字改成它原本的样子（从CurseForge或Modrinth上下载下来的文件名）。

（这也是MixinBooter的文件名变来变去，最后变成`!mixinbooter-XXX.jar`的原因。非常多Mod使用了mixin，为了防止猪鼻Mod，MixinBooter特意加上英文感叹号来使自己第一个加载。）

可惜的是，总有玩家 / 整合包作者把下载的Mod加上中文前缀，甚至把原本的名字删除，导致不知道哪个文件是哪个Mod；总有启动器 / 网站给Mod加上该死的中文前缀。 在当下，这样做一般不会导致崩溃的发生。因为Forge官方与许多Mod作者做出了妥协，修改了相关的逻辑。但是中文文件名依然会带来潜在的崩溃风险，正确对待文件名的方式依然是不去修改文件名，下载下来是什么就是什么。

顺带一提，有时候MC的安装目录中有中文会导致MC没有声音。解决方案是将MC安装在一个没有中文名的文件目录中（尤其注意用户名中的中文，因此不建议将MC安装在用户文件夹下）。 

## Mod有Bug

这种情况在开发环境中更多见。一个Mod使用了自己的类却没找到，说明这个Mod写出了Bug。

解决方法是将Mod给禁用掉并在Github上提Issue，或者尝试将Mod更新至最新版。

