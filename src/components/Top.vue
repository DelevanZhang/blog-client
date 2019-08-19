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
      <img src="../assets/pencil.svg" class="pen" />
      <img src="../assets/scientistavatar.svg" class="avatar" />
    </div>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      login: false
    };
  }
};
</script>

<style scoped lang="scss">
@import '../assets/base.scss';
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
}
@media (max-width: 812px) {
  .login {
    background-color: $themeColor;
    color: white;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 12% auto 20px 16px 30px 12%;
    align-items: center;
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
@media (max-width: 812px) {
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
@media (max-width: 812px) {
  .pen {
    width: 20px;
    height: 20px;
    grid-row: 1/2;
    grid-column: 3/4;
  }
}
.avatar {
  width: 40px;
  height: 40px;
  grid-row: 1/2;
  grid-column: 5/6;
}
@media (max-width: 812px) {
  .avatar {
    width: 30px;
    height: 30px;
    grid-row: 1/2;
    grid-column: 5/6;
  }
}
</style>

