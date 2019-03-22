<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  axios.defaults.baseURL = 'http://10.210.225.124:145/'

  export default {
    name: 'App'
  }
</script>

<style lang="less">
  @import "./../static/site.comm.less";
  @import "./../static/site.vars.less";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
