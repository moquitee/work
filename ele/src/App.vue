<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	watch:{
		// 如果路由有变化，会再次执行该方法
		$route(){
			window.console.log('路由跳转')
			this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/v1/user' , method: 'GET' , which: 17 , renewway:'set' });
		}
	},
}

</script>

<style>
	body,html,#app{
		width:100%;
		margin: 0;
		
		background-color: #f5f5f5;
	}
	
	ul,p,h4{
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	h1,h2,h3,h4,h5{
		margin: 0;
	}
	
</style>
