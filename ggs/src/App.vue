<template>
    <div class="page">
        <p v-test>hello world</p>
        <h1 print-content  v-lang>Click me to print content</h1>
    </div>
</template>

<script>

export default {
    data() {
        return {};
    },
    created() {

    }
};
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

.page {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid red;
}

.footer {
    position: absolute; /* 将.footer元素设置为绝对定位，以便将其置于底部 */
    bottom: -120px; /* 将.footer元素放置在.asb容器的底部 */
    width: 100%; /* 设置.footer元素的宽度占满整个容器 */
    background-color: red; /* 设置.footer的背景颜色，可根据需要修改 */
    padding: 10px; /* 设置.footer的内边距，可根据需要修改 */
    height: 100px;
}


*{
    user-select: none;
}
</style>