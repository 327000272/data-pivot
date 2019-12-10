<template>
  <div class="fx-box" style="overflow:hidden">
    <div class="fx-con">
      <div class="fx-title">第二课堂育人成效分析</div>
      <div class="fx-content">
        <!-- 日期插件 -->
        <div class="block">
          <span class="demonstration">统计日期</span>
          <el-date-picker
            id="datacolor"
            v-model="value1"
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            class="data-picker"
          ></el-date-picker>
        </div>
        <!-- 日期插件 -->
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
        <div class="fx-btn" @click="clickNum">运算</div>
      </div>
    </div>
    <div class="fx-hr"></div>
    <div class="fx-grid-box fx-grid-box1">
      <div class="fx-box1">
        <div class="fxbox4-content">
          <div class="fxbox5-tit">
            <span></span>
            <span>各类课程供给情况</span>
          </div>
        </div>
        <div class="fxbox1-li1">
          <div
            class="fxbox1-li"
            v-for="item in supplySituation"
            :key="item.id"
            v-if="supplySituation!==''"
          >
            <span class="fxbox1-new-span" style="width:30%;text-align: center;">{{item.title}}</span>
            <div style="width:60%;height:100%;margin-right:15px;">
              <span class="fxbox1li-span" :style="{width:(item.percent*100+'%')}"></span>
            </div>
            <span style="width:10%;">{{item.count}}</span>
          </div>
          <p v-if="supplySituation==''" class="co-availability">没有课程记录，无法展示</p>
        </div>
      </div>
      <div class="fx-box2">
        <div class="fxbox4-content">
          <div class="fxbox5-tit">
            <span></span>
            <span>二课开展情况概览</span>
          </div>
        </div>
        <div class="fxbox2-contant">
          <div
            class="fxbox2contant-box"
            v-for="item in twoclassSituation"
            :key="item.id"
            v-if="twoclassSituation!==''"
          >
            <div class="fxbox2-circle">
              <div>{{item.data}}</div>
              <div>{{item.unit}}</div>
            </div>
            <div class="fxbox2-oblong">{{item.title}}</div>
          </div>
        </div>
      </div>
      <div class="fx-box3">
        <div class="fxbox4-content">
          <div class="fxbox5-tit">
            <span></span>
            <span>信息系统活跃度</span>
          </div>
        </div>
        <div class="fxbox3-contant">
          <div class="fxbox3-a">
            <div class="iconfont icon-renshu"></div>
            <div class="fxbox3-acontent" v-if="!informationActivation.length">
              <div>
                <span>{{informationActivation.student_count}}</span>名学生
                <span style="margin-left:10px">{{informationActivation.teacher_count}}</span>名教职工
              </div>
              <div>系统激活用户</div>
            </div>
            <div class="fxbox3-acontent" v-if="informationActivation.length=='undefined'">
              <div>
                <span>0</span>名学生
                <span style="margin-left:10px">0</span>名教职工
              </div>
              <div>系统激活用户</div>
            </div>
          </div>
          <div class="fxbox3-b" v-for="item in informationSummary" :key="item.id">
            <div class="fxbox3-icon" :data-type="item.type"></div>
            <div class="fxbox3-acontent">
              <!-- <div>{{item.data}}{{item.unit}}</div> -->
              <div>
                <strong>{{item.data}}</strong>
                <i>{{item.unit}}</i>
              </div>
              <div>{{item.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fx-grid-box" style="margin-top:15px;">
      <div class="fx-box4">
        <div class="fxbox4-content">
          <div class="fxbox5-tit">
            <span></span>
            <span>各单位课程供给排行</span>
          </div>
        </div>
        <div class="fxbox4-contant">
          <div
            class="fxbox4-li"
            v-for="item in courseSupply"
            :key="item.id"
            v-if="courseSupply!==''"
          >
            <div class="fxbox4-litit fxbox1-new-span">{{item.title}}</div>
            <div class="fxbox4-lidiv">
              <div class="fxbox4-div1">
                &nbsp;&nbsp;
                <span class="iconfont icon-ketang"></span>&nbsp;
                <span>{{item.supp_count}}</span>次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="iconfont icon-rengong-copy"></span>&nbsp;
                <span>{{item.supp_capacity}}</span>人次
              </div>
              <div class="fxbox4-div2" :style="{width:(item.percent_count*100+'%')}"></div>
              <div class="fxbox4-div3" :style="{width:(item.percent_capacity*100+'%')}"></div>
            </div>
          </div>
          <p v-if="courseSupply==''" class="co-availability">没有课程记录，无法展示</p>
        </div>
      </div>
      <div class="fx-box5">
        <div class="fxbox5-content">
          <div class="fxbox5-tit">
            <span></span>
            <span>学生能力增长情况</span>
          </div>
          <div class="fxbox5-contant">
            <div v-for="item in score" :key="item.id" v-if="score==''">
              {{item.title}}
              <span>{{item.data}}</span>
            </div>
          </div>
        </div>
        <p v-if="score==''" class="co-availability">没有能力点记录，无法展示</p>

        <div class="fxbox5-txt">
          在{{studentsAbilityCount}}个维度上，总共为学生提升能力
          <span>{{studentsAbilityTotal}}</span>点,人均提升
          <span>{{studentsAbilityAvg}}</span>点
        </div>
        <div id="chart_example" style="height: 80%;width:100%;min-width:500px;"></div>
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
      token: "",
      value1: "",
      value2: "",
      value3: "",
      dataToken: "",
      zhenToken: "",
      optionsOne: [],
      optionsTwo: [],
      url: "https://class-ms-test.univteam.com",
      // url:'http://api.statistics.univteam.ms',
      value2: "", //单选2
      value3: "", //单选3
      // 课程供给情况
      supplySituation: [],
      // 二课开展情况概览
      twoclassSituation: [
        {
          data: "0",
          unit: "次",
          title: "开设课程数"
        },
        {
          data: "0",
          unit: "%",
          title: "好评率"
        },
        {
          data: "0",
          unit: "万人次",
          title: "课程人次数量"
        },
        {
          data: "0",
          unit: "万分",
          title: "课程积分容量"
        },
        {
          data: "0",
          unit: "%",
          title: "参与供给比率"
        },
        {
          data: "0",
          unit: "万人次",
          title: "参与人次"
        },
        {
          data: "0",
          unit: "次",
          title: "人均参与次数"
        },
        {
          data: "0",
          unit: "人",
          title: "参与教师人数"
        },
        {
          data: "0",
          unit: "分钟/人",
          title: "教师日均在线"
        },
        {
          data: "0",
          unit: "个",
          title: "单位参与数量"
        }
      ],
      // 信息系统活跃度
      informationActivation: [],
      informationSummary: [
        {
          type: "1",
          data: "0",
          title: "登录次数",
          unit: "次/人"
        },
        {
          type: "2",
          data: "0",
          title: "人均在线",
          unit: "分钟/日"
        },
        {
          type: "3",
          data: "0",
          title: "平均日活",
          unit: "%"
        },
        {
          type: "4",
          data: "0",
          title: "月活跃度",
          unit: "%"
        }
      ],
      //获取平台基础信息
      logo: [],
      // 各单位课程供给排行
      courseSupply: [],
      // 学生能力增长情况
      studentsAbilityCount: "",
      studentsAbilityTotal: "",
      studentsAbilityAvg: "",
      studentsAbilityTitles: [],
      studentsAbilityData1: [],
      studentsAbilityData2: [],
      score: []
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
    this.postToken();
    this.getToken();
    this.$forceUpdate();
    // this.haha();
  },
  methods: {
    fetchData() {
      console.log("路由发送变化doing...");
    },
    //通过T后的值，授权生成token
    haha() {
      alert(1);
    },
    postToken() {
      var _this = this;
      var t = this.$route.query.t;
      axios
        .post(_this.url + "api/Authorize/", {
          token: t
        })
        .then(function(response) {
          _this.zhenToken = response.data.access_token;
        })
        .catch(function(error) {});
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
      tokenStr = _this.zhenToken;
      var tokenStr = sessionStorage.getItem("token");
      // tokenStr='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGFzc3Jvb20tc3RhdGlzdGljcyIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTM0NTYiLCJpZCI6IjUxIiwibmFtZSI6ImFub255bW91cyIsInBpZCI6IjE2ODIiLCJwdXJsIjoiY251LTJjIiwibmJmIjoxNTYzNzgxOTgyLCJleHAiOjE1NjM3ODU1ODIsImlhdCI6MTU2Mzc4MTk4Mn0.S05oyt3nWTJ_aXv35I9-Blnsr0aC3Ws0ZZpmqmBYRvM'
      if (tokenStr !== null) {
        //本地已经存在token 尝试调用方法
        sessionStorage.setItem("token", tokenStr);
        var token = tokenStr;
        var Start = "";
        var End = "";
        var Unit = 0;
        var Grade = 0;
        _this.getoptionsOne(token);
        _this.getSupplySituation(token, Start, End, Unit, Grade);
        _this.getTwoclassSituation(token, Start, End, Unit, Grade);
        _this.getInformationSystem(token, Start, End, Unit, Grade);
        _this.getCourseSupply(token, Start, End, Unit, Grade);
        _this.getStudentsAbility(token, Start, End, Unit, Grade);
        _this.getScore(token, Start, End, Unit, Grade);
        return false;
      }
      if (dataUrl.split("?")[1]) {
        var dataToken = dataUrl.split("?")[1].substr(2);
      }
    },
    getoptionsOne(token) {
      var _this = this;
      axios
        .get(_this.url + "/api/Plat/options?access_token=" + token)
        .then(function(response) {
          // if(response.data.code!==0){
          // sessionStorage.removeItem("token");//清除失效的token
          // window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
          // }
          _this.optionsOne = response.data.data.edus;
          _this.optionsTwo = response.data.data.units;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getSupplySituation(token, Start, End, Unit, Grade) {
      //  各类课程供给情况
      var _this = this;
      axios
        .get(
          _this.url +
            "/api/Plat/course/supply?access_token=" +
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
          // if(response.data.code!==0){
          // sessionStorage.removeItem("token");//清除失效的token
          // window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
          // }
          _this.supplySituation = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getTwoclassSituation(token, Start, End, Unit, Grade) {
      //  二课开展情况概览
      var _this = this;
      axios
        .get(
          _this.url +
            "/api/Plat/course/summary?unit=0&access_token=" +
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
          // if(response.data.code!==0){
          // sessionStorage.removeItem("token");//清除失效的token
          // window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
          // }else{
          _this.twoclassSituation = response.data.data.summary;
          // }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getInformationSystem(token, Start, End, Unit, Grade) {
      //  信息系统活跃度
      var _this = this;
      axios
        .get(
          _this.url +
            "/api/Plat/activation?access_token=" +
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
          // if(response.data.code!==0){
          // sessionStorage.removeItem("token");//清除失效的token
          // window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
          // }
          _this.informationActivation = response.data.data.activation;
          _this.informationSummary = response.data.data.summary;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getCourseSupply(token, Start, End, Unit, Grade) {
      //  各单位课程供给排行
      var _this = this;
      axios
        .get(
          _this.url +
            "/api/Plat/course/rank?unit=0&access_token=" +
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
          // if(response.data.code!==0){
          // sessionStorage.removeItem("token");//清除失效的token
          // window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
          // }
          _this.courseSupply = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getScore(token, Start, End, Unit, Grade) {
      //  学生能力增长情况
      var _this = this;
      axios
        .get(
          _this.url +
            "/api/Plat/user/score?access_token=" +
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
          // if(response.data.code!==0){
          // sessionStorage.removeItem("token");//清除失效的token
          // window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
          // }
          _this.score = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getStudentsAbility(token, Start, End, Unit, Grade) {
      // echarts
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
          // if(response.data.code!==0){
          // sessionStorage.removeItem("token");//清除失效的token
          // window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
          // }
          _this.studentsAbilityCount = response.data.data.count;
          _this.studentsAbilityTotal = response.data.data.total;
          _this.studentsAbilityAvg = response.data.data.avg;
          _this.studentsAbilityTitles = response.data.data.titles;
          _this.studentsAbilityData1 = response.data.data.data1;
          _this.studentsAbilityData2 = response.data.data.data2;
          _this.getEcharts(
            _this.studentsAbilityTitles,
            _this.studentsAbilityData1,
            _this.studentsAbilityData2
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 点击运算
    clickNum() {
      var Start =
        this.DateTimes(this.value1[0]) != ""
          ? this.DateTimes(this.value1[0])
          : "";
      var End =
        this.DateTimes(this.value1[1]) != ""
          ? this.DateTimes(this.value1[1])
          : "";
      var Unit = this.value2 != "" ? this.value2 : 0;
      var Grade = this.value3 != "" ? this.value3 : 0;
      var token = this.token;
      this.getSupplySituation(token, Start, End, Unit, Grade);
      this.getTwoclassSituation(token, Start, End, Unit, Grade);
      this.getInformationSystem(token, Start, End, Unit, Grade);
      this.getCourseSupply(token, Start, End, Unit, Grade);
      this.getStudentsAbility(token, Start, End, Unit, Grade);
      this.getScore(token, Start, End, Unit, Grade);
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

    // 初始化echarts
    getEcharts(
      studentsAbilityTitles,
      studentsAbilityData1,
      studentsAbilityData2
    ) {
      var studentsAbilityTitles = [
        "逻辑思维",
        "创新思维",
        "团队协作",
        "领导能力",
        "知识运用",
        "归纳总结",
        "政治意识",
        "奉献精神",
        "责任意识",
        "知识运用",
        "归纳总结",
        "政治意识",
        "奉献精神",
        "责任意识",
        "团队协作",
        "知识运用",
        "归纳总结",
        "政治意识",
        "奉献精神",
        "责任意识",
        "团队协作"
      ];
      var studentsAbilityData1 = [];
      var studentsAbilityData2 = [];
      //初始化echarts
      var _this = this;
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
          itemGap: 40
        },
        dataZoom: [
          {
            type: "slider",
            show: true,
            //   xAxisIndex: [0],
            //   left: '9%',
            //   bottom: -5,
            start: 0,
            end: 80, //初始化滚动条
            top: "74.5%"
          }
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
              formatter: "{value}",
              textStyle: {
                color: "#fff",
                fontSize: "13"
              }
            },
            // min:0,
            // max:9,
            splitNumber: 9
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
  /* justify-content: space-between; */
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
  margin-bottom: 20px;
}
.fx-jianjie {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  color: #4d6373;
}
.fx-jjnum {
  font-size: 20px;
  color: #fff;
  margin: 0 5px;
  margin-top: 3px;
}
.fx-check-box {
  display: block;
  width: 15px;
  height: 15px;
  background: #84939e;
  margin-right: 12px;
}
.fx-check {
  display: flex;
  align-items: center;
}
.fx-check-box2 {
  background: #1aa8d4;
  margin-left: 42px;
}
.fx-table2 {
  width: 100%;
}
.fx-table2 td {
  width: 1%;
  padding: 16px 0;
  background: #153146;
  text-align: center;
  color: #d72fa7;
}
.fx-grid-box {
  display: flex;
  width: 100%;
  min-width: 1200px;
  min-height: 300px;
  /* height: calc(50% - 81px); */
  height: calc(50% - 40px);
}
.fx-box1,
.fx-box3 {
  width: 20%;
  min-width: 300px;
  min-height: 300px;
  background: #153146;
}
.fx-box1 {
  margin-left: 1%;
  overflow: auto;
}
.fx-box2 {
  width: 56%;
  min-width: 561px;
  min-height: 300px;
  margin: 0 1%;
  background: #153146;
}
.fx-box4 {
  width: 20%;
  min-width: 300px;
  min-height: 400px;
  background: #153146;
  margin-left: 1%;
  overflow: auto;
  padding-bottom: 5px;
}
.fx-box5 {
  width: 77%;
  min-width: 600px;
  min-height: 400px;
  position: relative;
  margin-left: 1%;
  background: #153146;
}
.fxbox5-content {
  height: 20%;
  overflow: hidden;
}
.fxbox5-txt {
  position: absolute;
  top: 24%;
  left: 40px;
  color: #8a98a3;
}
.fxbox5-txt span {
  color: #00c5ff !important;
  font-size: 18px;
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
.fxbox5-tit {
  display: flex;
  margin-left: 35px;
  margin-top: 10px;
}
.fxbox5-contant {
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  margin-top: 20px;
}
.fxbox5-contant div {
  width: 30%;
  background: #274155;
  color: #fff;
  height: 40px;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fxbox5-contant div span {
  font-size: 28px;
  margin-left: 3px;
}
.fxbox2-contant {
  width: 80%;
  margin: 0 auto;
  height: 60%;
  margin-top: 5%;
}
.fxbox2-circle {
  border: 2px solid #00c5ff;
  border-radius: 50%;
  /* width: 100%;
		height: 83%; */
  width: 120px;
  height: 120px;
  text-align: center;
  padding-top: 27%;
  box-sizing: border-box;
}
.fxbox2-circle :nth-child(1) {
  font-size: 27px;
  color: #00c5ff;
}
.fxbox2-circle :nth-child(2) {
  font-size: 16px;
  color: #fff;
}
.fxbox2-oblong {
  /* width: 104%;
		height: 20%; */
  width: 120px;
  height: 30px;
  border: 2px solid #00c5ff;
  position: absolute;
  top: 97px;
  left: -1%;
  background: #153146;
  border-radius: 5%;
  text-align: center;
  color: #03ade1;
  line-height: 30px;
}
.fx-grid-box1 {
  height: calc(47% - 40px);
}
.fxbox2contant-box {
  height: 50%;
  position: relative;
  width: 14%;
  float: left;
  margin-right: 6%;
  margin-bottom: 5%;
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
.fxbox1li-span {
  /* width: 150px; */
  display: block;
  height: 100%;
  background: #00c5ff;
  margin: 0 5px;
}
.fxbox1-li1 {
  margin-top: 40px;
  height: 80%;
  padding: 0 10px;
}
.fxbox3-contant {
  width: 100%;
  padding: 0 10px;
  height: 70%;
  margin-top: 18%;
  box-sizing: border-box;
  font-size: 14px;
}
.fxbox3-acontent div:nth-child(2) {
  color: #687a88;
  margin-top: 8px;
}
.fxbox3-a {
  width: 100%;
  height: 32%;
  background: #274155;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: #fff;
}
.fxbox3-b {
  width: 48%;
  height: 32%;
  background: #274155;
  float: left;
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 3%;
}
.fxbox3-b:nth-of-type(even) {
  margin-right: 4%;
}
.fxbox3-icon {
  width: 15%;
  height: 50%;
  margin-right: 4%;
  margin-left: 4%;
  background-position: center center;
}
.fxbox3-b .fxbox3-icon {
  width: 31%;
  margin-right: 6%;
  margin-left: 8%;
}
.fxbox3-b span,
.fxbox3-a span {
  font-size: 16px;
  color: #fff;
  margin-right: 10px;
}
.fxbox4-li {
  display: flex;
  width: 100%;
  height: 13%;
  background: #274155;
  align-items: center;
  margin-bottom: 5px;
}
.fxbox4-litit {
  font-size: 16px;
  color: #707070;
  width: 30%;
  text-align: right;
  margin-right: 2%;
}
.fxbox4-contant {
  height: 80%;
  padding: 0 10px;
  margin-top: 10px;
}
.fxbox4-div2 {
  width: 50%;
  height: 25%;
  background: #00c5ff;
}
.fxbox4-div3 {
  width: 17%;
  height: 17%;
  background: #8942bf;
  margin-top: 0.5%;
}
.fxbox4-lidiv {
  width: 100%;
  height: 100%;
}
.fxbox4-div1 {
  font-size: 14px;
  color: #fff;
  margin-bottom: 1%;
  display: flex;
  align-items: center;
}
@media (min-width: 1100px) {
  .fxbox2-circle {
    width: 80px;
    height: 80px;
  }
  .fxbox2-oblong {
    font-size: 12px;
    width: 80px;
    height: 30px;
    top: 72px;
  }
}
@media (min-width: 1280px) {
  .fxbox2-circle {
    width: 80px;
    height: 80px;
  }
  .fxbox2-oblong {
    font-size: 12px;
    width: 80px;
    height: 30px;
    top: 72px;
  }
}
@media (min-width: 1440px) {
  .fxbox2-circle {
    width: 90px;
    height: 90px;
  }
  .fxbox2-oblong {
    font-size: 14px;
    width: 90px;
    height: 30px;
    top: 78px;
  }
}
@media (min-width: 1680px) {
  .fxbox2-circle {
    width: 120px;
    height: 120px;
  }
  .fxbox2-oblong {
    width: 120px;
    height: 30px;
    top: 97px;
    font-size: 16px;
  }
}
@media (min-width: 1920px) {
  .fxbox2-circle {
    width: 120px;
    height: 120px;
  }
  .fxbox2-oblong {
    width: 120px;
    height: 30px;
    top: 97px;
    font-size: 16px;
  }
}
.icon-renshu {
  font-size: 30px;
  margin: 0 15px;
  color: #5b6f7e;
}
.fxbox3-icon[data-type="1"]:before {
  content: "\e604";
  font-family: "iconfont";
  font-size: 30px;
  color: #5b6f7e;
}
.fxbox3-icon[data-type="2"]:before {
  content: "\e603";
  font-family: "iconfont";
  font-size: 30px;
  color: #5b6f7e;
}
.fxbox3-icon[data-type="3"]:before {
  content: "\e607";
  font-family: "iconfont";
  font-size: 30px;
  color: #5b6f7e;
}
.fxbox3-icon[data-type="4"]:before {
  content: "\e609";
  font-family: "iconfont";
  font-size: 30px;
  color: #5b6f7e;
}
.fxbox1-new-span {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.fx-box1::-webkit-scrollbar {
  width: 0px;
}
.fx-box4::-webkit-scrollbar {
  width: 0px;
}
.co-availability {
  text-align: center;
  line-height: 50px;
  background: #8a98a3;
  width: 230px;
  height: 50px;
  color: #fff;
  margin: 150px auto;
  border-radius: 15px;
}
.fxbox3-acontent strong {
  font-style: normal;
  font-size: 16px;
}
.fxbox3-acontent i {
  font-style: normal;
}
</style>
