---
titleTemplate: 9宫格抽奖
---

# vue3-nine-grid-lottery

## 介绍

基于 vite4+vue3+ts 开发的 9 宫格转圈抽奖组件, 想了解实现思路，请点击此文[手把手教你开发一个九宫格抽奖动画](https://juejin.cn/spost/7248168880572694588)

## 用法

组件有 7 个配置参数

| 组件属性名  | 含义                           |
| ----------- | ------------------------------ |
| lotteryList | 抽奖列表                       |
| winId       | 中奖 id                        |
| classPrefix | 九宫格容器和奖项的样式类名前缀 |
| @end        | 转动结束事件                   |
| initSpeed   | 初始转动速度 单位 ms (可选)    |
| baseCircles | 基本转动圈数 (可选)            |
| fastSpeed   | 最快转动速度 单位 ms (可选)    |
| slowSpeed   | 最慢转动速度 单位 ms (可选)    |

<br />

```html
<template>
  <NineGridLottery
    :lotteryList="lotteryList"
    :winId="options.winId"
    :initSpeed="options.initSpeed"
    :baseCircles="options.baseCircles"
    classPrefix="lottery"
  >
    <template #lotteryBtn="{ itemData }">
      <img :src="itemData.pic" class="pic" alt="" />
    </template>
  </NineGridLottery>
</template>

<script setup lang="ts">
  import { reactive } from "vue";
  import { NineGridLottery } from "vue3-nine-grid-lottery";
  import RMBImg from "@/assets/10rmb.png";
  import LotteryBtnImg from "@/assets/lottery-btn.png";
  import ThankImg from "@/assets/thank.png";

  // 奖品列表
  const lotteryList = reactive([
    { name: "10元立减金", pic: RMBImg },
    { name: "谢谢参与", pic: ThankImg },
    { name: "10元立减金", pic: RMBImg },
    { name: "谢谢参与", pic: ThankImg },
    { name: "抽奖", pic: LotteryBtnImg },
    { name: "谢谢参与", pic: ThankImg },
    { name: "10元立减金", pic: RMBImg },
    { name: "谢谢参与", pic: ThankImg },
    { name: "10元立减金", pic: RMBImg },
  ]);

  // 后台配置的奖品数据
  const options = reactive({
    // 中奖id
    winId: 6,
    // 基本圈数
    baseCircles: 4,
    // 抽奖转动速度
    initSpeed: 300,
    // 最快转动速度
    fastSpeed: 100,
    // 最慢转动速度
    slowSpeed: 600,
  });
</script>

<style lang="less">
  .lottery-box {
    width: 375px;
    height: 375px;
    background: #ea0019;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    .lottery-item {
      width: 125px;
      height: 125px;
      position: relative;

      &.active {
        box-shadow: 2px 2px 30px #ffe4c0;
        background-color: #ffe4c0;
      }

      &:nth-of-type(5) {
        cursor: pointer;
      }

      .pic {
        width: 100%;
        height: 100%;
        position: absolute;
        left: -1px;
      }

      /* .text {
        width: 100%;
        height: 20px;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 12px;
        text-align: center;
        line-height: 20px;
        position: absolute;
        left: 0;
        bottom: 0;
      } */
    }
  }
</style>
```

## 效果演示

点击抽奖按钮后，开始转动抽奖，刚开始转动比较慢，接着加速，加速到一定程度保持匀速，快停下来的时候会减速。

![channel.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bdbb0f986f07412b95d335ac6fc8b3c9~tplv-k3u1fbpfcp-watermark.image?)
