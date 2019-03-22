/**
 * 状态管理模块
 * */
import Vue from 'vue'
import Vuex from 'vuex'

import questionBank from './modules/questionBank'

//声明Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{//模块
    questionBank,
  }
})
