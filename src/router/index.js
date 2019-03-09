import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'

Vue.use(Router)

const merge = function () {
  return Array.prototype.concat.apply([], arguments);
};

// 引入模块路由　
import otherRoutes from '@/views/other/routes';
import componentRoutes from '@/views/Component/routes';
import BlogRoutes from '@/views/Blog/routes'

// 全局路由
let routes = [
  {
    path: '/',
    name: 'Index',
    component: Index　
  }
];

// 合并路由
routes = merge(routes,otherRoutes,componentRoutes,BlogRoutes);

const router = new Router({
  mode: 'history',
  routes
});
export default router;
