import Axios from 'axios';
const instance = Axios.create({
  baseURL:"https://wd6227691035otnqqd.wilddogio.com",
  timeout:5000,
});

// 路由请求拦截
// http request 拦截器
/*instance.interceptors.request.use(config=>{
  config.baseURL = "https://wd6227691035otnqqd.wilddogio.com";
  config.headers.timeout = 50000;
  config.headers['Content-Type'] = 'application/json;charset=UTF-8';
},error => {
  return Promise.reject(error.response);
});*/

export default instance;
