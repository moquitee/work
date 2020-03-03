<template>
	<div class="shop_safe" v-if="shop_identification">
		<header class="safe_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h1>食品监督安全公示</h1>
		</header>
		
		<div>
			<section class="safe_section_header">
				食品监督安全公示
			</section>
			
			<section class="shop_status_detail">
				<img src="../../assets/xiaolian.png">
				<section>
					<p>监督检查结果：<span class="shop_status_text">良好</span></p>
					<p>检查日期:</p>
				</section>
			</section>
		</div>
		
		<div>
			<section class="safe_section_header">
				工商登记信息
			</section>
			
				<hgroup>
					<h4>企业名称{{ shop_identification.company_name }}</h4>
					<h4>工商执照注册号{{ shop_identification.licenses_number }}</h4>
					<h4>注册资本{{ shop_identification.registered_number }}</h4>
					<h4>注册地址{{ shop_identification.registered_address }}</h4>
					<h4>属地建管所{{ shop_identification.identificate_agency }}</h4>
					<h4>法定代表人{{ shop_identification.legal_person }}</h4>
					<h4>经营范围{{ shop_identification.licenses_scope }}</h4>
				</hgroup>
		</div>
		
		<div>
			<section class="safe_section_header">
				餐饮许可证
			</section>
			
			<hgroup>
				<h4>营业范围{{ shop_identification.licenses_date }}</h4>
				<h4>许可证有效期{{ shop_identification.operation_period }}</h4>
				<h4>许可证号{{ shop_identification.licenses_number }}</h4>
			</hgroup>
		</div>
	</div>
</template>

<script>
	export default{
		computed:{
			shop_identification(){
				return this.$store.state.acquireData[10].identification
			}
		}
	}
</script>

<style>
	.shop_safe>div{
		margin-bottom: 1rem;
		
		background: #FFFFFF;
	}
	
	.safe_header{
		background: #3190E8;
		color: #FFFFFF;
		
		text-align: center;
		
		line-height: 4rem;
		height: 4rem;
	}
	
	.safe_header>span{
		position: absolute;
		left: 0.5rem;
		
		font-size: 2rem;
	}
	
	.safe_section_header{
		padding: 0.6rem 1rem;
		border-bottom: 0.03rem solid #ECECEC;
		
		font-size: 1.5rem;
	}
	
	.shop_safe hgroup{
		padding: 1rem 1.5rem;
	}
	
	.shop_safe hgroup>h4{
		font-weight: normal;
		
		margin-bottom: 1rem ;
	}
</style>
