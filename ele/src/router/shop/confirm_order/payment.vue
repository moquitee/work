<template>
	<div class="payment">
		<header class="balance_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>在线支付</h2>
		</header>
		
		<section class="payment_time">
			<p>支付剩余时间</p>
			<p>00:00:00</p>
		</section>
		
		<section class="payment_list">
			<header>
				选择支付方式
			</header>
			<section>
				<div>
					<img src="../../../assets/alipay.png">
					<span>支付宝</span>
				</div>
				
				<svg>
					<svg viewBox="0 0 120 120" width="100%" height="100%"><circle cx="60" cy="60" r="60"></circle><path fill="#FFF" d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"></path></svg>
				</svg>
			</section>
			
			<section>
				<div>
					<img src="../../../assets/wechat.png">
					<span>微信</span>
				</div>
				
				<svg>
					<svg viewBox="0 0 120 120" width="100%" height="100%"><circle cx="60" cy="60" r="60"></circle><path fill="#FFF" d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"></path></svg>
				</svg>
			</section>
		</section>
		
		<button class="remark_confirm" v-on:click="pay_order()">
			确认支付
		</button>
		
		
		<div class="alert_container" v-if="alert_text">
			<section class='tip_text_container'>
				<div class="alert_icon">
					<span></span>
					<span></span>
				</div>
				<p>{{ alert_text }}</p>
				<div class="login_alert_comfirm_button" v-on:click="alert_text = undefined">确认</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				alert_text: undefined,
			}
		},
	}
</script>

<style>
	.payment{
		background-color: #F5F5F5;
	}
	
	.payment_time{
		width: 100%;
		height: 12rem;
		
		display: flex;
		flex-direction: column;
		justify-content: center;
		
		text-align: center;
		
		background-color: #FFFFFF;
	}
	
	.payment_time>p:first-of-type{
		font-size: 1.2rem;
		color: #666666;
		
		margin-bottom: 1rem;
	}
	
	.payment_time>p:last-of-type{
		font-size: 3rem;
		color: #333333;
	}
	
	.payment_list{
		padding: 0 1.4rem;
		
		margin-bottom: 1.8rem;
	}
	
	.payment_list>header{
		font-size: 1.2rem;
		line-height: 3.6rem;
		color: #666666;
	}
	
	.payment_list>section{
		background-color: #FFFFFF;
		padding: 1.2rem;
		
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.payment_list>section>svg{
		width: 2rem;
		height: 2rem;
		
		fill: #cccccc;
	}
	
	.payment_list>section>div{
		display: flex;
		align-items: center;
	}
	
	.payment_list>section>div>img{
		width: 4rem;
		height: 4rem;
		
		margin-right: 0.8rem;
	}
	
	.payment_list>section>div>span{
		font-size: 1.4rem;
		color: #666666;
	}
</style>
