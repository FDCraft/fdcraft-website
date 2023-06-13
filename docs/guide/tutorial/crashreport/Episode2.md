# Episode2 认识崩溃报告

现在，我们找到了崩溃报告和日志，那么应该如何找到报错，进行诊断呢？

没有崩溃报告的日志的诊断相对困难，我们先来讲讲崩溃报告。假定现在我们有一个crash-XXX.txt文件。

::: tip 注意

有时候MC输出了崩溃报告，但是由于启动器打包出错/玩家只发了日志，你可能没法获取到crash-report文件。

这时候你可以尝试在日志中搜索 `---- Minecraft Crash Report ----` 来找到崩溃报告。

没有找到也是正常的，此时你面对的就是个没有崩溃报告的日志。

:::

## 文件名

一个正常的崩溃报告的文件名应该是长下面这样的：

crash-2023-01-02_06.11.37-server.txt

其中`2023-01-02_06.11.37`是时间戳，而`server`则表明发生错误的是服务端。类似的，`client`表明客户端，`fml`表明Forge Mod Loader。

一般来说，发生错误的地方与其错误类型是相对应的。例如在`fml`发生的错误往往是Forge损坏 / Mod损坏 / 前置缺失，不可能是渲染问题等。

## 崩溃报告结构

下面是一个比较典型的崩溃报告：

[crash-2023-01-28_17.16.47-fml.txt](https://cloud.fdc.jingyijun.xyz/CrashReports/crash-2023-01-28_17.16.47-fml.txt)

::: details 我不建议你在这里看

```markdown
---- Minecraft Crash Report ----
// Don't be sad, have a hug! <3

Time: 23-1-28 下午5:16
Description: Mod loading error has occurred

java.lang.Exception: Mod Loading has failed
	at net.minecraftforge.fml.CrashReportExtender.dumpModLoadingCrashReport(CrashReportExtender.java:71) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading}
	at net.minecraftforge.fml.client.ClientModLoader.completeModLoading(ClientModLoader.java:174) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:runtimedistcleaner:A}
	at net.minecraft.client.Minecraft.lambda$null$1(Minecraft.java:508) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:accesstransformer:B,pl:runtimedistcleaner:A}
	at net.minecraft.util.Util.ifElse(Util.java:320) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading}
	at net.minecraft.client.Minecraft.lambda$new$2(Minecraft.java:504) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:accesstransformer:B,pl:runtimedistcleaner:A}
	at net.minecraft.client.gui.ResourceLoadProgressGui.render(ResourceLoadProgressGui.java:113) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:runtimedistcleaner:A}
	at net.minecraft.client.renderer.GameRenderer.render(GameRenderer.java:481) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:accesstransformer:B,pl:runtimedistcleaner:A}
	at net.minecraft.client.Minecraft.runTick(Minecraft.java:977) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:accesstransformer:B,pl:runtimedistcleaner:A}
	at net.minecraft.client.Minecraft.run(Minecraft.java:607) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:accesstransformer:B,pl:runtimedistcleaner:A}
	at net.minecraft.client.main.Main.main(Main.java:184) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:runtimedistcleaner:A}
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:1.8.0_341] {}
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[?:1.8.0_341] {}
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[?:1.8.0_341] {}
	at java.lang.reflect.Method.invoke(Method.java:498) ~[?:1.8.0_341] {}
	at net.minecraftforge.userdev.FMLUserdevClientLaunchProvider.lambda$launchService$0(FMLUserdevClientLaunchProvider.java:38) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {}
	at cpw.mods.modlauncher.LaunchServiceHandlerDecorator.launch(LaunchServiceHandlerDecorator.java:37) [modlauncher-8.1.3.jar:?] {}
	at cpw.mods.modlauncher.LaunchServiceHandler.launch(LaunchServiceHandler.java:54) [modlauncher-8.1.3.jar:?] {}
	at cpw.mods.modlauncher.LaunchServiceHandler.launch(LaunchServiceHandler.java:72) [modlauncher-8.1.3.jar:?] {}
	at cpw.mods.modlauncher.Launcher.run(Launcher.java:82) [modlauncher-8.1.3.jar:?] {}
	at cpw.mods.modlauncher.Launcher.main(Launcher.java:66) [modlauncher-8.1.3.jar:?] {}
	at net.minecraftforge.userdev.LaunchTesting.main(LaunchTesting.java:94) [forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {}


A detailed walkthrough of the error, its code path and all known details is as follows:
---------------------------------------------------------------------------------------

-- Head --
Thread: Render thread
Stacktrace:
	at net.minecraftforge.fml.CrashReportExtender.lambda$dumpModLoadingCrashReport$7(CrashReportExtender.java:74) ~[forge:?] {re:classloading}
-- NO MOD INFO AVAILABLE --
Details:
	Mod File: NO FILE INFO
	Failure message: The Mod File C:\Users\Roland\Desktop\workspace\ModProject\forge\forge-1.16.5-36.2.39-mdk\out\production\resources has mods that were not found
	Mod Version: NO MOD INFO AVAILABLE
	Mod Issue URL: NOT PROVIDED
	Exception message: MISSING EXCEPTION MESSAGE
Stacktrace:
	at net.minecraftforge.fml.CrashReportExtender.lambda$dumpModLoadingCrashReport$7(CrashReportExtender.java:74) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading}
	at java.util.ArrayList.forEach(ArrayList.java:1259) ~[?:1.8.0_341] {}
	at net.minecraftforge.fml.CrashReportExtender.dumpModLoadingCrashReport(CrashReportExtender.java:72) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading}
	at net.minecraftforge.fml.client.ClientModLoader.completeModLoading(ClientModLoader.java:174) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:runtimedistcleaner:A}
	at net.minecraft.client.Minecraft.lambda$null$1(Minecraft.java:508) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:accesstransformer:B,pl:runtimedistcleaner:A}
	at net.minecraft.util.Util.ifElse(Util.java:320) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading}
	at net.minecraft.client.Minecraft.lambda$new$2(Minecraft.java:504) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:accesstransformer:B,pl:runtimedistcleaner:A}
	at net.minecraft.client.gui.ResourceLoadProgressGui.render(ResourceLoadProgressGui.java:113) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:runtimedistcleaner:A}
	at net.minecraft.client.renderer.GameRenderer.render(GameRenderer.java:481) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:accesstransformer:B,pl:runtimedistcleaner:A}
	at net.minecraft.client.Minecraft.runTick(Minecraft.java:977) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:accesstransformer:B,pl:runtimedistcleaner:A}
	at net.minecraft.client.Minecraft.run(Minecraft.java:607) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:accesstransformer:B,pl:runtimedistcleaner:A}
	at net.minecraft.client.main.Main.main(Main.java:184) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading,pl:runtimedistcleaner:A}
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:1.8.0_341] {}
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[?:1.8.0_341] {}
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[?:1.8.0_341] {}
	at java.lang.reflect.Method.invoke(Method.java:498) ~[?:1.8.0_341] {}
	at net.minecraftforge.userdev.FMLUserdevClientLaunchProvider.lambda$launchService$0(FMLUserdevClientLaunchProvider.java:38) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {}
	at cpw.mods.modlauncher.LaunchServiceHandlerDecorator.launch(LaunchServiceHandlerDecorator.java:37) [modlauncher-8.1.3.jar:?] {}
	at cpw.mods.modlauncher.LaunchServiceHandler.launch(LaunchServiceHandler.java:54) [modlauncher-8.1.3.jar:?] {}
	at cpw.mods.modlauncher.LaunchServiceHandler.launch(LaunchServiceHandler.java:72) [modlauncher-8.1.3.jar:?] {}
	at cpw.mods.modlauncher.Launcher.run(Launcher.java:82) [modlauncher-8.1.3.jar:?] {}
	at cpw.mods.modlauncher.Launcher.main(Launcher.java:66) [modlauncher-8.1.3.jar:?] {}
	at net.minecraftforge.userdev.LaunchTesting.main(LaunchTesting.java:94) [forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {}


-- System Details --
Details:
	Minecraft Version: 1.16.5
	Minecraft Version ID: 1.16.5
	Operating System: Windows 10 (amd64) version 10.0
	Java Version: 1.8.0_341, Oracle Corporation
	Java VM Version: Java HotSpot(TM) 64-Bit Server VM (mixed mode), Oracle Corporation
	Memory: 258798592 bytes (246 MB) / 1044381696 bytes (996 MB) up to 1875378176 bytes (1788 MB)
	CPUs: 6
	JVM Flags: 2 total; -XX:+IgnoreUnrecognizedVMOptions -XX:HeapDumpPath=MojangTricksIntelDriversForPerformance_javaw.exe_minecraft.exe.heapdump
	ModLauncher: 8.1.3+8.1.3+main-8.1.x.c94d18ec
	ModLauncher launch target: fmluserdevclient
	ModLauncher naming: mcp
	ModLauncher services: 
		/mixin-0.8.4.jar mixin PLUGINSERVICE 
		/eventbus-4.0.0.jar eventbus PLUGINSERVICE 
		/forge-1.16.5-36.2.39_mapped_official_1.16.5-launcher.jar object_holder_definalize PLUGINSERVICE 
		/forge-1.16.5-36.2.39_mapped_official_1.16.5-launcher.jar runtime_enum_extender PLUGINSERVICE 
		/accesstransformers-3.0.1.jar accesstransformer PLUGINSERVICE 
		/forge-1.16.5-36.2.39_mapped_official_1.16.5-launcher.jar capability_inject_definalize PLUGINSERVICE 
		/forge-1.16.5-36.2.39_mapped_official_1.16.5-launcher.jar runtimedistcleaner PLUGINSERVICE 
		/mixin-0.8.4.jar mixin TRANSFORMATIONSERVICE 
		/forge-1.16.5-36.2.39_mapped_official_1.16.5-launcher.jar fml TRANSFORMATIONSERVICE 
	FML: 36.2
	Forge: net.minecraftforge:36.2.39
	FML Language Providers: 
		javafml@36.2
		minecraft@1
	Mod List: 
		client-extra.jar                                  |Minecraft                     |minecraft                     |1.16.5              |NONE      |Manifest: a1:d4:5e:04:4f:d3:d6:e0:7b:37:97:cf:77:b0:de:ad:4a:47:ce:8c:96:49:5f:0a:cf:8c:ae:b2:6d:4b:8a:3f
		forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp|Forge                         |forge                         |36.2.39             |NONE      |Manifest: NOSIGNATURE
		resources                                         |Universe Journey              |unijourney                    |NONE                |NONE      |Manifest: NOSIGNATURE
```

:::

### 开头不重要的部分

`---- Minecraft Crash Report ----`：崩溃报告开头

`// Don't be sad, have a hug! <3`：随机生成的一句话

`Time: 23-1-28 下午5:16`：发生错误的时间

### 报错描述

`Description: Mod loading error has occurred`

报错描述是进行报告诊断的重要依据，后面也将按照报错描述对崩溃报告进行分类，阐述解决崩溃的方法。

### StackTrace(堆栈追踪)

```java
java.lang.Exception: Mod Loading has failed
	at net.minecraftforge.fml.CrashReportExtender.dumpModLoadingCrashReport(CrashReportExtender.java:71) ~[forge-1.16.5-36.2.39_mapped_official_1.16.5-recomp.jar:?] {re:classloading}
	at ...
```

关于StackTrace，可以先看看下面这篇文章：

[什么是堆栈追踪(StackTrace)？如何利用StackTrace对程序进行调试？](https://blog.csdn.net/vector_yi/article/details/22933973)

对于Minecraft来说，你不能去更改Java/Minecraft/Forge or Fabric，很多时候连Mod也无法更改。而这也是MC崩溃的独特之处，**MC的崩溃很可能是玩家的误操作所造成的**。除了空指针异常NullPointerException以外，其他类型的Exception有95%可以通过不修改Mod的方式解决，其中又有70%是玩家的误操作造成的。

StackTrace的第一行抛出的异常是非常重要的，因为有时候报错表述并不能提供什么有效信息。

要注意的是，StackTrace有时候会有`Caused by`部分，这时候`Cause by`后面抛出的异常也要作为判断依据。

### 分割线

```markdown
A detailed walkthrough of the error, its code path and all known details is as follows:
---------------------------------------------------------------------------------------
```

### Head

```
-- Head --
Thread: Render thread
Stacktrace:
	at net.minecraftforge.fml.CrashReportExtender.lambda$dumpModLoadingCrashReport$7(CrashReportExtender.java:74) ~[forge:?] {re:classloading}
```

一般来说，Head里面没有什么有效的信息。

`Thread`：发生错误的线程，一般都是`Render thread`。

此处的StackTrace通常就是最顶上的那个堆栈追踪。

### Details

```markdown
-- NO MOD INFO AVAILABLE --
Details:
	Mod File: NO FILE INFO
	Failure message: The Mod File C:\Users\Roland\Desktop\workspace\ModProject\forge\forge-1.16.5-36.2.39-mdk\out\production\resources has mods that were not found
	...
```

这部分的内容会随着报错的改变而改变。

这个报告的报错为`Mod loading error has occurred`，因此此处出现的是`Mod Info`。至于出现`NO MOD INFO AVAILABLE`是因为这里出错的是Forge。

后面按照报错描述对崩溃报告进行分类时会详细讲解这部分。

### System Details

这里记载了一些环境相关的信息。在有些时候会用到这些东西来进行诊断。

`Minecraft Version: 1.16.5`：MC版本

`Operating System: Windows 10 (amd64) version 10.0`：操作系统，如果是Mac则是可疑点

`Java Version: 1.8.0_341, Oracle Corporation`：Java版本与发行商，**小心Openj9！**

`Memory`：内存

`JVM Flags`：JVM虚拟机参数

`Forge: net.minecraftforge:36.2.39`：Forge版本

### Mod List

在很多时候，你找到的有嫌疑的Mod是以Mod ID的形式出现的。你可能知道哪个Mod对应哪个文件；但是普通玩家可能并不知道。此时你需要翻到这里，寻找相应的文件名。Mod List不同版本的格式差异比较大，但一般都有文件名与Mod ID的对应。

此外，对于低版本的Forge来说，这个部分也可以成为诊断的标准。在每个Mod前面会写有`Status`表明这个Mod的状态，状态码不正常的即为出错的Mod。

状态码: 'U' = Unloaded 'L' = Loaded 'C' = Constructed 'H' = Pre-initialized 'I' = Initialized 'J' = Post-initialized 'A' = Available 'D' = Disabled 'E' = Errored

::: tip 1.7.10 的Mod List

```markdown
	UCHIJAAAA	Mekanism{9.1.0} [Mekanism] (Mekanism-1.7.10-9.1.0.281.jar) 
```

:::

::: tip 1.12.2 的Mod List

```markdown
	| State  | ID       | Version | Source                        | Signature  |
	|:------ |:-------- |:------- |:----------------------------- |:---------- |
	| LCHIJA | mekanism | 9.8.3   | Mekanism-1.12.2-9.8.3.390.jar | None       |
```
:::

::: tip 1.16.5 的Mod List

```markdown
	Mekanism-1.18.2-10.2.5.465.jar |Mekanism |mekanism |10.2.5 |DONE |Manifest: NOSIGNATURE
```

:::

### 其他乱七八糟的东西

```markdown
	RoadRunner != Lithium: This instance was launched using RoadRunner, which is an *unofficial* Lithium fork! Please **do not** report bugs to them!
```

在崩溃报告的最后经常会出现一些乱七八糟的信息。通常这些东西并不重要。

唯一要注意的是在Client的崩溃报告中会出现这么个东西：

```markdown
	Backend API: AMD Radeon(TM) Graphics GL version 4.6.13596 Compatibility Profile Context 20.10.44.04 27.20.11044.4003, ATI Technologies Inc.
```

如果这里出现的是A卡，有可能出现渲染的问题。

::: tip 

如果你看的崩溃报告足够多，还有一个东西是需要看的：

`Launched Version: 忘却之刻 — Times Of Oblivion`：版本名称（整合包名称）

同一个整合包出现的报错往往是相同的（前提是没有乱加Mod），而出错千奇百怪的整合包会被PL列入黑名单直接劝退（如 Isekai Life's Fantasy）。

:::
