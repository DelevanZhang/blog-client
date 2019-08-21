/*
 * @Description: In User Settings Edi
 * @Author: your name
 * @Date: 2019-08-21 11:18:07
 * @LastEditTime: 2019-08-21 18:49:45
 * @LastEditors: Please set LastEditors
 */
import marked from 'marked'
import blog from '@/api/blog.js'
export default {
    data(){
        return {
            blogId:null,
            user:{},
            content:'',
            title:'',
            createdAt:'',
        }
    },
    created(){
        this.blogId = this.$route.params.blogId
      blog.getBlogDetail({blogId:this.blogId}) 
      .then(res=>{
          console.log(res)
          this.user = res.data.user;
          this.title = res.data.title;
          this.createdAt = res.data.createdAt;
          this.content = res.data.content;
      })
    },
    computed:{
        marked(){
            return marked(this.content)
        }
    },
    methods:{

    }
}