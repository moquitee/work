<template>
	<div class="shop_menu">
		<section class="menu_left">
			<ul class="menu_left_nav" v-if="valid_category_list.length">
				<li
				v-for="category in valid_category_list"
				v-bind:key="category.id"
				>
					<span class="food_category_num" v-if="get_category_num(category.restaurant_id,category.id)">{{get_category_num(category.restaurant_id,category.id)}}</span>
					<span>{{ category.name }}</span>
				</li>
			</ul>
		</section>
		
		<section class="menu_right">
			<ul class="shop_menu_info" v-if="valid_category_list.length" ref="shop_menu_info">
				<li 
				v-for="category in valid_category_list"
				v-bind:key="category.id"
				>
					<header class="menu_header" ref="menu_header">
						<section>
							<span class="menu_header_title">{{ category.name }}</span>
							<span class="menu_header_description">{{ category.description }}</span>
						</section>
						<span class="menu_header_detail">...</span>
					</header>
					
					<section class="food" 
					v-for="food in category.foods"
					v-bind:key="food.item_id"
					>
						<ul class="food_activities">
							<li class="food_activities_new"
							v-if="$shop.my_some(food.attributes,'icon_name','新')"
							>
								<p>新品</p>
							</li>
							<li class="food_activities_specialty"
							v-if="$shop.my_some(food.attributes,'icon_name','招牌')"
							>
								<p>招牌</p>
							</li>
						</ul>
						
						<img v-bind:src="'//elm.cangdu.org/img/'+ food.image_path">
						<section class="menu_info_right">
							<section class="food_name"> {{ food.name }}</section>
							<section class="food_description">{{ food.description }}</section>
							<section class="food_sales_quantity_and_rating">月售{{ food.month_sales }}份 好评率{{ food.satisfy_rate }}%</section>
							<section class="food_shoper_activities" v-if="food.activity"><span>{{ food.activity.image_text }}</span></section>
							<section class="food_price">
								<section>
									<span class="food_money" v-if="food.specfoods.length > 1">¥{{ get_the_smaller_price(food.specfoods) }}<span class="food_up">起</span></span>
									<span class="food_money" v-else>¥{{ food.specfoods[0].price }}</span>
								</section>
								<section v-if="food.specfoods.length <= 1">
									<img src="../../assets/minus.png" class="food_order_quantities_button" 
									v-on:click="to_cart( 'reduce' , food.category_id , food.item_id , food.specfoods[0].food_id )"
									v-if="get_food_num( food.restaurant_id , food.category_id , food.item_id , food.specfoods[0].food_id )"
									>
									
									<span class="food_order_quantities">{{ get_food_num( food.restaurant_id , food.category_id , food.item_id , food.specfoods[0].food_id ) }} </span>
									
									<img src="../../assets/add.png" class="food_order_quantities_button" v-on:click="to_cart( 'add' , food.category_id , food.item_id , food.specfoods[0].food_id )" >

								</section>
								
								<section v-else>
									<img src="../../assets/minus.png" class="food_order_quantities_button"
									v-on:click="to_cart( 'reduce' , food.category_id , food.item_id , food.specfoods[0].food_id )"
									v-if="get_food_num( food.restaurant_id , food.category_id , food.item_id )"
									>
									<span class="food_order_quantities"> {{ get_food_num( food.restaurant_id , food.category_id , food.item_id ) }} </span>
									<span class="food_specification_enter" v-on:click="open_specs( food.category_id , food.item_id )">选规格</span>
								</section>
							</section>
						</section>
					</section>
				</li>
				
				<li>
					<header class="menu_header">
						<section>
							<span class="menu_header_title">热销榜</span>
							<span class="menu_header_description">热销来袭</span>
						</section>
						<span class="menu_header_detail">...</span>
					</header>
					
					<section class="food">
						<ul class="food_activities">
							<li class="food_activities_new">
								<p>新品</p>
							</li>
							<li class="food_activities_specialty">
								<p>招牌</p>
							</li>
						</ul>
						
						<img src="../../assets/nvsheng.png">
						<section class="menu_info_right">
							<section class="food_name">小米</section>
							<section class="food_description">琳她曾经是我唯一的光明，失去了琳之后，我所看到的世界就全变成了漆黑的地狱。这个世界里全是灰烬没有希望，即使我顶着斑的名字走遍世界各地，但是看到的只是更加让我确信这一点，就算我拥有着写轮眼还是什么都看不到</section>
							<section class="food_sales_quantity_and_rating">月售550份 好评率55%</section>
							<section class="food_shoper_activities"><span>商品活动</span></section>
							<section class="food_price">
								<span class="food_money">¥20</span>
								<section>
									<span class="food_order_quantities_button">-</span>
									<span class="food_order_quantities"> 2 </span>
									<span class="food_order_quantities_button">+</span>
								</section>
							</section>
						</section>
					</section>
					
					<section class="food">
						<ul class="food_activities">
							<li class="food_activities_new">
								<p>新品</p>
							</li>
							<li class="food_activities_specialty">
								<p>招牌</p>
							</li>
						</ul>
						
						<img src="../../assets/nvsheng.png">
						<section class="menu_info_right">
							<section class="food_name">小米</section>
							<section class="food_description">琳她曾经是我唯一的光明，失去了琳之后，我所看到的世界就全变成了漆黑的地狱。这个世界里全是灰烬没有希望，即使我顶着斑的名字走遍世界各地，但是看到的只是更加让我确信这一点，就算我拥有着写轮眼还是什么都看不到</section>
							<section class="food_sales_quantity_and_rating">月售550份 好评率55%</section>
							<section class="food_shoper_activities"><span>商品活动</span></section>
							<section class="food_price">
								<section>
									<span class="food_money">¥20</span>
								</section>
								<section>
									<span class="food_order_quantities_button">-</span>
									<span class="food_order_quantities"> 2 </span>
									<span class="food_order_quantities_button">+</span>
								</section>
							</section>
						</section>
					</section>
					
					<section class="food">
						<ul class="food_activities">
							<li class="food_activities_new">
								<p>新品</p>
							</li>
							<li class="food_activities_specialty">
								<p>招牌</p>
							</li>
						</ul>
						
						<img src="../../assets/nvsheng.png">
						<section class="menu_info_right">
							<section class="food_name">小米</section>
							<section class="food_description">琳她曾经是我唯一的光明，失去了琳之后，我所看到的世界就全变成了漆黑的地狱。这个世界里全是灰烬没有希望，即使我顶着斑的名字走遍世界各地，但是看到的只是更加让我确信这一点，就算我拥有着写轮眼还是什么都看不到</section>
							<section class="food_sales_quantity_and_rating">月售550份 好评率55%</section>
							<section class="food_shoper_activities"><span>商品活动</span></section>
							<section class="food_price">
								<span class="food_money">¥20</span>
								<section>
									<span class="food_order_quantities_button">-</span>
									<span class="food_order_quantities"> 2 </span>
									<span class="food_order_quantities_button">+</span>
								</section>
							</section>
						</section>
					</section>
				</li>
			</ul>
		</section>
		
		<div v-if="specfoods_data && chosen_specfood">
			<div class="food_specification">
				<span class="food_shutdown_button" v-on:click="specfoods_data= undefined">×</span>
				<section class="food_specification_name">{{ chosen_specfood.name }}</section>
				<section class="food_specification_container">
					<h4 class="food_specification_title">规格</h4>
					<ul class="food_specification_options">
						<li v-for="specfood in specfoods_data" 
						v-bind:key="specfood.food_id" 
						v-on:click="chosen_specfood = specfood"
						v-bind:class="{ active : chosen_specfood.food_id == specfood.food_id }"
						>{{ specfood.name }}
						</li>
					</ul>
				</section>
				<section class="food_specification_footer">
					<span>
						<span class="food_specification_rmb">¥ </span>
						<span class="food_specification_price">{{ chosen_specfood.price }}</span>
					</span>
					<button class="food_specification_add_to_cart" v-on:click="to_cart( 'add' , chosen_specfood.category_id , chosen_specfood.item_id , chosen_specfood.food_id , true )">加入购物车</button>
				</section>
			</div>
			
			<div class="food_specification_cover" v-if="specfoods_data" v-on:click="specfoods_data= undefined"></div>
		</div>
		
		<footer class="menu_footer" v-if="shop_info">
			<section class="menu_footer_left">
				<div class="cart_icon_container" v-bind:class="{ active : true }">
					<img src="../../assets/shop_cart0.jpg" v-show="true">
					<img src="../../assets/shop_cart1.jpg" v-show="false" v-on:click="show_shop_cart()">
					<span class="cart_order_number" >2</span>
				</div>
				<div>
					<section class="total_price">¥ 20</section>
					<section class="shop_delivery_fee">配送费¥5</section>
				</div>
			</section>
			
			<section class="menu_footer_right">
				<span>还差¥5起送</span>
				<span v-show="false">去结算</span>
			</section>
		</footer>
		
		<div class="footer_cover" v-show="shop_cart_state" v-on:click="show_shop_cart()"></div>
		
		<div class="shop_cart" style="display: none;"
		v-bind:class="{ active : shop_cart_state }"
		v-on:transitionend="shop_cart_move_end()"
		ref="shop_cart"
		>
			<section class="shop_cart_header">
				<span class="shop_cart_title">购物车</span>
				<div class="shop_cart_clear">
					<img src="../../assets/trash_bin.png">
					<span> 清空</span>
				</div>
			</section>
			
			<section class="shop_cart_food_container">
				<section class="shop_cart_food" >
					<div>
						<section class="shop_cart_food_name">食物名字</section>
						<section class="shop_cart_food_specs">特定名字</section>
					</div>
					<div class="shop_cart_food_price_and_quantities">
						<span class="shop_cart_food_price">¥5</span>
						<section>
							<span 
							class="food_order_quantities_button"
							>-</span>
							<span class="food_order_quantities"> 2 </span>
							<span class="food_order_quantities_button"
							>+</span>
						</section>
					</div>
				</section>
			</section>
		</div>
	</div>
</template>

<script>
	export default{
		created() {
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/getcategory/' + this.shop_id , method: 'GET' , which: 11 , renewway:'set' }).then((result)=>{
				if ( result.status ){
					this.valid_category_list = this.$shop.screen_valid_data(result.category_list)
				}
			})
			
		},
		
		
		
		data(){
			return{
				valid_category_list:[],
				
				shop_cart_state: 0, //0关闭 1打开
				
				order_list:[], // 用户购买的食物清单
				
				specfoods_data: undefined, // 选规格页面 食物数据 []
				chosen_specfood: undefined, // 用户在选规格 里面 选择的食品 {}
			}
		},
		
		computed:{
			shop_id(){
				return this.$route.params.shop_id
			},
			
			geo_hash(){
				return this.$cookie.get('longitude') + ',' + this.$cookie.get('latitude')
			},
			
			shop_info(){
				return this.$store.state.acquireData[10]
			},
			
			user_shop_cart(){
				return this.$store.state.user_shop_cart
			}
		},
		
		methods:{
			get_the_smaller_price( specfoods_arr ){
				let min_price = specfoods_arr[0].price;
				for ( let i = 1 ; i < specfoods_arr.length ; i++ ){
					if ( specfoods_arr[i].price < min_price ){
						min_price = specfoods_arr[i].price
					}
				}
				return min_price
			},
			
			
			
			// 加入购物车,如果是在选规格中加入,将 is_specfood 设为 true
			// type = 'add'时为+1 ; type = 'reduce'时为-1
			to_cart( type , category_id , item_id , food_id , is_specfood = false ){
				let specific_category = this.valid_category_list[this.$shop.my_some( this.valid_category_list , 'id' , category_id , true )]
				let specific_item = (specific_category.foods)[this.$shop.my_some( specific_category.foods , 'item_id' , item_id , true )]
				let specific_food = (specific_item.specfoods)[this.$shop.my_some( specific_item.specfoods , 'food_id' , food_id , true )]
				
				let food_object = {
					[ this.shop_id ]: {
						[ category_id ] : {
							[ item_id ] : {
								[ food_id ] : {
									id : food_id,
									name : specific_food.name,
									packing_fee : specific_food.packing_fee,
									price: specific_food.price,
									sku_id : specific_food.sku_id,
									specs: specific_food.specs_name,
									stock: specific_food.stock,
									num : 1,
								}
							}
						}
					}
				};
				
				if (
					this.user_shop_cart && 
					this.user_shop_cart[this.shop_id] && 
					this.user_shop_cart[this.shop_id][category_id] && 
					this.user_shop_cart[this.shop_id][category_id][item_id] && 
					this.user_shop_cart[this.shop_id][category_id][item_id][food_id] ){
						if ( type == 'add' ){
							this.user_shop_cart[this.shop_id][category_id][item_id][food_id].num += 1;
							this.chosen_specfood = undefined;
						}
						else if ( type == 'reduce' ){
							if ( this.user_shop_cart[this.shop_id][category_id][item_id][food_id].num <= 1 ){
								this.user_shop_cart[this.shop_id][category_id][item_id][food_id].num = 0;
								if ( is_specfood ){
									this.chosen_specfood = undefined
								}
							}
							else {
								this.user_shop_cart[this.shop_id][category_id][item_id][food_id].num -= 1;
								if ( is_specfood ){
									this.chosen_specfood = undefined
								}
							}
						}
					}
				else{
					if ( type == 'add' ){
						this.$store.commit('change_shop_cart', this.$shop.combinate( this.$store.state.user_shop_cart , food_object ) )
						if ( is_specfood ){
							this.chosen_specfood = undefined
						}
					}
				}
				
				window.console.log(this.user_shop_cart)
			},
			
			
			
			
			get_category_num( shop_id ,category_id){
				let num = 0;
				if ( this.user_shop_cart[shop_id] &&
					this.user_shop_cart[shop_id][category_id]
				){
					num += this.$shop.sum(this.$shop.deep_search_match( this.user_shop_cart[shop_id][category_id] , 'num' ))
				}
				
				return num
			},
			
			get_food_num( shop_id , category_id , item_id , food_id = undefined ){
				let num = 0;
				if ( food_id != null ){
					if ( this.user_shop_cart[shop_id] &&
						this.user_shop_cart[shop_id][category_id] &&
						this.user_shop_cart[shop_id][category_id][item_id] &&
						this.user_shop_cart[shop_id][category_id][item_id][food_id] 
					){
						num = this.user_shop_cart[shop_id][category_id][item_id][food_id].num
					}
				}
				else{
					if ( this.user_shop_cart[shop_id] &&
						this.user_shop_cart[shop_id][category_id] &&
						this.user_shop_cart[shop_id][category_id][item_id]
					){
						num = this.$shop.sum(this.$shop.deep_search_match( this.user_shop_cart[shop_id][category_id][item_id] , 'num' ))
					}
				}
				
				return num
			},
			
			
			open_specs( category_id , item_id ){
				for ( let i = 0 ; i < this.valid_category_list.length ; i++ ){
					if ( this.valid_category_list[i].id == category_id ){
						for ( let j = 0 ; j < this.valid_category_list[i].foods.length ; j++ ){
							if ( ((this.valid_category_list[i].foods)[j]).item_id == item_id ){
								this.specfoods_data = (this.valid_category_list[i].foods)[j].specfoods
							}
						}
					}
				}
				
				for ( let i = 0 ; i < this.specfoods_data.length ; i++ ){
					this.specfoods_data[i].category_id = category_id
				}
				
				this.chosen_specfood = this.specfoods_data[0]
			},
			
			
			
			
			show_shop_cart(){
				if (this.shop_cart_state == 0){
					this.$refs.shop_cart.removeAttribute("style")
					setTimeout(()=>{
						this.shop_cart_state = 1
					},100)
					
				}
				else {
					this.shop_cart_state = 0
				}
				
				
			},
			
			shop_cart_move_end(){
				if (this.shop_cart_state == 0){
					this.$refs.shop_cart.style.display = "none"
				}
			},
			
			check_out(){
				
			}
		}
	}
</script>

<style>
	.shop_menu{
		display: flex;
		
		height: 100%;/*chrome需要*/
		padding-bottom: 4rem;
	}
	
	.menu_left{
		height: 100%;/*chrome需要*/
	}
	
	.menu_left_nav{
		height: 100%;
		overflow-y: scroll;
	}
	
	.menu_left_nav li{
		position: relative;
		
		width: 4.5rem;
		padding: 2rem 0.9rem;
		border-left: 0.3rem solid #f8f8f8;
		border-bottom: 0.025rem solid #ededed;
		
		font-size: 1.2rem;
		font-weight: bold;
	}
	
	.menu_left_nav li.active{
		background: #FFFFFF;
		border-left-color: #3190E8;
	}
	
	.food_category_num{
		position: absolute;
		top: 0;
		right: 0;
		
		text-align: center;
		min-width: 0.97rem;
		font-family: Helvetica Neue,Tahoma,Arial;
		color: #FFFFFF;
		font-size: 0.8rem;
		border-radius: 50%;
		background: #ff461d;
	}
	
	.shop_menu_info{
		height: 100%;
		overflow-y: scroll;
	}
	
	.menu_header{
		padding: 1.0rem 0.5rem;
		
		display: flex;
		justify-content: space-between;
	}
	
	.menu_header_title{
		font-size: 1.4rem;
		color: #666666;
		
		margin-right: 0.5rem;
	}
	
	.menu_header_description{
		font-size: 0.9rem;
		font-weight: bold;
		color: #999999;
		
		overflow: hidden;
	}
	
	.food{
		position: relative;
		
		display: flex;
		padding: 1rem;
		border-bottom: 1px solid #f8f8f8;
		background: #FFFFFF;
		
		overflow: hidden;
	}
	
	.food_activities_new{
		position: absolute;
		top: 0;
		left: 0;
		
		background: #56D176;
		
		display: flex;
		align-items: flex-end;
		width: 3rem;
		height: 3rem;
		
		transform: rotate(-45deg) translate(-0.1rem,-2.18rem);
	}
	
	.food_activities_new p{
		flex: 1;
		
		font-size: 0.5rem;
		color: #FFFFFF;
		text-align: center;
	}
	
	.food_activities_specialty{
		position: absolute;
		top: 1.2rem;
		right: 1rem;
		
		border: 0.025rem solid rgb(240, 115, 115);
		border-radius: 0.5rem;
		padding: 0.05rem;
		
		font-size: 0.3rem;
		color: rgb(240, 115, 115);
	}

	.food>img{
		width: 5rem;
		height: 5rem;
		
		margin-right: 1rem;
	}
	
	.menu_info_right{
		width: 100%;
	}
	
	.food_name{
		font-size: 1.5rem;
		font-weight: bold;
		
		width: 15rem;
		margin-bottom: 0.5rem;
		overflow-wrap: break-word;
	}
	
	.food_description{
		margin-bottom: 0.5rem;
		
		color: #999999;
		font-weight: bold;
		font-size: 0.85rem;
		line-height: 1.1rem;
	}
	
	.food_sales_quantity_and_rating{
		font-size: 0.9rem;
		padding-bottom: 0.5rem;
	}
	
	.food_shoper_activities {
		display: flex;
		
		padding-bottom: 0.5rem;
	}
	
	.food_shoper_activities span{
		border: 0.025rem solid rgb(240, 115, 115);
		border-radius: 0.5rem;
		padding: 0.14rem;
		
		font-size: 0.8rem;
		color: rgb(240, 115, 115);
	}
	
	.food_price{
		display: flex;
		
		justify-content: space-between;
		align-items: center;
	}
	
	.food_price>section:nth-last-of-type(1){
		display: flex;
		align-items: center;
	}
	
	.food_money{
		font-size: 1.2rem;
		font-weight: bold;
		color: #f60;
	}
	
	.food_up{
		font-size: 0.9rem;
		color: #666;
	}
	
	.food_order_quantities_button{
		width: 1.6rem;
		height: 1.6rem;
	}
	
	.food_order_quantities{
		font-size: 1.1rem;
		font-weight: bold;
		color: #666666;
		
		margin: 0 0.5rem;
	}
	
	.food_specification_enter{
		border-radius: 7%;
		padding: 0.5rem;
		background: #3190E8;
		
		font-size: 1.1rem;
		font-weight: 600;
		color: #FFFFFF;
	}
	
	.food_specification{
		position: fixed;
		top: 35%;
		left: 15%;
		z-index: 18;
		
		width: 70%;
		border-radius: 2.5%;
		
		background: #FFFFFF;
	}
	
	.food_shutdown_button{
		position: absolute;
		top: 0.3rem;
		right: 0.3rem;
		
		font-size: 1.5rem;
	}
	
	.food_specification_name{
		margin-top: 0.8rem;
		
		font-size: 1.5rem;
		text-align: center;
	}
	
	.food_specification_container{
		padding: 0.8rem;
	}
	
	.food_specification_container h4{
		margin-bottom: 1rem;
	}
	
	.food_specification_options{
		display: flex;
		flex-wrap: wrap;
	}
	
	.food_specification_options li{
		margin: 0 1rem 1rem 0;
		padding: 0.6rem 0.8rem;
		border: 0.04rem solid #ddd;
		border-radius: 10%;
		
		font-size: 1.2rem;
	}
	
	.food_specification_options li.active{
		border-color: #3190E8;
		color: #3190E8;
	}
	
	.food_specification_footer{
		display: flex;
		justify-content: space-between;
		
		padding: 0.5rem 1rem;
		background: #f9f9f9;
	}
	
	.food_specification_footer span{
		padding-top: 0.5rem;
	}
	
	.food_specification_rmb{
		font-size: 1rem;
		color: #ff6000;
	}
	
	.food_specification_price{
		font-size: 1.5rem;
		font-weight: bold;
		color: #ff6000;
	}
	
	.food_specification_add_to_cart{
		width: 6.8rem;
		height: 2.5rem;
		
		border-style: none;
		border-radius: 5%;
		
		background: #3190E8;
		font-size: 1.1rem;
		font-weight: bold;
		color: #FFFFFF;
	}
	
	.food_specification_cover{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 17;
		
		background-color: rgba(0,0,0,0.3);
	}
	
	.shop_cart{
		position: absolute;
		bottom: 4rem;
		z-index: 15;
		
		width: 100%;
		
		transform: translateY(100%);
		transition: transform 0.4s ease;
	}
	
	.shop_cart.active{
		transform: translateY(0%);
	}
	
	.shop_cart_header{
		display: flex;
		justify-content: space-between;
		
		padding: 0.8rem 1rem;
		
		background: #eceff1;
		
		font-size: 1.2rem;
		color: #666;
	}
	
	.shop_cart_clear img, .shop_cart_clear span{
		vertical-align: middle;
	}
	
	.shop_cart_food_container{
		max-height: 35rem;
		overflow-y: auto;
	}
	
	.shop_cart_food{
		display: flex;
		justify-content: space-between;
		
		background: #FFFFFF;
		
		padding: 1.2rem 1rem;
	}
	
	.shop_cart_food_name{
		font-size: 1.2rem;
		font-weight: bold;
	}
	
	.shop_cart_food_specs{
		padding-left: 0.2rem;
		
		color: #666;
		font-size: 0.7rem;
	}
	
	.shop_cart_food_price{
		margin-right: 3rem;
		
		font-size: 1.2rem;
		font-weight: bold;
		color: #FF0000;
	}
	
	.shop_cart_food_price_and_quantities{
		display: flex;
	}
	
	.shop_cart_food div span{
		vertical-align: middle;
	}
	
	.menu_footer{
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 16;
		
		display: flex;
		justify-content: space-between;
		
		background: #3d3d3f;
		
		width: 30rem;
		height: 4rem;
	}
	
	.menu_footer_left{
		display: flex;
	}
	
	.cart_icon_container{	
		position: relative;
		top: -1.2rem;
		
		margin: 0 1rem;
		padding: 0.6rem;
		border: 0.36rem solid #444;
		border-radius: 50%;
		
		background: #3d3d3f;
	}
	
	.cart_icon_container.active{
		background: #3190E8;
	}
	
	.cart_icon_container img{
		width: 2.2rem;
		height: 2.2rem;
	}
	
	.cart_order_number{
		position: absolute;
		top: -0.5rem;
		right: -0.5rem;
		
		text-align: center;
		min-width: 1.1rem;
		font-family: Helvetica Neue,Tahoma,Arial;
		color: #FFFFFF;
		font-size: 0.9rem;
		border-radius: 50%;
		background: #ff461d;
	}
	
	.total_price{
		margin-top: 0.4rem;
		font-size: 1.6rem;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.shop_delivery_fee{
		margin-top: 0.4rem;
		
		font-size: 0.8rem;
		color: #FFFFFF;
	}
	
	.menu_footer_right{
		width: 9rem;
		height: 100%;
		background: #444;
		
		
		font-size: 1.4rem;
		font-weight: bold;
		color: #FFFFFF;
		
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.menu_footer_right.active{
		background: #4cd964;
	}
	
	.footer_cover{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0,0,0,0.4);
		z-index: 11;
	}
</style>
