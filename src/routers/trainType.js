/**
 * 训练类型路由
 * */
import trainType from '@/pages/trainType/index'
import home from '@/pages/trainType/home'
import fastComputation from '@/pages/trainType/fastComputation'

export default{
  path: '/trainType',   //一级路劲
  component: trainType, //共有层
  meta: {title: '训练类型选择'},//用于给定网页名
  children: [//子级路径
    {
      path: '',
      redirect: 'home'//重定向
    },
    {//首页——选择训练方式
      path: 'home',
      name: 'home',
      component: home
    },
    {//闪算训练
      path: 'fastComputation',
      name: 'fastComputation',
      component: fastComputation
    },
  ]
}
