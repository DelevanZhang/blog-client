import blog from '@/api/blog.js'
export default {
    data(){
        return {
            blogId:null,
            title:'',
            description:'',
            content:'',
            atIndex:false
        }
    },
    created(){
        this.blogId = this.$route.params.blogId
        blog.getBlogDetail({blogId:this.blogId})
        .then(res=>{
            console.log("res")
            console.log(res)
            this.title = res.data.title
            this.description = res.data.description
            this.content = res.data.content
            this.atIndex = res.data.atIndex
            console.log("TCL: created -> this.atIndex", this.atIndex)
        })
    },
    methods:{
        onEdit(){
            blog.modifyBlog({blogId:this.blogId},{title:this.title,content:this.content,description:this.description,atIndex:this.atIndex})
            .then(()=>{
                this.$message.success('提交成功')
                this.$router.push({path:`/Detail/${this.blogId}`})
            })
        }
    }
}