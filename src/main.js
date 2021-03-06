/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 11:45:52
 * @LastEditTime: 2019-08-21 19:42:21
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store/index.js'
import util from '@/helps/util.js'
Vue.config.productionTip = false
Vue.use(util)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')