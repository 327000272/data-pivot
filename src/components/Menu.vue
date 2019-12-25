<template>
  <div class="sidebar">
    <el-row class="tac">
      <el-col :span="12">
        <ul class="school-content">
          <li class="school-sublogo">
            <img :src="PlatDetail.logo" class="icon-logo" />
            <span>
              <p>{{PlatDetail.platName}}</p>
              <p>{{PlatDetail.schoolName}}</p>
            </span>
            
          </li>
          <li class="websiteTitle">素质育人大数据</li>
        </ul>
        <!-- <div class="school-logo">
          <div>
              <img src="https://img1-static.univteam.com/ClassAdmin/cspt1119/Images/2019/04/04/20190404174505.jpeg?x-oss-process=image/crop,x_44,y_25,w_408,h_408" width="40" height="40">
          </div>
          <div class="logo-right">
              <p>沈师修改</p>
              <p>1119修改</p>
          </div>
        </div> -->
        <el-menu
          :default-active="index==''?'1':index"
          class="el-menu-vertical-demo"
          ref="dataNum"
        >
          <!-- <el-menu-item index="1" @click="openPage('Develop')">
            <span slot="title">首页</span>
          </el-menu-item> -->
          <!-- <el-menu-item index="2" @click="openPage('Results')">
            <span slot="title">育人成效</span>
          </el-menu-item> -->
          <el-menu-item index="3" @click="openPage('launch')">
            <span slot="title">课程开展</span>
          </el-menu-item>
          <!-- <el-menu-item index="4" @click="openPage('practice')">
            <span slot="title">社会实践</span>
          </el-menu-item> -->
          <el-menu-item index="5" @click="openPage('participation')">
            <span slot="title">参与情况</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGFzc3Jvb20tc3RhdGlzdGljcyIsImlzcyI6Imh0dHBzOi8vY2xhc3MtbXMtdGVzdC51bml2dGVhbS5jb20iLCJpZCI6IjY0IiwibmFtZSI6ImFub255bW91cyIsInBpZCI6IjE2OTUiLCJwdXJsIjoiY3NwdDExMTkiLCJuYmYiOjE1NzcyNTY3MDEsImV4cCI6MTU3NzI2MDMwMSwiaWF0IjoxNTc3MjU2NzAxfQ.5ZDZAAv69_jRPUWHsklrJRK7AzChSxXZtN6zvaQWcN4",
      url: "https://class-ms-test.univteam.com/",
      logo: [],
      index: "",
      dataToken: "",
      PlatDetail:[],

    };
  },
  methods: {
    //获取学校logo,名称
    GetPlatDetail(){
      var _this = this;
      axios
        .get(
          _this.url + "/api/Plat/plat/detail?access_token=" + _this.token
        )
        .then(function(response) {
          _this.PlatDetail=response.data.data
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    openPage(pages, index) {
      var routeId = this.$route.params.id;
      this.$router.push(pages);
      // this.index=index;
    },
    openHref() {
      var Pageurl = window.location.href;
      var hash = window.location.hash;
      var list = hash.split("/");
      var url = list[2];
      if (url == "Develop") {
        this.index = "1";
      } else if (url == "Results") {
        this.index = "2";
      } else if (url == "launch") {
        this.index = "3";
      } else if (url == "practice") {
        this.index = "4";
      }else if(url == "participation"){
        this.index = "5";
      }
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
      var tokenStr = localStorage.getItem("token");
      if (tokenStr !== null) {
        this.token = tokenStr;
        var token = tokenStr;
        var Start = "";
        var End = "";
        var Unit = 0;
        var Grade = 0;
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
            localStorage.setItem("token", token);
            var Start = "";
            var End = "";
            var Unit = 0;
            var Grade = 0;
          })
          .catch(function(error) {
            // window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
            console.log("数据加载失败");
          });
      }
    }
  },
  mounted() {
    this.openHref();
    this.getToken();
    this.GetPlatDetail();
  }
};
</script>
<style scoped>
div {
  float: left;
  width: 180px;
  height: calc(100vh - 0px);
  background: #072439;
  overflow: hidden;
}
.el-submenu__title,
.el-menu-item {
  color: rgba(255, 255, 255, 0.5);
  height: 48px;
  font-size: 15px;
  line-height: 48px;
}
.el-menu {
  background: #242736;
  color: #fff;
  margin-right: -2px;
}
.el-menu-item.is-active {
  color: white;
}
.el-menu-item.is-active:before {
  position: absolute;
  left: 0;
  top: 56%;
  height: 24px;
  width: 4px;
  background: #ffffff;
  transform: translateY(-50%);
  content: "";
}
.el-menu-item.is-active span:after {
  content: "";
  width: 10px;
  height: 10px;
  background: #ffffff;
  position: absolute;
  right: 0;
  top: 50%;
  transform: rotate(45deg);
  margin-top: -5px;
  margin-right: -5px;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: #5b6f7e;
}
.el-submenu .el-menu-item {
  overflow: hidden;
}
.el-menu {
  background-color: #072439;
}
.el-submenu .el-menu {
  overflow: hidden;
}
.el-menu-vertical-demo span {
  margin-left: 10px;
}
.el-menu-item:after {
  position: absolute;
  left: 25px;
  bottom: 0;
  right: 10px;
  height: 1px;
  background: #aaaaaa;
  content: "";
  transform: scaleY(0.2);
}
.school-sublogo {
  display: flex;
  justify-content: space-between;
  margin: 0px 10px;
  margin-top: 10px;
  padding-left: 4px;
  font-size: 14px;
  color: #fff;
}
.school-content{
  position: relative;
  margin-bottom: 0.1rem;
}
.websiteTitle::after {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #aaaaaa;
  content: "";
  transform: scaleY(0.2);
}
.school-sublogo img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-top: 2px;
}
.icon-logo {
  font-size: 16px;
}
.school-sublogo span {
  margin-top: 5px;
}
.websiteTitle{
  font-size: 0.13rem;
  color: #fff;
  opacity: 0.5;
  text-align: center;
}
</style>
