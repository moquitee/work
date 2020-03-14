<template>
	<div class="check_address_page">
		<header class="balance_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>选择地址</h2>
		</header>
		
		<section class="check_address_container">
			<ul v-if="address_info && address_info.length ">
				<li v-for="address in address_info" v-bind:key="address.id" v-on:click="choose_address(address)">
					<svg v-bind:class="{ chosen : chosen_address.id == address.id }">
						<svg viewBox="0 0 120 120" width="100%" height="100%"><circle cx="60" cy="60" r="60"></circle><path fill="#FFF" d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"></path></svg>
					</svg>
					
					<section class="order_user_info">
						<header>
							<span>{{ address.name }}</span>
							<span v-if="address.sex == 1">先生</span>
							<span v-else>女士</span>
							<span>{{ address.phone }}</span>
						</header>
						
						<div class="order_address_detail">
							<span>{{ address.tag }}</span>
							<span>{{ address.address_detail}}</span>
						</div>
					</section>
				</li>
			</ul>
		</section>
		
		<div class="check_add_address" v-on:click="$router.push({ name:'check_add_address' })">
			<img src="../../../assets/plus.png">
			<span>新增收货地址</span>
		</div>
		
		
		<router-view class="check_add_address_page"></router-view>
	</div>
</template>

<script>
	export default{
		created() {
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v1/users/' + this.user_id + '/addresses', method: 'GET' , which: 20 , renewway:'set'}).then(result=>{
				if ( result && result.length ){
					this.chosen_address= result[0]
				}
			})
		},
		
		data(){
			return {
				chosen_address: {},
			}
		},
		
		computed:{
			user_id(){
				return this.$store.state.acquireData[17].user_id
			},
			
			address_info(){
				return this.$store.state.acquireData[20]
			}
		},
		
		methods:{
			choose_address(address){
				this.chosen_address = address;
				this.$root.$emit('check_address',address);
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.check_address_page{
		overflow-y: auto;
		
		background: #FFFFFF;
	}
	
	.check_address_container{
		padding-bottom: 4rem;
	}
	
	.check_address_container>ul>li{
		display: flex;
		align-items: center;
		
		padding: 1.4rem;
	}
	
	.check_address_container>ul>li{
		border-bottom: 0.05rem solid #F5F5F5;
	}
	
	.check_address_container>ul>li>svg{
		width: 1.6rem;
		height: 1.6rem;
		fill: #4cd964;
		margin-right: 0.8rem;
		
		opacity: 0;
	}
	
	.check_address_container>ul>li>svg.chosen{
		opacity: 1;
	}
	
	.check_add_address{
		position: fixed;
		bottom: 0;
		
		width: 100%;
		height: 3.5rem;
		
		text-align: center;
	}
	
	.check_add_address>img{
		width: 1.8rem;
		height: 1.8rem;
		
		margin-right: 0.8rem;
		
		vertical-align: middle;
	}
	
	.check_add_address>span{
		font-size: 1.4rem;
		color: #3190E8;
		
		vertical-align: middle;
	}
	
	
	.check_add_address_page{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		
		z-index: 400;
		
		padding-top: 4rem;
		
		background: #f5f5f5;
	}
</style>
