<template>
    <div ref="abcd">
        <div >Example1</div>
        <div >Example2</div>
        <div >Example3</div>
        <div >Example4</div>

    </div>
  <div>
    <button @click="value=2" >测试</button>
  </div>
  </template>
  
  <script>
import { toRefs, watchEffect } from "vue";
import store from "../core/store"

  export default {
    // props: {
    //   value: {
    //     type: String,
    //     default: ''
    //   }
    // },
    data(){
      return {
        value:1
      }
    },
    // computed: {
    //   cpt_value(){
    //     return 
    //   }
    // },
    mounted(){
      console.log(store);

      watchEffect(()=>{
        var dom= this.$refs.abcd;
        const children = dom.children;
        // debugger;
        for(var i=0;i<children.length;i++){
          if(i+1==this.value){
            children[i].classList.add('active');
          }
        }
        console.log("hello watch effect", this.value,dom);
      })

      // console.log(...toRefs(store))
    },

  }
  </script>

  <style >
.active{
  color: red;
}
</style>