<template>
	<div style="height:100%;">
		<!-- <pageheader></pageheader> -->
		<menus></menus>
		<div class="content">
			<router-view/>
		</div>
	</div>
</template>
<script>
	import Header from './Header'
	import Menu from './Menu'
	export default {
		data() {
			return {

			}
		},
		components: {
			'pageheader': Header,
			'menus': Menu
		},
	}
</script>
<style>
.content {
	width: calc(100% - 185px);
	margin-left: 181px;
	height: 100%;
	background-color: #08263c;
	overflow:auto;
}

</style>
