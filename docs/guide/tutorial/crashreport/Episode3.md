# Episode3 崩溃报告分类&解决方法

# 序言

> 面对崩溃时，你或许要准备好这些：
>
> 重启游戏；
>
> 更新Java、显卡驱动；
>
> 搞清楚你包里的模组特性，更新/卸载报告里提到的异常模组（并不推荐卸载）；
>
> 一个WE（创世神）插件或者其他的手段以变更出错的区块；
>
> 已经备份的近期存档；
>
> 一颗冷静的心。
>
> ——森林蝙蝠

MC的崩溃千奇百怪，在你见到某个崩溃之前可能都不会想到有这种崩溃方式。但实际上，非常多**在游戏过程中**发生的崩溃中，“嫌疑人”会被当场抓住并被记录到崩溃报告中；但是由于MC输出的崩溃报告可读性极差，很多玩家并不知道如何在崩溃报告去寻找这个记录。

## 通用分析方法

在几乎所有**在游戏过程中**发生的、部分在启动阶段时发生的崩溃中，如果MC正常输出了崩溃报告，有嫌疑的Mod就会被记录在崩溃报告的StackTrace中。

::: tip 提示

如果崩溃是在游戏过程中发生的，请务必询问崩溃发生的瞬间玩家在干什么。这有助于后续进行诊断并规避风险。

:::

一个例子：[crash-2022-03-12_22.50.26-server.txt](https://cloud.fdc.jingyijun.xyz/CrashReports/crash-2022-03-12_22.50.26-server.txt)

在StackTrace中，先去除一些显然无法改变的东西：

- java.
- jdk.
- oolloo.
- sun.reflect
- net.minecraftforge
- cpw.mods.modlauncher
- com.google
- 不带`re:mixin`字样的net.minecraft行
- 一切除了Optifine以外和底层有关的东西

如果去除掉这些还剩下些什么，就说明这种分析方法成功了；如果没剩下什么就说明失效，需要使用一些其他的方法。

在这个例子中，还剩下了这些东西：

```markdown
	at com.meteor.extrabotany.common
	at littleMaidMobX
	at WorldServerOF
```

如果你见多识广，`extrabotany`是额外植物学，`littleMaidMobX`是小女仆，`WorldServerOF`是Optifine。当然你也可以通过Bing来知道这些东西是什么。

由于这个崩溃的描述是`Description: Colliding entity with block`，必定与渲染无关，大概率没有Optifine的事情。因此这次崩溃的“元凶”就是额外植物学和小女仆。



如果崩溃是由mixin注入冲突导致的，最后会剩下许多末尾有一对花括号`{}`的开头为net.minecraft行。这是因为，有不少mod需要改变原版的代码，但是原版并不开源，不允许被直接修改，需要mixin在代码运行时进行注入来达到改变的目的。在`{}`内，记录了对这段代码进行注入的mod。一般来说第一个出现的mod就是造成崩溃的罪魁祸首（但并不绝对）。



## 通用解决方法

一种最简单的解决崩溃的思路是，我们可以选择禁用出错的模组，并在模组作者给出的交流渠道询问这个问题（如在Github上提Issue）；或者检查这个Mod（或者整合包）是否有新版本，新版本是否修复了这个bug（可以在Changelog中查看）。

::: tip 注意

很多时候直接删除并不是个好主意，因为你可能找错了罪魁凶手；一个更合理的方式通过启动器禁用该Mod或者把Mod的后缀名改为`.jar.disabled`来禁用该Mod。

:::

另一种方法需要一点点的经验。有一些报错会与特定的mod绑定，但那个mod不一定会在StackTrace中出现。如渲染问题“一定是Optifine干的！”对于所有渲染问题，都可以尝试禁用Optifine/Sodium来解决，而不一定要删除相应的mod。

