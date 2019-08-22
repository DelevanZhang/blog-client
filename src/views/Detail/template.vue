<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 12:01:46
 * @LastEditTime: 2019-08-22 10:36:57
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="detail">
    <header>
      <img :src="user.avatar" />
      <section>
        <h4>{{title}}</h4>
        <span>
          <router-link :to="`/User/${user.id}`">{{user.username}}</router-link>
          发布于{{friendlyDate(createdAt)}}
        </span>
      </section>
    </header>
    <main v-html="marked">
      
    </main>
  </div>
</template>

<script src="./template.js">
</script>

<style scoped lang="scss" src="./template.scss">
</style>
