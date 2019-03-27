<template>
  <div class="trainIndex">
    <now></now>
    <!--在线训练的公共层，在线训练的所有子页面都有此段-->
    <router-view></router-view><!--路由出口-->
  </div>
</template>

<script>
  import now from '@/components/now/index'
  export default {
    name: 'trainIndex',
    components:{now},
    data() {
      return {
      }
    }
  }
</script>

<style lang="less">
  @import "../../../static/site.comm.less";

  .trainIndex {
    padding: 0.05rem;
    .font-dpr(16px);
    box-sizing: border-box;
    height: 100%;
  }
</style>
