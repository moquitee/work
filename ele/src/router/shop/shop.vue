<template>
	<div class='shop_container' v-if="shop_info">
		<header class="shop_header">
			<section class="shop_title_info">
				<section class="shop_title_up">
					<img v-bind:src="'//elm.cangdu.org/img/'+ shop_info.image_path ">
					<div class="shop_title_right">
						<section class="shop_title">
							{{ shop_info.name }}
						</section>
						<section class="shop_delivery_minute_fee" v-if="shop_info.delivery_mode"><!-- 这里的v-if解决一个bug,但不清楚bug原因 -->
							{{ shop_info.delivery_mode.text }}/{{ shop_info.order_lead_time }}分钟送达/配送费¥{{ shop_info.float_delivery_fee }}
						</section>
						<section class="shop_announcement" v-on:click="$router.push('/shop/shop_detail')">
							公告:{{ shop_info.promotion_info }}
						</section>
					</div>
					<router-link to="/shop/shop_detail">&gt;</router-link>
				</section>
				
				<section class="shop_title_down" v-if="shop_info.activities">
					<section>
						<span class="first_activity_icon"
						v-bind:style="{ 'border-color': '#' + shop_info.activities[0].icon_color , background: '#' + shop_info.activities[0].icon_color}"
						>{{ shop_info.activities[0].icon_name }}</span>
						<span class="first_activity_description"> {{ shop_info.activities[0].description }} </span>
						<span class="first_activity_limit">( APP专享 )</span>
					</section>
					<section>
						<span class="shop_activities_num">{{ shop_info.activities.length }}个活动</span>
						<span class="to_shop_activities">&gt;</span>
					</section>
				</section>
			</section>
			<section class="shop_change_page">
				<router-link to="/shop/menu" replace><span>商品</span></router-link>
				<router-link to="/shop/rate" replace><span>评价</span></router-link>
			</section>
		</header>
		
		<router-view name="shop_menu_or_rate"></router-view>
	</div>
</template>

<script>
	export default{
		created(){
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/restaurant/3278' , method: 'GET' , which: 10 , renewway:'set' })
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/getcategory/1' , method: 'GET' , which: 11 , renewway:'set' })
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores' , method: 'GET' , which: 12 , renewway:'set' })
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags' , method: 'GET' , which: 13 , renewway:'set' })
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10' , method: 'GET' , which: 14 , renewway:'set' })
			this.$router.replace({ path : "/shop/menu" })
		},
		
		computed:{
			shop_info(){
				return this.$store.state.acquireData[10]
			}
		},
	}
</script>

<style>
	.shop_container{
		display: flex;
		flex-direction: column;
		
		height: 100%;
	}
	
	.shop_header{
		position: relative;
	}
	
	.shop_header img{
		width: 6rem;
		height: 6rem;
		
		border-radius: 0.3rem;
		margin-right: 0.5rem;
	}
	
	.shop_title_right{
		margin-right: 2rem;
	}
	
	.shop_title_info{
		background-color: rgba(119,103,137,0.43);
		color: #FFFFFF;
	}
	
	.shop_title_up{
		display: flex;
		padding: 0.8rem 0 0 0.8rem;
	}
	
	.shop_title_up>a{
		position: absolute;
		right: 0.5rem;
		top: 3.4rem;
	}
	
	.shop_title{
		margin-bottom: 0.6rem;
		
		font-size: 1.5rem;
		font-weight: bold;
	}
	
	.shop_delivery_minute_fee{
		margin-bottom: 0.5rem;
	}
	
	.shop_title_info a{
		margin: auto 0;
		
		font-size: 1.3rem;
		color: #FFFFFF;
		text-decoration: none;
	}
	
	.shop_title_down{
		display: flex;
		justify-content: space-between;
		
		padding: 0.8rem;
	}
	
	.first_activity_icon{
		font-size: 0.8rem;
		
		padding: 0.06rem;
		border: 0.04rem solid ;
		border-radius: 0.2rem;
	}
	
	.shop_change_page{
		height: 4.3rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		border-bottom: 0.025rem solid #ECECEC;

		background: #FFFFFF;
	}
	
	.shop_change_page a{
		display: inline-block;
		padding-top: 1.4rem;
		
		text-decoration: none;
		color: #666666;
		
		text-align: center;
		font-size: 1.5rem;
		
		width: 13.5rem;
	}
	
	.shop_change_page a.router-link-active{
		color: #3190E8;
	}
</style>
