<template>
    <div>
        <h1>hello </h1>
        <component :is="componentsList" v-for="(component, index) in components" :key="index" />
    </div>
</template>

<script>
export default {
    name: "LayerView",
    data() {
        return {
            components: [],
        };
    },
    computed: {
        componentsList() {
            return this.components[this.components.length - 1]; // 获取最后一个组件
        },
    },
    methods: {
        renderComponent(component) {
            this.components.push(component);
        },
    },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
