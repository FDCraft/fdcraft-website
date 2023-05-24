---
layout: home
title: FDCraft
heroImage: /logo.svg

hero:
  name: FDCraft
  text: 复旦大学基岩社
  actions:
  - theme: brand
    text: 开始
    link: /guide/newbie
  - theme: alt
    text: 动态
    link: /news/
features:
  - title: 🌏 平行世界
    details: 生存、模组、创造...应有尽有，还有穿梭到其他高校的神秘虫洞
  - title: 👔 史蒂夫的衣柜
    details: 自建 FDCraft 用户中心账户系统，可上传分享自定义皮肤
  - title: 🛠️ 科技专家
    details: 加入红石与模组插件部门，一起探索 Minecraft 的无限可能
  - title: 🏠 建筑大师
    details: 展现才华的绝佳舞台，还有复刻复旦校园的像素复旦计划等你参加
  - title: 🖥️ 搞点幕后技术
    details: 参与服务器的开发与运维，一起整点好活儿
  - title: 📖 我是萌新
    details: 公众号不定期发动活动通知与新手教程
---
<script setup>
import IndexView from "./IndexView.vue";
</script>

<IndexView/>

<style>
.desc {
  text-align: center;
  color: #999;
  margin-bottom: 2rem;
}

.content img {
  box-shadow: 0px 0px 30px 0px rgba(50, 50, 50, 0.1);
}
</style>
