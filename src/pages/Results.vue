<template>
  <div class="fx-box">
    <div class="fx-con">
      <div class="fx-title">第二课堂育人成效分析</div>
      <div class="fx-content">
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
        <div class="fx-scope">
          <span>学院范围</span>
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in optionsTwo"
              :key="item.value"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        <div class="fx-scope">
          <span>年级范围</span>
          <el-select v-model="value3" placeholder="请选择">
            <el-option
              v-for="item in optionsOne"
              :key="item.value"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        <div class="fx-btn">运算</div>
      </div>
    </div>
    <div class="fx-hr"></div>
    <div class="fx-echarts">
      <div class="fxbox5-txt">
        在0个维度上，总共为学生提升能力
        <span class="improvement">0</span>点,人均提升
        <span class="Promote">0</span>点
      </div>
      <div></div>
      <div id="chart_example" style="height: 100%;width:100%"></div>
    </div>
    <div class="fx-table">
      <div
        v-if="!array.length&&!good_comment_rate.length&&!supply_join_rate.length"
        class="co-availability"
      >没有课程记录，无法展示</div>
      <table>
        <tr>
          <td>
            <div>课程供给</div>
            <div>
              <span class="iconfont iconketang"></span>
              <span class="kaike">开课</span>
              <span class="iconfont iconrengong"></span>
              <span class="renci">人次</span>
            </div>
          </td>
          <!-- <td v-for="item in array" :key="item.id">
                            <div>
                                <span class="iconfont icon-ketang"></span>&nbsp;&nbsp;&nbsp;<span>{{item.number}}</span>
                            </div>
                            <div>
                                <span class="iconfont icon-rengong-copy"></span>&nbsp;<span>{{item.num}}</span>
                            </div>
          </td>-->
          <td v-for="(item, index) in summary" :key="index">
            <div class="top-box">
              <span class="iconfont iconketang dianshi"></span>&nbsp;&nbsp;&nbsp;
              <span class="dianshi-number">{{item.course_count}}</span>
            </div>
            <div class="bottom-box">
              <span class="iconfont iconrengong yonghu1"></span>&nbsp;
              <span class="yonghu-number">{{item.join_count}}</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            课程
            <p>满意度</p>
          </td>
          <!-- <td v-for="item in good_comment_rate" :key="item.id" >{{item}}</td> -->
          <td
            v-for="(item, index) in summary"
            :key="index"
          >{{parseFloat(item.good_comment_rate).toFixed(2) + "%"}}</td>
        </tr>
        <tr>
          <td>
            课程
            <p>供参比</p>
          </td>
          <!-- <td v-for="item in supply_join_rate" :key="item.id">{{item}}</td> -->
          <td
            v-for="(item, index) in summary"
            :key="index"
          >{{parseFloat(item.supply_join_rate).toFixed(2) + "%"}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import axios from "axios";
export default {
  data() {
    return {
      token: "",
      value1: "", //日期
      value2: "",
      value3: "",
      optionsOne:'',
      optionsTwo:'',
      // 学生能力增长情况
      studentsAbilityTitles: [],
      studentsAbilityData1: [],
      studentsAbilityData2: [],
      course_count: [],
      join_count: [],
      good_comment_rate: [],
      supply_join_rate: [],
      array: [],
      // url:'http://api.statistics.univteam.ms',
      url: "https://class-ms-test.univteam.com",
      summary: []
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
    this.$forceUpdate();
    this.getToken();
    this.$forceUpdate();
    this.getEcharts();
  },
  methods: {
    fetchData() {
      console.log("路由发送变化doing...");
    },
    getToken() {
      var _this = this;
      var url22 = this.$route.params.id;
      var Pageurl = window.location.href;
      var hash = window.location.hash;
      var list = hash.split("/");
      var url = list[1];
      var dataToken = "";
      var dataUrl = window.location.href;
      var tokenStr = sessionStorage.getItem("token");
      if (tokenStr !== null) {
        _this.token = tokenStr;
        var token = tokenStr;
        var Start = "";
        var End = "";
        var Unit = 0;
        var Grade = 0;
        _this.getAblitycourse(token, Start, End, Unit, Grade);
        return false;
      }
      if (dataToken == "") {
        // window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
      } else {
        axios
          .post(
            _this.url +
              "/api/Authorize/token?url=" +
              url22 +
              "&token=" +
              dataToken
          )
          .then(function(response) {
            _this.token = response.data.data.access_token;
            var token = _this.token;
            var cuncu = sessionStorage.setItem("token", token);
            var Start = "";
            var End = "";
            var Unit = 0;
            var Grade = 0;
            _this.getAblitycourse(token, Start, End, Unit, Grade);
          })
          .catch(function(error) {
            // window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
            console.log("数据加载失败");
          });
      }
    },
    // 获取echarts中的数据接口
    getStudentsAbility(token, Start, End, Unit, Grade) {
      var _this = this;
      axios
        .get(
          _this.url +
            "/api/Plat/user/ability?access_token=" +
            token +
            "&Start=" +
            Start +
            "&End=" +
            End +
            "&Unit=" +
            Unit +
            "&Grade=" +
            Grade
        )
        .then(function(response) {
          if (response.data.code !== 0) {
            sessionStorage.removeItem("token"); //清除失效的token
            window.location.href =
              " http://class-admin.univteam.com/" +
              url22 +
              "/account/login?back=statistics";
          }
          _this.studentsAbilityTitles = response.data.data.titles;
          _this.studentsAbilityData1 = response.data.data.data1;
          _this.studentsAbilityData2 = response.data.data.data2;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 点击获取开课人次表格的接口
    getAblitycourse(token, Start, End, Unit, Grade) {
      var _this = this;
      axios
        .get(
          _this.url +
            "/api/Plat/ability/summary?access_token=" +
            token +
            "&Start=" +
            Start +
            "&End=" +
            End +
            "&Unit=" +
            Unit +
            "&Grade=" +
            Grade
        )
        .then(function(response) {
          if (response.data.code !== 0) {
            sessionStorage.removeItem("token"); //清除失效的token
            window.location.href =
              " http://class-admin.univteam.com/" +
              url22 +
              "/account/login?back=statistics";
          }
          for (var i = 0; i < response.data.data.length; i++) {
            _this.course_count = response.data.data[i].course_count;
            _this.join_count = response.data.data[i].join_count;
            _this.good_comment_rate = response.data.data[i].good_comment_rate;
            _this.supply_join_rate = response.data.data[i].supply_join_rate;
          }
          _this.summary = response.data.data;
          _this.getaddArr(_this.course_count, _this.join_count);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    // 把数组合并成一个对象
    getaddArr(arr1, arr2) {
      var array = [];
      for (var i = 0; i < arr1.length; i++) {
        var obj = {};
        for (var j = 0; j < arr2.length; j++) {
          if (i == j) {
            obj.number = arr1[i];
            obj.num = arr2[j];
            array.push(obj);
          }
        }
      }
      this.array = array;
    },
    //初始化学生能力增长情况的echarts
    getEcharts(studentsAbilityTitles,studentsAbilityData1,studentsAbilityData2) {
      var _this = this;
      studentsAbilityTitles = [
        '逻辑思维',
        '创新思维',
        '团队协作',
        '领导能力',
        '知识运用',
        '归纳总结',
        '政治意识',
        '奉献精神',
        '责任意识',
        '知识运用',
        '归纳总结',
        '政治意识'
      ];
      studentsAbilityData1 = [
        1,
        3,
        3,
        4,
        5,
        3,
        1,
        2,
        3,
        1,
        2,
        3
      ];
      studentsAbilityData2 = [
        1,
        6,
        2,
        3,
        2,
        5,
        6,
        5,
        2,
        3,
        1,
        2
      ];
      var fontColor = "#30eee9";
      let myChart = echarts.init(document.getElementById("chart_example"));
      let option = {
        legend: {
          type: "scroll",
          right: "4%",
          top: "5%",
          textStyle: {
            color: "#8A98A3"
          },
          itemWidth: 14,
          itemHeight: 14,
          itemGap: 40,
          selected: {}
        },
        dataZoom: [
                {type: "inside",show: false,xAxisIndex: 0,zoomOnMouseWheel:false,startValue: 0,endValue: 7,zoomLock: true}, 
            ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          show: true,
          backgroundColor: "#163146",
          borderColor: "#5C6F7E",
          left: "70px",
          right: "50px"
        },
        xAxis: [
          {
            type: "category",
            data: studentsAbilityTitles,
            axisTick: {
              alignWithLabel: true
            },
            splitLine: {
              show: true,
              lineStyle: {
                // 使用深浅的间隔色
                color: ["#647784"]
              }
            },
            axisLabel: {
              formatter: function(params) {
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 2; // 每行能显示的字的个数
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
              },
              textStyle: {
                color: "#fff",
                fontSize: "15"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "V{value}",
              textStyle: {
                color: "#fff",
                fontSize: "13"
              }
            },
            // min:0,
            // max:9,
            splitNumber: 9,
            minInterval: 1
          }
        ],
        series: [
          {
            name: "期初平均能力点",
            type: "bar",
            barWidth: "60%",
            stack: "one",
            data: studentsAbilityData1
          },
          {
            name: "期末平均能力点",
            type: "bar",
            barWidth: "60%",
            stack: "one",
            data: studentsAbilityData2,
            label: {
              show: true,
              position: ["30%", "-15px"],
              formatter: "+{@+}"
            }
          }
        ],
        color: ["#909EA7", "#00C5FF"]
      };
      myChart.setOption(option);
      window.onresize = myChart.resize;
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
.fx-box {
  min-width: 1200px;
  min-height: 900px;
  height: 100%;
  box-sizing: border-box;
  padding: 0 2%;
  padding-top: 20px;
  font-size: 0.12rem;
}
.fx-con {
  display: flex;
  align-items: center;
}
.fx-title {
  font-size: 22px;
  color: white;
  width: 28%;
  min-width: 223px;
}
.fx-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.demonstration {
  color: #5b6f7e;
  background: #213c50;
  line-height: 40px;
  text-align: center;
  margin-right: 2px;
  min-width: 100px;
}
.block {
  height: 40px;
  display: flex;
  margin-right: 25px;
  width: 40%;
}
.data-picker {
  border-radius: 0;
  background: #213c50;
  border: none;
  color: #fff;
}
.fx-scope {
  display: flex;
  height: 40px;
  width: 22%;
  margin-right: 2%;
}
.fx-scope span {
  min-width: 100px;
  color: #5b6f7e;
  background: #213c50;
  line-height: 40px;
  text-align: center;
  margin-right: 2px;
}
.fx-scope input {
  border: none;
  color: white;
  padding-left: 10px;
  margin-right: 25px;
  background-color: #213c50;
}
.fx-btn {
  color: white;
  border: 1px white solid;
  height: 40px;
  min-width: 70px;
  box-sizing: border-box;
  line-height: 36px;
  text-align: center;
}
.fx-hr {
  height: 1px;
  width: 100%;
  background: #415869;
  margin-top: 20px;
}
.fx-echarts {
  width: 100%;
  height: 50%;
  position: relative;
}
.fxbox5-txt {
  position: absolute;
  top: 4%;
  color: #8a98a3;
}
.fxbox5-tit span:nth-child(1) {
  width: 5px;
  height: 16px;
  background: #ffffff;
}
.fxbox5-tit span:last-child {
  font-size: 16px;
  color: #fff;
  line-height: 16px;
  margin-left: 10px;
}
.fx-table {
  width: 95%;
  height: 30%;
  margin: 0 auto;
  color: #fff;
  position: relative;
}
.fx-table tr {
  margin-bottom: 1%;
}
.fx-table tr td:nth-child(1) {
  width: 10%;
  font-size: 18px;
  color: #fff;
}
table {
  width: 100%;
  height: 100%;
}
.fx-table td {
  text-align: center;
  height: 32.3%;
  background: #153146;
  color: #00c5ff;
}
.fx-tab {
  width: 95%;
  margin: 0px 48px;
  height: 4%;
  display: flex;
  align-items: center;
  position: relative;
  margin: 1% 0;
}
.fx-tab span {
  height: 100%;
  width: 8%;
  color: #8e8e93;
  background: rgba(256, 256, 256, 0.2);
  margin-right: 0.1%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(256, 256, 256, 0.2);
  cursor: pointer;
  font-size: 15px;
}

.kaike {
  color: #5b6f7e;
  font-size: 12px;
  margin-right: 30px;
}
.renci {
  color: #5b6f7e;
  font-size: 12px;
}
.iconketang {
  color: #5b6f7e;
}
.iconrengong {
  color: #5b6f7e;
}

.improvement {
  color: #fff;
  padding: 0px 12px;
  font-size: 28px;
}
.Promote {
  color: #fff;
  padding: 0px 12px;
  font-size: 28px;
}
.co-availability {
  text-align: center;
  line-height: 50px;
  background: #8a98a3;
  width: 230px;
  height: 50px;
  color: #fff;
  border-radius: 15px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.dianshi {
  float: left;
}
.dianshi-number {
  float: left;
}
.yonghu1 {
  float: left;
}
.yonghu-number {
  float: left;
}
.top-box{
  height: 20px;
}
.bottom-box{
  height: 20px;
}
</style>