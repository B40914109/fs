import { ref, createApp } from 'vue'
import App from './App.vue'
import Test from "./components/Test.vue";
import { h } from "vue";


function addDynamicComponent(app, component) {
    // debugger;
    // 创建一个新的组件实例
    const instance = app.mount(document.createElement('div'));

    // 将传递的组件注册到根实例中
    app.component("Test", component);

    // 将动态添加的组件挂载到新的组件实例上
    instance.component = component;

    // 渲染动态添加的组件
    instance.$mount();

    // 将新的组件实例添加到页面上
    document.body.appendChild(instance.$el);
}

// import router from './router'

const app = createApp(App);

// 挂载应用程序
const vm = app.mount('#app');

console.log(app, vm)

// 调用函数来动态添加组件
// addDynamicComponent(app, Test);
// const app = createApp({});

// const layerView = h(Test, { routeName: "a" });

// app.mount('#app', () => layerView);


// const app = createApp({
//     render() {
//         // 渲染 layerView
//         return h(Test, { routeName: 'about' });
//     }
// });

// // 挂载到 DOM 中
// app.mount('#app');