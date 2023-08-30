<template>
  <div  class="asb" style="overflow: hidden;">
    <transition-group :name="transitionName">
      <!-- 使用key绑定当前页面组件 -->
      <component :key="currentPage" :is="currentPage" />
      
      <div class="loader" style="border:1px solid red" v-if="flag">1</div>
    </transition-group>

       <!-- 使用 AnimatedBox 组件，并通过 v-if 控制显示和隐藏 -->
    <animated-box :show="showBox">
      <!-- 显示的内容 -->
      <div class="content"  v-localize>This is the content inside the Animated Box.</div>
    </animated-box>
    <h1  v-localize>hello world page2</h1>
    <!-- <Language></Language> -->
  
    <div class="page-controls">
      <!-- 切换页面按钮 -->
      <button @click="changePage('PageA')">PageA</button>
      <button @click="changePage('PageB')">PageB</button>
      <button @click="toggleBox">Toggle Box</button>
      <a href="weixing://">连接</a>
    </div>
  </div>
</template>

<script>
import PageA from './views/AboutView.vue';
import PageB from './views/AboutView2.vue';
import AnimatedBox from './components/AnimatedBox.vue';
// import Language from './components/Language.vue';

export default {
  data() {
    return {
      currentPage: 'PageA', // 当前页面
      transitionName: 'slide', // 过渡动画名称
      flag:false,
      showBox: false,
    };
  },
  components: {
    PageA,
    PageB,
    AnimatedBox,
    // Language
  },
  methods: {
    changePage(page) {
      //this.transitionName = page === 'PageA' ? 'slide-left' : 'slide-right'; // 设置不同页面的过渡动画

      this.transitionName = page === 'PageA' ? 'moveR' : 'moveL'; 
      this.currentPage = page;
      this.flag=!this.flag;
    },
    toggleBox() {
      // 点击按钮时切换显示和隐藏
      this.showBox = !this.showBox;
    },
    test(){
      window.location.href="alipay://platformapi/startapp?appId=20000056"
    }
  },
};
</script>

<style>
/* .slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%); 
} 
*/

/* .slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 50s;
}
.slide-left-enter-from,
.slide-left-leave-to,
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%); 
} */

/* about test 
.moveL-enter-active 
.moveL-enter-to */

.asb{
  /* position: relative;
      left: 0;
    right: 0;
    height: 150px;
    width: 100%; */
    /* overflow: hidden; */

}

.moveL-enter-from {
  transform:  translateX(100%);
}

.moveR-enter-from {
  transform:  translateX(-100%);
}

/* .moveL-enter-from, .moveL-leave-to {
  transform:  translateX(100%);
} */

.moveR-enter-active,  .moveR-leave-active {
    transition: all 0.3s linear;
    /* transform: translateX(0); */
  }

   .moveR-leave-to{
     transform: translateX(100%);
   }

   .moveL-enter-active,
     .moveL-leave-active {
         transition: all 0.3s linear;
         /* transform: translateX(0%); */
     }

    .moveL-leave-to {
        transform: translateX(-100%);
    }




  .test{
    position: absolute;
    /* left: 0;
    right: 0; */
    width: 100%;
    top: 100px;
  }

  .page-controls{
    position: absolute;
    top: 200px;
  }

  /* 可以在父组件中定义过渡效果的样式 */
.animated-box {
  /* 设置动画开始时的样式 */
  opacity: 0;
  transform: translateY(-20px);
}


#app{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  overflow: auto;
}
</style>
