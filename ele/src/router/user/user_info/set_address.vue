<template>
	<div>
		<header class="set_address_header">
			<span>&lt;</span>
			<h2>编辑地址</h2>
			<span>编辑</span>
		</header>
		
		<section class="user_address_container">
			<ul>
				<li>
					<p>地址address</p>
					<p>12312312528</p>
					<span class="delete_site">x</span>
				</li>
			</ul>
			
			<section class="add_new_address_button">
				<span>新增地址</span>
				<span>&gt;</span>
			</section>
		</section>
		
		<router-view class="add_new_address_page"></router-view>
	</div>
</template>

<script>
	export default{
		/*created() {
			this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/eus/v1/users/' + this.user_id + '/avatar' , method: 'POST' , which: 19 , renewway:'set' , appendix:{
					credentials: 'include',
					'content-type' : 'application/json',
					
				},
			})
		}*/
	}
</script>

<style>
	.set_address_header{
		position: fixed;
		
		display: flex;
		justify-content: space-between;
		
		width: 100%;
		height: 4rem;
		
		background: #3190E8;
		
		text-align: center;
		font-size: 1.2rem;
		line-height: 4rem;
		color: #FFFFFF;
	}
	
	.set_address_header>span:nth-of-type(1){
		margin-left: 1rem;
		
		font-size: 2rem;
	}
	
	.set_address_header>span:nth-of-type(2){
		margin-right: 1rem;
	}
	
	.user_address_container{
		position: relative;
		
		margin-top: 5rem;
	}
	
	.user_address_container>ul{
		border-bottom: 1px solid #D9D9D9;
		
		background: #FFFFFF;
	}
	
	.user_address_container>ul>li{
		padding: 1rem;
		border-top: 1px solid #D9D9D9;
	}
	
	.user_address_container>ul>li:first-of-type{
		background: #fff8c3;
	}
	
	.user_address_container>ul>li>p{
		font-size: 1.2rem;
	}
	
	.user_address_container>ul>li>p:first-of-type{
		margin-bottom: 0.5rem;
	}
	
	.delete_site{
		position: absolute;
		top: 1.8rem;
		right: 1rem;
		
		font-size: 1.8rem;
		color: #999999;
	}
	
	.add_new_address_button{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		margin-top: 1rem;
		padding: 1rem;
		border-top: 1px solid #D9D9D9;
		border-bottom: 1px solid #D9D9D9;
		
		background: #FFFFFF;
	}
	
	.add_new_address_button>span:first-of-type{
		font-size: 1.4rem;
	}
	
	.add_new_address_button>span:nth-of-type(2){
		font-size: 1.8rem;
		color: rgb(216, 216, 216);
	}
	
	.add_new_address_page{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		
		z-index: 18;
		
		background: #f2f2f2;
	}
</style>
