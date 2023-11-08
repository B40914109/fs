<template>
    <div class="page1">
        <div class="page">
            <!-- <div class="header">
            header
        </div> -->
            <iframe border="1" src="/index2.html">

            </iframe>

            <!-- <div class="main" id="draggable-element">
                main<br />
                main<br />
                main<br />
                main<br />
                main<br />
                main<br />
                main<br />

            </div> -->
            <div class="footer">
                footer12121
            </div>
        </div>
    </div>
</template>

<script>
import Hammer from "hammerjs";

export default {
    data() {
        return {};
    },
    mounted() {
        //  this.move();
        // this.test2();
    },
    methods: {
        test() {
            var getCss = function (o, key) {
                return o.currentStyle
                    ? o.currentStyle[key]
                    : document.defaultView.getComputedStyle(o, false)[key];
            };

            const element = document.getElementById("draggable-element");
            const hammer = new Hammer(element);
            element.style.transform = "scale(1)"; // 初始缩放为1
            element.style.top = "0";
            element.style.left = "0";

            let x = 0;
            let y = 0;
            let scale = 1;

            hammer.get("pan").set({ direction: Hammer.DIRECTION_ALL }); // 设置拖拽方向为任意

            hammer.on("panstart", function (event) {
                x = parseInt(element.style.left);
                y = parseInt(element.style.top);
            });

            hammer.on("panmove", function (event) {
                var m = Math.max(y + event.deltaY, 0);
                var n = Math.max(x + event.deltaX, 0);

                //             const containerRect = element.getBoundingClientRect();
                //   const targetRect = target.getBoundingClientRect();
                //   const scaledWidth = parseFloat(getComputedStyle(target).width);

                //   const x = targetRect.left - containerRect.left;
                //   const y = targetRect.top - containerRect.top;
                //   console.log(`Left: ${x}, Top: ${y}`);

                element.style.top = m + "px";
                element.style.left = n + "px";

                // event?.preventDefault(); // 阻止默认行为
                // event?.stopPropagation(); // 阻止事件冒泡
            });

            // hammer.on("panend", function (event) {});

            // hammer.get("pinch").set({ enable: true });

            // hammer.on("pinchmove", function (event) {
            //     const distance = event.distance; // 两个手指之间的距离
            //     const scale = distance / 100; // 自定义缩放比例系数

            //     element.style.transform = `scale(${scale})`;
            //     event.preventDefault();
            // });

            // hammer.on("pinchend", function () {
            //     hammer.get("pinch").set({ enable: true });
            // });
        },
        test2() {
            let initialDistance;
            let initialWidth;

            const target = document.getElementById("draggable-element");

            // 添加触摸事件监听器
            target.addEventListener("touchstart", (e) => {
                if (e.touches.length === 2) {
                    // 计算两个触摸点的初始距离
                    initialDistance = Math.hypot(
                        e.touches[0].clientX - e.touches[1].clientX,
                        e.touches[0].clientY - e.touches[1].clientY
                    );
                    initialWidth = parseFloat(getComputedStyle(target).width);
                }
            });

            target.addEventListener("touchmove", (e) => {
                if (e.touches.length === 2) {
                    // 计算当前两个触摸点的距离
                    const currentDistance = Math.hypot(
                        e.touches[0].clientX - e.touches[1].clientX,
                        e.touches[0].clientY - e.touches[1].clientY
                    );

                    // 计算缩放比例
                    const scale = currentDistance / initialDistance;

                    // 根据缩放比例调整目标元素的大小
                    // target.style.width = initialWidth * scale + "px";
                    target.style.transform = `scale(${scale})`;
                }
            });

            // 添加鼠标事件监听器（用于在桌面上模拟手势）
            target.addEventListener("mousedown", (e) => {
                if (e.buttons === 1) {
                    initialDistance = Math.hypot(0, 0);
                    initialWidth = parseFloat(getComputedStyle(target).width);
                }
            });

            target.addEventListener("mousemove", (e) => {
                if (e.buttons === 1) {
                    const currentDistance = Math.hypot(
                        e.movementX,
                        e.movementY
                    );
                    const scale = currentDistance / initialDistance;
                    target.style.width = initialWidth * scale + "px";
                }
            });
        },
        test3() {
            let initialDistance;
            let initialScale = 1;
            const container = document.getElementById("draggable-element");
            const target = document.getElementById("draggable-element");

            // 添加触摸事件监听器
            container.addEventListener("touchstart", (e) => {
                if (e.touches.length === 2) {
                    // 计算两个触摸点的初始距离
                    initialDistance = Math.hypot(
                        e.touches[0].clientX - e.touches[1].clientX,
                        e.touches[0].clientY - e.touches[1].clientY
                    );
                    initialScale = parseFloat(
                        getComputedStyle(target).transform.match(
                            /-?\d*(\.\d+)?/
                        )[0]
                    );
                }
            });

            container.addEventListener("touchmove", (e) => {
                if (e.touches.length === 2) {
                    // 计算当前两个触摸点的距离
                    const currentDistance = Math.hypot(
                        e.touches[0].clientX - e.touches[1].clientX,
                        e.touches[0].clientY - e.touches[1].clientY
                    );

                    // 计算缩放比例
                    const scale =
                        (currentDistance / initialDistance) * initialScale;

                    // 对目标元素进行缩放
                    target.style.transform = `scale(${scale})`;
                }
            });
        },

        move() {
            const target = document.getElementById("draggable-element");
            let isDragging = false;
            let offsetX, offsetY;

            target.addEventListener("touchstart", (e) => {
                const touch = e.touches[0];
                // console.log(touch,touch.clientX ,touch.clientY);
                offsetX = touch.clientX - target.getBoundingClientRect().left;
                offsetY = touch.clientY - target.getBoundingClientRect().top;
                isDragging = true;
            });

            target.addEventListener("touchmove", (e) => {
                if (isDragging) {
                    const touch = e.touches[0];
                    const newX = touch.clientX - offsetX;
                    const newY = touch.clientY - offsetY;
                    target.style.left = `${newX}px`;
                    target.style.top = `${newY}px`;
                }
            });

            target.addEventListener("touchend", () => {
                isDragging = false;
            });
        },
    },
};
</script>












<style lang="scss">
* {
    box-sizing: border-box;
}

iframe {
    position: absolute;
    top: 0;
    bottom: 77px;

    width: 100%;
    height: calc(100% - 77px);
}

.footer {
    position: absolute;
    bottom: 0;
    height: 77px;
    width: 100%;
    border: 1px solid red;
}
.page1 {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid red;
    overflow: none;
    background-color: yellow;
}

.page {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // -webkit-overflow-scrolling: touch;

    // display: grid;
    // grid-template-rows: auto 1fr auto;
    // min-height: 100%;
    // height: 100%;
    // min-height: 0;

    overflow: auto;

    // &::before {
    //     content: "";
    //     display: block;
    //     width: 100%;
    //     min-height: 3rem;
    //     border: 1px solid blue;
    // }
}

.header {
    height: 3rem;
    // border: 1px solid blue;

    // flex-basis: auto;
}
// .footer {
//     height: 5rem;
//     // border: 1px solid blue;
//     flex: 0 0 auto; /* 固定高度 */
// }

.main {
    will-change: transform;
    position: absolute;
    transform-origin: center center;
    transform: scale(1);
    // flex: 1;
    background-color: yellow;
    height: 300px;
    width: 300px;
    // box-shadow: 1px 5px 10px gray;
}
</style>