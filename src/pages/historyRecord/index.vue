<template>
  <div class="historyIndex">
    <now></now>
    历史记录的公共页，历史记录的所有子页面都有此段
    <router-view></router-view>
  </div>
</template>

<script>
  import now from '@/components/now/index'
  export default {
    name: 'historyIndex',
    components:{now},
    data() {
      return {
      }
    }
  }
</script>

<style lang="less">
  @import "../../../static/site.comm.less";
  @import "../../../static/site.vars.less";
  .historyIndex {
    margin-top: 1rem;
    padding: 0.05rem;
    .font-dpr(14px);
  }
</style>
