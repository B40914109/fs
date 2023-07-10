<template>
    <div  v-open class="sheet-dialog">
        <main>
            <slot></slot>
        </main>
        <footer>
            <button @click="test1">取消</button>
            <button @click="test2">确定</button>
        </footer>
    </div>
</template>

<script>
export default {
    methods:{
        test1(event){
            // debugger;
            console.log(event);
            if (!event.defaultPrevented) {
                 console.log("Default button click");

            }

            const hasCustomEvent = Object.keys(this.$listeners).includes('cancel');

if (hasCustomEvent) {
  // 组件定义了'custom-event'事件
    console.log("aaaaaaaaaaa*****************bbbbbbbbb");
}

      console.log("User-defined button click");

            this.$emit('cancel',"aaa");
    },
        test2(){
            this.$emit('submit',"bbb");
        }
    },
}
</script>

<style lang="scss">
.sheet-dialog{
    border: 1px solid red;
}
</style>