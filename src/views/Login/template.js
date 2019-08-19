/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:00:31
 * @LastEditTime: 2019-08-19 17:03:37
 * @LastEditors: Please set LastEditors
 */
import auth from '@/api/auth'
window.auth = auth;
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        // request('/auth/login','get',{username:'zzz',password:12345688})
        // .then(res=>{
        //     console.log(1111)
        // })
    },
    watch: {

    },
    methods: {
        tishi(){
            this.$message.error('错了哦，这是一条错误消息');
        }
    },
    components: {

    },
};