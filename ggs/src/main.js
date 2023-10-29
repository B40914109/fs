import { ref, createApp } from 'vue'
import App from './App.vue'
import './core/loadAppsetting'
// import router from './router'

var app = createApp(App);
const language = ref('zh');


app.directive('lang', {
    // 绑定到元素时调用
    bind(el, binding, vnode) {
        // 自定义指令的逻辑
        el.textContent = 'This is a custom directive for elements with lang="en".';
      },
  });
  
  app.directive('test', {
    // 当指令绑定到元素时调用
    mounted(el, binding) {
      // 添加点击事件处理程序
      el.addEventListener('click', (e) => {
        console.log('Button clicked!',el.textContent);
      });
    }
  });


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

app.directive('open', {
    mounted(el) {
        el.open = (aa) => {

            // 执行打开的逻辑
            console.log(aa, "Open method called");
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

app.directive('active', {
    mounted(el, binding) {
        // 根据传递的值确定是否添加active类
        if (binding.value) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    },
    updated(el, binding) {
        // 在更新时处理指令的值变化
        if (binding.value) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    }
});


// 注册自定义指令
app.directive('my-directive', {
    mounted(el, binding, vnode) {
        vnode.ctx.myMethod = function () {
            console.log('Custom method called');
            // 在这里执行你想要的操作
        };
    },
    unmounted(el, binding, vnode) {
        vnode.ctx.myMethod = null; // 清除方法
    }
});

app.directive('copy', {
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
app.mount('#app')
