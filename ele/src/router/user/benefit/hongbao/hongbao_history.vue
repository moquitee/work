<template>
	<div class="hongbao_history_page">
		<header class="hongbao_history_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>历史红包</h2>
		</header>
		
		<section class="hongbao_list_container">
			<ul v-if="expire_hongbao">
				<li class="hongbao_history_hongbao_list_item"
				v-for="hongbao in expire_hongbao"
				v-bind:key="hongbao.id"
				>
					<section>
						<section>
							<section>
								<span class="bolder">¥</span>
								<span class="bolder">{{ Math.floor(hongbao.amount) }}</span>
								<span class="bolder">.</span>
								<span class="bolder">{{ (hongbao.amount*10)%10 }}</span>
							</section>
						
							<p>满28元可用</p>
						</section>
						
						<section>
							<p>{{ hongbao.description_map.sum_condition }}</p>
							<p>{{ hongbao.end_date }}</p>
							<p>{{ hongbao.description_map.phone }}</p>
						</section>
					
						<section>
							<img src="../../../../assets/expire.jpg">
						</section>
						
					</section>
					
					<footer v-if="hongbao.limit_map">
						<p>{{ hongbao.limit_map.restaurant_flavor_ids }}</p>
					</footer>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	export default{
		created() {
			this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/promotion/v2/users/' + this.user_id + '/expired_hongbaos?limit=5&offset=0' , method: 'GET' , which: 25 , renewway:'set' });
		},
		
		computed:{
			user_id(){
				return localStorage.getItem('user_id')
			},
			
			expire_hongbao(){
				return this.$store.state.acquireData[25]
			}
		}
	}
</script>

<style>
	.hongbao_history_page{
		bottom: auto;
	}
	
	.hongbao_history_header{
		position: fixed;
		z-index: 80;
		
		width: 100%;
		height: 4rem;
		
		text-align: center;
		font-size: 1.2rem;
		line-height: 4rem;
		color: #FFFFFF;
		background: #3190E8;
	}
	
	.hongbao_history_header>span{
		position: absolute;
		left: 0.5rem;
		
		font-size: 2rem;
	}
	
	.hongbao_history_header+.hongbao_list_container{
		margin-top: 6rem;
	}
	
	.hongbao_list_container>ul>.hongbao_history_hongbao_list_item>section{
		background: #FFFFFF url(../../../../assets/hongbao_border_grey.png) repeat-x;
	}
	
	.hongbao_list_container>ul>.hongbao_history_hongbao_list_item>section span.bolder {
		font-weight: bold;
		color: #ccc;
	}
	
	.hongbao_list_container>ul>.hongbao_history_hongbao_list_item>section span.bolder:nth-of-type(1){
		font-size: 1.5rem;
	}
	
	.hongbao_list_container>ul>.hongbao_history_hongbao_list_item>section span.bolder:nth-of-type(2){
		font-weight: normal;
		font-size: 4rem;
	}
	
	.hongbao_list_container>ul>.hongbao_history_hongbao_list_item>section span.bolder:nth-of-type(3){
		font-size: 2rem;
	}
	
	.hongbao_list_container>ul>.hongbao_history_hongbao_list_item>section span.bolder:nth-of-type(4){
		font-size: 2rem;
	}
	
	.hongbao_list_container>ul>.hongbao_history_hongbao_list_item>section>section:nth-of-type(2){
		margin-top: 1rem;
	}
	
	.hongbao_list_container>ul>.hongbao_history_hongbao_list_item>section>section:nth-of-type(3){
		margin: 0;
		flex: 0.3;
	}
</style>
