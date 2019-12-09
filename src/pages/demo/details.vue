<template>

	<div class="_content">

		<div class="_head">
			<el-button class="btn" size="small" @click="back">返回</el-button>
			<label>考试详情</label>
		</div>

		<div>
			<ul class="content1">
				<li class="title">考试名称</li>
				<li class="lab"></li>
				<li class="title">考试时长</li>
				<li class="lab"></li>
				<li class="title">先考次数</li>
				<li class="lab"></li>
				<li class="title">开始时间</li>
				<li class="lab"></li>
				<li class="title">结束时间</li>
				<li class="lab"></li>
				<li class="title">联系模式</li>
				<li class="lab"></li>
				<li class="title">选择组织</li>
				<li class="lab"></li>
				<li class="title">选择对象</li>
				<li class="lab"></li>
				<li class="title">及格分数</li>
				<li class="lab"></li>
			</ul>
		</div>

		<div>
			<ul class="content2 content2_head">
				<li class="title">名称</li>
				<li>单选</li>
				<li>多选</li>
				<li>判断</li>
				<li>题库占比</li>
			</ul>

			<ul class="content2" v-for="(item, index) in data">
				<li class="title"> {{ item.name }} </li>
				<li> {{ item.radio }} </li>
				<li> {{ item.multiselect }} </li>
				<li> {{ item.judge }} </li>
				<li> {{ item.proportion }} </li>
			</ul>
		</div>

		<div style="float: left;width: 100%;margin-bottom: 50px;">
			<ul class="content2 content2_head">
				<li class="title"></li>
				<li>单选</li>
				<li>多选</li>
				<li>判断</li>
				<li>共计</li>
			</ul>

			<ul class="content2" v-for="(item, index) in data2">
				<li class="title"> {{ item.name }} </li>
				<li> {{ item.radio }} </li>
				<li> {{ item.multiselect }} </li>
				<li> {{ item.judge }} </li>
				<li> {{ item.sum }} </li>
			</ul>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				data: [{
					name: '测试解析题',
					radio: 0,
					multiselect: 0,
					judge: 0,
					proportion: '0%'
				}, {
					name: '积极分子考试',
					radio: 0,
					multiselect: 0,
					judge: 0,
					proportion: '0%'
				}, {
					name: '年终考试',
					radio: 0,
					multiselect: 0,
					judge: 0,
					proportion: '0%'
				}],
				data2: [{
					name: '测试解析题',
					radio: 0,
					multiselect: 0,
					judge: 0,
					sum: 0
				}, {
					name: '积极分子考试',
					radio: 0,
					multiselect: 0,
					judge: 0,
					sum: 0
				}, {
					name: '年终考试',
					radio: 0,
					multiselect: 0,
					judge: 0,
					sum: 0
				}]
			};
		},
		methods: {
			back() { //返回
				this.$router.push("/examManage");
			}
		},
		mounted() {
			//初始化
		},
	};
</script>

<style scoped>
	ul,
	li {
		margin: 0px;
		padding: 0px;
		list-style: none;
	}
	
	._content {
		margin: 20px;
	}
	
	._head {
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #ccc;
		text-align: center;
	}
	
	._head .btn {
		float: left;
	}
	
	.title {
		background: whitesmoke;
	}
	
	.content1 {
		width: 100%;
		float: left;
		margin-top: 30px;
		border-top: 1px solid #ddd;
		border-left: 1px solid #ddd;
	}
	
	.content1 li {
		float: left;
		width: 49.5%;
		height: 40px;
		border: 1px solid #ddd;
		border-top: 0px;
		border-left: 0px;
	}
	
	.content1 li:nth-child(4) {
		width: 34.4%;
	}
	
	.content1 li:nth-child(6) {
		width: 25%;
	}
	
	.content1 li:nth-child(8) {
		width: 34.4%;
	}
	
	.content1 li:nth-child(10) {
		width: 25%;
	}
	
	.content1 .title {
		width: 20%;
		background: whitesmoke;
		text-align: center;
		line-height: 40px;
		font-size: 14px;
	}
	
	.content1 .lab {
		width: 79.5%;
	}
	
	.content2 {
		width: 100%;
		float: left;
		border-left: 1px solid #ddd;
		font-size: 14px;
	}
	
	.content2_head {
		margin-top: 30px;
		border-top: 1px solid #ddd;
	}
	
	.content2 li {
		float: left;
		width: 19.9%;
		height: 40px;
		border: 1px solid #ddd;
		border-top: 0px;
		border-left: 0px;
		text-align: center;
		line-height: 40px;
	}
</style>