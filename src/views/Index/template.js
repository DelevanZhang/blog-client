/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:00:58
 * @LastEditTime: 2019-08-21 16:41:06
 * @LastEditors: Please set LastEditors
 */
import blog from '@/api/blog.js'
export default {
    data() {
        return {
            page: 1,
            blogs: [],
            total: 1,
            currentPage: 1,
        }
    },
    created() {
        this.page = this.$route.query.page || 1
        this.currentPage = 
        parseInt(this.$route.query.page || 1)
        blog.getIndexBlog({
                page: this.page
            })
            .then(res => {
                console.log("TCL: created -> res", res)
                this.blogs = res.data;
                this.total = res.total;
                
                
            })
    },
    methods: {
        handleCurrentChange(newPage) {
            this.page = newPage;
            blog.getIndexBlog({
                    page: this.page
                })
                .then(res => {
                    console.log("TCL: created -> res", res)
                    this.blogs = res.data;
                    this.totalPage = res.totalPage;
                })
                .then(res => {
                    this.$router.push({
                        path: '/',
                        query: {
                            page: newPage
                        }
                    })
                })

        }
    }
}