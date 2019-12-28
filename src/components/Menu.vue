<template>
  <div class="sidebar">
    <el-row class="tac">
      <el-col :span="12">
        <ul class="school-content">
          <li class="school-sublogo">
            <img :src="PlatDetail.logo" class="icon-logo" />
            <span class="platName-box">
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
      url: "https://classroom.univteam.com/",
      back_url:"http://class-admin.univteam.com/",
      logo: [],
      index: "",
      dataToken: "",
      PlatDetail:[],
      Token:"",
      sessionToken:'',
      platform:'',
      res:'',
      debug:true
    };
  },
  methods: {
    //首先判断浏览器缓存中有没有token,如果有token,把token带入函数并执行
      whetherToken(){
          var _this=this;
          _this.platform = this.$route.params.id;
        switch(_this.platform){
          case 'whu':
            _this.url="http://app.dekt.whu.edu.cn/whu/Statistics/";
            _this.back_url="http://dekt.whu.edu.cn/whu/";
            break;
            default:
             _this.url="https://classroom.univteam.com/"+_this.platform+"/Statistics/";
            _this.back_url="http://class-admin.univteam.com/";
            break;
      }
          //在session 中获取token 如果存在直接使用 否则 调用获取token的方法
           _this.sessionToken=sessionStorage.getItem("token");
          //把每个调用的接口都写在此方法中,需要在接口中加token
          if(_this.sessionToken!==null){
            //不为null,本地已经存在token,调用方法
          _this.getInfos();
          }else{
            //判断路径上有无参数,获取token
             _this.postToken();
          }

      },
      tourl(){
        var _this=this;
        console.log(_this.sessionToken);
         //window.location.href=_this.back_url+_this.platform+"/account/login?back=statistics";
      },
      getInfos(){
        var _this = this;
        _this.GetPlatDetail(_this.sessionToken);
      },
      //请求token并且保存token
			postToken(){
        var _this=this;
        var t=this.$route.query.t;
        if(!t){
          //判断路径中是否存在code 不存在的话就跳转到admin 
          _this.tourl();
        }
        //t 存在 使用t 获取token
         var tokenurl= _this.debug?_this.url +"tokenTest":_this.url +"token?url=" +_this.platform +"&token=" +t;
         console.log(tokenurl);
				axios.post(tokenurl)
        .then(function (response) {
          var res=response.data.data;
          _this.res=response.data.data;
        if(res.access_token!=null){
        //获取token 成功
          _this.sessionToken=res.access_token;
          //将token写入到浏览器缓存中
          sessionStorage.setItem("token", _this.sessionToken);	
         _this.getInfos();
          }else{
            console.log("token获取失败");
            if(_this.res.err=="无效的校验结果"){
              _this.tourl();
            }
          }
				})
				.catch(function (error) {
            _this.tourl();
          console.log('请求失败')
        });
      },
    //获取学校logo,名称
    GetPlatDetail(token){
      var _this = this;
      console.log(_this.url + "plat_detail?access_token=");
      axios.get(_this.url + "plat_detail?access_token=" + token)
        .then(function(response) {
          if(response.data.code==0){
            _this.PlatDetail=response.data.data;
          }else{
            //_this.tourl();
          }
        })
        .catch(function(error) {
          sessionStorage.removeItem("token");//清除失效的token
          //window.location.href=" http://class-admin.univteam.com/"+_this.platform+"/account/login?back=statistics";
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
  justify-content: space-around;
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
.websiteTitle:before {
  position: absolute;
  left: 10%;
  top: 3px;
  width: 80%;
  height: 2px;
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
  font-size: 15px;
  color: #fff;
  opacity: 0.5;
  text-align: center;
  position: relative;
    padding-top: 6px;
}
.platName-box{
  font-size: 0.12rem;
  color: #fff;
}
</style>
