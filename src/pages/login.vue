<template>
	<div class="login">
		<p>系统登陆</p>
		<div class="contents">
			<el-form ref="form" :model="form" label-width="40px" style="margin-top: 40px;">
				<el-form-item label="账号">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="form.pwd"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit" :size="medium">登录</el-button>
				</el-form-item>
			</el-form>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					pwd: ''
				}
			}
		},
		methods: {
			onSubmit() {
				this.$router.push("/home");
				console.log('submit!');
			}
		}
	}
</script>

<style scoped>
	.login {
		width: 100%;
		height: 100vh;
		background: #324057;
		margin: auto;
	}
	
	p {
		margin: 0px;
		padding: 0px;
		text-align: center;
		color: white;
		font-size: 30px;
		height: 80px;
		padding-top: 15vh;
	}
	
	.contents {
		width: 350px;
		height: 240px;
		border-radius: 5px;
		background: white;
		padding: 20px;
		margin: auto;
	}
</style>