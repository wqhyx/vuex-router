// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'
//添加bootstrap样式以及js,
import '@/lib/Bootstrap/css/bootstrap.css'
import '@/lib/js/jquery-3.1.1.js'
import '@/lib/js/bootstrap.min.js'
import '@/lib/js/vue.js'

import publicMethods from './util/publicMethods.js'

Vue.use(publicMethods);

/**自定义指令*/
/*Vue.directive('rain',{
  bind(el,binding,vnode){
    el.style.color = "#"+Math.random().toString(16).slice(2,8);
  }
});*/
/**全局 自定义指令*/
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'other'){
      el.style.maxWidth = "1260px";
    }
    if(binding.arg == 'column'){
      el.style.backgroundColor = "aqua";
      el.style.padding = "20px";
    }
  }
})

/**全局过滤器*/
Vue.filter('toUpper',function(value){
  return value.toUpperCase();
})


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

Vue.use(VueResource)

//Vue.http = Vue.prototype.$http = Axios;
/**引用一个新的vue页面*/
//Vue.component("test",test);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
