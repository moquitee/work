<template>
	<div class="shop_detail_container" v-if="shop_info">
		<header class="shop_detail_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h1>商家详情</h1>
		</header>
		
		<div class="shop_activities_properties_container">
			<h1 class="shop_status_header">
				活动与属性
			</h1>
			
			<section class="shop_activities_properties">
				<ul>
					<li
					v-for="activity in [ ...shop_info.activities , ...shop_info.supports ]"
					v-bind:key="activity.id"
					>
						<span v-bind:style="{ background: '#' + activity.icon_color }">{{ activity.icon_name }}</span>
						<span>{{ activity.description }}(APP专享)</span>
					</li>
				</ul>
			</section>
		</div>
		
		<div class="shop_status_container">
			<h1 class="shop_status_header">
				<span>食品监督安全公示</span>
				<span class="shop_identified_certificates" v-on:click="$router.push('/shop/shop_safe')">企业认证详情&gt;</span>
			</h1>
			
			<section class="shop_status_detail">
				<img src="../../assets/xiaolian.png">
				<section>
					<p>监督检查结果：<span class="shop_status_text">良好</span></p>
					<p>检查日期:</p>
				</section>
			</section>
		</div>
		
		<div class="shop_info_detail">
			<h1 class="shop_status_header">商家信息</h1>
			<div>
				<section>{{ shop_info.name }}</section>
				<section>地址：{{ shop_info.address }}</section>
				<section>营业时间：[{{ shop_info.opening_hours[0] }}]</section>
				<section style="display: flex; justify-content: space-between;" v-on:click="img_switch=1">营业执照<span>&gt;</span></section>
				<section style="display: flex; justify-content: space-between;" v-on:click="img_switch=2">餐饮服务许可证<span>&gt;</span></section>
			</div>
		</div>
		
		<div class="license_container" v-show="img_switch" v-on:click="img_switch=0">
			<img class="bussiness_license" 
			v-bind:src=" '//elm.cangdu.org/img/' + shop_info.license.business_license_image " 
			v-show="img_switch === 1"
			>
			<img class="catering_service_liscense"
			v-bind:src=" '//elm.cangdu.org/img/' + shop_info.license.catering_service_license_image "
			v-show="img_switch === 2"
			>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				img_switch: 0 ,// 0 关闭 ，1 营业执照打开 ， 2 餐饮服务许可证打开
			}
		},
		
		computed:{
			shop_info(){
				return this.$store.state.acquireData[10]
			}
		},
		
	}
</script>

<style>
	.shop_detail_container{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 16;
		
		background: #f5f5f5;
	}
	
	.shop_detail_header{
		position: fixed;
		z-index: 15;
		
		text-align: center;
		
		width: 100%;
		height: 4rem;
		
		background: #3190E8;
		color: #FFFFFF;
	}
	
	.shop_detail_header>span{
		position: absolute;
		top: 0.6rem;
		left: 0.5rem;
		
		font-size: 1.8rem;
	}
	
	.shop_detail_header>h1{
		font-size: 1.5rem;
		
		line-height: 4rem;
	}
	
	.shop_activities_properties_container{
		margin-top: 4rem;
		
		background: #FFFFFF;
	}
	
	.shop_status_header{
		position: relative;
		
		padding: 0.6rem 1rem;
		border-bottom: 0.03rem solid #ECECEC;
		
		font-size: 1.5rem;
		font-weight: normal;
	}
	
	.shop_activities_properties{
		margin-bottom: 1rem;
		padding: 1rem;
	}
	
	.shop_activities_properties ul li{
		font-size: 1.05rem;
		color: #666;
		
		margin-bottom: 1rem;
	}
	
	.shop_activities_properties ul li span:first-child{
		margin-right: 1rem;
		padding: 0.06rem 0.2rem;
		border: 0.025rem;
		border-radius: 8%;
		
		background: rgb(153, 153, 153);
		
		font-size: 0.8rem;
		color: #FFFFFF;
	}
	
	.shop_status_container{
		margin-bottom: 1rem;
		
		background: #FFFFFF;
	}
	
	.shop_status_detail{
		display: flex;
		
		padding: 1rem;
	}
	
	.shop_identified_certificates{
		position: absolute;
		right: 0;
		top: 0.6rem;
		
		font-size: 1.4rem;
		color: #bbb;
	}
	
	.shop_status_detail>img{
		width: 4.5rem;
		height: 4.5rem;
		
		margin-right: 2rem;
	}
	
	.shop_status_detail>section>p{
		margin-top: 0.5rem;
		
		font-size: 1.1rem;
		color: #666;
	}
	
	.shop_info_detail{
		background: #fff;
	}
	
	.shop_info_detail>div>section{
		border-bottom: 0.025rem solid #ECECEC;
		padding: 1.5rem;
		
		font-size: 1.2rem;
		color: #666;
	}
	
	.license_container{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 16;
		
		background: rgba(0,0,0,0.3);
	}
	
	.license_container img{
		position: absolute;
		top: 50%;
		left: 50%;
		
		width: 100%;
		transform: translate(-50%,-50%);
	}
</style>
