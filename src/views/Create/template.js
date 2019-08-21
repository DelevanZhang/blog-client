/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:01:25
 * @LastEditTime: 2019-08-21 14:23:17
 * @LastEditors: Please set LastEditors
 */
import blog from '@/api/blog.js'
export default {
    data(){
        return {
            blogId:'',
            title:'',
            description:'',
            content:'',
            atIndex:false,
        }
    },
    methods:{
        onEdit(){
            blog.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.methods})
            .then(res=>{this.$router.push({path:`/detail/${res.data.id}`})})
        }
    }
}