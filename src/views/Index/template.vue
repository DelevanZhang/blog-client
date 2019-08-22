<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:00:58
 * @LastEditTime: 2019-08-22 11:46:51
 * @LastEditors: Please set LastEditors
 -->

<template>
  <div id="index" v-if="loading">
    <div class="wrapper" v-for="blog in blogs" :key="blog.id">
      <img :src="blog.user.avatar" :alt="blog.user.username" />
      <span>{{blog.user.username}}</span>
      <router-link :to="`/Detail/${blog.id}`">
        <div class="airtic">
          <div>
             <h4>{{blog.title}}</h4>
             {{friendlyDate(blog.createdAt)}}
          </div>
          <p>{{blog.description}}</p>
        </div>
      </router-link>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
    ></el-pagination>
  </div>
</template>

<script src="./template.js">
export default {};
</script>

<style scoped lang="scss" src="./template.scss">
</style>