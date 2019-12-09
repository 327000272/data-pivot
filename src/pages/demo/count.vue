<template>
	<div class="_content">

		<div class="_head">
			<h2>考试成绩</h2>
			<el-button style="float: right;" size="small" @click="back">返回</el-button>
		</div>

		<p class="_title">统计范围</p>

		<!--列表 1-->
		<el-table :data="tableData" border style="width: 100%; margin-top: 10px;">
			<el-table-column prop="name" label="考试名称">
			</el-table-column>
			<el-table-column prop="timeLimit" label="考试时限">
			</el-table-column>
			<el-table-column prop="totalScore" label="考试总分">
			</el-table-column>
			<el-table-column prop="passScore" label="及格分数">
			</el-table-column>
			<el-table-column prop="frequency" label="先考次数">
			</el-table-column>
		</el-table>

		<div class="_head" style="margin-top: 50px;">
			<h2>当前组织结构: 中共东方地球物理公司信息技术中心委员会</h2>
		</div>

		<p class="_title">按最高分</p>

		<!--搜索-->
		<el-form :inline="true" :model="query" style="margin: 10px;">
			<el-form-item label="职级">
				<el-select v-model="query.position" size="small">
					<el-option label="全部" value="all"></el-option>
					<el-option label="局级" value="1"></el-option>
					<el-option label="副局级" value="2"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" size="small" @click="_query">查询</el-button>
				<el-button type="primary" size="small" @click="_export">导出成绩信息</el-button>
			</el-form-item>
		</el-form>

		<!--列表 2-->
		<el-table :data="tableData2" border style="width: 100%; margin-top: 10px;">
			<el-table-column prop="name" label="姓名">
			</el-table-column>
			<el-table-column prop="position" label="职位">
			</el-table-column>
			<el-table-column prop="highestScore" label="最高分">
			</el-table-column>
			<el-table-column prop="whenLong" label="考试时长">
			</el-table-column>
			<el-table-column prop="ranking" label="综合排名">
			</el-table-column>
			<el-table-column prop="organization" label="所在组织">
			</el-table-column>
		</el-table>

		<!--数据导入-->
		<el-dialog title="导出成绩信息" center :visible.sync="exportDialogVisible">
			<el-form ref="form">
				<div class="foort">
					<el-button type="primary">确 定</el-button>
					<el-button @click="exportDialogVisible = false">取 消</el-button>
				</div>
			</el-form>
		</el-dialog>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				query: {
					position: ''
				},
				tableData: [{
					name: '十九大答题A',
					timeLimit: '20分钟',
					totalScore: '100',
					passScore: '60',
					frequency: '5'
				}, {
					name: '十九大答题B',
					timeLimit: '20分钟',
					totalScore: '100',
					passScore: '60',
					frequency: '5'
				}],
				tableData2: [{
					name: '张三',
					position: '正处',
					highestScore: '100',
					whenLong: '20',
					ranking: '1',
					organization: '党支部'
				}, {
					name: '张三',
					position: '正处',
					highestScore: '100',
					whenLong: '20',
					ranking: '1',
					organization: '党支部'
				}],
				exportDialogVisible: false
			}
		},
		methods: {
			back() { //返回
				this.$router.push("/examManage");
			},
			_query() { // 查询
				console.log(this.query.position);
			},
			_export() { //导出
				this.exportDialogVisible = true;
			}
		},
		mounted() {
			//初始化

		},
	}
</script>

<style scoped>
	._content {
		margin: 15px;
	}

	._head {
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #ccc;
	}

	._title {
		float: left;
		width: 200px;
		color: orangered;
	}

	.foort {
		text-align: center;
	}

	h2 {
		float: left;
		margin: 0px;
		padding: 0px;
		color: #666;
		font-size: 20px;
	}
</style>
