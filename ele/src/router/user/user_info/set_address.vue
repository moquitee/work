<template>
	<div>
		<header class="set_address_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>编辑地址</h2>
			<span v-on:click="delete_button_switch = delete_button_switch?  false : true ">{{ delete_button_text }}</span>
		</header>
		
		<section class="user_address_container">
			<ul v-if="site_info">
				<li v-for="site in site_info" v-bind:key="site.id">
					<section>
						<p>{{ site.address }}</p>
						<p>{{ site.phone }}</p>
					</section>
					
					<span class="delete_site" v-show="delete_button_switch" v-on:click="delete_site(site.id,$event)">x</span>
				</li>
			</ul>
			
			<section class="add_new_address_button" v-on:click="$router.push({ name: 'add_address' })">
				<span>新增地址</span>
				<span>&gt;</span>
			</section>
		</section>
		
		<router-view class="add_new_address_page"></router-view>
	</div>
</template>

<script>
	export default{
		created() {
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v1/users/' + this.user_id + '/addresses', method: 'GET' , which: 20 , renewway:'set'})
		},
		
		data(){
			return {
				delete_button_switch: false,
			}
		},
		
		computed:{
			user_id(){
				return this.$store.state.acquireData[17].user_id
			},
			
			delete_button_text(){
				if ( this.delete_button_switch ){
					return '完成'
				}
				else{
					return '编辑'
				}
			},
			
			site_info(){
				return this.$store.state.acquireData[20]
			}
		},
		
		methods:{
			delete_site(address_id , event ){
				this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v1/users/' + this.user_id + '/addresses/' + address_id , method: 'DELETE' , which: 21 , renewway:'set' , appendix: {
					credentials: 'include',
					headers:{
						'content-type':'application/json'
					}
				}}).then(()=>{
					event.target.parentNode.remove()
				})
				
			}
		}
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
		margin-top: 5rem;
	}
	
	.user_address_container>ul{
		border-bottom: 1px solid #D9D9D9;
		
		background: #FFFFFF;
	}
	
	.user_address_container>ul>li{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.user_address_container>ul>li>section{
		padding: 1rem;
		border-top: 1px solid #D9D9D9;
	}
	
	.user_address_container>ul>li:first-of-type{
		background: #fff8c3;
	}
	
	.user_address_container>ul>li>section>p{
		font-size: 1.2rem;
	}
	
	.user_address_container>ul>li>section>p:first-of-type{
		margin-bottom: 0.5rem;
	}
	
	.delete_site{
		margin-right: 1.6rem;
		
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
		font-size: 1.3rem;
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
