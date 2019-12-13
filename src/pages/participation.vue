<template>
  <div>
    <div class="fx-con">
      <div class="fx-title">第二课堂参与情况分析</div>
    </div>
    <!-- 四块主内容 -->
    <div class="box-content">
      <div class="box-content-top">
        <div class="box-item">
          <div class="box-item-title">
            <div class="box-item-title-left">
              <div class="title-bar"></div>
              <p>各类课程参与人次</p>
            </div>
          </div>
          <div class="box-item-pic">
            <div class="classPersonCake" id="classPersonCake"></div>
            <div class="switchSlide" id="switchSlide"></div>
          </div>
        </div>
        <div class="box-item" id="classSituation">
          <div class="box-item-title">
            <div class="box-item-title-left">
              <div class="title-bar"></div>
              <p>第二课堂整体参与度于信息系统活跃</p>
            </div>
            <div class="box-item-title-right">
              <span>学院范围</span>
              <select>
                <option value="全部开课学院">全部开课学院</option>
              </select>
            </div>
          </div>
          <div class="liveness">
            <div class="liveness-top">
              <div class="iconfont iconjihuo"></div>
              <div>
                <p>学生用户激活总数</p>
                <div>56432名学生</div>
              </div>
              <div>
                <p>教师用户激活总数</p>
                <div>632名教职工</div>
              </div>
              <div>
                <p>单位参与数量</p>
                <div>32个</div>
              </div>
              <div>
                <p>教职工参与人数</p>
                <div>642人</div>
              </div>
            </div>
            <div class="liveness-middle">
              <div class="iconfont iconrenshu"></div>
              <div>
                <p>学生参与总人次</p>
                <div>9.12万人次</div>
              </div>
              <div>
                <p>学生参与总人数</p>
                <div>3.4万人</div>
              </div>
              <div>
                <p>人均参与次数</p>
                <div>2.3次/人</div>
              </div>
            </div>
            <div class="liveness-bottom">
              <div class="iconfont iconhuo"></div>
              <div>
                <p>学生用户激活总数</p>
                <div>56432名学生</div>
              </div>
              <div>
                <p>教师用户激活总数</p>
                <div>632名教职工</div>
              </div>
              <div>
                <p>单位参与数量</p>
                <div>32个</div>
              </div>
              <div>
                <p>教职工参与人数</p>
                <div>642人</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-content-bottom">
        <div class="box-item">
          <div class="box-item-title">
            <div class="box-item-title-left">
              <div class="title-bar"></div>
              <p>各学院学生参与人次统计</p>
            </div>
          </div>
          <div class="collegePerson" id="collegePerson"></div>
        </div>
        <div class="box-item" id="timeSituation">
          <div class="box-item-title">
            <div class="box-item-title-left">
              <div class="title-bar"></div>
              <p>课程参与积极性指标</p>
            </div>
            <div class="box-item-title-right">
              <span>学院范围</span>
              <select>
                <option value="全部开课学院">全部开课学院</option>
              </select>
            </div>
          </div>
          <div>
            <!-- 漏斗图 -->
            <div class="funnel" id="funnel"></div>
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
  name: "participation",
  data() {
    return {};
  },
  mounted() {
    this.collegePerson();
    this.classPersonCake();
    this.switchSlide();
    this.funnel();
  },
  methods: {
    //饼状图
    classPersonCake() {
      let myChart = echarts.init(document.getElementById("classPersonCake"));
      let option = {
        title: {
          text: "各类课程参与学生数比例",
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
                    "#478CEF",
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
    //横向柱状图
    switchSlide() {
      let myChart = echarts.init(document.getElementById("switchSlide"));
      var option = {
        title: {
          text: "各类课程参与学生人次",
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#fff",
            fontSize: "0.12rem"
          }
        },
        dataset: {
          source: [
            ["score", "amount", "product"],
            [89.3, 58212, "思想成长类"],
            [57.1, 78254, "实践实习类"],
            [74.4, 41032, "志愿服务类"],
            [50.1, 12755, "学术科技类"],
            [89.7, 20145, "文体活动类"],
            [68.1, 79146, "工作履历类"]
          ]
        },

        grid: { containLabel: true },
        xAxis: {
          show: false,
          name: "amount",
          axisLabel: {
            textStyle: { fontSize: 10, color: "#fff" }
          }
        },
        yAxis: {
          type: "category",
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          }
        },

        series: [
          {
            type: "bar",
            encode: {
              x: "amount",
              y: "product"
            },
            itemStyle: {
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
            }
          }
        ]
      };

      window.onresize = myChart.resize;
      myChart.setOption(option);
    },
    //柱状图
    collegePerson() {
      let myChart = echarts.init(document.getElementById("collegePerson"));
      var dataAxis = [
        "土木建筑工程学院",
        "马克思主义学院",
        "经济与管理学院",
        "信息管理学院",
        "11",
        "11",
        "11",
        "11",
        "12",
        "13",
        "14"
      ];
      var data = [2200, 1820, 1600, 1600, 1000, 2000, 1200, 800, 500, 600, 700];
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          label: {
            show: true
          },
          //去掉了柱状图的阴影
          showContent: false,
          triggerEvent: true
        },
        grid: {
          borderWidth: 0,
          top: 40,
          bottom: 40,
          left: 50,
          right: 10,
          textStyle: {
            color: "#fff"
          }
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
        xAxis: [
          {
            type: "category",
            data: dataAxis,
            triggerEvent: true,
            axisPointer: {
              type: "shadow"
            },
            axisLabel: {
              textStyle: { fontSize: 10, color: "#fff" },
              interval: 0,
              formatter: function(params) {
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 3; // 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                if (paramsNameNumber > provideNumber) {
                  /** 循环每一行,p表示行 */
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = ""; // 表示每一次截取的字符串
                    var start = p * provideNumber; // 开始截取的位置
                    var end = start + provideNumber; // 结束截取的位置
                    // 此处特殊处理最后一行的索引值
                    if (p == rowNumber - 1) {
                      // 最后一次不换行
                      tempStr = params.substring(start, paramsNameNumber);
                    } else {
                      // 每一次拼接字符串并换行
                      tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr;
                  }
                } else {
                  newParamsName = params;
                }
                return newParamsName;
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                show: false
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.03)"
              }
            }
          }
        ],
        yAxis: [
          {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#999"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.03)"
              }
            }
          }
        ],
        series: [
          {
            type: "bar",
            data: data,
            barWidth: 15,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0.2, color: "#70306D" },
                  { offset: 0.4, color: "#9250DE" },
                  { offset: 0.6, color: "#587FEC" },
                  { offset: 0.8, color: "#339DF4" },
                  { offset: 1, color: "#00C5FF" }
                ]),
                barBorderRadius: [15, 15, 0, 0]
              }
            }
          }
        ]
      };
      window.onresize = myChart.resize();
      myChart.setOption(option);
    },
    //漏斗图
    funnel() {
      let myChart = echarts.init(document.getElementById("funnel"));
      let option = {
        title: {
          text: "参与漏斗图",
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#fff",
            fontSize: "0.14rem"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%"
        },
        calculable: true,
        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "10%",
            top: 60,
            bottom: 60,
            width: "80%",
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside"
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid"
              }
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
              normal: {
                color: function(params) {
                  var colorList = ["#00FCD5", "#00C5FF", "#478CEF", "#A243DA"];
                  return colorList[params.dataIndex];
                }
              }
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: [
              { value: 60, name: "60%" },
              { value: 40, name: "40%" },
              { value: 20, name: "20%" },
              { value: 80, name: "80%" }
            ]
          }
        ]
      };

      window.onresize = myChart.resize();
      myChart.setOption(option);
    }
  }
};
</script>
<style>
.data-picker input {
  background-color: #213c50 !important;
}
.data-picker .el-range__icon {
  display: none;
}
.data-picker .el-range-separator {
  color: #c4cbd1;
}
.fx-scope input {
  border: none;
  background: #213c50;
  color: #ffffff;
}
.el-date-editor .el-range-input {
  color: #ffffff;
}
</style>
<style scoped>
.iconfont {
  color: #fff;
  font-size: 0.3rem;
  opacity: 0.5;
}
.iconjihuo,
.iconrenshu,
.iconhuo {
  position: relative;
}
.iconjihuo::before,
.iconrenshu::before,
.iconhuo::before {
  position: absolute;
  top: 0.17rem;
  left: 0.2rem;
}
.fx-title {
  font-size: 0.24rem;
  color: #fff;
  margin-left: 0.4rem;
}
.fx-con {
  display: flex;
  justify-content: space-between;
  margin-top: 0.42rem;
  margin-bottom: 0.24rem;
}
.box-content {
  margin-left: 0.4rem;
}
.box-content-top {
  display: flex;
}
.box-content-bottom {
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
#classSituation {
  position: relative;
}
#timeSituation {
  position: relative;
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
.box-item-title-left {
  display: flex;
}
.box-item-title-right span {
  opacity: 0.5;
  font-size: 0.12rem;
}
select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none; /*兼容苹果手机*/
  -ms-appearance: none;
  outline: none;
  -webkit-tap-highlight-color: #fff;
  border: rem(1) solid #ebebeb;
  width: rem(100);
  height: rem(50);
  line-height: rem(50);
  /*防止紧紧靠在边上*/
  text-indent: rem(4);
  background-color: transparent;
  color: #fff;
  border: none;
  margin-right: 0.2rem;
}
.box-item-pic {
  display: flex;
  justify-content: space-between;
}
.classPersonCake {
  width: 2.5rem;
  height: 2.5rem;
}
.switchSlide {
  width: 4.5rem;
  height: 2.5rem;
}
.funnel {
  width: 2.5rem;
  height: 2.5rem;
}
.liveness {
  font-size: 0.12rem;
  margin: 0 auto;
}
.liveness-top {
  display: flex;
  text-align: center;
  margin-bottom: 0.12rem;
}
.liveness-top > div {
  background-color: rgba(0, 252, 213, 15%);
  margin-right: 0.04rem;
}
.liveness-top > div:nth-child(1) {
  width: 0.68rem;
  height: 0.68rem;
}
.liveness-top > div:nth-child(2) {
  width: 1.3rem;
  height: 0.68rem;
}
.liveness-top > div:nth-child(3) {
  width: 1.3rem;
  height: 0.68rem;
}
.liveness-top > div:nth-child(4) {
  width: 1.3rem;
  height: 0.68rem;
}
.liveness-top > div:nth-child(5) {
  width: 1.3rem;
  height: 0.68rem;
}
.liveness-top > div > p {
  color: #fff;
  opacity: 50%;
  margin-top: 0.13rem;
  margin-bottom: 0.13rem;
}
.liveness-top > div > div {
  color: #fff;
}
.liveness-middle {
  display: flex;
  text-align: center;
  margin-bottom: 0.12rem;
}
.liveness-middle > div {
  background-color: rgba(71, 140, 239, 15%);
  margin-right: 0.04rem;
}
.liveness-middle > div:nth-child(1) {
  width: 0.68rem;
  height: 0.68rem;
}
.liveness-middle > div:nth-child(2) {
  width: 2.63rem;
  height: 0.68rem;
}
.liveness-middle > div:nth-child(3) {
  width: 1.3rem;
  height: 0.68rem;
}
.liveness-middle > div:nth-child(4) {
  width: 1.3rem;
  height: 0.68rem;
}

.liveness-middle > div > p {
  color: #fff;
  opacity: 50%;
  margin-top: 0.13rem;
  margin-bottom: 0.13rem;
}
.liveness-middle > div > div {
  color: #fff;
}
.liveness-bottom {
  display: flex;
  text-align: center;
  margin-bottom: 0.12rem;
}
.liveness-bottom > div {
  background-color: rgba(162, 67, 218, 15%);
  margin-right: 0.04rem;
}
.liveness-bottom > div:nth-child(1) {
  width: 0.68rem;
  height: 0.68rem;
}
.liveness-bottom > div:nth-child(2) {
  width: 1.3rem;
  height: 0.68rem;
}
.liveness-bottom > div:nth-child(3) {
  width: 1.3rem;
  height: 0.68rem;
}
.liveness-bottom > div:nth-child(4) {
  width: 1.3rem;
  height: 0.68rem;
}
.liveness-bottom > div:nth-child(5) {
  width: 1.3rem;
  height: 0.68rem;
}
.liveness-bottom > div > p {
  color: #fff;
  opacity: 50%;
  margin-top: 0.13rem;
  margin-bottom: 0.13rem;
}
.liveness-bottom > div > div {
  color: #fff;
}
#collegePerson {
  width: 5rem;
  height: 2.5rem;
}
</style>