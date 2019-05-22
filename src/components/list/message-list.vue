<template>
  <div>
    <div class="message center row" v-for="(item,idx) in datas" :key="idx" 
      @touchstart="touchStart(item,$event)"
      @touchmove="touchMove"
      @touchend="touchEnd(item)"
    >
      <div class="cover-layer" v-if="item.is_tip">
        <div class="cover-layer" style="z-index:10;" @click.stop="removeLayer"></div>
        <div class="msg-tips" v-if="item.is_tip" :style="{'left':item.tipleft,'top':item.tiptop}">
          <ul>
            <li>删除该聊天</li>
            <li>删除该聊天</li>
          </ul>
        </div>
      </div>
      <div class="center default-icon">
        <i class="el-icon-user" style="font-size: 0.24rem;"></i>
        <!-- <p>{{}}</p> -->
        <el-badge :hidden="item.newsNum<=0" :value="item.newsNum" :max="9" class="itembadge center"></el-badge>
      </div>
      <div class="column message-info">
        <p class="name">{{item.name}}</p>
        <p class="contant">{{item.lastMsg}}</p>
      </div>
      <p class="time">{{item.time}}</p>
    </div>
    
  </div>
</template>
<script>
import mix from '@/mixins'
export default {
  data(){
    return {
      datas:[
        {
          id:'1',
          src:'',
          newsNum: 2,
          name:'刘一',
          lastMsg:'化地在后期清理它自',
          time:'14:23',
          is_tip: 0,
          tipleft: null,
          tiptop: null,
        },{
          id:'2',
          src:'',
          newsNum: 11,
          name:'陈二',
          lastMsg:'化地在后期清理它自',
          time:'4:23',
          is_tip: 0,
          tipleft: null,
          tiptop: null,
        },{
          id:'3',
          src:'',
          newsNum: 0,
          name:'张三',
          lastMsg:'化地在后期清理它自',
          time:'10:23',
          is_tip: 0,
          tipleft: null,
          tiptop: null
        },{
          id:'4',
          src:'',
          newsNum: 0,
          name:'李四',
          lastMsg:'化地在后期清理它自',
          time:'3:23',
          is_tip: 0,
          tipleft: null,
          tiptop: null
        },{
          id:'5',
          src:'',
          newsNum: 0,
          name:'王五',
          lastMsg:'化地在后期清理它自',
          time:'9:23',
          is_tip: 0,
          tipleft: null,
          tiptop: null
        },{
          id:'6',
          src:'',
          newsNum: 0,
          name:'赵六',
          lastMsg:'化地在后期清',
          time:'15:23',
          is_tip: 0,
          tipleft: null,
          tiptop: null
        },{
          id:'7',
          src:'',
          newsNum: 0,
          name:'孙七',
          lastMsg:'化期清理它自',
          time:'6:23',
          is_tip: 0,
          tipleft: null,
          tiptop: null
        },{
          id:'8',
          src:'',
          newsNum: 0,
          name:'周八',
          lastMsg:'它们工作起来是',
          time:'17:23',
          is_tip: 0,
          tipleft: null,
          tiptop: null
        },{
          id:'9',
          src:'',
          newsNum: 0,
          name:'吴九',
          lastMsg:'它们起来是',
          time:'7:23',
          is_tip: 0,
          tipleft: null,
          tiptop: null
        },{
          id:'10',
          src:'',
          newsNum: 0,
          name:'郑十',
          lastMsg:'它们工作起',
          time:'13:23',
          is_tip: 0,
          tipleft: null,
          tiptop: null
        }
      ],
      loop:0,
      tip_pst:{
        left:'',
        top:''
      },
      onclick:0,
      mix:mix.methods
    }
  },
  methods:{
    jumpChat(item){
      
    },
    touchStart(item,event){
      let that = this;
      this.onclick = 0;
      that.loop = setTimeout(() => {
        this.$log(this.onclick);
        if(!that.onclick){
          this.$log(this.onclick,'setTimeout');
          that.loop = 0;
          this.onclick = 1;
          this.datas.forEach(element => {
            element.is_tip = 0;
          });
          
          let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          
          let DOM = event.targetTouches[0];
          let clientx = event.targetTouches[0].clientX;
          let clienty = event.targetTouches[0].clientY;
          item.is_tip = 1;
          this.$nextTick(()=>{
            if(clientx>(w/2)){
              if(clienty>(h/2)){
                item.tipleft = (clientx-98)+'px';
                item.tiptop = (clienty-66)+'px'
              }else{
                item.tipleft = (clientx-98)+'px';
                item.tiptop = clienty+'px'
              }
            }else{
              if(clienty>(h/2)){
                item.tipleft = clientx+'px';
                item.tiptop = (clienty-66)+'px'
              }else{
                item.tipleft = clientx+'px';
                item.tiptop = clienty+'px'
              }
            }
          })
          this.mix.stopScroll()
        }
      }, 600);
      return false;
    },
    touchMove(){
      clearTimeout(this.loop);//清除定时器
      this.loop = 0;
    },
    touchEnd(item){
      clearTimeout(this.loop);
      // this.mix.startScroll()
      // this.onclick = 0;
      // if(this.onclick != 0){
        this.$log(this.onclick,'end');
        if(this.loop!=0){
          // this.onclick = 1;
          if(this.onclick!=0){
            //这里写要执行的内容（尤如onclick事件）
            // this.onclick = 1;
            this.$router.push({name:'Chat',params:item});
          }else {
            this.removeLayer();
            return false;
          }
        }else{
          this.onclick = 1;
        }
      // }
    },
    removeLayer(){
      this.$nextTick(() => {
        this.datas.forEach(element => {
          element.is_tip = 0;
        });
        // this.onclick = 0;
        this.handleBodyClick();
      })
      
    },
    open() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    handleBodyClick(){
      this.mix.startScroll()
      this.datas.forEach(element=>{
        element.is_tip = 0;
      })
    }
  },
  mounted(){
    this.$nextTick(() => {
        // document.addEventListener('click', this.handleBodyClick)
    })
  },
  beforeDestroy(){
    // document.removeEventListener('click', this.handleBodyClick)
  }
}
</script>

<style lang="less" scoped>

  .message {
    // position: relative;
    height: 0.64rem;
    padding: 0 0.14rem;
  }
  .default-icon {
    width: 0.44rem;
    height: 0.44rem;
    border-radius: 50%;
    background-color: #f2f2f2;
    position: relative;
  }
  .message-info {
    flex: 1;
    height: 100%;
    border-bottom: 1px solid #e8e3e3;
    margin-left: 0.1rem;
    justify-content: center;
  }
  .name {
    font-size: 0.15rem;
    font-weight: 400;
    color: #212121;
  }
  .contant {
    font-size: 0.13rem;
    font-weight: 500;
    color: #999;
    margin-top: 0.03rem;
  }
  .time {
    position: absolute;
    right: 0.14rem;
    top:0;
    font-size: 0.14rem;
    color: #999;
  }
  .itembadge {
    position: absolute;
    left: 0.25rem;
    bottom: -0.02rem;
    height: 0.2rem;
  }
  .cover-layer{
    // width: 100%;
    // height: 100%;
    // background-color: transparent;
    // position: fixed;
    // left:0;
    // right:0;
    // top:0;
    // bottom:0;
    .msg-tips {
      padding: 0.05rem 0;
      background-color: white;
      position: absolute;
      // top: 0;
      z-index: 10;
      ul{
        li{
          color: #41413e;
          font-size: 0.14rem;
          list-style: none;
          padding: 0.04rem 0.14rem;
        }
      }
    /* ::after{

    }  */
    }
  }
</style>
