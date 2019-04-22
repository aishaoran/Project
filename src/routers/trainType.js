/**
 * 训练类型路由
 * */
import trainType from '@/pages/trainType/index'
import home from '@/pages/trainType/home'
import digitalMemory from '@/pages/trainType/digitalMemory'
import beadImage from '@/pages/trainType/beadImage'
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
      path: 'home',//路径
      name: 'home',//别名
      component: home,//组件
      meta:{title:'在线训练'},//用于给定网页名
    },
    {//数字记忆
      path: 'digitalMemory',
      name: 'digitalMemory',
      component: digitalMemory,
      meta:{title:'数字记忆'},//用于给定网页名
    },
    {//珠像训练
      path: 'beadImage',
      name: 'beadImage',
      component: beadImage,
      meta:{title:'珠像训练'},//用于给定网页名
    },
    {//闪算训练
      path: 'fastComputation',
      name: 'fastComputation',
      component: fastComputation,
      meta:{title:'闪算训练'},//用于给定网页名
    },
  ]
}
