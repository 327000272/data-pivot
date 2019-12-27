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
      // token:
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGFzc3Jvb20tc3RhdGlzdGljcyIsImlzcyI6Imh0dHBzOi8vY2xhc3MtbXMtdGVzdC51bml2dGVhbS5jb20iLCJpZCI6IjY0IiwibmFtZSI6ImFub255bW91cyIsInBpZCI6IjE2OTUiLCJwdXJsIjoiY3NwdDExMTkiLCJuYmYiOjE1NzczNjU5NjAsImV4cCI6MTU3NzM2OTU2MCwiaWF0IjoxNTc3MzY1OTYwfQ.lptm6eA3_NnNW7WCV75tFnEhcsS2JIx_e4woMlM8mkU",
      url: "https://class-ms-test.univteam.com/",
      logo: [],
      index: "",
      dataToken: "",
      PlatDetail:[],
      Token:"",
      sessionToken:'',
      platform:'',
    };
  },
  methods: {
    //首先判断浏览器缓存中有没有token,如果有token,把token带入函数并执行
      whetherToken(){
          var _this=this;
          var hash=window.location.hash;
				  var list=hash.split("/");
          _this.platform=list[1];
           _this.sessionToken=sessionStorage.getItem("token");
          //把每个调用的接口都写在此方法中,需要在接口中加token
          if(_this.sessionToken!==null){
            //不为null,本地已经存在token,调用方法
            _this.GetPlatDetail(_this.sessionToken);
          }else{
            //判断路径上有无参数,
             _this.postToken();
          }

      },
      //请求token并且保存token
			postToken(){
        var _this=this;
          var hash=window.location.hash;
				  var list=hash.split("/");
				  var platform=list[1];//平台
        var t=this.$route.query.t;
        if(!t){
           window.location.href=" http://class-admin.univteam.com/"+platform+"/account/login?back=statistics";
        }
				axios.post(_this.url+'api/Authorize/token',{
						token: t
        })
				.then(function (response) {
          // _this.Token=response.data.access_token;
          _this.sessionToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGFzc3Jvb20tc3RhdGlzdGljcyIsImlzcyI6Imh0dHBzOi8vY2xhc3MtbXMtdGVzdC51bml2dGVhbS5jb20iLCJpZCI6IjEwODE3MjkiLCJuYW1lIjoiYW5vbnltb3VzIiwicGlkIjoiMTY5NSIsInB1cmwiOiJjc3B0MTExOSIsIm5iZiI6MTU3NzQyNTM4OCwiZXhwIjoxNTc3NDI4OTg4LCJpYXQiOjE1Nzc0MjUzODh9.KVNx8uJ3R6TYunlSvAjs-UW4ON55t2ULeYYjUz8LBaw',
          //将token写入到浏览器缓存中
          sessionStorage.setItem("token", _this.sessionToken);	
           _this.GetPlatDetail(_this.sessionToken);
				})
				.catch(function (error) {
          console.log('请求失败')
        });
        
      },
    //获取学校logo,名称
    GetPlatDetail(token){
      var _this = this;
      axios
        .get(
          _this.url + "api/Plat/plat/detail?access_token=" + token
        )
        .then(function(response) {
          _this.PlatDetail=response.data.data
        })
        .catch(function(error) {
          sessionStorage.removeItem("token");//清除失效的token
          window.location.href=" http://class-admin.univteam.com/"+_this.platform+"/account/login?back=statistics";
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
  },
  mounted() {
    this.openHref();
    // this.GetPlatDetail();
    this.whetherToken();
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
