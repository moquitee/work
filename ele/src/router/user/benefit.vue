<template>
	<div>
		<header class="benefit_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>我的优惠</h2>
		</header>
		
		<section class="shop_change_page">
			<router-link :to="{ name : 'hongbao' }">红包</router-link>
			<router-link :to="{ name : 'daijinquan'}">商家代金券</router-link>
		</section>
		
		<router-view></router-view>
	</div>
</template>

<script>
</script>

<style>
	.benefit_header{
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
	
	.benefit_header>span{
		position: absolute;
		left: 0.5rem;
		
		font-size: 2rem;
	}
	
	.user_info_page>.shop_change_page{
		margin-top: 4rem;
	}
	
	
</style>
