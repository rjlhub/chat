import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Message from '@/components/message'
import Contact from '@/components/contact'
import Mine from '@/components/mine'

// 收藏
import myCollect from '@/components/myCollect'
import newVersion from '@/components/newVersion'
// 聊天chat
import Chat from '@/components/chat'
// block
import block from '@/components/time'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },{
      path: '/',
      name: 'Message',
      component: Message
    },{
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },{
      path: '/myCollect',
      name: 'myCollect',
      component: myCollect
    },{
      path: '/newVersion',
      name: 'newVersion',
      component: newVersion
    },{
      path: '/Chat',
      name: 'Chat',
      component: Chat
    },{
      path: '/block',
      name: 'block',
      component: block
    }
  ]
})
