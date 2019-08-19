/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 16:30:24
 * @LastEditTime: 2019-08-19 17:07:35
 * @LastEditors: Please set LastEditors
 */
import requst from '@/helps/request'

const URL = {
    REGISTER : '/auth/register', //注册
    LOGIN :'/auth/login', //登录
    ISLOGIN : '/auth', //是否登录
    LOGOUT : '/auth/logout', //注销登录
}
export default {
    register({username,password}) {
        return requst(URL.REGISTER, 'post', {username,password})
    },
    login({username,password}) {
        return requst(URL.LOGIN, 'post', {username,password})
    },
    isLogin() {
        return requst(URL.ISLOGIN, 'get')
    },
    logout() {
        return requst(URL.LOGOUT, 'get')
    },

}