<template>
	<div>
		<header class="add_address_detail_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>搜索地址</h2>
		</header>
		
		<section class="add_address_detail_search_button">
			<input type="text" placeholder="请输入小区/写字楼/学校等" v-model="user_input_search_address" v-on:keydown.enter="search_site()" />
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
					address_detail : site.name,
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
				this.$root.$emit('check_accept_site',anObject)
				this.$router.replace({ name: 'check_add_address' })
			}
		}
	}
</script>

<style>
</style>
