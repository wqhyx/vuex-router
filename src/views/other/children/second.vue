<!-- 添加vue的js -->
<!--<script src="http://static.runoob.com/assets/vue/1.0.11/vue.min.js"></script>
<script src="http://static.runoob.com/code/js/vueapp.js"></script>-->
<template>
    <div>
      <div class="container">
        <div class="col-md-24 col-md-offset-0">
          <h1>Vue + BootStrap</h1>
          <div id="demo">
            <div style="width: 450px;text-align: left;">
              <span>当前用户：<span style="color:red;">{{showuser}}</span>,&nbsp;
                <a @click="out" style="cursor: pointer;" title="点击退出当前用户">点击退出</a>
              </span>&nbsp;
              <span class="btn btn-warning btn-sm" @click="showinfo">查看当前用户</span>&nbsp;
              <span class="btn btn-warning btn-sm" @click="showecharts">比例报表</span>&nbsp;
              <span class="btn btn-danger btn-sm" id="addbtn" @click="add">添加</span>
            </div>
            <table class="table table-hover">
              <thead>
              <tr>
                <th>编号</th>
                <th>账号</th>
                <th>名称</th>
                <th>性别</th>
                <th>密码</th>
                <th>创建时间</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in datalist">
                <td>{{item.id}}</td>
                <td>{{item.cardid}}</td>
                <td>{{item.name}}</td>
                <td>{{item.sex}}</td>
                <td>{{item.password}}</td>
                <td>{{item.createdate}}</td>
                <template v-if="item.sex == '女'">
                  <td>
                    <span class="btn btn-success btn-sm" @click="del(item)">删除</span>&nbsp;&nbsp;
                    <span class="btn btn-success btn-sm" @click="update(item)">修改</span>
                  </td>
                </template>
                <template v-else-if="item.sex == '男'">
                  <td>
                    <span class="btn btn-info btn-sm" @click="del(item)">删除</span>&nbsp;&nbsp;
                    <span class="btn btn-info btn-sm" @click="update(item)">修改</span>
                  </td>
                </template>
                <template v-else>
                  <td>
                    <span class="btn btn-primary btn-sm" @click="del(item)">删除</span>&nbsp;&nbsp;
                    <span class="btn btn-primary btn-sm" @click="update(item)">修改</span>
                  </td>
                </template>
              </tr>
              </tbody>
            </table>
            <!--<div class="pull-right">
              <ul class="pagination">
                <li><a href="#">首页</a></li>
                <li><a href="#">上一页</a></li>
                <li><a href="#">下一页</a></li>　
                <li><a href="#">尾页</a></li>
              </ul>
            </div>-->

            <!-- 添加 -->
            <!-- <form action="#" method="post"> -->
            <div class="modal fade" id="addmodal">
              <div class="modal-dialog">
                <div class="modal-content" style="width: 550px;margin-top: 100px;">
                  <div class="modal-header">
                    <span class="close" data-dismiss="modal"><span>&times;</span></span>
                    <h4 class="modal-title">添加信息</h4>
                  </div>
                  <div class="modal-body center" style="margin-left: 15px;font-size: 15px;">

                    <div class="form-group ">
                      <label for="" class="pull-left">账号</label>
                      <input type="text"  class="form-control" v-model="item.cardid">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">名称</label>
                      <input type="text"  class="form-control" v-model="item.name">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">性别</label>
                      <input type="text"  class="form-control" v-model="item.sex">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">密码</label>
                      <input type="text"  class="form-control" v-model="item.password">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">创建时间</label>
                      <input type="text"  class="form-control" v-model="item.createdate">
                    </div>

                  </div>
                  <div class="modal-footer">
                    <span class="btn btn-primary" v-on:click="additem()">添加</span>
                    <span type="button" class="btn btn-primary" data-dismiss="modal">关闭</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- </form>  -->

            <!-- 修改 -->
            <!-- <form action="#" method="post"> -->
            <div class="modal fade" id="updatemodal">
              <div class="modal-dialog">
                <div class="modal-content" style="width: 550px;margin-top: 100px;">
                  <div class="modal-header">
                    <span class="close" data-dismiss="modal"><span>&times;</span></span>
                    <h4 class="modal-title">修改信息</h4>
                  </div>
                  <div class="modal-body center" style="margin-left: 15px;font-size: 15px;">

                    <div class="form-group" style="display:none;">
                      <label for="" class="pull-left">编号</label>
                      <input type="text" id="id" class="form-control">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">账号</label>
                      <input type="text" id="cardid" class="form-control">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">名称</label>
                      <input type="text" id="name" class="form-control">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">性别</label>
                      <input type="text" id="sex" class="form-control">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">密码</label>
                      <input type="text" id="password" class="form-control">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">创建时间</label>
                      <input type="text" id="createdate" class="form-control">
                    </div>

                  </div>
                  <div class="modal-footer">
                    <span class="btn btn-primary" v-on:click="updateitem(datalist)">修改</span>
                    <span type="button" class="btn btn-primary" data-dismiss="modal">关闭</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- </form>  -->

            <div class="modal fade" id="showinfo">
              <div class="modal-dialog">
                <div class="modal-content" style="width: 550px;margin-top: 100px;">
                  <div class="modal-header">
                    <span class="close" data-dismiss="modal"><span>&times;</span></span>
                    <h4 class="modal-title">详细信息</h4>
                  </div>
                  <div class="modal-body center" style="margin-left: 15px;font-size: 15px;">

                    <div class="form-group ">
                      <label for="" class="pull-left">账号</label>
                      <input type="text"  class="form-control" id="showcardid">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">名称</label>
                      <input type="text"  class="form-control" id="showname">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">性别</label>
                      <input type="text"  class="form-control" id="showsex">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">密码</label>
                      <input type="text"  class="form-control" id="showpassword">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">创建时间</label>
                      <input type="text"  class="form-control" id="showcreatedate">
                    </div>

                  </div>
                  <div class="modal-footer">
                    <span type="button" class="btn btn-primary" data-dismiss="modal">关闭</span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
</template>
<style>
  .button{
    outline: none;
  }
  .table > thead > tr > th{
    text-align: center;
  }
  .table > tbody > tr > td{
    text-align: center;
  }
</style>

<script>
    var myvue = {};
    export default {
        data() {
            return {
              datalist:'',
              item: {
                id: 0,
                cardid: '',
                name: '',
                sex: '',
                password:'',
                createdate:'',
              },
              userinfo:localStorage.getItem("params"),
              showuser:'',
              boy:0,
              girl:0,
              other:0,
              barlist:[],
              pielist:[],
            }
        },
        beforeCreate:function(){
          myvue = this;
        },
        mounted:function(){
          myvue.$nextTick(function(){
            myvue.datalist = '';
            //由JSON字符串转换为JSON对象
            var obj = eval('(' + myvue.userinfo + ')');
            var username = '';
            if(myvue.userinfo != null){
              username = obj.card_id;
            }
            console.log(username);
            myvue.showuser = username;
            if(username != null && username != "" && username != "undefined"){
              //请求本地SpringBoot
              myvue.$http.jsonp('http://localhost:8888/get',{emulateJSON: true }).then((response) => {
                //获取数据
                console.log(response.body);
                myvue.datalist = response.body.datalist;
                var data = response.body.datalist;
                data.forEach(function(v){　
                  if(v.sex == '男'){
                      myvue.boy++;
                  }else if(v.sex == '女'){
                      myvue.girl++;　
                  }else{
                      myvue.other++;　
                  }
                });
                myvue.barlist.push(myvue.boy);
                myvue.barlist.push(myvue.girl);
                myvue.barlist.push(myvue.other);
                var json={};json.value=myvue.boy;json.name='男';
                var json1={};json1.value=myvue.girl;json1.name='女';
                var json2={};json2.value=myvue.other;json2.name='其他';
                myvue.pielist.push(json,json1,json2);
              }).catch(function(error){
                //回调错误信息
                console.log(error);
              });
            }else {
              //不匹配进行回调
               myvue.$router.push({name:'first'});
            }
          })
        },
        methods:{
          //比例报表
          showecharts:function(){
            //柱状图数据
            localStorage.setItem("barlist",JSON.stringify(myvue.barlist));
            //饼图
            localStorage.setItem("pielist",JSON.stringify(myvue.pielist));
            myvue.$router.push({name:'echarts'});
          },
          //查看当前信息
          showinfo:function(){
              $("#showinfo").modal('show');
              var obj = eval('(' + myvue.userinfo + ')');
              $("#showcardid").val(obj.card_id);
              $("#showname").val(obj.name);
              $("#showpassword").val(obj.password);
              $("#showsex").val(obj.sex);
              $("#showcreatedate").val(obj.createdate);
          },
          //退出
          out:function(){
              //清除储存,然后回调
            　/*localStorage.removeItem("params");
              localStorage.removeItem("barlist");*/
              localStorage.clear();
              myvue.$router.push({name:'first'});
          },//弹出添加模态框
          add:function(){
              $('#addmodal').modal('show');
          },//添加
          additem:function(){
            myvue.item.id = myvue.datalist.length + 1;
            myvue.datalist.push(this.item);
            //将input中的数据重置
            this.item = {};
            //隐藏模态框
            $('#addmodal').modal('hide');
          },//删除
          del:function(item){
            var result = myvue.datalist.filter(function(val){ return val.id != item.id});
            for(var i = 0; i<result.length; i++){
              if(item.id < result[i].id){
                result[i].id -= 1;
              }
            }
            myvue.datalist = result;
          },//修改之前
          update:function(item){
            //console.log(item.id + item.name + item.author+item.price)
            $('#updatemodal').modal('show');
            $('#id').val(item.id);
            $('#cardid').val(item.cardid);
            $('#name').val(item.name);
            $('#sex').val(item.sex);
            $('#password').val(item.password);
            $('#createdate').val(item.createdate);
          },//修改操作
          updateitem:function(datalist){
            for(var i =0;i<datalist.length;i++){
              if(datalist[i].id == $('#id').val()){
                //console.log('找到了对应的编号，正在替换数据!')
                datalist[i].name = $('#name').val();
                datalist[i].cardid = $('#cardid').val();;
                datalist[i].sex = $('#sex').val();
                datalist[i].password = $('#password').val();
                datalist[i].createdate = $('#createdate').val();
              }
            }
            //关闭(隐藏)
            $('#updatemodal').modal('hide');
          }
        }
    }
</script>
