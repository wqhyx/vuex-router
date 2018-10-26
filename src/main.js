// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
//添加bootstrap样式以及js,
import '@/lib/Bootstrap/css/bootstrap.css'
import '@/lib/js/jquery-3.1.1.js'
import '@/lib/js/bootstrap.min.js'
import '@/lib/js/vue.js'

//添加layui相关css以及js
//import '@/lib/layui/css/layui.css'
//提示：如果是采用非模块化方式,此处可换成：./layui/layui.all.js
//import '@/lib/layui/layui.js'


import  VueResource from 'vue-resource'
//引入layui依赖
/*import layer from 'vue-layer'
Vue.prototype.$layer = layer;*/

//添加echarts依赖
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

//添加highcharts依赖
import HighCharts from 'highcharts'


//import Axios from 'axios'
Vue.use(VueResource)
//Vue.http = Vue.prototype.$http = Axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
