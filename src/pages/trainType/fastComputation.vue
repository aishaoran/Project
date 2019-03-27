<template>
  <div class="fastComputation">
    <P class="theme">闪算训练</P>
    <p class="content">{{content}}</p>
    <div class="answer" v-show="answerShow">
      <input type="text" v-model="userAnswer" placeholder="请输入答案"/>
      <button class="but" @click="commitAnswer">提交</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fastComputation',
    data() {
      return {
        answerShow: false,//控制显示答案输入
        content: '',//显示类容
        params: {},//地址栏参数
        questionContent: '',//题目内容
        questionAnswer: 0,//题目答案
        userAnswer: 0,//用户答案
        timeOut: null,//定时器
        arr:['准备…','加油！','开始!'],//开始提示
      }
    },
    mounted() {
      this.params = this.$route.query;
      this.run();
    },
    methods: {
      run() {
        //初始化规则,加法初始值为0，乘除法初始值为1
        this.questionAnswer=this.params.rule==0 ? 0 : 1

        var i = 0;
        var _this=this;
        this.timeOut=setInterval(function () {
          _this.content=_this.arr[i];
          i++;
          if(i>=_this.arr.length) {
            clearInterval(_this.timeOut);
            _this.startFast();
          }
        },1000)
      },
      //开始闪算
      startFast(){
        var n = 10;//设置整数位基数
        for (var i = 1; i < this.params.integerBit; i++) {
          n *= 10;
        }

        //准备定时器循环
        var i = 1;
        var number;
        var _this = this
        //根据笔数和时间控制循环次数
        this.timeOut = setInterval(function () {

          number = 0;
          //生成随机数
          number = parseFloat((Math.random() * n).toFixed(_this.params.floatBit))
          //随机生成1或0
          if (Math.floor(Math.random() * 2)) {
            number = -number
          }
          _this.content = number
          //插入题目和计算答案
          _this.calculation(number,i);

          console.log(number)
          i++;
          if (i > _this.params.numberCount) {
            clearInterval(_this.timeOut);
            setTimeout(function () {
              _this.answerShow=true;
              _this.content = '答案?';
              _this.userAnswer='';
            },_this.params.time * 1000)
          }
        }, this.params.time * 1000);
      },
      //插入题目和计算答案
      calculation(num,i){
        console.log(typeof num)
        switch(parseInt(this.params.rule)){//规则判断
          case 0://加减法
            this.questionContent += this.questionContent ? (num<0?num : '+'+num) : num;
            this.questionAnswer=parseFloat((this.questionAnswer+num).toFixed(this.params.floatBit));
            break;
          case 1://乘法
            this.questionContent += this.questionContent ? (num<0?'*('+num+')' : '*'+num) : num;
            this.questionAnswer=parseFloat((this.questionAnswer*num).toFixed(this.params.floatBit));
            break;
          case 2://除法
            this.questionContent += this.questionContent ? (num<0?'/('+num+')' : '/'+num) : num;
            if(i==1)//第一个数
              this.questionAnswer=num;
            else
              this.questionAnswer=parseFloat((this.questionAnswer/num));
        }
        console.log(this.questionContent)
        console.log(this.questionAnswer)
      },
      //提交答案
      commitAnswer(){
        if(this.questionAnswer==this.userAnswer){
          confirm('恭喜，算对啦!')
        }else if(Math.abs(this.questionAnswer-this.userAnswer)<=5){
          confirm('就差一点就算对了!!!\n你离正确答案只差'+Math.abs(this.questionAnswer-this.userAnswer))
        }
        else{
          confirm('失败了，再接再厉吧!\n只要功夫深，铁杵磨成针')
        }
      }
    }
  }
</script>

<style lang="less">
  @import "./../../../static/site.vars.less";

  .fastComputation {
    height: 100%;
    background: url("./../../../static/img/train_bk.png") no-repeat center 75%;
    background-size: 70% 50%;
    .answer {
      margin-top: 20px;
      input {
        vertical-align: top;
        line-height: 35px;
        width: 5rem;
        padding-left: 10px;
        font-size: 20px;
        border: @nav_bk_color 1px solid;
        box-shadow: @nav_bk_color 1px 1px 5px 2px;
        margin-right: 10px;
      }
      .but {
        width: 2rem;
      }
    }
  }
</style>
