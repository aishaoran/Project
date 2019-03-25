/**
 * 首页路由
 * */
import index from '@/pages/index'

export default{
      path: '/index',//捕获路径
      name: 'index',//别名
      component: index,//路由跳转组件
      meta:{title:'训练系统'},//用于给定网页名
    }
