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
                  <div></div>
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
              <div class="liveness-middle"></div>
              <div class="liveness-bottom"></div>
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
  created() {},
  mounted() {},
  methods: {}
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

.liveness{
  font-size: 0.12rem;
}
</style>