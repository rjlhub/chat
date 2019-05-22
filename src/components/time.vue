<template>
  <div>
    <ul class="block-text">
      <li :class="item.className" v-for="item in list" :key="item.id">
        <div class="li-text">{{item.label}}</div>
      </li>
    </ul>
    <ipt v-model="text" placeholder="改下"></ipt>
    <p>{{text}}</p>
    <p class="time"> 距离结束还有：{{timeCount}} </p>
    <p class="time">倒计时：{{maxss}}</p>
  </div>
</template>
<script>
import mix from '@/mixins'
import { setInterval } from 'timers';
import Ipt from '@/components/input';
export default {
  components: {
    Ipt
  },
  data(){
    return{
      text: '',
      list:[
        {
          id: 0,
          className: 'time',
          label: '123'
        },{
          id: 1,
          className: 'time',
          label: '456'
        }
      ],
      timeCount: 5,
      last_time: 0,
      timer: null,
      dateTimer: null,
      maxss:'',
      is_show: false,
      mix: mix.methods
    }
  },
  methods:{
    parseNum(num) {
      let list = String(num).split('').reverse();
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if(i % 4 === 3) {
          list.splice(i, 0, ',');
        }
      }
      return list.reverse().join('');
    },
    init() {
      
    },
    countDown(){
      if(!this.timer){
        this.timer = setInterval(() => {
          if(this.timeCount == 0) {
            clearInterval(this.timer)
            this.timer = null;
            this.is_show = true;
            this.timeCount = 5;
          } else {
            this.is_show = false;
            this.timeCount--;
            // console.log(this.timeCount)
          }
        }, 1000);
      }else{
      }
    }
  },
  created(){
    // this.countDown()
  },
  mounted(){
    this.dateTimer = setInterval(() => {
      this.maxss = this.mix.dateDown(2019,4,22,16,9,0,this.dateTimer)
    }, 1000);
    
  }
  
}
</script>
<style lang="less" scoped>
  .time {
    font-size: 0.24rem;
    .li-text {
      font-size: 0.24rem;
      color: #313131;
      text-align: center;
    }
  }
</style>
