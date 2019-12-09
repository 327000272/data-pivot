<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'app',
		methods:{

    }
	}
</script>

<style>
	body {
		margin: 0px;
		padding: 0px;
		background: #f3f3f3;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		width: 100%;
		height: 100%;
		background: #08263c; 
	}
  ul{
    padding: 0;
    margin: 0;
  }
  li{
    list-style: none;
  }
  p {
    margin: 0;
    padding: 0;
  }

</style>
