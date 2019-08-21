/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:00:31
 * @LastEditTime: 2019-08-20 20:23:26
 * @LastEditors: Please set LastEditors
 */
import {mapActions} from 'vuex';
import auth from "@/api/auth.js";
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },

  methods: {
    ...mapActions(['login']),

    onLogin() {
      this.login({username: this.username, password: this.password})
        .then(()=>{
          this.$router.push({path:'/'})
        })
    }
  }
}