/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:02:05
 * @LastEditTime: 2019-08-22 15:34:15
 * @LastEditors: Please set LastEditors
 */
import blog from '@/api/blog.js'
import {
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
            page: 1,
            atIndex: false,
            total: 0,
            blogs: [],
            loading: false,

        }
    },
    computed: {
        currentpage() {
            return parseInt(this.page)
        },
        ...mapGetters(['user'])

    },
    created() {
        this.page = this.$route.query.page || 1
        console.log(this.user)
        blog.getBlog({
                page: this.page,
                userId: this.user.id,
                atIndex: this.atIndex
            })
            .then(res => {
                this.loading = true;
                this.total = res.total;
                this.blogs = res.data;
            })
    },
    methods: {

        spiltDate(dateStr) {
            let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr);
            return {
                date: dateObj.getDate(),
                month: dateObj.getMonth() + 1,
                year: dateObj.getFullYear()
            }
        },
        handleCurrentChange(newPage) {
            this.page = newPage;
            blog.getBlog({
                    page: this.page,
                    userId: this.user.id,
                    atIndex: this.atIndex
                })
                .then(res => {
                    this.loading = true;
                    this.total = res.total;
                    this.blogs = res.data;
                    this.$router.push({
                        path: '/My',
                        query: {
                            page: newPage
                        }
                    })
                })
        },
        async onDelete(blogId) {
            await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            await blog.deleteBlog({
                blogId: blogId
            })
            this.$message.success('删除成功')
            this.blogs = this.blogs.filter(blog=>{
                return blog.id != blogId
            })

        }
    }
}