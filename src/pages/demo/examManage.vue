<template>
	<div class="_content">

		<!--条件查询-->
		<el-form :inline="true" :model="query" style="margin: 20px;">
			<el-form-item label="名称">
				<el-input v-model="query.user" size="small" placeholder="名称..."></el-input>
			</el-form-item>
			<el-form-item label="时间">
				<el-col :span="11">
					<el-date-picker type="date" size="small" placeholder="选择日期" v-model="query.startTime" style="width: 100%;"></el-date-picker>
				</el-col>
				<el-col class="line" :span="2" style="text-align: center;"> 至 </el-col>
				<el-col :span="11">
					<el-date-picker type="date" size="small" placeholder="选择日期" v-model="query.endTime" style="width: 100%;"></el-date-picker>
				</el-col>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" size="small" @click="query">查询</el-button>
				<el-button type="primary" size="small" @click="add">新增</el-button>
				<el-button type="primary" size="small" @click="count">综合统计</el-button>
			</el-form-item>
		</el-form>

		<!--列表-->
		<el-table :data="tableData" border style="width: 98%;" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column label="操作" width="240">
				<template slot-scope="scope">
					<el-button type="danger" size="mini" @click="details(scope.$index, scope.row)">详细</el-button>
					<el-button type="danger" size="mini" @click="state(scope.$index, scope.row)">开启</el-button>
					<el-button type="danger" size="mini" @click="del(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
			<el-table-column prop="name" label="考试名称">
			</el-table-column>
			<el-table-column prop="state" label="状态" width="60">
			</el-table-column>
			<el-table-column prop="totalScore" label="总分" width="80">
			</el-table-column>
			<el-table-column prop="passScore" label="及格分" width="80">
			</el-table-column>
			<el-table-column prop="num" label="想考次数" width="80">
			</el-table-column>
			<el-table-column prop="duration" label="考试时长">
			</el-table-column>
			<el-table-column label="练习模式" width="80">
				<template slot-scope="scope">
					<el-checkbox v-model="scope.row.pattern" @change="isShare(scope.row)"></el-checkbox>
				</template>
			</el-table-column>
			<el-table-column prop="date" label="创建时间">
			</el-table-column>
			<el-table-column prop="organization" label="创建组织">
			</el-table-column>
		</el-table>

		<div class="block" align="right">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage2" :page-sizes="[10, 20, 30, 40]" :page-size="currentList" layout="total,sizes, prev, pager, next,jumper" :total="total">
			</el-pagination>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentPage2: 1,
				currentList: 10,
				total: 100,
				query: { //条件查询对象
					user: '',
					startTime: '',
					endTime: ''
				},
				tableData: [], //列表对象
				dataSlectList: []
			}
		},
		methods: {
			handleSelectionChange(val) {
				this.dataSlectList = val;
			},
			query() { //条件查询
				console.log(this.formInline);
			},
			add() { //新增窗口
				this.$router.push("/addExam");
			},
			count() { //综合统计

				if(this.dataSlectList.length === 0) {
					this.$alert('请选择一个条目', '提示', '确定')
				} else {
					this.$router.push("/count");
				}

			},
			details(index, row) { // 详情
				this.$router.push("/details");
			},
			state(index, row) { //状态

			},
			del(index, row) { // 删除
				this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			isShare(row) { //练习模式
				console.log(JSON.stringify(row));
			},
			handleSizeChange(val) { //每页显示条数
				console.log(val);
			},
			handleCurrentChange(val) { // 当前页
				console.log(val);
			},
			queryList() { // 查询列表
				this.tableData = [{
					name: '十九大知识题库',
					state: '开启',
					totalScore: 100,
					passScore: 120,
					num: 5,
					duration: "20分钟",
					pattern: true,
					date: '2016-05-03',
					organization: '中油瑞飞党委'
				}, {
					name: '十九大知识题库',
					state: '关闭',
					totalScore: 100,
					passScore: 120,
					num: 5,
					duration: "20分钟",
					pattern: false,
					date: '2016-05-02',
					organization: '中油瑞飞党委'
				}, {
					name: '党史知识题库',
					state: '开启',
					totalScore: 100,
					passScore: 120,
					num: 5,
					duration: "20分钟",
					pattern: false,
					date: '2016-05-04',
					organization: '长城钻探党委'
				}]
			},
		},
		mounted() {
			//初始化
			this.queryList();
		},
	}
</script>

<style scoped>
	._content {
		margin: 15px;
	}
</style>