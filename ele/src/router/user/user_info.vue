<template>
	<div v-if="user_info">
		<header class="user_info_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>账户信息</h2>
		</header>
		
		<div class="user_info_first">
			<section class="user_info_avatar_container">
				<span>头像</span>
				<section>
					<img v-bind:src="'//elm.cangdu.org/img/' + user_info.avatar" ref="user_info_avatar">
					<span>&gt;</span>
				</section>
				<input class="user_info_avatar_input" type="file" accept="image/jpg,image/image/jpeg,img/png" v-on:change="post_avatar()" ref="user_posted_avatar">
			</section>
			
			<section v-on:click="$router.push({ name: 'set_username' })">
				<span>用户名</span>
				<section>
					<span>{{ user_info.username }}</span>
					<span class="user_info_button">&gt;</span>
				</section>
			</section>
			
			<section v-on:click="$router.push({ name: 'set_address' })">
				<span>收货地址</span>
				<span class="user_info_button">&gt;</span>
			</section>
		</div>
		
		<section class="user_info_bind_phone_header">
			账号绑定
		</section>
		
		<section class="user_info_bind_phone">
			<section>
				<img src="../../assets/phone.jpg">
				<span>手机</span>
			</section>
			
			<span class="user_info_button">&gt;</span>
		</section>
		
		<section class="user_info_bind_phone_header">
			安全设置
		</section>
		
		<section class="user_info_bind_phone" v-on:click="$router.push({ name : 'user_password' })">
			<span>登录密码</span>
			<section>
				<span>修改</span>
				<span class="user_info_button">&gt;</span>
			</section>
		</section>
		
		<div class="user_info_log_out">
			退出登录
		</div>
		
		<router-view class="user_info_set_page"></router-view>
	</div>
</template>

<script>
	export default{
		created() {
			this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/v1/user' , method: 'GET' , which: 17 , renewway:'set' });
		},
		
		destroyed(){
			this.$store.state.acquireData[18] = {}
		},
		
		computed:{
			user_info(){
				if ( this.$store.state.acquireData[17].username ){
					return this.$store.state.acquireData[17]
				}
				else {
					return false
				}
			},
			
			user_id(){
				if ( this.user_info ){
					return this.user_info.user_id
				}
				else{
					return undefined
				}
			},
			
			user_avatar_path(){
				if ( this.$store.state.acquireData[18] ){
					return this.$store.state.acquireData[18].image_path
				}
				else{
					return undefined
				}
			}
			
		},
		
		methods:{
			post_avatar(){
				let formData = new FormData();
				let file = this.$refs.user_posted_avatar.files[0];
				formData.append('file',file)
				this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/eus/v1/users/' + this.user_id + '/avatar' , method: 'POST' , which: 18 , renewway:'set' , appendix: {
					mode: 'cors',
					body: formData,
					credentials: 'include',
				}}).then(()=>{
					this.$refs.user_info_avatar.src = '//elm.cangdu.org/img/' + this.user_avatar_path
				}).catch((err)=>{
					window.console.log(err)
				});
			}
		}
	}
</script>

<style>
	.user_info_header{
		position: fixed;
		z-index: 17;
		
		width: 100%;
		height: 4rem;
		
		text-align: center;
		font-size: 1.2rem;
		line-height: 4rem;
		color: #FFFFFF;
		background: #3190E8;
	}
	
	.user_info_header>span{
		position: absolute;
		left: 0.5rem;
		
		font-size: 2rem;
	}
	
	.user_info_first{
		padding-top: 4rem;
		
		background: #FFFFFF;
	}
	
	.user_info_first>section{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1.15rem;
		
		padding: 1rem;
		border-bottom: 0.025rem solid #ECECEC;
	}
	
	.user_info_avatar_container{
		position: relative;
	}
	
	.user_info_avatar_container img{
		width: 4rem;
		height: 4rem;
		margin-right: 0.5rem;
		
		border-radius: 50%;
	}
	
	.user_info_avatar_container>section>span{
		position: relative;
		top: -1.3rem;
		
		color: rgb(216, 216, 216);
		font-size: 1.8rem;
	}
	
	.user_info_first>section:nth-of-type(2)>section>span:nth-of-type(1){
		font-size: 1.15rem;
		font-weight: bold;
		color: #999;
		
		margin-right: 0.5rem;
	}
	
	.user_info_first>section:nth-of-type(2)>section>span:nth-of-type(2){
		position: relative;
		top: 0.2rem;
		
		font-size: 1.8rem;
		color: rgb(216, 216, 216);
	}
	
	.user_info_bind_phone_header{
		padding: 1rem;
		color: #666;
	}
	
	.user_info_bind_phone{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		padding: 1rem;
		background: #FFFFFF;
		border-top: 0.025rem solid #ECECEC;
		border-bottom: 0.025rem solid #ECECEC;
	}
	
	.user_info_bind_phone>section{
		font-size: 1.15rem;
		
		align-items: center;
	}
	
	.user_info_bind_phone>section>*:first-of-type{
		margin-right: 1rem;
	}
	
	.user_info_button{
		color: rgb(216, 216, 216);
		font-size: 1.8rem;
	}
	
	.user_info_log_out{
		margin: 3rem auto;
		border-radius: 0.3rem;
		
		width: 90%;
		height: 3rem;
		
		background: #d8584a;
		
		font-size: 1.2rem;
		color: #FFFFFF;
		text-align: center;
		line-height: 3rem;
	}
	
	.user_info_avatar_input{
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		
		width: 100%;
		height: 100%;
		opacity: 0;
		border: none;
		
	}
	
	.user_info_set_page{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		
		z-index: 17;
		
		background: #f2f2f2;
	}
</style>
