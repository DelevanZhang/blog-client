/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:00:58
 * @LastEditTime: 2019-08-20 15:13:19
 * @LastEditors: Please set LastEditors
 */
import {mapActions} from 'vuex'
export default {
    data(){
        return {

        }
    },
    methods:{
        ...mapActions([
            'isLogin'
        ]),
    }
}