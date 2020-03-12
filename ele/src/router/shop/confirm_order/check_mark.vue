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
					<li v-for="remarks in remark_info.remarks" v-bind:key="(remark_info.remarks).indexOf(remarks)">
						<span v-for="remark in remarks" v-bind:key="remark">{{ remark }}</span>
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
		
		<button class="remark_confirm">
			确定
		</button>
	</div>
</template>

<script>
	export default{
		created() {
			if ( this.cart_id && this.sig ){
				this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v1/carts/' + this.cart_id + '/remarks?sig=' + this.sig , method: 'GET' , which: 28 , renewway:'set'});
			}
		},
		
		data(){
			return {
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
		}
		
	}
</script>

<style>
	.quick_remark_container{
		padding: 0 1.2rem 2rem ;
		
		background-color: #FFFFFF;
	}
	
	.header_style{
		font-size: 1.3rem;
		color: #333333;
		line-height: 4rem;
	}
</style>
