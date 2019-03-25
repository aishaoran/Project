/**
 * 状态管理模块
 * */
import Vue from 'vue'
import Vuex from 'vuex'

import questionBank from './modules/questionBank'

//声明Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  state:{//状态
    userInfo:{userName:''},  //存储用户信息
  },
  mutations:{//计算属性

  },
  actions:{//跳转

  },
  modules:{//引用模块
    questionBank,
  }
})
