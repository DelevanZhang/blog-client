/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 11:45:52
 * @LastEditTime: 2019-08-19 18:18:14
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/template.vue'
import Blog from './views/Blog/template.vue'
import Create from './views/Create/template.vue'
import Edit from './views/Edit/template.vue'
import Index from './views/Index/template.vue'
import My from './views/My/template.vue'
import Register from './views/Register/template.vue'
import User from './views/User/template.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/Blog',
      component: Blog
    },
    {
      path: '/Create',
      component: Create
    },
    {
      path: '/Edit',
      component: Edit
    },
    {
      path: '/Index',
      component: Index
    },
    {
      path: '/My',
      component: My
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/User',
      component: User
    },
  ]
})
