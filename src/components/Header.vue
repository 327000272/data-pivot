<template>
	<div class="head">
		 <div class="header-left">
            <div class="school-logo">
                <div>
                    <img src="https://img1-static.univteam.com/ClassAdmin/cspt1119/Images/2019/04/04/20190404174505.jpeg?x-oss-process=image/crop,x_44,y_25,w_408,h_408" width="40" height="40">
                </div>
                <div class="logo-right">
                    <p>沈师</p>
                    <p>1119</p>
                </div>
            </div>
            <div class="header-nav" id="header"><span><a data-name="管理功能" href="/cspt1119/pivotacty/roomActy" data-url="/cspt1119/pivotacty/roomActy" class="secondclass  active">管理功能</a></span><span><a data-name="数据透视" href="/cspt1119/pivotacty/roomActy" data-url="/cspt1119/pivotacty/roomActy" class="secondclass">数据透视</a></span></div>
        </div>
		<div class="userName">
			<el-dropdown trigger="click" @command="handleCommand">  
				<span class="el-dropdown-link" style="color: white;" @click="show = !show">
                      <img src="https://img1-static.univteam.com/ClassAdmin/cspt1119/Images/2019/04/04/20190404174505.jpeg?x-oss-process=image/crop,x_44,y_25,w_408,h_408" onerror="javascript:this.src='https://img1-static.univteam.com/ClassAdmin/cspt1119/Images/2019/04/04/20190404174505.jpeg?x-oss-process=image/crop,x_44,y_25,w_408,h_408'">
  					  ADMIN<i class="el-icon-arrow-down el-icon--right"></i>
  				</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>附件上传</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
                show : false,
            }
		},        
	}
</script>

<style scoped>
.head {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 56px;
    margin-bottom: 4px;
    background: linear-gradient(to right, #4AD4B3 0%, #01C7D8 25%, #20A8D9 50%, #7672ED 75%, #AE54E1 100%);
    display:flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    line-height: 1.4;
    }
.logo-right{
    font-size:14px;
}
.logo {
    float: left;
    width: 240px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: white;
    font-size: 20px;
    cursor: pointer;
}
.userName {
    float: right;
    width: 150px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: white;
    cursor: pointer;
}
.header-left, .header-right {
    display: flex;
    align-content: center;
    overflow: hidden;
}
.school-logo {
    width: 180px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    overflow: hidden;
}
.school-logo .logo-right {
    margin-left: 10px;
}
.header-nav {
    display: flex;
    align-items: center;
}
.header-nav span {
    padding: 0 35px;
    height: 25px;
    position: relative;
    display: block;
}
.header-nav span:before {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: #FFFFFF;
    content: '';
    transform: scaleX(0.3);
}
.header-nav a.active {
    background: #FFFFFF;
    color: #17B1D9;
    border-radius: 3px;
}
.header-nav a {
    height: 25px;
    display: flex;
    font-size: 18px;
    color: #FFFFFF;
    align-items: center;
    text-decoration: none;
    padding: 0 5px;
}
.el-dropdown-link img {
    width: 30px;
    height: 30px;
    display: block;
    margin-right: 10px;
    border-radius: 100%;
}
.el-dropdown-link{
    height: 56px;
    display: flex;
    position: relative;
    align-items: center;
    padding: 0 15px;
    color: #FFFFFF;
    text-decoration: none;
        outline: none;
}
.el-dropdown-menu{
    position: absolute;
    width: 124px;
    background: #F5F5F5;
    border-left: #CCCCCC 1px solid;
    border-right: #CCCCCC 1px solid;
    z-index: 10;
    padding:0;
    overflow:hidden;
    top:44px !important;
}
.el-dropdown-menu__item{
    height: 40px;
    line-height: 40px;
    color: #666666;
    text-align: center;
    border-bottom: #CCCCCC 1px solid;
    cursor: pointer;
}

</style>
