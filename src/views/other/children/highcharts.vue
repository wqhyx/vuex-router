<template>
  <div>
    <x-chart id="highcharts" class="high" :option="option"></x-chart>
    <x-chart id="high" class="high" :option="option1"></x-chart>
    <x-chart id="highpie" class="high" :option="option2"></x-chart>
    <div id="container" style="min-width:400px;height:400px"></div>
  </div>
</template>
<style>
  /*.high{
    width: 1000px;
    height: 500px;
    margin: 40px auto;
  }*/
</style>
<script>
  // 导入chart组件
  var myvue = {};
  import HighCharts from 'highcharts'
  import XChart from '@/components/chart'
  export default {
    data() {
      return {
        option:{},
        data:[{
          name: '安装，实施人员',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
          name: '工人',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
          name: '销售',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
          name: '项目开发',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
          name: '其他',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],
        other:{
          title: {
            //大标题
            text: ''
          },
          subtitle: {
            //小标题
            text: ''
          },
          yAxis: {
            title: {
              text: ''
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },
          plotOptions: {
            series: {
              label: {
                connectorAllowed: false
              },
              pointStart: 2010
            }
          },
          series:'',
          responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
                }
              }
            }]
          }
        },
        option1:{
          chart: {
            type: 'column'
          },
          title: {
            text: '月平均降雨量'
          },
          subtitle: {
            text: '数据来源: WorldClimate.com'
          },
          xAxis: {
            categories: [
              '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
            ],
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: '降雨量 (mm)'
            }
          },
          tooltip: {
            // head + 每个 point + footer 拼接成完整的 table
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
          },
          plotOptions: {
            column: {
              borderWidth: 0
            }
          },
          series: [{
            name: '东京',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
          }, {
            name: '纽约',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
          }, {
            name: '伦敦',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
          }, {
            name: '柏林',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
          }]
        },
        option2:{
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
          },
          title: {
            text: '2018年1月浏览器市场份额'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                  color: (HighCharts.theme && HighCharts.theme.contrastTextColor) || 'black'
                }
              }
            }
          },
          series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
              name: 'Chrome',
              y: 61.41,
              sliced: true,
              selected: true
            }, {
              name: 'Internet Explorer',
              y: 11.84
            }, {
              name: 'Firefox',
              y: 10.85
            }, {
              name: 'Edge',
              y: 4.67
            }, {
              name: 'Safari',
              y: 4.18
            }, {
              name: 'Sogou Explorer',
              y: 1.64
            }, {
              name: 'Opera',
              y: 1.6
            }, {
              name: 'QQ',
              y: 1.2
            }, {
              name: 'Other',
              y: 2.61
            }]
          }]
        }

      }
    },
    beforeCreate:function(){
        myvue = this;
    },
    mounted:function(){
        myvue.other.title.text = '2010 ~ 2016 年太阳能行业就业人员发展情况';
        myvue.other.subtitle.text = '数据来源：thesolarfoundation.com';
        myvue.other.series = myvue.data;     //数据
        myvue.other.yAxis.title.text = '就业人数';   //数据
        myvue.option = myvue.other;

        var data = [ {
          "coursetype" : "妇科疾病",
          "per" : "6.00%",
          "course_type_id" : "0e3825fcb9294406883de6ad88902b67"
        }, {
          "coursetype" : "儿科疾病",
          "per" : "2.00%",
          "course_type_id" : "1383eb5470fd4831b1018d59e1b4e914"
        }, {
          "coursetype" : "普通感冒",
          "per" : "6.00%",
          "course_type_id" : "178b1bbbbf964a18956a9912c4ad2c51"
        }, {
          "coursetype" : "支气管哮喘",
          "per" : "2.00%",
          "course_type_id" : "33098532c4e844ecaeac9ff37556b0ef"
        }, {
          "coursetype" : "高效沟通",
          "per" : "6.00%",
          "course_type_id" : "45f92ea28f064508a7346b6df785fb79"
        }, {
          "coursetype" : "心脑血管疾病",
          "per" : "22.00%",
          "course_type_id" : "4e8c9eee6b844edf8cedaabad6f17bba"
        }, {
          "coursetype" : "内分泌系统及代谢性疾病",
          "per" : "16.00%",
          "course_type_id" : "8456b88c38ee4de488d8cf1cd1313e64"
        }, {
          "coursetype" : "呼吸系统疾病",
          "per" : "14.00%",
          "course_type_id" : "87009a1b5a1a42468886ddb19f3337b1"
        }, {
          "coursetype" : "高效沟通",
          "per" : "4.00%",
          "course_type_id" : "89594aa3b0e540ba9b9b773b2d175542"
        }, {
          "coursetype" : "医疗器械",
          "per" : "10.00%",
          "course_type_id" : "8e327581121d4ba182c8150d1d468e5e"
        }, {
          "coursetype" : "专业力",
          "per" : "2.00%",
          "course_type_id" : "9521ce3b398f4967b908a1c9623a45d7"
        }, {
          "coursetype" : "皮肤科疾病",
          "per" : "2.00%",
          "course_type_id" : "9ed9a86064374fdcbef538a8eafebedc"
        }, {
          "coursetype" : "补益药",
          "per" : "2.00%",
          "course_type_id" : "9fe53d535f03426ba193565f4724b0a5"
        }, {
          "coursetype" : "五官科疾病",
          "per" : "6.00%",
          "course_type_id" : "f7af65f8a96b401e95aa077348e09dc0"
        } ];


      var datalist = [];
        for (var i = 0;i<data.length;i++){
          var list = [];
          list.push(data[i].coursetype.toString());
          list.push(parseInt(data[i].per));
          //console.log(data[i].coursetype);
          datalist.push(list);
        }
        console.log(datalist);



    },
    components: {
      XChart
    }
  }
</script>

