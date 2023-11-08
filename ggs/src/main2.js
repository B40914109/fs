import { ref, createApp } from 'vue'
import App from './App2.vue'

// import router from './router'
console.log(11);
console.log(process);

var app = createApp(App);
app.mount('#app')
const language = ref('zh');
