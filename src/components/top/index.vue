<template>
  <div class="top">
    <ul class="nav">
      <li :class="['nav_li',{open_code:index==openIndex}]"
          v-for="(item,index) in topList" :key="index">{{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'top',
    data() {
      return {
        openIndex: 0,
        topList: [
          {name: "在线训练", url: ''},
          {name: "历史记录", url: ''}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../../static/site.comm.less";
  @import "../../../static/site.vars.less";

  .top {
    height: 0.5rem;
    width: 8rem;
    margin: 0 auto;
    border-radius: 0px 0px 10px 10px;
    background: url("../../../static/img/nav.png") repeat-x;
    color: @div_bk_color;
    .nav {
      .nav_li {
        width: 4rem;
        display: inline-block;
        line-height: 0.5rem;
        font-weight: bold;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        box-sizing: border-box;
        &:nth-child(1) {
          border-left: none;
        }
        &:nth-last-child(1) {
          border-right: none;
        }
      }
      .open_code {
        color: @nav_font_color;
      }
    }
  }
</style>
