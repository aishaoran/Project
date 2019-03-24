<template>
  <div class="index">
    <top></top>
  </div>
</template>

<script>
  import top from '@/components/top/index'

  export default {
    name: 'index',
    components:{top},
    data() {
      return {
      }
    }
  }
</script>

<style lang="less">
  @import "../../../static/site.comm.less";
  @import "../../../static/site.vars.less";

  .index {

  }
</style>
