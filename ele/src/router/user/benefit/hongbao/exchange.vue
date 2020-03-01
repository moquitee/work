<template>
	<div>
		<header class="exchange_header">
			<span>&lt;</span>
			<h2>兑换红包</h2>
		</header>
		
		<form class="exchange_form">
			<input type="text" v-model="exchange_code" placeholder="请输入兑换码">
			<section>
				<input type="text" maxlength="4" placeholder="验证码" v-model="captcha_code">
				<section>
					<img class="captcha_img" v-if="captcha_url" v-bind:src="captcha_url">
					<div class="change_img" v-on:click="get_captcha()">
						<p>看不清</p>
						<p>换一张</p>
					</div>
				</section>
			</section>
		</form>
		
		<button class="exchange_button" v-bind:class="{ active: user_input_correct }">兑换</button>
	</div>
</template>

<script>
	export default{
		created() {
			this.get_captcha()
		},
		
		data(){
			return {
				exchange_code : undefined,
				captcha_code: undefined,
			}
		},
		
		computed:{
			captcha_url(){
				return this.$store.state.acquireData[15].code
			},
			
			user_input_correct(){
				return false
			}
		},
		
		methods:{
			get_captcha(){
				this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/v1/captchas' , method: 'POST' , which: 15 , renewway: 'set' , appendix: { credentials: 'include'} }) ;
			}
		}
	}
</script>

<style>
	.exchange_header{
		position: fixed;
		z-index: 60;
		
		width: 100%;
		height: 4rem;
		
		text-align: center;
		font-size: 1.2rem;
		line-height: 4rem;
		color: #FFFFFF;
		background: #3190E8;
	}
	
	.exchange_header>span{
		position: absolute;
		left: 0.5rem;
		
		font-size: 2rem;
	}
	
	.exchange_form{
		margin: 5rem auto 2rem auto;
		
		width: 28rem;
	}
	
	.exchange_form>input{
		width: 94%;
		height: 3.8rem;
		
		padding: 0 3%;
		border: none;
		border-radius: 0.3rem;
		
		font-size: 1.4rem;
		color: #666666;
	}
	
	.exchange_form>section{
		margin-top: 1.5rem;
		
		display: flex;
	}
	
	.exchange_form>section>input{
		width: 60%;
		height: 3.8rem;
		padding: 0 3%;
		border-radius: 0.3rem;
		
		font-size: 1.4rem;
		color: #666666;
	}
	
	.exchange_form>section>section{
		width: 38%;
		display: flex;
		align-items: center;
		
		margin-left: 2%;
		border-radius: 0.3rem;
		
		background: #FFFFFF;
	}
	
	.exchange_button{
		display: block;
		
		width: 26rem;
		margin: 0 auto;
		
		height: 3.5rem;
		
		border: none;
		border-radius: 0.3rem;
		
		font-size: 1.3rem;
		color: #FFFFFF;
		
		background: #ccc;
	}
</style>
