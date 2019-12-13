<template>
  <div>
    <div class="fx-con">
      <div class="fx-title">第二课堂课程开展分析</div>
      <div class="fx-content">
        <div class="block">
          <div class="demonstration">统计日期</div>
          <el-date-picker
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            class="data-picker"
          ></el-date-picker>
          <div class="fx-btn">运算</div>
        </div>
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
          <div class="box-item-content">
            <div class="pandect">
              <div class="circle-top">
                <div class="launch-box1-contant">
                  <div class="launch-circle">
                    <div class="class-circle">1744</div>
                    <div>个</div>
                  </div>
                  <div class="launch-oblong">开课数量</div>
                </div>
                <div class="launch-box1-contant">
                  <div class="launch-circle">
                    <div class="declare-circle">2324</div>
                    <div>个</div>
                  </div>
                  <div class="launch-oblong">课程申报</div>
                </div>
              </div>
              <div class="circle-bottom">
                <div class="launch-box1-contant">
                  <div class="launch-circle">
                    <div class="approval-circle">76.5</div>
                    <div>%</div>
                  </div>
                  <div class="launch-oblong">审批通过率</div>
                </div>
                <div class="launch-box1-contant">
                  <div class="launch-circle">
                    <div class="time-circle">72</div>
                    <div>小时</div>
                  </div>
                  <div class="launch-oblong">平均审批时效</div>
                </div>
              </div>
            </div>
            <div class="satisfaction" id="satisfaction"></div>
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
                <option value="全部开课学院">全部开课学院</option>
              </select>
            </div>
          </div>
          <div class="box-item-pic">
            <div class="classNumCircle" id="classNumCircle"></div>
            <div class="classNum" id="classNum"></div>
          </div>
          <div class="echarts-legend">
            <div class="echarts-legend-box">
              <div class="echarts-legend-item">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">思想成长类</div>
              </div>
              <div class="echarts-legend-item">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">实践实习类</div>
              </div>
              <div class="echarts-legend-item">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">志愿服务类</div>
              </div>
              <div class="echarts-legend-item">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">学术科技类</div>
              </div>
              <div class="echarts-legend-item">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">文体活动类</div>
              </div>
              <div class="echarts-legend-item">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">工作履历类</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-content-bottom">
        <!-- 各单位课程供给排行 -->
        <div class="box-item">
          <div class="box-item-title">
            <div class="box-item-title-left">
              <div class="title-bar"></div>
              <p>各单位课程供给排行</p>
            </div>
          </div>
          <div class="fxbox4-contant">
            <div class="fxbox4-li">
              <div class="fxbox4-litit fxbox1-new-span">经济学院</div>
              <div class="fxbox4-lidiv">
                <div class="fxbox4-div1">
                  &nbsp;&nbsp;
                  <span class="iconfont icon-ketang"></span>&nbsp;
                  <span>434</span>次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="iconfont icon-rengong-copy"></span>&nbsp;
                  <span>296</span>人次
                </div>
                <div class="fxbox4-div2" style="width: 50%;"></div>
                <div class="fxbox4-div3" style="width: 80%;"></div>
              </div>
            </div>
            <div class="fxbox4-li">
              <div class="fxbox4-litit fxbox1-new-span">经济学院1212</div>
              <div class="fxbox4-lidiv">
                <div class="fxbox4-div1">
                  &nbsp;&nbsp;
                  <span class="iconfont icon-ketang"></span>&nbsp;
                  <span>434</span>次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="iconfont icon-rengong-copy"></span>&nbsp;
                  <span>296</span>人次
                </div>
                <div class="fxbox4-div2" style="width: 50%;"></div>
                <div class="fxbox4-div3" style="width: 80%;"></div>
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
                <option value="全部开课学院">全部开课学院</option>
              </select>
            </div>
          </div>
          <div id="date_condition" style="height: 100%;width:70%;"></div>
          <div class="echarts-legend">
            <div class="echarts-legend-box">
              <div class="echarts-legend-item">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">思想成长类</div>
              </div>
              <div class="echarts-legend-item">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">实践实习类</div>
              </div>
              <div class="echarts-legend-item">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">志愿服务类</div>
              </div>
              <div class="echarts-legend-item">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">学术科技类</div>
              </div>
              <div class="echarts-legend-item">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">文体活动类</div>
              </div>
              <div class="echarts-legend-item">
                <div class="echarts-legend-item-bar"></div>
                <div class="echarts-legend-item-txt">工作履历类</div>
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
      //  linetitle:[],
    };
  },
  created() {
    var self = this;
    self.fetchData();
  },
  watch:{
    '$route':'fetchData'
  },
  mounted() {
    this.satisfaction();
    this.classNumber();
    this.classNum();
    this.date_condition();
  },
  methods: {
    fetchData(){
          console.log('路由发送变化doing...');
    },
    //仪表盘
    satisfaction() {
      let myChart = echarts.init(document.getElementById("satisfaction"));
      let option = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {}
        },
        series: [
          {
            name: "",
            type: "gauge",
            center: ["40%", "50%"],
            detail: { formatter: "{value}%" },
            axisTick: {
              default: false
            },
            radius: "70%",
            data: [{ value: 76, name: "满意度" }],
            axisLine: {
              show:true,
              lineStyle:{
                color:[
                  [1,new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset:0,
                      color:'#D72FA7'
                    },
                    {
                      offset:0.2,
                      color:'#A243DA'
                    },
                    {
                      offset:0.4,
                      color:'#478CEF'
                    },
                    {
                      offset:0.6,
                      color:'#00C5FF'
                    },
                    {
                      offset:0.8,
                      color:'#00E3E7'
                    },
                    {
                      offset:1,
                      color:'#52F397'
                    }
                  ])]
                ]
              }
            }
          }
        ]
      };
      window.onresize = myChart.resize();
      myChart.setOption(option);
    },
    //饼状图
    classNumber() {
      let myChart = echarts.init(document.getElementById("classNumCircle"));
      let option = {
        title: {
          text: "各类课程开设数量",
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#fff",
            fontSize: "0.14rem"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["20%", "70%"],
            center: ["50%", "45%"],
            data: [
              { value: 90, name: "9.0%" },
              { value: 126, name: "12.6%" },
              { value: 170, name: "17.0%" },
              { value: 183, name: "18.3%" },
              { value: 206, name: "20.6%" },
              { value: 225, name: "22.5%" }
            ],
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
                }
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
    classNum() {
      let myChart = echarts.init(document.getElementById("classNum"));
      let option = {
        title: {
          text: "各类课程开设数量",
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#ffffff",
            fontSize: "0.14rem"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none"
          },
          formatter: function(params) {
            // var classNumb=['思想成长类','实践实习类','志愿服务类','学术科技类','文体活动类','工作履历类'];
            return params[0].name + ": " + params[0].value;
            // return classNumb
          }
        },
        xAxis: {
          data: ["200", "150", "120", "110", "100", "80"],
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            textStyle: {
              color: "#fff",
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
                    "#D72FA7"
                  ];
                  return colorList[params.dataIndex];
                }
              },
              emphasis: {
                opacity: 1
              }
            },
            data: [200, 150, 120, 110, 100, 80],
            z: 10
          },
          {
            name: "glyph",
            type: "pictorialBar",
            barGap: "-100%",
            symbolPosition: "end",
            symbolSize: 50,
            symbolOffset: [0, "-120%"],
            data: [
              {
                // value: 123,
                // symbol: pathSymbols.reindeer,
                symbolSize: [60, 60]
              },
              {
                // value: 60,
                // symbol: pathSymbols.rocket,
                symbolSize: [50, 60]
              },
              {
                // value: 25,
                // symbol: pathSymbols.plane,
                symbolSize: [65, 35]
              },
              {
                // value: 18,
                // symbol: pathSymbols.train,
                symbolSize: [50, 30]
              },
              {
                // value: 12,
                // symbol: pathSymbols.ship,
                symbolSize: [50, 35]
              },
              {
                // value: 9,
                // symbol: pathSymbols.car,
                symbolSize: [40, 30]
              },
              {
                // value: 2,
                // symbol: pathSymbols.run,
                symbolSize: [40, 50]
              },
              {
                // value: 1,
                // symbol: pathSymbols.walk,
                symbolSize: [40, 50]
              }
            ]
          }
        ]
      };
       window.onresize = myChart.resize;
      myChart.setOption(option);
     
    },
    //表格
    date_condition() {
      let myChart = echarts.init(document.getElementById("date_condition"));
      let option = {
        grid: {
          left: "5%",
          right: "10%",
          top: "10%",
          bottom: "10%",
          containLabel: true
        },
        // dataZoom: [
        //   {
        //     id: "dataZoomX",
        //     type: "slider",
        //     xAxisIndex: [0],
        //     filterMode: "filter",
        //     handleSize: 8,
        //     start: 0,
        //     end: 80
        //   }
        // ],
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
            // name:linetitle[0],
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
                  //color: '#94C9EC'
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
            // data:linedata1
          },
          {
            // name:linetitle[1],
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
                  //color: '#94C9EC'
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
            // data:linedata2
          },
          {
            // name:linetitle[2],
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
                  //color: '#94C9EC'
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
            // data:linedata3
          },
          {
            // name:linetitle[3],
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
                  //color: '#94C9EC'
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
            // data:linedata4
          },
          {
            // name:linetitle[4],
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
                  //color: '#94C9EC'
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
            // data:linedata5
          },
          {
            // name:linetitle[5],
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
                  //color: '#94C9EC'
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
            // data:linedata6
          }
        ]
      };
      myChart.on("datazoom", function(params) {
        if (params.batch[0].end > 99.9) {
          // _this.youShow=false
        } else {
          // _this.youShow=true
        }
        if (params.batch[0].start > 0) {
          // _this.zuoShow=true
        } else {
          // _this.zuoShow=false
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
  font-size: 0.10rem;
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
.fx-content {
  font-size: 0.12rem;
}
.demonstration {
  width: 0.66rem;
  height: 0.32rem;
  line-height: 0.32rem;
  color: #fff;
  background: rgba(255, 255, 255, 5%);
  text-align: center;
  font-size: 0.12rem;
  margin-right: 0.05rem;
}
.block {
  display: flex;
  justify-content: space-between;
  margin-right: 0.4rem;
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

.circle-top {
  display: flex;
}
.circle-bottom {
  display: flex;
}
.box-item-content {
  display: flex;
  justify-content: space-between;
}
.satisfaction {
  width: 2.5rem;
  height: 2.5rem;
}

.fxbox1-new-span {
  width: 1.6rem;
  text-align: right;
  color: #fff;
  margin-right: 0.19rem;
}
.fxbox4-lidiv {
  border-left: 1px #fff solid;
}
.fxbox4-div1 {
  color: #fff;
  font-size: 0.1rem;
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
  width: 50%;
  height: 0.1rem;
  background: #00c5ff;
}
.fxbox4-div3 {
  width: 17%;
  height: 0.1rem;
  background: #8942bf;
  margin-top: 0.5%;
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
}
.classNumCircle {
  width: 2.59rem;
  height: 2.29rem;
}
.classNum {
  width: 4.1rem;
  height: 2.29rem;
}
#date_condition {
  width: 100% !important;
  height: 2.32rem !important;
}

.echarts-legend {
  display: flex;
  border-top: 0.02rem #08263c solid;
  height: 0.3rem;
  position: absolute;
  bottom: 0px;
  width: 100%;
  line-height: 0.3rem;
}
.echarts-legend-box {
  display: flex;
  margin: 0 auto;
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
.class-circle {
  color: #d72fa7;
}
.declare-circle {
  color: #478cef;
}
.approval-circle {
  color: #00c5ff;
}
.time-circle {
  color: #00e3e7;
}
.box-item-title-left {
  display: flex;
}
.box-item-title-right span{
  opacity: 0.5;
  font-size: 0.12rem;
}
select{
    appearance:none;   
    -moz-appearance:none;   
    -webkit-appearance:none; /*兼容苹果手机*/
    -ms-appearance:none; 
    outline:none;      
    -webkit-tap-highlight-color: #fff;
    border: rem(1) solid #EBEBEB;
    width:rem(100);
    height: rem(50);
    line-height: rem(50);
    /*防止紧紧靠在边上*/
    text-indent:rem(4);
    background-color: transparent;
    color: #fff;
    border: none;
    margin-right: 0.20rem;
}
</style>