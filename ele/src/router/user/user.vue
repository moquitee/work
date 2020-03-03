<template>
	<div>
		<header class="user_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<span>我的</span>
		</header>
		
		<section class="user_container" v-if="user_info" v-on:click="$router.push({ name:'user_info' })">
			<img class="user_page_avatar" src="//elm.cangdu.org/img/default.jpg">
			<section class="user_base_info">
				<hgroup>
					<h2>{{ user_info.username }}</h2>
					<h3><img class="user_phone" src="../../assets/phone.jpg"><span>暂无绑定手机号</span></h3>
				</hgroup>
			</section>
			<span>&gt;</span>
		</section>
		
		<section class="user_container" v-on:click="$router.push('/login')" v-else>
			<img class="user_page_avatar" src="../../assets/unknown_user.jpg">
			<section class="user_base_info">
				<hgroup>
					<h2>登录/注册</h2>
					<h3><img class="user_phone" src="../../assets/phone.jpg"><span>暂无绑定手机号</span></h3>
				</hgroup>
			</section>
			<span>&gt;</span>
		</section>
		
		<section class="user_activities">
			<ul>
				<li v-on:click="$router.push({ name: 'balance' })">
					<span class="user_activities_top" v-if="user_info">{{ user_info.balance.toFixed(2) }}<span>元</span></span>
					<span class="user_activities_top" v-else>0.00<span>元</span></span>
					<span class="user_activities_bottom">我的余额</span>
				</li>
				<li v-on:click="$router.push({ name: 'benefit' })">
					<span class="user_activities_top" v-if="user_info">{{ user_info.gift_amount}}<span>个</span></span>
					<span class="user_activities_top" v-else>0<span>个</span></span>
					<span class="user_activities_bottom">我的优惠</span>
				</li>
				<li v-on:click="$router.push({ name: 'point' })">
					<span class="user_activities_top" v-if="user_info">{{ user_info.point }}<span>分</span></span>
					<span class="user_activities_top" v-else>0<span>分</span></span>
					<span class="user_activities_bottom">我的积分</span>
				</li>
			</ul>
		</section>
		
		<section class="user_middle">
			<ul>
				<li>
					<aside>
						<img src="../../assets/dingdan.png">
					</aside>
					<span>我的订单</span>
					<span>&gt;</span>
				</li>
				<li>
					<aside>
						<img src="../../assets/shangcheng.png">
					</aside>
					<span>积分商城</span>
					<span>&gt;</span>
				</li>
				<li>
					<aside>
						<img src="../../assets/crowd.png">
					</aside>
					<span>饿了么会员卡</span>
					<span>&gt;</span>
				</li>
			</ul>
		</section>
		
		<section class="user_middle">
			<ul>
				<li v-on:click="$router.push({ name: 'service' })">
					<aside>
						<img src="../../assets/service_center.png">
					</aside>
					<span>服务中心</span>
					<span>&gt;</span>
				</li>
				<li v-on:click="$router.push({ name: 'download' })">
					<aside>
						<img src="../../assets/download.png">
					</aside>
					<span>下载饿了么APP</span>
					<span>&gt;</span>
				</li>
			</ul>
		</section>
		
		<div class="footer">
			<section class="guide">
				<img id="waimai" src='../../assets/waimai1.png' v-on:click="$router.push({ name: 'home' })">
				<span>外卖</span>
			</section>
			<section class="guide">
				<img id="sousuo" src="../../assets/sousuo1.png" v-on:click="$router.push({ name: 'search' })">
				<span>搜索</span>
			</section>
			<section class="guide">
				<img id="dingdan" src="../../assets/dingdan1.png" v-on:click="$router.push({ name: 'order' })">
				<span>订单</span>
			</section>
			<section class="guide">
				<img id="wode" src="../../assets/wode2.png">
				<span>我的</span>
			</section>
		</div>
		
		<router-view class="user_info_page"></router-view>
	</div>
</template>

<script>
	export default{
		created() {
			this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/v1/user' , method: 'GET' , which: 17 , renewway:'set' });
		},
		
		computed:{
			user_info(){
				if ( this.$store.state.acquireData[17].username ){
					return this.$store.state.acquireData[17]
				}
				else {
					return false
				}
				
			}
		}
	}
</script>

<style>
	.user_header{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 15;
		
		width: 100%;
		height: 4rem;
		
		line-height: 4rem;
		font-size: 1.5rem;
		color: #FFFFFF;
		text-align: center;
		
		background: #3190E8;
	}
	
	.user_header span:nth-of-type(1){
		position: absolute;
		left: 1.0rem;
	}
	
	.user_container{
		display: flex;
		position: relative;
		
		margin-top: 3.90rem;
		padding: 2.5rem 1.5rem 1.6rem 1.5rem;
		
		background: #3190E8;
		color: #FFFFFF;
	}
	
	.user_container>img{
		width: 6.5rem;
		height: 6.5rem;
		
		border-radius: 50%;
		
	}
	
	.user_base_info{
		margin-left: 1rem;
	}
	
	.user_base_info *{
		vertical-align: middle;
	}
	
	.user_base_info>hgroup>h2{
		font-size: 1.8rem;
		line-height: 4rem;
	}
	
	.user_base_info>hgroup>h3{
		font-weight: normal;
	}
	
	.user_phone{
		margin-right: 0.5rem;
	}
	
	.user_container>span{
		position: absolute;
		right: 1rem;
		top: 4rem;
		
		font-size: 1.8rem;
	}
	
	.user_activities>ul{
		display: flex;
		
		background: #FFFFFF;
	}
	
	.user_activities>ul>li{
		width: 9.5rem;
		padding: 1.6rem;
		float: left;
		
		text-align: center;
	}
	
	.user_activities>ul>li:nth-of-type(2n){
		border-left: 0.025rem solid #ECECEC;
		border-right: 0.025rem solid #ECECEC;
	}
	
	.user_activities_top{
		display: block;
		
		margin-bottom: 0.5rem;
		
		font-size: 2.6rem;
		font-weight: bold;
	}
	
	.user_activities>ul>li:nth-of-type(1)>.user_activities_top{
		color: #f90;
	}
	
	.user_activities>ul>li:nth-of-type(2)>.user_activities_top{
		color: #ff5f3e;
	}
	
	.user_activities>ul>li:nth-of-type(3)>.user_activities_top{
		color: #6ac20b;
	}
	
	.user_activities_top>span{
		color: #333;
		font-size: 1.1rem;
		font-weight: normal;
	}
	
	.user_activities_bottom{
		color: #666;
	}
	
	.user_middle{
		margin-top: 1rem;
		padding-right: 0.5rem;
		
		background: #FFFFFF;
		
		font-size: 1.2rem;
	}
	
	.user_middle>ul>li{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		height: 2.5rem;
		padding: 0.8rem;
		padding-left: 3.6rem;
		border-bottom: 0.025rem solid #ECECEC;
	}
	
	.user_middle>ul>li *{
		vertical-align: middle;
	}
	
	.user_middle>ul>li>aside{
		position: absolute;
		left: 1.5rem;
	}
	
	.user_middle>ul>li>aside>img{
		width: 1.8rem;
		height: 1.8rem;
	}
	
	.user_middle>ul>li>span:nth-of-type(2){
		font-size: 1.4rem;
		color: #bbb;
	}
	
	.user_info_page{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 16;
		
		background: #f5f5f5;
	}
</style>
