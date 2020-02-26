<template>
	<div class="food_detail">
		<header class="food_detail_header">
			<span style="position: absolute;top: 0;left: 0;" v-on:click="$router.go(-1)">&lt;</span>
			{{ food_data.name }}
		</header>
		
		<img v-bind:src=" '//elm.cangdu.org/img/' + food_data.image_path ">
		
		<p class="food_inside_description">{{ food_data.description }}</p>
		
		<div class="food_detail_container">
			<section>{{ food_data.name }}</section>
			<section>
				<span>评分</span>
				<section class="shop_rate">
					<div class="shop_rate_info">
						<section class="shop_rate_star">
							<img src="../../assets/start2.png">
							<img src="../../assets/start2.png">
							<img src="../../assets/start2.png">
							<img src="../../assets/start2.png">
							<img src="../../assets/start2.png">
						</section>
											
						<div class="shop_rate_overflow" v-bind:style="{width: food_data.rating*0.7 + 'rem'}">
							<img src="../../assets/start1.png">
							<img src="../../assets/start1.png">
							<img src="../../assets/start1.png">
							<img src="../../assets/start1.png">
							<img src="../../assets/start1.png">
						</div>
					</div>
					<span class="shop_rate_number">{{ food_data.rating }}</span>
				</section>
			</section>
			
			<section>
				<span>月售 {{ food_data.month_sales }}单</span>
				<span>售价 ¥{{ food_data.specfoods_minimun_price }}<span v-if="food_data.specfoods.length > 1">起</span></span>
			</section>
			
			<section>
				评论数 {{ food_data.rating_count }} 好评率 {{ food_data.satisfy_rate }}%
			</section>
		</div>
	</div>
</template>

<script>
	export default{
		computed:{
			food_data(){
				return this.$route.query
			}
		}
	}
</script>

<style>
	.food_detail{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		
		background: #FFFFFF;
	}
	
	.food_detail_header{
		height: 4rem;
		
		text-align: center;
		font-size: 1.6rem;
		font-weight: bold;
		line-height: 4rem;
		color: #FFFFFF;
		
		background: #3190E8;
	}
	
	.food_detail>img{
		width: 100%;
	}
	
	.food_inside_description{
		padding-left: 1rem;
		
		color: #666;
	}
	
	.food_detail_container{
		padding: 1rem ;
	}
	
	.food_detail_container>section{
		margin-bottom: 0.8rem;
	}
	
	.food_detail_container>section:nth-of-type(1){
		font-size: 1.4rem;
	}
	
	.food_detail_container>section:nth-of-type(2){
		display: flex;
	}
	
	.food_detail_container>section:nth-of-type(3){
		font-size: 1.1rem;
	}
	
	.food_detail_container>section:nth-of-type(3) span:nth-of-type(2){
		margin-left: 0.5rem;
		color: #f60;
	}
</style>
