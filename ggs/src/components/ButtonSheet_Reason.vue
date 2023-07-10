<template>
    <ButtomSheet v-open>
        <h1>hello</h1>
    </ButtomSheet>
</template>

<script>
import ButtomSheet from './ButtomSheet.vue'
export default {
    components:{
        ButtomSheet
    },
    methods:{
        printf(a){
            console.log("hello...",a);
        }
    }
}
</script>