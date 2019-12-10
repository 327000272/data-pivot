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
    <div class="fx-hr"></div>
    <div class="diamonds_top">
      <div class="diamonds_item" id="one"></div>
      <div class="diamonds_item" id="two"></div>
    </div>
    <div class="diamonds_bottom">
      <div class="diamonds_item" id="three"></div>
      <div class="diamonds_item" id="four"></div>
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
  created() {},
  mounted() {
    this.getEcharts();
    this.getEcharts2();
  },
  methods: {
    getEcharts() {
      var _this = this;
      let myChart = echarts.init(document.getElementById("one"));
      let option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      };
      myChart.setOption(option);
      window.onresize = myChart.resize;
    },
    getEcharts2() {
      var _this = this;
      let myChart = echarts.init(document.getElementById("two"));
      let option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
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
  font-size: 0.22rem;
  color: white;
  width: 28%;
  min-width: 223px;
}
.fx-content {
  display: flex;
  align-items: center;
}
.demonstration {
  color: #5b6f7e;
  background: #213c50;
  line-height: 40px;
  text-align: center;
  margin-right: 2px;
  font-size: 0.12rem;
}
.block {
  height: 40px;
  display: flex;
  width: 80%;
  margin-right: 25px;
}
.data-picker {
  border-radius: 0;
  background: #213c50;
  border: none;
  color: #fff;
}
.fx-btn {
  color: white;
  border: 1px white solid;
  height: 40px;
  min-width: 70px;
  box-sizing: border-box;
  line-height: 36px;
  text-align: center;
  font-size: 0.14rem;
}
.fx-hr {
  height: 1px;
  width: 100%;
  background: #415869;
  margin-top: 20px;
  margin-bottom: 20px;
}
.diamonds_top {
  overflow: hidden;
}
.diamonds_item {
  width: 50%;
  height: 500px;
  float: left;
}
.diamonds_item2 {
  width: 50%;
  height: 200;
  float: left;
  background-color: red;
}
.circle {
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background-color: yellow;
}
.diamonds_item3 {
  width: 50%;
  height: 20%;
  float: left;
  background-color: green;
}
</style>