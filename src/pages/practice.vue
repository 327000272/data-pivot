<template>
  <div class="fx-box" style="overflow:hidden">
    <div class="fx-con">
      <div class="fx-title">数据地图</div>
      <div class="fx-content">
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
    <div class="fx-tab">
      <span class="tab1">项目组</span>
      <span class="tab2">成员</span>
    </div>
    <!-- new -->
    <div class="fx-grid-box fx-grid-box1">
      <div class="page6-left">
        <!-- 数据统计 -->
        <div class="fx-box3">
          <div class="fxbox4-content">
            <div class="fxbox5-tit">
              <span></span>
              <span>统计数据</span>
            </div>
          </div>
          <div class="fxbox3-contant">
            <!-- <div class="fxbox3-a">
                                <div class="iconfont icon-renshu"></div>
                                <div class="fxbox3-acontent">
                                    <div><span>{{informationActivation.title}}</span>名学生<span style="margin-left:10px">1</span>名教职工</div>
                                    <div>1</div>
                                </div>
                            </div>  
                             <div class="fxbox3-b">
                                <div class="iconfont icon-renshu"></div>
                                <div class="fxbox3-acontent">
                                    <div><span>1</span>1</div>
                                    <div>1</div>
                                </div>
                            </div>
                            <div class="fxbox3-b">
                                <div class="iconfont icon-renshu"></div>
                                <div class="fxbox3-acontent">
                                    <div><span>1</span>1</div>
                                    <div>1</div>
                                </div>
                            </div>
                            <div class="fxbox3-b">
                                <div class="iconfont icon-renshu"></div>
                                <div class="fxbox3-acontent">
                                    <div><span>1</span>名学生</div>
                                    <div>1</div>
                                </div>
                            </div>
                            <div class="fxbox3-b">
                                <div class="iconfont icon-renshu"></div>
                                <div class="fxbox3-acontent">
                                    <div><span>1</span>名学生</div>
                                    <div>1</div>
                                </div>
            </div>-->
            <div
              class="fxbox3-b"
              v-for="item in informationActivation"
              :key="item.id"
              v-if="informationActivation!==''"
            >
              <div class="fxbox3-icon" :data-type="item.type"></div>
              <div class="fxbox3-acontent">
                <div class="tongij-wenji">
                  <div class="tongji-wenzi-left">{{item.data}}</div>
                  <div class="tongji-wenzi-right">{{item.unit}}</div>
                </div>
                <div>{{item.title}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 故事推送 -->
        <div class="fx-box4 character-list kai">
          <div class="fxbox4-content">
            <div class="fxbox5-tit">
              <span></span>
              <span>#故事#推送</span>
            </div>
          </div>
          <!-- 故事推送主内容 -->
          <div class="character-content" id="experList">
            <div class="character-item">
              <div class="character-item-header">
                <div class="character-media">
                  <img
                    src="https://img1-static.univteam.com/ClassAdmin/cspt1119/Images/2018/11/21/20181121222231.jpeg?x-oss-process=image/crop,x_27,y_22,w_213,h_213"
                    alt
                  />
                </div>
                <div class="character-inner">
                  <span class="name">b1</span>
                  <span>1-队长</span>
                  <p>外语学院2017级本科</p>
                </div>
              </div>
              <div class="character-subtitle">
                <span>队长组队按钮1</span>
              </div>
              <div class="img"></div>
            </div>
            <!--  -->
            <div class="character-item">
              <div class="character-item-header">
                <div class="character-media">
                  <img
                    src="https://img1-static.univteam.com/ClassAdmin/cspt1119/Images/2018/11/21/20181121222231.jpeg?x-oss-process=image/crop,x_27,y_22,w_213,h_213"
                    alt
                  />
                </div>
                <div class="character-inner">
                  <span class="name">b2</span>
                  <span>2-队长</span>
                  <p>外语学院2017级本科</p>
                </div>
              </div>
              <div class="character-subtitle">
                <span>队长组队按钮2</span>
              </div>
              <div class="img"></div>
            </div>
            <div class="character-item">
              <div class="character-item-header">
                <div class="character-media">
                  <img
                    src="https://img1-static.univteam.com/ClassAdmin/cspt1119/Images/2018/11/21/20181121222231.jpeg?x-oss-process=image/crop,x_27,y_22,w_213,h_213"
                    alt
                  />
                </div>
                <div class="character-inner">
                  <span class="name">b3</span>
                  <span>3-队长</span>
                  <p>外语学院2017级本科</p>
                </div>
              </div>
              <div class="character-subtitle">
                <span>队长组队按钮3</span>
              </div>
              <div class="img"></div>
            </div>
            <div class="character-item">
              <div class="character-item-header">
                <div class="character-media">
                  <img
                    src="https://img1-static.univteam.com/ClassAdmin/cspt1119/Images/2018/11/21/20181121222231.jpeg?x-oss-process=image/crop,x_27,y_22,w_213,h_213"
                    alt
                  />
                </div>
                <div class="character-inner">
                  <span class="name">b4</span>
                  <span>4-队长</span>
                  <p>外语学院2017级本科</p>
                </div>
              </div>
              <div class="character-subtitle">
                <span>队长组队按钮4</span>
              </div>
              <div class="img"></div>
            </div>
            <div class="character-item">
              <div class="character-item-header">
                <div class="character-media">
                  <img
                    src="https://img1-static.univteam.com/ClassAdmin/cspt1119/Images/2018/11/21/20181121222231.jpeg?x-oss-process=image/crop,x_27,y_22,w_213,h_213"
                    alt
                  />
                </div>
                <div class="character-inner">
                  <span class="name">b5</span>
                  <span>5-队长</span>
                  <p>外语学院2017级本科</p>
                </div>
              </div>
              <div class="character-subtitle">
                <span>队长组队按钮5</span>
              </div>
              <div class="img"></div>
            </div>
            <div class="character-item">
              <div class="character-item-header">
                <div class="character-media">
                  <img
                    src="https://img1-static.univteam.com/ClassAdmin/cspt1119/Images/2018/11/21/20181121222231.jpeg?x-oss-process=image/crop,x_27,y_22,w_213,h_213"
                    alt
                  />
                </div>
                <div class="character-inner">
                  <span class="name">b6</span>
                  <span>6-队长</span>
                  <p>外语学院2017级本科</p>
                </div>
              </div>
              <div class="character-subtitle">
                <span>队长组队按钮6</span>
              </div>
              <div class="img"></div>
            </div>
          </div>
          <!-- 底部 -->
          <!-- <div class="shadow shadows"></div> -->
        </div>
      </div>
      <div class="page6-right">
        <!-- <div class="iframe"> -->
        <div class="login-center">
          <div class="login-content">
            <div class="slide-echart echart6" id="echart6"></div>
          </div>
        </div>
        <!-- </div> -->

        <div id="chart_example" style="height: 80%;width:100%;min-width:500px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import axios from "axios";
import theme from "../../static/js/theme.js";
import china from "../../static/js/china.js";
export default {
  data() {
    return {
      token: "",
      value1: "", //日期
      value2: "",
      value3: "",
      dataToken: "",
      optionsOne: [],
      optionsTwo: [],
      optionsThree: [],
      url: "http://api.statistics.univteam.ms",
      value2: "", //单选2
      value3: "", //单选3
      value4: "", //单选4
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
          data: "0万公里",
          unit: "总行程"
        },
        {
          type: "2",
          data: "0圈",
          unit: "可绕地球"
        },
        {
          type: "3",
          data: "0篇",
          unit: "累计日志"
        },
        {
          type: "4",
          data: "0部",
          unit: "相当于"
        }
      ],
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
  computed: {},
  created() {
    var self = this;
    self.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  mounted() {
    this.drawLine();
    this.getToken();
    this.$forceUpdate();
    this.tuiSong();
    // this.getInformationSystem();
  },
  methods: {
    fetchData() {
      console.log("路由发送变化doing...");
    },
    drawLine(msdatajson) {
      var myeChart = echarts.init(document.getElementById("echart6"));
      let myChart = this.$echarts.init(document.getElementById("echart6"));
      let option = {
        title: {
          text: "", //dataTime.province.title
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        visualMap: {
          min: 0,
          max: 80,
          seriesIndex: 0,
          show: false,
          left: "left",
          top: "bottom",
          inRange: {
            color: ["#BFEFE4", "#4ABDE6", "#7672ED", "#AE54E1", "#DD22BE"]
          },
          calculable: true
        },
        toolbox: {
          show: false,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            dataView: {
              readOnly: false
            },
            restore: {},
            saveAsImage: {}
          }
        },
        geo: {
          map: "china",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: "scale",
          layoutCenter: ["50%", "53%"],
          layoutSize: "108%",
          zoom: 1,
          itemStyle: {
            normal: {
              color: "rgba(51, 69, 89, .5)",
              borderColor: "rgba(100,149,237,1)"
            },
            emphasis: {
              color: "rgba(37, 43, 61, .5)"
            }
          }
        },
        series: [
          {
            name: "", //dataTime.province.name
            type: "map",
            geoIndex: 0,
            mapType: "china",
            roam: true,
            zoom: 1.2,
            label: {
              normal: {
                show: true,
                position: "right",
                offset: [2, 0],
                formatter: "{b}",
                fontSize: 9,
                fontFamily: "Microsoft YaHei",
                fontWeight: "normal"
              },
              emphasis: {
                show: true
              }
            },
            data: [] //dataTime.province.data
          },
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: (function() {
                //if(autoPlays)return false;
                return true;
              })(),
              period: 4,
              trailLength: 0.02,
              symbol: "arrow",
              symbolSize: 5
            },
            lineStyle: {
              normal: {
                color: "#fff",
                width: 0.2,
                opacity: (function() {
                  //if(autoPlays)return 0;
                  return 0.5;
                })(),
                curveness: 0.2
              }
            },

            data: [] //convertData6(BJData6)
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: "stroke",
              scale: 4
            },
            label: {
              normal: {
                show: true,
                position: "right",
                offset: [2, 0],
                formatter: "{b}",
                fontSize: 12,
                fontFamily: "Microsoft YaHei",
                fontWeight: "normal"
              },
              emphasis: {
                show: true
              }
            },
            symbol: "circle",
            symbolSize: function(val) {
              var val2;
              val2 = val[2] > 100 ? 100 : val[2];
              return 1; //1 + val2/ 100;
            },
            itemStyle: {
              normal: {
                show: false,
                color: "#fff "
              }
            },
            data: []
            //BJData6.map(function(dataItem) {
            //              return {
            //                  name: dataItem[0].name,
            //                  value: geoCoordMap6[dataItem[0].name].concat([dataItem[0].value])
            //              };
            //          })
          },
          {
            name: "pm2.5",
            type: "scatter",
            coordinateSystem: "geo",
            data: [],
            //          convertData(dataTime.dianliang.data.sort(function (a, b) {
            //              return b.value - a.value;
            //          }))
            symbolSize: function(val) {
              var r, a, b, a1, b1, p;
              p = 2;
              a1 = 6;
              b1 = 1;
              a = 40;
              b = 1;
              r = val[2] > 40 ? 40 : val[2];
              r = (((r - a) * (b1 - a1)) / (b - a) + a1) * p;
              if (r < 1) r = 1;
              return r;
            },
            tooltip: {
              formatter: function(t) {
                return t.name + ":" + t.value[2] + "人";
              }
            },
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#fff"
              }
            }
          },
          {
            name: "Top 50",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: [],
            //          convertData(dataTime.dianliang.data.sort(function (a, b) {
            //              return b.value - a.value;
            //          }).slice(0, 11)),
            symbolSize: function(val) {
              var r, a, b, a1, b1, p;
              p = 2;
              a1 = 6;
              b1 = 1;
              a = 40;
              b = 1;
              r = val[2] > 40 ? 40 : val[2];
              r = (((r - a) * (b1 - a1)) / (b - a) + a1) * p;
              if (r < 1) r = 1;
              return r;
            },
            tooltip: {
              formatter: function(t) {
                return t.name + ":" + t.value[2] + "人";
              }
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,

            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: "#611A85",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
          }
        ]
      };

      myChart.setOption(option);
      window.onresize = myChart.resize;
      //数据
      function eChartInit(time) {
        //获取到的数据
        //var dataJson='{"year":"2019","teams":[285,0],"numbers":645,"foots":[20,56],"startTime":"2019-7-10","endTime":"2019-7-11"};var dataJson={"all":{"year":"2019","teams":[285,0],"numbers":645,"foots":[118,118],"province":{"title":null,"name":"出行实践队数","data":[{"name":"上海","value":"7"},{"name":"西藏","value":"3"},{"name":"内蒙古","value":"2"},{"name":"台湾","value":"2"},{"name":"吉林","value":"2"},{"name":"河南","value":"2"},{"name":"北京","value":"4"},{"name":"陕西","value":"1"},{"name":"山西","value":"1"},{"name":"江西","value":"4"},{"name":"黑龙江","value":"1"},{"name":"浙江","value":"2"},{"name":"广东","value":"3"},{"name":"广西","value":"1"},{"name":"安徽","value":"7"},{"name":"福建","value":"6"},{"name":"江苏","value":"7"},{"name":"山东","value":"3"},{"name":"湖北","value":"2"}],"BJtoData":[[{"name":"上海市","value":"7"},{"name":"沈阳市"}],[{"name":"西藏自治区","value":"3"},{"name":"沈阳市"}],[{"name":"内蒙古自治区","value":"2"},{"name":"沈阳市"}],[{"name":"台湾省","value":"2"},{"name":"沈阳市"}],[{"name":"吉林省","value":"2"},{"name":"沈阳市"}],[{"name":"河南省","value":"2"},{"name":"沈阳市"}],[{"name":"北京市","value":"4"},{"name":"沈阳市"}],[{"name":"陕西省","value":"1"},{"name":"沈阳市"}],[{"name":"山西省","value":"1"},{"name":"沈阳市"}],[{"name":"江西省","value":"4"},{"name":"沈阳市"}],[{"name":"黑龙江省","value":"1"},{"name":"沈阳市"}],[{"name":"浙江省","value":"2"},{"name":"沈阳市"}],[{"name":"广东省","value":"3"},{"name":"沈阳市"}],[{"name":"广西壮族自治区","value":"1"},{"name":"沈阳市"}],[{"name":"安徽省","value":"7"},{"name":"沈阳市"}],[{"name":"福建省","value":"6"},{"name":"沈阳市"}],[{"name":"江苏省","value":"7"},{"name":"沈阳市"}],[{"name":"山东省","value":"3"},{"name":"沈阳市"}],[{"name":"湖北省","value":"2"},{"name":"沈阳市"}]]},"dianliang":{"data":[{"name":"长宁区","value":"5"},{"name":"扎囊县","value":"4"},{"name":"海勃湾区","value":"4"},{"name":"前金区","value":"4"},{"name":"徐汇区","value":"4"},{"name":"铁西区","value":"4"},{"name":"西工区","value":"4"},{"name":"东城区","value":"2"},{"name":"秦都区","value":"3"},{"name":"中山区","value":"4"},{"name":"朝阳区","value":"4"},{"name":"昆都仑区","value":"4"},{"name":"城区","value":"1"},{"name":"东乡县","value":"4"},{"name":"工农区","value":"1"},{"name":"龙湾区","value":"1"},{"name":"分宜县","value":"3"},{"name":"鹤山市","value":"1"},{"name":"银海区","value":"1"},{"name":"海淀区","value":"1"},{"name":"南浔区","value":"1"},{"name":"含山县","value":"1"},{"name":"田家庵区","value":"1"},{"name":"前郭尔罗斯蒙古族自治县","value":"1"},{"name":"洛江区","value":"1"},{"name":"博望区","value":"1"},{"name":"昆山市","value":"1"},{"name":"启东市","value":"1"},{"name":"闵行区","value":"3"},{"name":"狮子山区","value":"2"},{"name":"闸北区","value":"1"},{"name":"诏安县","value":"5"},{"name":"惠安县","value":"1"},{"name":"四会市","value":"1"},{"name":"肥城市","value":"3"},{"name":"松溪县","value":"1"},{"name":"崇仁县","value":"1"},{"name":"赣榆县","value":"1"},{"name":"静安区","value":"1"},{"name":"定远县","value":"3"},{"name":"沙洋县","value":"1"},{"name":"上栗县","value":"1"},{"name":"获嘉县","value":"1"},{"name":"烈山区","value":"2"},{"name":"戚墅堰区","value":"1"},{"name":"上杭县","value":"1"},{"name":"江孜县","value":"5"},{"name":"札达县","value":"4"},{"name":"东海县","value":"1"},{"name":"北塘区","value":"1"},{"name":"崇阳县","value":"1"},{"name":"封开县","value":"1"},{"name":"五莲县","value":"1"},{"name":"峄城区","value":"1"},{"name":"通州区","value":"1"}],"geoCoordMap":{"沈阳市":["123.46987","41.80515"],"长宁区":["121.42394","31.22024"],"上海市":["121.48941","31.40527"],"扎囊县":["91.33735","29.245"],"山南地区":["91.76141","29.22484"],"西藏自治区":["91.13775","29.65262"],"海勃湾区":["106.8226","39.69184"],"乌海市":["106.8226","39.69184"],"内蒙古自治区":["111.62299","40.80772"],"前金区":["120.29352","22.626419"],"高雄市":["120.306839","22.630576"],"台湾省":["121.520076","25.030724"],"徐汇区":["121.43687","31.18826"],"铁西区":["124.34515","43.14635"],"四平市":["124.40946","43.16208"],"吉林省":["125.28845","43.83327"],"西工区":["112.42827","34.66064"],"洛阳市":["112.51078","34.70431"],"河南省":["113.6401","34.72468"],"东城区":["116.41637","39.92855"],"北京市":["116.23128","40.22077"],"秦都区":["108.70641","34.32908"],"咸阳市":["108.70641","34.32908"],"陕西省":["108.93425","34.23053"],"中山区":["121.541766","25.074708"],"台北市":["121.520076","25.030724"],"朝阳区":["116.44355","39.9219"],"昆都仑区":["109.83859","40.64178"],"包头市":["109.97372","41.76943"],"城区":["113.12303","36.20346"],"长治市":["113.12303","36.20346"],"山西省":["112.48699","37.94036"],"东乡县":["116.60334","28.24771"],"抚州市":["116.60334","28.24771"],"江西省":["115.94422","28.54538"],"工农区":["130.27482","47.31872"],"鹤岗市":["130.31755","47.33872"],"黑龙江省":["126.95717","45.54774"],"龙湾区":["120.81303","27.93252"],"温州市":["121.1572","27.83616"],"浙江省":["120.21201","30.2084"],"分宜县":["114.69191","27.81476"],"新余市":["114.94461","27.80038"],"鹤山市":["112.96436","22.7653"],"江门市":["113.11103","22.56028"],"广东省":["113.27324","23.15792"],"银海区":["109.13916","21.44872"],"北海市":["109.1175","21.47525"],"广西壮族自治区":["108.27331","22.78121"],"海淀区":["116.29845","39.95933"],"南浔区":["120.41847","30.84979"],"湖州市":["120.41847","30.84979"],"含山县":["118.10241","31.73358"],"马鞍山市":["118.84432","31.55856"],"安徽省":["117.30794","31.79322"],"田家庵区":["117.01743","32.64709"],"淮南市":["116.83359","32.63142"],"前郭尔罗斯蒙古族自治县":["124.82357","45.1173"],"松原市":["124.81698","45.17185"],"洛江区":["118.6712","24.9399"],"泉州市":["118.613","24.88946"],"福建省":["119.27345","26.04769"],"博望区":["118.84432","31.55856"],"昆山市":["120.98181","31.38475"],"苏州市":["120.63132","31.30227"],"江苏省":["118.8921","31.32751"],"启东市":["121.65787","31.80805"],"南通市":["120.85737","32.00986"],"闵行区":["121.38206","31.11325"],"狮子山区":["117.87431","30.95614"],"铜陵市":["117.80103","30.90466"],"闸北区":["121.45591","31.22352"],"诏安县":["117.17508","23.71152"],"漳州市":["117.70984","24.5033"],"惠安县":["118.79695","25.03065"],"四会市":["112.73404","23.32743"],"肇庆市":["112.56706","23.15815"],"肥城市":["116.76917","36.18245"],"泰安市":["117.13526","36.19198"],"山东省":["116.75199","36.55358"],"松溪县":["118.7854","27.52629"],"南平市":["118.12043","27.33175"],"崇仁县":["116.06124","27.76437"],"赣榆县":["119.1773","34.84065"],"连云港市":["119.1773","34.84065"],"静安区":["121.45591","31.22352"],"定远县":["117.69856","32.52998"],"滁州市":["118.30553","32.2948"],"沙洋县":["112.58854","30.70918"],"荆门市":["112.20158","31.05193"],"湖北省":["114.02919","30.58203"],"上栗县":["113.79537","27.88042"],"萍乡市":["113.87163","27.61552"],"获嘉县":["113.65716","35.25962"],"新乡市":["113.90598","35.3718"],"烈山区":["116.8132","33.89577"],"淮北市":["116.82803","33.99141"],"戚墅堰区":["119.94311","31.70165"],"常州市":["119.59794","31.72322"],"上杭县":["116.42026","25.04943"],"龙岩市":["117.03736","25.09839"],"江孜县":["89.60558","28.91152"],"日喀则地区":["88.88697","29.26969"],"札达县":["79.80321","31.47865"],"阿里地区":["81.1454","30.40051"],"东海县":["118.77147","34.54216"],"北塘区":["120.30297","31.56597"],"无锡市":["120.28429","31.52853"],"崇阳县":["114.03892","29.55537"],"咸宁市":["114.2984","29.85251"],"封开县":["111.51196","23.42448"],"五莲县":["119.20875","35.75018"],"日照市":["119.46242","35.42545"],"峄城区":["117.59061","34.77228"],"枣庄市":["117.4613","35.09963"],"通州区":["121.07299","32.06764"]}}}}';
        var dataJson =
          '{"all":{"year":"2019","teams":[285,0],"numbers":645,"foots":[118,118],"province":{"title":null,"name":"出行实践队数","data":[{"name":"上海","value":"7"},{"name":"西藏","value":"3"},{"name":"内蒙古","value":"2"},{"name":"台湾","value":"2"},{"name":"吉林","value":"2"},{"name":"河南","value":"2"},{"name":"北京","value":"4"},{"name":"陕西","value":"1"},{"name":"山西","value":"1"},{"name":"江西","value":"4"},{"name":"黑龙江","value":"1"},{"name":"浙江","value":"2"},{"name":"广东","value":"3"},{"name":"广西","value":"1"},{"name":"安徽","value":"7"},{"name":"福建","value":"6"},{"name":"江苏","value":"7"},{"name":"山东","value":"3"},{"name":"湖北","value":"2"}],"BJtoData":[[{"name":"上海市","value":"7"},{"name":"沈阳市"}],[{"name":"西藏自治区","value":"3"},{"name":"沈阳市"}],[{"name":"内蒙古自治区","value":"2"},{"name":"沈阳市"}],[{"name":"台湾省","value":"2"},{"name":"沈阳市"}],[{"name":"吉林省","value":"2"},{"name":"沈阳市"}],[{"name":"河南省","value":"2"},{"name":"沈阳市"}],[{"name":"北京市","value":"4"},{"name":"沈阳市"}],[{"name":"陕西省","value":"1"},{"name":"沈阳市"}],[{"name":"山西省","value":"1"},{"name":"沈阳市"}],[{"name":"江西省","value":"4"},{"name":"沈阳市"}],[{"name":"黑龙江省","value":"1"},{"name":"沈阳市"}],[{"name":"浙江省","value":"2"},{"name":"沈阳市"}],[{"name":"广东省","value":"3"},{"name":"沈阳市"}],[{"name":"广西壮族自治区","value":"1"},{"name":"沈阳市"}],[{"name":"安徽省","value":"7"},{"name":"沈阳市"}],[{"name":"福建省","value":"6"},{"name":"沈阳市"}],[{"name":"江苏省","value":"7"},{"name":"沈阳市"}],[{"name":"山东省","value":"3"},{"name":"沈阳市"}],[{"name":"湖北省","value":"2"},{"name":"沈阳市"}]]},"dianliang":{"data":[{"name":"长宁区","value":"5"},{"name":"扎囊县","value":"4"},{"name":"海勃湾区","value":"4"},{"name":"前金区","value":"4"},{"name":"徐汇区","value":"4"},{"name":"铁西区","value":"4"},{"name":"西工区","value":"4"},{"name":"东城区","value":"2"},{"name":"秦都区","value":"3"},{"name":"中山区","value":"4"},{"name":"朝阳区","value":"4"},{"name":"昆都仑区","value":"4"},{"name":"城区","value":"1"},{"name":"东乡县","value":"4"},{"name":"工农区","value":"1"},{"name":"龙湾区","value":"1"},{"name":"分宜县","value":"3"},{"name":"鹤山市","value":"1"},{"name":"银海区","value":"1"},{"name":"海淀区","value":"1"},{"name":"南浔区","value":"1"},{"name":"含山县","value":"1"},{"name":"田家庵区","value":"1"},{"name":"前郭尔罗斯蒙古族自治县","value":"1"},{"name":"洛江区","value":"1"},{"name":"博望区","value":"1"},{"name":"昆山市","value":"1"},{"name":"启东市","value":"1"},{"name":"闵行区","value":"3"},{"name":"狮子山区","value":"2"},{"name":"闸北区","value":"1"},{"name":"诏安县","value":"5"},{"name":"惠安县","value":"1"},{"name":"四会市","value":"1"},{"name":"肥城市","value":"3"},{"name":"松溪县","value":"1"},{"name":"崇仁县","value":"1"},{"name":"赣榆县","value":"1"},{"name":"静安区","value":"1"},{"name":"定远县","value":"3"},{"name":"沙洋县","value":"1"},{"name":"上栗县","value":"1"},{"name":"获嘉县","value":"1"},{"name":"烈山区","value":"2"},{"name":"戚墅堰区","value":"1"},{"name":"上杭县","value":"1"},{"name":"江孜县","value":"5"},{"name":"札达县","value":"4"},{"name":"东海县","value":"1"},{"name":"北塘区","value":"1"},{"name":"崇阳县","value":"1"},{"name":"封开县","value":"1"},{"name":"五莲县","value":"1"},{"name":"峄城区","value":"1"},{"name":"通州区","value":"1"}],"geoCoordMap":{"沈阳市":["123.46987","41.80515"],"长宁区":["121.42394","31.22024"],"上海市":["121.48941","31.40527"],"扎囊县":["91.33735","29.245"],"山南地区":["91.76141","29.22484"],"西藏自治区":["91.13775","29.65262"],"海勃湾区":["106.8226","39.69184"],"乌海市":["106.8226","39.69184"],"内蒙古自治区":["111.62299","40.80772"],"前金区":["120.29352","22.626419"],"高雄市":["120.306839","22.630576"],"台湾省":["121.520076","25.030724"],"徐汇区":["121.43687","31.18826"],"铁西区":["124.34515","43.14635"],"四平市":["124.40946","43.16208"],"吉林省":["125.28845","43.83327"],"西工区":["112.42827","34.66064"],"洛阳市":["112.51078","34.70431"],"河南省":["113.6401","34.72468"],"东城区":["116.41637","39.92855"],"北京市":["116.23128","40.22077"],"秦都区":["108.70641","34.32908"],"咸阳市":["108.70641","34.32908"],"陕西省":["108.93425","34.23053"],"中山区":["121.541766","25.074708"],"台北市":["121.520076","25.030724"],"朝阳区":["116.44355","39.9219"],"昆都仑区":["109.83859","40.64178"],"包头市":["109.97372","41.76943"],"城区":["113.12303","36.20346"],"长治市":["113.12303","36.20346"],"山西省":["112.48699","37.94036"],"东乡县":["116.60334","28.24771"],"抚州市":["116.60334","28.24771"],"江西省":["115.94422","28.54538"],"工农区":["130.27482","47.31872"],"鹤岗市":["130.31755","47.33872"],"黑龙江省":["126.95717","45.54774"],"龙湾区":["120.81303","27.93252"],"温州市":["121.1572","27.83616"],"浙江省":["120.21201","30.2084"],"分宜县":["114.69191","27.81476"],"新余市":["114.94461","27.80038"],"鹤山市":["112.96436","22.7653"],"江门市":["113.11103","22.56028"],"广东省":["113.27324","23.15792"],"银海区":["109.13916","21.44872"],"北海市":["109.1175","21.47525"],"广西壮族自治区":["108.27331","22.78121"],"海淀区":["116.29845","39.95933"],"南浔区":["120.41847","30.84979"],"湖州市":["120.41847","30.84979"],"含山县":["118.10241","31.73358"],"马鞍山市":["118.84432","31.55856"],"安徽省":["117.30794","31.79322"],"田家庵区":["117.01743","32.64709"],"淮南市":["116.83359","32.63142"],"前郭尔罗斯蒙古族自治县":["124.82357","45.1173"],"松原市":["124.81698","45.17185"],"洛江区":["118.6712","24.9399"],"泉州市":["118.613","24.88946"],"福建省":["119.27345","26.04769"],"博望区":["118.84432","31.55856"],"昆山市":["120.98181","31.38475"],"苏州市":["120.63132","31.30227"],"江苏省":["118.8921","31.32751"],"启东市":["121.65787","31.80805"],"南通市":["120.85737","32.00986"],"闵行区":["121.38206","31.11325"],"狮子山区":["117.87431","30.95614"],"铜陵市":["117.80103","30.90466"],"闸北区":["121.45591","31.22352"],"诏安县":["117.17508","23.71152"],"漳州市":["117.70984","24.5033"],"惠安县":["118.79695","25.03065"],"四会市":["112.73404","23.32743"],"肇庆市":["112.56706","23.15815"],"肥城市":["116.76917","36.18245"],"泰安市":["117.13526","36.19198"],"山东省":["116.75199","36.55358"],"松溪县":["118.7854","27.52629"],"南平市":["118.12043","27.33175"],"崇仁县":["116.06124","27.76437"],"赣榆县":["119.1773","34.84065"],"连云港市":["119.1773","34.84065"],"静安区":["121.45591","31.22352"],"定远县":["117.69856","32.52998"],"滁州市":["118.30553","32.2948"],"沙洋县":["112.58854","30.70918"],"荆门市":["112.20158","31.05193"],"湖北省":["114.02919","30.58203"],"上栗县":["113.79537","27.88042"],"萍乡市":["113.87163","27.61552"],"获嘉县":["113.65716","35.25962"],"新乡市":["113.90598","35.3718"],"烈山区":["116.8132","33.89577"],"淮北市":["116.82803","33.99141"],"戚墅堰区":["119.94311","31.70165"],"常州市":["119.59794","31.72322"],"上杭县":["116.42026","25.04943"],"龙岩市":["117.03736","25.09839"],"江孜县":["89.60558","28.91152"],"日喀则地区":["88.88697","29.26969"],"札达县":["79.80321","31.47865"],"阿里地区":["81.1454","30.40051"],"东海县":["118.77147","34.54216"],"北塘区":["120.30297","31.56597"],"无锡市":["120.28429","31.52853"],"崇阳县":["114.03892","29.55537"],"咸宁市":["114.2984","29.85251"],"封开县":["111.51196","23.42448"],"五莲县":["119.20875","35.75018"],"日照市":["119.46242","35.42545"],"峄城区":["117.59061","34.77228"],"枣庄市":["117.4613","35.09963"],"通州区":["121.07299","32.06764"]}}}}';
        var flag = eval("(" + dataJson + ")");
        var dataTime = flag[time],
          geoCoordMap6 = dataTime.dianliang.geoCoordMap,
          BJData6 = dataTime.province.BJtoData;
        var convertData6 = function(data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap6[dataItem[1].name];
            var toCoord = geoCoordMap6[dataItem[0].name];
            if (fromCoord && toCoord) {
              res.push([
                {
                  coord: fromCoord,
                  value: dataItem[0].value
                },
                {
                  coord: toCoord
                }
              ]);
            }
          }
          return res;
        };
        var convertData = function(data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = dataTime.dianliang.geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        };
        if (dataTime.province.data != null) {
          option.series[0].data = dataTime.province.data;
        }
        if (BJData6 != null) {
          option.series[1].data = convertData6(BJData6);
          option.series[2].data = BJData6.map(function(dataItem) {
            return {
              name: dataItem[0].name,
              value: geoCoordMap6[dataItem[0].name].concat([dataItem[0].value])
            };
          });
        }
        if (dataTime.dianliang.data != null) {
          option.series[3].data = convertData(
            dataTime.dianliang.data.sort(function(a, b) {
              return b.value - a.value;
            })
          );
          option.series[4].data = convertData(
            dataTime.dianliang.data
              .sort(function(a, b) {
                return b.value - a.value;
              })
              .slice(0, 11)
          );
        }
        myeChart.setOption(option);
      }
      var searchParam = {
        projectId: 0,
        subProjectId: 0
      };
      var helper = {
        projects: [],
        init: function() {
          eChartInit("all", msdatajson);
        }
      };
      helper.init();
      //数据
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
        _this.getMap(token, Start, End, Unit, Grade);
        _this.getMessage(token, Start, End, Unit, Grade);
        _this.getoptionsOne(token);
        _this.getInformationSystem(token, Start, End, Unit, Grade, url22);
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
            var Start = "";
            var End = "";
            var Unit = 0;
            var Grade = 0;
            sessionStorage.setItem("token", token);
            _this.getMap(token, Start, End, Unit, Grade);
            _this.getMessage(token, Start, End, Unit, Grade);
            _this.getoptionsOne(token);
            _this.getInformationSystem(token, Start, End, Unit, Grade, url22);
          })
          .catch(function(error) {
            // window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
            console.log("数据加载失败");
          });
      }
    },
    tuiSong() {
      var lis = $("#experList .character-item").length;
      for (var i = 0; i < lis; i++) {
        (function(i) {
          setTimeout(function() {
            $("#experList").prepend($("#experList").children(":last-child"));
            // $("#experList .character-item").animate({left:"350px"})
          }, 1000 * i);
        })(i);
      }
    },
    getoptionsOne(token) {
      var _this = this;
      axios
        .get(_this.url + "/api/Plat/options?access_token=" + token)
        .then(function(response) {
          _this.optionsOne = response.data.data.edus;
          _this.optionsTwo = response.data.data.units;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getMap(token, Start, End, Unit, Grade) {
      var _this = this;
      axios
        .get(
          _this.url +
            "/api/Project/map/data?access_token=" +
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
            // sessionStorage.removeItem("token");
            window.location.href =
              " http://class-admin.univteam.com/" +
              url22 +
              "/account/login?back=statistics";
          }
          _this.datajson = response.data.allData;
          _this.drawLine(_this.datajson);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getMessage(token, Start, End, Unit, Grade) {
      var _this = this;
      axios
        .get(
          _this.url +
            "/api/Project/setting/?access_token=" +
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
          //    if(response.data.code!==0){
          //     sessionStorage.removeItem("token");
          // 	window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
          //     }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getInformationSystem(token, Start, End, Unit, Grade, myurl) {
      //  数据统计
      var _this = this;
      axios
        .get(
          _this.url +
            "/api/Project/summary?access_token=" +
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
          // if(response.data.code==1500){
          // sessionStorage.removeItem("token");//清除失效的token
          // window.location.href=" http://class-admin.univteam.com/"+myurl+"/account/login?back=statistics";
          // }else{
          // _this.informationActivation= response.data.data.activation;
          _this.informationActivation = response.data.data;
          _this.informationActivation = _this.informationActivation.reverse();
          // _this.informationSummary= response.data.data.summary;
          // }
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
        .catch(function(error) {});
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
      this.getInformationSystem(token, Start, End, Unit, Grade, url22);
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
  /* padding: 20px  30px; */
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
  justify-content: space-between;
}
.fx-title {
  font-size: 22px;
  color: white;
  width: 28%;
  min-width: 223px;
  justify-content: space-between;
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
  width: 33%;
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
  min-width: 358px;
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
  min-width: 350px;
  min-height: 400px;
  background: #153146;
  overflow: auto;
  padding-bottom: 5px;
  margin-top: 2%;
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
  margin-left: 13px;
  padding-top: 10px;
  margin-bottom: 5px;
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
  height: calc(87% - 40px);
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
  margin-top: 6%;
  box-sizing: border-box;
  font-size: 14px;
}
.fxbox3-acontent div:nth-child(2) {
  color: #687a88;
}
.fxbox3-a {
  width: 100%;
  height: 32%;
  background: #274155;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
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
  padding-top: 10px;
  padding-bottom: 10px;
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
.fxbox3-icon[data-type="28"]:before {
  content: "\e60e";
  font-family: "iconfont";
  font-size: 30px;
  color: #5b6f7e;
}
.fxbox3-icon[data-type="27"]:before {
  content: "\e60c";
  font-family: "iconfont";
  font-size: 30px;
  color: #5b6f7e;
}
.fxbox3-icon[data-type="31"]:before {
  content: "\e60b";
  font-family: "iconfont";
  font-size: 30px;
  color: #5b6f7e;
}
.fxbox3-icon[data-type="32"]:before {
  content: "\e60d";
  font-family: "iconfont";
  font-size: 30px;
  color: #5b6f7e;
}
.fxbox3-icon[data-type="29"]:before {
  content: "\e608";
  font-family: "iconfont";
  font-size: 30px;
  color: #5b6f7e;
}
.fxbox3-icon[data-type="30"]:before {
  content: "\e608";
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
/* 选项卡*/
.fx-tab {
  width: 95%;
  margin: 0px 48px;
  height: 4%;
  display: flex;
  align-items: center;
  position: relative;
  margin: 1% 0;
  display: none;
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
.fx-tab .tab1 {
  border-radius: 30px 0 0 30px;
  background: rgba(0, 0, 0, 0.2) !important;
  position: absolute;
  left: 0;
  color: #fff;
}
.tab2 {
  position: absolute;
  left: 8%;
  border-radius: 0px 30px 30px 0px;
}
.page6-left {
  float: left;
  width: 20%;
}
.page6-right {
  float: right;
  width: 80%;
}
/* 地图 */
.login-center {
  position: relative;
  width: 100%;
  height: calc(100% - 56px);
  /*background-image: url(/Images/tsinghua_bj.jpg);*/
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  min-height: 600px;
  /*overflow: hidden;*/
}
.login-content {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-top: 50px;
  /*border: 2px solid;*/
  transition-duration: 400ms;
}
.login-content {
  height: 100%;
  z-index: 10;
}
.slide-echart {
  position: absolute;
  left: 0;
  width: 100%;
}

.slide-echart.echart6 {
  top: 0;
  bottom: 0;
}
/* 故事推送 */
.kai {
  width: 300px;
  /* background: rgba(0,0,0,.7); */
}
.character-list {
  /* position: absolute; */
  right: 10px;
  top: 10px;
  z-index: 10;
  width: 300px;
  /*overflow: hidden;*/
  /* background: rgba(0,0,0,.3); */
  padding: 5px;
  padding-right: 3px;
  /*height: 405px;*/
  transition-duration: 600ms;
}
.character-list .character-content {
  position: relative;
  width: 100%;
  height: 600px;
  padding-bottom: 10px;
  padding-right: 5px;
  overflow: hidden;
  overflow-y: auto;
}

.character-list .character-item {
  margin-top: 5px;
  background: #ffffff;
  border-radius: 4px;
  padding: 10px;
  position: relative;
  /*padding-right: 40px;*/
  overflow: hidden;
  transition-duration: 600ms;
}
.character-list .character-item:first-child {
  margin-top: 0;
}

.character-item-header {
  display: flex;
  overflow: hidden;
}

.character-media {
  display: flex;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  overflow: hidden;
}

.character-media img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
}

.character-list .character-inner {
  width: 100%;
  color: #999999;
  line-height: 20px;
  font-size: 12px;
}

.character-list .character-inner span {
  display: flex;
  color: #000000;
  font-size: 16px;
}

.character-list .character-inner sub {
  color: #666666;
  font-size: 12px;
  margin-left: 10px;
}

.character-list .character-subtitle {
  font-size: 12px;
  color: #999999;
  margin-top: 5px;
  overflow: hidden;
}

.character-list .character-subtitle span {
  display: block;
  position: relative;
  line-height: 18px;
  /*padding-left: 20px;*/
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 14px;
  color: #000000;
  letter-spacing: 1px;
  margin: 3px 0;
}

.character-list .character-subtitle span:before {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-family: iconFont;
}
/*.character-list .character-subtitle span.time:before{*/
/*content: '\e904';*/
/*}*/
/*.character-list .character-subtitle span.adress:before{*/
/*content: '\e90c';*/
/*}*/
.character-list .character-button {
  position: absolute;
  width: 30px;
  right: 5px;
  top: 5px;
  bottom: 5px;
  background: #ae54e1;
  border-radius: 4px;
  font-size: 14px;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 7px;
  cursor: pointer;
}
.character-inner .name {
  float: left;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block !important;
}

.character-inner span:nth-child(2) {
  font-size: 12px;
  padding-left: 5px;
  color: #999999;
}

.character-item .img {
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
  overflow: hidden;
}

.character-item .img img {
  width: 80px;
  height: 80px;
  /*border: 1px solid;*/
}
.character-item.translate {
  transform: translateX(100%);
}
.character-list .shadow {
  left: 1px;
  width: 300px;
  height: 30px;
  /*background: rgba(0,0,0,.3);*/
  position: absolute;
  bottom: 0;
  /*z-index: 22;*/
}

.character-list .shadows {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
}
/* 滚动条 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0);
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0);
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
}
/* 故事推送动画 */
.suo {
  width: 0;
  background: none;
}
.tongij-wenji {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.tongji-wenzi-left {
  float: left;
  font-size: 16px;
}
.fxbox3-acontent .tongij-wenji .tongji-wenzi-right {
  float: left;
  color: #fff;
  margin-left: 5px;
}
</style>

