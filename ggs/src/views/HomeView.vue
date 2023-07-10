<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" v-copy="message">
    <button v-copy="message">Copy Text</button>
    <ButtonSheet_Reason  abc v-open ref="abc" @cancel="test1"  @submit="test2">

    </ButtonSheet_Reason>
  </div>
</template>

<script>
import ButtonSheet_Reason from '@/components/ButtonSheet_Reason.vue';
// @ is an alias to /src

export default {
  name: 'HomeView',
  data(){
    message:"hello world"
  },
  methods:{
    test1(e){
      console.log("**************",e);
    },
    test2(e){
      // console.log("____________",e);
      console.log( this.$refs.abc);
      // console.log(this.$refs.abc.printf('()_(_(_(_)))'))

      // const btn1 = this.$el.querySelector('[abc]');
      // btn1.open({abc:123});
    }
  },
  components:{
    ButtonSheet_Reason
  }
}
</script>
