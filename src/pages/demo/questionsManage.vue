<template>
	<div class="_content">

		<!--条件查询-->
		<el-form :inline="true" :model="query">
			<el-form-item label="名称">
				<el-input v-model="query.user" size="small"></el-input>
			</el-form-item>
			<el-form-item label="状态">
				<el-select v-model="query.state" size="small">
					<el-option label="状态-1" value="1"></el-option>
					<el-option label="状态-2" value="2"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" size="small" @click="query">查询</el-button>
				<el-button type="primary" size="small" @click="add">新增</el-button>
				<el-button type="primary" size="small" @click="edit">编辑</el-button>
				<el-button type="primary" size="small" @click="del">删除</el-button>
				<el-button type="primary" size="small" @click="answerMarage">题目管理</el-button>
			</el-form-item>
		</el-form>

		<!--列表-->
		<el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="name" label="题目名称">
			</el-table-column>
			<el-table-column prop="state" label="状态">
			</el-table-column>
			<el-table-column label="是否共享">
				<template slot-scope="scope">
					<el-checkbox v-model="scope.row.isShare" @change="isShare(scope.row)"></el-checkbox>
				</template>
			</el-table-column>
			<el-table-column prop="date" label="创建时间">
			</el-table-column>
			<el-table-column prop="organization" label="创建组织">
			</el-table-column>
			<el-table-column label="状态">
				<template slot-scope="scope">
					<el-button size="mini" @click="state(scope.$index, scope.row)">开启</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--分页条-->
		<div class="block" align="right">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage2" :page-sizes="[10, 20, 30, 40]" :page-size="currentList" layout="total,sizes, prev, pager, next,jumper" :total="total">
			</el-pagination>
		</div>

		<!--新增题库-->
		<el-dialog title="新增题库" center :visible.sync="addDialogVisible">
			<el-form ref="form" :model="addForm" label-width="80px">
				<el-form-item label="题库名称">
					<el-input v-model="addForm.name" placeholder="请输入题库名称"></el-input>
				</el-form-item>
				<el-form-item label="题库分类">
					<el-input v-model="addForm.classify" placeholder="请输入分类或关键字"></el-input>
				</el-form-item>
				<el-form-item label="创建组织">
					<el-select v-model="addForm.organization" placeholder="请选择创建组织">
						<el-option label="组织一" value="1"></el-option>
						<el-option label="组织二" value="2"></el-option>
					</el-select>
				</el-form-item>
				<div class="foort">
					<el-button type="primary" @click="addSave">确 定</el-button>
					<el-button @click="addDialogVisible = false">取 消</el-button>
				</div>
			</el-form>
		</el-dialog>

		<!--编辑题库-->
		<el-dialog title="新增题库" center :visible.sync="editDialogVisible">
			<el-form ref="form1" :model="editForm" label-width="80px">
				<el-form-item label="题库名称">
					<el-input v-model="editForm.name" placeholder="请输入题库名称"></el-input>
				</el-form-item>
				<el-form-item label="题库分类">
					<el-input v-model="editForm.classify" placeholder="请输入分类或关键字"></el-input>
				</el-form-item>
				<el-form-item label="创建组织">
					<el-select v-model="editForm.organization" placeholder="请选择创建组织">
						<el-option label="组织一" value="1"></el-option>
						<el-option label="组织二" value="2"></el-option>
					</el-select>
				</el-form-item>
				<div class="foort">
					<el-button type="primary" @click="editSave">确 定</el-button>
					<el-button @click="editDialogVisible = false">取 消</el-button>
				</div>
			</el-form>
		</el-dialog>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentPage2: 1,
				currentList: 10,
				total: 100,
				query: { //查询条件对象
					user: '',
					state: ''
				},
				tableData: [], //列表对象
				dataSlectList: [], //列表选中行数集合
				addDialogVisible: false,
				editDialogVisible: false,
				addForm: { //新增题库对象
					name: '',
					classify: '',
					organization: ''
				},
				editForm: { //编辑题库对象
					name: '',
					classify: '',
					organization: ''
				}
			}
		},
		methods: {
			handleSelectionChange(val) {
				this.dataSlectList = val;
			},
			query() { // 条件查询
				console.log(this.query);
			},
			add() { //新增窗口
				this.addDialogVisible = true;
			},
			addSave() { // 新增保存
				console.log(this.addForm);
				this.addDialogVisible = false;
			},
			edit() { //编辑窗口
				if(this.dataSlectList.length === 0) {
					this.$alert('请选择一个条目', '提示', '确定')
				} else if(this.dataSlectList.length === 1) {
					this.editDialogVisible = true;
					this.editForm = this.dataSlectList[0];
				} else {
					this.$alert('请选择一个条目', '提示', '确定')
				}
				console.log(this.dataSlectList);
			},
			editSave() { // 编辑保存
				console.log(this.editForm);
				this.editDialogVisible = false;
			},
			del() { //删除
				if(this.dataSlectList.length === 0) {
					this.$alert('请选择一个条目', '提示', '确定')
				} else if(this.dataSlectList.length === 1) {
					alert(JSON.stringify(this.dataSlectList));
				} else {
					this.$alert('请选择一个条目', '提示', '确定')
				}
				console.log(this.dataSlectList);
			},
			answerMarage() { //题目管理
				this.$router.push("/answerMarage");
			},
			state(index, row) { //状态
				console.log(index, row);
			},
			isShare(row) { //是否共享
				console.log(row);
			},
			queryList() { // 查询列表
				this.tableData = [{
					name: '十九大知识题库',
					state: '开启',
					isShare: true,
					date: '2016-05-03',
					organization: '中油瑞飞党委'
				}, {
					name: '十九大知识题库',
					state: '关闭',
					isShare: false,
					date: '2016-05-02',
					organization: '中油瑞飞党委'
				}, {
					name: '党史知识题库',
					state: '开启',
					isShare: false,
					date: '2016-05-04',
					organization: '长城钻探党委'
				}]
			},
			handleSizeChange(val) { //每页显示条数
				console.log(val);
			},
			handleCurrentChange(val) { // 当前页
				console.log(val);
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
	
	.block {
		margin-top: 20px;
	}
	
	.foort {
		text-align: center;
	}
</style>