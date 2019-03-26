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

  .index {
    padding: 0.05rem;
    .font-dpr(16px);
    height: 100%;
    box-sizing: border-box;
    .introduce{
    }
  }
</style>
