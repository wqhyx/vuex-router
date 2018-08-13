import first from '@/views/other/First'
import childenfirst from '@/views/other/children/second'
import echarts from '@/views/other/children/echarts'
import highcharts from '@/views/other/children/highcharts'

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
      /*Echarts报表*/
      path:'/echarts',
      name:'echarts',
      component:echarts
  },
  {
      /*Highcharts*/
      path:'/highcharts',
      name:'highcharts',
      component:highcharts
  }
]
