import { ref, createApp } from 'vue'
import App from './App.vue'

// import router from './router'

var app = createApp(App);
const language = ref('zh');


new (require('vconsole'))();

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
            console.log('Button clicked!', el.textContent);
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






app.directive('drag-zoom', {
    beforeMount(el, binding) {
        let startX = 0;
        let startY = 0;
        let initialScale = 1;

        el.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;

            // initialScale = el.style.transform
            //     ? parseFloat(el.style.transform.replace(/[^0-9.-]/g, ''))
            //     : 1;
        });

        el.addEventListener('touchmove', (e) => {
            const deltaX = e.touches[0].clientX - startX;
            const deltaY = e.touches[0].clientY - startY;

            el.style.left = el.offsetLeft + deltaX + 'px';
            el.style.top = el.offsetTop + deltaY + 'px';

            // const scale = e.touches.length === 2
            //     ? (Math.hypot(
            //         e.touches[0].clientX - e.touches[1].clientX,
            //         e.touches[0].clientY - e.touches[1].clientY
            //     ) / initialScale)
            //     : 1;

            // el.style.transform = `scale(${scale * initialScale})`;
        });


        // el.addEventListener('touchstart',(e)=>{

        // })
    }
});





app.directive('dragZoom', {
    mounted(el, binding) {
        let initialDistance;
        let initialWidth;
        let _scale;



        let parentNode = el.parentNode;
        let p_width = getComputedStyle(el.parentNode).width;
        let p_height = getComputedStyle(el.parentNode).height;
        let s_width = getComputedStyle(el).width
        let s_height = getComputedStyle(el).height

        s_width = 300;
        s_height = 300;


        let min_top = 0;
        let min_left = 0;
        let max_top = 0;
        let max_left = 0;

        el.addEventListener("touchstart", (e) => {
            if (e.touches.length === 2) {
                // 计算两个触摸点的初始距离
                initialDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                initialWidth = parseFloat(getComputedStyle(el).width);
            }

            e?.preventDefault();
        });

        el.addEventListener("touchmove", (e) => {
            if (e.touches.length === 2) {
                // 计算当前两个触摸点的距离
                const currentDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                const scale = currentDistance / initialDistance;
                el.style.transform = `scale(${scale})`;
            }

            e?.preventDefault();
        });


        let isDragging = false;
        let initialX, initialY;
        const event = new Event('pan');

        el.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            initialX = touch.clientX - parseFloat(getComputedStyle(el).left);
            initialY = touch.clientY - parseFloat(getComputedStyle(el).top);
            isDragging = true;
            e.preventDefault();
        });

        el.addEventListener('touchmove', (e) => {
            if (isDragging) {
                const touch = e.touches[0];

                let top = touch.clientX - initialX;
                let left = touch.clientY - initialY;
                // let scale = new DOMMatrix(getComputedStyle(el).transform).a;
                let scale = _scale ?? 1;

                let offsetX = ((scale - 1) * s_width) / 2;
                let offsetY = ((scale - 1) * s_height) / 2;

                let newX = touch.clientX - initialX;
                let newY = touch.clientY - initialY;

                newX = newX - offsetX;
                newY = newY - offsetY;

                el.style.left = `${newX}px`;
                el.style.top = `${newY}px`;



            }
            e.preventDefault();
        });

        el.addEventListener('touchend', (e) => {
            isDragging = false;
            e.preventDefault();
        });


    }
})










app.mount('#app')
