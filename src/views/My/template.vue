<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:02:05
 * @LastEditTime: 2019-08-22 15:20:35
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="my" v-if="loading">
    <header>
      <img :src="user.avatar" />
      <span>{{user.username}}</span>
    </header>
    <main v-for="blog in blogs" :key="blog.id">
      <time>
        <span class="day">{{spiltDate(blog.createdAt).date}}</span>
        <span class="month">{{spiltDate(blog.createdAt).month}}月</span>
        <span class="year">{{spiltDate(blog.createdAt).year}}</span>
      </time>
      <section>
        <router-link :to="`/Detail/${blog.id}`">
          <h4>{{blog.title}}</h4>
          <p>{{blog.description}}</p>
        </router-link>
        <span>
          <router-link :to="`/Edit/${blog.id}`">编辑</router-link>
        </span>
        <span @click="onDelete(blog.id)">删除</span>
      </section>
    </main>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
      :current-page="currentpage"
      :page-size="10"
    ></el-pagination>
  </div>
</template>

<script src="./template.js">
</script>

<style scoped lang="scss" src="./template.scss">
</style>