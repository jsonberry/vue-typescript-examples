import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Msg from '@/components/Msg.vue'
import ErrorPage from '@/components/ErrorPage.vue'
import Parent from '@/components/Parent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/hello/:msg',
      name: 'Message',
      component: Msg
    },
    {
      path: '*',
      name: '404',
      component: ErrorPage
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    }
  ]
})
