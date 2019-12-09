<template>
	<div>
		<el-row class="tac">
			<el-col :span="12">
        <ul>
          <li class="school-sublogo">
            <img :src='logo.photo' class="icon-logo"> 
            <span>
                <p>{{logo.name}}</p>
                <!-- <p>素质育人大数据</p> -->
            </span>
          </li>
        </ul>
				<el-menu :default-active="index==''?'1':index" class="el-menu-vertical-demo"  @close="handleClose"  ref="dataNum">
            <el-menu-item index="1" @click="openPage('Develop')">
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2" @click="openPage('Results')">
              <span slot="title">育人成效</span>
            </el-menu-item>
              <el-menu-item index="3" @click="openPage('launch')">
              <span slot="title">课程开展</span>
            </el-menu-item>
              <el-menu-item index="4" @click="openPage('practice')">
                <span slot="title">社会实践</span>
            </el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import axios from 'axios'
	export default {
      data() {
           return {
              logo:[],
              index:'',
              dataToken:''
                }
            },
		methods: {
        //获取平台基础信息
				getLogo(token,Start,End,Unit,Grade){
				var _this=this;
		 		 axios.get('https://class-ms-test.univteam.com/api/Plat/info/?access_token='+token+'&Start='+Start+'&End='+End+'&Unit='+Unit+'&Grade='+Grade)
						.then(function (response) {
							// if(response.data.code!==0){
							// localStorage.removeItem("token");//清除失效的token
							// window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
							// }
							_this.logo=response.data.data;
              console.log(response.data.data)
						})
						.catch(function (error) {
              
					  	console.log(error);
			      });
			}, 
			handleOpen(defaultactive) {

			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			openPage(pages,index) {
        var routeId= this.$route.params.id;
        this.$router.push(pages);
        // this.index=index;
      },
      openHref(){
        var Pageurl=window.location.href;
				var hash=window.location.hash;
				var list=hash.split("/");
        var url=list[2];
        console.log(url)
        if(url=='Develop'){
          this.index='1'
        }else if(url=='Results'){
           this.index='2'
        }else if(url=='launch'){
          this.index='3'
        }else if(url=='practice'){
          this.index='4'
        }
      },
      // getToken(){
      //   var dataUrl= window.location.href;
      //   console.log(this.dataToken)
			// 	if(dataUrl.split("?")[1]){
      //      this.dataToken=dataUrl.split("?")[1].substr(2);
      //       console.log(this.dataToken)
			// 	}
      // }
        getToken(){
          var _this=this;
          var url22=this.$route.params.id;
          var Pageurl=window.location.href;
          var hash=window.location.hash;
          var list=hash.split("/");
          var url=list[1];
          var dataToken="";
          var dataUrl= window.location.href;
          var tokenStr=localStorage.getItem("token");
          if(tokenStr!==null){
            this.token=tokenStr;
              var token=tokenStr;
              var Start='';
              var End='';
              var Unit = 0;
              var Grade = 0;
              _this.getLogo(token,Start,End,Unit,Grade);
              return false;
          }
          if(dataToken==''){
            // window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
          }else{
              axios.post(_this.url+'/api/Authorize/token?url='+url22+'&token='+dataToken)
          
              .then(function (response) {
              _this.token = response.data.data.access_token;
              var token = _this.token;
              localStorage.setItem("token",token);
              var Start='';
              var End='';
              var Unit = 0;
              var Grade = 0;
            _this.getLogo(token,Start,End,Unit,Grade);
              })
              .catch(function (error) {
              // window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
                console.log('数据加载失败');
            });	 
          }
				},
    },
    mounted(){
       this.openHref();
       this.getToken();
    }
	}
</script>
<style scoped>
	div {
		float: left;
		width: 180px;
		height: calc(100vh - 0px);
    background:#072439;
    overflow: hidden;
	}
  .el-submenu__title , .el-menu-item {
    color: rgba(255,255,255,.5);
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
    background: #FFFFFF;
    transform: translateY(-50%);
    content: '';
  }
  .el-menu-item.is-active span:after {
    content: '';
    width: 10px;
    height: 10px;
    background: #FFFFFF;
    position: absolute;
    right: 0;
    top: 50%;
    transform: rotate(45deg);
    margin-top: -5px;
    margin-right: -5px;
  }
  .el-menu-item:focus, .el-menu-item:hover {
    background-color:#5b6f7e;
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
    background: #AAAAAA;
    content: '';
    transform: scaleY(.2);
  }
  .school-sublogo {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 16px 10px;
    color: #5b6f7e;
    padding-left: 4px;
    padding-bottom: 20px;
    font-size: 14px;
  }
  .school-sublogo:after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #AAAAAA;
    content: '';
    transform: scaleY(.2);
  }
  .school-sublogo img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-top: 2px;
  }
.icon-logo{
  font-size: 16px;
  
}
.school-sublogo span{
  margin-top:5px; 
}
</style>
