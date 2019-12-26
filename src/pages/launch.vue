<template>
  <div>
    <div class="fx-con">
      <div class="fx-title">第二课堂课程开展分析</div>
      <div class="fx-content">
        <!-- 日期插件 -->
        <div class="block">
          <span class="demonstration">统计日期</span>
          <el-date-picker
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            class="data-picker"
          ></el-date-picker>
        </div>
        <div class="fx-btn">运算</div>
      </div>
    </div>
    <!-- 四块主内容 -->
    <div class="box-content">
      <div class="box-content-top">
        <!-- 课程开课总览 -->
        <div class="box-item">
          <div class="box-item-title">
            <div class="box-item-title-left">
              <div class="title-bar"></div>
              <p>课程开展总览</p>
            </div>
          </div>
          <div class="courseOverview">
            <div class="box-item-content">
              <!-- 4个圈 -->
              <div class="pandect" v-for="item in Condition" :key="item.id">
                <div class="launch-box1-contant">
                  <div class="launch-circle">
                    <div class="class-circle">{{item.data}}</div>
                    <div>{{item.unit}}</div>
                  </div>
                  <div class="launch-oblong">{{item.title}}</div>
                </div>
              </div>
            </div>
            <!-- 仪表盘 -->
            <div class="SatisfactionDegree">
              <div class="satisfaction" id="satisfaction"></div>
              <div class="evaluatePart-box">
                <p
                  class="evaluatePart"
                >{{evaluateNum.data}}{{evaluateNum.unit}}{{evaluateNum.title}},{{participationRate.title}}{{participationRate.data}}{{participationRate.unit}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 各类课程开课情况 -->
        <div class="box-item" id="classSituation">
          <div class="box-item-title">
            <div class="box-item-title-left">
              <div class="title-bar"></div>
              <p>各类课程开课情况</p>
            </div>
            <div class="box-item-title-right">
              <span>学院范围</span>
              <select>
                <option v-for="item in UnitsName" :key='item.id' :value="item">{{item}}</option>
              </select>
              <span class="iconfont iconduobianxing"></span>
            </div>
          </div>
          <div class="box-item-pic">
            <div class="classNumCircle" id="classNumCircle"></div>
            <div class="classNum" id="classNum"></div>
          </div>
          <div class="echarts-legend">
            <div class="echarts-legend-box">
              <div class="echarts-legend-item" v-for="item in openClassName" :key="item.id">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">{{item}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-content-bottom">
        <!-- 各单位课程供给排行 -->
        <div class="box-item fx-box4">
          <div class="box-item-title">
            <div class="box-item-title-left">
              <div class="title-bar"></div>
              <p>各单位课程供给排行</p>
            </div>
          </div>
          <div class="fxbox4-contant">
            <div class="fxbox4-li" v-for="item in courseSupply" :key="item.id">
              <div class="fxbox4-litit fxbox1-new-span">{{item.title}}</div>
              <div class="fxbox4-lidiv">
                <div class="fxbox4-div1">
                  &nbsp;&nbsp;
                  <span class="iconfont iconketang"></span>&nbsp;
                  <span>{{item.supp_count}}</span>次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="iconfont iconrengong"></span>&nbsp;
                  <span>{{item.supp_capacity}}</span>人次
                </div>
                <div class="fxbox4-div2" :style="{width:(item.percent_count+'%')}"></div>
                <div class="fxbox4-div3" :style="{width:(item.percent_capacity+'%')}"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 课程开展分时情况 -->
        <div class="box-item" id="timeSituation">
          <div class="box-item-title">
            <div class="box-item-title-left">
              <div class="title-bar"></div>
              <p>课程开展分时情况</p>
            </div>
            <div class="box-item-title-right">
              <span>学院范围</span>
              <select>
                <option v-for="item in UnitsName" :key='item.id' :value="item">{{item}}</option>
              </select>
              <span class="iconfont iconduobianxing"></span>
            </div>
          </div>
          <div id="date_condition" style="height: 100%;width:70%;"></div>
          <!-- 左右箭头 -->
          <div class="youjiantou iconfont iconlujing1" v-if="youShow"></div>
          <div class="zuojiantou iconfont iconlujing" v-if="zuoShow"></div>
          <div class="echarts-legend">
            <div class="echarts-legend-box">
              <div class="echarts-legend-item" v-for="item in lineName" :key="item.id">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">{{item}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import axios from "axios";
export default {
  data() {
    return {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGFzc3Jvb20tc3RhdGlzdGljcyIsImlzcyI6Imh0dHBzOi8vY2xhc3MtbXMtdGVzdC51bml2dGVhbS5jb20iLCJpZCI6IjY0IiwibmFtZSI6ImFub255bW91cyIsInBpZCI6IjE2OTUiLCJwdXJsIjoiY3NwdDExMTkiLCJuYmYiOjE1NzczMzg5MjAsImV4cCI6MTU3NzM0MjUyMCwiaWF0IjoxNTc3MzM4OTIwfQ.srkrYmmpiEfiaejkJ7xtWk8u16eIEAKqpqADzAgMbYw",
      url: "https://class-ms-test.univteam.com/",
      Condition: [],
      Comment: [],
      evaluateNum: "",
      participationRate: "",
      openClassNum: [],
      openClassName: [],
      courseSupply: [],
      youShow: true,
      zuoShow: false,
      supplyComprehensive: [],
      openNum: [],
      heteExtent: [],
      openRatio: [],
      schoolUnits:[],
      UnitsName:[],
      good:"",
      middle:"",
      bad:"",
      satisfactionDegree:'',
      line:[],
      lineName:[],
      start:[],

    };
  },
  created() {
    var self = this;
    self.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  mounted() {
    // this.satisfaction();
    // this.classNumber();
    // this.classNum();
    // this.date_condition();
    this.getCondition();
    this.getComment();
    this.getCourseSupply();
    this.getsupply();
    this.schoolscope();
    this.getline();
    this.getT();
  },
  methods: {
    fetchData() {
      console.log("路由发送变化doing...");
    },
    //获取t的值
    getT(){
      var _this=this;
      var t= _this.$route.query.t;
      if(t==undefined){
        window.location.href=" http://class-admin.univteam.com/"+"cspt1119"+"/account/login?back=statistics";
      }else{
        alert(1111)
      }
      console.log(_this.$route.query.t)
    },
    //学院范围
    schoolscope() {
      var _this = this;
      axios
        .get(
          _this.url + "api/Plat/options/?access_token=" + _this.token
        )
        .then(function(response) {
          _this.schoolUnits=response.data.data.units;
          for(var i=0;i<_this.schoolUnits.length;i++){
            _this.UnitsName.push(_this.schoolUnits[i].name);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    //课程开展总览
    getCondition() {
      var _this = this;
      axios
        .get(
          _this.url + "/api/Plat/course/condition?access_token=" + _this.token
        )
        .then(function(response) {
          _this.Condition = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //评价与参评率
    getComment() {
      var _this = this;
      axios
        .get(_this.url + "/api/Plat/course/comment?access_token=" + _this.token)
        .then(function(response) {
          _this.Comment = response.data.data;
          for(var i=0;i<_this.Comment.length;i++){
            //保存评价数
            if(_this.Comment[i].type==15){
                 _this.evaluateNum=_this.Comment[i];
            }
            //保存参与率
            if(_this.Comment[i].type==16){
                _this.participationRate=_this.Comment[i];
            }
            //保存好评率
            if(_this.Comment[i].type==6){
                _this.good=_this.Comment[i]
            }
            //保存中评率
            if(_this.Comment[i].type==17){
                _this.middle=_this.Comment[i]
            }
            //保存差评率
            if(_this.Comment[i].type==6){
                _this.bad=_this.Comment[i]
            }

          }
          _this.satisfactionDegree=Math.ceil(Number(_this.good.data)+Number(_this.middle.data)+Number(_this.bad.data)/3);

          _this.satisfaction(_this.satisfactionDegree);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //请求各类课程开课情况数据
    getsupply() {
      var _this = this;
      axios
        .get(_this.url + "/api/Plat/course/supply?access_token=" + _this.token)
        .then(function(response) {
          _this.supplyComprehensive = response.data.data;
          _this.classNum(_this.supplyComprehensive);
          _this.classNumber(_this.supplyComprehensive);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //请求课程开展分时情况
    getline(){
      var _this = this;
      axios
        .get(_this.url + "/api/Plat/course/line?access_token=" + _this.token)
        .then(function(response) {
            _this.line=response.data.data;
            _this.date_condition(_this.line);
            for(var i=0;i<response.data.data.length;i++){
              _this.lineName.push(response.data.data[i].name);
            }

        })
        .catch(function(error) {
          console.log(error);
        });
    },

    //各单位课程供给排行
    getCourseSupply() {
      var _this = this;
      axios
        .get(
          _this.url + "/api/Plat/course/rank?unit=0&access_token=" + _this.token
        )
        .then(function(response) {
          _this.courseSupply = response.data.data;
          console.log(_this.courseSupply)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //仪表盘
    satisfaction(num) {
      let myChart = echarts.init(document.getElementById("satisfaction"));
      let option = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
          {
            name: "外围刻度",
            type: "gauge",
            radius: "90%",
            center: ["45%", "55%"],
            axisLine: {
              lineStyle: {
                width: 4,
                color: [[1, "#00b3ff"]],
                shadowColor: "#fff",
                shadowBlur: 10
              }
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            detail: {
              show: false
            },
            pointer: {
              show: false
            }
          },
          {
            name: "内层数据刻度",
            type: "gauge",
            radius: "89%",
            center: ["45%", "55%"],
            axisLine: {
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        {
                          offset: 1,
                          color: "#52F397"
                        },
                        {
                          offset: 0.8,
                          color: "#00E3E7" // 50% 处的颜色
                        },
                        {
                          offset: 0.6,
                          color: "#00C5FF"
                        },
                        {
                          offset: 0.4,
                          color: "#478CEF" // 40% 处的颜色
                        },
                        {
                          offset: 0.2,
                          color: "#A243DA"
                        },
                        {
                          offset: 0,
                          color: "#D72FA7"
                        }
                      ],
                      false
                    )
                  ]
                ],
                width: 30
              }
            },
            splitLine: {
              length: 15,
              lineStyle: {
                width: 0,
                color: "#00baff"
              }
            },
            axisTick: {
              lineStyle: {
                color: "#153146"
              }
            },
            axisLabel: {
              show: false,
              color: "#cbfff6",
              fontSize: 11
            },
            detail: {
              show: false
            },
            itemStyle: {
              normal: {
                color: "cyan"
              }
            },
            pointer: {
              width: 10,
              length: "90%"
            },
            data: [{ value: num }]
          },
          {
            name: "最内层线",
            type: "gauge",
            radius: "35%",
            center: ["45%", "55%"],
            startAngle: 359.9999999999999,
            endAngle: 0,
            axisLine: {
              lineStyle: {
                opacity: 0,
                color: "red"
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                opacity: 0
              }
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              length: 2,
              lineStyle: {
                color: "#fff",
                width: 3,
                type: "solid"
              }
            },
            detail: {
              show: false
            },
            pointer: {
              show: false
            }
          },
          {
            name: "饼图",
            tooltip: {
              show: false
            },
            type: "pie",
            radius: ["0%", "40%"],
            center: ["45%", "55%"],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: "#08263C"
              },
              emphasis: {
                color: "#08263C"
              }
            },
            label: {
              normal: {
                show: true,
                position: "center",
                formatter: function(params) {
                  return (
                    "{value|" +
                    params.value +
                    "}{unit|%}\n{name|" +
                    params.name +
                    "}"
                  );
                },
                rich: {
                  value: {
                    fontFamily: "SFUDINEngschrift",
                    fontSize: 34,
                    color: "#fff",
                    verticalAlign: "bottom"
                  },
                  unit: {
                    fontFamily: "SFUDINEngschrift",
                    fontSize: 20,
                    color: "#fff",
                    lineHeight: 34,
                    verticalAlign: "bottom"
                  },
                  name: {
                    fontFamily: "Microsoft YaHei",
                    fontSize: 16,
                    color: "#fff",
                    lineHeight: 23
                  }
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            animation: false,
            data: [{ value: num, name: "满意度" }]
          }
        ]
      };
      window.onresize = myChart.resize();
      myChart.setOption(option);
    },
    //饼状图
    classNumber(num) {
      var _this = this;
      for (var i = 0; i < num.length; i++) {
        _this.openRatio.push({
          value: num[i].percent,
          name: num[i].percent + "%",
          title: num[i].title
        });
        _this.openClassName.push(num[i].title);
      }
      let myChart = echarts.init(document.getElementById("classNumCircle"));
      let option = {
        title: {
          text: "各类课程开设数量",
          x: "center",
          y: "bottom",
          textStyle: {
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.14rem"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            return params.data.title + " : " + params.data.name;
          }
        },
        graphic: {
          type: "image",
          left: "center",
          top: "center",
          style: {
            image:
              "http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg",
            width: 50,
            height: 50
          }
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["30%", "70%"],
            center: ["50%", "45%"],
            // data: [
            //   { value: 90, name: "9.0%", hintText: "思想成长类" },
            //   { value: 126, name: "12.6%", hintText: "实践实习类" },
            //   { value: 170, name: "17.0%", hintText: "志愿服务类" },
            //   { value: 183, name: "18.3%", hintText: "学术科技类" },
            //   { value: 206, name: "20.6%", hintText: "文体活动类" },
            //   { value: 225, name: "22.5%", hintText: "工作履历类" }
            // ],
            data: _this.openRatio,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              normal: {
                color: function(params) {
                  var colorList = [
                    "#52F397",
                    "#00E3E7",
                    "#00C5FF",
                    "#00C5FF",
                    "#A243DA",
                    "#D72FA7"
                  ];
                  return colorList[params.dataIndex];
                },
                shadowColor: "#fff",
                shadowBlur: "5"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: "inner"
              }
            }
          }
        ]
      };

      window.onresize = myChart.resize;
      myChart.setOption(option);
    },
    //异性图
    classNum(num) {
      var _this = this;
      for (var i = 0; i < num.length; i++) {
        //各类课程开设数量
        _this.openNum.push(num[i].count);
        _this.heteExtent.push({ value: num[i].count, title: num[i].title });
        _this.openClassName.push(num[i].title);
      }
      let myChart = echarts.init(document.getElementById("classNum"));
      let option = {
        title: {
          text: "各类课程开设数量",
          x: "center",
          y: "bottom",
          textStyle: {
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.14rem"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none"
          },
          formatter: function(params) {
            return params[0].data.title + " : " + params[0].data.value;
          }
        },
        xAxis: {
          data: _this.openNum,
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          }
        },
        yAxis: {
          splitLine: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false }
        },
        color: ["#e54035"],
        series: [
          {
            name: "hill",
            type: "pictorialBar",
            barCategoryGap: "-130%",
            symbol:
              "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
              normal: {
                opacity: 0.5,
                color: function(params) {
                  var colorList = [
                    "#52F397",
                    "#00E3E7",
                    "#00C5FF",
                    "#00C5FF",
                    "#A243DA",
                    "#D72FA7",
                    "red",
                    "blue"
                  ];
                  return colorList[params.dataIndex];
                }
              },
              emphasis: {
                opacity: 1
              }
            },
            // data: [
            //   { value: 303},
            //   { value: 265},
            //   { value: 213},
            //   { value: 210},
            //   { value: 203},
            //   { value: 199},
            //   { value: 199},
            //   { value: 199}
            // ]
            data: _this.heteExtent
          }
        ]
      };
      window.onresize = myChart.resize;
      myChart.setOption(option);
    },
    //课程开展分时情况表格
    date_condition(num) {
      var _this = this;
      for(var i=0;i<num[0].datas.length;i++){
        _this.start=num[0].datas[i].start+'~'+num[0].datas[i].end;
      }
      let myChart = echarts.init(document.getElementById("date_condition"));
      let option = {
        grid: {
          left: "5%",
          right: "10%",
          top: "10%",
          bottom: "10%",
          containLabel: true
        },
        dataZoom: [
          {
            type: "inside",
            show: false,
            xAxisIndex: 0,
            zoomOnMouseWheel: false,
            startValue: 0,
            endValue: 7,
            zoomLock: true
          }
        ],
        tooltip: {
          show: true,
          trigger: "item"
        },
        legend: {
          show: true,
          x: "center",
          y: "35",
          icon: "stack",
          width: "100%",
          itemGap: 80,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: 14
          }
          // data:linetitle
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: "rgba(255,255,255,0.5)",
              formatter: function(val) {
                var a = val.split("~");
                if (a.length == 2) {
                  return a[0] + "\n" + "~\n" + a[1];
                } else {
                  return a[0] + "\n" + "~";
                }
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.4)"
              }
            },
            axisPointer: {
              show: true
            },
            data: [
              "3/4~3/10",
              "3/11~3/17",
              "3/4~3/10",
              "3/10~3/17",
              "3/10~3/17",
              "3/10~3/17",
              "3/10~3/17",
              "3/10~3/17",
              "3/10~3/17",
              "3/10~3/17",
              "3/10~3/17",
              "3/10~3/17"
            ]
            // data:linedate
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            splitNumber: 10,
            axisLabel: {
              formatter: function() {
                return "";
              },
              textStyle: {
                color: "rgba(255,255,255,0.5)"
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.4)"
              }
            }
          }
        ],
        series: [
          {
            type: "line",
            // stack: '总量',
            symbol: "circle",
            symbolSize: 3,
            showSymbol: false,
            itemStyle: {
              normal: {
                color: "rgba(82,243,151,.8)",
                lineStyle: {
                  color: "rgba(82,243,151,.5)",
                  width: 1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(82,243,151,.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(82,243,151,0.9)"
                    }
                  ])
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: "red"
                }
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
          },
          {
            type: "line",
            // stack: '总量',
            symbol: "circle",
            showSymbol: false,
            symbolSize: 3,
            itemStyle: {
              normal: {
                color: "rgba(0,227,231,.8)",
                lineStyle: {
                  color: "rgba(0,227,231,.5)",
                  width: 1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(0,227,231,.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,227,231,0.9)"
                    }
                  ])
                }
              }
            },
            data: [100, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
          },
          {
            type: "line",
            // stack: '总量',
            symbol: "circle",
            symbolSize: 3,
            showSymbol: false,
            itemStyle: {
              normal: {
                color: "rgba(0,197,255,.8)",
                lineStyle: {
                  color: "rgba(0,197,255,.5)",
                  width: 1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(0,197,255,.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,197,255,0.9)"
                    }
                  ])
                }
              }
            },
            data: [130, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
          },
          {
            type: "line",
            // stack: '总量',
            symbol: "circle",
            showSymbol: false,
            symbolSize: 3,
            itemStyle: {
              normal: {
                color: "rgba(71,140,239,.8)",
                lineStyle: {
                  color: "rgba(71,140,239,.5)",
                  width: 1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(71,140,239,.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(71,140,239,0.9)"
                    }
                  ])
                }
              }
            },
            data: [50, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
          },
          {
            type: "line",
            // stack: '总量',
            symbol: "circle",
            symbolSize: 3,
            showSymbol: false,
            itemStyle: {
              normal: {
                color: "rgba(162,67,218,.8)",
                lineStyle: {
                  color: "rgba(162,67,218,.5)",
                  width: 1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(162,67,218,.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(162,67,218,0.9)"
                    }
                  ])
                }
              }
            },
            data: [90, 200, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
          },
          {
            type: "line",
            // stack: '总量',
            symbol: "circle",
            symbolSize: 3,
            showSymbol: false,
            itemStyle: {
              normal: {
                color: "rgba(215,47,167,.8)",
                lineStyle: {
                  color: "rgba(215,47,167,.5)",
                  width: 1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(215,47,167,.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(215,47,167,0.9)"
                    }
                  ])
                }
              }
            },
            data: [30, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
          }
        ]
      };
      myChart.on("datazoom", function(params) {
        if (params.batch[0].end > 99.9) {
          _this.youShow = false;
        } else {
          _this.youShow = true;
        }
        if (params.batch[0].start > 0) {
          _this.zuoShow = true;
        } else {
          _this.zuoShow = false;
        }
      });
      window.onresize = myChart.resize;
      myChart.setOption(option);
    }
  }
};
</script>
<style scoped>
.iconfont {
  font-size: 0.1rem;
}
.iconduobianxing::before {
  color: #fff;
  opacity: 1;
  font-size: 0.1rem;
  margin-right: 0.2rem;
}
.el-date-editor {
  background: rgba(255, 255, 255, 5%);
  border: none;
}
.fx-con {
  display: flex;
  justify-content: space-between;
  margin-top: 0.42rem;
  margin-bottom: 0.24rem;
}

.fx-title {
  font-size: 0.24rem;
  color: #fff;
  margin-left: 0.4rem;
}
option{
  color: #000;
}
/* 运算 */
.fx-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.12rem;
}
.block {
  height: 40px;
  display: flex;
  margin-right: 25px;
  width: 80%;
}
.demonstration {
  color: #5b6f7e;
  background: #213c50;
  line-height: 40px;
  text-align: center;
  margin-right: 2px;
  min-width: 100px;
}
.data-picker {
  border-radius: 0;
  background: #213c50;
  border: none;
  color: #fff;
}
.fx-btn {
  border: 1px #fff solid;
  color: #fff;
  font-size: 0.12rem;
  width: 0.6rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  margin-left: 0.1rem;
}

.box-content {
  margin-left: 0.4rem;
}

.box-content-top {
  display: flex;
}
.box-item {
  width: 7.76rem;
  height: 3.28rem;
  background: rgba(255, 255, 255, 5%);
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  justify-content: space-between;
}
.box-content-bottom {
  display: flex;
}
.box-item-title {
  font-size: 0.18rem;
  color: #fff;
  height: 0.5rem;
  line-height: 0.5rem;
  border-bottom: 0.02rem #08263c solid;
  display: flex;
  justify-content: space-between;
}
.title-bar {
  width: 0.04rem;
  height: 0.13rem;
  background-color: #fff;
  margin-left: 0.1rem;
  margin-top: 0.19rem;
  margin-right: 0.1rem;
}
.launch-box1-contant {
  position: relative;
  float: left;
  margin-bottom: 5%;
  margin-left: 0.58rem;
  /* margin-right: 0.58rem; */
  margin-top: 0.15rem;
}
.launch-circle {
  width: 1rem;
  height: 1rem;
  color: #00c5ff;
  border: 2px solid #fff;
  border-radius: 50%;
  text-align: center;
  padding-top: 27%;
  box-sizing: border-box;
  font-size: 0.24rem;
}
.launch-oblong {
  width: 1rem;
  height: 0.3rem;
  text-align: center;
  border: 2px solid #fff;
  border-radius: 5px;
  font-size: 0.14rem;
  color: #fff;
  position: absolute;
  top: 0.81rem;
  background: #153146;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.launch-circle :nth-child(2) {
  font-size: 0.14rem;
  color: #fff;
}

.box-item-content {
  display: flex;
  justify-content: space-between;
  width: 50%;
  flex-wrap: wrap;
}
.box-item-content :nth-child(1).pandect .class-circle {
  color: #d72fa7;
}
.box-item-content :nth-child(2).pandect .class-circle {
  color: #478cef;
}
.box-item-content :nth-child(3).pandect .class-circle {
  color: #00c5ff;
}
.box-item-content :nth-child(4).pandect .class-circle {
  color: #00e3e7;
}
.satisfaction {
  width: 2.5rem;
  height: 2.2rem;
  float: right;
}

.fxbox1-li {
  width: 100%;
  margin: 0 auto;
  height: 9%;
  background: #274155;
  display: flex;
  /* justify-content: space-between; */
  padding: 0 5px;
  align-items: center;
  margin-bottom: 15px;
  color: #fff;
  font-size: 16px;
  box-sizing: border-box;
}
/* .fxbox4-litit {
  font-size: 16px;
  color: #707070;
  width: 30%;
  text-align: right;
  margin-right: 2%;
} */
.fxbox1-new-span {
  width: 1.6rem;
  text-align: right;
  color: rgba(255, 255, 255, 0.5);
  margin-right: 0.19rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.fxbox4-lidiv {
  border-left: 1px #fff solid;
  width: 100%;
  height: 100%;
}
.fxbox4-div1 {
  color: #fff;
  font-size: 0.1rem;
  display: flex;
  align-items: center;
}
.fx-box4 {
  /* width: 20%; */
  min-width: 300px;
  /* min-height: 400px; */
  background: #153146;
  /* margin-left: 1%; */
  overflow: auto;
  padding-bottom: 5px;
}
.fx-box4::-webkit-scrollbar {
  display: none; /*隐藏滚动条*/
}
.fxbox4-contant {
  height: 80%;
  padding: 0 10px;
  margin-top: 10px;
}
.fxbox4-li {
  display: flex;
  width: 100%;
  height: 13%;
  background: #274155;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 5px;
  font-size: 0.12rem;
}
.fxbox4-div2 {
  width: 100%;
  height: 0.1rem;
  background: #00c5ff;
}
.fxbox4-div3 {
  width: 100%;
  height: 0.1rem;
  background: #8942bf;
}
.scope_label {
  font-size: 0.12rem;
  color: #fff;
}
.scope_select {
  font-size: 0.12rem;
}
.box-item-pic {
  display: flex;
  justify-content: space-between;
  border-bottom: 0.02rem #08263c solid;
}
.classNumCircle {
  /* width: 2.59rem; */
  width: 50%;
  height: 2.29rem;
}
.classNum {
  /* width: 4.1rem; */
  width: 50%;
  height: 2.29rem;
}
#date_condition {
  width: 100% !important;
  height: 2.32rem !important;
}

.echarts-legend {
  display: flex;
  /* border-top: 0.02rem #08263c solid; */
  height: 0.3rem;
  position: absolute;
  bottom: 0px;
  width: 100%;
  line-height: 0.3rem;
}
.echarts-legend-box {
  display: flex;
  margin: 0 auto;
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-top: -0.15rem;
}
.echarts-legend-box .echarts-legend-item:nth-child(1) .echarts-legend-item-bar {
  background-color: #52f397;
}
.echarts-legend-box .echarts-legend-item:nth-child(2) .echarts-legend-item-bar {
  background-color: #00e3e7;
}
.echarts-legend-box .echarts-legend-item:nth-child(3) .echarts-legend-item-bar {
  background-color: #00c5ff;
}
.echarts-legend-box .echarts-legend-item:nth-child(4) .echarts-legend-item-bar {
  background-color: #478cef;
}
.echarts-legend-box .echarts-legend-item:nth-child(5) .echarts-legend-item-bar {
  background-color: #a243da;
}
.echarts-legend-box .echarts-legend-item:nth-child(6) .echarts-legend-item-bar {
  background-color: #d72fa7;
}
.echarts-legend-item {
  display: flex;
}
.echarts-legend-item-bar {
  background-color: #52f397;
  width: 0.08rem;
  height: 0.09rem;
  margin-right: 0.06rem;
  margin-top: 0.1rem;
}

.echarts-legend-item-txt {
  font-size: 0.1rem;
  color: #fff;
  margin-right: 0.16rem;
}
#classSituation {
  position: relative;
}
#timeSituation {
  position: relative;
}

.box-item-title-left {
  display: flex;
  width: 50%;
  font-size: 0.14rem;
}
.box-item-title-right{
  width: 50%;
}
.box-item-title-right span {
  opacity: 0.5;
  /* margin-left: 0.20rem; */
  font-size: 0.14rem;
}
select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none; /*兼容苹果手机*/
  -ms-appearance: none;
  outline: none;
  -webkit-tap-highlight-color: #fff;
  border: rem(1) solid #ebebeb;
  /* width: rem(100); */
  width: 60%;
  height: rem(50);
  line-height: rem(50);
  /*防止紧紧靠在边上*/
  text-indent: rem(4);
  background-color: transparent;
  color: #fff;
  border: none;
  margin-right: 0.2rem;
  font-size: 0.14rem;
}
.evaluatePart-box {
  width: 2rem;
  height: 0.23rem;
  line-height: 0.23rem;
  background: rgba(255, 255, 255, 8%);
  float: right;
  margin-right: 0.35rem;
}
.evaluatePart {
  font-size: 0.12rem;
  color: #fff;
  text-align: center;
}
.pandect {
  width: 50%;
}
.SatisfactionDegree {
  width: 50%;
  overflow: hidden;
}
.courseOverview {
  display: flex;
}
.youjiantou {
  position: absolute;
  top: 1.3rem;
  right: 0.05rem;
  font-size: 0.22rem;
}
.zuojiantou {
  position: absolute;
  top: 1.3rem;
  left: 0.1rem;
  font-size: 0.22rem;
}
.iconlujing,
.iconlujing1 {
  opacity: 0.2;
  font-size: 0.26rem;
}
</style>