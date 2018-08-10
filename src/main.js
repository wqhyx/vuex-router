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
import  VueResource from 'vue-resource'

//添加echarts依赖
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

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
