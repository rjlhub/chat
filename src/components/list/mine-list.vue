<template>
  <div class="row mine-item">
    <div class="list center" v-for="(item,idx) in minetabs" :key="idx">
      <div tag="div" @click="jump(item.src,item.name)" class="row between">
        <div class="column" style="line-heihgt:1;align-items:center;">
          <i class="nameicon" :class="item.icon"></i>
          <span class="name">{{item.name}}</span>
        </div>
      </div>
      <!-- <div class="row between">
        <div class="column" style="line-heihgt:1;align-items:center;">
          <i class="nameicon" :class="item.icon"></i>
          <span class="name">{{item.name}}</span>
        </div>
        
      </div> -->
    </div>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      minetabs:[
        {
          name:'我的收藏',
          src:'myCollect',
          icon:'el-icon-star-off'
        },{
          name:'浏览记录',
          src:'',
          icon:'el-icon-time'
        },{
          name:'切换城市',
          src:'',
          icon:'el-icon-map-location'
        },{
          name:'清除缓存',
          src:'',
          icon:'el-icon-delete'
        },{
          name:'签到',
          src:'',
          icon:'el-icon-date'
        },{
          name:'版本更新',
          src:'',
          icon:'el-icon-time'
        }
      ]
    }
  },
  methods:{
    jump(src,name){
      // log(src)
      let data = {
        src:src,
        name:name
      }
      this.$emit('jump',data)
      // this.$log(src,this.minetabs)
      // if(name == '版本更新'){
       
      // }
    }
  }
}
</script>

<style scoped>
  /* .el-divider  */
  .mine-item {
    flex-wrap: wrap;
    background-color: white;
    justify-content: space-between;
  }
  .list {
    display: flex;
    padding: 0.2rem 0;
    width: calc(33.33% - 0.02rem);
    background-color: white;
    border-right: 0.01rem solid #f9f9f9;
    border-bottom: 0.01rem solid #f9f9f9;
  }
  .list:nth-child(3n){
    border-right: none;
  }
  .between {
    justify-content: space-between;
    /* padding: 0.14rem 0.1rem; */
    /* padding-left: 0.2rem; */
  }
  .nameicon {
    font-size: 0.3rem;
    color: #c3bfbf;
  }
  .name{
    font-size: 0.12rem;
    color: #5f5f5f;
    margin-top: 0.06rem;
  }
  .iconfont {
    font-size: 0.22rem;
    color: #989393;
  }
  .el-divider {
    margin: 0;
  }
</style>
