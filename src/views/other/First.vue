<style src="@/lib/css/style.css"></style>
<template>
    <div>
        {{msg}}<br>
        <router-link to="/childenfirst">点击跳转到子页面</router-link>
      <form id="from" action="#" method="post">
        <div class="mycenter">
          <div class="mysign">
            <div class="col-lg-11 text-center text-info">
              <h2>登录</h2>
            </div>
            <div class="col-lg-10">
              <input type="text" class="form-control" name="username" v-model="uname" placeholder="请输入账户名" required
                     autofocus />
            </div>
            <div class="col-lg-10">
            </div>
            <div class="col-lg-10">
              <input type="password" class="form-control" name="password" v-model="upassword" placeholder="请输入密码" required
                     autofocus />
            </div>
            <div class="col-lg-10">
            </div>
            <div class="col-lg-10">
            </div>
            <div class="col-lg-10">
              <button type="button" id="btn" @click="login" class="btn btn-success col-lg-12">
                登录
              </button>
            </div>
            <div class="col-lg-12" style="margin-top: 20px;color:red;font-size: 15px;">
                {{info}}
            </div>
          </div>
        </div>
      </form>
    </div>
</template>

<style>
</style>

<script>
    var myvue = {};
    export default {
        data() {
            return {
              msg: '你好世界!',
              uname:'',
              upassword:'',
              info:''
            }
        },
        beforeCreate:function(){
          myvue = this;
        },
        methods:{
          //登录方法
          login:function(){
            //请求本地SpringBoot
            myvue.$http.jsonp('http://localhost:8888/login?user='+myvue.uname+'&password='+myvue.upassword,{emulateJSON: true }).then((response) => {
              //获取数据
              console.log(response);
              //成功
              if(response.body.status == '0' || response.body.status == 0){　
                  //console.log("成功");
                  //带参跳转页面
                  myvue.$router.push({name:'childenfirst',params:response.body.datalist});

              }else{
                 //失败提示
                 myvue.info = "用户名或密码错误!";
              }
            }).catch(function(error){
              alert("请确保接口正常开启,异常信息状态:"+error.status);
              //回调错误信息
              console.log(error);
            });

          }
        }
    }
</script>
