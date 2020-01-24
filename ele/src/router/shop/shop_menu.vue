<template>
	<div class="shop_menu">
		<section class="menu_left">
			<ul class="menu_left_nav" v-if="category_data.length">
				<li
				v-for="category_num in $shop.screen_valid_data(category_data)"
				v-bind:key="category_data[category_num].id"
				>
					<span class="food_category_num" v-if="get_valid_category_num(category_data[category_num].id)"> {{ get_valid_category_num(category_data[category_num].id) }}</span>
					<span>{{ category_data[category_num].name }}</span>
				</li>
			</ul>
		</section>
		
		<section class="menu_right">
			<ul class="shop_menu_info" v-if="category_data.length" ref="shop_menu_info">
				<li 
				v-for="category_num in $shop.screen_valid_data(category_data)"
				v-bind:key="category_data[category_num].id"
				>
					<header class="menu_header" ref="menu_header">
						<section>
							<span class="menu_header_title">{{ category_data[category_num].name }}</span>
							<span class="menu_header_description">{{ category_data[category_num].description }}</span>
						</section>
						<span class="menu_header_detail">...</span>
					</header>
					
					<section class="food" 
					v-for="food in category_data[category_num].foods"
					v-bind:key="food.item_id"
					>
						<ul class="food_activities">
							<li class="food_activities_new"
							v-if="$shop.my_some(food.attributes,'新')"
							>
								<p>新品</p>
							</li>
							<li class="food_activities_specialty"
							v-if="$shop.my_some(food.attributes,'招牌')"
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
									<span class="food_order_quantities_minus"
									v-if="get_valid_single_food_num(food.specfoods[0].food_id)"
									v-on:click="reduce_order(food.specfoods[0].food_id,
									{ 
										category_id : food.category_id,
										food_name : food.name,
										item_id : food.item_id,
										specs_name: '默认',
										food_id: food.specfoods[0].food_id,
										price: food.specfoods[0].price,
										order_num: 1,
									})"
									>-</span>
									<span class="food_order_quantities" v-if="get_valid_single_food_num(food.specfoods[0].food_id)"> {{ get_valid_single_food_num(food.specfoods[0].food_id) }} </span>
									<span class="food_order_quantities_plus"
									v-on:click="add_order(food.specfoods[0].food_id,
									{ 
										category_id : food.category_id,
										food_name : food.name,
										item_id : food.item_id,
										specs_name: '默认',
										food_id: food.specfoods[0].food_id,
										price: food.specfoods[0].price,
										order_num: 1,
									})"
									>+</span>
								</section>
								
								<section v-else>
									<span class="food_specification_enter" v-on:click="open_specs_button(food)">选规格</span>
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
									<span class="food_order_quantities_minus">-</span>
									<span class="food_order_quantities"> 2 </span>
									<span class="food_order_quantities_plus">+</span>
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
									<span class="food_order_quantities_minus">-</span>
									<span class="food_order_quantities"> 2 </span>
									<span class="food_order_quantities_plus">+</span>
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
									<span class="food_order_quantities_minus">-</span>
									<span class="food_order_quantities"> 2 </span>
									<span class="food_order_quantities_plus">+</span>
								</section>
							</section>
						</section>
					</section>
				</li>
			</ul>
		</section>
		
		<div v-if="food_specs_data">
			<div class="food_specification">
				<span class="food_shutdown_button" v-on:click="close_specs_button()">×</span>
				<section class="food_specification_name">{{ food_specs_data.specfoods[0].name }}</section>
				<section class="food_specification_container">
					<h4 class="food_specification_title">规格</h4>
					<ul class="food_specification_options">
						<li 
						v-for="spec_food in food_specs_data.specfoods" 
						v-bind:key="spec_food.id"
						v-bind:class="{ active : chosen_specs_food_data.food_id == spec_food.food_id }"
						v-on:click=" chosen_specs_food_data = { 
								category_id : food_specs_data.category_id,
								food_name : spec_food.name,
								item_id : spec_food.item_id,
								specs_name: spec_food.specs_name,
								food_id: spec_food.food_id,
								price: spec_food.price,
								order_num: 1,
							} "
						>{{ spec_food.specs_name }}</li>
					</ul>
				</section>
				<section class="food_specification_footer">
					<span>
						<span class="food_specification_rmb">¥ </span>
						<span class="food_specification_price">20</span>
					</span>
					<button class="food_specification_add_to_cart" v-on:click="specs_food_add_to_cart()">加入购物车</button>
				</section>
			</div>
			
			<div class="food_specification_cover" v-on:click="close_specs_button()"></div>
		</div>
		
		<footer class="menu_footer" v-if="shop_info">
			<section class="menu_footer_left">
				<div class="cart_icon_container" v-bind:class="{ active : order_sum }">
					<img src="../../assets/shop_cart0.jpg" v-show="!order_sum">
					<img src="../../assets/shop_cart1.jpg" v-show="order_sum" v-on:click="show_shop_cart()">
					<span class="cart_order_number" v-if="order_sum">{{ order_sum }}</span>
				</div>
				<div>
					<section class="total_price">¥ {{ order_total_amount }}</section>
					<section class="shop_delivery_fee">配送费¥{{ shop_info.float_delivery_fee }}</section>
				</div>
			</section>
			
			<section class="menu_footer_right" v-bind:class="{ active : order_total_amount - shop_info.float_minimum_order_amount >= 0 }">
				<span v-show=" order_total_amount - shop_info.float_minimum_order_amount < 0 ">还差¥{{ shop_info.float_minimum_order_amount - order_total_amount }}起送</span>
				<span v-show=" order_total_amount - shop_info.float_minimum_order_amount >= 0 ">去结算</span>
			</section>
		</footer>
		
		<div class="footer_cover" v-show="shop_cart_state" v-on:click="show_shop_cart()"></div>
		
		<div class="shop_cart" style="display: none;"
		v-if="user_order_data.length"
		v-bind:class="{ active : shop_cart_state }"
		v-on:transitionend="shop_cart_move_end()"
		ref="shop_cart"
		>
			<section class="shop_cart_header">
				<span class="shop_cart_title">购物车</span>
				<div class="shop_cart_clear">
					<img src="../../assets/trash_bin.png">
					<span v-on:click="clear_shop_cart()"> 清空</span>
				</div>
			</section>
			
			<section class="shop_cart_food_container">
				<section class="shop_cart_food" 
				v-for="food in user_order_data"
				v-show="food.order_num"
				v-bind:key="food.food_id"
				>
					<div>
						<section class="shop_cart_food_name">{{ food.food_name}}</section>
						<section class="shop_cart_food_specs" v-if="food.specs_name">{{ food.specs_name}}</section>
					</div>
					<div class="shop_cart_food_price_and_quantities">
						<span class="shop_cart_food_price">¥{{ food.price }}</span>
						<section>
							<span 
							class="food_order_quantities_minus"
							v-if="get_valid_single_food_num(food.food_id)"
							v-on:click="reduce_order(food.food_id,
							{ 
								category_id : food.category_id,
								food_name : food.name,
								item_id : food.item_id,
								specs_name: food.specs_name,
								food_id: food.food_id,
								price: food.price,
								order_num: 1,
							})">-</span>
							<span class="food_order_quantities"> {{ food.order_num}} </span>
							<span class="food_order_quantities_plus"
							v-on:click="add_order(food.food_id,
							{ 
								category_id : food.category_id,
								food_name : food.name,
								item_id : food.item_id,
								specs_name: food.specs_name,
								food_id: food.food_id,
								price: food.price,
								order_num: 1,
							})">+</span>
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
			
		},
		
		data(){
			return{
				food_specs_data: undefined,
				
				chosen_specs_food_data: undefined,
				
				food_category_position_list: undefined,
				
				user_order_data:[],
				
				shop_cart_state: 0, //0关闭 1打开
			}
		},
		
		computed:{
			shop_info(){
				return this.$store.state.acquireData[10]
			},
			
			category_data(){
				return this.$store.state.acquireData[11].category_list
			},
			
			order_sum(){
				let num = 0;
				for ( let i = 0 ; i < this.user_order_data.length ; i++ ){
					num += this.user_order_data[i].order_num
				}
				return num
			},
			
			order_total_amount(){
				let price = 0;
				for ( let i = 0 ; i < this.user_order_data.length ; i++ ){
					price += this.user_order_data[i].price * this.user_order_data[i].order_num
				}
				return price
			}
			
		},
		
		methods:{
			my_method(){
				this.food_category_position_list = [];
				for ( let i = 0 ; i < this.$refs.menu_header.length ; i++){
					this.food_category_position_list.push(this.$refs.menu_header[i].offsetTop);	
				}
				window.console.log(this.food_category_position_list)
			},
			
			get_the_smaller_price( specfoods_arr ){
				let min_price = specfoods_arr[0].price;
				for ( let i = 1 ; i < specfoods_arr.length ; i++ ){
					if ( specfoods_arr[i].price < min_price ){
						min_price = specfoods_arr[i].price
					}
				}
				return min_price
			},
			
			open_specs_button( food ){
				this.food_specs_data = food;
				let first_food = food.specfoods[0]
				this.chosen_specs_food_data = { 
								category_id : food.category_id,
								food_name : first_food.name,
								item_id : first_food.item_id,
								specs_name: first_food.specs_name,
								food_id: first_food.food_id,
								price: first_food.price,
								order_num: 1,
							};
			},
			
			close_specs_button(){
				this.food_specs_data = undefined
				this.chosen_specs_food_data = undefined
			},
			
			specs_food_add_to_cart(){
				if ( this.chosen_specs_food_data ){
					this.add_order(this.chosen_specs_food_data.food_id , this.chosen_specs_food_data )
					this.close_specs_button()
				}
				else{
					window.alert('请至少选择一个食品');
				}
				
			},
			
			clear_shop_cart(){
				// 操作cookie
				for ( let i = 0 ; i < this.user_order_data.length ; i++ ){
					this.$cookie.del(this.user_order_data[i].food_id)
				}
				
				
				this.show_shop_cart()
				
				setTimeout(()=>{this.user_order_data = []},400)
			},
			
			get_valid_category_num(category_id){
				let order_num = 0;
				let arr = this.user_order_data;
				for ( let i = 0 ; i < arr.length ; i++){
					if ( arr[i].category_id == category_id ){
						order_num += arr[i].order_num
					}
				}
				
				return order_num
			},
			
			get_valid_single_food_num(food_id){
				let order_num = 0;
				let arr = this.user_order_data;
				for ( let i = 0 ; i < arr.length ; i++){
					if ( arr[i].food_id == food_id ){
						order_num += arr[i].order_num
					}
				}
				
				return order_num
			},
			
			add_order(food_id , anObject ){
				let arr = this.user_order_data;
				let food_pre_num = this.get_valid_single_food_num(food_id);
				if ( food_pre_num ){
					for ( let i = 0 ; i < this.user_order_data.length ; i++ ){
						if ( arr[i].food_id == food_id ){
							arr[i].order_num ++
						}
					}
				}
				else{
					arr.push(anObject)
				}
				
				// cookie 部分
				let days = 7;
				this.$shop.add_order(food_id , anObject , days)
			},
			
			reduce_order( food_id , anObject){
				let arr = this.user_order_data;
				let food_pre_num = this.get_valid_single_food_num(food_id);
				for ( let i = 0 ; i < this.user_order_data.length ; i++ ){
					if ( arr[i].food_id == food_id ){
						if ( food_pre_num > 1 ){
							arr[i].order_num --
						}
						else{
							arr.splice(i,1)
						}
					}
				}
				
				// cookie 部分
				let days = 7;
				this.$shop.reduce_order(food_id , anObject , days)
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

	.food img{
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
	
	.food_order_quantities_minus{
		border: 0.035rem solid #3190E8;
		border-radius: 50%;
		padding: 0.15rem 0.385rem;
		background: #FFFFFF;
		
		font-weight: bold;
		color: #3190E8;
	}
	
	.food_order_quantities_plus{
		border: 0.03rem solid #3190E8;
		border-radius: 50%;
		padding: 0.15rem 0.385rem;
		background: #3190E8;
		
		font-weight: bold;
		color: #FFFFFF;
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
