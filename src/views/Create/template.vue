<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:01:25
 * @LastEditTime: 2019-08-21 14:22:41
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <div class="title">
      <div>文章标题</div>
      <el-input
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入文章标题"
        v-model="title"
        maxlength="30"
        show-word-limit
      ></el-input>
    </div>
    <div class="intro">
      <div>内容简介</div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容简介"
        v-model="description"
        maxlength="200"
        show-word-limit
      ></el-input>
    </div>
    <div class="content">
      <div>文章内容</div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 20}"
        placeholder="请输入文章内容"
        v-model="content"
        maxlength="10000"
        show-word-limit
      ></el-input>
    </div>
    <div class="atIndex">
         <span>是否显示在首页</span>
         <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        <el-button type="success" @click="onEdit">保存</el-button>
    </div>
   
   
  </div>
</template>

<script src="./template.js">
</script>

<style scoped lang="scss" src="./template.scss">
</style>
