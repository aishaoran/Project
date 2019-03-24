<template>
  <div id="app">
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
    text-align: center;
    height: 100%;
    width: 10rem;
    margin: 0 auto;
    color: @font_color;
  }
</style>
