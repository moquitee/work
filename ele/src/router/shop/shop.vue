<template>
	<div class='shop_container' v-if="shop_info">
		<header class="shop_header">
			<section class="shop_title_info">
				<span class="shop_back" v-on:click="$router.go(-1)">&lt;</span>
				<section class="shop_title_up">
					<img v-bind:src="'//elm.cangdu.org/img/'+ shop_info.image_path ">
					<div class="shop_title_right">
						<section class="shop_title">
							{{ shop_info.name }}
						</section>
						<section class="shop_delivery_minute_fee" v-if="shop_info.delivery_mode"><!-- 这里的v-if解决一个bug,但不清楚bug原因 -->
							{{ shop_info.delivery_mode.text }}/{{ shop_info.order_lead_time }}分钟送达/配送费¥{{ shop_info.float_delivery_fee }}
						</section>
						<section class="shop_announcement" v-on:click="$router.push({ name:'shop_detail'})">
							公告:{{ shop_info.promotion_info }}
						</section>
					</div>
					<router-link to="/shop/shop_detail">&gt;</router-link>
				</section>
				
				<!-- 注意这里有个bug,已解决 -->
				<section class="shop_title_down" v-if="shop_info.activities && shop_info.activities.length >0 " v-on:click="open_activities_page()">
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
				<router-link :to="{ name : 'shop_menu' }" replace><span>商品</span></router-link>
				<router-link :to="{ name : 'shop_rate' }" replace><span>评价</span></router-link>
			</section>
		</header>
		
		<div class="activities_detail" v-if="shop_info.activities && shop_info.activities.length >0 " v-show="activities_status">
			<header class="activities_header">
				{{ shop_info.name }}
			</header>
			
			<section>
				<h5><span>优惠信息</span></h5>
				<section v-for="activity in shop_info.activities" v-bind:key="activity.id">
					<span class="activities_icon" v-bind:style="{ 'background-color' : '#' + activity.icon_color , 'border-color' : '#' + activity.icon_color }">{{ activity.icon_name }}</span>
					<span>{{ activity.name }}（APP专享）</span>
				</section>
			</section>
			
			<section>
				<h5><span>商家公告</span></h5>
				<p>{{ shop_info.promotion_info }}</p>
			</section>
			
			<span class="activities_shut_button" v-on:click="shut_shop_activities()">X</span>
		</div>
		
		<router-view name="shop_menu_or_rate"></router-view>
		
		<router-view name="full_page" class="shop_full_page"></router-view>
	</div>
</template>

<script>
	export default{
		created(){
			window.console.log(this.shop_id)
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/restaurant/'+ this.shop_id , method: 'GET' , which: 10 , renewway:'set' })
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/getcategory/' + this.shop_id , method: 'GET' , which: 11 , renewway:'set' })
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/ugc/v2/restaurants/' + this.shop_id + '/ratings/scores' , method: 'GET' , which: 12 , renewway:'set' })
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/ugc/v2/restaurants/' + this.shop_id + '/ratings/tags' , method: 'GET' , which: 13 , renewway:'set' })
			this.$router.replace({ name:'shop_menu'})
		},
		
		data(){
			return {
				activities_status: 0, //设置为0时，活动页面关闭 ; 为1时，打开
			}
		},
		
		computed:{
			shop_id(){
				return this.$route.params.shop_id
			},
			
			shop_info(){
				return this.$store.state.acquireData[10]
			}
		},
		
		methods:{
			open_activities_page(){
				this.activities_status = 1
			},
			
			shut_shop_activities(){
				this.activities_status = 0
			}
		}
	}
</script>

<style>
	.shop_container{
		position: absolute;
		top: 0;
		left: 0;
		
		display: flex;
		flex-direction: column;
		
		height: 100%;
	}
	
	.shop_header{
		position: relative;
	}
	
	.shop_back{
		position: absolute;
		left: 0.3rem;
		
		font-size: 2rem;
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
		padding: 0.8rem 0 0.8rem 0.8rem;
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
		
		padding: 0 0.8rem 0.8rem 0.8rem;
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
	
	.activities_detail{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 17;
		
		padding: 2.5rem ;
		
		background-color: #262626;
		color: #FFFFFF;
	}
	
	.activities_header{
		text-align: center;
		word-wrap: break-word;
		
		font-size: 1.6rem;
	}
	
	.activities_detail>section h5{
		text-align: center;
	}
	
	.activities_detail>section h5>span{
		border: 0.05rem solid #555;
		border-radius: 25%;
		padding: 0.5rem;
	}
	
	.activities_detail>section>section {
		margin-bottom: 0.5rem;
	}
	
	.activities_detail>section:nth-of-type(1){
		margin: 5rem 0;
	}
	
	.activities_icon{
		margin-right: 0.5rem;
		
		padding: 0.1rem;
		border: 0.025rem;
		border-radius: 10%;
		
	}
	
	.activities_shut_button{
		position: absolute;
		bottom: 2rem;
		left: 13rem;
		
		border: 0.04rem solid #555;
		border-radius: 50%;
		padding: 0.6rem 1.2rem;
		
		font-size: 2rem;
		color: rgb(153, 153, 153);
	}
	
	.shop_full_page{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 16;
		
		background: #f5f5f5;
	}
</style>
