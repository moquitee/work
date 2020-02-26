<template>
	<div>
		<header class="add_address_detail_header">
			<span>&lt;</span>
			<h2>搜索地址</h2>
		</header>
		
		<section class="add_address_detail_search_button">
			<input type="text" placeholder="请输入小区/写字楼/学校等" v-model="user_input_search_address" />
			<button v-on:click="search_site()">确认</button>
		</section>
		
		<p class="add_address_detail_advice">为了满足商家的送餐要求，建议您从列表中选择地址</p>

		<section class="position_search_container">
			<ul v-if="search_result && !search_result.message ">
				<li 
				v-for="site in search_result" 
				v-bind:key="site.geohash"
				v-on:click="choose_site(
				{
					address_deatil : site.name,
					address : site.address,
					geohash : site.geohash,
				})"
				>
					<p>{{ site.name }}</p>
					<p>{{ site.address }}</p>
				</li>
			</ul>
		</section>
		
		<section class="add_address_detail_tips" v-show="(search_result && search_result.length == 0 ) || ( search_result && search_result.message )">
			<p>找不到地址？</p>
			<p>请尝试输入小区、写字楼或学校名</p>
			<p>详细地址（如门牌号）可稍后输入哦。</p>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				user_input_search_address:'',
			}
		},
		
		computed:{
			search_result(){
				return this.$store.state.acquireData[3]
			}
		},
		
		methods:{
			search_site(){
				this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v1/pois?type=nearby&keyword=' + this.user_input_search_address , method: 'GET' , which: 3 , renewway:'set'})
			},
			
			choose_site( anObject ){
				this.$root.$emit('accept_site',anObject)
				this.$router.push({ name: 'add_address_detail' })
			}
		}
	}
</script>

<style>
	.add_address_detail_header{
		position: fixed;
		z-index: 31;
		
		width: 100%;
		height: 4rem;
		
		text-align: center;
		font-size: 1.2rem;
		line-height: 4rem;
		color: #FFFFFF;
		background: #3190E8;
	}
	
	
	.add_address_detail_header>span{
		position: absolute;
		left: 0.5rem;
		
		font-size: 2rem;
	}
	
	.add_address_detail_search_button{
		display: flex;
		align-items: center;
		
		margin-top: 4rem;
		padding: 3%;
		width: 94%;
		height: 4rem;
		
		background: #FFFFFF;
	}
	
	.add_address_detail_search_button>input{
		width: 22rem;
		height: 3rem;
		border: 0.05rem solid #ddd;
		border-radius: 0.4rem;
		padding-left: 0.6rem;
		
		background: #f2f2f2;
		
		font-size: 1.2rem;
	}
	
	.add_address_detail_search_button>button{
		width: 5rem;
		height: 3rem;
		margin-left: 0.8rem;
		
		border: none;
		border-radius: 0.4rem;
		
		background: #3190E8;
		color: #FFFFFF;
		font-size: 1.2rem;
	}
	
	.add_address_detail_advice{
		line-height: 2rem;
		font-size: 1.15rem;
		text-align: center;
		color: #ff883f;
		
		background: #fff6e4;
	}
	
	.add_address_detail_tips{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		
		width: 100%;
	}
	
	.add_address_detail_tips>p{
		font-size: 1.3rem;
		color: #969696;
		text-align: center;
		
		margin-bottom: 0.8rem;
	}
	
	.position_search_container{
		background: #f2f2f2;
	}
	
	.position_search_container>ul>li{
		padding: 0.8rem;
		border-bottom: 1px solid #CCCCCC;
		
		font-size: 1.25rem;
		color: #969696;
	}
	
	.position_search_container>ul>li>p:first-of-type{
		margin-bottom: 0.6rem;
	}
</style>
