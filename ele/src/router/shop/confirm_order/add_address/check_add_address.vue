<template>
	<div>
		<header class="balance_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>添加地址</h2>
		</header>
		
		<form class="address_input_form">
			<section>
				<span>联系人</span>
				<section>
					<input type="text" placeholder="你的名字" v-model="name">
					<section>
							<span class="address_sex">
								<svg>
									<svg viewBox="0 0 120 120" width="100%" height="100%"><circle cx="60" cy="60" r="60"></circle><path fill="#FFF" d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"></path></svg>
								</svg>
								<span>先生</span>
							</span>
							
							<span class="address_sex">
								<svg>
									<svg viewBox="0 0 120 120" width="100%" height="100%"><circle cx="60" cy="60" r="60"></circle><path fill="#FFF" d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"></path></svg>
								</svg>
								<span>女士</span>
							</span>
					</section>
				</section>
			</section>
			
			<section>
				<span>联系电话</span>
				<section>
					<section>
						<input type="number" placeholder="你的手机号" v-model="phone">
						<img class="check_add_address_plus" src="../../../../assets/plus_no_border.png" v-on:click="show_phone_bk = show_phone_bk? false:true">
					</section>
					
					<section v-if="show_phone_bk">
						<input type="number" placeholder="备选电话" v-model="phone_bk"/>
					</section>
				</section>
			</section>
			
			<section>
				<span>送餐地址</span>
				<section>
					<section>
						<input type="text" placeholder="小区/写字楼/学校等" v-model="chosen_site" readonly="readonly" v-on:click="$router.push({ name: 'check_add_address_detail'})">
					</section>
					
					<section>
						<input type="text" placeholder="详细地址(如门牌号等)" v-model="address_detail"/>
					</section>
				</section>
			</section>
			
			<section>
				<span>标签</span>
				<section>
					<input type="text" placeholder="无/家/学校/公司"/>
				</section>
			</section>
		</form>
		
		<button class="remark_confirm" v-on:click="add_address_confirm()">
			确定
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
		
		
		<router-view class="check_add_address_detail_page"></router-view>
	</div>
</template>

<script>
	export default{
		created() {
			// 监听从check_add_address_detail 选中的地址
			this.$root.$on('check_accept_site',(obj)=>{
				this.chosen_address_detail = obj;
				this.chosen_site = obj.address_detail
			})
		},
		
		data(){
			return {
				name:'',
				phone:NaN,
				phone_bk:NaN,
				chosen_site:'',
				
				chosen_address_detail:{},
				
				address_detail:'',
				tag:'',
				
				alert_text:'',
				
				show_phone_bk: false, //显示备用电话的按钮，true为显示，false为隐藏
			}
		}
	}
</script>

<style>
	.address_input_form{
		background: #FFFFFF;
		
		padding: 0 1.5rem;
		
		margin-bottom: 1.5rem;
	}
	
	.address_input_form,.address_input_form input{
		font-size: 1.4rem;
		
		line-height: 4.5rem;
		
		outline: none;
	}
	
	.address_input_form>section{
		display: flex;
		
		border-bottom: 0.05rem solid #F5F5F5;
	}
	
	.address_input_form>section>section>section{
		display: flex;
		align-items: center;
	}
	
	.address_input_form>section>span{
		flex: 2;
	}
	
	.address_input_form>section>section{
		flex: 5;
	}
	
	.address_input_form>section>section>section:nth-of-type(2){
		border-top: 0.05rem solid #F5F5F5;
	}
	
	.address_input_form>section>section>section>span{
		display: flex;
		align-items: center;
		
		margin-right: 1.5rem;
	}
	
	.address_input_form>section>section>section>span>svg{
		width: 1.6rem;
		height: 1.6rem;
		
		margin-right: 0.8rem;
		
		fill: #16A086;
	}
	
	.check_add_address_plus{
		width: 1.2rem;
		height: 1.2rem;
	}
	
	
	
	.check_add_address_detail_page{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		
		z-index: 400;
		
		background: #f5f5f5;
	}
</style>
