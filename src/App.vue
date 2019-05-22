<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* { touch-action: pan-y; } 
html,body,p,* {
  padding: 0;
  margin: 0;
}
html {
  font-size:625%; 
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  padding: 0;
  
}
.row {
  display: flex;
}
.column {
  display: flex;
  flex-direction: column;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ellipsis {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
/* .el-message-box {
  width: 100% !important;
} */
</style>
