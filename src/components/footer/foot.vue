<template>
  <div class="footer row">
    <nav class="row" style="flex:1;height:100%;">
      <router-link to="/" class="nav column center">
        <i class="el-icon-chat-dot-round iconfont"></i>
        <p>消息</p> 
      </router-link>
      <router-link to="Contact" class="nav column center">
        <i class="el-icon-notebook-1 iconfont"></i>
        <p>通讯录</p> 
      </router-link>
      <router-link to="" class="nav column center">
        <i class="el-icon-discover iconfont"></i>
        <p>发现</p> 
      </router-link>
      <router-link to="Mine" class="nav column center">
        <i class="el-icon-user iconfont"></i>
        <p>我的</p> 
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  components:{
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
  .footer {
    flex:1;
    height: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0 0 0.006rem #888;
  }
  .iconfont {
    font-size: 0.24rem;
    margin-bottom: 0.02rem;
  }
  .nav {
    flex:1;
    font-size: 0.12rem;
    color: #6d6b6b;
    text-decoration: none;
    text-align: center;
    line-height: 1;
  }
</style>
