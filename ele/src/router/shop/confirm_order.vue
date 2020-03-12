<template>
	<div class="confirm_order_page" v-if="check_out_info && check_out_info.id != null ">
		<header class="confirm_order_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>确认订单</h2>
			<svg>
				<svg viewBox="0 0 28 33" id="user" width="100%" height="100%"><path fill-rule="evenodd" d="M20.798 19.289c2.636-2.002 4.215-5.091 4.215-8.437 0-5.886-4.845-10.647-10.808-10.647S3.397 4.966 3.397 10.852c0 3.345 1.578 6.433 4.212 8.435l.264-2.678C4.358 18.32 1.591 21.403.168 25.187l1.478.556v-1.579c-1.485.73-1.485.73-1.501 1.079-.054.188-.054.188-.069.278a2.58 2.58 0 0 0-.026.229 9.112 9.112 0 0 0-.019.4c-.008.265-.014.617-.018 1.039-.005.511-.006 1.037-.006 1.451v.027c-.004 1.732 1.41 3.129 3.154 3.129h22.082a3.18 3.18 0 0 0 3.172-3.153l.011-1.305.008-.897.003-.296.001-.083v-.022-.006-.001l.002-.278-.093-.262c-1.385-3.918-4.203-7.122-7.812-8.88l.263 2.678zm-1.911-2.516l-2.045 1.553 2.309 1.125c2.856 1.392 5.106 3.949 6.218 7.093l-.09-.54V26.033l-.001.083-.003.296-.008.897-.011 1.305c0 .01-.011.021-.013.021H3.161c-.007 0 .005.011.005.032v-.031c0-.404.001-.92.006-1.418.004-.4.01-.732.017-.969.004-.121.008-.212.012-.262l-.006.043c-.009.06-.009.06-.058.229-.01.336-.01.336-1.49 1.063H2.74l.385-1.024c1.141-3.035 3.35-5.495 6.131-6.849l2.309-1.124-2.045-1.554c-1.859-1.412-2.964-3.576-2.964-5.92 0-4.129 3.418-7.488 7.649-7.488s7.649 3.359 7.649 7.488c0 2.344-1.106 4.509-2.966 5.921z" class="path1"></path></svg>
			</svg>
		</header>
		
		<section class="shop_address_container" v-if="user_address && user_address.length">
			<div class="shop_address_left">
				<svg>
					<svg viewBox="0 0 28 33" id="location" width="100%" height="100%"><g fill-rule="evenodd"><path d="M20.809 21.6L12.9 29.509h1.616l-7.992-7.992a13.003 13.003 0 0 1-.506-.478c-4.25-4.25-4.25-11.14 0-15.389s11.14-4.25 15.389 0c4.25 4.25 4.25 11.14 0 15.389a10.81 10.81 0 0 1-.543.508l-.056.052zm1.56 1.669c.225-.196.443-.401.656-.613 5.142-5.142 5.142-13.48 0-18.622s-13.48-5.142-18.622 0c-5.142 5.142-5.142 13.48 0 18.622.18.18.364.354.553.522l8.753 8.755 8.661-8.664z" class="path1"></path> <path d="M9.428 16.739a6.063 6.063 0 1 0 8.573-8.575 6.063 6.063 0 0 0-8.573 8.575zm1.616-1.616a3.776 3.776 0 1 1 5.34-5.341 3.776 3.776 0 0 1-5.34 5.341z" class="path2"></path></g></svg>
				</svg>
				
				<section class="order_user_info">
					<header>
						<span>用户名字</span>
						<span>先生</span>
						<span>13025689810</span>
					</header>
					
					<div class="order_address_detail">
						<span>家</span>
						<span>详细地址</span>
					</div>
				</section>
			</div>
			
			<span class="shop_address_right">&gt;</span>
		</section>
		
		<section class="shop_empty_address_container" v-else>
			<div class="empty_address_left">
				<svg>
					<svg viewBox="0 0 28 33" id="location" width="100%" height="100%"><g fill-rule="evenodd"><path d="M20.809 21.6L12.9 29.509h1.616l-7.992-7.992a13.003 13.003 0 0 1-.506-.478c-4.25-4.25-4.25-11.14 0-15.389s11.14-4.25 15.389 0c4.25 4.25 4.25 11.14 0 15.389a10.81 10.81 0 0 1-.543.508l-.056.052zm1.56 1.669c.225-.196.443-.401.656-.613 5.142-5.142 5.142-13.48 0-18.622s-13.48-5.142-18.622 0c-5.142 5.142-5.142 13.48 0 18.622.18.18.364.354.553.522l8.753 8.755 8.661-8.664z" class="path1"></path> <path d="M9.428 16.739a6.063 6.063 0 1 0 8.573-8.575 6.063 6.063 0 0 0-8.573 8.575zm1.616-1.616a3.776 3.776 0 1 1 5.34-5.341 3.776 3.776 0 0 1-5.34 5.341z" class="path2"></path></g></svg>
				</svg>
				
				<p>请添加一个收货地址</p>
			</div>
			
			<span class="empty_address_right">&gt;</span>
		</section>
		
		<section class="shop_delivery_model_container">
			<div class="shop_delivery_left">
				<p>送达时间</p>
			</div>
			
			<div class="shop_delivery_right">
				<p>尽快送达|预计{{ check_out_info.delivery_reach_time }}</p>
				<p v-if="check_out_info.is_support_ninja">蜂鸟专送</p>
			</div>
		</section>
		
		<section class="pay_methods_container">
			<section class="order_item_style" v-on:click="paymethods_display = true ">
				<span>支付方式</span>
				
				<div class="more_type">
					<span>在线支付</span>
					<span>&gt;</span>
				</div>
			</section>
			
			<section class="order_item_style">
				<span>红包</span>
				<span>暂时只在饿了么APP中支持</span>
			</section>
		</section>
		
		<section class="order_foods_container">
			<header v-if="check_out_info.cart.restaurant_info">
				<img v-bind:src="'//elm.cangdu.org/img/' + check_out_info.cart.restaurant_info.image_path">
				<span>{{ check_out_info.cart.restaurant_info.name }}</span>
			</header>
			
			<section class="order_foods_list_container" v-if="check_out_info.cart.groups && check_out_info.cart.groups.length">
				<ul>
					<li class="food_list_item" v-for="food in check_out_info.cart.groups[0]" v-bind:key="food.sku_id">
						<p>{{ food.name }}</p>
						<div class="ordered_food_quantity_and_price">
							<span>X{{ food.quantity }}</span>
							<span>¥{{ food.price }}</span>
						</div>
					</li>
				</ul>
					
				<section class="food_list_item" v-for="item in check_out_info.cart.extra" v-bind:key="item._id">
					<p>{{ item.name }}</p>
					<div class="ordered_food_quantity_and_price">
						<span>X{{ item.quantity }}</span>
						<span>¥{{ item.price }}</span>
					</div>
				</section>
					
				<section class="food_list_item">
					<p>配送费</p>
					<div class="ordered_food_quantity_and_price">
						<span>X1</span>
						<span>¥4</span>
					</div>
				</section>
				
				<section class="order_total_price">
					<p>订单 ¥1432</p>
					<div>
						<p>待支付</p>
						<p>¥1432</p>
					</div>
				</section>
			</section>
		</section>
		
		<section class="pay_methods_container">
			<header class="order_item_style">
				<span>订单备注</span>
				<div class="more_type">
					<span>口味、偏好等</span>
					<span>&gt;</span>
				</div>
			</header>
			
			<section class="order_item_style">
				<span>发票抬头</span>
				<div class="more_type">
					<span>不需要开发票</span>
					<span>&gt;</span>
				</div>
			</section>
		</section>
		
		<footer class="order_footer">
			<p>待支付 ¥1419</p>
			
			<button>确认下单</button>
		</footer>
		
		<!-- 支付方式 窗口 -->
		<div class="cover" v-show="paymethods_display" v-on:click="paymethods_display = false"></div>
		<section class="choose_type_container" v-if="check_out_info.payments && check_out_info.payments.length" v-show="paymethods_display" >
			<header>支付方式</header>
			<section class="choose_type_list">
				<ul>
					<li 
					v-for="method in check_out_info.payments" 
					v-bind:key="method.id"
					v-on:click="choose_a_type( method.id , method.select_state )"
					>
						<span class="choose_text" v-bind:class="{ avalible : method.select_state > 0 }">{{ method.name }} <span v-if="method.disabled_reason">{{ method.description }}</span></span>
						<svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="23.999999999999996" height="23.999999999999996">
								<g>
									<title>background</title>
									<rect fill="none" id="canvas_background" height="26" width="26" y="-1" x="-1"/>
									<g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
										<rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
									</g>
								</g>
								<g>
									<title>Layer 1</title>
									<ellipse v-bind:class="{ chosen: paymethod_id == method.id }"
									ry="11" rx="11" id="svg_2" cy="12" cx="12" stroke-width="0.1" stroke="#eeeeee"/>
									<line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_3" y2="16.549156" x2="9.450651" y1="12.562877" x1="5.464372" stroke="#eeeeee" fill="none"/>
									<line stroke-linecap="null" stroke-linejoin="null" id="svg_5" y2="18" x2="11" y1="13" x1="5" stroke-width="2" stroke="#ffffff" fill="none"/>
									<line stroke="#ffffff" stroke-linecap="null" stroke-linejoin="null" id="svg_6" y2="8" x2="18.5" y1="17.94148" x1="9.717221" stroke-width="2" fill="none"/>
								</g>
							</svg>
						</svg>
					</li>
				</ul>
			</section>
		</section>
	</div>
</template>

<script>
	export default{
		created() {
			// 获取用户地址信息
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v1/users/' + this.user_id + '/addresses', method: 'GET' , which: 20 , renewway:'set'});
		},
		
		data(){
			return {
				paymethods_display: false, // false时不显示pay_methods窗口 , 反之显示
				
				paymethod_id: 1,
			}
		},
		
		computed:{
			shop_id(){
				return this.$route.params.shop_id
			},
			
			user_id(){
				return this.$store.state.acquireData[17].user_id
			},
			
			user_address(){
				return this.$store.state.acquireData[20]
			},
			
			check_out_info(){
				return this.$store.state.acquireData[27]
			},
		},
		
		methods:{
			choose_a_type( id , state ){
				if ( state && state > 0 ){
					this.paymethod_id = id
					this.paymethods_display = false
				}
			}
		}
	}
</script>

<style>
	.confirm_order_page{
		padding-bottom: 6rem;
		
		bottom: auto;
	}
	
	.confirm_order_header{
		position: fixed;
		top: 0;
		left: 0;
		
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		width: 90%;
		height: 4rem;
		padding: 0 1.5rem;
		
		background: #3190E8;
		
		color: #FFFFFF;
	}
	
	.confirm_order_header>svg{
		fill: #FFFFFF;
		width: 1.6rem;
		height: 1.6rem;
	}
	
	.confirm_order_header>span{
		font-size: 2rem;
	}
	
	.shop_address_container,.shop_empty_address_container{
		margin-top: 4rem;
		padding: 1.5rem;
		
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		background: #FFFFFF url(../../assets/confirm_order_border.png) 0 100% repeat-x
	}
	
	.shop_address_left,.empty_address_left{
		display: flex;
		align-items: center;
	}
	
	.shop_address_left>svg,.empty_address_left>svg{
		width: 1.6rem;
		height: 1.6rem;
		fill: #3190E8;
		
		margin-right: 0.6rem;
	}
	
	.empty_address_left>p{
		font-size: 1.3rem;
		color: #333333;
	}
	
	.order_user_info>header>span:first-of-type{
		margin-right: 0.2rem;
		
		font-size: 1.6rem;
		font-weight: bold;
	}
	
	.order_user_info>header>span:nth-of-type(2){
		margin-right: 0.2rem;
		
		font-size: 1.2rem;
	}
	
	.order_user_info>header>span:nth-of-type(3){
		font-size: 1.2rem;
	}
	
	.order_address_detail>span:first-of-type{
		margin-right: 0.5rem;
		padding: 0 0.4rem;
		border-radius: 0.3rem;
		
		background: #ff5722;
		color: #FFFFFF;
	}
	
	.order_address_detail>span:nth-of-type(2){
		font-size: 1.1rem;
		color: #777;
	}
	
	.shop_address_right,.empty_address_right{
		font-size: 2rem;
		
		color: #999999;
	}
	
	.shop_delivery_model_container{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		margin-top: 0.6rem;
		border-left: 0.4rem solid #3190E8;
		padding-left: 1.5rem;
		padding-right: 1.2rem;
		
		min-height: 8rem;
		
		background: #FFFFFF;
	}
	
	.shop_delivery_left>p{
		font-size: 1.6rem;
		font-weight: bold;
	}
	
	
	.shop_delivery_right>p:first-of-type{
		margin-bottom: 0.8rem;
		
		font-size: 1.4rem;
		color: #3190e8;
	}
	
	.shop_delivery_right>p:nth-of-type(2){
		display: inline-block;
		
		padding: 0.2rem;
		border-radius: 0.3rem;
		
		color: #FFFFFF;
		background: #3190E8;
		
		float: right;
	}
	
	.pay_methods_container{
		margin: 0.6rem 0;
		
		background-color: #FFFFFF;
	}
	
	.order_item_style{
		display: flex;
		justify-content: space-between;
		
		padding: 1rem 1.4rem;
		border-bottom: 1px solid #ECECEC;
	}
	
	.order_item_style>span:first-of-type{
		font-size: 1.2rem;
		color: #666666;
	}
	
	.order_item_style>span:nth-of-type(2){
		color: #AAAAAA;
	}
	
	.more_type>span:first-of-type{
		font-size: 1.2rem;
		color: #AAAAAA;
	}
	
	.more_type>span:nth-of-type(2){
		margin-left: 0.5rem;
		
		font-size: 1.4rem;
		color: #AAAAAA;
	}
	
	.order_foods_container{
		background: #FFFFFF;
	}
	
	.order_foods_container>header{
		padding: 1.4rem;
		
		border-bottom: 1px solid #F5F5F5;
	}
	
	.order_foods_container>header>img{
		width: 2.4rem;
		height: 2.4rem;
		margin-right: 0.6rem;
		
		vertical-align: middle;
	}
	
	.order_foods_container>header>span{
		font-size: 1.6rem;
		color: #333;
		
		vertical-align: middle;
	}
	
	.order_foods_list_container>ul{
		padding-top: 1rem;
	}
	
	.food_list_item{
		padding: 0 1.4rem;
		
		display: flex;
		
		line-height: 3.6rem;
	}
	
	.food_list_item>p,.ordered_food_quantity_and_price>span{
		font-size: 1.3rem;
	}
	
	.food_list_item>p{
		width: 20rem;
	}
	
	.ordered_food_quantity_and_price{
		flex: 1;
		
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.ordered_food_quantity_and_price>span:first-of-type{
		color: #f60;
	}
	
	.order_total_price{
		display: flex;
		justify-content: space-between;
		
		border-top: 1px solid #F5F5F5;
		padding: 1.4rem;
	}
	
	.order_total_price p{
		font-size: 1.3rem;
	}
	
	.order_total_price>div>p{
		color: #f60;
	}
	
	.order_total_price>div>p:last-of-type{
		margin-top: 2rem;
	}
	
	
	.order_footer{
		width: 100%;
		height: 4rem;
		
		position: fixed;
		bottom: 0;
		
		display: flex;
	}
	
	.order_footer>p{
		flex: 5;
		
		background: #3c3c3c;
		
		padding-left: 2rem;
		
		line-height: 4rem;
		font-size: 1.5rem;
		color: #FFFFFF;
	}
	
	.order_footer>button{
		flex: 2;
		
		background-color: #56d176;
		
		font-size: 1.5rem;
		color: #FFFFFF;
	}
	
	
	.choose_type_container{
		position: fixed;
		bottom: 0;
		z-index: 201;
		
		width: 100%;
		height: 19rem;
		
		background: #FFFFFF;
	}
	
	.choose_type_container>header{
		width: 100%;
		height: 3.5rem;
		
		text-align: center;
		line-height: 3.5rem;
		
		font-size: 1.3rem;
		background-color: #fafafa;
	}
	
	.choose_type_list{
		width: 100%;
	}
	
	.choose_type_list>ul>li{
		display: flex;
		justify-content: space-between;
		align-items: cneter;
		
		padding: 1.5rem;
	}
	
	.choose_type_list>ul>li>span{
		font-size: 1.3rem;
		color: #CCCCCC;
	}
	
	.choose_type_list>ul>li>svg{
		width: 1.6rem;
		height: 1.6rem;
	}
	
	.choose_type_list>ul>li>svg ellipse{
		fill: #eeeeee;
	}
	
	.choose_type_list>ul>li>span.avalible{
		color: #333333;
	}
	
	.choose_type_list>ul>li>svg ellipse.chosen{
		fill: #4cd964;
	}
</style>
