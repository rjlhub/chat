<template>
  <div class="index">
    <header class="header">
      <g-head :name="title" is_title="1"></g-head>
    </header>
    <main class="column index-main">
      <mine @jump="showModal"></mine>
    </main>
    <footer class="pstfixed">
      <foot></foot>
    </footer>
    <msgbox :datas="modalmsg" :is_show="is_open" @closeModal="is_open = !is_open;"></msgbox>
  </div>
</template>
<script>
import gHead from '@/components/header/mine-head'
import Mine from '@/components/list/mine-list'
import Foot from '@/components/footer/foot'
import msgbox from '@/components/msgbox'
export default {
  components:{
    gHead,
    Mine,
    Foot,
    msgbox
  },
  data(){
    return{
      title: '我的',
      input:'',
      modalmsg:{
        title:'提示',
        content_msg:'sssss',
        img_src:'http://img3.imgtn.bdimg.com/it/u=2260282904,3949310057&fm=26&gp=0.jpg',
        img_width:'100%',
        cancelButtonText:'下次再说',
        confirmButtonText:'立即更新'
      },
      is_open: false
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll)
  },
  methods:{
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop);
    },
    showModal(data){
      // 
      
      this.$log(data)
      if(data.name == '版本更新'){
        this.is_open = !this.is_open;
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll); 
  }
}
</script>
<style scoped>
  .header {
    /* position: sticky; */
    /* top: 0; */
    /* z-index: 100000; */
  }
  .index-main {
    padding-top: 0.1rem;
    /* padding-bottom: 0.5rem; */
    background-color: #f2f2f2;
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
