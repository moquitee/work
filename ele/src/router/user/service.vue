<template>
	<div class="service_page">
		<header class="balance_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>服务中心</h2>
		</header>
		
		<section class="service_connect">
			<div>
				<svg class="service_svg">
					<svg viewBox="0 0 46 46" width="100%" height="100%">
						<path fill="#ff7b52" d="M33.291 37.774c-.25.097-.504.175-.765.233-6.427 1.444-5.954-3.968-6-3.953 10.457-5.053 10.348-13.466 10-16.216-16.15-.041-22.943-7.063-22.943-7.063s-.176 1.733-2.933 4.996c-2.756 3.262-5.236 4.09-5.132 4.113.54 13.9 12.246 14.242 12.246 14.242-.762 4.662-4.357 4.33-4.357 4.33s-6.38.213-11.173-7.446c-.85-1.359-1.02-2.864-1.166-4.579-.217-2.542.14-4.643.312-7.2.271-4.064.96-6.269.96-6.269S7.13 0 21.4 0s17.828 12.508 17.828 12.508l-.035.074c.533.763.984 1.997 1.356 3.36A3.483 3.483 0 0 1 45 19.281v7.257a3.484 3.484 0 0 1-3.325 3.472c-2.009 4.537-6.657 12.185-15.241 12.457C26.023 44.485 24.269 46 22.168 46c-2.407 0-4.357-1.988-4.357-4.44 0-2.453 1.95-4.44 4.357-4.44 1.955 0 3.609 1.311 4.16 3.118 1.447.13 4.044-.094 6.963-2.464zM18.216 27.018s.99 3.08 3.705 3.08 3.807-1.875 3.807-2.906c.467-1.135 1.348-.541 1.482-.071.134.47-.763 4.67-5.24 4.67s-5.205-4.358-5.205-4.358.033-.97.702-.97c.669 0 .749.555.749.555zm10.052-2.332c.963 0 1.743-1.192 1.743-2.664 0-1.471-.78-2.664-1.743-2.664-.963 0-1.743 1.193-1.743 2.664 0 1.472.78 2.664 1.743 2.664zm-12.723 0c.962 0 1.743-1.192 1.743-2.664 0-1.471-.78-2.664-1.743-2.664-.963 0-1.743 1.193-1.743 2.664 0 1.472.78 2.664 1.743 2.664z"></path>
					</svg>
				</svg>
				<p>在线客服</p>
			</div>
			
			<div>
				<svg class="service_svg">
					<svg viewBox="0 0 46 46" id="phone" width="100%" height="100%"><path fill="#6ac20b" d="M15.433 30.568c9.342 9.342 17.708 12.15 18.871 12.316 1.163.167 3.07.542 5.837-2.225 3.24-3.24 3.566-4.94 1.783-6.724-1.783-1.783-6.212-4.48-7.416-5.176-1.206-.696-2.228-.472-3.097.133-.868.605-1.87 1.375-2.798 2.047-.927.671-2.087.955-3.332.167-1.245-.79-3.35-2.27-5.735-4.652-2.384-2.384-3.863-4.49-4.651-5.735-.789-1.245-.505-2.405.167-3.332.671-.928 1.441-1.93 2.046-2.798.605-.869.828-1.89.134-3.097-.696-1.204-3.394-5.633-5.177-7.416-1.783-1.783-3.484-1.457-6.724 1.783-2.766 2.766-2.391 4.674-2.226 5.837.167 1.164 2.976 9.53 12.318 18.872"></path></svg>
				</svg>
				<p>在线客服</p>
			</div>
			
		</section>
		
		<section class="service_question_container">
			<header class="service_question_header">
				热门问题
			</header>
			
			<section>
				<ul v-if="service_questions && valid_caption_keys ">
					<li v-for="caption_key in valid_caption_keys" v-bind:key="caption_key">
						<span>{{ service_questions[caption_key] }}</span>
						<span>&gt;</span>
					</li>
				</ul>
			</section>
		</section>
	</div>
</template>

<script>
	export default{
		created() {
			this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/v3/profile/explain' , method: 'GET' , which: 26 , renewway:'set' }).then((result)=>{
				this.valid_caption_keys = this.find_valid_key(result,'Caption')
			});
		},
		
		computed:{
			service_questions(){
				return this.$store.state.acquireData[26]
			}
		},
		
		data(){
			return {
				valid_caption_keys:undefined,
			}
		},
		
		methods:{
			find_valid_key(obj,key){
				let valid_keys = [];
				let keys = Object.keys(obj);
				for ( let i = 0 ; i < keys.length ; i++ ){
					if ( keys[i].substr((-key.length),key.length) == key ){
						valid_keys.push(keys[i])
					}
				}
				return valid_keys
			},
		},
		
	}
</script>

<style>
	.service_page{
		bottom: auto;
		
		background: #FFFFFF;
	}
	
	.service_connect{
		margin-top: 4rem;
		height: 8rem;
		border-bottom: 1px solid #F5F5F5;
		
		display: flex;
		justify-content: space-between;
	}
	
	.service_connect>div{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		color: #666;
	}
	
	.service_connect>div:first-of-type{
		border-right: 1px solid #F5F5F5;
	}
	
	.service_svg{
		width: 2rem;
		height: 2rem;
		
		margin-bottom: 0.6rem;
	}
	
	.service_question_header{
		padding-left: 1.4rem;
		border-bottom: 1px solid #F5F5F5;
		
		font-size: 1.5rem;
		line-height: 6rem;
	}
	
	.service_question_container>section>ul>li{
		display: flex;
		justify-content: space-between;
		
		padding: 0 1.4rem;
		border-bottom: 1px solid #F5F5F5;
		
		line-height: 4rem;
	}
	
	.service_question_container>section>ul>li>span:first-of-type{
		font-size: 1.2rem;
		color: #666;
	}
	
	.service_question_container>section>ul>li>span:nth-last-of-type(1){
		font-size: 2rem;
		color: rgb(153, 153, 153);
	}
</style>
