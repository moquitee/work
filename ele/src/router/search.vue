<template>
	<!-- 这个页面暂时抛弃，因为api暂时失效 -->
	<div>
		<div class="header">
			<router-link class="ele" to="/">&lt;</router-link>
			<h1 class="head_middle" > 搜索 </h1>
		</div>
		
		<div class="search_shop">
			<input v-model="user_input_data" placeholder="请输入商家或美食名称">
			<button>提交</button>
		</div>
		
		<div class="search_result" v-if="search_result_data.length">
			<header>商家</header>
			
			<ul>
				<li class="search_shop_info"
				v-for="shop in search_result_data"
				v-bind:key="shop.id"
				>
					<img v-bind:src="'//elm.cangdu.org/img/' + shop.image_path ">
					<section class="search_shop_rightside">
						<section class="search_shop_name">
							{{ shop.name }}
							<span>支付</span>
						</section>
						<section>月售 {{ shop.recent_order_num }}单</section>
						<section>{{ shop.float_minimum_order_amount }}元起送/距离{{ shop.distance }}</section>
					</section>
				</li>
			</ul>
		</div>
		
		<div class="footer">
			<section class="guide" v-on:click="$router.push({ path:'/' })">
				<img id="waimai" src='../assets/waimai1.png'>
				<span>外卖</span>
			</section>
			<section class="guide">
				<img id="sousuo" src="../assets/sousuo2.png" v-on:click="$router.push({ name: 'search' })">
				<span>搜索</span>
			</section>
			<section class="guide">
				<img id="dingdan" src="../assets/dingdan1.png">
				<span>订单</span>
			</section>
			<section class="guide">
				<img id="wode" src="../assets/wode.png">
				<span>我的</span>
			</section>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	
	export default {
		destroyed:function(){
			this.user_input_data = '';
			Vue.set(this.$store.state.acquireData,6,[]);
		},
		
		computed:{
			user_input_data:{
				get(){
					return this.$store.state.user_input_data
				},
				
				set(value){
					this.$store.state.user_input_data = value
				}
			},
			
			search_result_data(){
				return this.$store.state.acquireData[6]
			},
			
		},
		
		watch:{
			user_input_data: function(value){
				this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v4/restaurants?geohash=' + this.$cookie.get('latitude') + ',' + this.$cookie.get('longitude') + '&keyword=' + value , method: 'GET' , which: 6 , renewway:'set' })
			}
		}
		
	}
</script>

<style>
	.head_middle{
		margin: -0.5rem auto 0 auto;
		
		text-align: center;
		
		color: #FFFFFF;
	}
	
	.search_shop{
		padding-top: 4rem;
		
		background: #FFFFFF;
	}
	
	.search_shop input{
		margin: 1.0rem;
		padding: 0.5rem;
		border: 0.025rem solid #e4e4e4;
		border-radius: 5%;
		
		width: 20.6rem;
		height: 1.5rem;
		
		font-size: 1.2rem;
		font-weight: bold;
		background: #f2f2f2;
	}
	
	.search_shop button{
		position: absolute;
		right: 0.6rem;
		top: 5rem;
		
		padding: 0.5rem;
		width: 6rem;
		height: 2.63rem;
		
		background: #3190E8;
		font-size: 1.2rem;
		font-weight: bold;
		color: #FFFFFF;
		border: 0.025rem solid #3190e8;
		border-radius: 5%;
	}
	
	.search_result{
		background: #FFFFFF;
	}
	
	.search_result header{
		padding-left: 1rem;
		
		font-size: 1.5rem;
		font-weight: bold;
		color: #666666;
	}
	
	.search_result ul{
		list-style: none;
		
		padding: 0;
	}
	
	.search_shop_info{
		display: flex;
		
		padding: 1rem;
		border-bottom: 0.025rem solid #e4e4e4;
	}
	
	.search_shop_info img{
		width: 3.5rem;
		height: 3.5rem;
	}
	
	.search_shop_rightside{
		padding-left: 0.5rem;
		
		font-size: 1.2rem;
		line-height: 1.6rem;
	}
	
	.search_shop_name span{
		color: rgb(255, 96, 0);
		border: 1px solid rgb(255, 96, 0);
	}
</style>
