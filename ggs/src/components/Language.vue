<template>
    <div>
      <p v-localize>点击我切换语言</p>
    </div>
  </template>
  
  <script>
  import { ref, createApp } from 'vue';
  
  const app = createApp({
    setup() {
      const language = ref('zh');
  
      app.directive('localize', {
        mounted(el) {
          el.style.cursor = 'pointer';
          el.addEventListener('click', () => {
            language.value = language.value === 'en' ? 'zh' : 'en';
          });
        },
        updated(el) {
          if (language.value === 'en') {
            el.textContent = 'Click me to change language';
          } else {
            el.textContent = '点击我切换语言';
          }
        },
      });
  
      return { language };
    },
  });
  
  app.mount('#app');
  </script>
  