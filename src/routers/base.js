/**
 * vue路由
 * */
import Vue from 'vue'
import Router from 'vue-router'

import index from './index'
import trainType from './trainType'
import historyRecord from './historyRecord'

import store from '@/store'
import {getPathSplitArray} from '@/common/sitePath'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/index',//重定向
      meta:{title:'训练系统'}//用于给定网页名
    },
    index,
    trainType,
    historyRecord
  ]
})
/*router.afterEach((to, from) => {
  var pathArr = getPathSplitArray(to.path)
  store.commit('commitcurPathArr',pathArr)

})*/
export default router
