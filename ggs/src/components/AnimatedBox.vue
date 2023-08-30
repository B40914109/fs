<!-- AnimatedBox.vue -->

<template>
    <div v-show="show" class="animated-box">
      <!-- 组件内容 -->
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .animated-box {
    /* 默认隐藏 */
    /* display: none; */
    outline: 1px solid red;
  
    /* 设置过渡效果 */
    transition: opacity 0.3s, transform 0.3s;
  }
  
  /* 使用 CSS 类 .show 来显示组件 */
  .animated-box.show {
    /* 将 display 属性设置为 block，以显示组件 */
    display: block;
  
    /* 设置动画过程中的样式 */
    opacity: 1;
    transform: translateY(0);
  }
  </style>
  