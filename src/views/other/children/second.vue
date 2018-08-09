<!-- 添加vue的js -->
<!--<script src="http://static.runoob.com/assets/vue/1.0.11/vue.min.js"></script>
<script src="http://static.runoob.com/code/js/vueapp.js"></script>-->
<template>
    <div>
      <div class="container">
        <div class="col-md-24 col-md-offset-0">
          <h1>Vue + BootStrap</h1>
          <div id="demo">
            <table class="table table-hover">
              <caption>
                <button class="btn btn-danger btn-sm" id="addbtn" @click="add">添加</button>
              </caption>
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
                    <button class="btn btn-success btn-sm" @click="del(item)">删除</button>&nbsp;&nbsp;
                    <button class="btn btn-success btn-sm" @click="update(item)">修改</button>
                  </td>
                </template>
                <template v-else-if="item.sex == '男'">
                  <td>
                    <button class="btn btn-info btn-sm" @click="del(item)">删除</button>&nbsp;&nbsp;
                    <button class="btn btn-info btn-sm" @click="update(item)">修改</button>
                  </td>
                </template>
                <template v-else>
                  <td>
                    <button class="btn btn-primary btn-sm" @click="del(item)">删除</button>&nbsp;&nbsp;
                    <button class="btn btn-primary btn-sm" @click="update(item)">修改</button>
                  </td>
                </template>
              </tr>
              </tbody>
            </table>

            <!-- 添加 -->
            <!-- <form action="#" method="post"> -->
            <div class="modal fade" id="addmodal">
              <div class="modal-dialog">
                <div class="modal-content" style="width: 550px;margin-top: 100px;">
                  <div class="modal-header">
                    <button class="close" data-dismiss="modal"><span>&times;</span></button>
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
                    <button class="btn btn-primary" v-on:click="additem()">添加</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">关闭</button>
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
                    <button class="close" data-dismiss="modal"><span>&times;</span></button>
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
                    <button class="btn btn-primary" v-on:click="updateitem(datalist)">修改</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">关闭</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- </form>  -->
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
              items:[
                {
                  id:'1',
                  name:'红楼梦',
                  author:'曹雪芹',
                  price:'32.5'
                },
                {
                  id:'2',
                  name:'三国演义',
                  author:'罗贯中',
                  price:'68.0'
                },
                {
                  id:'3',
                  name:'水浒传',
                  author:'施耐庵',
                  price:'54.3'
                },
                {
                  id:'4',
                  name:'西游记',
                  author:'吴承恩',
                  price:'50.9'
                }
              ]
            }
        },
        beforeCreate:function(){
          myvue = this;
        },
        mounted:function(){
          myvue.$nextTick(function () {

            myvue.$http.jsonp('http://localhost:8888/get',{emulateJSON: true }).then((response) => {
              //获取数据
              console.log(response.body);
              myvue.datalist = response.body.datalist;
            }).catch(function(error){
              //回调错误信息
              console.log(error);
            });

          })
        },
        methods:{
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
