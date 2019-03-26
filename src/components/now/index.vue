<template>
  <div class="now">
    {{currentdate}}
  </div>
</template>

<script>
  export default {
    name: 'now',//组件名
    data() {
      return {
        currentdate:''
      }
    },
    mounted(){
      this.getSystemDate()
    },
    methods: {
      getSystemDate() {
        //定时器中this指向Window
        var _this=this
        setInterval(function () {//定时器重复执行
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;//月
            var strDate = date.getDate();//日
            var hours = date.getHours();//时
            var minutes = date.getMinutes();//分
            var seconds = date.getSeconds();//秒
            var week = '';//星期
            switch (date.getDay()) {
              case 0:
                week = '星期日';
                break;
              case 1:
                week = '星期一';
                break;
              case 2:
                week = '星期二';
                break;
              case 3:
                week = '星期三';
                break;
              case 4:
                week = '星期四';
                break;
              case 5:
                week = '星期五';
                break;
              case 6:
                week = '星期六';
                break;
            }
            if (month >= 1 && month <= 9) {
              month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
              strDate = "0" + strDate;
            }
            if (hours >= 0 && hours <= 9) {
              hours = "0" + hours;
            }
            if (minutes >= 0 && minutes <= 9) {
              minutes = "0" + minutes;
            }
            if (seconds >= 0 && seconds <= 9) {
              seconds = "0" + seconds;
            }
            _this.currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + hours + seperator2 + minutes + seperator2 + seconds + " " + week;
          }, 1000);//1000毫秒后启动定时器
      }

    },
  }
</script>

<style lang="less">
  @import "../../../static/site.comm.less";
  @import "../../../static/site.vars.less";

  .now {
    line-height: 0.5rem;
    height: 0.5rem;
    .font-dpr(18px);
  }
</style>
