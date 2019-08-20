/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 12:08:42
 * @LastEditTime: 2019-08-20 12:16:39
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Blog from './modules/blog'

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
       Auth,
       Blog 
    }
})
    
