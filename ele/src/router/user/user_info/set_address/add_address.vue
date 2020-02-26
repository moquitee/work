<template>
	<div>
		<header class="add_address_header">
			<span>&lt;</span>
			<h2>新增地址</h2>
		</header>
		
		<section class="add_address_form">
			<ul ref="add_address_list">
				<li>
					<input type="text" v-model="name" placeholder="请填写您的姓名" v-on:input="identify_valid_or_not(0)"/>
					<p v-if="!name_valid">请填写您的姓名</p>
				</li>
				
				<li>
					<input type="text" placeholder="小区/写字楼/学校等" v-model="chosen_site" readonly="readonly"/>
				</li>
				
				<li>
					<input type="text" placeholder="请填写详细送餐地址" v-model="address_detail" v-on:input="identify_valid_or_not(2)">
					<p v-if="!address_detail_valid">{{ address_detail_alarm }}</p>
				</li>
				
				<li>
					<input type="number" placeholder="请填写能够联系到您的手机号" v-model="phone_number" v-on:input="identify_valid_or_not(3)"/>
					<p v-if="!phone_number_valid">{{ phone_number_alarm }}</p>
				</li>
				
				<li>
					<input type="number" placeholder="备用联系电话(选填)" v-model="auxiliary_number" v-on:input="identify_valid_or_not(4)"/>
					<p v-if="!auxiliary_number_valid">{{ auxiliary_number_alarm }}</p>
				</li>
			</ul>
		</section>
		
		<section class="add_address_comfirm">
			<button>新增地址</button>
		</section>
		
		<router-view class="add_address_detail_page"></router-view>
	</div>
</template>

<script>
	export default{
		created(){
			this.$root.$on('accept_site',(site_object)=>{
				this.chosen_site = site_object.address_deatil
			})
		},
		
		data(){
			return {
				name: undefined,
				chosen_site: undefined,
				address_detail: undefined,
				phone_number: undefined,
				auxiliary_number: undefined,
				
				name_valid: true,
				address_detail_valid: true,
				phone_number_valid: true,
				auxiliary_number_valid: true,
				
				
				address_detail_alarm: '',
				phone_number_alarm: '',
				auxiliary_number_alarm: '',
			}
		},
		
		methods:{
			identify_valid_or_not(num){
				if ( num == 0 ){
					if ( this.name ){
						this.name_valid = true;
					}
					else{
						this.name_valid = false
					}
				}
				else if ( num == 2 ){
					if ( this.address_detail.length && this.address_detail.length > 2 ){
						this.address_detail_valid = true;
					}
					else if ( this.address_detail.length && 0 < this.address_detail.length <= 2 ){
						this.address_detail_valid = false;
						this.address_detail_alarm = '送餐地址太短了，不能辨识';
					}
					else{
						this.address_detail_valid = false;
						this.address_detail_alarm = '请详细填写送餐地址';
					}
				}
				else if ( num == 3 ){
					if ( !this.phone_number ){
						this.phone_number_alarm = '手机号不能为空';
						this.phone_number_valid = false;
					}
					else if ( !(/^1[3456789]\d{9}$/.test(this.phone_number)) ){
						this.phone_number_alarm = '请输入正确的手机号';
						this.phone_number_valid = false;
					}
					else{
						this.phone_number_valid = true;
					}
				}
				
				else if ( num == 4 ){
					if ( !this.auxiliary_number ){
						this.auxiliary_number_valid = true;
					}
					else if ( !(/^1[3456789]\d{9}$/.test(this.auxiliary_number)) ){
						this.auxiliary_number_alarm = '请输入正确的手机号';
						this.auxiliary_number_valid = false;
					}
					else{
						this.auxiliary_number_valid = true;
					}
				}
			}
		}
	}
</script>

<style>
	.add_address_header{
		position: fixed;
		z-index: 19;
		
		width: 100%;
		height: 4rem;
		
		text-align: center;
		font-size: 1.2rem;
		line-height: 4rem;
		color: #FFFFFF;
		background: #3190E8;
	}
	
	.add_address_header>span{
		position: absolute;
		left: 0.5rem;
		
		font-size: 2rem;
	}
	
	.add_address_form{
		margin-top: 4rem;
	}
	
	.add_address_form>ul{
		padding: 1rem ;
		background: #FFFFFF;
	}
	
	.add_address_form>ul>li{
		margin-bottom: 0.8rem;
	}
	
	.add_address_form>ul>li>input{
		width: 27.2rem;
		height: 3rem;
		border: 1px solid #ddd;
		border-radius: 3px;
		padding-left: 0.8rem;
		
		font-size: 1.2rem;
		
		background: #f2f2f2;
	}
	
	.add_address_form>ul>li>input.invalid{
		border-color: #ea3106;
	}
	
	.add_address_form>ul>li>p{
		margin-top: 0.5rem;
		
		font-size: 0.8rem;
		color: #ea3106;
	}
	
	.add_address_comfirm{
		display: block;
		
		margin: 1.5rem auto;
		border-radius: 6px;
		width: 28rem;
		height: 3.5rem;
		
		background: #4cd964;
	}
	
	.add_address_comfirm>button{
		width: 100%;
		height: 100%;
		border: none;
		
		font-size: 1.2rem;
		font-weight: bold;
		color: #FFFFFF;
		
		background: none;
		opacity: 0.6;
		
		transition: all 1s;
	}
	
	.add_address_comfirm>button.active{
		opacity: 1;
		transition: all 1s;
	}
	
	.add_address_detail_page{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		
		z-index: 30;
		
		background: #f2f2f2;
	}
</style>
