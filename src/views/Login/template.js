/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:00:31
 * @LastEditTime: 2019-08-21 11:27:03
 * @LastEditors: Please set LastEditors
 */
import {mapActions} from 'vuex';
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
          this.$router.push({path:this.$route.query.redirect ||'/'})
        })
    }
  }
}