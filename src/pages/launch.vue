<template>
  <div>
    <div class="fx-con">
      <div class="fx-title">第二课堂课程开展分析</div>
      <div class="fx-content">
        <!-- 日期插件 -->
        <div class="block">
          <span class="demonstration">统计日期</span>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            class="data-picker"
          ></el-date-picker>
        </div>
        <div class="fx-btn" @click="pointer()">运算</div>
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
              <select @change="change($event)">
                <option>全部</option>
                <option v-for="item in haha" :key="item.index" :value="item.id">{{item.name}}</option>
              </select>
              <!-- <span class="iconfont iconduobianxing"></span> -->
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
              <select @change="change2($event)">
                <option>全部</option>
                <option v-for="item in haha" :key="item.index" :value="item.id">{{item.name}}</option>
              </select>
            </div>
          </div>
          <div id="date_condition" style="height: 100%;width:70%;"></div>
          <!-- 左右箭头 -->
          <div class="youjiantou iconfont iconlujing1" v-if="youShow"></div>
          <div class="zuojiantou iconfont iconlujing" v-if="zuoShow"></div>
          <div class="echarts-legend">
            <div class="echarts-legend-box echarts-legend-box2">
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
      // token:
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGFzc3Jvb20tc3RhdGlzdGljcyIsImlzcyI6Imh0dHBzOi8vY2xhc3MtbXMtdGVzdC51bml2dGVhbS5jb20iLCJpZCI6IjY0IiwibmFtZSI6ImFub255bW91cyIsInBpZCI6IjE2OTUiLCJwdXJsIjoiY3NwdDExMTkiLCJuYmYiOjE1NzczNTM2NzgsImV4cCI6MTU3NzM1NzI3OCwiaWF0IjoxNTc3MzUzNjc4fQ.o3NYOAZFhH4u0PZ6erMUTB6Atv0kbT16XD10Tcl5SMQ",
      // url: "https://class-ms-test.univteam.com/",
      url: "https://classroom.univteam.com/",
      back_url: "http://class-admin.univteam.com/",
      value1: [new Date(new Date() - 1000 * 60 * 60 * 24 * 30), new Date()], //日期

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
      schoolUnits: [],
      UnitsName: [],
      good: "",
      middle: "",
      bad: "",
      satisfactionDegree: "",
      line: [],
      lineName: [],
      start: [],
      Token: "",
      sessionToken: "",
      platform: "",
      PlatDetail: "",
      unitsId: [],
      haha: [],
      openclassOne: "",
      ida: 0,
      ida2: 0,
      bigColor: [
        "#52F397",
        "#00E3E7",
        "#00C5FF",
        "#00C5FF",
        "#A243DA",
        "#D72FA7",
        "#52F397",
        "#00E3E7",
        "#00C5FF",
        "#00C5FF",
        "#A243DA",
        "#D72FA7",
        "#52F397",
        "#00E3E7",
        "#00C5FF",
        "#00C5FF",
        "#A243DA",
        "#D72FA7"
      ]
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
    //延迟执行
    this.whetherToken();
  },
  methods: {
    change(event) {
      var _this = this;
      // console.log(event.target.value)
      _this.ida = event.target.value;
      console.log(_this.ida);
    },
    change2() {
      var _this = this;
      // console.log(event.target.value)
      _this.ida2 = event.target.value;
      console.log(_this.ida2);
    },
    fetchData() {
      console.log("路由发送变化doing...");
    },
    //首先判断浏览器缓存中有没有token,如果有token,把token带入函数并执行
    whetherToken() {
      console.log("进入了whetherToken");
      var _this = this;
      _this.platform = this.$route.params.id;
      switch (_this.platform) {
        case "whu":
          _this.url = "http://app.dekt.whu.edu.cn/whu/Statistics/";
          _this.back_url = "http://dekt.whu.edu.cn/whu/";
          break;
        default:
          _this.url =
            "https://classroom.univteam.com/" + _this.platform + "/Statistics/";
          _this.back_url = "http://class-admin.univteam.com/";
          break;
      }
      _this.sessionToken = sessionStorage.getItem("token");
      //把每个调用的接口都写在此方法中,需要在接口中加token
      if (_this.sessionToken !== null) {
        console.log("sessionToken:" + _this.sessionToken);
        //不为null,本地已经存在token,调用方法
        _this.getInfos();
      } else {
        //判断路径上有无参数,
        setTimeout(function() {
          _this.whetherToken();
        }, 1000);

        //_this.postToken();
      }
    },
    getInfos() {
      var _this = this;
      var Start =
        this.DateTimes(this.value1[0]) != ""
          ? this.DateTimes(this.value1[0])
          : "";
      var End =
        this.DateTimes(this.value1[1]) != ""
          ? this.DateTimes(this.value1[1])
          : "";
      _this.schoolscope(_this.sessionToken);
      _this.getCondition(_this.sessionToken);
      _this.getComment(_this.sessionToken);
      _this.getsupply(_this.sessionToken, Start, End, _this.ida);
      _this.getline(_this.sessionToken, Start, End, _this.ida2);
      _this.getCourseSupply(_this.sessionToken);
      _this.GetPlatDetail(_this.sessionToken);
    },
    //点击指示器,重新运算
    pointer() {
      var _this = this;
      _this.getInfos();
    },
    // 处理时间戳
    DateTimes(id) {
      var result;
      var myDate = new Date(id);
      var yaer = myDate.getYear(); //获取当前年份(2位)
      var fullyaer = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      var month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      var date = myDate.getDate(); //获取当前日(1-31)
      if (month < 10) {
        month = "0" + month;
      }
      if (date < 10) {
        date = "0" + date;
      }
      result = fullyaer.toString() + "-" + month + "-" + date;
      return result;
    },
    //获取饼状图中间的学校logo
    GetPlatDetail(token) {
      console.log(new Date(2019, 10, 29));
      console.log(new Date());
      // console.log(new Date-'30')
      var _this = this;
      // axios.get(_this.url + "api/Plat/plat/detail?access_token=" + token)
      axios
        .get(_this.url + "plat_detail?access_token=" + token)
        .then(function(response) {
          _this.PlatDetail = response.data.data.logo;
          axios
            .get(_this.url + "course_supply?access_token=" + token)
            .then(function(response) {
              var resD = response.data;
              if (resD.code == 0) {
                _this.supplyComprehensive = response.data.data;
                _this.classNum(_this.supplyComprehensive);
                _this.classNumber(_this.supplyComprehensive, _this.PlatDetail);
              }
            })
            .catch(function(error) {
              //sessionStorage.removeItem("token"); //清除失效的token
              _this.tourl(_this.platform);
            });
        })
        .catch(function(error) {
          //sessionStorage.removeItem("token"); //清除失效的token
          _this.tourl(_this.platform);
        });
    },
    //学院范围
    schoolscope(token) {
      var _this = this;
      // axios.get(_this.url + "api/Plat/options/?access_token=" + token)
      axios
        .get(_this.url + "options?access_token=" + token)
        .then(function(response) {
          var resD = response.data;
          if (resD.code == 0) {
            _this.schoolUnits = response.data.data.units;
            for (var i = 0; i < _this.schoolUnits.length; i++) {
              _this.haha.push(_this.schoolUnits[i]);
              _this.UnitsName.push(_this.schoolUnits[i].name);
              _this.unitsId.push(_this.schoolUnits[i].id);
            }
          }
        })
        .catch(function(error) {
          //sessionStorage.removeItem("token"); //清除失效的token
          _this.tourl(_this.platform);
        });
    },
    tourl(platName) {
      console.log("跳转到admin");
      var _this = this;
      //window.location.href =_this.back_url +platName +"/account/login?back=statistics";
    },
    //课程开展总览
    getCondition(token) {
      var _this = this;
      // axios.get(_this.url + "api/Plat/course/condition?access_token=" + token)
      axios
        .get(_this.url + "course_condition?access_token=" + token)
        .then(function(response) {
          var resD = response.data;
          if (resD.code == 0 && resD.data.length > 0) {
            _this.Condition = response.data.data;
          }
        })
        .catch(function(error) {
          //sessionStorage.removeItem("token"); //清除失效的token
          _this.tourl(_this.platform);
        });
    },
    //评价与参评率
    getComment(token) {
      var _this = this;
      // axios.get(_this.url + "api/Plat/course/comment?access_token=" + token)
      axios
        .get(_this.url + "course_comment?access_token=" + token)
        .then(function(response) {
          var resD = response.data;
          if (resD.code == 0 && resD.data.length > 0) {
            _this.Comment = response.data.data;
            for (var i = 0; i < _this.Comment.length; i++) {
              //保存评价数
              if (_this.Comment[i].type == 15) {
                _this.evaluateNum = _this.Comment[i];
              }
              //保存参与率
              if (_this.Comment[i].type == 16) {
                _this.participationRate = _this.Comment[i];
              }
              //保存好评率
              if (_this.Comment[i].type == 6) {
                _this.good = _this.Comment[i];
              }
              //保存中评率
              if (_this.Comment[i].type == 17) {
                _this.middle = _this.Comment[i];
              }
              //保存差评率
              if (_this.Comment[i].type == 6) {
                _this.bad = _this.Comment[i];
              }
            }
            // _this.satisfactionDegree=Number(_this.good.data)+Number(_this.middle.data)+Number(_this.bad.data)/3;
            var hao = Number(_this.good.data);
            var zhong = Number(_this.middle.data);
            var huai = Number(_this.bad.data);
            _this.satisfactionDegree = Math.ceil((hao + zhong + huai) / 3);
            _this.satisfaction(_this.satisfactionDegree);
          }
        })
        .catch(function(error) {
          //sessionStorage.removeItem("token"); //清除失效的token
          _this.tourl(_this.platform);
        });
    },
    //请求各类课程开课情况
    getsupply(token, Start, End, Unit) {
      var _this = this;
      // axios.get(_this.url + "api/Plat/course/supply?access_token=" + token)
      axios
        .get(
          _this.url +
            "course_supply?access_token=" +
            token +
            "&Start=" +
            Start +
            "&End=" +
            End +
            "&Unit=" +
            Unit
        )
        .then(function(response) {
          var resD = response.data;
          if (resD.code == 0 && resD.data.length > 0) {
            _this.supplyComprehensive = response.data.data;
            _this.classNum(_this.supplyComprehensive);
            _this.classNumber(_this.supplyComprehensive);
          }
        })
        .catch(function(error) {
          //sessionStorage.removeItem("token"); //清除失效的token
        });
    },
    //请求课程开展分时情况
    getline(token, Start, End, Unit) {
      var _this = this;
      axios
        .get(
          _this.url +
            "course_line?access_token=" +
            token +
            "&Start=" +
            Start +
            "&End=" +
            End +
            "&Unit=" +
            Unit
        )
        .then(function(res) {
          var resD = res.data;
          if (resD.code == 0 && resD.data.length > 0) {
            _this.line = resD.data;
            _this.date_condition(_this.line);
            _this.lineName = [];
            for (var i = 0; i < res.data.data.length; i++) {
              _this.lineName.push(res.data.data[i].name);
            }
          }
        })
        .catch(function(error) {
          //sessionStorage.removeItem("token"); //清除失效的token
          _this.tourl(_this.platform);
        });
    },

    //各单位课程供给排行
    getCourseSupply(token) {
      var _this = this;
      // axios.get(_this.url + "api/Plat/course/rank?unit=0&access_token=" + token)
      axios
        .get(_this.url + "course_rank?unit=0&access_token=" + token)
        .then(function(response) {
          var resD = response.data;
          if (resD.code == 0 && resD.data.length > 0) {
            _this.courseSupply = response.data.data;
          }
        })
        .catch(function(error) {
          //sessionStorage.removeItem("token"); //清除失效的token
          // _this.tourl(_this.platform);
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
            name: "外围刻度", //其实这里只是为了加一层炫光,啥用没有
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
            radius: "90%",
            center: ["45%", "55%"],
            axisLine: {
              show: true,
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
                color: "#153146",
                width: 0.5
              }
            },
            axisLabel: {
              show: false,
              color: "#cbfff6",
              fontSize: 11,
              shadowBlur: 10
            },
            detail: {
              show: false
            },
            itemStyle: {
              normal: {
                color: "#fff"
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
            radius: "43%",
            center: ["45%", "55%"],
            startAngle: 359.9999999999999,
            endAngle: 0,
            axisLine: {
              show: false,
              lineStyle: {
                opacity: 0
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
                color: "rgba(255,255,255,0.3)",
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
                    color: "rgba(255,255,255,0.5)",
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
      var arr = [];
      _this.openClassName = [];
      for (var i = 0; i < num.length; i++) {
        arr.push({
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
          elements: [
            {
              type: "image",
              style: {
                image: _this.PlatDetail,
                width: 50,
                height: 50
              },
              left: "center",
              top: "center"
            }
          ]
        },
        series: [
          {
            type: "pie",
            radius: ["70%", "30%"],
            center: ["50%", "50%"],
            data: arr,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              normal: {
                color: function(params) {
                  return _this.bigColor[params.dataIndex];
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
      var openNumArr = [];
      var heteExtentArr = [];
      for (var i = 0; i < num.length; i++) {
        //各类课程开设数量
        openNumArr.push(num[i].count);
        heteExtentArr.push({ value: num[i].count, title: num[i].title });
        // _this.openClassName.push(num[i].title);
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
          data: openNumArr,
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
                  return _this.bigColor[params.dataIndex];
                }
              },
              emphasis: {
                opacity: 1
              }
            },
            data: heteExtentArr
          }
        ]
      };
      window.onresize = myChart.resize;
      myChart.setOption(option);
    },
    //课程开展分时情况表格
    date_condition(num) {
      var _this = this;
      var arrSeries = [];
      var startArr = [];
      for (var a = 0; a < num[0].datas.length; a++) {
        startArr.push(num[0].datas[a].start + "~" + num[0].datas[a].end);
      }
      var allList = [];
      for (var i = 0; i < num.length; i++) {
        var list = [];
        for (var j = 0; j < num[i].datas.length; j++) {
          list.push(num[i].datas[j].count);
        }
        allList.push(list);
      }
      for (var aa = 0; aa < allList.length; aa++) {
        arrSeries.push({
          type: "line",
          symbol: "circle",
          showSymbol: false,
          symbolSize: 3,
          itemStyle: {
            normal: {
              // color: "rgba(0,227,231,.8)",
              color: _this.bigColor[aa],
              lineStyle: {
                // color: "rgba(0,227,231,.5)",
                color: _this.bigColor[aa],
                width: 1
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    // color: "rgba(0,227,231,.1)"
                    color: _this.bigColor[aa]
                  },
                  {
                    offset: 1,
                    // color: "rgba(0,227,231,0.9)"
                    color: _this.bigColor[aa]
                  }
                ])
              }
            }
          },
          data: allList[aa]
        });
      }
      let myChart = echarts.init(document.getElementById("date_condition"));
      let option = {
        grid: {
          left: "5%",
          right: "10%",
          top: "0%",
          bottom: "0%",
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
            // data: [
            //   "3/4~3/10",
            //   "3/11~3/17",
            //   "3/4~3/10",
            //   "3/10~3/17",
            //   "3/10~3/17",
            //   "3/10~3/17",
            //   "3/10~3/17",
            //   "3/10~3/17",
            //   "3/10~3/17",
            //   "3/10~3/17",
            //   "3/10~3/17",
            //   "3/10~3/17"
            // ]
            data: startArr
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
        series: arrSeries
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
<style>
.data-picker input {
  background-color: #213c50 !important;
  color: #c4cbd1;
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
option {
  color: #000;
}
/* 运算 */
.fx-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.12rem;
  margin-right: 0.2rem;
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
  cursor: pointer;
}

.box-content {
  margin-left: 0.4rem;
  margin-right: 0.2rem;
  margin-top: 0.4rem;
}

.box-content-top {
  display: flex;
  position: relative;
}
.box-content-top::before {
  position: absolute;
  /* left: 10%; */
  top: -20px;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
  content: "";
  /* transform: scaleY(0.2); */
}
.box-item {
  width: 9rem;
  height: 4rem;
  background: rgba(255, 255, 255, 5%);
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  justify-content: space-between;
}
#classSituation,
#timeSituation {
  margin-right: 0rem;
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
  height: 2.3rem;
  float: left;
  margin-left: 20%;
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
  padding-bottom: 5px;
}
.fx-box4::-webkit-scrollbar {
  display: none; /*隐藏滚动条*/
}
.fxbox4-contant {
  height: 80%;
  padding: 0 10px;
  margin-top: 10px;
  overflow: auto;
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
  margin-top: 0.3rem;
}
.classNumCircle {
  width: 40%;
  height: 2.5rem;
}
.classNum {
  width: 60%;
  height: 2.5rem;
}
#date_condition {
  width: 100% !important;
  height: 2.32rem !important;
  margin-top: 0.3rem;
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
  justify-content: space-between;
  /* justify-content:  */
  margin: 0 auto;
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-top: -0.23rem;
  border-top: 0.02rem #08263c solid;
}
.echarts-legend-box2 {
  justify-content: space-between;
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
.echarts-legend-box .echarts-legend-item:nth-child(7) .echarts-legend-item-bar {
  background-color: #52f397;
}
.echarts-legend-box .echarts-legend-item:nth-child(8) .echarts-legend-item-bar {
  background-color: #00e3e7;
}
.echarts-legend-box .echarts-legend-item:nth-child(9) .echarts-legend-item-bar {
  background-color: #00c5ff;
}
.echarts-legend-box
  .echarts-legend-item:nth-child(10)
  .echarts-legend-item-bar {
  background-color: #478cef;
}
.echarts-legend-box
  .echarts-legend-item:nth-child(11)
  .echarts-legend-item-bar {
  background-color: #a243da;
}
.echarts-legend-box
  .echarts-legend-item:nth-child(12)
  .echarts-legend-item-bar {
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
  width: 60%;
  font-size: 0.14rem;
}
.box-item-title-right {
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.box-item-title-right span {
  opacity: 0.5;
  font-size: 0.14rem;
}
select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
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
  font-size: 0.14rem;
  background: url("../assets/xialakuang.png") no-repeat scroll right center;
  background-size: 7%;
  /* margin-left: 0.3rem; */
  margin-right: 0.1rem;
}
option {
  width: 20px;
}
.evaluatePart-box {
  width: 2.5rem;
  height: 0.23rem;
  line-height: 0.23rem;
  background: rgba(255, 255, 255, 8%);
  float: left;
  /* margin-right: 0.3rem; */
  margin-left: 15%;
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
  margin-top: 0.3rem;
  height: 75%;
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
::-webkit-scrollbar {
  /*滚动条整体样式*/

  width: 14px; /*高宽分别对应横竖滚动条的尺寸*/

  height: 14px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/

  border-radius: 5px;

  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

  background: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-track {
  /*滚动条里面轨道*/

  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

  border-radius: 0;

  background: rgba(0, 0, 0, 0.1);
}
</style>