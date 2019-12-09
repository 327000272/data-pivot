<template>
	<el-tabs v-model="activeName" @tab-click="handleClick" style="margin: 20px;">
		<el-tab-pane label="第一步" name="first" :disabled="first_tabs">

			<div class="first_tabs">
				<h1>第一步 1111111111111</h1>

				<div v-for="(item,index) in addValidateForm.domains">
					<el-radio-group v-model="addValidateForm.abc">
						<el-radio :label="index">
							正解
						</el-radio>
					</el-radio-group>
				</div>

				<el-button type="primary " class="_btn " @click="onClick ">测试</el-button>
				<el-button type="primary " class="_btn " @click="down ">下一步</el-button>
			</div>

		</el-tab-pane>
		<el-tab-pane label="第二步 " name="second " :disabled="second_tabs ">

			<div class="second_tabs ">
				<h1>第二步 22222222222222</h1>
				<el-button type="danger " class="_btn " @click="up ">上一步</el-button>
			</div>

		</el-tab-pane>
	</el-tabs>
</template>

<script>
	export default {
		data() {
			return {
				radio2: 3,
				activeName: 'first',
				first_tabs: false,
				second_tabs: true,
				addValidateForm: {
					abc: '',
					domains: [{
						optionName: '1',
						id: '22'
					}, {
						optionName: '2',
						id: '33'
					}, {
						optionName: '3',
						id: '44'
					}, {
						optionName: '4',
						id: '55'
					}],
				},
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			down() {
				this.activeName = "second ";
				this.first_tabs = true;
				this.second_tabs = false;
			},
			up() {
				this.activeName = "first ";
				this.first_tabs = false;
				this.second_tabs = true;
			},
			onClick() {
				alert(this.radio2);
			}
		}
	};
</script>

<style scoped>
	.first_tabs {
		width: 95%;
		height: 500px;
		border: 1px solid red;
	}

	.second_tabs {
		width: 95%;
		height: 500px;
		border: 1px solid blue;
	}

	._btn {
		margin-top: 350px;
		float: right;
		margin-right: 50px;
	}

	h1 {
		margin-left: 10px;
	}
</style>
