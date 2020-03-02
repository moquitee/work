<template>
	<div>
		<header class="balance_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>我的积分</h2>
		</header>
		
		<section class="balance_container">
			<section>
				<section class="balance_content_header">
					<span>当前积分</span>
					<section>
						<img src="../../assets/help.png">
						<span>积分说明</span>
					</section>
				</section>
				<section class="balance_content">
					<span>0</span>
					<span>分</span>
				</section>
				
				<button class="withdraw_button red">积分兑换商品</button>
				
			</section>
		</section>
		
		<section>
			<header class="deal_detail_header">
				最近30天积分记录
			</header>
			
			<section class="deal_detail point">
				<img src="../../assets/notFound.png">
				<p>最近30天无积分记录</p>
				<p>快去下单赚取大量积分吧</p>
			</section>
		</section>
		
	</div>
</template>

<script>
</script>

<style>
	.withdraw_button.red{
		background: #fe6d47;
	}
	
	.deal_detail.point>p:nth-of-type(2){
		font-size: 1rem;
		color: #999999 ;
	}
</style>
