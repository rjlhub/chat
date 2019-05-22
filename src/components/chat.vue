<template>
    <div class="content">
        <div class="title">
          <div class="back-btn center" @click.stop="$router.go(-1)">
            <i class="el-icon-arrow-left"></i>
          </div>
            <p>{{defaultData.name }}</p>
        </div>
        <main>
          <div class="message">
              <ul>
                  <li v-for="(msg,index) in currentSession.list" :key="index">
                      <p>{{ msg.time }}</p>
                      <div class="msg" v-bind:class="msg.user.self == 1 ? 'self' : ''">
                          <img v-bind:src="msg.user.avatar" alt="">
                          <div class="text">{{ msg.msg }}</div>
                      </div>
                  </li>
              </ul>
          </div>
        </main>
        <footer class="msgInput">
          <div class="row center" style="align-items: flex-end;padding: 0.05rem 0;padding-left: 0.06rem;">
            <!-- <el-button plain slot="append" @click="sendMessage(session_id,input3)" :disabled="scope == 1">发送</el-button> -->
            <div style="display: flex;flex: 1;">
              <el-input placeholder="请输入内容" type="textarea" autosize resize="none" @input="handleSelect" v-model="input3" class="input-with-select msgtextarea"></el-input>
            </div>
            <div class="send-btn">
              <div class="send-default center" v-if="scope==1">
                <el-button icon="el-icon-plus" circle class="cricle-btn" style="font-size: 0.2rem;font-weight:bold;"></el-button>
              </div>
              <div class="send-default center" v-else>
                <el-button plain slot="append" @click="sendMessage(session_id,input3)" :disabled="scope == 1" class="sendbox">发送</el-button>
              </div>
              
              
              <!-- <el-button icon="el-icon-search" circle class="sendbox"></el-button> -->
            </div>
          </div>
        </footer>
    </div>

</template>

<script>
    export default {
        data(){
          return{
            defaultData:{
              name:'情传',
              id:'1',
            },
            currentSession:{
              list:[
                {
                  time:'2019-5-10',
                  show_time: 1,
                  user:{
                    id:'1',
                    self:1,
                    avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557479328704&di=04410af224e0d1387e12d11122a68c52&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110813%2F1993003_205156492136_2.jpg',
                    nickname:'nickname'
                  },
                  msg:'@mike 小程序，我的课程里，还有2018年的课程，需要下架'
                },{
                  time:'',
                  show_time: 0,
                  user:{
                    id:'0',
                    self:0,
                    avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557480680082&di=da07b0ad35cf4b459bcb9379d403a9a9&imgtype=0&src=http%3A%2F%2Fwww.sucaitianxia.com%2Fsheji%2Fpic%2F200902%2F20090208015345473.jpg',
                    nickname:'nickname'
                  },
                  msg:'小程序的接口，是哪个哦？我去看看'
                }
              ]
            },
            session_id:'2',
            input3:'',
            scope: 1
          }
        },
        created(){
          // console.log(this.$route.params)
          this.defaultData = this.$route.params;
        },
        methods:{
          testText(){
            this.$log(this.input3)
            return this.input3;
          },
          handleSelect(item) {
            this.input3 = item;
            if(this.input3.length > 0){
              this.scope = 0;
            }else{
              this.scope = 1;
            }
          },
          sendMessage(id,item){
            if(this.input3 != null){
              this.$log(id,item);
              let newMsg = {
                time:'',
                show_time: 0,
                user:{
                  id:'1',
                  self:1,
                  avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557479328704&di=04410af224e0d1387e12d11122a68c52&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110813%2F1993003_205156492136_2.jpg',
                  nickname:'nickname'
                },
                msg: item
              }
              this.currentSession.list.push(newMsg);
              this.$log(this.currentSession.list)
              this.input3 = null;
            }else{
              this.input3 = '';
              this.scope = 1;
            }
          }
        },
        computed:{
          
        }
    }
</script>

<style lang="less" scoped>
    .content{
        display: flex;
        flex-direction: column;
        .title{
          position: sticky;
          top:0;
          height: 0.5rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 1px solid #d6d6d6;
          background-color: white;
          .back-btn {
            height: 0.5rem;
            width: 0.5rem;
            i{
              font-size: 0.2rem;
              color:#212121;
              font-weight: 500;
            }
          }
          p{
              text-align: center;
              font-size: 0.16rem;
              color: #666;
          }
        }
        .message{
          overflow-y: scroll;
          padding: 0.1rem 0.15rem 0.4rem;
          // height: 400px;
          &::-webkit-scrollbar-button{
              display: none;
          }
          &::-webkit-scrollbar{  
              width: 0.08rem;  
              // background-color: #eee;  
          }  
            
          /*定义滚动条轨道 内阴影+圆角*/  
          &::-webkit-scrollbar-track{   
              // background-color: #eee;  
          }  
            
          /*定义滑块 内阴影+圆角*/  
          &::-webkit-scrollbar-thumb{  
              border-radius: 0.1rem;  
              // background: #ccc;
          }  
          li{
              display: flex;
              flex-direction: column;
              margin-bottom: 0.15rem;
              p{
                  align-self: center;
                  padding: 0 18px;
                  font-size: 12px;
                  color: #fff;
                  border-radius: 2px;
                  background-color: #dcdcdc;
                  margin: 5px 0px;
              }
              .msg{
                  display: flex;
                  flex-direction: row;
                  img{
                      width: 0.3rem;
                      height: 0.3rem;
                      margin-right: 0.1rem;
                      flex-shrink: 0;
                      border-radius: 0.05rem;
                  }
                  .text{
                      padding: 0.1rem;
                      // min-height: 0.3rem;
                      font-size: 0.14rem;
                      text-align: left;
                      word-break: break-all;
                      background: #fafafa;
                      border-radius: 0.04rem;
                      line-height: 1.4;
                  }
              }
              .self{
                  flex-direction: row-reverse;
                  .text{
                      background: #b2e281;
                  }
                  img{
                      margin-right: 0px; margin-left: 0.1rem;
                  }
              }
          }
        }
        .msgInput {
          position: fixed;
          left:0;
          bottom: 0;
          right: 0;
          font-size: 0.24rem;
          background-color: #dedede;
          .send-btn{
            border-radius: 0.04rem;
            margin: 0 0.06rem;
            .send-default{
              // width: 0.4rem;
              // padding: 0 0.14rem;
            }
            .sendbox {
              background-color: #67c23a;
              border: none;
              color: white;
              padding: 0;
              font-size: 0.14rem;
              height: 0.33rem;
              // width: 0.56rem;
              width: 0.33rem;
            }
            .cricle-btn {
              width: 0.33rem;
              height: 0.33rem;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0;
              background-color: #67c23a;
              color: white;
              font-weight: bold;
              i{
                font-weight: bold;
              }
            }
            // .sendbox-icon{
            //   background-color: transparent;
            //   height: 0.33rem;
            //   .cricle-btn {
            //     width: 0.2rem;
            //     height: 0.2rem;
            //     border-radius: 50%;
            //     background-color: #67c23a;
            //   }
            // }
          }
          
        }
    }
</style>
