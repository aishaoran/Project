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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../static/site.comm.less";
  @import "../../static/site.vars.less";

  .index {

  }
</style>
