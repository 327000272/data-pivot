<template>
  <div>
    <div class="fx-con">
      <div class="fx-title">第二课堂参与情况分析</div>
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
              <select @change="change($event)">
                <option>全部</option>
                <option v-for="item in haha" :key="item.index" :value="item.id">{{item.name}}</option>
              </select>
            </div>
          </div>
          <div class="liveness">
            <div class="liveness-top">
              <div class="iconfont iconjihuo"></div>
              <div>
                <p style="opacity:50%;">学生用户激活总数</p>
                <div>{{studentCount}}名学生</div>
              </div>
              <div>
                <p style="opacity:50%;">教师用户激活总数</p>
                <div>{{teacherCount}}名教职工</div>
              </div>
              <div>
                <p style="opacity:50%;">{{unitJoinTitle}}</p>
                <div>{{unitJoinCountData}}{{unitJoinCountUnit}}</div>
              </div>
              <div>
                <p style="opacity:50%;">{{teacherPersonTitle}}</p>
                <div>{{teacherPersonDate}}{{teacherPersonUnit}}</div>
              </div>
            </div>
            <div class="liveness-middle">
              <div class="iconfont iconrenshu"></div>
              <div>
                <p style="opacity:50%;">{{stuPersonTimeTitle}}</p>
                <div>{{stuPersonTimeData}}{{stuPersonTimeUnit}}</div>
              </div>
              <div>
                <p style="opacity:50%;">{{stuPersonNumTitle}}</p>
                <div>{{stuPersonNumData}}{{stuPersonNumUnit}}</div>
              </div>
              <div>
                <p style="opacity:50%;">{{peopleJoinTitle}}</p>
                <div>{{peopleJoinCountData}}{{peopleJoinCountUnit}}</div>
              </div>
            </div>
            <div class="liveness-bottom">
              <div class="iconfont iconhuo"></div>
              <div>
                <p style="opacity:50%;">{{dayActiveCountTitle}}</p>
                <div>{{dayActiveCountData}}{{dayActiveCountUnit}}</div>
              </div>
              <div>
                <p style="opacity:50%;">{{monthActiveCountTitle}}</p>
                <div>{{monthActiveCountData}}{{monthActiveCountUnit}}</div>
              </div>
              <div>
                <p style="opacity:50%;">{{loginCountTitle}}</p>
                <div>{{loginCountData}}{{loginCountUnit}}</div>
              </div>
              <div>
                <p style="opacity:50%;">{{onLineTitle}}</p>
                <div>{{onLineCountData}}{{onLineCountUnit}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-content-bottom">
        <div class="box-item" id="personStatistics">
          <div class="box-item-title">
            <div class="box-item-title-left">
              <div class="title-bar"></div>
              <p>各学院学生参与人次统计</p>
            </div>
          </div>
          <div class="collegePerson" id="collegePerson"></div>
          <!-- 左右箭头 -->
          <div class="youjiantou iconfont iconlujing1" v-if="youShow"></div>
          <div class="zuojiantou iconfont iconlujing" v-if="zuoShow"></div>
        </div>
        <div class="box-item" id="timeSituation">
          <div class="box-item-title">
            <div class="box-item-title-left">
              <div class="title-bar"></div>
              <p>课程参与积极性指标</p>
            </div>
            <div class="box-item-title-right">
              <span>学院范围</span>
              <select @change="change2($event)">
                <option>全部</option>
                <option v-for="item in haha" :key="item.index" :value="item.id">{{item.name}}</option>
              </select>
            </div>
          </div>
          <div class="box-item-pic">
            <!-- 水球图-->
            <div class="circlePic" id="circlePic">
              <!-- <p class="classReferenceRatio">到场与课程供给比例</p> -->
            </div>
            <!-- 漏斗图 -->
            <div class="funnel" id="funnel"></div>
          </div>
          <p class="funnel-annotation">注：课程参供比，揭示课程对于学生的受欢迎程度。是 实际到场签到的人数 / 课程拟容纳的学生数 计算。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import "../../static/js/h-liquid.js";
import axios from "axios";
export default {
  name: "participation",
  data() {
    return {
      // url: "https://class-ms-test.univteam.com/",
      url: "https://classroom.univteam.com/",
      back_url: "http://class-admin.univteam.com/",
      value1: [new Date(2019, 10, 29), new Date(2019, 11, 29)], //日期
      youShow: true,
      zuoShow: false,
      supplyComprehensive: [],
      openRatio: [],
      openPeopleTxt: [],
      openPeopleDate: [],
      perpleStatisticsTitle: [],
      perpleStatisticsNumber: [],
      UnitsName: [],
      UnitPersonCount: [],
      UnitPersonCount: [],
      //第二课堂整体参与度于信息系统活跃
      loginCountTitle: "",
      loginCountData: "",
      loginCountUnit: "",
      dayActiveCountTitle: "",
      dayActiveCountData: "",
      dayActiveCountUnit: "",
      monthActiveCountTitle: "",
      monthActiveCountData: "",
      monthActiveCountUnit: "",
      onLineTitle: "",
      onLineCountData: "",
      onLineCountUnit: "",
      peopleJoinTitle: "",
      peopleJoinCountData: "",
      peopleJoinCountUnit: "",
      unitJoinTitle: "",
      unitJoinCountData: "",
      unitJoinCountUnit: "",
      stuPersonTimeTitle: "",
      stuPersonTimeData: "",
      stuPersonTimeUnit: "",
      stuPersonNumTitle: "",
      stuPersonNumData: "",
      stuPersonNumUnit: "",
      teacherPersonTitle: "",
      teacherPersonDate: "",
      teacherPersonUnit: "",
      teacherCount: "",
      studentCount: "",
      Token: "",
      sessionToken: "",
      platform: "",
      funnelData: "",
      look: [],
      Apply: [],
      sign: [],
      affirm: [],
      funnelTitle: [],
      funneldataOther: [],
      funneltherUnit: [],
      classNeedTitle: [],
      classNeedData: [],
      classNeedUnit: [],
      unitsId: [],
      classNeedCalcData: "",
      maxV: "",
      ida: 0,
      ida2: 0,
      haha: [],
      maxArr: [],
      maxArr2: [],
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
  mounted() {
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
    //首先判断浏览器缓存中有没有token,如果有token,把token带入函数并执行
    whetherToken() {
      var _this = this;
      _this.platform = this.$route.params.id;
      switch (_this.platform) {
        case "whu":
          _this.url = "http://app.dekt.whu.edu.cn/whu/";
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
        //不为null,本地已经存在token,调用方法
        var Start =
          this.DateTimes(this.value1[0]) != ""
            ? this.DateTimes(this.value1[0])
            : "";
        var End =
          this.DateTimes(this.value1[1]) != ""
            ? this.DateTimes(this.value1[1])
            : "";
        _this.schoolscope(_this.sessionToken);
        _this.getactivation(_this.sessionToken, Start, End, _this.ida);
        _this.getCulumPersonCount(_this.sessionToken);
        _this.GetUnitPersonCount(_this.sessionToken);
        _this.getInitiative(_this.sessionToken, Start, End, _this.ida2);
      } else {
        //判断路径上有无参数,
        //_this.postToken();
        setTimeout(function() {
          _this.whetherToken();
        }, 1000);
      }
    },
    // tourl(){
    //   var _this=this;
    //  window.location.href=_this.back_url+_this.platform+"/account/login?back=statistics";
    // },
    //点击指示器,重新计算
    pointer() {
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
      _this.getactivation(_this.sessionToken, Start, End, _this.ida);
      _this.getCulumPersonCount(_this.sessionToken);
      _this.GetUnitPersonCount(_this.sessionToken);
      _this.getInitiative(_this.sessionToken, Start, End, _this.ida2);
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
    //学院范围
    schoolscope(token) {
      var _this = this;
      axios
        .get(_this.url + "options/?access_token=" + token)
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
          //  sessionStorage.removeItem("token");//清除失效的token
          // window.location.href=" http://class-admin.univteam.com/"+_this.platform+"/account/login?back=statistics";
        });
    },
    //第二课堂整体参与度于信息系统活跃
    getactivation(token, Start, End, Unit) {
      var _this = this;
      axios
        .get(
          _this.url +
            "activation?access_token=" +
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
          if (resD.code == 0) {
            _this.teacherCount = response.data.data.activation.teacher_count;
            _this.studentCount = response.data.data.activation.student_count;
            for (var i = 0; i < response.data.data.summary.length; i++) {
              //登录次数
              if (response.data.data.summary[i].type == 1) {
                _this.loginCountTitle = response.data.data.summary[i].title;
                _this.loginCountData = response.data.data.summary[i].data;
                _this.loginCountUnit = response.data.data.summary[i].unit;
              }

              //平均日活
              if (response.data.data.summary[i].type == 3) {
                _this.dayActiveCountTitle = response.data.data.summary[i].title;
                _this.dayActiveCountData = response.data.data.summary[i].data;
                _this.dayActiveCountUnit = response.data.data.summary[i].unit;
              }
              //月活跃度
              if (response.data.data.summary[i].type == 4) {
                _this.monthActiveCountTitle =
                  response.data.data.summary[i].title;
                _this.monthActiveCountData = response.data.data.summary[i].data;
                _this.monthActiveCountUnit = response.data.data.summary[i].unit;
              }
              //人均在线
              if (response.data.data.summary[i].type == 2) {
                _this.onLineTitle = response.data.data.summary[i].title;
                _this.onLineCountData = response.data.data.summary[i].data;
                _this.onLineCountUnit = response.data.data.summary[i].unit;
              }
              //人均参与次数
              if (response.data.data.summary[i].type == 11) {
                _this.peopleJoinTitle = response.data.data.summary[i].title;
                _this.peopleJoinCountData = response.data.data.summary[i].data;
                _this.peopleJoinCountUnit = response.data.data.summary[i].unit;
              }
              //单位参与数量
              if (response.data.data.summary[i].type == 14) {
                _this.unitJoinTitle = response.data.data.summary[i].title;
                _this.unitJoinCountData = response.data.data.summary[i].data;
                _this.unitJoinCountUnit = response.data.data.summary[i].unit;
              }
              //学生参与总人次
              if (response.data.data.summary[i].type == 33) {
                _this.stuPersonTimeTitle = response.data.data.summary[i].title;
                _this.stuPersonTimeData = response.data.data.summary[i].data;
                _this.stuPersonTimeUnit = response.data.data.summary[i].unit;
              }
              //学生参与总人数
              if (response.data.data.summary[i].type == 22) {
                _this.stuPersonNumTitle = response.data.data.summary[i].title;
                _this.stuPersonNumData = response.data.data.summary[i].data;
                _this.stuPersonNumUnit = response.data.data.summary[i].unit;
              }
              //教职工参与人数
              if (response.data.data.summary[i].type == 39) {
                _this.teacherPersonTitle = response.data.data.summary[i].title;
                _this.teacherPersonDate = response.data.data.summary[i].data;
                _this.teacherPersonUnit = response.data.data.summary[i].unit;
              }
            }
          }
        })
        .catch(function(error) {
          // sessionStorage.removeItem("token");//清除失效的token
          // window.location.href=" http://class-admin.univteam.com/"+_this.platform+"/account/login?back=statistics";
        });
    },
    //请求各类课程参与人次
    getCulumPersonCount(token) {
      var _this = this;
      axios
        .get(_this.url + "culumCount?access_token=" + token)
        .then(function(response) {
          var resD = response.data;
          if (resD.code == 0 && resD.data.length > 0) {
            _this.supplyComprehensive = [];
            _this.supplyComprehensive = response.data.data;
            _this.classPersonCake(_this.supplyComprehensive);
            _this.switchSlide(_this.supplyComprehensive);
          }
        })
        .catch(function(error) {
          // sessionStorage.removeItem("token");//清除失效的token
          // window.location.href=" http://class-admin.univteam.com/"+_this.platform+"/account/login?back=statistics";
        });
    },
    //请求各学院学生参与人次统计
    GetUnitPersonCount(token) {
      var _this = this;
      axios
        .get(_this.url + "unitCount/?access_token=" + token)
        .then(function(response) {
          var resD = response.data;
          var arr=[];
          var arr2=[];
          if (resD.code == 0 && resD.data.length > 0) {
            _this.UnitPersonCount = response.data;
            for (var i = 0; i <  response.data.data.length; i++) {
              arr.push( response.data.data[i].name);
              arr2.push( response.data.data[i].count);
            }
            _this.collegePerson(arr,arr2);
          }
        })
        .catch(function(error) {
          // sessionStorage.removeItem("token");//清除失效的token
          // window.location.href=" http://class-admin.univteam.com/"+_this.platform+"/account/login?back=statistics";
        });
    },
    //课程参与积极性指标
    getInitiative(token, Start, End, Unit) {
      var _this = this;
      axios
        .get(
          _this.url +
            "join_Initiative?access_token=" +
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
            _this.funnelData = response.data.data;
            _this.funnel(_this.funnelData);
            _this.watchBall(_this.funnelData);
          }
        })
        .catch(function(error) {
          //  sessionStorage.removeItem("token");//清除失效的token
          //  window.location.href=" http://class-admin.univteam.com/"+_this.platform+"/account/login?back=statistics";
        });
    },
    //饼状图
    classPersonCake(num) {
      var _this = this;
       var arr=[];
      for (var i = 0; i < num.length; i++) {
        Number(num[i].percent.split("%")[0]);
       arr.push({
          value: Number(num[i].percent.split("%")[0]),
          name: num[i].percent,
          title: num[i].name
        });
      }
      let myChart = echarts.init(document.getElementById("classPersonCake"));
      let option = {
        title: {
          text: "各类课程参与学生数比例",
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
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: "各类占比",
            fill: "#fff",
            textAlign: "middle",
            textVerticalAlign: "middle",
            fontSize: "0.14rem"
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
                borderWidth: 1,
                borderColor: "#08263c"
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
    switchSlide(num) {
      var _this = this;
      var openTextArr=[];
      var openDateArr=[];
      for (var i = 0; i < num.length; i++) {
        openTextArr.push(num[i].name);
        openDateArr.push(num[i].count);
      }
      _this.maxV =
        Math.max.apply(null, openDateArr) != 0
          ? Math.max.apply(null, openDateArr)
          : 100;
      var maxARR=[];
      var maxARR2=[];
      for (var j = 0; j < num.length; j++) {
         maxARR.push(_this.maxV);
         maxARR2.push(_this.maxV - 0.5);
      }
      let myChart = echarts.init(document.getElementById("switchSlide"));
      let myColor = [
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
        ],
        option = {
          title: {
            text: "各类课程参与学生数比例",
            x: "center",
            y: "bottom",
            textStyle: {
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.14rem"
            }
          },
          grid: {
            left: "11%",
            top: "12%",
            right: "10%",
            bottom: "8%",
            containLabel: true
          },
          xAxis: [
            {
              show: false
            }
          ],
          yAxis: [
            {
              axisTick: "none",
              axisLine: "none",
              offset: "17",
              axisLabel: {
                textStyle: {
                  color: "#ffffff",
                  fontSize: "10"
                }
              },
              data: openTextArr
            },
            {
              axisTick: "none",
              axisLine: "none",
              axisLabel: {
                textStyle: {
                  color: "#ffffff",
                  fontSize: "16"
                }
              },
              data: []
            },
            {
              name: "分拨延误TOP 10",
              nameGap: "50",
              nameTextStyle: {
                color: "#ffffff",
                fontSize: "16"
              },
              axisLine: {
                lineStyle: {
                  color: "rgba(0,0,0,0)"
                }
              },
              data: []
            }
          ],

          series: [
            {
              name: "条",
              type: "bar",
              yAxisIndex: 0,
              data: openDateArr,
              label: {
                normal: {
                  show: true,
                  position: "right",
                  textStyle: {
                    color: "#ffffff",
                    fontSize: "12"
                  }
                }
              },
              barWidth: 10,
              itemStyle: {
                normal: {
                  color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num];
                  }
                }
              },
              z: 2
            },

            {
              name: "白框",
              type: "bar",
              yAxisIndex: 1,
              barGap: "-100%",
              // data: [20.11, 10, 20, 30, 100, 100, 100, 100, 100],
              data: maxARR2,
              barWidth: 10,
              itemStyle: {
                normal: {
                  color: "#0e2147",
                  barBorderRadius: 5
                }
              },
              z: 1
            },
            {
              name: "外框",
              type: "bar",
              yAxisIndex: 2,
              barGap: "-100%",
              // data: [
              //   100,
              //   100,
              //   100,
              //   100,
              //   100,
              //   100,
              //   100,
              //   100,
              //   100
              // ],
              data: maxARR,
              barWidth: 12,
              itemStyle: {
                normal: {
                  color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num];
                  },
                  barBorderRadius: 5
                }
              },
              z: 0
            },
            {
              name: "外圆",
              type: "scatter",
              hoverAnimation: false,
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
              yAxisIndex: 2,
              symbolSize: 20,
              itemStyle: {
                normal: {
                  color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num];
                  },
                  opacity: 1
                }
              },
              z: 2
            }
          ]
        };
      window.onresize = myChart.resize;
      myChart.setOption(option);
    },
    //柱状图
    collegePerson(perpleStatisticsTitle,perpleStatisticsNumber) {
      var _this = this;
      var arr=[];
      let myChart = echarts.init(document.getElementById("collegePerson"));
      var dataAxis = perpleStatisticsTitle;
      var data =perpleStatisticsNumber;
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
          top: "20",
          bottom: "auto",
          left: "auto",
          right: "auto",
          height: "auto",
          width: "auto",
          containLabel: true,
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
              textStyle: { fontSize: 10, color: "rgba(255,255,255,0.5)" },
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
      window.onresize = myChart.resize();
      myChart.setOption(option);
    },
    //水球图
    watchBall(num) {
      var _this = this;
      for (var i = 0; i < num.length; i++) {
        if (num[i].type == 34) {
          _this.classNeedTitle = num[i].title;
          _this.classNeedData = num[i].data;
          _this.classNeedUnit = num[i].unit;
          _this.classNeedCalcData = num[i].data / 100;
        }
      }

      let myChart = echarts.init(document.getElementById("circlePic"));
      let option = {
        title: {
          text: "到场与课程供给比例",
          x: "center",
          y: "bottom",
          textStyle: {
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.14rem"
          }
        },
        graphic: [
          {
            type: "group",
            left: "center",
            top: "60%",
            children: [
              {
                type: "text",
                z: 100,
                left: "10",
                top: "middle",
                style: {
                  fill: "#fff",
                  text: _this.classNeedTitle,
                  font: "20px Microsoft YaHei"
                }
              }
            ]
          }
        ],
        series: [
          {
            type: "liquidFill",
            name: "50",
            data: [
              {
                name: _this.classNeedData + _this.classNeedUnit,
                value: _this.classNeedCalcData
              }
            ],
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 1,
                  color: ["rgba(0,197,255,27%)"] // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: ["rgba(162,67,218,76%)"]
                },
                {
                  offset: 0,
                  color: ["rgb(215,47,167)"] // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            },
            radius: "80%",
            center: ["50%", "50%"],
            label: {
              formatter: "{b}",
              fontSize: 28,
              color: "rgb(131,249,103)"
            },
            backgroundStyle: {
              borderWidth: 1,
              borderColor: "rgba(0,197,255, 100%)"
              // color: ["rgba(255,255,255, 0)"]
            },
            itemStyle: {
              shadowBlur: 0
            },
            emphasis: {
              itemStyle: {
                opacity: 0.7
              }
            },
            outline: {
              borderDistance: 5,
              itemStyle: {
                borderWidth: 3,
                borderColor: "rgb(39,84,125)",
                shadowBlur: 10,
                shadowColor: "rgb(0,181,248)"
              }
            }
          }
        ]
      };
      window.onresize = myChart.resize();
      myChart.setOption(option);
    },
    //漏斗图
    funnel(num) {
      var _this = this;
      for (var i = 0; i < num.length; i++) {
        //查看
        if (num[i].type == 35) {
          _this.look = num[i];
        }
        //报名
        if (num[i].type == 36) {
          _this.Apply = num[i];
        }
        //签到
        if (num[i].type == 37) {
          _this.sign = num[i];
        }
        //认定
        if (num[i].type == 38) {
          _this.affirm = num[i];
        }
      }
      //拼数组
      for (var j = 1; j < num.length; j++) {
        _this.funnelTitle.push(num[j].title);
        _this.funneldataOther.push(num[j].dataOther);
        _this.funneltherUnit.push(num[j].therUnit);
      }
      let myChart = echarts.init(document.getElementById("funnel"));
      let option = {
        color: _this.bigColor,
        title: {
          text: "参与漏斗图",
          x: "center",
          y: "bottom",
          textStyle: {
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.14rem"
          }
        },
        tooltip: {
          trigger: "item",
          // formatter: "查看 : 1.58万次"
          formatter: function(params) {
            return (
              _this.funnelTitle[params.dataIndex] +
              ":" +
              _this.funneldataOther[params.dataIndex] +
              _this.funneltherUnit[params.dataIndex]
            );
          }
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
              normal: {
                show: true,
                position: "inside"
              },
              emphasis: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            labelLine: {
              normal: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: "solid"
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: "#fff",
                borderWidth: 1
              }
            },
            data: [
              {
                value: _this.look.data,
                name: _this.look.data + _this.look.unit
              },
              {
                value: _this.Apply.data,
                name: _this.Apply.data + _this.Apply.unit
              },
              {
                value: _this.sign.data,
                name: _this.sign.data + _this.sign.unit
              },
              {
                value: _this.affirm.data,
                name: _this.affirm.data + _this.affirm.unit
              }
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
  left: 28%;
}
option {
  color: #000;
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
}
.box-content-top {
  display: flex;
}
.box-content-bottom {
  display: flex;
}
.box-item {
  width: 9rem;
  height: 4rem;
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
.box-item-pic {
  display: flex;
  justify-content: space-between;
  margin-top: 0.3rem;
}
.classPersonCake {
  /* width: 2.5rem; */
  width: 40%;
  height: 2.5rem;
}
.switchSlide {
  /* width: 4.5rem; */
  width: 60%;
  height: 2.5rem;
}

.funnel {
  /* width: 2.5rem; */
  width: 50%;
  height: 2.5rem;
}
.circlePic {
  /* width: 2.5rem; */
  width: 50%;
  height: 2.5rem;
}
.liveness {
  font-size: 0.1rem;
  margin: 0 auto;
  width: 80%;
  margin-top: 0.5rem;
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
  /* width: 2rem; */
  height: 0.68rem;
}
.liveness-top > div:nth-child(3) {
  width: 1.3rem;
  /* width: 2rem; */
  height: 0.68rem;
}
.liveness-top > div:nth-child(4) {
  width: 1.3rem;
  /* width: 2rem; */
  height: 0.68rem;
}
.liveness-top > div:nth-child(5) {
  width: 1.3rem;
  /* width: 2rem; */
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
  /* width: 5rem; */
  width: 100%;
  height: 2.5rem;
  margin-top: 0.3rem;
}
.funnel-annotation {
  font-size: 0.12rem;
  text-align: center;
  color: #fff;
  opacity: 0.5;
  margin-top: 0.2rem;
}
.classReferenceRatio {
  font-size: 0.14rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
}
.youjiantou {
  position: absolute;
  top: 1.5rem;
  right: 0.05rem;
  font-size: 0.22rem;
}
.zuojiantou {
  position: absolute;
  top: 1.5rem;
  left: 0.1rem;
  font-size: 0.22rem;
}
.iconlujing,
.iconlujing1 {
  opacity: 0.2;
  font-size: 0.26rem;
}
#personStatistics {
  position: relative;
}
</style>