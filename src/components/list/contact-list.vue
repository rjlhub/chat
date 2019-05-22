<template>
  <div>
    <div class="list column" v-for="(item,idx) in list" :key="idx" :ref="'ref'+idx">
      <div class="position-num">
        <p class="position">{{item.position}}</p>
      </div>
      <div style="padding: 0.04rem 0;">
        <div class="row contact-item" v-for="(user,index) in item.contactList" :key="index">
          <div class="center default-icon">
            <i class="el-icon-user" style="font-size: 0.24rem;"></i>
          </div>
          <img src="" class="userImg" alt="">
          <div style="flex:1;" class="userInfo column" :class="index==item.contactList.length-1?'noBorder':''">
            <p class="userName">{{user.name}}</p>
            <p class="signature ellipsis">{{user.signature}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="letter-list">
      <ul class="letter-ul">
        <li v-for="(letter,idx) in letters" 
          :key="idx" class="letter" 
          :class="[letter.active==1?'active':'',idx==0?'rotate':'']"
          @click="scrollTo($event,idx)">
          {{letter.name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[
        {
          position: 'A',
          imgSrc:'',
          contactList:[
            {
              name:'张小明',
              signature:'每个人的幸福不同，为什么要求自己世界不真理'
            }
          ]
        },
        {
          position: 'B',
          imgSrc:'',
          contactList:[
            {
              name:'阿俊',
              signature:'学完此教程，你能根据自己的业务逻辑实现相关'
            },{
              name:'阿俊',
              signature:'的函数封装及调用。'
            },{
              name:'阿俊',
              signature:'可以根据不同的需求封装不同层次的递归函数，'
            },{
              name:'阿俊',
              signature:'嵌套函数等。'
            }
          ]
        },
        {
          position: 'C',
          imgSrc:'',
          contactList:[
            {
              name:'阿俊',
              signature:'Thinkphp5.0仿百度糯米开发多商家电商平台'
            },{
              name:'阿俊',
              signature:'PHP小白零基础入门'
            },{
              name:'阿俊',
              signature:'PHP零基础入门到原生项目开发'
            },{
              name:'阿俊',
              signature:'Laravel快速开发简书'
            }
          ]
        },
        {
          position: 'D',
          imgSrc:'',
          contactList:[
            {
              name:'阿俊',
              signature:'Thinkphp5.0仿百度糯米开发多商家电商平台'
            },{
              name:'阿俊',
              signature:'PHP小白零基础入门'
            },{
              name:'阿俊',
              signature:'PHP零基础入门到原生项目开发'
            },{
              name:'阿俊',
              signature:'Laravel快速开发简书'
            }
          ]
        }
      ],
      letters:[{name:'→',active:0},
        {name:'A',active:1},{name:'B',active:0},{name:'C',active:0},{name:'D',active:0},{name:'E',active:0},
        {name:'F',active:0},{name:'G',active:0},{name:'H',active:0},{name:'I',active:0},{name:'J',active:0},
        {name:'K',active:0},{name:'L',active:0},{name:'M',active:0},{name:'N',active:0},{name:'O',active:0},
        {name:'P',active:0},{name:'Q',active:0},{name:'R',active:0},{name:'S',active:0},{name:'T',active:0},
        {name:'U',active:0},{name:'V',active:0},{name:'W',active:0},{name:'X',active:0},{name:'Y',active:0},
        {name:'Z',active:0},{name:'#',active:0}
      ]
    }
  },
  methods:{
    scrollTo(el,index){
      // console.log(el)
      let refIdx = index-1;
      // console.log(refIdx);
      let scrollTop = null;
      if(refIdx>=this.list.length){
        refIdx = this.list.length - 1;
      }
      if(index==0){
        scrollTop = 0;
      }else {
        scrollTop = (this.$refs['ref'+refIdx])[0].offsetTop - 50;
      };
      
      document.body.scrollTop = scrollTop
      document.documentElement.scrollTop = scrollTop
    }
  }
}
</script>

<style scoped>
  .list{
    
  }
  .position-num {
    height: 0.36rem;
    background-color: #f2f2f2;
    padding-left: 0.15rem;
  }
  .position {
    font-size: 0.14rem;
    font-weight: 500;
    color: #949090;
    line-height: 0.36rem;
  }
  .userName {
    font-size: 0.16rem;
    font-weight: 500;
  }
  .signature {
    font-size: 0.12rem;
    font-weight: 500;
    color: #999;
    margin-top: 0.03rem;
  }
  .contact-item {
    align-items: center;
    padding: 0 0.15rem;
    height: 0.64rem;
  }
  .default-icon {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: #f2f2f2;
  }
  .userInfo {
    height: 100%;
    padding-left: 0.1rem;
    border-bottom: 1px solid #f9f7f7;
    justify-content: center;
  }
  .noBorder {
    border-bottom: none;
  }
  .letter-list {
    position: fixed;
    right: 0;
    top: 54%;
    transform: translateY(-50%);
    width: 0.2rem;
  }
  .letter-ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .letter {
    font-size: 0.1rem;
    list-style: none;
    color: #b4b5b7;
    line-height: 1.4;
    width: 0.12rem;
    height: 0.12rem;
    line-height: 0.12rem;
    padding: 0.04rem 0 ;
    text-align: center;
  }
  .rotate {
    transform: rotate(-90deg);
    padding: 0 0.04rem;
  }
  .active {
    /* color: white;
    background-color: #077ddc;
    border-radius: 50%;
    margin: 0; */
  }
</style>
