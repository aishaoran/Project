webpackJsonp([1],{"6CJD":function(t,e){},"8hkU":function(t,e){},AYmo:function(t,e){},I6ZR:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=n("mtWM"),i=n.n(r),o={name:"top",data:function(){return{openIndex:0,topList:[{name:"首页",url:"#/index"},{name:"在线训练",url:"#/trainType/home"},{name:"历史记录",url:"#/historyRecord/home"}]}},computed:{curPath:function(){return"#"+this.$route.path||""}},methods:{jump:function(t){this.openIndex=t,location.href=this.topList[t].url}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("ul",{staticClass:"nav"},t._l(t.topList,function(e,a){return n("li",{key:a,class:["nav_li",{open_code:e.url==t.curPath}],on:{click:function(e){return t.jump(a)}}},[t._v(t._s(e.name))])}),0)])},staticRenderFns:[]};var c=n("VU/8")(o,s,!1,function(t){n("sbKx")},null,null).exports;i.a.defaults.baseURL="http://10.210.225.124:145/";var u={name:"App",components:{top:c}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("top"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var m=n("VU/8")(u,l,!1,function(t){n("mTPA")},null,null).exports,d=n("/ocq"),p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[this._v("\n  系统首页，介绍该系统\n  "),e("div",{staticClass:"introduce"})])}]};var f={path:"/index",name:"index",component:n("VU/8")({name:"index",data:function(){return{}}},p,!1,function(t){n("AYmo")},null,null).exports,meta:{title:"训练系统"}},h={name:"top",data:function(){return{currentdate:""}},mounted:function(){this.getSystemDate()},methods:{getSystemDate:function(){var t=this;setInterval(function(){var e=new Date,n=e.getMonth()+1,a=e.getDate(),r=e.getHours(),i=e.getMinutes(),o=e.getSeconds(),s="";switch(e.getDay()){case 0:s="星期日";break;case 1:s="星期一";break;case 2:s="星期二";break;case 3:s="星期三";break;case 4:s="星期四";break;case 5:s="星期五";break;case 6:s="星期六"}n>=1&&n<=9&&(n="0"+n),a>=0&&a<=9&&(a="0"+a),r>=0&&r<=9&&(r="0"+r),i>=0&&i<=9&&(i="0"+i),o>=0&&o<=9&&(o="0"+o),t.currentdate=e.getFullYear()+"-"+n+"-"+a+" "+r+":"+i+":"+o+" "+s},1e3)}}},v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"now"},[this._v("\n  "+this._s(this.currentdate)+"\n")])},staticRenderFns:[]};var x={name:"trainIndex",components:{now:n("VU/8")(h,v,!1,function(t){n("6CJD")},null,null).exports},data:function(){return{}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"trainIndex"},[e("now"),this._v("\n  在线训练的公共层，在线训练的所有子页面都有此段\n  "),e("router-view")],1)},staticRenderFns:[]};var y={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"home"},[this._v("\n  训练类型主页，显示选择类型\n")])},staticRenderFns:[]};var b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"fastComputation"})},staticRenderFns:[]};var w={path:"/trainType",component:n("VU/8")(x,_,!1,function(t){n("jP/8")},null,null).exports,meta:{title:"训练类型选择"},children:[{path:"",redirect:"home"},{path:"home",name:"home",component:n("VU/8")({name:"home",data:function(){return{}}},y,!1,function(t){n("8hkU")},null,null).exports},{path:"fastComputation",name:"fastComputation",component:n("VU/8")({name:"fastComputation",data:function(){return{}}},b,!1,function(t){n("zuAl")},null,null).exports}]},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"historyIndex"},[this._v("\n  历史记录的公共页，历史记录的所有子页面都有此段\n  "),e("router-view")],1)},staticRenderFns:[]};var g={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"home"},[this._v("\n  历史记录的首页\n")])},staticRenderFns:[]};var F={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"historyData"})},staticRenderFns:[]};var E={path:"/historyRecord",component:n("VU/8")({name:"historyIndex",data:function(){return{}}},C,!1,function(t){n("eaBe")},null,null).exports,meta:{title:"历史记录选择"},children:[{path:"",redirect:"home"},{path:"home",name:"home",component:n("VU/8")({name:"home",data:function(){return{}}},g,!1,function(t){n("oysi")},null,null).exports},{path:"historyData",name:"historyData",component:n("VU/8")({name:"historyData",data:function(){return{}}},F,!1,function(t){n("I6ZR")},null,null).exports}]},R=n("NYxO");a.default.use(R.a);var A=new R.a.Store({state:{userInfo:{userName:""}},mutations:{},actions:{},modules:{questionBank:{state:{},mutations:{},actions:{}}}});a.default.use(d.a);var $=new d.a({routes:[{path:"/",redirect:"/index",meta:{title:"训练系统"}},f,w,E]}),U=n("Au9i"),k=n.n(U);n("zzYx");a.default.use(k.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:$,store:A,components:{App:m},template:"<App/>"})},eaBe:function(t,e){},"jP/8":function(t,e){},mTPA:function(t,e){},oysi:function(t,e){},sbKx:function(t,e){},zuAl:function(t,e){},zzYx:function(t,e){!function(t,e){var n,a=t.document,r=a.documentElement,i=a.querySelector('meta[name="viewport"]'),o=a.querySelector('meta[name="flexible"]'),s=0,c=0,u=e.flexible||(e.flexible={});if(i){console.warn("将根据已有的meta标签来设置缩放比例");var l=i.getAttribute("content").match(/initial\-scale=([\d\.]+)/);l&&(c=parseFloat(l[1]),s=parseInt(1/c))}else if(o){var m=o.getAttribute("content");if(m){var d=m.match(/initial\-dpr=([\d\.]+)/),p=m.match(/maximum\-dpr=([\d\.]+)/);d&&(s=parseFloat(d[1]),c=parseFloat((1/s).toFixed(2))),p&&(s=parseFloat(p[1]),c=parseFloat((1/s).toFixed(2)))}}if(!s&&!c){t.navigator.appVersion.match(/android/gi);var f=t.navigator.appVersion.match(/iphone/gi),h=t.devicePixelRatio;c=1/(s=f?h>=3&&(!s||s>=3)?3:h>=2&&(!s||s>=2)?2:1:1)}if(r.setAttribute("data-dpr",s),!i)if((i=a.createElement("meta")).setAttribute("name","viewport"),i.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(i);else{var v=a.createElement("div");v.appendChild(i),a.write(v.innerHTML)}function x(){var e=r.getBoundingClientRect().width;e/s>540&&(e=540*s);var n=e/10;r.style.fontSize=n+"px",u.rem=t.rem=n}t.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(x,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(n),n=setTimeout(x,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*s+"px":a.addEventListener("DOMContentLoaded",function(t){a.body.style.fontSize=12*s+"px"},!1),x(),u.dpr=t.dpr=s,u.refreshRem=x,u.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},u.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))}},["NHnr"]);
//# sourceMappingURL=app.50040d7782005547916e.js.map