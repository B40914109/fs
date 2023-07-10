import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

var app= createApp(App);

app.directive('open', {
    mounted(el) {
      el.open = (aa) => {

        // 执行打开的逻辑
        console.log(aa,"Open method called");
      };
    }
  });
  
  app.directive('close', {
    mounted(el) {
      el.close = () => {
        // 执行关闭的逻辑
        console.log("Close method called");
      };
    }
  });


  app.directive('copy',{
    beforeMount(el, binding) {
          el.addEventListener('click', () => {
            // 将文本内容复制到剪贴板
            const textarea = document.createElement('textarea');
            textarea.value = binding.value;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
  
            // 弹出提示框显示复制成功
            const tooltip = document.createElement('div');
            tooltip.innerText = 'Copied!';
            tooltip.className = 'tooltip';
            document.body.appendChild(tooltip);
            setTimeout(() => {
                document.body.removeChild(tooltip);
            }, 12000);
          });
        }
  });
app.use(router).mount('#app')
