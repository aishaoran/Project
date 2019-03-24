/**
 * vue路由
 * */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{title:'训练系统'}//用于给定网页名
    }
  ]
})
