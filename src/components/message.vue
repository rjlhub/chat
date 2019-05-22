<template>
  <div class="index">
    <header class="header">
      <g-head :name="title" is_title="1"></g-head>
    </header>
    <main class="column index-main">
      <msg></msg>
    </main>
    <footer class="pstfixed">
      <foot></foot>
    </footer>
  </div>
</template>
<script>
import gHead from '@/components/header/general-header'
import Msg from '@/components/list/message-list'
import Foot from '@/components/footer/foot'
export default {
  components:{
    gHead,
    Msg,
    Foot
  },
  data(){
    return{
      title: '消息',
      input:''
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll)
  },
  methods:{
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop);
      // let offsetTopa = this.$refs.refs0;
      // console.log(offsetTopa)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll); 
  }
}
</script>
<style scoped>
  .index {
    background-color: #f2f2f2;
  }
  .header {
    position: sticky;
    top: 0;
    z-index: 100000;
  }
  .index-main {
    padding-top: 0.2rem;
    padding-bottom: 0.5rem;
  }
  .pstfixed {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    height: 0.5rem;
  }
</style>
