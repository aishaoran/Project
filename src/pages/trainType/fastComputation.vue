<template>
  <div class="fastComputation">
    <P class="theme">闪算训练</P>
    <p class="content" @click="content =='答案?'?content = questionContent+questionAnswer:''">{{content}}</p>
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
        arr: ['准备…', '加油!', '开始!'],//开始提示
        fastList: [],//闪烁数字列表
      }
    },
    mounted() {
      this.params = this.$route.query;
      this.run();
    },
    methods: {
      run() {
        this.answerShow=false;
        this.calculation();
        var i = 0;
        var _this = this;
        this.timeOut = setInterval(function () {
          _this.content = _this.arr[i];
          i++;
          if (i >= _this.arr.length) {
            clearInterval(_this.timeOut);
            _this.startFast()
          }
        }, 1000)
      },
      //开始闪算
      startFast() {
        var contentDOM = document.getElementsByClassName("content")[0].style;
        var _this = this
        //整体闪
        if (this.params.type==1){
          this.content=this.questionContent;
          setTimeout(function () {
            _this.content = '答案?';
            _this.userAnswer = '';
            _this.answerShow = true;
          },this.params.time * 1000)
        }
        else {
          var domOut = null;
          //准备定时器循环
          var i = 0;
          //根据题目数字(笔数)和时间控制循环
          this.timeOut = setInterval(function () {
            contentDOM.visibility = 'hidden';
            clearInterval(domOut);
            domOut = setTimeout(() => {
              contentDOM.visibility = '';
            }, 500)

            _this.content = _this.fastList[i];
            if (i >= _this.fastList.length) {
              clearInterval(_this.timeOut);
              _this.content = '答案?';
              _this.userAnswer = '';
              _this.answerShow = true;
            }
            i++;
          }, _this.params.time * 1000);
        }
      },
      //插入题目和计算答案
      calculation() {
        this.fastList = [];
        this.questionContent = ''
        switch (parseInt(this.params.rule)) {//规则判断
          case 0://加减法
            var number;
            this.questionAnswer = 0;
            //遍历笔数
            for (var i = 0; i < this.params.numberCount; i++) {
              //生成随机数
              number = parseFloat((Math.random() * this.RandomNumbers(this.params.integerBit)).toFixed(this.params.floatBit))
              //随机生成1或0   第一位数不能为负数
              if (Math.floor(Math.random() * 2 && i != 0 && this.questionAnswer > number)) {
                number = -number
              }
              this.fastList[i] = number
              this.questionContent += i ? (number < 0 ? number : '+' + number) : number;
              this.questionAnswer = parseFloat((this.questionAnswer + number).toFixed(this.params.floatBit));
            }
            this.questionContent += '='
            break;
          case 1://乘法
            //生成两个随机数,并分别赋值给被乘数和乘数
            this.fastList[0] = parseInt(Math.random() * this.RandomNumbers(this.params.integerBit));
            this.fastList[1] = parseInt(Math.random() * this.RandomNumbers(this.params.floatBit));
            this.questionContent += this.fastList[0] + '×' + this.fastList[1] + '=';
            this.questionAnswer = this.fastList[0] * this.fastList[1];
            break;
          case 2://除法
            //生成两个随机数,并分别赋值给被乘数和乘数
            this.fastList[0] = parseInt(Math.random() * this.RandomNumbers(this.params.integerBit));
            this.fastList[1] = parseInt(Math.random() * this.RandomNumbers(this.params.floatBit));
            this.fastList[0] = this.fastList[0] - this.fastList[0] % this.fastList[1];
            this.questionContent += this.fastList[0] + '÷' + this.fastList[1] + '=';
            this.questionAnswer = this.fastList[0] / this.fastList[1];
            break;
        }
      },
      //提交答案
      commitAnswer() {
        if (this.userAnswer==""){
          this.$alert('请输入答案', '请输入', {
            confirmButtonText: '确定',
            /*callback: action => {
              this.$message({
                type: 'error',
                message: `action: ${ action }`
              });
            }*/
          });
        } else if (this.questionAnswer == this.userAnswer) {
          this.messageInfo('回答正确','小朋友，你真棒!','success')

        } else if (Math.abs(this.questionAnswer - this.userAnswer) <= 3) {
          this.messageInfo('再接再厉','你离正确答案只差' + Math.abs(this.questionAnswer - this.userAnswer),'info')
        }
        else {
          this.messageInfo('惨败','只要功夫深，铁杵磨成针','error')
        }
      },
      //消息提示框
      messageInfo(title,message,icon){
        this.$confirm(message, title, {
          confirmButtonText: '下一组',
          cancelButtonText: '返回',
          type: icon
        }).then(() => {
          this.$message({
            type: 'success',
            message: '进入下一组!'
          });
          this.run();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '返回'
          });
          this.$router.back(-1);
        });
      },

      //生成随机数
      RandomNumbers(count) {
        var n = 1;//设置整数位基数
        for (var i = 1; i <= count; i++) {
          n *= 10;
        }
        return n;
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
    .content {
    }
    .answer {
      animation: myfirst 5s;
      margin-top: 20px;
      input {
        vertical-align: top;
        line-height: 35px;
        width: 4rem;
        padding-left: 10px;
        font-size: 20px;
        box-sizing: border-box;
        border: @nav_bk_color 1px solid;
        box-shadow: @nav_bk_color 1px 1px 5px 2px;
        margin-right: 10px;
      }
      .but {
        width: 2rem;
        line-height: 35px;
        box-sizing: border-box;
        border: @nav_bk_color 1px solid;
        box-shadow: @nav_bk_color 1px 1px 5px 2px;
      }
    }
  }

  //CSS动画
  @keyframes myfirst{
    from {opacity: 0;}
    to {opacity: 1;}
  }
</style>
