<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:01:57
 * @LastEditTime: 2019-08-22 11:48:46
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div id="user" v-if="loading">
       <header>
            <img :src="user.avatar">
            <span>{{user.username}}</span>
        </header>
        <main v-for="blog in blogs" :key=blog.id>
            <time>
                <span class="day">{{spiltDate(blog.createdAt).date}}</span>
                <span class="month">{{spiltDate(blog.createdAt).month}}月</span>
                <span class="year">{{spiltDate(blog.createdAt).year}}</span>
            </time>
            <router-link :to="`/Detail/${blog.id}`">
                <h4>{{blog.title}}</h4>
                <p>{{blog.description}}</p>
            </router-link>
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