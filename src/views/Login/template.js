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
    ...mapActions(['login', 'll']),

    onLogin() {
      console.log('this.username', this.username)
      console.log('this.password', this.password)
      // this.login({username: this.username, password: this.password})
      //   .then(()=>{
      //     console.log('gggggggggggg')
      //     this.$router.push({path: this.$route.query.redirect || '/'})
      //   })
      // this.ll({username: this.username, password: this.password})
      auth.login({
        username: this.username,
        password: this.password
      })
    }
  }
}