<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick" style="margin: 20px;">

			<!--创建考试-->
			<el-tab-pane label="创建考试" name="first" :disabled="first_tabs">
				<div class="first_tabs">

					<el-form :model="fromData" label-width="80px">
						<el-form-item label="活动名称">
							<el-input v-model="fromData.name"></el-input>
						</el-form-item>

						<el-row>
							<el-col :span="12">
								<el-form-item label="考试时长">
									<el-input v-model="fromData.duration"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="考试次数">
									<el-input v-model="fromData.frequency"></el-input>
								</el-form-item>
							</el-col>
						</el-row>

						<el-form-item label="练习模式">
							<el-radio-group v-model="fromData.pattern">
								<el-radio label="是"></el-radio>
								<el-radio label="否"></el-radio>
							</el-radio-group>
						</el-form-item>

						<el-form-item label="选择组织">
							<el-select v-model="fromData.organize" style="width: 100%;">
								<el-option label="组织1" value="1"></el-option>
								<el-option label="组织2" value="2"></el-option>
							</el-select>
						</el-form-item>

						<el-form-item label="选择对象">
							<el-select v-model="fromData.obj" style="width: 100%;">
								<el-option label="对象1" value="1"></el-option>
								<el-option label="对象2" value="2"></el-option>
							</el-select>
						</el-form-item>

						<el-form-item label="选择题库">
							<el-input placeholder="请输入内容" v-model="fromData.questions" class="input-with-select">
								<el-button slot="append" @click="selectQuestions">题库</el-button>
							</el-input>
						</el-form-item>

						<el-form-item label="开始时间">
							<el-col :span="24">
								<el-date-picker type="date" placeholder="选择日期" v-model="fromData.startTime" style="width: 100%;"></el-date-picker>
							</el-col>
						</el-form-item>

						<el-form-item label="结束时间">
							<el-col :span="24">
								<el-date-picker type="date" placeholder="选择日期" v-model="fromData.endTime" style="width: 100%;"></el-date-picker>
							</el-col>

						</el-form-item>
					</el-form>

					<el-button type="primary" class="_btn" @click="down">下一步</el-button>
					<el-button type="danger" class="_btn" @click="cancel">取消</el-button>
				</div>
			</el-tab-pane>

			<!--试卷设置-->
			<el-tab-pane label="试卷设置" name="second" :disabled="second_tabs">
				<div class="second_tabs">

					<el-form label-width="80px">

						<!--题库表头-->
						<ul class="_content _head">
							<li>题库名称</li>
							<li>单选</li>
							<li>多选</li>
							<li>判断</li>
							<li>题库占比</li>
						</ul>

						<!--题库列表-->
						<ul class="_content" v-for="(item,index) in dataList">
							<li>{{item.name}}</li>
							<li>总数: {{item.radiosSum}}
								<el-input v-model="dataModel.data[index].ipt1" class="ipt"></el-input>
							</li>
							<li>总数: {{item.checkboxsSum}}
								<el-input v-model="dataModel.data[index].ipt2" class="ipt"></el-input>
							</li>
							<li>总数: {{item.judgeSum}}
								<el-input v-model="dataModel.data[index].ipt3" class="ipt"></el-input>
							</li>
							<li> {{ dataModel.data[index].proportion }} % </li>
						</ul>

						<ul class="_content _head2">
							<li></li>
							<li>单选</li>
							<li>多选</li>
							<li>判断</li>
							<li>共计</li>
						</ul>

						<ul class="_content">
							<li>出题数量总计</li>
							<li> {{ dataModel.radioSum }} </li>
							<li> {{ dataModel.multiselectSum }} </li>
							<li> {{ dataModel.judgeSum }} </li>
							<li> {{ dataModel.sum }} </li>

							<li>单题分值</li>
							<li>
								<el-input v-model="dataModel.radioScore" class="ipt2"></el-input>
							</li>
							<li>
								<el-input v-model="dataModel.multiselectScore" class="ipt2"></el-input>
							</li>
							<li>
								<el-input v-model="dataModel.judgeScore" class="ipt2"></el-input>
							</li>
							<li> {{ dataModel.scoreSum }}</li>
						</ul>

						<el-col :span="8" style="margin-top: 30px;">
							<el-form-item label="及格分数">
								<el-input v-model="dataModel.passScore"></el-input>
							</el-form-item>
						</el-col>

					</el-form>

					<div class="foort2">
						<el-button type="primary" class="_btn" @click="up">上一步</el-button>
						<el-button type="primary" class="_btn" @click="save">确认</el-button>
						<el-button type="danger" class="_btn" @click="cancel">取消</el-button>
					</div>

				</div>
			</el-tab-pane>

		</el-tabs>

		<!--选择题库-->
		<el-dialog title="选择题库" center :visible.sync="questionsDialogVisible">
			<div class="foort">
				<el-button type="primary" @click="addSave">确 定</el-button>
				<el-button @click="questionsDialogVisible = false">取 消</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'first',
				first_tabs: false, //Tab 1
				second_tabs: true, // Tab 2
				dataModel: { //创建一个新对象, 其中包含一个空数组 用来动态绑定 v-module
					data: []
				},
				dataList: [], // 列表data
				fromData: { // 创建考试表单对象
					name: '',
					duration: '',
					frequency: '',
					pattern: '',
					organize: '',
					obj: '',
					questions: '',
					startTime: '',
					endTime: ''
				},
				questionsDialogVisible: false
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			down() { //下一步
				this.activeName = "second";
				this.first_tabs = true;
				this.second_tabs = false;
			},
			up() { //上一步
				this.activeName = "first";
				this.first_tabs = false;
				this.second_tabs = true;
			},
			cancel() { //取消
				this.$router.push("/examManage");
			},
			selectQuestions() { //选择题库
				this.questionsDialogVisible = true;
			},
			addSave() { //选择题库

			},
			save() { // 新增保存
				let obj = Object.assign(this.dataModel, this.fromData); // 对象合并
				console.log(JSON.stringify(obj));
			},
			getDataList() { // 获取题库列表
				this.dataList = [{
					name: '测试解析题',
					radiosSum: 13,
					checkboxsSum: 5,
					judgeSum: 10,
					proportion: ''
				}, {
					name: '测试解析题1',
					radiosSum: 13,
					checkboxsSum: 5,
					judgeSum: 10,
					proportion: ''
				}, {
					name: '测试解析题2',
					radiosSum: 13,
					checkboxsSum: 5,
					judgeSum: 10,
					proportion: ''
				}]
			},
			createdModule() { // 动态创建 v-module 实例
				for(var i = 0; i < this.dataList.length; i++) {
					var obj = {
						name: '',
						ipt1: '',
						ipt2: '',
						ipt3: '',
						proportion: 0
					};
					this.dataModel.data.push(obj);
					this.dataModel.data[i].name = this.dataList[i].name;
				}

				this.dataModel.radioSum = 0;
				this.dataModel.multiselectSum = 0;
				this.dataModel.judgeSum = 0;
				this.dataModel.sum = 0;
				this.dataModel.radioScore = '';
				this.dataModel.multiselectScore = '';
				this.dataModel.judgeScore = '';
				this.dataModel.scoreSum = 0;
				this.dataModel.passScore = '';
			}
		},
		mounted() { //初始化
			this.getDataList();
			this.createdModule();
		},
	};
</script>

<style scoped>
	h2 {
		margin: 0px;
		padding: 0px;
	}
	
	h1 {
		margin-left: 10px;
	}
	
	.first_tabs {
		width: 95%;
		height: 500px;
	}
	
	.second_tabs {
		width: 95%;
		height: 500px;
	}
	
	._btn {
		float: right;
		margin-right: 50px;
	}
	
	.foort {
		text-align: center;
	}
	
	._content {
		margin: 0px;
		padding: 0px;
		float: left;
		width: 100%;
		border-left: 1px solid #ccc;
	}
	
	._content li {
		margin: 0px;
		padding: 0px;
		list-style: none;
		float: left;
		width: 19.85%;
		height: 50px;
		border: 1px solid #ccc;
		border-left: 0px;
		border-top: 0px;
		line-height: 50px;
		text-align: center;
		color: #666;
	}
	
	._head {
		border-top: 1px solid #ccc;
	}
	
	._head2 {
		margin-top: 50px;
		border-top: 1px solid #ccc;
	}
	
	.ipt {
		width: 70px;
		margin-left: 5px;
	}
	
	.ipt2 {
		width: 90%;
		margin-left: 5%;
	}
	
	.foort2 {
		float: right;
		text-align: center;
		margin-top: 50px;
	}
</style>