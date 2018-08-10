import first from '@/views/other/First'
import childenfirst from '@/views/other/children/second'
import echarts from '@/views/other/children/echarts'

export default [
  {
      /*开始页面*/
      path: '/first',
      name: 'first',
      component: first
  },
  {
      /*子页面*/
      path: '/childenfirst',
      name: 'childenfirst',
      component:childenfirst
  },
  {
      /*报表*/
      path:'/echarts',
      name:'echarts',
      component:echarts
  }
]
