/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 12:09:06
 * @LastEditTime: 2019-08-20 20:18:11
 * @LastEditors: Please set LastEditors
 */
import Auth from '@/api/auth';
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
        commit('setLogin',{isLogin:res.isLogin})
        commit('setUser',{user:res.data})
       },
    async logOut({commit}){
        await Auth.logout()
        commit('setUser',{user:null})
        commit('setLogin',{isLogin:false})
    },
    login({ commit }, { username, password }) {
        return Auth.login({ username, password })
          .then(res => {
          console.log("TCL: login -> res", res)
          commit('setUser',{user:res.data})
          commit('setLogin',{isLogin:true})
          })
      },
    async ll ({ commit }, { username, password }){
            let res = await Auth.login({ username, password })
            commit('setUser', { user: res.data })
            commit('setLogin', { isLogin: true })
      }
}
 
export default{
    state,
    getters,
    mutations,
    actions
    
}