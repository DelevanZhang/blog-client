/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 12:09:06
 * @LastEditTime: 2019-08-20 17:39:00
 * @LastEditors: Please set LastEditors
 */
import Auth from '@/api/auth'
import { longStackSupport } from 'q';
const state = {
    user:null,
    isLogin:false,
}
const getters = {
    user(state){
        return state.user
    },
    isLogin(state){
       return state.isLogin  
    }
    
}
const mutations = {
    setUser(state,payload){
        state.user = payload.user
    },
    setLogin(state,payload){
        state.isLogin = payload.isLogin
    }
}
const actions = {
    async checkLogin({commit,state}){
        if(state.isLogin){return true}
        let res = await Auth.isLogin()
        console.log('res')
        console.log(res)
        commit('setLogin',{isLogin:res.isLogin})
        commit('setUser',{user:res.data})
       },
    async logOut({commit}){
        await Auth.logout()
        commit('setUser',{user:null})
        commit('setLogin',{isLogin:false})
    }
}
 
export default{
    state,
    getters,
    mutations,
    actions
    
}