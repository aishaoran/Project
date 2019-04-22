<template>
  <div class="beadImage">
    <P class="theme">珠像训练</P>
    <table v-show="beadShow" cellpadding="0" cellspacing="0">
      <thead>
      <tr>
        <th v-for="(item,index) in fastList"><div v-show="item>=5" class="bead"></div></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(itemToPlugin, index) in 4">
        <td v-for="(item) in fastList"><div v-show="item>=5?item-5>index:item>index" class="bead"></div></td>
      </tr>
      </tbody>
    </table>
    <p class="content" v-show="!beadShow" @click="content =='答案?'?content = questionAnswer:''">
      {{content}}</p>
    <div class="answer" v-show="answerShow">
      <input type="text" v-model="userAnswer" placeholder="请输入答案"/>
      <button class="but" @click="commitAnswer">提交</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'beadImage',
    data() {
      return {
        beadShow:false,//显示珠像
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
        this.beadShow=true;
        setTimeout(function () {
          _this.beadShow=false;
          _this.content = '答案?';
          _this.userAnswer = '';
          _this.answerShow = true;
        },this.params.time * 1000)
      },
      //插入题目和计算答案
      calculation() {
        this.fastList = [];
        this.questionContent = ''
        //生成随机数
        for (var i=0;i<this.params.numberCount;i++) {
          var number = this.RandomNumbers();
          this.questionContent+=number;
          this.fastList.push(number);
        }
        this.questionAnswer=this.questionContent;
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

        }/* else if (Math.abs(this.questionAnswer - this.userAnswer) <= 3) {
          this.messageInfo('再接再厉','你离正确答案只差' + Math.abs(this.questionAnswer - this.userAnswer),'info')
        }*/
        else {
          this.messageInfo('惨败','只要坚持不懈，总会有成功','error')
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
      RandomNumbers() {
        var n =parseInt(Math.random() * 10)
        return n==0||n ==1?this.RandomNumbers():n;
      }
    }
  }
</script>

<style lang="less">
  @import "./../../../static/site.vars.less";

  .beadImage {
    height: 100%;
    background: url("./../../../static/img/train_bk.png") no-repeat center 75%;
    background-size: 70% 50%;
    table{
      margin: 20px auto;
      th {
        border-bottom: 3px solid #000;
      }
    }
    .bead{
      width: 20px;
      height: 15px;
      background: #000;
      border-radius: 50%;
      margin: 2px 5px;
    }
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
