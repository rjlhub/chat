<template>
  <div class="index">
    <header class="header">
      <g-head :name="title" is_title="1"></g-head>
    </header>
    <main class="column index-main">
      <div class="center">
        <el-input 
          v-model="input" clearable placeholder="请输入内容"
          prefix-icon="el-icon-search" 
          class="searchIpt">
        </el-input>
      </div>
      <div class="book">
        <div class="row original" style="margin-top: 0.1rem;align-items:center;justify-content: space-between;">
          <div class="row originalCenter">
            <img src="../assets/new.png" class="imgOriginal" alt="">
            <p class="nameOriginal">新朋友</p>
          </div>
          <div>
            <el-badge :value="2" :max="10" class="item">
            </el-badge>
          </div>
        </div>
        <div class="row original originalCenter">
          <img src="../assets/group.png" class="imgOriginal" alt="">
          <p class="nameOriginal">群</p>
        </div>
      </div>
      <div class="contact">
        <contact></contact>
      </div>
    </main>
    <footer class="pstfixed">
      <foot></foot>
    </footer>
  </div>
</template>
<script>
import gHead from '@/components/header/general-header'
import Contact from '@/components/list/contact-list'
import Foot from '@/components/footer/foot'
export default {
  components:{
    gHead,
    Contact,
    Foot
  },
  data(){
    return{
      title: '通讯录',
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
  .header {
    position: sticky;
    top: 0;
    z-index: 100000;
  }
  .index-main {
    padding-top: 0.1rem;
    padding-bottom: 0.5rem;
  }
  .searchIpt {
    width: 80%;
    border: none;
  }
  .imgOriginal {
    width: 0.3rem;
    height: 0.3rem;
  }
  .nameOriginal {
    font-size: 0.16rem;
    padding-left: 0.1rem;
  }
  .original {
    padding: 0 0.2rem;
    height: 0.5rem;
  }
  .originalCenter{
    align-items: center;
  }
  .pstfixed{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    height: 0.5rem;
  }
</style>
