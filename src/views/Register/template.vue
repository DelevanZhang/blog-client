<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:02:13
 * @LastEditTime: 2019-08-16 13:01:55
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="register" @keyup.enter="onRegister">
    <h4>用户名</h4>
    <el-input v-model="username" type="text" placeholder="用户名"/>
    <h4>密码</h4>
    <el-input v-model="password" type="password" placeholder="密码" />
    <el-button type="success" @click="onRegister">立即注册</el-button>
    <p class="notice">
      已有账号？
      <router-link to="/Login">直接登陆</router-link>
    </p>
  </div>
</template>

<script src="./template.js">

</script>

<style scoped lang="scss" src="./template.scss">

</style>