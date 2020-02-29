<template>
	<div>
		<header class="user_password_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>重置密码</h2>
		</header>
		
		<section class="user_password_container">
			<ul>
				<li>
					<input type="text" placeholder="账号" v-model="user_name"/>
				</li>
				<li>
					<input type="password" placeholder="旧密码" v-model="user_previous_password"/>
				</li>
				<li>
					<input type="password" placeholder="请输入新密码" v-model="user_new_password"/>
				</li>
				<li>
					<input type="password" placeholder="请确认密码" v-model="user_new_password_repeat"/>
				</li>
				<li>
					<input type="text" placeholder="验证码" v-model="captcha_code"/>
					<div class="change_img_container">
						<img class="captcha_img" v-if="captcha_url" v-bind:src="captcha_url">
						<div class="change_img" v-on:click="get_captcha()">
							<p>看不清</p>
							<p>换一张</p>
						</div>
					</div>
				</li>
			</ul>
		</section>
		
		<section class="user_password_comfirm_button" v-on:click="modify_password()">
			<button v-bind:class="{ active: user_input_toally_valid }">确认修改</button>
		</section>
		
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
				user_name:undefined,
				user_previous_password:undefined,
				user_new_password:undefined,
				user_new_password_repeat:undefined,
				captcha_code:undefined,
				
				alert_text:undefined,
			}
		},
		
		computed:{
			captcha_url(){
				return this.$store.state.acquireData[15].code
			},
			
			user_input_toally_valid(){
				if ( 
				this.user_name&&
				this.user_previous_password&&
				this.user_new_password&&
				this.user_new_password_repeat&&
				this.captcha_code
				){
					return true
				}
				else{
					return false
				}
			}
		},
		
		methods:{
			get_captcha(){
				this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/v1/captchas' , method: 'POST' , which: 15 , renewway: 'set' , appendix: { credentials: 'include'} }) ;
			},
			
			modify_password(){
				if ( this.user_input_toally_valid ){
					this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/v2/changepassword' , method: 'POST' , which: 22 , renewway: 'set' , appendix: {
						credentials: 'include',
						headers : {'content-type' : 'application/json'},
						body: JSON.stringify({
							username: this.user_name,
							oldpassWord: this.user_previous_password,
							newpassword: this.user_new_password,
							confirmpassword : this.user_new_password_repeat,
							captcha_code: this.captcha_code,
						})
						} }).then(()=>{
							if ( this.$store.state.acquireData[22].message ){
								this.alert_text = this.$store.state.acquireData[22].message
							}
							else if  ( this.$store.state.acquireData[22].success ){
								this.alert_text = this.$store.state.acquireData[22].success
								setTimeout(()=>{this.$router.go(-1)},1000)
							}
						}) ;
				}
			}
		}
		
	}
</script>

<style>
	.user_password_header{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 15;
		
		width: 100%;
		height: 4rem;
		
		line-height: 4rem;
		font-size: 1.2rem;
		color: #FFFFFF;
		text-align: center;
		
		background: #3190E8;
	}
	
	.user_password_header span:nth-of-type(1){
		position: absolute;
		left: 1.0rem;
		
		font-size: 2rem;
	}
	
	.user_password_container{
		margin-top: 4rem;
		
		background: #FFFFFF;
	}
	
	.user_password_container>ul>li{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		padding: 1rem 2rem;
		border-bottom: 1px solid #ECECEC;
	}
	
	.user_password_container>ul>li>input{
		width: 100%;
		height: 2rem;
		
		border: none;
		outline: 0;
		
		font-size: 1.25rem;
		
	}
	
	.user_password_comfirm_button{
		height: 4rem;
		margin: 2rem auto;
		width: 28rem;
		border-radius: 6px;
		
		background: #4cd964;
	}
	
	.user_password_comfirm_button>button{
		width: 100%;
		height: 100%;
		border: none;
		
		font-size: 1.5rem;
		color: #FFFFFF;
		
		background: none;
		opacity: 0.6;
		
		transition: all 1s;
	}
	
	.user_password_comfirm_button>button.active{
		opacity: 1;
		transition: all 1s;
	}
</style>
