<template>
  <div class="collect">
    <header>
      <d-head name="收藏" is_title="1"></d-head>
    </header>
    <main>
      <div class="noContent">
        <!-- <img src="" alt=""> -->
        <p class="noCollect" @click="open()">你还没有任何收藏哦～</p>
      </div>
    </main>
  </div>
</template>
<script>
import dHead from '@/components/header/general-header'
import mix from '@/mixins'
export default {
  components:{
    dHead
  },
  data(){
    return{
      mix: mix.methods
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.mix.open()
    })
  },
  methods:{
    // open(){
    //   this.mix.open()
    // }
  }
}
</script>
<style scoped>
  .noCollect {
    font-size: 0.14rem;
    text-align: center;
    margin-top: 0.2rem;
  }
</style>
