<template>
  <div class="selectBox" @mouseover="showIdy=true" @mouseleave="showIdy=false">
    <div class="sel_selected">
      {{title}}
    </div>
    <div class="sel_box" v-show="showIdy">
      <div class="sel_input" v-show="!hideInput">
        <input v-model="inputData"/>
        <i class="search" @click="selectParameter(inputData)"></i>
      </div>
      <ul class="sel_list">
        <li v-for="item in selectList" @click="selectParameter(item)">{{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    props: ['selectList', 'title', 'hideInput'],
    data() {
      return {
        showIdy: false,
        inputData:'',
      }
    },
    methods: {
      selectParameter(str) {
        this.showIdy = false;
        this.$emit('selectParameter', str);
      }
    }
  }
</script>

<style lang="less">
  @import "./../../../static/site.vars.less";

  .selectBox {
    font-weight: normal;
    font-size: 14px;
    display: inline-block;
    position: relative;
    width: 140px;
    line-height: 32px;
    height: 34px;
    border-radius: 2px;
    //z-index: 10;
    .sel_selected{
      text-align: left;
      height: 34px;
      padding-left: 10px;
      box-sizing: border-box;
      border: 1px solid @border_color;
      background: @select_bk_color url("./../../../static/img/xllb.png") no-repeat 122px;
    }
    .sel_box {
      position: absolute;
      left: 0;
      top:33px;
      width: 100%;
      z-index: 1;
      box-sizing: border-box;
      background-color: @select_bk_color;
      border: 1px solid @border_color;
      .sel_input {
        width: 100%;
        line-height: 35px;
        text-align: center;
        border-bottom: 1px solid @border_color;
        position: relative;
        input{
          width: 130px;
          height: 25px;
          border-radius: 35px;
          padding-left: 10px;
          border: 1px solid @border_color;
          box-sizing: border-box;
          background: @select_bk_color;
        }
        .search{
          display: inline-block;
          position: absolute;
          width: 20px;
          height: 20px;
          right: 10px;
          top: 8px;
          background: url("./../../../static/img/search.png") no-repeat center;
          background-size: 100%;
          cursor: pointer;
        }
      }
      ul.sel_list {
        width: 100%;
        height: 95px;
        overflow: auto;
        background-color: @select_bk_color;
        box-sizing: border-box;
        li {
          overflow: hidden;
          height: 31px;
          line-height: 31px;
          text-align: center;
          &:hover{
            background: @nav_bk_color;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
