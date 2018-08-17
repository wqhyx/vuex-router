<template>
    <div>
      <div class="container">
          <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Echarts报表</h3>
              </div>
              <div class="panel-body">
                  <div style="float: left;">
                    <router-link to="/childenfirst">
                      <span type="button" class="btn btn-primary" data-dismiss="modal">返回</span>
                    </router-link>
                  </div>
                  <div style="width:1500px;height: 700px;padding: 50px;position: relative;top:70px;" id="all">
                    <div id="myChart" style="height: 500px;width: 500px;float: left;right:50px;"></div>
                    <div id="mypie" style="width: 500px;height: 500px;float: left;left:50px;"></div>
                  </div>
              </div>
            </div>
      </div>
    </div>
</template>

<style>
</style>

<script>
    var myvue = {};
    export default {
        data() {
            return {
              msg: '这个是Home模板页',
              userinfo:localStorage.getItem("params"),
              //获取原生json字符
              bardata:localStorage.getItem("barlist"),
              //转换后的json数组
              finbardata:'',
              piedata:localStorage.getItem("pielist"),
              finpiedata:'',
            }
        },
        beforeCreate:function(){
           myvue = this;
        },//自执行
        mounted:function(){
          //由JSON字符串转换为JSON对象
          if(myvue.userinfo != null){
              //由JSON字符串转换为JSON对象
              myvue.finbardata = eval('('+myvue.bardata+')');
              myvue.finpiedata = eval('('+myvue.piedata+')');
              myvue.start();
              myvue.pie();
          }else{
            //不匹配进行回调
            myvue.$router.push({name:'first'});
          }
        },//方法
        methods:{
            //绘制图案
            start:function(){
              // 基于准备好的dom，初始化echarts实例
              let myChart = myvue.$echarts.init(document.getElementById('myChart'));
              // 绘制图表
              myChart.setOption({
                title: {
                  text: '比例图'
                },
                tooltip : {
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
                },//工具
                toolbox: {
                  feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                  }
                },
                xAxis: {
                  data: ['男','女','其他']
                },
                yAxis: {},
                series: [{
                  name: '数量',
                  type: 'bar',
                  data: myvue.finbardata
                }]
              });
            },
            pie:function(){
              // 基于准备好的dom，初始化echarts实例
              let ch = myvue.$echarts.init(document.getElementById("mypie"));
              // 绘制图表
              ch.setOption({
                title : {
                  text: '比例图',
                  subtext: '数据库来源',
                  x:'center'
                },//工具
                toolbox: {
                  feature: {
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                  }
                },
                tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                  orient: 'vertical',
                  left: 'left',
                  data: ['男','女','其他']
                },
                series : [
                  {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data: myvue.finpiedata,
                    itemStyle: {
                      emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                    }
                  }
                ]
              })
            }
        }
    }
</script>
