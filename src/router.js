/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 11:45:52
 * @LastEditTime: 2019-08-21 11:28:14
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
// import Login from './views/Login/template.vue'
// import Blog from './views/Blog/template.vue'
// import Create from './views/Create/template.vue'
// import Edit from './views/Edit/template.vue'
// import Index from './views/Index/template.vue'
// import My from './views/My/template.vue'
// import Register from './views/Register/template.vue'
// import User from './views/User/template.vue'

import store from '@/store/index.js'
Vue.use(Router)
//路由懒加载和路由元meta
const router =  new Router({
  routes: [
    {
      path: '/',
      component: () =>import('./views/Index/template.vue')
    },
    {
      path: '/Login',
      component: () =>import('./views/Login/template.vue')
    },
    {
      path: '/Detail/:blogId',
      component: () =>import('./views/Detail/template.vue')
    },
    
    {
      path: '/Create',
      component: () =>import('./views/Create/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/Edit/:blogId',
      component: () =>import('./views/Edit/template.vue'),
      meta: { requiresAuth: true }
    },
    
    {
      path: '/My',
      component: () =>import('./views/My/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/Register',
      component: () =>import('./views/Register/template.vue')
    },
    {
      path: '/User/:userId',
      component: () =>import('./views/User/template.vue')
    },
    // {
    //   path: '/Blog',
    //   component: () =>import('./views/Blog/template.vue')
    // },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin=>{
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }    
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router