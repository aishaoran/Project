<template>
  <div class="top">
    <ul class="nav">
      <li :class="['nav_li',{open_code:item.url == curPath}]"
          v-for="(item,index) in topList" :key="index" @click="jump(index)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'top',//组件名
    data() {
      return {
        openIndex: 0,
        topList: [
          {name:"首页",url:'#/index'},
          {name: "在线训练", url: '#/trainType/home'},
          {name: "历史记录", url: '#/historyRecord/home'}
        ]
      }
    },
    //计算属性
    computed: {
      curPath() {
        return '#' + this.$route.path || '';
      }
    },
    methods: {
      jump(index){
        this.openIndex=index;
        location.href=this.topList[index].url
      }
    },
  }
</script>

<style lang="less">
  @import "../../../static/site.comm.less";
  @import "../../../static/site.vars.less";

  .top {
    line-height: 1rem;
    width: 9rem;
    border-radius: 0px 0px 10px 10px;
    .font-dpr(18px);
    background: url("../../../static/img/nav.png") repeat-x;
    color: @div_bk_color;
    position: fixed;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    .nav {
      .nav_li {
        width: 3rem;
        line-height: 0.8rem;
        display: inline-block;
        box-sizing: border-box;
        cursor: pointer;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
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
