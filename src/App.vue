<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 11:45:52
 * @LastEditTime: 2019-08-22 09:39:58
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <Top id="header"></Top>
    <main id="main">
      <router-view></router-view>
    </main>
    <Bottom id="footer"></Bottom>
  </div>
</template>

<script>
import Top from "./components/Top.vue";
import Bottom from "./components/Bottom.vue";

export default {
  name: "app",
  components: {
    Top,
    Bottom
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}
#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 12% auto 12%;
}
@media screen and (max-width: 400px) {
  #app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 12px auto 12px;
}
}
#header {
  grid-row: 1/2;
  grid-column: 1/4;
}
#main {
  grid-row: 2/3;
  grid-column: 2/3;
}
#footer {
  grid-row: 3/4;
  grid-column: 1/4;
}
</style>
