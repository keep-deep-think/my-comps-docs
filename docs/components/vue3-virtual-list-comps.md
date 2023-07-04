---
titleTemplate: 虚拟列表
---

# vue3-virtual-list-comps

## 介绍

基于 vite4+vue3+TS 开发的无限滚动组件，可以实现加载 10 万条数据页面也不会卡顿,想了解实现思路,请阅读此文 [开发自己的第一个 npm 包](https://juejin.cn/post/7244492473933791288)

## 用法

组件有 5 个配置参数

| 组件属性名 | 含义                         |
| ---------- | ---------------------------- |
| data       | 列表数据                     |
| height     | 滚动容器的高度,单位 px       |
| width      | 滚动容器的高度,单位 px       |
| itemHeight | 每个数据项盒子的高度,单位 px |
| itemCount  | 数据项的数量                 |

<br />

```html
<template>
  <FixedSizeList :data="data" :height="200" :width="50" :itemHeight="20" :itemCount="data.length">
    <template #listItem="{ itemData, index }">
      <div :class="index % 2 === 0 ? 'even' : 'odd'">{{ itemData }}</div>
    </template>
  </FixedSizeList>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { FixedSizeList } from "vue3-virtual-list-comps";
  const data = ref([...new Array(101).keys()].slice(1, 101));
  // console.log(data.value.length);
</script>

<style scoped>
  .odd {
    background-color: aliceblue;
  }
  .even {
    background-color: lightgreen;
  }
</style>
```

## 效果演示

可以看到，无论如何滚动，可视区域最多渲染 14 条数据记录，不会引起页面的卡顿。

```js
Math.ceil(props.height / props.itemHeight) + BUFF_OFFSET(顶部+底部)= 200/20 + 2+2 =14
```

![channel.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a44ee2297a84b70b1d3cea2277ab628~tplv-k3u1fbpfcp-watermark.image?)
