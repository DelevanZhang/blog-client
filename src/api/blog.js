/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 16:30:46
 * @LastEditTime: 2019-08-19 16:52:23
 * @LastEditors: Please set LastEditors
 */
import request from '@/helps/request'
const URL = {
    GETBLOG :'/blog',//获取博客
    GETBLOGDETAIL :'/blog/:blogId',//博客详情
    CREATEBLOG:'/blog',//创建博客
    MODIFYBLOG:'/blog/:blogId',//修改博客
    DELETEBLOG:'/blog/:blogId'//删除博客
}

export default {
    getBlog({page,userId,atIndex}){
        return request(URL.GETBLOG,'get',{page,userId,atIndex})
    },
    getBlogDetail({page,userId,atIndex}){
        return request(URL.GETBLOG,'get',{page,userId,atIndex})
    },
    getBlog({page,userId,atIndex}){
        return request(URL.GETBLOG,'get',{page,userId,atIndex})
    },
    getBlog({page,userId,atIndex}){
        return request(URL.GETBLOG,'get',{page,userId,atIndex})
    },
    getBlog({page,userId,atIndex}){
        return request(URL.GETBLOG,'get',{page,userId,atIndex})
    },
}