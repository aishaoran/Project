// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routers/base'//引入路由
import store from './store'//引入vuex的仓库

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '../static/js/flexible'

//全局使用
Vue.use(ElementUI)//UI插件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },//组件声明
  template: '<App/>'
})
