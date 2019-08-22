/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:01:25
 * @LastEditTime: 2019-08-22 10:11:12
 * @LastEditors: Please set LastEditors
 */
import blog from '@/api/blog.js'
import { Message } from 'element-ui';
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
            blog.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.atIndex})
            .then(res=>{this.$router.push({path:`/detail/${res.data.id}`})
            Message({
                showClose: true,
                message: '创建成功',
                type: 'success'
              });
        })
        }
    }
}