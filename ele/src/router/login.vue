<template>
	<div>
		<header class="login_header">
			<span>&lt;</span>
			密码登录
		</header>
	
		<form class="login_form">
			<section class="login_input_container">
				<input type="text" placeholder="账号" v-model="user_name" />
			</section>
			
			<section class="login_input_container">
				<input type="password" placeholder="密码" v-model="password" ref="password_input">
				<div class="login_input_slider" v-on:click="display_password()" ref="login_input_slider">
					<div class="circle_button"></div>
					<span>abc</span>
					<span>...</span>
				</div>
			</section>
			
			<section class="login_input_container">
				<input type="text" placeholder="验证码" v-model="captcha" maxlength="4" />
				<div class="change_img_container">
					<img class="captcha_img" v-if="captcha_url" v-bind:src="captcha_url">
					<div class="change_img" v-on:click="get_captcha()">
						<p>看不清</p>
						<p>换一张</p>
				</div>
				</div>
			</section>
		</form>
		
		<p class="login_tips">温馨提示：未注册过的账号，登录时将自动注册</p>
		<p class="login_tips">注册过的用户可凭账号密码登录</p>
		
		<div class="login_button" v-on:click="login()">登录</div>
		
		<router-link class="forgot_password" to="/forgot">忘记密码？</router-link>
		
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
		created() {
			this.get_captcha()
		},
		
		data(){
			return {
				user_name: '',
				password: '',
				captcha: '',
				
				alert_text: undefined,
			}
		},
		
		computed:{
			captcha_url(){
				return this.$store.state.acquireData[15].code
			}
		},
		
		methods:{
			display_password(){
				if ( this.$refs.login_input_slider.classList[1] == 'active' && this.$refs.login_input_slider.childNodes[0].classList[1] == 'active'){
					this.$refs.login_input_slider.classList.remove('active')
					this.$refs.login_input_slider.childNodes[0].classList.remove('active')
					this.$refs.password_input.type = 'password'
				}
				else{
					this.$refs.	login_input_slider.classList.add('active')
					this.$refs.login_input_slider.childNodes[0].classList.add('active')
					this.$refs.password_input.type = 'text'
				}
			},
			
			get_captcha(){
				this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/v1/captchas' , method: 'POST' , which: 15 , renewway: 'set' , appendix: { credentials: 'include'} }) ;
			},
			
			login(){
				if ( this.user_name == '' ){
					this.alert_text = '请输入手机号/邮箱/用户名'
				}
				else if ( this.password == '' ){
					this.alert_text = '请输入密码'
				}
				else if ( this.captcha == '' ){
					this.alert_text = '请输入验证码'
				}
				else if ( this.captcha.length < 4 ){
					this.alert_text = '验证码失效'
				}
				else{
					let user_info_post_data = { username : this.user_name , password : this.password , captcha_code : this.captcha };
					this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/v2/login' , method: 'POST' , which: 16 , renewway:'set' , appendix: { headers:{ 'content-type' : 'application/json' } , credentials: 'include' , body: JSON.stringify(user_info_post_data) } }).then((result)=>{
						if ( result.message ){
							this.alert_text = result.message
						}
						else{
							this.$router.push('/user')
						}
					});
				}
			}
		}
	}
</script>

<style>
	.login_header{
		position: fixed;
		
		width: 100%;
		height: 4rem;
		
		background: #3190E8;
		
		font-size: 2rem;
		font-weight: bold;
		line-height: 4rem;
		color: #FFFFFF;
		text-align: center;
	}
	
	.login_header>span{
		position: absolute;
		left: 1rem;
		
		font-weight: normal;
	}
	
	.login_form{
		padding-top: 4rem;
	}
	
	.login_input_container{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		height: 2.2rem;
		padding: 1.2rem 1.6rem;
		border-bottom: 0.025rem solid #ECECEC;
		
		background: #FFFFFF;
		
	}
	
	.login_input_container>input{
		border: none;
		
		font-size: 1.4rem;
		color: #666;
		
		outline: 0;
	}
	
	.login_input_slider{
		position: relative;
		
		display: flex;
		
		width: 3.2rem;
		height: 1.4rem;
		border-radius: 1rem;
		margin: auto 0;
		padding: 0 0.4rem;
		
		background: #CCC;
		
		color: #FFFFFF;
	}
	
	.login_input_slider.active{
		background: #4CD964;
	}
	
	.circle_button{
		position: absolute;
		top: -0.5rem;
		left: -0.8rem;
		
		width: 2.4rem;
		height: 2.4rem;
		
		border-radius: 50%;
		
		box-shadow: 0 0.02667rem 0.05333rem 0 rgba(0,0,0,.1);
		background: #f1f1f1;
		
		transition: all 0.3s;
	}
	
	.circle_button.active{
		transform: translateX(3rem);
	}
	
	.login_input_slider>span:nth-of-type(2){
		transform: translateY(-0.16rem);
	}
	
	.captcha_img{
		width: 5rem;
		height: 2.5rem;
		
		margin-right: 1rem;
	}
	
	.change_img_container{
		display: flex;
		align-items: center;
	}
	
	.change_img{
		width: 3.5rem;
		
		vertical-align: middle;
	}
	
	.change_img>p{
		font-size: 1.1rem;
		line-height: 1.6rem;
	}
		
	.change_img>p:nth-of-type(1){
		color: #666;
	}
	
	.change_img>p:nth-of-type(2){
		color: #3190E8;
	}
	
	.login_tips{
		padding: 0.8rem 1.5rem;
		
		color: red;
		font-size: 1.2rem;
	}
	
	.login_button{
		width: 28rem;
		height: 4rem;
		margin: 0 auto;
		border-radius: 0.3rem;
		
		background: #4cd964;
		
		text-align: center;
		font-size: 1.5rem;
		line-height: 4rem;
		color: #FFFFFF;
	}
	
	.forgot_password{
		float: right;
		margin-right: 1rem;
		margin-top: 2rem;
		
		color: #3b95e9;
		font-size: 1.2rem;
		text-decoration: none;
	}
	
	.alert_container{
		position: fixed;
		top: 30%;
		left: 3rem;
		
		width: 24rem;
		
		background: #FFFFFF;
		
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
		
		animation: tipMove 0.4s;
	}
	
	.alert_icon{
		width: 6rem;
		height: 6rem;
		margin: 0 auto;
		
		border: 0.3rem solid #f8cb86;
		border-radius: 50%;
		
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	
	.alert_icon>span:first-of-type{
		width: 0.24rem;
		height: 3rem;
		background: #f8cb86;
	}
	
	.alert_icon>span:nth-of-type(2){
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 50%;
		background: #F8CB86;
		
		margin-top: 0.4rem;
	}
	
	.tip_text_container>p{
		margin-top: 1rem;
		
		font-size: 1.5rem;
		text-align: center;
		color: #666;
	}
	
	.login_alert_comfirm_button{
		width: 100%;
		height: 3rem;
		margin-top: 1.5rem;
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
		
		background: #4CD964;
		
		text-align: center;
		line-height: 3rem;
		font-size: 1.6rem;
		color: #fff;
	}
</style>
