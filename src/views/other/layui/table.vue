<template>
    <div>
        <div class="layui-container">
          <div class="layui-row">
              <table class="layui-table">
                <colgroup>
                  <col width="150">
                  <col width="200">
                  <col>
                  <col width="200">
                </colgroup>
                <thead>
                <tr>
                  <th class="layui-bg-blue cen">昵称</th>
                  <th class="layui-bg-blue cen">加入时间</th>
                  <th class="layui-bg-blue cen">签名</th>
                  <th class="layui-bg-blue cen">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>贤心</td>
                  <td>2016-11-29</td>
                  <td>人生就像是一场修行</td>
                  <td>
                      <button class="layui-btn layui-btn-sm" @click="click('update')">
                        <i class="layui-icon layui-icon-edit"></i>
                        编辑
                      </button>
                      <button class="layui-btn layui-btn-danger layui-btn-sm" @click="click('del')">
                        <i class="layui-icon layui-icon-delete"></i>删除
                      </button>
                  </td>
                </tr>
                <tr>
                  <td>许闲心</td>
                  <td>2016-11-28</td>
                  <td>于千万人之中遇见你所遇见的人，于千万年之中，时间的无涯的荒野里…</td>
                  <td>
                    <button class="layui-btn layui-btn-sm" @click="click('update')">
                      <i class="layui-icon layui-icon-edit"></i>
                      编辑
                    </button>
                    <button class="layui-btn layui-btn-danger layui-btn-sm" @click="click('del')">
                      <i class="layui-icon layui-icon-delete"></i>删除
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
              <!--<div id="laytable"></div>-->
          </div>

          <form class="layui-form layui-form-pane" action="" id="updatecontext" style="display: none;margin-top: 30px;width: 90%;margin-left: 20px;">
            <div class="layui-form-item">
              <label class="layui-form-label">昵称</label>
              <div class="layui-input-block">
                <input type="text" name="title" autocomplete="off" placeholder="标题" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <label class="layui-form-label">加入时间</label>
              <div class="layui-input-block">
                <!--<input type="text" name="title" autocomplete="off" placeholder="请输入标题" class="layui-input">-->
                <input type="text" class="layui-input" id="test1">
              </div>
            </div>
            <div class="layui-form-item">
              <label class="layui-form-label">签名</label>
              <div class="layui-input-block">
                <input type="text" name="title" autocomplete="off" placeholder="签名" class="layui-input">
              </div>
            </div>
           <!-- <div class="layui-form-item">
              <label class="layui-form-label">短输入框</label>
              <div class="layui-input-inline">
                <input type="text" name="username" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">
              </div>
            </div>-->
            <!--<div class="layui-form-item">
              <button class="layui-btn" lay-submit="" lay-filter="demo2">跳转式提交</button>
            </div>-->
          </form>

          <table id="lay" lay-filter="test"></table>

          <script type="text/html" id="barDemo">
            <a class="layui-btn layui-btn-sm layui-btn-normal" lay-event="detail"><i class="layui-icon layui-icon-list"></i>查看</a>
            <a class="layui-btn layui-btn-sm"  lay-event="edit"><i class="layui-icon layui-icon-edit"></i>编辑</a>
            <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="del"><i class="layui-icon layui-icon-delete"></i>删除</a>
          </script>

          <script type="text/html" id="toolbarDemo">
            <div class="layui-btn-container" style="text-align: left;">
              <button class="layui-btn layui-btn-sm" lay-event="getCheckData">获取选中行数据</button>
              <button class="layui-btn layui-btn-sm" lay-event="getCheckLength">获取选中数目</button>
              <button class="layui-btn layui-btn-sm" lay-event="isAll">验证是否全选</button>
            </div>
          </script>

          <!--<script type="text/html" id="sexTpl">
            {{#  if(d.sex === '女'){ }}
               <span style="color: #F581B1;">{{ d.sex }}</span>
            {{#  } else { }}
              {{ d.sex }}
            {{#  } }}
          </script>-->

        </div>
    </div>
</template>

<style>
    .cen{
      text-align: center !important;
    }
</style>


<script>
    var myvue = {};
    export default {
        data() {
            return {
              msg: '这个是Home模板页',
            }
        },
        beforeCreate:function(){
          myvue = this;
        },methods:{
            click:function(val){
                if(val == 'del'){
                  layui.use('layer', function(){
                    layer.msg("删除成功", {icon: 1});
                  })
                }else if(val == 'update'){
                  layui.use('layer',function(){
                    /*layer.open({
                      title: '提示信息'
                      ,content: '你确定要修改这条记录吗?'
                    });*/
                    var index = layer.open({
                      content: '你确定要修改这条记录吗?',
                      //type:2,
                      //area:['450px','400px'],    //宽高
                      anim:6   //弹出动画  0-6，
                      //maxmin:true   //最大最小化。
                      ,btn: ['确定', '取消']   //可以多个
                      ,yes: function(){
                        //按钮【按钮一】的回调
                        //layer.alert("你点击了确定",{icon:2,time:3000});  //图标，以及设置时间
                         layer.open({
                          type: 1,   //层类型
                           skin:'layui-layer-lan',    //皮肤  //目前layer内置的skin有：layui-layer-lanlayui-layer-molv
                          area:['360px','330px'],     //宽高
                           closeBtn:1,         //关闭按钮
                           title:'<span style="width: 100%;display: inline-block;padding: 0 80px 0 130px;">修改</span>',
                          maxmin: true,    //最大化
                          shade:[0.2,'#3BEFDC'],    //遮罩
                          content:$("#updatecontext"),  //内容
                          btn: ['确定','取消'],  //提示按钮 可多个
                          yes:function(){    //第一个按钮
                            //layer.msg("你修改了记录",{icon:5});
                            layer.closeAll();
                          },btn2:function(){    //第二个按钮
                            layer.msg("你取消了修改",{icon:6});
                          },cancel:function(){   //右上角关闭
                             layer.closeAll();
                           }
                        })
                      },btn2:function(){
                        //按钮【按钮二】的回调
                        layer.alert("你点击了取消",{icon:3});
                      },cancel: function(){
                        layer.alert("你关闭了弹窗",{icon:4});
                      }
                    });

                    //layer.close(index);   //关闭对应的layer

                  })
                  //$("#updatecontext").css("display","none");
                }
            }
        }
        ,mounted:function(){
          layui.use('table', function(){
            var table = layui.table;
            //第一个实例
            table.render({
               elem: '#lay',
               height: 470,
               url: 'static/data.json', //数据接口
               page: true, //开启分页
               loading:true,
               even:true,    ////开启隔行背景
               toolbar: '#toolbarDemo',  //工具
                totalRow: true,   //合计
                //size:'sm',   //尺寸
                /*limits:[10,20,30,50],
                limit:5,*/
               cols: [[ //表头
                 {type: 'numbers', fixed: true},  //类型
                 {checkbox: true, fixed: true},   //checkbox
                {field: 'id', title: 'ID', width:130, sort: true, fixed: 'left',totalRowText: '合计'}
                ,{field: 'username', title: '用户名', width:130,templet:'#usernameTpl'}
                 , {field: 'username', title: '用户名', width: 130}
                 , {field: 'score', title: '积分', width: 130,totalRow: true}
                 //,style:'background-color:#C1E5FF'
                 , {field: 'sign', title: '可编辑列', edit: 'text',width: 130, sort: true}
                 , {field: 'city', title: '城市', width: 130}
                 , {field: 'sex', title: '性别', width: 130,  unresize: true, sort: true,templet:'#sexTpl'
                   ,templet: function(d){
                   if(d.sex == '女'){
                     return '<span style="color: red;">'+d.sex+'</span>'
                   }else{
                     return '<span>'+d.sex+'</span>'
                   }
                  }
                  }
                 , {field: 'lock', title: '职业', width: 130,  unresize: true}
                 , {fixed: 'right', title: '操作', width: 270, align: 'center', toolbar: '#barDemo'}
              ]]
              , page: true,
            });

            //监测checkbox
            table.on('checkbox(test)', function(obj){
              console.log(obj)
            });

            //头工具栏事件
            table.on('toolbar(test)', function(obj){
              var checkStatus = table.checkStatus(obj.config.id);
              switch(obj.event){
                case 'getCheckData':
                  var data = checkStatus.data;
                  layer.alert(JSON.stringify(data));
                  break;
                case 'getCheckLength':
                  var data = checkStatus.data;
                  layer.msg('选中了：'+ data.length + ' 个');
                  break;
                case 'isAll':
                  layer.msg(checkStatus.isAll ? '全选': '未全选');
                  break;
              };
            });

            //在LayUI里面，一般采用table.on()来表示事件
            table.on('tool(test)', function(obj){
              var data = obj.data;
              if(obj.event === 'detail'){
                layer.msg('ID：'+ data.id + ' 的查看操作',{icon:6});
              } else if(obj.event === 'del'){
                var lay =  layer.open({
                  title:'提示信息',
                  content: '你确定要删除这条记录吗?',
                  anim:6,
                  btn:['确定','取消'],
                  yes:function(){
                    obj.del();
                    layer.close(lay);
                  },btn2:function(){
                    layer.close(lay);
                  }
                })
              } else if(obj.event === 'edit'){
                //layer.alert('编辑行：<br>'+ JSON.stringify(data))
                layer.prompt({
                  formType: 2
                  ,title: '修改 ID 为 ['+ data.id +'] 的访问量'
                  ,value: data.username,
                }, function(value, index){
                  //这里一般是发送修改的Ajax请求
                });
              }
            });
          });

          //日期控件
          layui.use('laydate', function(){
            var laydate = layui.laydate;
            //执行一个laydate实例
            laydate.render({
              elem: '#test1', //指定元素
              theme:'#12D8EA'   ,  //自定义主题
              //theme:'grid'   // 格子主题
              //type:'month'  //控件选择类型，默认年月日
              //range:'/'   //开启左右面板范围选择  默认为false
              format:'y-MM-dd',   //格式，可任意组合
              min:'2017-01-01',   //最小
              max:'2018-12-31',    //最大
              trigger:'click',  //点击弹出
              //zIndex:6666666,      //层叠顺序
              showBottom:true,      //显示底部栏
              btns: ['clear','now','confirm'],   //工具按钮   ,清除，现在，确定
              //lang:'en'   //语言
              calendar:true,       //是否显示公历节日
              mark:{              //标注重要日子
                '0-10-25':'layui',
                 '0-10-20':'工资'
              },
            });
          });

        layui.use('laypage', function(){
          var laypage = layui.laypage;
          //执行一个laypage实例
          laypage.render({
             elem: 'laytable' //注意，这里的 test1 是 ID，不用加 # 号
            ,count: 50, //数据总数，从服务端得到,
          });
        });
      }
    }
</script>
