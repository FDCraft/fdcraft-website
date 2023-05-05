# 旦星 SPS

旦星是 FDCraft 的全服定位系统(Server-wide Positioning System, SPS)。

## 旦星一号

基于 Dynmap 构建的卫星地图与定位系统。

在经历了数月的停摆后，[旦星一号](http://mc.fdc.jingyijun.xyz:20410/)重新上线，并标记了绝大部分的机器与建筑的标记点。
尽管搭建了地-空无线电功能，但是更建议通过地面通讯（Q群机器人转发）的方式来进行通信。

### 标记点

::: tip 警告！
在你没有完全理解这里所说的指令时，请不要尝试修改旦星一号的标记点！
:::

旦星一号使用Dynmap自带的`/dmarker` 指令来在其上进行标记。但是为了更易维护，其参数的填写有一个比较复杂的规则。

#### 标记点添加

> /dynmap add id:\<id\> label:\<label\> icon:\<icon\> set:\<set-id\>

你可以使用`/dmarker list set:<set-id>` 指令查看现有的参数，来更好地理解下面的规则。理论上不需要这些参数也可以添加标记点，但是其结果是自动随机分配参数而不是留空。

参数说明：

label：这个标记点在旦星一号上的名称。

set：分组，在旦星一号上将会出现在哪个组中。

icon：这个标记点在旦星一号上的图标，与set-id对应。

| 分组       | set-id    | icon       |
| ---------- | --------- | ---------- |
| 生电机器   | machine   | silverstar |
| 观赏性建筑 | spectacle | bighouse   |
| 私宅       | house     | goldstar   |
| 传送门     | portal    | portal     |

id：标记的唯一标识符。其命名规则与该建筑的属性与位置相对应，从上往下依次匹配。

| 分组                | id与规则，?代表序号                                   |
| ------------------- | ----------------------------------------------------- |
| 无论在哪的私宅      | house?，多个私宅为house\_?\_?，仅用于house set        |
| 主世界-工业区       | industry_?                                            |
| 主世界-村庄         | village_?                                             |
| 主世界-沙漠聚居点   | desert_?                                              |
| 主世界-住宅区       | residential_?                                         |
| 下界                | nether_?，双维度机器相应的下界端id为individual_0?     |
| 下界传送门          | portal_?，仅用于portal set                            |
| 末地                | end_?                                                 |
| 主世界-非集群的机器 | individual_?，双维度机器相应的下界端id为individual_0? |
| 主世界-非集群的建筑 | individual_building_?                                 |

#### 标记点删除

> /dmarker delete id:\<id\> set:\<set-id\>

从这里可以看出，如果没有命名规则，进行管理将会十分痛苦（

#### 标记点更新

> /dmarker update \<label\> set:\<set-id\> icon:\<newicon\> newlabel:\<newlabel\> newset:\<newset-id\>
>
> 或者 /dmarker update id:\<id\> set:\<set-id\> icon:\<newicon\> newlabel:\<newlabel\> newset:\<newset-id\>

此处id/label与set是必填的，后面的参数不想要更新的不填写即可。

注意id是无法被更新的，只能删除后重新创建。

#### 全部指令集

|                             命令                             |                             描述                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|     /dmarker add \<label\> icon:\<icon\> set:\<set-id\>      | 在玩家的当前位置添加一个指定标签的记号（可选：图标、记号集） |
| /dmarker add id:\<id\> \<label\> icon:\<icon\> set:\<set-id\> | 在玩家的当前位置添加一个指定 ID 和标签的记号（可选：图标、记号集） |
| /dmarker add id:\<id\> \<label\> icon:\<icon\> set:\<set-id\> x:\<x-coord\> y:\<y-coord\> z:\<z-coord\> world:\<Worldname\> | 在指定的坐标添加一个指定 ID 和标签的记号（可选：图标、记号集） |
|                  /dmarker movehere \<label\>                   |        将第一个匹配指定标签的记号移动至玩家的当前位置        |
|                  /dmarker movehere id:\<id\>                   |        将第一个匹配指定 ID 的记号移动至玩家的当前位置        |
|  /dmarker update \<label\> icon:\<newicon\> newlabel:\<newlabel\>  |           更新第一个匹配指定标签的记号的图标或标签           |
|  /dmarker update id:\<id\> icon:\<newicon\> newlabel:\<newlabel\>  |           更新第一个匹配指定 ID 的记号的图标或标签           |
|                   /dmarker delete \<label\>                    |                 删除第一个匹配指定标签的记号                 |
|             /dmarker delete id:\<id\> set:\<set-id\>             |         删除第一个匹配指定 ID 的记号（可选：记号集）         |
|                        /dmarker list                         |           列出默认记号集中定义的所有记号的详细信息           |
|                  /dmarker list set:\<set-id\>                  |           列出指定记号集中定义的所有记号的详细信息           |
| /dmarker addset \<label\> hide:\<hide-by-def\> prio:\<priority\> minzoom:\<minzoom\> |          添加指定标签的新记号集 (自动将标签设为 ID)          |
| /dmarker addset id:\<id\> \<label\> hide:\<hide-by-def\> prio:\<priority\> minzoom:\<minzoom\> |                 添加指定标签和 ID 的新记号集                 |
| /dmarker updateset \<label\> newlabel:\<new-label\> hide:\<hide-by-def\> prio:\<priority\> minzoom:\<minzoom\> |           更新指定标签的记号集(自动将标签设为 ID)            |
| /dmarker updateset id:\<id\> newlabel:\<new-label\> hide:\<hide-by-def\> prio:\<priority\> minzoom:\<minzoom\> |                     更新指定 ID 的记号集                     |
|                  /dmarker deleteset \<label\>                  |                     删除指定标签的记号集                     |
|                  /dmarker deleteset id:\<id\>                  |                     删除指定 ID 的记号集                     |
|                      /dmarker listsets                       |                        列出所有的记号                        |
|                        /dmarker icons                        |                列出所有可使用的图标的详细信息                |
|       /dmarker addicon id:\<id\> \<label\> file:"filename"       | 将指定的文件设为指定 ID 和标签的新图标（文件路径相对于 Minecraft 服务端文件夹）。 |
| /dmarker updateicon id:\<id\> newlabel:\<label\> file:"filename" | 更新指定 ID 的图标的标签或文件（文件路径相对于 Minecraft 服务端文件夹）。 |
|                 /dmarker deleteicon id:\<id\>                  |                      删除指定 ID 的图标                      |
|                      /dmarker addcorner                      |             将玩家的当前位置作为一个角添加到列表             |
|            /dmarker addcorner \<x\> \<y\> \<z\> \<world\>            |               将指定的坐标作为一个角添加到列表               |
|                    /dmarker clearcorners                     |                          清除角列表                          |
|                   /dmarker addarea \<label\>                   |        使用指定的标签和当前的角列表创建并添加新的区域        |
|        /dmarker addarea id:\<id\> \<label\> set:\<set-id\>         | 使用指定的 ID、标签和当前的角列表创建新的区域并将其添加到指定的记号集（可选：记号集） |
|           /dmarker deletearea \<label\> set:\<set-id\>           |              删除指定标签的区域（可选：记号集）              |
|           /dmarker deletearea id:\<id\> set:\<set-id\>           |              删除指定 ID 的区域（可选：记号集）              |
|               /dmarker listareas set:\<set-id\>                |            列出所有区域的详细信息（可选：记号集）            |
|  /dmarker updatearea \<label\> set:\<set-id\> \<arg\>:\<value\> ...  |           更新指定标签的区域的属性（可选：记号集）           |
|  /dmarker updatearea id:\<id\> set:\<set-id\> \<arg\>:\<value\> ...  |           更新指定 ID 的区域的属性（可选：记号集）           |
|            /dmarker addline \<label\> set:\<set-id\>             | 使用当前的角列表和指定的标签创建新的线并添加到指定的记号集（可选：记号集） |
|        /dmarker addline id:\<id\> \<label\> set:\<set-id\>         | 使用当前的角列表和指定的 ID 创建新的线并添加到指定的记号集（可选：记号集） |
|           /dmarker deleteline \<label\> set:\<set-id\>           |               删除指定标签的线（可选：记号集）               |
|           /dmarker deleteline id:\<id\> set:\<set-id\>           |               删除指定 ID 的线（可选：记号集）               |
|               /dmarker listlines set:\<set-id\>                |             列出所有线的详细信息（可选：记号集）             |
|  /dmarker updateline \<label\> set:\<set-id\> \<arg\>:\<value\> ...  |            更新指定标签的线的属性（可选：记号集）            |
|  /dmarker updateline id:\<id\> set:\<set-id\> \<arg\>:\<value\> ...  |            更新指定 ID 的线的属性（可选：记号集）            |
