<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:00:12
 * @LastEditTime: 2019-08-21 10:03:22
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="login" @keyup.enter="onLogin">
    <h4>用户名</h4>
    <el-input v-model="username" type="text" placeholder="用户名" />
    <h4>密码</h4>
    <el-input v-model="password" type="password" placeholder="密码" />
    <el-button type="success" @click="onLogin">立即登录</el-button>

    <p class="notice">
      没有账号？
      <router-link to="/register">注册新用户</router-link>
    </p>
  </div>
</template>

<script src="./template.js">
</script>

<style scoped lang="scss" src="./template.scss">
</style>
