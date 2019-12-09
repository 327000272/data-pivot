<template>
	<div class="fx-box">
		 <div class="fx-con">
			<div class="fx-title">第二课堂育人成效分析</div>
			<div class="fx-content">
			  <!-- 日期插件 -->
				<div class="block">
					<span class="demonstration">统计日期</span>
					<el-date-picker
					v-model="value1"
					type="daterange"
					range-separator="~"
					start-placeholder="开始日期"
					end-placeholder="结束日期" class="data-picker">
					</el-date-picker>
				</div>
				<!-- 日期插件 -->
				<div class="fx-scope"><span>学院范围</span>
					<el-select v-model="value2" placeholder="请选择">
						<el-option
							v-for="item in optionsTwo"
							:key="item.value"
							:label="item.name"
							:value="item.id">
						</el-option>
					</el-select>
				</div>
				<div class="fx-scope"><span>年级范围</span>
				    <el-select v-model="value3" placeholder="请选择">
						<el-option
							v-for="item in optionsOne"
							:key="item.value"
							:label="item.name"
							:value="item.id">
						</el-option>
					</el-select>
				</div>
				<!-- <div class="fx-scope"><span>学生范围</span>
				    <el-select v-model="value4" placeholder="请选择">
						<el-option
							v-for="item in optionsThree"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</div> -->
				<div class="fx-btn" @click='clickNum'>运算</div>
			</div>
		  </div>
		  <div class="fx-hr"></div>	
		   <!-- <div class="fx-tab">
			   <span class="tab1">数据透视</span>
			   <span class="tab2" @click="clickAlict">数据列表</span>
			   <span class="tab3" @click="clickAlict">积分发放</span>
		   </div> -->
		   <div class="launch-grid-box">
                <div class="launch-box-1">
                    <div class="launch-middle-box1">
							<div class="fxbox5-tit"><span></span><span>开课情况</span></div>
							<div class="launch-middle-box1-content">
								<div class="launch-box1-contant" v-for='item in classOpen' :key='item.id'>
									<div class="launch-circle">
										<div>{{item.data}}</div>
										 <div>{{item.unit}}</div>
									</div>
									<div class="launch-oblong">{{item.title}}</div>
								</div>
							</div>
					</div>
					<div class="launch-middle-box2">
                            <div class="fxbox5-tit"><span></span><span>参与情况</span></div>
							<div class="launch-middle-box1-content">
								<div class="launch-box1-contant" v-for='item in participation' :key='item.id'>
									<div class="launch-circle">
										<div>{{item.data}}</div>
										 <div>{{item.unit}}</div>
									</div>
									<div class="launch-oblong">{{item.title}}</div>
								</div>
							</div>
					</div>
					<div class="launch-middle-box3">
                           <div class="fxbox5-tit"><span></span><span>课程评价</span></div>
						   <div class="launch-middle-box2-content">
								<div class="launch-box1-contant" v-for='item in comment1' :key='item.id'>
									<div class="launch-circle">
										<div>{{item.data}}</div>
										 <div>{{item.unit}}</div>
									</div>
									<div class="launch-oblong">{{item.title}}</div>
								</div>
							</div>
							 <div class="assess" v-if='comment2data1!=="0%"'>
									<div class="assess-bfb">
										<div class="assess-bfb-box1" :style="{width:comment2data1}">{{comment2data1}}</div><div class="assess-bfb-box2" :style="{width:comment2data2}">{{comment2data2}}</div><div class="assess-bfb-box3" :style="{width:comment2data3}">{{comment2data3}}</div>
									</div>
                                    <div class="assess-font">
										<div :style="{width:comment2data1}">{{comment2title1}}</div><div :style="{width:comment2data2}">{{comment2title1}}</div><div :style="{width:comment2data3}">{{comment2title1}}</div>
									</div>
						    </div>
					</div>
				</div>
				<div class="launch-box-2">
					<div class="launch-box-2-content">
						<div class="develop-content-1">
                             <div class="fxbox5-tit"><span></span><span>各类课程开课情况</span></div>
							 <div v-if="linedatanum1.length&&linedatanum2.length&&linedatanum3.length&&linedatanum4.length&&linedatanum5.length" class="co-availability">没有课程体系，无法展示</div>
							 <div class="develop-box">
							     <div class="develop-box-li"><span class="deyu">德育</span><div class="develop-box-li-div develop-box-li-div1"><span :style="{'width':(linedatanum1==linedatanummax?'100%':linedatanum1/linedatanummax*100+'%')}"></span></div><span>{{linedatanum1}}</span></div>	 
								 <div class="develop-box-li"><span class="zhiyu">智育</span><div class="develop-box-li-div develop-box-li-div2"><span :style="{'width':(linedatanum2==linedatanummax?'100%':linedatanum2/linedatanummax*100+'%')}"></span></div><span>{{linedatanum2}}</span></div>	 
								 <div class="develop-box-li"><span class="tiyu">体育</span><div class="develop-box-li-div develop-box-li-div3"><span :style="{'width':(linedatanum3==linedatanummax?'100%':linedatanum3/linedatanummax*100+'%')}"></span></div><span>{{linedatanum3}}</span></div>	 
								 <div class="develop-box-li"><span class="meiyu">美育</span><div class="develop-box-li-div develop-box-li-div4"><span :style="{'width':(linedatanum4==linedatanummax?'100%':linedatanum4/linedatanummax*100+'%')}"></span></div><span>{{linedatanum4}}</span></div>	 
								 <div class="develop-box-li"><span class="laoyu">劳育</span><div class="develop-box-li-div develop-box-li-div5"><span :style="{'width':(linedatanum5==linedatanummax?'100%':linedatanum5/linedatanummax*100+'%')}"></span></div><span>{{linedatanum5}}</span></div>	 
							</div>	
							<p class="develop-box-p">各类课程开设数量</p>
						</div>
						 <div id="chart_example" style="height: 100%;width:70%;"></div>
					</div>
				</div>
		   </div>
	</div>
</template>

<script>
    import echarts from 'echarts'
    import axios from 'axios'
	export default {
		data() {
			return {
				 token:'',
                 value1: '',   //日期
                 value2:'',
                 value3:'',
                 optionsOne: [],
                 optionsTwo : [],
				 optionsThree : [],
				//  url:'http://api.statistics.univteam.ms',
				url:'https://class-ms-test.univteam.com',
				 classOpen:[
					 {
						data:"0",
						unit:"个",
						title:"开课数量"	
					 },
					 {
						 data:"0",
						unit:"个",
						title:"课程申报"	
					 },
					 {
						 data:"0",
						unit:"%",
						title:"审批通过率"	
					 },
					 {
						data:"0",
						unit:"小时",
						title:"平均审批时效"	
					 }
				 ],
				 participation:[
					 {
						data:"0",
						unit:"人次",
						title:"参与人次"	
					 },
					 {
						 data:"0",
						unit:"人",
						title:"参与人数"	
					 },
					 {
						 data:"0",
						unit:"%",
						title:"参与率"	
					 },
					 {
						data:"0",
						unit:"%",
						title:"供参比"	
					 }
				 ],
				 comment1:[
					 
				 ],
				 comment2:[],
				 comment2data1:'',
				 comment2data2:'',
				 comment2data3:'',
				 comment2title1:'',
				 comment2title2:'',
				 comment2title3:'',
				 supplySituation:'',
				 line:[],
				 linetitle:[],
				 linedate:[],
				 linedata1:[],
				 linedata2:[],
				 linedata3:[],
				 linedata4:[],
				 linedata5:[],
				 linedata6:[],
				 linedatanum1:0,
				 linedatanum2:0,
				 linedatanum3:0,
				 linedatanum4:0,
				 linedatanum5:0,
				 linedatanum6:0,
				 linedatanum:[],
				 linedatanummax:0
			}

		},
		created() {
			var self = this;
			self.fetchData();
		},
		watch:{
			'$route':'fetchData'
		},
		mounted() { //初始化
			this.getToken();
			this.$forceUpdate();
		},
		methods: {
			fetchData(){
           		console.log('路由发送变化doing...');
     		},
            // 点击出弹窗
                clickAlict(){
                   window.alert('敬请期待')
				},
			 getToken(){
				var _this=this;
				var url22=this.$route.params.id;
				var Pageurl=window.location.href;
				var hash=window.location.hash;
				var list=hash.split("/");
				var url=list[1];
				var dataToken="";
                var dataUrl= window.location.href;
                var tokenStr=sessionStorage.getItem("token");
				
				if(tokenStr!==null){
					this.token=tokenStr;
                    var token=tokenStr;
						var Start='';
						var End='';
						var Unit = 0;
						var Grade = 0;
						_this.getoptionsOne(token);
						_this.getclassOpen(token,Start,End,Unit,Grade);
						_this.getParticipation(token,Start,End,Unit,Grade);
						_this.getcomment(token,Start,End,Unit,Grade);
						_this.getLine(token,Start,End,Unit,Grade);
						return false;
                }
				if(dataToken==''){
					// window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
				}else{
						axios.post(_this.url+'/api/Authorize/token?url='+url22+'&token='+dataToken)
						.then(function (response) {
						_this.token = response.data.data.access_token;
						var token = _this.token;
						sessionStorage.setItem("token",token);
						var Start='';
						var End='';
						var Unit = 0;
						var Grade = 0;
						_this.getoptionsOne(token);
						_this.getclassOpen(token,Start,End,Unit,Grade);
						_this.getParticipation(token,Start,End,Unit,Grade);
						_this.getcomment(token,Start,End,Unit,Grade);
						_this.getLine(token,Start,End,Unit,Grade);
						})
						.catch(function (error) {
						// window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
							console.log('数据加载失败');
						});	 
				 }
				},
			  getoptionsOne(token){
                    //  option
					var _this=this;
                      axios.get(_this.url+'/api/Plat/options?access_token='+token)
                            .then(function (response) {
								if(response.data.code!==0){
									sessionStorage.removeItem("token");//清除失效的token
									window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
							}
                            _this.optionsOne = response.data.data.edus;
                            _this.optionsTwo = response.data.data.units;
                            })
                            .catch(function (error) {
								console.log(error);
                			});
				},
				getclassOpen(token,Start,End,Unit,Grade){
                    var _this=this;
                      axios.get(_this.url+'/api/Plat/course/condition?access_token='+token+'&Start='+Start+'&End='+End+'&Unit='+Unit+'&Grade='+Grade)
                            .then(function (response) {
								if(response.data.code!==0){
									sessionStorage.removeItem("token");//清除失效的token
									window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
							}
							  _this.classOpen=response.data.data;
                            })
                            .catch(function (error) {
                            	console.log(error);
                			});
				},
				getParticipation(token,Start,End,Unit,Grade){
                    var _this=this;
                      axios.get(_this.url+'/api/Plat/course/join?access_token='+token+'&Start='+Start+'&End='+End+'&Unit='+Unit+'&Grade='+Grade)
                            .then(function (response) {
								if(response.data.code!==0){
									sessionStorage.removeItem("token");//清除失效的token
									window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
							}
							  _this.participation=response.data.data;
                            })
                            .catch(function (error) {
                            	console.log(error);
               				 });
				},
				getcomment(token,Start,End,Unit,Grade){
                    var _this=this;
                      axios.get(_this.url+'/api/Plat/course/comment?access_token='+token+'&Start='+Start+'&End='+End+'&Unit='+Unit+'&Grade='+Grade)
                            .then(function (response) {
								if(response.data.code!==0){
									sessionStorage.removeItem("token");//清除失效的token
									window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
							}
								_this.comment1.push(response.data.data[0],response.data.data[1]);
								_this.comment2.push(response.data.data[2],response.data.data[3],response.data.data[4]);
								_this.comment2data1=response.data.data[2].data+response.data.data[2].unit;
								_this.comment2data2=response.data.data[3].data+response.data.data[4].unit;
								_this.comment2data3=response.data.data[3].data+response.data.data[4].unit;
								_this.comment2title1=response.data.data[2].title;
								_this.comment2title2=response.data.data[3].title;
								_this.comment2title3=response.data.data[4].title;
                            })
                            .catch(function (error) {
                            	console.log(error);
                			});
				},
			getLine(token,Start,End,Unit,Grade){
			   var _this=this;
			    axios.get(_this.url+'/api/Plat/course/line?access_token='+token+'&Start='+Start+'&End='+End+'&Unit='+Unit+'&Grade='+Grade)
						.then(function (response) {
							if(response.data.code!==0){
								sessionStorage.removeItem("token");//清除失效的token
								window.location.href=" http://class-admin.univteam.com/"+url22+"/account/login?back=statistics";
							}
						// _this.line = response.data.data;
						var data =  response.data.data;
						 var data=[{id:1,name:"思想成长类",datas:[{start:"2019-03-05",end:"2019-03-08",count:0},{start:"2019-03-05",end:"2019-03-08",count:0},{start:"2019-03-05",end:"2019-03-08",count:0}]},{id:2,name:"实践实习类",datas:[{start:"2019-03-05",end:"2019-03-08",count:0}]},{id:3,name:"志愿服务类",datas:[{start:"2019-03-05",end:"2019-03-08",count:0}]},{id:4,name:"学术科技类",datas:[{start:"2019-03-05",end:"2019-03-08",count:0}]},{id:5,name:"文体活动类",datas:[{start:"2019-03-05",end:"2019-03-08",count:0}]},{id:6,name:"工作履历类",datas:[{start:"2019-03-05",end:"2019-03-08",count:0}]}];
						for( let i of data){
								_this.linetitle.push(i.name);
								_this.line.push(i.datas)
							}
							for(let j of _this.line[0]){
								_this.linedata1.push(j.count);
								_this.linedatanum1+=j.count;
								_this.linedate.push(j.start+'~'+j.end);
							}
							for(let j of _this.line[1]){
								_this.linedata2.push(j.count);
								_this.linedatanum2+=j.count;
							}
							for(let j of _this.line[2]){
								_this.linedata3.push(j.count);
								_this.linedatanum3+=j.count;
							}
							for(let j of _this.line[3]){
								_this.linedata4.push(j.count);
								_this.linedatanum4+=j.count;
							}
							for(let j of _this.line[4]){
								_this.linedata5.push(j.count);
								_this.linedatanum5+=j.count;
							}
							for(let j of _this.line[5]){
								_this.linedata6.push(j.count);
								_this.linedatanum6+=j.count;
							}
							_this.linedatanum.push(_this.linedatanum1,_this.linedatanum2,_this.linedatanum3,_this.linedatanum4,_this.linedatanum5,_this.linedatanum6);
							_this.linedatanummax = Math.max.apply(null, _this.linedatanum);
							_this.getEcharts(_this.linedata1,_this.linedata2,_this.linedata3,_this.linedata4,_this.linedata5,_this.linedata6,_this.linedate,_this.linetitle);
						})
						.catch(function (error) {
							console.log(error);
						});
			},
			// 点击运算
			clickNum(){
				var _this=this;
				var Start=this.DateTimes(this.value1[0])!=''?this.DateTimes(this.value1[0]):'';
				var End=this.DateTimes(this.value1[1])!=''?this.DateTimes(this.value1[1]):'';
				var Unit = this.value2!=''?this.value2:0;
				var Grade = this.value3!=''?this.value3:0;
				var token = this.token;
				_this.getclassOpen(token,Start,End,Unit,Grade);
				_this.getParticipation(token,Start,End,Unit,Grade);
				_this.getcomment(token,Start,End,Unit,Grade);
				_this.getLine(token,Start,End,Unit,Grade);
			},
			// 处理时间戳
			DateTimes(id) {
					var result;
					var myDate = new Date(id);
					var yaer = myDate.getYear();        //获取当前年份(2位)
					var fullyaer = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
					var month = (myDate.getMonth() + 1);       //获取当前月份(0-11,0代表1月)
					var date = myDate.getDate();        //获取当前日(1-31)
					if (month < 10) { month = "0" + month; }
					if (date < 10) { date = "0" + date; }
					result = fullyaer.toString() + "-" + month + "-" + date;
					return result;
				},
		// 初始化echarts
		getEcharts(linedata1,linedata2,linedata3,linedata4,linedata5,linedata6,linedate,linetitle){
				var _this=this;
				//linedata1=[120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330];
				//linedate=['3/4~3/10','3/11~3/17','3/4~3/10','3/10~3/17','3/10~3/17','3/10~3/17','3/10~3/17','3/10~3/17','3/10~3/17','3/10~3/17','3/10~3/17','3/10~3/17'];
				//linedata2=[100, 182, 191, 234, 290, 330, 310,201, 154, 190, 330, 410];
				let myChart = echarts.init(document.getElementById('chart_example')); 
				var fontColor = '#30eee9';
	let option ={
		grid: {
	        left: '5%',
            right: '10%',
            top:'20%',
	        bottom: '15%',
	        containLabel: true
		},
		dataZoom :[{
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
			filterMode: 'filter',
			handleSize: 8,
			start: 0,
            end: 80,
        }],
		tooltip : {
			show: true,
			trigger: 'item'
		},
		legend: {
			show:true,
			x:'center',
			y:'35',
			icon: 'stack',
			width:'100%',
			itemGap:80,
			itemWidth:10,
			itemHeight:10,
			textStyle:{
				color:'rgba(255,255,255,.5)',
				fontSize:14
			},
			data:linetitle
		},
		xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            axisLabel:{
					color: 'rgba(255,255,255,0.5)',
				    formatter:function(val){  
						var a=val.split("~");
						if(a.length==2){
						return a[0]+"\n"+"~\n"+a[1];
						}else{
							return a[0]+"\n"+"~";
						}
						
					} 
	            },
	            axisLine:{
               		show:true,
               		lineStyle:{
		            	color:'rgba(255,255,255,.1)'
		            }
				},
				axisTick:{
	            	show:false,
	            },  
	            splitLine:{
	            	show:true,
		            lineStyle:{
		            	color:'rgba(255,255,255,.4)'
		            }
				},
				axisPointer:{
					show:true,
				},
				// data : ['3/4~3/10','3/11~3/17','3/4~3/10','3/10~3/17','3/10~3/17','3/10~3/17','3/10~3/17','3/10~3/17','3/10~3/17','3/10~3/17','3/10~3/17','3/10~3/17']
				data:linedate
	        }
	    ],
	    yAxis : [
			{
				type : 'value',
				min:0,
				splitNumber:10,
				axisLabel : {
					// formatter: '{value}',
					textStyle:{
						color:'rgba(255,255,255,0.5)'
					}
				},
				axisLine:{
					lineStyle:{
						color:'rgba(255,255,255,.1)'
					}
				},
				axisTick:{
	            	show:false,
	            },
				splitLine:{
					show:true,
					lineStyle:{
						color:'rgba(255,255,255,.4)'
					}
				}
			}
		],
		series : [
			{
				name:linetitle[0],
				type:'line',
				// stack: '总量',
				symbol:'circle',
				symbolSize: 3,
				showSymbol: false,
	            itemStyle: {
			        normal: {
						color:'rgba(82,243,151,.8)',
			            lineStyle: {
							color: "rgba(82,243,151,.5)",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(82,243,151,.1)'
							}, {
								offset: 1,
								color: 'rgba(82,243,151,0.9)'
							}]),
			            }
			        }
				},
				markPoint:{
					itemStyle:{
						normal:{
							color:'red'
						}
					}
				},
				// data:[120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
				data:linedata1
			},
			{
				name:linetitle[1],
				type:'line',
				// stack: '总量',
				symbol:'circle',
				showSymbol: false,
				symbolSize: 3,
	            itemStyle: {
			        normal: {
			            color:'rgba(0,227,231,.8)',
			            lineStyle: {
							color: "rgba(0,227,231,.5)",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(0,227,231,.1)'
							}, {
								offset: 1,
								color: 'rgba(0,227,231,0.9)'
							}]),
			            }
			        }
				},
				// data:[100, 182, 191, 234, 290, 330, 310,201, 154, 190, 330, 410]
					data:linedata2
			},
			{
				name:linetitle[2],
				type:'line',
				// stack: '总量',
				symbol:'circle',
				symbolSize: 3,
				showSymbol: false,
	            itemStyle: {
			        normal: {
			            color: 'rgba(0,197,255,.8)',
			            lineStyle: {
							color: "rgba(0,197,255,.5)",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(0,197,255,.1)'
							}, {
								offset: 1,
								color: 'rgba(0,197,255,0.9)'
							}]),
			            }
			        }
				},
				// data:[130, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190]
					data:linedata3
			},
			{
				name:linetitle[3],
				type:'line',
				// stack: '总量',
				symbol:'circle',
				showSymbol: false,
				symbolSize: 3,
	            itemStyle: {
			        normal: {
			            color: 'rgba(71,140,239,.8)',
			            lineStyle: {
							color: "rgba(71,140,239,.5)",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(71,140,239,.1)'
							}, {
								offset: 1,
								color: 'rgba(71,140,239,0.9)'
							}]),
			            }
			        }
				},
				// data:[50, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190]
		       	data:linedata4
			},
			{
				name:linetitle[4],
				type:'line',
				// stack: '总量',
				symbol:'circle',
				symbolSize: 3,
				showSymbol: false,
	            itemStyle: {
			        normal: {
			            color: 'rgba(162,67,218,.8)',
			            lineStyle: {
							color: "rgba(162,67,218,.5)",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(162,67,218,.1)'
							}, {
								offset: 1,
								color: 'rgba(162,67,218,0.9)'
							}]),
			            }
			        }
				},
				// data:[90, 200, 201, 154, 190, 330, 410,150, 232, 201, 154, 190]
					data:linedata5
			},
			{
				name:linetitle[5],
				type:'line',
				// stack: '总量',
				symbol:'circle',
				symbolSize: 3,
				showSymbol: false,
	            itemStyle: {
			        normal: {
			            color: 'rgba(215,47,167,.8)',
			            lineStyle: {
							color: "rgba(215,47,167,.5)",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(215,47,167,.1)'
							}, {
								offset: 1,
								color: 'rgba(215,47,167,0.9)'
							}]),
			            }
			        }
				},
				// data:[30, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190]
					data:linedata6
			},
		]
	};
				myChart.setOption(option);
				window.onresize = myChart.resize;
			}
		}
	}
</script>
<style>
 .data-picker input{
	background-color: #213c50 !important;
	color: #c4cbd1;
}
.data-picker .el-range__icon{
	display: none;
}
.data-picker 	.el-range-separator{
	color: #c4cbd1;
}
.fx-scope input{
	border: none;
	background: #213c50;
	color: #ffffff;
}
.el-date-editor .el-range-input{
	color:#ffffff;
}
</style>
<style  scoped>
 	.fx-box{
		/* padding: 20px  30px; */
		min-width: 1200px;
		min-height: 900px;
		height: 100%;
		box-sizing: border-box;
		padding: 0 2%;
		padding-top: 20px;
	}
	.fx-con{
       display:flex;
		align-items:center; 
	}
	.fx-title{
		font-size: 22px;
		color: white;
		width: 28%;
		min-width: 223px;
	}
	.fx-content{
		display:flex;
		align-items:center; 
		justify-content: space-between;
	}
	.demonstration{
		color: #5b6f7e;
		background: #213c50;
		line-height: 40px;
		text-align: center;
		margin-right: 2px;
		min-width: 100px;
	}
	.block{
        height: 40px;
		display: flex;
		margin-right: 25px;
		width: 40%;
	}
	.data-picker{
		border-radius:0; 
		background: #213c50;
		border: none;
		color: #fff;
	}
	.fx-scope{
		display: flex;
		height: 40px;
		width: 22%;
		margin-right: 2%;
	}
	.fx-scope span{
		min-width: 100px;
		color: #5b6f7e;
	background: #213c50;
		line-height: 40px;
		text-align: center;
		margin-right: 2px;
	}
	.fx-scope input{
        border: none;
		color: white;
		padding-left:10px;
		margin-right: 25px;
			background-color: #213c50;
	}
	.fx-btn{
		color:white;
		border: 1px white solid;
		height: 40px;
		min-width: 70px; 
		box-sizing:border-box;
		line-height: 36px;
		text-align: center;
	}
	.fx-hr{
		height: 1px;
		width: 100%;
		background: #415869;
		margin-top: 20px;
	}
	.fx-tab{
		width: 95%;
		margin: 0px 48px;
		height: 4%;
		display: flex;
		align-items: center;
		position: relative;
		margin: 1% 0;
}
	.fx-tab span{
		height: 100%;
		width: 8%;
		color: #8E8E93;
		background: rgba(256,256,256,.2);
		margin-right: 0.1%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		border:1px solid rgba(256,256,256,.2);
		cursor:pointer;
		font-size: 15px;
	}
	.fx-tab .tab1{
		border-radius: 30px 0 0 30px;
		background: rgba(0,0,0,.2) !important;
		position: absolute;
		left:0;
		color:#fff;
	}
	.tab2{
		position: absolute;
		left: 8%;
	}
	.tab3{
		border-radius: 0px 30px 30px 0px;
		position: absolute;
		left: 16%;
	}
	.launch-grid-box{
		width: 100%;
		height: calc(100% - 81px - 6%);
	}
	.launch-box-1{
		height: 45%;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.launch-box-2{
		margin-top: 1%;
		height: 53%;
		width: 100%;
	}
	.launch-middle-box1,.launch-middle-box2,.launch-middle-box3{
		width: 32.7%;
		background: #153146;
	}
	.fxbox5-tit span:nth-child(1){
		width: 5px;
		height: 16px;
		background: #FFFFFF;
	}
	.fxbox5-tit span:last-child{
		font-size: 16px;
		color: #fff;
		line-height: 16px;
		margin-left: 10px;
	}
	.fxbox5-tit{
		display: flex;
		margin-top: 10px;
	}
	.launch-circle{
		width: 100px;
		height: 100px;
		color: #00c5ff;
		border: 2px solid #00C5FF;
		border-radius: 50%;
		text-align: center;
		padding-top: 27%;
		box-sizing: border-box;
		font-size: 24px;
	}
	.launch-box1-contant:nth-of-type(even){
		/* margin-left: 25%; */
		float: right;
	}
	.launch-circle :nth-child(2){
		font-size: 14px;
		color: #fff;
	}
	.launch-oblong{
		width: 100px;
		height: 30px;
		text-align: center;
		border: 2px solid #00C5FF;
		border-radius: 5px;
		font-size: 14px;
		color: #00C5FF;
		position: absolute;
		top: 81px;
		background: #153146;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.launch-box1-contant{
		position: relative;
		float: left;
		margin-bottom: 15%;
	}
	.launch-middle-box1-content{
		width: 50%;
		margin: 0 auto;
		height: 80%;
		padding-top: 5%;
		box-sizing: border-box;
	}
	.launch-middle-box2-content{
		width:50%;
		margin: 0 auto;
		height: 40%;
		padding-top: 5%;
		box-sizing: border-box;
	}
	.assess{
		height: 40%;
		padding-top: 8%;
	}
	.assess-bfb{
		height: 30%;
		width: 70%;
		margin: 0 auto;
		display: flex;
		text-align: center;
		color: #fff;
		box-sizing: border-box;
		font-size: 16px;
	}
	.assess-bfb-box1{
		background: #00C5FF;
		border: 1px solid #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.assess-bfb-box2{
		background: rgba(0,197,255,.5);
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(255,255,255,.5)
	}
	.assess-bfb-box3{
		background: rgba(0,197,255,.2);
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(255,255,255,.2)
	}
	.assess-font{
		width: 70%;
		color: #fff;
		font-size: 14px;
		display: flex;
		margin: 0 auto;
		margin-top: 2.5%;
		text-align: center;
	}
	.launch-box-2-content{
		height: 97%;
		background: #153146;
		overflow: hidden;
		display: flex;
	}
	.develop-content-1{
		height: 100%;
		width: 30%;
		position: relative;
	}
	.develop-box{
		width: 90%;
		margin: 0 auto;
		height: 70%;
		overflow: auto;
		margin-top: 7%;
	}
	.develop-box-li{
	height: 13%;
		margin: 0 auto;
		width: 80%;
	background: rgba(255,255,255, .08);
	margin-bottom: 2%;
	display: flex;
	align-items: center;
	font-size: 14px;
	color: rgba(255,255,255, .5);
	}
	.develop-box-li span{
		width: 20%;
		text-align: center;
	}
	.develop-box-li-div{
		width: 80%;
		height: 100%;
	}
	.develop-box-li-div span{
		display: inline-block;
		height: 100%;
	}
	.develop-box-p{
		width: 72%;
		margin: 0 auto;
		color: rgba(255,255,255, .5);
		font-size: 14px;
	}
	@media (min-width: 1000px) {
		.launch-middle-box1-content{
			width: 60%;
		}
		.launch-middle-box2-content{
			width: 60%;
		}
	} 
	@media (min-width: 1280px) {
		.launch-middle-box1-content{
				width: 60%;
		}
		.launch-middle-box2-content{
				width: 60%;
		}
	} 
	@media (min-width: 1440px) {
		.launch-middle-box1-content{
				width: 60%;
		}
		.launch-middle-box2-content{
				width: 60%;
		}
	} 
	@media (min-width: 1680px) {
		.launch-middle-box1-content{
				width: 50%;
		}
		.launch-middle-box2-content{
				width: 50%;
		}
	} 
	@media (min-width: 1920px) {
		.launch-middle-box1-content{
			width: 50%;
		}
		.launch-middle-box2-content{
			width: 50%;
		}
	} 

	.develop-box-li-div1 span{
		background: rgba(82,243,151,.8);
	}
	.develop-box-li-div2 span{
		background: rgba(0,227,231,.8);
	}
	.develop-box-li-div3 span{
		background: rgba(0,197,255,.8);
	}
	.develop-box-li-div4 span{
		background: rgba(71,140,239,.8);
	}
	.develop-box-li-div5 span{
		background: rgba(162,67,218,.8);
	}
	.develop-box-li-div6 span{
		background: rgba(215,47,167,.8);
	}
	.deyu{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.co-availability{
		text-align:center;
		background:#8A98A3;
		width:230px;
		height:50px;
		color:#fff;
		border-radius: 15px;
		margin: 150px auto; 
		line-height:50px; 
		position: absolute;
		margin: auto;
		top: -92px;
		left: 0;
		bottom: 0;
		right: 0; 
	}
</style>
