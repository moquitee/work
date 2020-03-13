<template>
	<div>
		<header class="balance_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>订单备注</h2>
		</header>
		<section class="quick_remark_container" v-if="remark_info">
			<header class="header_style">
				快速备注
			</header>
			
			<section>
				<ul>
					<li 
					v-for="remarks in remark_info.remarks" 
					v-bind:key="(remark_info.remarks).indexOf(remarks)"
					>
						<span v-for="remark in remarks" v-bind:key="remark"
						v-on:click="choose_remark( (remark_info.remarks).indexOf(remarks) , remark )"
						v-bind:class="{ chosen : (quick_remarks_arr[(remark_info.remarks).indexOf(remarks)]) && (quick_remarks_arr[(remark_info.remarks).indexOf(remarks)]) == remark }"
						>{{ remark }}</span>
					</li>
				</ul>
			</section>
		</section>
		
		<section class="quick_remark_container">
			<header class="header_style">
				其他备注
			</header>
			
			<section>
				<textarea class="remark_text" placeholder="请输入备注内容(可不填)" v-model="remark_text"></textarea>
			</section>
		</section>
		
		<button class="remark_confirm" v-on:click="remarks_confirm()">
			确定
		</button>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default{
		created() {
			if ( this.cart_id && this.sig ){
				this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v1/carts/' + this.cart_id + '/remarks?sig=' + this.sig , method: 'GET' , which: 28 , renewway:'set'}).then((result)=>{
					if ( result.remarks ){
						let arr = [];
						for ( let i = 0 ; i < result.remarks.length ; i++ ){
							arr.push([])
						}
						this.quick_remarks_arr = arr
					}
				});
			}
		},
		
		data(){
			return {
				quick_remarks_arr:[],
				
				remark_text:'',
			}
		},
		
		computed:{
			cart_id(){
				if ( this.$store.state.acquireData[27]){
					return this.$store.state.acquireData[27].id
				}
				return NaN
			},
			
			sig(){
				if ( this.$store.state.acquireData[27]){
					return this.$store.state.acquireData[27].sig
				}
				return NaN
			},
			
			remark_info(){
				return this.$store.state.acquireData[28]
			},
		},
		
		methods:{
			choose_remark( index , name ){
				if ( this.quick_remarks_arr[index].length ){
					if ( this.quick_remarks_arr[index][0] == name ){
						Vue.delete(this.quick_remarks_arr[index],0)
					}
					else{
						Vue.set(this.quick_remarks_arr[index],0,name)
					}
				}
				else {
					(this.quick_remarks_arr[index]).push(name)
				}
			},
			
			remarks_confirm(){
				let str = '';
				if ( this.quick_remarks_arr.length ){
					for ( let i in this.quick_remarks_arr ){
						for ( let j in this.quick_remarks_arr[i] ){
							if ( this.quick_remarks_arr[i][j] ){
								str += ( this.quick_remarks_arr[i][j] + ',')
							}
						}
					}
				}
				str += this.remark_text;
				
				//去掉字符串后面的逗号
				if ( str.charAt(str.length - 1) == ',' ){
					str = (str.substr(0,str.length-1))
				}
				
				this.$root.$emit('accpet_check_remark',str);
				this.$router.replace({ name: 'confirm_order' })
			}
		}
		
	}
</script>

<style>
	.quick_remark_container{
		padding: 0 1.2rem 1rem ;
		
		background-color: #FFFFFF;
	}
	
	.header_style{
		font-size: 1.3rem;
		color: #333333;
		line-height: 4rem;
		
		margin-bottom: 1rem;
	}
	
	.quick_remark_container ul{
		display: flex;
		flex-wrap: wrap;
	}
	
	.quick_remark_container ul>li{
		margin-right: 2rem;
		margin-bottom: 2.2rem;
	}
	
	.quick_remark_container ul>li>span{
		border-top: 1px solid #3190E8 ;
		border-bottom: 1px solid #3190E8;
		border-right: 1px solid #3190E8;
		
		padding: 0.6rem 1.2rem;
	}
	
	.quick_remark_container ul>li>span:first-of-type{
		border-left: 1px solid #3190E8;
		border-top-left-radius: 0.4rem;
		border-bottom-left-radius: 0.4rem;
	}
	
	.quick_remark_container ul>li>span:last-of-type{
		border-top-right-radius: 0.4rem;
		border-bottom-right-radius: 0.4rem;
	}
	
	.quick_remark_container ul>li>span.chosen{
		background: #3190E8;
		color: #FFFFFF;
	}
	
	.remark_text{
		width: 90%;
		background-color: #f9f9f9;
		min-height: 9rem;
		
		border: 0.05rem solid #eee;
		border-radius: 0.4rem;
		
		padding: 4.5%;
		
		outline: none;
		
		font-size: 1.4rem;
	}
	
	.remark_confirm{
		display: block;
		margin: 0 auto;
		
		width: 28rem;
		background-color: #4cd964;
		font-size: 1.4rem;
		line-height: 3rem;
		color: #fff;
		border-radius: 0.4rem;
	}
</style>
