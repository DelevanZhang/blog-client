<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 18:18:34
 * @LastEditTime: 2019-08-22 09:04:59
 * @LastEditors: Please set LastEditors
 -->
<template>
  <header>
    <div class="no-login" v-if="!isLogin">
      <span class="letter">LET'S SHARE</span>
      <span class="good">精品博客汇聚</span>
      <div>
        <el-button type="success">
          <router-link to="/Login">立即登录</router-link>
        </el-button>
        <el-button type="success">
          <router-link to="/Register">注册账号</router-link>
        </el-button>
      </div>
    </div>
    <div class="login" v-else>
      <span class="login-letter">
        <router-link to="/">LET'S SHARE</router-link>
      </span>
      <router-link to="/Create" class="pen">
        <img src="../assets/pencil.svg" class="pen" />
      </router-link>
      <menu>
        <img :src="user.avatar" class="avatar" />
        <ul class="menu">
          <li>
            <router-link to="/my">我的</router-link>
          </li>
          <li>
            <a href="#" @click="onLogout">注销</a>
          </li>
        </ul>
      </menu>
    </div>
  </header>
</template>

<script>
import auth from "@/api/auth.js";
import { mapActions, mapGetters } from "vuex";
window.auth = auth;
export default {
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters(["isLogin", "user"])
  },
  created() {
    this.checkLogin();
  },
  methods: {
    ...mapActions(["checkLogin", "logOut"]),
    onLogout() {
      this.logOut();
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/base.scss";

.no-login {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: $themeColor;
  color: white;
  padding: 12px;
}
.login {
  background-color: $themeColor;
  color: white;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 12% auto 30px 26px 40px 12%;
  align-items: center;
  position: relative;
  a {
    text-decoration: none;
    color: white;
  }
}
@media screen and (max-width: 812px) {
  .login {
    background-color: $themeColor;
    color: white;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 12% auto 20px 16px 30px 12%;
    align-items: center;
    a {
      text-decoration: none;
      color: white;
    }
  }
}

.letter {
  font-size: 40px;
  padding: 14px;
}
.good {
  font-size: 14px;
  padding: 14px;
}
.el-button {
  background-color: white;
  border-radius: 4px;
  font-size: 13px;
  color: rgb(0, 102, 0);
}
.login-letter {
  font-size: 40px;
  grid-row: 1/2;
  grid-column: 2/3;
}
@media screen and (max-width: 812px) {
  .login-letter {
    font-size: 20px;
    grid-row: 1/2;
    grid-column: 2/3;
  }
}
.pen {
  width: 30px;
  height: 30px;
  grid-row: 1/2;
  grid-column: 3/4;
}
@media screen and (max-width: 812px) {
  .pen {
    width: 20px;
    height: 20px;
    grid-row: 1/2;
    grid-column: 3/4;
  }
}
menu {
  grid-row: 1/2;
  grid-column: 5/6;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

@media screen and (max-width: 812px) {
  .avatar {
    width: 30px;
    height: 30px;
  }
}
.menu {
  display: none;
  position: absolute;
  list-style: none;
  border: 1px solid #eaeaea;
  margin: 0;
  padding: 0;
  background-color: #fff;
  width: 40px;
  z-index: 1000;
  a {
    text-decoration: none;
    font-size: 12px;
    display: block;
    color: #333;
    padding: 5px 5px;
    &:hover {
      background-color: #eaeaea;
    }
  }
}
menu:hover ul {
  display: block;
  cursor: pointer;
}
.el-button {
  a {
    text-decoration: none;
    color: $themeColor;
  }
}
</style>

