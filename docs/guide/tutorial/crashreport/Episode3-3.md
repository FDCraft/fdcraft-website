# Invalid id 4096

这一类报错的特征是这样的：

```markdown
java.lang.RuntimeException: Invalid id 4096 - maximum id range exceeded.
```

其字面意思是“无效的id 4096-超出了最大id范围”。

## 原因

为什么会发生这个问题呢？这就要提到MC如何处理物品的方式了。当一个Mod向MC加入（注册）物品或者方块时，MC会分配给这个物品或者方块一个id，如：`95`、`minecraft:white_stained_glass`。在1.12.2及以下，MC内部使用类似`95:0`的数字id与Metadata的组合来标识物品与方块；而1.13及以上，MC内部改为使用类似`minecraft:white_stained_glass`的字符串id来标识物品与方块，而Metadata被废弃，原本依靠Metadata区分的同id方块被拆分成不同字母id，也就是扁平化。（这点和指令不一样，从1.8开始指令使用字符串id，但内部依旧使用数字id）

而数字id是有上限的。MC只给数字id分配了12位（0-4095），因此一旦物品过多，id就会越界导致崩溃。

## 解决方法

一种解决方法是安装JEID或者NEID。它们将id范围拓展至32位从而解决了这个问题，但是它们往往会有副作用（例如因为id错乱一种方块全部变成了另一种方块、存档不能用MCEdit编辑等），并且一旦安装后就不能卸载，因此一般会在整合包刚开始组建时就安装上。

另一种方法是删除Mod。这个崩溃也经常发生在玩家向玩了一段时间的存档又加了Mod的时候，此时加上JEID或者NEID就有损坏存档的风险，最好的办法就是删除刚刚安装上的Mod。
