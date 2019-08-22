/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:01:57
 * @LastEditTime: 2019-08-22 11:49:34
 * @LastEditors: Please set LastEditors
 */
import blog from '@/api/blog.js'
export default {
    data() {
        return {
            userId: null,
            page: 1,
            atIndex: false,
            total: 0,
            user: {},
            blogs: [],
            loading:false,

        }
    },
    computed:{
        currentpage(){
          return parseInt(this.page)
        }
 
    },
    created() {
        this.page = this.$route.query.page || 1
        this.userId = this.$route.params.userId
        blog.getBlog({
                page: this.page,
                userId: this.userId,
                atIndex: this.atIndex
            })
            .then(res => {
                this.loading=true;
                this.total = res.total;
                this.blogs = res.data;
                if (res.data.length > 0) {
                    this.user = res.data[0].user
                    console.log("TCL: created -> this.user", this.user)
                }
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
                    userId: this.userId,
                    atIndex: this.atIndex
                })
                .then(res => {
                    this.loading=true;
                    this.total = res.total;
                    this.blogs = res.data;
                    if (res.data.length > 0) {
                        this.user = res.data[0].user
                        console.log("TCL: created -> this.user", this.user)
                    }
                    this.$router.push({ path: `/user/${this.userId}`, query: { page: newPage}})
                })
        }
    }
}