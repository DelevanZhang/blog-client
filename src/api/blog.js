/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 16:30:46
 * @LastEditTime: 2019-08-21 14:58:20
 * @LastEditors: Please set LastEditors
 */
import request from '@/helps/request'
const URL = {
    GETBLOG :'/blog',//获取博客
    GETBLOGDETAIL :'/blog/:blogId',//博客详情
    CREATEBLOG:'/blog',//创建博客
    MODIFYBLOG:'/blog/:blogId',//修改博客u
    DELETEBLOG:'/blog/:blogId'//删除博客
}

export default {
    getBlog({page=1,userId,atIndex} = {page:1}){
        return request(URL.GETBLOG,'get',{page,userId,atIndex})
    },
    getIndexBlog({ page=1 } = { page: 1}) {
        return this.getBlog({ page, atIndex: true })
      },
    getBlogDetail({blogId}){
        return request(URL.GETBLOGDETAIL.replace(':blogId',blogId))
    },
    createBlog({title='',content='',description='',atIndex=false} = {title: '', content: '', description: '',atIndex:false}){
        return request(URL.CREATEBLOG,'post',{title,content,description,atIndex})
    },
    modifyBlog({blogId},{title,content,description,atIndex}){
        return request(URL.MODIFYBLOG.replace(':blogId',blogId),'patch',{title,content,description,atIndex})
    },
    deleteBlog({blogId}){
        return request(URL.DELETEBLOG.replace(':blogId',blogId),'delete')
    },
}