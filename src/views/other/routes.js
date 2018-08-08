import first from '@/views/other/First'
import childenfirst from '@/views/other/children/second'

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
  }
]
