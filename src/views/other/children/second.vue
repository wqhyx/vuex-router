<!-- 添加bootstrap样式 -->　
<style src="@/lib/Bootstrap/css/bootstrap.css"></style>
<!-- 添加vue的js -->
<script src="http://static.runoob.com/assets/vue/1.0.11/vue.min.js"></script>
<script src="http://static.runoob.com/code/js/vueapp.js"></script>
<template>
    <div>
      <div class="container">
        <div class="col-md-8 col-md-offset-2">
          <h1>Vue + BootStrap</h1>
          <div id="demo">
            <table class="table table-hover">
              <caption>
                <button class="btn btn-danger btn-sm" id="addbtn" @click="add">添加</button>
              </caption>
              <thead>
              <tr>
                <th>编号</th>
                <th>书名</th>
                <th>作者</th>
                <th>价格</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in items">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.author}}</td>
                <td>{{item.price}}</td>
                <template v-if="item.id % 2==0">
                  <td>
                    <button class="btn btn-success btn-sm" @click="del(item)">删除</button>&nbsp;&nbsp;
                    <button class="btn btn-success btn-sm" @click="update(item)">修改</button>
                  </td>
                </template>
                <template v-else>
                  <td>
                    <button class="btn btn-info btn-sm" @click="del(item)">删除</button>&nbsp;&nbsp;
                    <button class="btn btn-info btn-sm" @click="update(item)">修改</button>
                  </td>
                </template>
              </tr>
              </tbody>
            </table>

            <!-- 添加 -->
            <!-- <form action="#" method="post"> -->
            <div class="modal fade" id="addmodal">
              <div class="modal-dialog">
                <div class="modal-content" style="width: 420px;margin-left: 70px;margin-top: 85px;">
                  <div class="modal-header">
                    <button class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title">添加信息</h4>
                  </div>
                  <div class="modal-body center" style="margin-left: 15px;font-size: 15px;">

                    <div class="form-group ">
                      <label for="" class="pull-left">书名</label>
                      <input type="text"  class="form-control" v-model="item.name">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">作者</label>
                      <input type="text"  class="form-control" v-model="item.author">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">价格</label>
                      <input type="text"  class="form-control" v-model="item.price">
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
                <div class="modal-content" style="width: 420px;margin-left: 70px;margin-top: 85px;">
                  <div class="modal-header">
                    <button class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title">修改信息</h4>
                  </div>
                  <div class="modal-body center" style="margin-left: 15px;font-size: 15px;">

                    <div class="form-group" style="display:none;">
                      <label for="" class="pull-left">编号</label>
                      <input type="text" id="id" class="form-control" v-model="item.id">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">书名</label>
                      <input type="text" id="name" class="form-control" v-model="item.name">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">作者</label>
                      <input type="text" id="author" class="form-control" v-model="item.author">
                    </div>

                    <div class="form-group">
                      <label for="" class="pull-left">价格</label>
                      <input type="text" id="price" class="form-control" v-model="item.price">
                    </div>

                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-primary" v-on:click="updateitem(items)">修改</button>
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
    export default {
        data() {
            return {
              item: {
                id: 0,
                author: '',
                name: '',
                price: ''
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
        methods:{
          add:function(){
              $('#addmodal').modal('show');
          },//添加
          additem:function(){
            this.item.id = this.items.length + 1;
            this.items.push(this.item);
            //将input中的数据重置
            this.item = {};
            //隐藏模态框
            $('#addmodal').modal('hide');
          },//删除
          del:function(item){
            var result = this.items.filter(function(val){ return val.id != item.id});
            for(var i = 0; i<result.length; i++){
              if(item.id < result[i].id){
                result[i].id -= 1;
              }
            }
            this.items = result;
          },//修改
          update:function(item){
            //console.log(item.id + item.name + item.author+item.price)
            $('#updatemodal').modal('show');
            $('#id').val(item.id);
            $('#name').val(item.name);
            $('#author').val(item.author);
            $('#price').val(item.price);
          },//修改
          updateitem:function(items){
            var aid = $('#id').val();
            var aname = $('#name').val();
            var aauthor = $('#author').val();
            var aprice = $('#price').val();
            //console.log(items)
            for(var i =0;i<items.length;i++){
              //console.log(items[i].id)
              if(items[i].id == aid){
                //console.log('找到了对应的编号，正在替换数据!')
                items[i].name = aname;
                items[i].author = aauthor;
                items[i].price = aprice;
              }
            }
            //将input中的数据重置
            this.item = {};
            //关闭(隐藏)
            $('#updatemodal').modal('hide');
          }
        }
    }
</script>
