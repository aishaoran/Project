<template>
  <div class="trainIndex">
    在线训练的公共层，在线训练的所有子页面都有此段
    <router-view></router-view><!--路由出口-->
  </div>
</template>

<script>
  export default {
    name: 'trainIndex',
    data() {
      return {
      }
    }
  }
</script>

<style lang="less">
  @import "../../../static/site.comm.less";
  @import "../../../static/site.vars.less";

  .trainIndex {
    margin-top: 1rem;
    padding: 0.05rem;
    .font-dpr(14px);
  }
</style>
