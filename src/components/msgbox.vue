<template>
  <div v-show="is_show">
    <transition name="lt">
      <div class="msgbox" v-if="is_show" style="z-index:2000;">
        <div class="message-box">
          <div class="message_box-header">
            <div class="msg_box-title">
              <span>{{datas.title}}</span>
            </div>
          </div>
          <div class="message_box-content" v-show="datas.content_msg || datas.img_src">
            <img :src="datas.img_src" v-show="datas.img_src" :style="{'width':datas.img_width}" class="modal-img" alt="">
            <div class="msg_box-title">
              <span>{{datas.content_msg}}</span>
            </div>
          </div>
          <div class="message_box-footer center">
            <el-button @click="closeModal">{{datas.cancelButtonText}}</el-button>
            <el-button>{{datas.confirmButtonText}}</el-button>
          </div>
        </div>
        
      </div>
    </transition>
    <div class="modal"></div>
  </div>
</template>
<script>
export default {
  props:['datas','is_show','turnOff'],
  data(){
    return {
      
    }
  },
  methods:{
    closeModal(){
      this.$emit('closeModal')
      // this.is_show = !this.is_show;
    }
  }
}
</script>

<style scoped>
.msgbox {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  
}
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: .5;
  background: #000;
}
.msgbox::after{
  content: "";
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
.message-box {
  display: inline-block;
  width: 80%;
  padding-bottom: 0.1rem;
  background-color: white;
  box-shadow: 0 0.02rem 0.12rem 0 rgba(0,0,0,.1);
  overflow: hidden;
  border:1px solid #EBEEF5;
  border-radius: 0.04rem;
  vertical-align: middle;
  text-align: left;
  font-size: 0.24rem;
}
.message_box-header {
  text-align: left;
  padding: 0.15rem 0.15rem 0.1rem;
  
}
.message_box-content {
  padding: 0.15rem 0.15rem 0.1rem;
}
.modal-img {
  display: block;
  margin: auto;
}
.message_box-footer {
  padding-top: 0.1rem;
  box-shadow: 0 -0.02rem 0 #ebebeb;
}
.msg_box-title span {
  font-size: 0.18rem;
}
/* @-webkit-keyframes showModal
{
  0% {top:0};
  50%{top:-2rem};
  100%{top:0};
} */
.lt-enter-active{
    animation: show-in 0.6s;
    transition: all 0.6s;
}
.lt-leave-active{
    animation: show-out 0.6s;
    transition: all 0.6s;
}

.lt-enter,.lt-leave-to{
    opacity: 0;
}
@keyframes show-in {
    0%{
        transform: translateY(-2rem);
    }
    100%{
        transform: translateY(0);
    }
}
@keyframes show-out {
    0%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(-2rem);
    }
}
</style>
