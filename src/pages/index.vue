<template>
  <div class="index">
    系统首页，介绍该系统
    <div class="introduce"></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
      }
    }
  }
</script>

<style lang="less">
  @import "../../static/site.comm.less";
  @import "../../static/site.vars.less";

  .index {
    margin-top: 1rem;
    padding: 0.05rem;
    .font-dpr(14px);
    .introduce{
      height: 500px;
    }
  }
</style>
