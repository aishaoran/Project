<template>
  <div class="home">
    <div class="butBox">
      <button class="but" @click="wrapShow=true">闪算训练</button>
    </div>
    <div class="wrap" v-show="wrapShow" @mouseleave="wrapShow=false">
      <h1>设置</h1>
      <div class="text">
        <span>规&nbsp;&nbsp;&nbsp;则:</span>
        <myselect :selectList="ruleList" :title="ruleList[rule]" :hideInput="true"
                  @selectParameter="selectRule"></myselect>
      </div>
      <div class="text">
        <span>笔&nbsp;&nbsp;&nbsp;数:</span>
        <myselect :selectList="numberCountList" :title="numberCount" @selectParameter="selectNumberCount"></myselect>
      </div>
      <div class="text">
        <span>时&nbsp;&nbsp;&nbsp;间:</span>
        <myselect :selectList="timeList" :title="time" @selectParameter="selectTime"></myselect>
      </div>
      <div class="text">
        <span>整数位:</span>
        <myselect :selectList="integerBitList" :title="integerBit" @selectParameter="selectIntegerBit"></myselect>
      </div>
      <div class="text">
        <span>小数位:</span>
        <myselect :selectList="floatBitList" :title="floatBit" @selectParameter="selectFloatBit"></myselect>
      </div>
      <div class="text">
        <button class="but" @click="jump">开始</button>
      </div>
    </div>
  </div>
</template>

<script>
  import myselect from '@/components/select/index'

  export default {
    name: 'home',
    components: {myselect},
    data() {
      return {
        wrapShow: false,//弹层显示
        ruleList: ["加减法", "乘法", "除法"],//规则
        rule: 0,
        numberCountList: [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20],//笔数
        numberCount: 2,
        integerBitList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],//整数位数
        integerBit: 1,
        floatBitList: [0, 1, 2, 3, 4, 5],//小数位数
        floatBit: 0,
        timeList: [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6],//时间
        time: 1,
      }
    },
    methods: {
      //规则列表选择
      selectRule(data) {
        this.rule = this.ruleList.indexOf(data) == -1 ? 0 : this.ruleList.indexOf(data)
      },
      //笔数列表选择
      selectNumberCount(data) {
        this.numberCount = data;
      },
      //整数位数列表选择
      selectIntegerBit(data) {
        this.integerBit = data;
      },
      //小数位数列表选择
      selectFloatBit(data) {
        this.floatBit = data;
      },
      //时间列表选择
      selectTime(data) {
        this.time = data;
      },
      jump() {
        this.wrapShow = false;
        window.location.href = '#/trainType/fastComputation?rule=' + this.rule +
          '&numberCount=' + this.numberCount + '&integerBit=' + this.integerBit +
          '&floatBit=' + this.floatBit + '&time=' + this.time;
      }
    }
  }
</script>

<style lang="less">
  .home {
    .text {
      line-height: 50px;
      &:nth-child(2) {
        margin-top: 0.5rem;
      }
      &:nth-last-child(1) {
        margin-top: 1rem;
      }
      span {
        font-size: 20px;
        vertical-align: middle;
      }
      .but {
        line-height: 1rem;
        width: 3rem;
      }
    }

  }
</style>
