<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	/*watch:{
		// 如果路由有变化，会再次执行该方法
		$route(){
			window.console.log('路由跳转')
			this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/v1/user' , method: 'GET' , which: 17 , renewway:'set' });
		}
	},*/
	created() {
		this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/v1/user' , method: 'GET' , which: 17 , renewway:'set' }).then((result)=>{
			localStorage.setItem( 'user_id' , result.user_id )
		});
		
	}
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
	
	input,button{
		border: none;
	}
	
	.ellipsis{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.cover{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0,0,0,.3);
		z-index: 200;
	}
	
	::-webkit-scrollbar{
		width: 0;
		height: 0;
		background-color: #f5f5f5;
	}
</style>
