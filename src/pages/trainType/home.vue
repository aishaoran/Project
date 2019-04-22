<template>
  <div class="home">
    <div class="butBox">
      <button class="but" @click="trainType=1;wrapShow=true">数字记忆</button>
      <button class="but" @click="trainType=2;wrapShow=true">珠像训练</button>
      <button class="but" @click="trainType=3;wrapShow=true">闪算训练</button>
    </div>
    <div class="wrap" v-show="wrapShow" @mouseleave="wrapShow=false">
      <h1>设置</h1>
      <div class="text" v-if="trainType==3">
        <span>规&nbsp;&nbsp;&nbsp;则:</span>
        <myselect :selectList="ruleList" :title="ruleList[rule]" :hideInput="true"
                  @selectParameter="selectRule"></myselect>
      </div>
      <div class="text" v-show="rule==0">
        <span>笔&nbsp;&nbsp;&nbsp;数:</span>
        <myselect :selectList="numberCountList" :title="numberCount+'笔'"
                  @selectParameter="selectNumberCount"></myselect>
      </div>
      <div class="text">
        <span>时&nbsp;&nbsp;&nbsp;间:</span>
        <myselect :selectList="timeList" :title="time+'秒'" @selectParameter="selectTime"></myselect>
      </div>
      <div class="text" v-if="trainType==3">
        <span>{{integerLabel}}:</span>
        <myselect :selectList="integerBitList" :title="integerBit+'位'" @selectParameter="selectIntegerBit"></myselect>
      </div>
      <div class="text" v-if="trainType==3">
        <span>{{floatLabel}}:</span>
        <myselect :selectList="floatBitList" :title="floatBit+'位'" @selectParameter="selectFloatBit"></myselect>
      </div>
      <div class="text" v-if="trainType!=2">
        <span>类&nbsp;&nbsp;&nbsp;型:</span>
        <myselect :selectList="typeList" :title="typeList[type]" :hideInput="true"
                  @selectParameter="selectType"></myselect>
      </div>
      <div class="text">
        <button class="but" @click="jump">开始</button>
      </div>
    </div>
  </div>
</template>

<script>
  import myselect from '@/components/select/index'
  import trainType from "../../routers/trainType";

  export default {
    name: 'home',
    components: {myselect},
    data() {
      return {
        trainType: 1,//训练类型:1数字记忆,2珠像训练,3闪算训练
        wrapShow: false,//弹层显示
        ruleList: ["加减法", "乘法", "除法"],//规则
        rule: 0,
        numberCountList: [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20],//笔数
        numberCount: 2,
        integerLabel: "整位数",
        integerBitList: [0, 1, 2, 3, 4, 5],//整数位数
        integerBit: 1,
        floatLabel: "小位数",
        floatBitList: [0, 1, 2, 3, 4, 5],//小数位数
        floatBit: 0,
        timeList: [0.3, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6],//时间
        time: 1,
        type: 0,//闪类型：单笔闪，整体闪
        typeList: ["单笔闪", "整体闪"]
      }
    },
    methods: {
      //规则列表选择
      selectRule(data) {
        this.rule = this.ruleList.indexOf(data) == -1 ? 0 : this.ruleList.indexOf(data);
        if (this.rule == 0) {//等于零，加减法
          this.integerLabel = '整数位';
          this.integerBit = 1;
          this.floatLabel = '小数位'
          this.floatBit = 0;
        } else if (this.rule == 1) {//乘法
          this.integerLabel = '被乘数';
          this.integerBit = 2;
          this.floatLabel = '乘数位'
          this.floatBit = 1;
        } else {//除法
          this.integerLabel = '被除数';
          this.integerBit = 2;
          this.floatLabel = '除数位'
          this.floatBit = 1;
        }
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
      //类型选择
      selectType(data) {
        this.type = this.typeList.indexOf(data) == -1 ? 0 : this.typeList.indexOf(data);
      },
      jump() {
        this.wrapShow = false;
        var url = 'numberCount=' + this.numberCount + '&time=' + this.time;
        if (this.trainType == 1) {
          window.location.href = '#/trainType/digitalMemory?' + url + '&type=' + this.type;
        } else if (this.trainType == 2) {
          window.location.href = '#/trainType/beadImage?' + url;
        } else if (this.trainType == 3) {
          window.location.href = '#/trainType/fastComputation?' + url + '&rule=' + this.rule +
            '&integerBit=' + this.integerBit + '&floatBit=' + this.floatBit + '&type=' + this.type;
        }
      }
    }
  }
</script>

<style lang="less">
  .home {
    .butBox{
      margin-top: 50%;
      transform: translateY(-50%);
      .but {
        font-size: 26px;
        font-family: STXingKai, Kaiti, 'Comic Sans MS', sans-serif;
        background-size: 100% 100%;
        background-color: rgba(255, 255, 255, 0);
        vertical-align: bottom;
        text-align: left;
        display: block;
        margin: 0 auto 0.5rem;
      }
      .but:nth-child(1) {
        background-image: url("./../../../static/img/button_bk1.png");
        padding-top: 18px;
        padding-bottom: 8px;
        padding-left: 0.5rem;
        padding-right: 2rem;
      }
      .but:nth-child(2) {
        background-image: url("./../../../static/img/button_bk2.png");
        padding-top: 20px;
        padding-bottom: 3px;
        padding-left: 2rem;
        padding-right: 0.5rem;
      }
      .but:nth-child(3) {
        background-image: url("./../../../static/img/button_bk3.png");
        padding-top: 15px;
        padding-bottom: 5px;
        padding-left: 0.5rem;
        padding-right: 2rem;
      }
    }

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
