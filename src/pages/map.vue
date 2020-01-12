<template>
  <div class="fx-box" style="overflow:hidden">
    <div class="fx-con">
      <div class="fx-title">社会实践看板</div>
      <div class="fx-content">
        <!-- 日期插件 -->
        <div class="fx-scope">
          <span>实践项目</span>
          <!-- <el-select v-model="value1" clearable placeholder="请选择" @change="change($event)">
            <el-option
              v-for="item in subMapFilter"
              :key="item.index"
              :value="item.subProId">
              {{item.subProName}}
            </el-option>
          </el-select> -->
          <select @change="change($event)" id="selectOne">
            <option
              v-for="item in subMapFilter"
              :key="item.index"
              :value="item.subProId"
            >{{item.subProName}}</option>
          </select> 
        </div>
        <div class="fx-scope">
          <span>{{newGroupName}}</span>
          <!-- <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in newGroupName2"
              :key="item.id"
              :value="item.newGroupName2"
            ></el-option>
          </el-select> -->
          <select @change="change($event)" id="selectTwo">
            <option
              v-for="item in newGroup"
              :key="item.index"
              :value="item.groupName"
              
            >{{item.groupName}}</option>
          </select> 
        </div>
        <div class="fx-btn" @click="pointer()">刷新</div>
      </div>
    </div>
    <div class="fx-hr"></div>
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
            <div class="fxbox3-a">
              <div class="iconfont iconrenshu"></div>
              <div class="fxbox3-acontent">
                <div>
                  <span>{{stuNum}}</span>
                  <span style="margin-left:10px">{{teaNum}}</span>
                </div>
                <div>参与{{changeSubProName}}</div>
              </div>
            </div>
            <div class="fxbox3-b">
              <div class="iconfont iconlujing2"></div>
              <div class="fxbox3-acontent">
                <div>
                  <span>{{totalTrip}}</span>
                </div>
                <div>总行程</div>
              </div>
            </div>
            <div class="fxbox3-b">
              <div class="iconfont icondiqiu"></div>
              <div class="fxbox3-acontent">
                <div>
                  <span>{{experNum}}</span>
                </div>
                <div>累计日志</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page6-right">
        <div class="login-center">
          <div class="login-content">
            <div class="slide-echart echart6" id="echart6"></div>
          </div>
        </div>
        <div id="chart_example" style="height: 80%;width:100%;min-width:500px;"></div>
      </div>
      <div class="page6-you">
                <div class="fx-box4 character-list kai">
          <div class="fxbox4-content">
            <div class="fxbox5-tit">
              <span></span>
              <span>{{changeExperName}}推送</span>
            </div>
          </div>
          <!-- 故事推送主内容 -->
          <div class="character-content" id="experList">
            <div class="character-item" v-for="item in story" :key="item.id">
              <div class="character-item-header">
                <div class="character-media">
                  <img :src="item.photo" alt=""/>
                </div>
                <div class="character-inner">
                  <span class="name">{{item.name}}</span>
                  <span>{{item.role}}</span>
                  <p>{{item.title}}</p>
                </div>
              </div>
              <div class="character-subtitle">
                <span>{{item.group_name}}</span>
              </div>
              <div class="img">
                  <img :src="items" alt="" v-for="items in item.images" :key="items.id">
              </div>
            </div>
<!--             <div class="character-item" >
              <div class="character-item-header">
                <div class="character-media">
                  <img src="" alt=""/>
                </div>
                <div class="character-inner">
                  <span class="name"></span>
                  <span>2</span>
                  <p>2</p>
                </div>
              </div>
              <div class="character-subtitle">
                <span>222</span>
              </div>
              <div class="img">
                  <img src="" alt="" >
              </div>
            </div>
            <div class="character-item" >
              <div class="character-item-header">
                <div class="character-media">
                  <img src="" alt=""/>
                </div>
                <div class="character-inner">
                  <span class="name"></span>
                  <span>2</span>
                  <p>2</p>
                </div>
              </div>
              <div class="character-subtitle">
                <span>222</span>
              </div>
              <div class="img">
                  <img src="" alt="" >
              </div>
            </div> -->
          </div>
        </div>
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
      url: "https://classroom.univteam.com/",
      back_url: "http://class-admin.univteam.com/",
      value1:"",
      value2:"",
      subMapFilter:[],
      groupName:[],
      ProjectId:"",
      newMapFilter:[],
      newSubProId:"",
      newGroupName:"",
      newExperName:"",
      // newGroupName2:[],
      newGroup:[],
      joinProjectName:[],
      stuNum:"",
      teaNum:"",
      totalTrip:"",
      experNum:"",
      mapData:"",
      story:[],
      storyPic:[],
      subProName:"",
      ProId:"",
      newExperName:'',
      newSubProName:"",
      changeExperName:'',
      changeSubProName:"",
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
    // this.drawLine();
    this.tuiSong();
    this.whetherToken();
  },
  methods: {
    change(event) {
      var _this = this;
      _this.ProjectId=event.target.value;
      for(var i=0;i<_this.newMapFilter[0].length;i++){
        if(_this.newMapFilter[0][i].subProId==_this.ProjectId){ 
          //实践项目名称
          _this.newSubProName=_this.newMapFilter[0][i].subProName;
          //实践项目id
          _this.newSubProId=_this.newMapFilter[0][i].subProId;
          //项目组
          _this.newGroupName=_this.newMapFilter[0][i].groupName;
          //故事
          _this.newExperName=_this.newMapFilter[0][i].experName;
          //团队
          _this.newGroup=[];
          for(var j=0;j<_this.newMapFilter[0][i].group.length;j++){
            _this.newGroup.push(_this.newMapFilter[0][i].group[j]);
            
          }
          
        }
      }
    },
    //页面默认选中第一个项目实践和第一个团队

    fetchData() {
      console.log("路由发送变化doing...");
    },
    //首先判断浏览器缓存中有没有token,如果有token,把token带入函数并执行
    whetherToken() {
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
        //不为null,本地已经存在token,调用方法
        _this.getFiltrate(_this.sessionToken);

      } else {
        //判断路径上有无参数,
        setTimeout(function() {
          _this.whetherToken();
        }, 1000);
      }
    },
    //点击指示器,重新计算
    pointer() {
      var _this = this;
      _this.changeExperName=_this.newExperName;
      _this.changeSubProName=_this.newSubProName;
      // _this.getFiltrate(_this.sessionToken);
      _this.getFiltrateTwo(_this.sessionToken);
      _this.GetMapData(_this.sessionToken,_this.ProjectId);
      _this.getMapExper(_this.sessionToken,_this.ProjectId);
    },
    //故事推送定时器函数
    tuiSong() {
      var lis = $("#experList .character-item").length;
      console.log($("#experList .character-item"));
      for (var i = 0; i < lis; i++) {
        (function(i) {
          setTimeout(function() {
            $("#experList").prepend($("#experList").children(":last-child"));
          }, 1000 * i);
        })(i);
      }
    },
    //获取故事数据
    getMapExper(token,subProId,groupId,lastId){
      var _this = this;
      axios
        .get(_this.url + "map_exper/?access_token=" + token+"&subProId="+subProId)
        .then(function(response) {
          _this.story=[];
          var resD = response.data;
            if (resD.code == 0 && resD.data.length > 0) {
               for(var i=0;i<resD.data.length;i++){
                 _this.story.push(resD.data[i]);
               }

          }
          
        })
        .catch(function(error) {
          sessionStorage.removeItem("token"); //清除失效的token
          window.location.href =
            " http://class-admin.univteam.com/" +
            _this.platform +
            "/account/login?back=statistics";
        });
    },
     //获取地图筛选条件(默认都选中第一个)
    getFiltrate(token){
      var _this = this;
      axios
        .get(_this.url + "map_filter/?access_token=" + token)
        .then(function(response) {
          var resD = response.data;
            if (resD.code == 0 && resD.data.length > 0) {
               _this.newMapFilter.push(resD.data);
              for(var i=0;i<response.data.data.length;i++){
                _this.subMapFilter.push(response.data.data[i]);
              }
              // _this.subProName=resD.data[0].subProName;
              _this.newGroupName=resD.data[0].groupName;
              _this.newGroup=resD.data[0].group;   
              _this.ProId=resD.data[0].subProId;
               _this.GetMapData(_this.sessionToken,_this.ProId);
              _this.getMapExper(_this.sessionToken,_this.ProId);
              _this.changeSubProName=resD.data[0].subProName;
              _this.changeExperName=resD.data[0].experName;
              
          }
        })
        .catch(function(error) {
          sessionStorage.removeItem("token"); //清除失效的token
          window.location.href =
            " http://class-admin.univteam.com/" +
            _this.platform +
            "/account/login?back=statistics";

        });
    },
    //获取地图筛选条件(其他的)
    getFiltrateTwo(token){
      var _this = this;
      axios
        .get(_this.url + "map_filter/?access_token=" + token)
        .then(function(response) {
          var resD = response.data;
            if (resD.code == 0 && resD.data.length > 0) {
               _this.newMapFilter.push(resD.data);
              for(var i=0;i<response.data.data.length;i++){
                _this.subMapFilter.push(response.data.data[i]);
              }

              
          }
        })
        .catch(function(error) {
          sessionStorage.removeItem("token"); //清除失效的token
          window.location.href =
            " http://class-admin.univteam.com/" +
            _this.platform +
            "/account/login?back=statistics";
        });
    },
    //获取统计数据接口和地图的接口
    GetMapData(token,subProId){
      var _this = this;
      axios
        .get(_this.url + "map_data/?access_token=" + token+"&subProId="+subProId)
        .then(function(response) {
          var resD = response.data;
            if (resD.code == 0 ) {
              _this.stuNum=resD.data.stuNum;
              _this.teaNum=resD.data.teaNum;
              _this.totalTrip=resD.data.totalTrip;
              _this.experNum=resD.data.experNum;
              _this.mapData=resD.data.mapData;
              _this.drawLine(_this.mapData);
              
            }
        })
        .catch(function(error) {
          // sessionStorage.removeItem("token"); //清除失效的token
          // window.location.href =
          //   " http://class-admin.univteam.com/" +
          //   _this.platform +
          //   "/account/login?back=statistics";
          
        });
    },
    //渲染地图的echarts
    drawLine(mapData) {
      var msdatajson=undefined;
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
          },
          {
            name: "pm2.5",
            type: "scatter",
            coordinateSystem: "geo",
            data: [],
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
      
      //地图假数据
      function eChartInit(time) { 
        var dataJson =mapData;
          // '{"all":{"year":"2020","teams":[17,0],"numbers":19,"foots":[41,41],"province":{"title":null,"name":"出行项目组数","data":[{"name":"河北","value":"1"},{"name":"山西","value":"2"},{"name":"新疆","value":"2"},{"name":"重庆","value":"1"},{"name":"内蒙古","value":"1"},{"name":"海南","value":"2"},{"name":"陕西","value":"1"},{"name":"湖南","value":"1"},{"name":"广东","value":"1"},{"name":"上海","value":"1"},{"name":"江苏","value":"1"},{"name":"安徽","value":"1"},{"name":"四川","value":"1"},{"name":"西藏","value":"1"}],"BJtoData":[[{"name":"河北省","value":"1"},{"name":"沈阳市"}],[{"name":"山西省","value":"2"},{"name":"沈阳市"}],[{"name":"新疆维吾尔自治区","value":"2"},{"name":"沈阳市"}],[{"name":"重庆市","value":"1"},{"name":"沈阳市"}],[{"name":"内蒙古自治区","value":"1"},{"name":"沈阳市"}],[{"name":"海南省","value":"2"},{"name":"沈阳市"}],[{"name":"陕西省","value":"1"},{"name":"沈阳市"}],[{"name":"湖南省","value":"1"},{"name":"沈阳市"}],[{"name":"广东省","value":"1"},{"name":"沈阳市"}],[{"name":"上海市","value":"1"},{"name":"沈阳市"}],[{"name":"江苏省","value":"1"},{"name":"沈阳市"}],[{"name":"安徽省","value":"1"},{"name":"沈阳市"}],[{"name":"四川省","value":"1"},{"name":"沈阳市"}],[{"name":"西藏自治区","value":"1"},{"name":"沈阳市"}]]},"dianliang":{"data":[{"name":"唐山市","value":"19"},{"name":"阳泉市","value":"19"},{"name":"克拉玛依市","value":"19"},{"name":"重庆市","value":"19"},{"name":"乌海市","value":"19"},{"name":"三沙市","value":"19"},{"name":"铜川市","value":"19"},{"name":"湘潭市","value":"19"},{"name":"武乡县","value":"19"},{"name":"巴里坤哈萨克自治县","value":"19"},{"name":"龙华区","value":"19"},{"name":"浈江区","value":"19"},{"name":"长宁区","value":"19"},{"name":"钟楼区","value":"19"},{"name":"蚌山区","value":"19"},{"name":"锦江区","value":"19"},{"name":"南木林县","value":"19"}],"geoCoordMap":{"沈阳市":["123.46987","41.80515"],"唐山市":["118.46023","39.27313"],"河北省":["114.53952","38.03647"],"阳泉市":["113.60075","37.84739"],"山西省":["112.48699","37.94036"],"克拉玛依市":["85.13208","45.68734"],"新疆维吾尔自治区":["88.31104","43.36378"],"重庆市":["106.54041","29.40268"],"乌海市":["106.8226","39.69184"],"内蒙古自治区":["111.62299","40.80772"],"三沙市":["112.33356","16.83272"],"海南省":["110.32941","20.02971"],"铜川市":["109.07593","35.06914"],"陕西省":["108.93425","34.23053"],"湘潭市":["112.90737","27.85632"],"湖南省":["112.98626","28.25591"],"武乡县":["112.86387","36.8378"],"长治市":["113.12303","36.20346"],"巴里坤哈萨克自治县":["93.01654","43.59873"],"哈密地区":["93.51465","42.82699"],"龙华区":["110.32941","20.02971"],"海口市":["110.32941","20.02971"],"浈江区":["113.61095","24.80446"],"韶关市":["113.60458","24.6826"],"广东省":["113.27324","23.15792"],"长宁区":["121.42394","31.22024"],"上海市":["121.48941","31.40527"],"钟楼区":["119.90143","31.80164"],"常州市":["119.59794","31.72322"],"江苏省":["118.8921","31.32751"],"蚌山区":["117.36779","32.94448"],"蚌埠市":["117.36779","32.94448"],"安徽省":["117.30794","31.79322"],"锦江区":["104.08329","30.65618"],"成都市":["104.10194","30.65984"],"四川省":["104.10194","30.65984"],"南木林县":["89.09936","29.68224"],"日喀则地区":["88.88697","29.26969"],"西藏自治区":["91.13775","29.65262"]}}}}'
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
    },

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
  color: #ffffff !important;
}

</style>
<style scoped>
#selectOne{
  border: none;
  background: #213c50;
  color: #ffffff;
  margin-right: 1rem;
  max-width: 2rem;
  min-width: 2rem;
}
#selectTwo{
  border: none;
  background: #213c50;
  color: #ffffff;
  max-width: 2rem;
  min-width: 2rem;
}
.iconrenshu,.iconlujing2,.icondiqiu{
  font-size: 0.26rem;
  opacity: 0.3;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
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
  font-size: 0.12rem;
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
  padding: 0 5px;
  align-items: center;
  margin-bottom: 15px;
  color: #fff;
  font-size: 16px;
  box-sizing: border-box;
}
.fxbox1li-span {
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
  width: 50%;
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

.page6-left {
  float: left;
  width: 20%;
}
.page6-right {
  float: right;
  width: 60%;
}
.page6-you {
  float: right;
  width: 20%;
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
  left: -1rem;
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
  height: 8rem;
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

