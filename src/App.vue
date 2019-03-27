<template>
  <div id="app">
    <top></top><!--应用组件-->
    <router-view/><!--路由出口-->
  </div>
</template>

<script>
  import axios from 'axios'
  axios.defaults.baseURL = 'http://10.210.225.124:145/'

  //引入组件
  import top from '@/components/top/index'

  export default {
    name: 'App',
    components:{top},//组件声明
  }
</script>

<style lang="less">
  @import "./../static/site.comm.less";

  #app {
    font-family: 'Lato', "SCREEN GP Sans SC", "Microsoft YaHei", sans-serif;
    text-align: center;
    height: calc(100% - 1rem);
    width: 10rem;
    margin: 0 auto;
    padding-top: 1rem;
    color: @font_color;
  }
</style>
