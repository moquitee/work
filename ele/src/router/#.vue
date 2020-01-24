<template>
  <div>
	<div class="header">
		<img src="../assets/searchicon.png" class="searchicon">
		<router-link class="positionlink" to="/city">
			<span class="position">{{ position_name }}</span>
		</router-link>
		<router-link class="login" to="/login">
			<span class="signup">登陆|注册</span>
		</router-link>
	</div>
	
	<div class="content">
		<div class="hallswipercontainer" @touchstart.capture='touchdown($event)' @touchmove.capture='touched($event)' @touchend.capture='touchup()' ref="swipercontainer" v-if="food_catagory.length">
			<!-- 这里v-on:transitionend="removetransition"可以任意放在四个页面其中一个上，因为每次滑动四个都有动画，可以触发事件 -->
			<div class="specialty" style="transform:translateX(-30rem)" v-on:transitionend="removetransition">
				<a class="linktofood" v-for="food in food_catagory.slice(8,16)" v-bind:key="food.id">
					<img v-bind:src="'https://fuss10.elemecdn.com/'+food.image_url">
					<span>{{ food.title }}</span>
				</a>
				
			</div>
			
			<div class="specialty" style="transform:translateX(-30rem)">
				<a class="linktofood" v-for="food in food_catagory.slice(0,8)" v-bind:key="food.id" v-on:click="chose_a_category(food.id)">
					<img v-bind:src="'https://fuss10.elemecdn.com/'+food.image_url">
					<span>{{ food.title }}</span>
				</a>
			</div>
			
			<div class="specialty" style="transform:translateX(-30rem)">
				<a class="linktofood" v-for="food in food_catagory.slice(8,16)" v-bind:key="food.id" v-on:click="chose_a_category(food.id)">
					<img v-bind:src="'https://fuss10.elemecdn.com/'+food.image_url">
					<span>{{ food.title }}</span>
				</a>
			</div>

			<div class="specialty" style="transform:translateX(-30rem)">
				<a class="linktofood" v-for="food in food_catagory.slice(0,8)" v-bind:key="food.id">
					<img v-bind:src="'https://fuss10.elemecdn.com/'+food.image_url">
					<span>{{ food.title }}</span>
				</a>
			</div>


			<div class="hallswiperpointcontainer">
				<span class="hallswiper-point" v-bind:class="{ active : touchdata.index == 1  }"></span>
				<span class="hallswiper-point" v-bind:class="{ active : touchdata.index == 2  }"></span>
			</div>
		</div>
	
		<div class="shopcontainer">
			<header class="shopheader">
				<img class="shanjiaicon" src="../assets/shanjia.jpg">
				<span class="shopheadertitle">附近商家</span>
			</header>
			
			<ul class="shoplist" v-on:touchend="shop_loading">
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
				
				<li class="shopinfo">
					<img src="../assets/longmao.jpg" class="shop_img">
					
					<section class="shop_right">
						<header class="shop_detail_top">
							<span>
								<span class="prestige">品牌</span>
								<span class="shop_name">效果演示</span>
							</span>
							<ul class="shop_support">
								<li>保</li>
								<li>准</li>
								<li>票</li>
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
							
										<div class="shop_rate_overflow">
											<img src="../assets/start1.png">
											<img src="../assets/start1.png">
											<img src="../assets/start1.png">
											<img src="../assets/start1.png">
											<img src="../assets/start1.png">
										</div>
									</div>
								<span class="shop_rate_number">4.7</span>
							</section>
							
								<section class="order_sales_quantities">月售106单</section>
							</section>
							
							<section class="order_service">
								<span class="bird_delivery">蜂鸟专送</span>
								<span class="intime_delivery">准时达</span>
							</section>
						</h5>
						
						<h5 class="delivery_info">
							<p class="fee">¥20起送<span>/</span>配送费约¥5</p>
							
							<p class="distance_time">
								<span class="distance">1384.9公里</span>
								<span>/</span>
								<span class="order_time">14小时46分钟</span>
							</p>
						</h5>
					</section>
				</li>
			</ul>
		</div>
	</div>
	
	<div class="footer">
		<section class="guide">
			<img id="waimai" src='../assets/waimai2.jpg'>
			<span>外卖</span>
		</section>
		<section class="guide">
			<img id="sousuo" src="../assets/sousuo1.png" v-on:click="$router.push({ name: 'search' })">
			<span>搜索</span>
		</section>
		<section class="guide">
			<img id="dingdan" src="../assets/dingdan1.png">
			<span>订单</span>
		</section>
		<section class="guide">
			<img id="wode" src="../assets/wode.png">
			<span>我的</span>
		</section>
	</div>
	
	<div class="back_to_top" ref="back_to_top_button" v-on:click="back_to_top">
		回到顶部
	</div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
	created:function(){
		if (this.longitude && this.latitude){
			// 获取位置
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v2/pois/'+ this.latitude + ',' + this.longitude , method: 'GET' , which: 2 , renewway:'set' });
			// 获取食品列表
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v2/index_entry' , method: 'GET' , which: 4 , renewway:'set' });
			// 获取商铺列表
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/restaurants?latitude=' + this.latitude + '&longitude=' + this.longitude + '&offset=' + this.fetch_offset , method: 'GET' , which: 5 , renewway:'push' })
		}
		else{
			// 如果没有位置的geohash，就跳转到city页面，让用户先选地方
			this.$router.push('/city');
		}
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
		return{
			touchdata:{
				index : 1, //第2个页面
				translatex : -30, //页面偏移度 -(index * width)
				startevent: null,//刚点击的事件
				oldevent : null, //点击事件，用来获取位置
			},
			
			fetch_offset:0,
		}
	},
	
	computed:{
		position_name(){
			return this.$store.state.acquireData[2].address
		},
		
		longitude(){
			return this.$cookie.get('longitude')
		},
		
		latitude(){
			return this.$cookie.get('latitude')
		},
		
		food_catagory(){
			return this.$store.state.acquireData[4]
		},
		
		shop_info(){
			return this.$store.state.acquireData[5]
		},
		
	},
	
	methods:{
		touchdown: function(event){
			this.touchdata.oldevent = this.touchdata.startevent = event ;
		},
		
		touched: function(event){
			// 如果开始的点击事件的pageX 大于 移动时的点击事件的pageX ,说明向左滑动
			// 如果开始的点击事件的pageX 小于 移动时的点击事件的pageX ,说明向右滑动
			// 记录一下触摸x偏移量
			this.touchdata.translatex -= (this.touchdata.oldevent.touches[0].pageX - event.touches[0].pageX)/19 ;
			for ( let i = 0 ; i <= 3 ; i++ ){
				this.$refs.swipercontainer.childNodes[i].style.transform = 'translateX(' + this.touchdata.translatex +'rem)'
			}
			
			this.touchdata.oldevent = event;
		},
		
		touchup: function(){
			//如果开始触摸的位置 大于 结束触摸的位置，说明向右移动，自动调整页面的位置
			if ( (this.touchdata.startevent.touches[0].pageX - this.touchdata.oldevent.touches[0].pageX) > 200 ){
				this.touchdata.index ++;
			}
			else if ( this.touchdata.startevent.touches[0].pageX - this.touchdata.oldevent.touches[0].pageX < -200 ){
				this.touchdata.index --;
			}
			
			// 重置一下页面偏移度
			this.touchdata.translatex = this.touchdata.index*(-30) 
			for ( let i = 0 ; i <= 3 ; i++ ){
				// 添加动画类名
				this.$refs.swipercontainer.childNodes[i].classList.add('move');
				this.$refs.swipercontainer.childNodes[i].style.transform = 'translateX(' + this.touchdata.translatex +'rem)'
			}
		},
		
		removetransition: function(event){
			for ( let i = 0 ; i <= 3 ; i++ ){
				// 动画结束后，删除动画类名
				// 这里也可以用this.$refs.swipercontainer.childNodes[i].classList.remove('move');
				event.path[1].childNodes[i].classList.remove('move');
			}
			// 动画结束后，把页面调过来
			// 如果是在第一或第四个页面，自动切到第三或第二个页面
			if ( this.touchdata.index == 0 || this.touchdata.index == 3 ){
				this.touchdata.index = ( this.touchdata.index == 0 )? 2 : 1 ;
				// 重置一下页面偏移度
				this.touchdata.translatex = this.touchdata.index*(-30) 
				
				for ( let i = 0 ; i <= 3 ; i++ ){
					// 添加动画类名
					this.$refs.swipercontainer.childNodes[i].style.transform = 'translateX(' + this.touchdata.translatex +'rem)'
				}
			}
		},
		
		chose_a_category(id){
			this.$router.push({ path: '/shop_catagory', query: { id: id }})
		},
		
		shop_loading: function(){
			let hiddenHeight = document.body.scrollHeight - window.innerHeight - window.pageYOffset
			if (hiddenHeight < 40){
				this.fetch_offset += 20;
				this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&offset=' + this.fetch_offset , method: 'GET' , which: 5 , renewway:'push' })
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
	.header {
		position:fixed;
		top:0;
		z-index: 998;
		
		background: #3190e8;
		color: #fff;
		
		margin: 0 auto;
		width: 30rem;
		height: 4rem;
	}
	
	.content {
		margin: 0 auto;
		width: 30rem;
		height: 100%;
		
		padding-top:4rem;
		
		background: ;
	}
	
	.footer{
		position:fixed;
		bottom:0;
		z-index: 999;
		
		margin: 0 auto;
		width: 30rem;
		height: 4rem;
		
		background: #FFF;
		
		box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
	}
	
	.searchicon{
		position: absolute;
		top:1.4rem;
		left:1.5rem;
		
		width:1.8rem;
	}
	
	.positionlink{
		position:absolute;
		top:1.5rem;
		left:7.6rem;
		
		font-size: 1.5rem;
		width:15rem;
		
		color: #FFFFFF;
		text-decoration: none;
	}
	
	.position{
		display: block;
		
		text-align:center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.login{
		position: absolute;
		right: 1.1rem;
		top: 1.6rem;
		
		font-size: 1.2rem;
		color: #FFFFFF;
		text-decoration: none;
	}
	
	.guide{
		display: inline-block;
		
		width: 7.5rem;
		height: 4rem;
		text-align: center;
	}
	
	.guide img{
		display: block;
		position: relative;
		
		margin: 1rem auto 0 auto;
		width:1.8rem;
		height: 1.8rem;
	}
	
	.hallswipercontainer{
		width: 30rem;
		height: 16rem;
		display: -webkit-box;
		overflow: hidden;
		
		border-bottom: 0.025rem solid #e4e4e4 ;
		
		background: #fff;
	}
	
	.specialty{
		width: 30rem;
	}
	
	.specialty.move{
		transition: transform 0.2s ease-in-out;
	}
	
	.linktofood{
		display: inline-block;
		width:7.5rem;
		
		text-align:center;
	}
	
	.linktofood img{
		display: block;
		
		width:4.5rem;
		margin:0.5rem auto;
	}

	.hallswiperpointcontainer{
		position: absolute;
		top: 18.5rem;
		left: 0;
		width: 30rem;
		text-align: center;
	}
	
	.hallswiper-point{
		width: 0.5rem;
		height: 0.5rem;
		background: #000;
		border-radius: 100%;
		display: inline-block;
		margin: 0 0.2rem;
		opacity: 0.2;
	}
	
	.hallswiper-point.active{
		background:#3190E8;
		opacity: 1;
	}
	
	.shopcontainer{
		position: relative;
		
		width:30rem;
		border-top: 0.025rem solid #e4e4e4;
		margin-top: 0.65rem;
		
		background: #fff;
	}
	
	.shopheader{
		position: relative;
		
		height: 3rem;
	}
	
	.shanjiaicon{
		position: relative;
		top:0.8rem;
		
		margin-left: 1rem;
		margin-right: 0;
		width: 1.3rem;
		height: auto;
	}
	
	.shopheadertitle{
		position: relative;
		
		font-size: 1.1rem;
		color: #999;
		
		left:0.6rem;
		top:0.55rem;
	}
	
	.shoplist{
		list-style: none;
		
		margin: 0;
		padding: 0 0 3.6rem 0;
	}
	
	.shopinfo{
		display: flex;
		
		padding:1rem;
		border-bottom: 0.025rem solid #f1f1f1;
	}
	
	.shop_img{
		margin-right:0.7rem;
		/* width: 5.5rem; */
		height:5.5rem;
	}
	
	.shop_right{
		margin: 0;
		padding: 0;
		
		width: 100%;
	}
	
	.prestige{
		padding: 0.2rem;
		margin-right: 0.5rem;
		
		background: #ffd930;
		font-size: 0.8rem;
		font-weight: bold;
	}
	
	.shop_detail_top{
		display: flex;
		justify-content: space-between;
	}
	
	.shop_name{
		font-size: 1.2rem;
		font-weight: bold;
	}
	
	.shop_support{
		display: flex;
		padding: 0;
		
		list-style: none;
	}
	
	.shop_support li{
		margin-left: 0.1rem;
		border: 0.025rem solid #f1f1f1;
		padding: 0 0.04rem;
		
		font-family: Microsoft Yahei;
		font-size: 0.6rem;
		color: #999;
	}
	
	.shop_detail_middle{
		display: flex;
		justify-content: space-between;
		
		margin-top: 1.2rem;
		margin-bottom: 0;
	}
	.shop_rate{
		display: flex;
	}
	
	.shop_rate_info{
		display: flex;
		
		width:3.5rem;
		height: 0.9rem;
	}
	
	.shop_rate_left{
		display: flex;
	}
	
	.shop_rate_star{
		position: absolute;
		
		display: flex;
		
		width: 3.5rem;
		height: 0.7rem;
	}
	
	.shop_rate_overflow{
		position: relative;
		
		display: flex;
		overflow: hidden;
		
		width: 3.5rem;
		height: 0.7rem;
	}
	
	.shop_rate_star img,.shop_rate_overflow img {
		width:0.7rem;
		height: 0.7rem;
	}
	
	.shop_rate_number{
		margin: 0 0.3rem;
		
		color: #ff6000;;
	}
	
	.order_sales_quantities{
		font-size: 0.7rem;
		font-weight: 400;
		color: #666;
	}
	
	.bird_delivery{
		border:0.025rem solid #3190e8;
		
		background:#3190e8;
		color: #FFFFFF;
		font-size: 0.5rem;
		
		padding: 0.04rem 0.08rem 0;
		border-radius: 0.15rem;
	}
	
	.intime_delivery{
		border:0.025rem solid #3190e8;
		
		background:#FFFFFF;
		color: #3190e8;
		font-size:0.5rem;
		
		padding: 0.04rem 0.08rem 0;
		border-radius: 0.15rem;
		margin-left: 0.08rem;
	}
	
	.delivery_info{
		display: flex;
		justify-content: space-between;
		
		margin:0.7rem 0 0 0;
	}
	
	.delivery_info p{
		margin:0;
		
	}
	
	.fee{
		color: #666;
	}
	
	.distance_time .distance{
		color: #999;
	}
	
	.distance_time .order_time{
		color: #3190e8;
	}
	
	.back_to_top{
		display: none;
		
		position: fixed;
		bottom: 6rem;
		right: 2rem;
		
		width: 4.1rem;
		height: 1.1rem;
		padding: 1.5rem 0;
		
		border: 0.15rem solid #e4e4e4;
		border-radius: 50%;
		
		font-weight: bold;
		color: #3190E8;
	}
</style>
