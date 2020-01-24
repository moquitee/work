<template>
	<div>
		<div class="header">
			<router-link class="ele" to="/">&lt;</router-link>
			<h1 class="head_middle" > 商超便利 </h1>
		</div>
		
		<!-- v-on:click.stop 防止事件冒泡 -->
		<section class="navigation_bar" >
			<div class="category_container" v-on:click="nav_chosen(1)" v-bind:class="{ nav_text_chosen:nav_chosen_num == 1 }">
					准时达
			</div>
			<div class="sort_container" v-on:click="nav_chosen(2)" v-bind:class="{ nav_text_chosen:nav_chosen_num == 2 }">
					排序
			</div>
			<div class="screen_container" v-on:click="nav_chosen(3)" v-bind:class="{ nav_text_chosen:nav_chosen_num == 3 }">
					筛选
			</div>
		</section>
		
		<div>
			<section class="category" v-bind:class="{ nav_chosen:nav_chosen_num == 1 }">
				<section class="category_left">
					<ul class="category_list" v-if="category_data.length">
						<li class="category_list_info" 
						v-for="(category , index ) in category_data" 
						v-bind:key="category.id"
						v-bind:class="{ category_left_chosen_style: category_chosen_index == index }"
						v-on:click.stop="category_chosen_index = index"
						>
							<section class="category_list_info_label">
								<img v-bind:src="'https://fuss10.elemecdn.com/'+ category.image_url.slice(0,1) + '/' + category.image_url.slice(1,3) + '/' + category.image_url.slice(3) +'.png'">
								<span> {{ category.name }}</span>
							</section>
							<section class="category_list_info_number">
								<span>{{ category.count }}</span>
								&gt;
							</section>
						</li>
					</ul>
				</section>
				<section class="category_right">
					<ul class="category_right_list" v-if="category_chosen_index">
						<li class="category_right_info" 
						v-for="sub_category in category_data[category_chosen_index].sub_categories"
						v-bind:key="sub_category.id"
						v-on:click="sub_category_has_chosen(sub_category.id)"
						>
							<span>{{ sub_category.name }}</span>
							<span>{{ sub_category.count }}</span>
						</li>
					</ul>
				</section>
			</section>
			
			<section class="sort" v-bind:class="{ nav_chosen:nav_chosen_num == 2 }">
				<ul class="sort_content">
					<li class="sort_info" v-on:click="sort_has_chosen(4)" v-bind:class="{ sort_chosen_style:sort_chosen_num == 4 }">
						<section>
							<img src="../assets/zhineng.png">
							<span> 智能排序</span>
						</section>
					</li>
					<li class="sort_info" v-on:click="sort_has_chosen(5)" v-bind:class="{ sort_chosen_style:sort_chosen_num == 5 }">
						<section>
							<img src="../assets/jvli.png">
							<span> 距离最近</span>
						</section>
					</li>
					<li class="sort_info" v-on:click="sort_has_chosen(6)" v-bind:class="{ sort_chosen_style:sort_chosen_num == 6 }">
						<section>
							<img src="../assets/xiaoliang.png">
							<span> 销量最高</span>
						</section>
					</li>
					<li class="sort_info" v-on:click="sort_has_chosen(1)" v-bind:class="{ sort_chosen_style:sort_chosen_num == 1 }">
						<section>
							<img src="../assets/qisongjia.png">
							<span> 起送价最低</span>
						</section>
					</li>
					<li class="sort_info" v-on:click="sort_has_chosen(2)" v-bind:class="{ sort_chosen_style:sort_chosen_num == 2 }">
						<section>
							<img src="../assets/peisong.png">
							<span> 配送速度最快</span>
						</section>
					</li>
					<li class="sort_info" v-on:click="sort_has_chosen(3)" v-bind:class="{ sort_chosen_style:sort_chosen_num == 3 }">
						<section>
							<img src="../assets/pingfen.png">
							<span> 评分最高</span>
						</section>
					</li>
				</ul>
			</section>
			
			<section class="screen" v-bind:class="{ nav_chosen:nav_chosen_num == 3 }">
				<section class="screen_delivery_mode">
					<section class="screen_delivery_mode_text">配送方式</section>
					<ul class="screen_delivery_mode_list" v-if="screen_delivery_mode.length">
						<li class="screen_delivery_mode_option"
						v-for="item in screen_delivery_mode"
						v-bind:key="item.id"
						v-bind:class="{ delivery_modes_and_shop_activities_chosen_style:screen_delivery_modes_chosen_ids.includes(item.id)}"
						v-on:click="screen_delivery_mode_or_shop_activities_has_chosen(0,item.id)"
						>
							<img src="../assets/bird.png"><span>{{ item.text }}</span>
						</li>
					</ul>
				</section>
				<section class="screen_shop_property">
					<section class="screen_shop_property_text">商家属性(可以多选)</section>
					<ul class="screen_shop_property_list" v-if="screen_shop_activities.length">
						<li class="screen_shop_property_list_option"
						v-for="item in screen_shop_activities"
						v-bind:key="item.id"
						v-bind:class="{ delivery_modes_and_shop_activities_chosen_style:screen_shop_activities_chosen_ids.includes(item.id)}"
						v-on:click="screen_delivery_mode_or_shop_activities_has_chosen(1,item.id)"
						>
							<span v-bind:style="{ 'border-color': '#' + item.icon_color , color: '#'+item.icon_color }" >
								{{ item.icon_name }}
							</span>
							{{ item.name }}
						</li>
					</ul>
				</section>
				<footer class="screen_footer">
					<button class="screen_footer_clear" v-on:click="screen_clear()">清空</button>
					<button class="screen_footer_certain" v-on:click="screen_certain()">确定<span v-show="screen_count">({{ screen_count }})</span></button>
				</footer>
			</section>
		</div>
		
		<div class="shop_category_shop_container">
			<ul class="shoplist" v-if="shop_info.length" v-on:touchend="shop_loading">
				<li class="shopinfo" v-for="shop in shop_info" v-bind:key="shop.id">
					<img v-bind:src="'//elm.cangdu.org/img/'+shop.image_path" class="shop_img">
					
					<section class="shop_right">
						<header class="shop_detail_top">
							<span>
								<span class="prestige" v-if="shop.is_premium">品牌</span>
								<span class="shop_name">{{ shop.name }}</span>
							</span>
							<ul class="shop_support" v-if="shop.supports">
								<li v-for="support in shop.supports" v-bind:key="support.id">{{ support.icon_name }}</li>
							</ul>
						</header>
						
						<h5 class="shop_detail_middle">
							<section class="shop_rate_left">
								<section class="shop_rate">
									<div class="shop_rate_info">
										<section class="shop_rate_star">
											<img src="../assets/start2.png">
											<img src="../assets/start2.png">
											<img src="../assets/start2.png">
											<img src="../assets/start2.png">
											<img src="../assets/start2.png">
										</section>
							
										<div class="shop_rate_overflow" v-bind:style="{width: shop.rating*0.7 + 'rem'}">
											<img src="../assets/start1.png">
											<img src="../assets/start1.png">
											<img src="../assets/start1.png">
											<img src="../assets/start1.png">
											<img src="../assets/start1.png">
										</div>
									</div>
								<span class="shop_rate_number">{{ shop.rating }}</span>
							</section>
							
								<section class="order_sales_quantities">月售{{ shop.recent_order_num }}单</section>
							</section>
							
							<!-- array.some(函数) 迭代array里面的对象，满足函数输出ture，some()就会输出true -->
							<section class="order_service" v-if="shop.delivery_mode " >
								<span class="bird_delivery">{{ shop.delivery_mode.text}}</span>
								<span class="intime_delivery" 
								v-if="shop.supports.some(item=>{
									return item.id == 9;
									})">准时达</span>
							</section>
						</h5>
						
						<h5 class="delivery_info">
							<p class="fee">¥{{ shop.float_minimum_order_amount }}起送<span>/</span>配送费约¥{{ shop.float_delivery_fee }}</p>
							
							<p class="distance_time">
								<span class="distance">{{ shop.distance }}</span>
								<span>/</span>
								<span class="order_time">{{ shop.order_lead_time }}</span>
							</p>
						</h5>
					</section>
				</li>
			</ul>
			
			<div class="back_to_top" ref="back_to_top_button" v-on:click="back_to_top">
				回到顶部
			</div>
		</div>
	</div>
	
	
</template>

<script>
	import Vue from 'vue';
	
	export default{
		created(){
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/v2/restaurant/category', method: 'GET' , which: 7 , renewway:'set' });
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes', method: 'GET' , which: 8 , renewway:'set' });
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes', method: 'GET' , which: 9 , renewway:'set' });
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/restaurants?latitude='+ this.latitude + '&longitude='+ this.longitude + '&restaurant_category_id='+ this.category_id , method: 'GET' , which: 5 , renewway:'set' });
			window.console.log(this.category_id)
			this.fetch_offset = 20;
		},
		
		// 监听滚动事件，显示回到顶部按钮
		mounted:function(){
				window.addEventListener('scroll',this.show_back_to_top_button,false)
		},
		
		// 销毁滚动事件的监听
		// 清空获取到的信息
		destroyed:function(){
			window.removeEventListener('scroll',this.show_back_to_top_button);
			Vue.set(this.$store.state.acquireData,5,[]);
		},
		
		data(){
			return {
				//分类中的选择
				category_chosen_index: undefined,
				
				//导航条中的选择
				nav_chosen_num: 0,
				
				screen_delivery_modes_chosen_ids: [],
				
				screen_shop_activities_chosen_ids: [],
				
				sub_category_chosen_id: undefined,
				sort_chosen_num: 4,
				screen_chosen_id: '', // string
				
				fetch_offset: 0,
			}
		},
		
		computed:{
			category_id(){
				// 帮this.$route.query.id换个名字，它是路由跳转时传进来的参数
				return this.$route.query.id
			},
			
			longitude(){
				return this.$cookie.get('longitude')
			},
			
			latitude(){
				return this.$cookie.get('latitude')
			},
			
			category_data(){
				return this.$store.state.acquireData[7]
			},
			
			screen_delivery_mode(){
				return this.$store.state.acquireData[8]
			},
			
			screen_shop_activities(){
				return this.$store.state.acquireData[9]
			},
			
			screen_count(){
				return this.screen_delivery_modes_chosen_ids.length + this.screen_shop_activities_chosen_ids.length
			},
			
			shop_info(){
				return this.$store.state.acquireData[5]
			},
			
		},
		
		methods:{
			// 控制导航条选中
			nav_chosen(num){
				if (num == this.nav_chosen_num ){
					this.nav_chosen_num = 0;
				}
				else{
					this.nav_chosen_num = num;
					window.console.log(num)
				}
			},
			
			sub_category_has_chosen(id){
				this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]='+ id + '&order_by=' + this.sort_chosen_num + this.screen_chosen_id, method: 'GET' , which: 5 , renewway:'set' });
				this.sub_category_chosen_id = id;
				this.fetch_offset = 20;
				this.nav_chosen_num = 0
			},
			
			sort_has_chosen(num){
				this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]='+ this.sub_category_chosen_id + '&order_by=' + num + this.screen_chosen_id, method: 'GET' , which: 5 , renewway:'set' })
				this.sort_chosen_num = num;
				this.fetch_offset = 20;
				this.nav_chosen_num = 0;
			},
			
			screen_delivery_mode_or_shop_activities_has_chosen(which,id){ // which:0是配送方式 1是商家活动
				let ids = which ? this.screen_shop_activities_chosen_ids : this.screen_delivery_modes_chosen_ids;
				if ( ids.includes(id) ){
					ids.splice(ids.indexOf(id),1)
				}
				else{
					ids.push(id)
				}
				window.console.log(id)
				window.console.log(ids)
			},
			
			screen_clear(){
				this.screen_shop_activities_chosen_ids = [];
				this.screen_delivery_modes_chosen_ids = [];
			},
			
			screen_certain(){
				let string = '';
				this.screen_delivery_modes_chosen_ids.forEach((value) =>{
					string += ('&support_ids[]=' + value)
				});
				this.screen_shop_activities_chosen_ids.forEach((value) =>{
					string += ('&support_ids[]=' + value)
				})
				this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]='+ this.sub_category_chosen_id + '&order_by=' + this.sort_chosen_num + string , method: 'GET' , which: 5 , renewway:'push' })
				this.screen_chosen_id = string;
				this.fetch_offset = 20;
				this.nav_chosen_num = 0;
			},
			
			shop_loading(){
				let hiddenHeight = document.body.scrollHeight - window.innerHeight - window.pageYOffset
				if (hiddenHeight < 40){
					this.fetch_offset += 20;
					this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_ids[]='+ this.sub_category_chosen_id + '&order_by=' + this.sort_chosen_num + this.screen_chosen_id + '&offset=' +this.fetch_offset , method: 'GET' , which: 5 , renewway:'push' })
				}
			},
			
			show_back_to_top_button:function(){
				if ( document.body.scrollTop > 700 ){
					this.$refs.back_to_top_button.style.display = "block"
				}else {
					this.$refs.back_to_top_button.style.display = "none"
				}
			},
			
			back_to_top:function(){
				var id;
				// 使用间隔函数的理由===》当点击回到顶部的时候，不是一下子滚动距离就变成0，
				// 而是形成一个过渡的过程，每隔16毫秒，current-100
				id = setInterval(function(){
					let current = document.body.scrollTop
					if ( current === 0 ){
						clearInterval(id);
					}
					document.body.scrollTop = current - 100 // 形成一个慢慢过渡到0的过程
				},16)
			}
		},
		
	}
</script>

<style>
	.navigation_bar{
		display: flex;
		
		position: fixed;
		top: 4rem;
		z-index: 998;
		
		color: #000000;
		
		border-bottom: 0.025rem solid #ECECEC;
	}
	
	.navigation_bar div{
		width: 10rem;
		text-align: center;
		background: #FFFFFF;
		
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	
	.sort_container{
		border-left: 0.025rem solid #e4e4e4;
		border-right: 0.025rem solid #e4e4e4;
	}
	
	.category{
		position: fixed;
		top: 6.125rem;
		width: 30rem;
		z-index: 16;
		
		border-top: 0.025rem solid #e4e4e4;
		
		background: #FFFFFF;
		
		display: flex;
	}
	
	.category_left{
		flex: 1;
		background: #f5f5f5;
		
		height: 21rem;
		overflow-y: auto;
	}
	
	.category_right{
		flex: 1;
		
		height: 21rem;
		overflow-y: auto;
	}
	
	.category_list{
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.category_list_info{
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 1rem;
		padding-bottom: 0.5rem;
		
		display: flex;
		justify-content: space-between;
		
		font-size: 1.0rem;
	}
	
	.category_list_info_label img{
		margin: auto 0;
		
		width: 1.5rem;
		height: 1.5rem;
		
		vertical-align: middle;
	}
	
	.category_list_info_label span{
		color: #666666;
		vertical-align:middle;
	}
	
	.category_list_info_number span{
		font-size: 0.7rem;
		font-weight: bold;
		color: #FFFFFF;
		padding: 0.2rem;
		border: 0.025rem solid #ccc;
		border-radius: 0.8rem;
		background: #CCCCCC;
		vertical-align:middle;
	}
	
	.category_right_list{
		list-style: none;
		padding: 0;
		
		margin: 0;
	}
	
	.category_right_info{
		display: flex;
		justify-content: space-between;
		
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 1rem;
		padding-bottom: 0.5rem;
		
		border-bottom: 0.025rem solid #E4E4E4;
		
		font-size: 1.2rem;
	}
	
	.sort{
		position: fixed;
		top: 6.125rem;
		left: 0;
		
		width: 30rem;
		z-index: 16;
		
		border-top: 0.025rem solid #e4e4e4;
		
		background: #FFFFFF;
		
	}
	
	.sort_content{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.sort_info{
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 2rem;
		padding-right: 1rem;
		border-bottom: 0.025rem solid #ECECEC;
		
		font-size: 1.1rem;
		font-weight: bold;
		
		display: flex;
		justify-content: space-between;
	}
	
	.sort_info.active{
		color: #3190E8;
	}
	
	.sort_info img{
		width: 1.1rem;
		
		vertical-align: middle;
	}
	
	.sort_info span{
		vertical-align: middle;
	}
	
	.screen{
		position: fixed;
		top: 6.125rem;
		left: 0;
		z-index: 16;
		
		width: 30rem;
		border-top: 0.025rem solid #ececec;
		
		background: #FFFFFF;
	}
	
	.screen_delivery_mode_text,.screen_shop_property_text{
		font-size: 0.8rem;
		color: #333333;
		
		text-align: left;
		height: 3rem;
		line-height: 3rem;
		padding-left: 1.5rem;
	}
	
	.screen_delivery_mode_list{
		list-style: none;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		margin: 0;
	}
	
	.screen_delivery_mode_option,.screen_shop_property_list_option{
		width: 8.0rem;
		height: 2.5rem;
		padding-left: 0.5rem;
		border: 0.025rem solid #eee;
		border-radius: 0.25rem;
		
		display: flex;
		align-items: center;
	}
	
	.screen_shop_property{
		margin-bottom: 1rem;
	}
	
	.screen_delivery_mode_option span{
		font-size: 0.85rem;
		padding-left: 0.5rem;
	}
	
	.screen_shop_property_list{
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		margin: 0;
		padding-left: 1.5rem;
		
		font-size: 0.85rem;
	}
	
	.screen_shop_property_list_option{
		margin-right: 0.35rem;
		margin-bottom: 0.35rem;
	}
	
	.screen_shop_property_list_option span{
		font-size: 1rem;
		font-weight: bold;
		
		margin-right: 0.5rem;
		border: 0.025rem solid #e4e4e4 ;
		border-radius: 0.2rem;
		padding: 0.2rem;
		
	}
	
	.screen_footer{
		width: 29rem;
		height: 5rem;
		background: #f5f5f5;
		
		padding: 0.5rem 0.5rem;
	}
	
	.screen_footer button{
		width: 14rem;
		height: 3.5rem;
		
		font-size: 1.8rem;
		font-weight: bold;
		
		border-radius: 0.3rem;
		border-style: none;
	}
	
	.screen_footer_clear{
		margin-right: 1rem;
		
		color: #000000;
		background: #FFFFFF;
	}
	
	.screen_footer_certain{
		color: #FFFFFF;
		background: #56d176;
	}
	
	.category,.sort,.screen{
		color: #000000;
		transition: transform 0.3s ease;
		transform: translateY(-140%);
	}
	
	.nav_text_chosen{
		color: #3190E8;
	}
	
	.nav_chosen{
		transform: translateY(0);
	}
	
	.category_left_chosen_style{
		background: #FFFFFF;
		border: 0.025rem solid #ECECEC;
	}
	
	.sort_chosen_style{
		font-weight: bold;
		color: #3190E8;
	}
	
	.sort_chosen_style:after{
		content: '√';
	}
	
	.delivery_modes_and_shop_activities_chosen_style{
		font-weight: bold;
		color: #3190E8;
		border-color: #3190E8;
	}
	
	.delivery_modes_and_shop_activities_chosen_style:after{
		content: '√';
	}
	
	.shop_category_shop_container{
		position: relative;
		top: 6rem;
		
		background: #FFFFFF;
	}
</style>
