<template>
    <h1>hello world</h1>
</template>

<style lang="scss" >
h1 {
    color: purple;
    color: pick(yellow, red);
}
</style>



 <!--

<template>
    <button @click="loadComponentA">Load Component A</button>
    <button @click="loadComponentB">Load Component B</button>

    <teleport to="body">
        <div class="teleport-content">
            <LayerView ref="layerView" />
        </div>
    </teleport>
    <h1>hello world</h1>
</template>

-->
<script>
// import Test from "./components/Test.vue";
// // import { h } from "vue";
// import LayerView from "./components/LayerView.vue";
// import ComponentA from "./components/ComponentA.vue";
// import ComponentB from "./components/ComponentB.vue";
// import { h, createVNode } from "vue";

// export default {
//     data() {
//         return {};
//     },
//     components: {
//         LayerView,
//     },
//     mounted() {
//         const layerView = h(Test, { routeName: "a" });
//         console.log(layerView);
//         console.log(layerView.$el);
//         //  this.move();
//         // this.test2();
//     },
//     methods: {
//         // loadComponentA() {
//         //     this.$refs.layerView.renderComponent(ComponentA);
//         // },
//         // loadComponentB() {
//         //     this.$refs.layerView.renderComponent(ComponentB);
//         // },

//         loadComponentA() {
//             this.renderTeleport(ComponentA);
//         },
//         loadComponentB() {
//             this.renderTeleport(ComponentB);
//         },
//         // loadComponentA() {
//         //     this.renderTeleport(ComponentA);
//         // },
//         // loadComponentB() {
//         //     this.renderTeleport(ComponentB);
//         // },
//         renderTeleport(component) {
//             const teleportDiv = document.createElement("div");
//             teleportDiv.className = "teleport-content";
//             document.body.appendChild(teleportDiv);

//             const teleportComponent = createVNode(LayerView, { layers: [] });

//             this.$nextTick(() => {
//                 teleportComponent.appContext = this.$root._context; // 这里是重点
//                 console.log(this.$el, this.$root);
//                 this.$refs.layerView.$teleport(teleportComponent, teleportDiv);
//                 this.$refs.layerView.renderComponent(component);
//             });
//         },
//     },
// };
</script>










