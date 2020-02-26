<template>
	<div>
		<header class="rate_score_container" v-if="rate_score_data">
			<div class="rate_score_left">
				<p>{{ Math.floor(rate_score_data.food_score * 10) / 10 }}</p>
				<p>综合评价</p>
				<p>高于周边商家{{ rate_score_data.compare_rating.toFixed(3) * 100 }}%</p>
			</div>
			<div class="rate_score_right">
				<section>
					<span>服务态度</span>
					<div class="shop_rate_info">
						<section class="shop_rate_star">
							<img src="../../assets/start2.png">
							<img src="../../assets/start2.png">
							<img src="../../assets/start2.png">
							<img src="../../assets/start2.png">
							<img src="../../assets/start2.png">
						</section>
												
						<div class="shop_rate_overflow" v-bind:style="{width: 0.7*rate_score_data.service_score + 'rem'}">
							<img src="../../assets/start1.png">
							<img src="../../assets/start1.png">
							<img src="../../assets/start1.png">
							<img src="../../assets/start1.png">
							<img src="../../assets/start1.png">
						</div>
					</div>
					
					<span class="service_and_food_rate_score">{{ rate_score_data.service_score.toFixed(1) }}</span>
				</section>
				<section>
					<span>菜品评价</span>
					<div class="shop_rate_info">
						<section class="shop_rate_star">
							<img src="../../assets/start2.png">
							<img src="../../assets/start2.png">
							<img src="../../assets/start2.png">
							<img src="../../assets/start2.png">
							<img src="../../assets/start2.png">
						</section>
												
						<div class="shop_rate_overflow" v-bind:style="{width: 0.7*rate_score_data.food_score + 'rem'}">
							<img src="../../assets/start1.png">
							<img src="../../assets/start1.png">
							<img src="../../assets/start1.png">
							<img src="../../assets/start1.png">
							<img src="../../assets/start1.png">
						</div>
					</div>
					<span class="service_and_food_rate_score">{{ rate_score_data.food_score.toFixed(1) }}</span>
				</section>
				
				<section>
					<span>送达时间</span>
					<span class="rate_delivery_time">{{ rate_score_data.deliver_time }}分钟</span>
				</section>
			</div>
		</header>
		
		<div class="user_rate_container" v-if="rate_category_data.length">
			<ul class="rate_category">
				<li
				v-for="category in rate_category_data"
				v-bind:key="category._id"
				v-bind:class="{ unsatisfied: category.unsatisfied }"
				>{{ category.name }}({{ category.count }})</li>
			</ul>
			
			<ul class="user_rate">
				<li v-for="rate in user_rate_data " v-bind:key="rate.id">
					<img class="user_avatar"
					v-if="rate.avatar"
					v-bind:src="'https://fuss10.elemecdn.com/'+ $shop.get_valid_img_url(rate.avatar) + '.jpeg'">
					<img class="user_avatar"
					v-else
					src="//elm.cangdu.org/img/default.jpg">
					<div class="user_rate_right">
						<section>
							<span>{{ rate.username }}</span>
							<span>{{ rate.rated_at }}</span>
						</section>
						
						<section>
							<div class="shop_rate_info">
								<section class="shop_rate_star">
									<img src="../../assets/start2.png">
									<img src="../../assets/start2.png">
									<img src="../../assets/start2.png">
									<img src="../../assets/start2.png">
									<img src="../../assets/start2.png">
								</section>
														
								<div class="shop_rate_overflow" v-bind:style="{width: 0.7*rate.rating_star + 'rem'}">
									<img src="../../assets/start1.png">
									<img src="../../assets/start1.png">
									<img src="../../assets/start1.png">
									<img src="../../assets/start1.png">
									<img src="../../assets/start1.png">
								</div>
							</div>
							<span class="time_spent_desc" v-show="rate.time_spent_desc">{{ rate.time_spent_desc }}</span>
						</section>
						
						<section class="user_rate_img">
							<img 
							v-for="rate_img in rate.item_ratings"
							v-show="rate_img.image_hash"
							v-bind:src="'https://fuss10.elemecdn.com/' + $shop.get_valid_img_url(rate_img.image_hash) + '.jpeg'"
							v-bind:key="rate_img._id"
							>
						</section>
						
						<section class="user_rate_label">
								<span
								v-for="food in rate.item_ratings"
								v-bind:key="food.food_id"
								>{{ food.food_name }}</span>
						</section>
					</div>
				</li>
				
				<li>
					<img class="user_avatar" src="//elm.cangdu.org/img/default.jpg">
					<div class="user_rate_right">
						<section>
							<span>用户**********名称</span>
							<span>2017-02-10</span>
						</section>
						
						<section>
							<div class="shop_rate_info">
								<section class="shop_rate_star">
									<img src="../../assets/start2.png">
									<img src="../../assets/start2.png">
									<img src="../../assets/start2.png">
									<img src="../../assets/start2.png">
									<img src="../../assets/start2.png">
								</section>
														
								<div class="shop_rate_overflow" v-bind:style="{width: 0.7*4 + 'rem'}">
									<img src="../../assets/start1.png">
									<img src="../../assets/start1.png">
									<img src="../../assets/start1.png">
									<img src="../../assets/start1.png">
									<img src="../../assets/start1.png">
								</div>
							</div>
							<span class="time_spent_desc">按时送达</span>
						</section>
						
						<section class="user_rate_img">
							<img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/0/74/e0e203f613deff4e456c31e4177d1jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/0/74/e0e203f613deff4e456c31e4177d1jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/0/74/e0e203f613deff4e456c31e4177d1jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/0/74/e0e203f613deff4e456c31e4177d1jpeg.jpeg">
						</section>
						
						<section class="user_rate_label">
								<span>超级至尊比萨-铁盘</span>
								<span>韩式浓情风味鸡（标准份）</span>
						</section>
					</div>
				</li>
				
				<li>
					<img class="user_avatar" src="//elm.cangdu.org/img/default.jpg">
					<div class="user_rate_right">
						<section>
							<span>用户**********名称</span>
							<span>2017-02-10</span>
						</section>
						
						<section>
							<div class="shop_rate_info">
								<section class="shop_rate_star">
									<img src="../../assets/start2.png">
									<img src="../../assets/start2.png">
									<img src="../../assets/start2.png">
									<img src="../../assets/start2.png">
									<img src="../../assets/start2.png">
								</section>
														
								<div class="shop_rate_overflow" v-bind:style="{width: 0.7*4 + 'rem'}">
									<img src="../../assets/start1.png">
									<img src="../../assets/start1.png">
									<img src="../../assets/start1.png">
									<img src="../../assets/start1.png">
									<img src="../../assets/start1.png">
								</div>
							</div>
							<span class="time_spent_desc">按时送达</span>
						</section>
						
						<section class="user_rate_img">
							<img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/0/74/e0e203f613deff4e456c31e4177d1jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/0/74/e0e203f613deff4e456c31e4177d1jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/0/74/e0e203f613deff4e456c31e4177d1jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg">
							<img src="https://fuss10.elemecdn.com/0/74/e0e203f613deff4e456c31e4177d1jpeg.jpeg">
						</section>
						
						<section class="user_rate_label">
								<span>超级至尊比萨-铁盘</span>
								<span>韩式浓情风味鸡（标准份）</span>
						</section>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		created() {
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10' , method: 'GET' , which: 14 , renewway:'set' })
		},
		
		computed:{
			rate_score_data(){
				return this.$store.state.acquireData[12]
			},
			
			rate_category_data(){
				return this.$store.state.acquireData[13]
			},
			
			user_rate_data(){
				return this.$store.state.acquireData[14]
			}
		}
	}
</script>

<style>
	.rate_score_container,.rate_score_container section{
		display: flex;
	}
	
	.rate_score_container{
		padding: 1.5rem 1rem;
		border-bottom: 0.025rem solid #ECECEC;
		margin-bottom: 1rem;
		
		background: #FFFFFF;
	}
	
	.rate_score_left{
		flex: 3;
		
		text-align: center;
	}
	
	.rate_score_left p:nth-of-type(1){
		font-size: 2rem;
		color: #f60;
	}
	
	.rate_score_left p:nth-of-type(2){
		margin-bottom: 0.3rem;
		
		font-size: 1.2rem;
		color: #666;
	}
	
	.rate_score_left p:nth-of-type(3){
		font-size: 0.8rem;
		color: #999;
	}
	
	.rate_score_right{
		flex: 4;
		
	}
	
	.rate_score_right>section{
		align-items: center;
	}
	
	.rate_score_right section span:nth-child(1){
		font-size: 1.1rem;
		line-height: 1.95rem;
		color: #666;
		
		margin-right: 1rem;
	}
	
	.service_and_food_rate_score{
		margin-left: 1rem;
		
		color: #f60;
	}
	
	.rate_delivery_time{
		font-size: 0.8rem;
		color: #999;
	}
	
	.user_rate_container{
		border-top: 0.025rem solid #ECECEC;
		padding: 1rem;
		
		background: #FFFFFF;
	}
	
	.rate_category{
		display: flex;
		flex-wrap: wrap;
		
		margin-bottom: 1rem;
	}
	
	.rate_category li{
		margin-right: 0.8rem;
		margin-bottom: 0.4rem;
		padding: 0.6rem;
		border:0.03rem;
		border-radius: 6%;
		
		background: #ebf5ff;
		font-size: 1.1rem;
		color: #6d7885;
	}
	
	.rate_category li.unsatisfied{
		background: #f5f5f5;
		color: #aaa;
	}
	
	.rate_category li.active,.rate_category li.unsatisfied.active{
		background: #3190E8;
		color: #FFFFFF;
	}
	
	.user_rate li{
		display: flex;
		
		border-top: 0.03rem solid #ECECEC;
		padding: 1rem 0;
	}
	
	.user_avatar{
		width: 3rem;
		height: 3rem;
		margin-right: 1.5rem;
		border-radius: 50%;
	}
	
	.user_rate_right{
		flex: 1;
	}
	
	.user_rate_right>section{
		display: flex;
	}
	
	.user_rate_right section:first-child{
		color: #666;
		
		justify-content: space-between;
	}
	
	.user_rate_right section:first-child span:last-child{
		color: #999;
		font-size: 0.8rem;
	}
	
	.user_rate_right section:nth-child(2){
		align-items: center;
	}
	
	.time_spent_desc{
		margin-left: 0.5rem;
	}
	
	.user_rate_img,.user_rate_label{
		flex-wrap: wrap;
	}	
	
	.user_rate_img img{
		width: 5rem;
		height: 5rem;
		
		margin-right: 0.8rem;
		margin-bottom: 0.5rem;
	}
	
	.user_rate_label span{
		width: 4rem;
		margin-right: 0.7rem;
		padding: 0.4rem;
		border: 0.04rem solid #ebebeb;
		border-radius: 6%;
		
		font-size: 1.1rem;
		color: #999;
		
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
