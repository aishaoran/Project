/**
 * 历史记录路由
 * */
import historyRecord from '@/pages/historyRecord/index'
import home from '@/pages/historyRecord/home'
import historyData from '@/pages/historyRecord/historyData'
export default{
  path: '/historyRecord',   //一级路劲
  component: historyRecord, //共有层
  children:[//子级路径
    {
      path:'',
      redirect:'home'//重定向
    },
    {//首页
      path:'home',
      name:'home',
      component:home,
      meta:{title:'训练历史'},//用于给定网页名
    },
    {//历史数据
      path:'historyData',
      name:'historyData',
      component:historyData
    },
  ]
}
