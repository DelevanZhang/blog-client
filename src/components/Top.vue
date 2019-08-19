<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 18:18:34
 * @LastEditTime: 2019-08-19 20:14:54
 * @LastEditors: Please set LastEditors
 -->
<template>
  <header>
    <div class="no-login" v-if="login">
      <span class="letter">LET'S SHARE</span>
      <span class="good">精品博客汇聚</span>
      <div>
        <el-button type="success">立即登录</el-button>
        <el-button type="success">注册账号</el-button>
      </div>
    </div>
    <div class="login" v-else>
      <span class="login-letter">LET'S SHARE</span>
      <div class="wrapper">
        <img src="../assets/pencil.svg" class="pen" />
        <img src="../assets/scientistavatar.svg" class="avatar" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      login: true
    };
  }
};
</script>

<style scoped>
.no-login {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #009933;
  color: white;
  padding:12px;
}
.login {
  background-color: #009933;
  color: white;
  display: flex;
  align-items: center;
  padding: 12px 12%;
  position: relative;
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
}
.wrapper {
    position: absolute;
    right:0;
    padding-right:12%;
}
.pen {
  width: 40px;
  height: 40px;
  margin-right:20px;

}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>

