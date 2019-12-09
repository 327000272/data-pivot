<template>

	<div class="_contents">

		<div class="_topNav">
			<h2>管理题目</h2>
			<el-button style="float: right;" size="small" @click="back">返回</el-button>
		</div>

		<ul class="_content2">
			<li> <span>名称</span> </li>
			<li> <span>党的十九大知识竞赛 (十九大精神部分)</span> </li>
			<li> <span>题目</span> </li>
			<li>
				<span>
					<el-button size="small" @click="add">新增题目</el-button>
					<el-button size="small" @click="_import">批量导入</el-button>
				</span>
			</li>
			<li>
				<!--条件查询-->
				<el-form :inline="true" :model="query" class="query">
					<el-form-item label="类型筛选">
						<el-select v-model="query.type" size="small">
							<el-option label="全部" value="all"></el-option>
							<el-option label="单选" value="danxuan"></el-option>
							<el-option label="多选" value="duoxuan"></el-option>
							<el-option label="判断" value="panduan"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="名称">
						<el-input v-model="query.user" size="small"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" size="small" @click="query">查询</el-button>
					</el-form-item>
				</el-form>
			</li>
		</ul>

		<!--列表-->
		<el-table :data="tableData" border class="_table">
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" type="danger" @click="edit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="del(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
			<el-table-column prop="title" label="标题">
			</el-table-column>
			<el-table-column prop="type" label="类型">
			</el-table-column>
		</el-table>

		<!--分页条-->
		<div class="block" align="right">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage2" :page-sizes="[10, 20, 30, 40]" :page-size="currentList" layout="total,sizes, prev, pager, next,jumper" :total="total">
			</el-pagination>
		</div>

		<!--数据导入-->
		<el-dialog title="批量导入题目" center :visible.sync="importDialogVisible">
			<el-form ref="form">
				<div class="foort">
					<el-button type="primary" @click="importSave">确 定</el-button>
					<el-button @click="importDialogVisible = false">取 消</el-button>
				</div>
			</el-form>
		</el-dialog>

		<!--新建题目-->
		<el-dialog title="新建题目" center :visible.sync="addDialogVisible">

			<el-form :model="formData">

				<el-form-item label="题目" label-width="80px">
					<el-input v-model="formData.name" placeholder="请输入题库名称"></el-input>
				</el-form-item>

				<el-form-item label="题目类型" label-width="80px">
					<el-select v-model="formData.type" @change="changeType">
						<el-option label="单选" value="danxuan"></el-option>
						<el-option label="多选" value="duoxuan"></el-option>
						<el-option label="判断" value="panduan"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="题目解析" label-width="80px">
					<el-input v-model="formData.analysis" placeholder="请输入分类或关键字"></el-input>
				</el-form-item>

				<ul class="_content3 _topBoder">
					<li>答案选项</li>
					<li>正解</li>
				</ul>

				<!--单选-->
				<div v-show="radioContent">
					<el-form-item>
						<ul class="_content3" v-for="(item, index) in radioData">
							<li>
								<el-input v-model="item.title"></el-input>
							</li>
							<li>
								<el-radio-group v-model="formData.selected">
									<el-radio :label="index">
										正解
									</el-radio>
								</el-radio-group>
							</li>
						</ul>
					</el-form-item>
				</div>

				<!--多选-->
				<div v-show="checkboxContent">
					<el-form-item>
						<ul class="_content3" v-for="(item, index) in multipleData">
							<li>
								<el-input v-model="item.title"></el-input>
							</li>
							<li>
								<el-checkbox-group v-model="item.checkList">
									<el-checkbox label="正解"></el-checkbox>
								</el-checkbox-group>
							</li>
						</ul>
					</el-form-item>
				</div>

				<!--判断-->
				<div v-show="judgeContent">
					<el-form-item>
						<ul class="_content3" v-for="(item, index) in judgeData">
							<li>
								<el-input v-model="item.title"></el-input>
							</li>
							<li>
								<el-radio-group v-model="formData.selected">
									<el-radio :label="index">
										正解
									</el-radio>
								</el-radio-group>
							</li>
						</ul>
					</el-form-item>
				</div>

				<el-form-item>
					<div class="foort">
						<el-button size="small" @click="addDomain">+</el-button>
						<el-button size="small" @click.prevent="removeDomain">-</el-button>
					</div>
				</el-form-item>

			</el-form>

			<div class="foort">
				<el-button type="primary" @click="addSave">确 定</el-button>
				<el-button @click="addDialogVisible = false">取 消</el-button>
			</div>

		</el-dialog>

		<!--修改题目-->
		<el-dialog title="编辑题目" center :visible.sync="editDialogVisible">
			<div class="foort">
				<el-button type="primary" @click="editSave">确 定</el-button>
				<el-button @click="editDialogVisible = false">取 消</el-button>
			</div>
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
				query: { //条件查询 对象
					user: '',
					type: ''
				},
				tableData: [], //列表对象
				radioContent: true,
				judgeContent: false,
				checkboxContent: false,
				importDialogVisible: false,
				addDialogVisible: false,
				editDialogVisible: false,
				formData: { // 新建题目对象
					name: '',
					type: 'danxuan',
					analysis: '',
					selected: ''
				},
				radioData: [{ // 单选
					title: ''
				}, {
					title: ''
				}, {
					title: ''
				}, {
					title: ''
				}],
				multipleData: [{ // 多选
					title: '',
					checkList: false,
				}, {
					title: '',
					checkList: false,
				}, {
					title: '',
					checkList: false,
				}, {
					title: '',
					checkList: false,
				}],
				judgeData: [{ // 判断
					title: '正确',
				}, {
					title: '错误',
				}],
			}
		},
		methods: {
			back() { //返回
				this.$router.push("/questionsManage");
			},
			query() { //条件查询
				console.log(this.query);
			},
			handleSizeChange(val) { //每页显示条数
				console.log(val);
			},
			handleCurrentChange(val) { // 当前页
				console.log(val);
			},
			add() { // 新建题目
				this.addDialogVisible = true;
			},
			addSave() { //新建题目保存

				delete this.formData.radioData;
				delete this.formData.multipleData;
				delete this.formData.judgeData;

				if(this.formData.type == "danxuan") {
					this.formData.radioData = this.radioData;
				} else if(this.formData.type == "duoxuan") {
					this.formData.multipleData = this.multipleData;
				} else if(this.formData.type == "panduan") {
					this.formData.judgeData = this.judgeData;
				}

				alert(JSON.stringify(this.formData));

			},
			edit(idnex, row) { // 编辑
				console.log(row);
				this.editDialogVisible = true;
			},
			editSave() { //编辑题目保存

			},
			del(idnex, row) { //删除
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

				console.log(row);

			},
			_import() { // 导入
				this.importDialogVisible = true;
			},
			changeType() { //切换题目类型
				if(this.formData.type == "danxuan") {
					this.radioContent = true;
					this.judgeContent = false;
					this.checkboxContent = false;
				} else if(this.formData.type == "duoxuan") {
					this.radioContent = false;
					this.judgeContent = false;
					this.checkboxContent = true;
				} else if(this.formData.type == "panduan") {
					this.radioContent = false;
					this.judgeContent = true;
					this.checkboxContent = false;
				}
			},
			importSave() { //导入保存

			},
			queryList() { // 查询列表
				this.tableData = [{
					title: '依法治国是当党领导人民治理国家的根本保证',
					type: '判断'
				}, {
					title: '只要绿水青山不要金三银山写入了< 党章 >',
					type: '判断'
				}, {
					title: '十九大知识题库',
					type: '判断'
				}]
			},
			removeDomain() { //删除新增元素
				var index = "";
				if(this.formData.type == "danxuan") {
					index = this.radioData.length, index = index - 1;
					if(index !== -1) {
						this.radioData.splice(index, 1)
					}
				} else if(this.formData.type == "duoxuan") {
					index = this.multipleData.length, index = index - 1;
					if(index !== -1) {
						this.multipleData.splice(index, 1)
					}
				} else if(this.formData.type == "panduan") {
					index = this.judgeData.length, index = index - 1;
					if(index !== -1) {
						this.judgeData.splice(index, 1)
					}
				}
			},
			addDomain() { //新增元素
				if(this.formData.type == "danxuan") {
					this.radioData.push({
						title: '',
						radio: '',
					});
				} else if(this.formData.type == "duoxuan") {

					this.multipleData.push({
						title: '',
						checkList: false,
					});
				} else if(this.formData.type == "panduan") {
					this.judgeData.push({
						title: '',
						radio: '',
					});
				}
			}
		},
		mounted() {
			//初始化
			this.queryList();
		},
	}
</script>

<style scoped>
	h2 {
		float: left;
		margin: 0px;
		padding: 0px;
		width: 300px;
	}
	
	._contents {
		margin: 15px;
	}
	
	._topNav {
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #ccc;
	}
	
	.query {
		margin-top: 10px;
		margin-left: 10px;
	}
	
	._table {
		width: 100%;
		margin-top: 30px;
		float: left;
	}
	
	._topBoder {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ccc;
		border-right: 0px;
	}
	
	._content2 {
		width: 100%;
		margin: 0px;
		padding: 0px;
		margin-top: 30px;
	}
	
	._content2 li {
		margin: 0px;
		list-style: none;
		float: left;
		height: 50px;
		line-height: 50px;
		font-size: 13px;
	}
	
	._content2 li span {
		margin-left: 20px;
		margin-right: 20px;
	}
	
	._content2 li:nth-child(1) {
		float: left;
		width: 20%;
		border: 1px solid #ddd;
		background: whitesmoke;
		text-align: right;
	}
	
	._content2 li:nth-child(2) {
		width: 79.5%;
		border: 1px solid #ddd;
		border-left: 0px;
	}
	
	._content2 li:nth-child(3) {
		width: 20%;
		border: 1px solid #ddd;
		border-top: 0px;
		background: whitesmoke;
		text-align: right;
	}
	
	._content2 li:nth-child(4) {
		width: 79.5%;
		border: 1px solid #ddd;
		border-left: 0px;
		border-top: 0px;
	}
	
	._content2 li:nth-child(5) {
		line-height: 0px;
		width: 99.55%;
		border: 1px solid #ddd;
		border-top: 0px;
		height: 60px;
	}
	
	._content3 {
		float: left;
		margin: 0px;
		padding: 0px;
		width: 100%;
		border-left: 1px solid #ccc;
	}
	
	._content3 li {
		float: left;
		margin: 0px;
		padding: 0px;
		list-style: none;
		border: 1px solid #ccc;
		border-left: 0px;
		border-top: 0px;
		text-align: center;
	}
	
	._content3 li:nth-child(1) {
		width: 79.6%;
	}
	
	._content3 li:nth-child(2) {
		width: 20%;
	}
	
	.block {
		margin-top: 20px;
		float: right;
	}
	
	.foort {
		text-align: center;
	}
</style>