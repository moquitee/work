<template>
	<div>
		<header class="balance_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>我的余额</h2>
		</header>
		
		<section class="balance_container">
			<section>
				<section class="balance_content_header">
					<span>当前余额</span>
					<section>
						<img src="../../assets/help.png">
						<span>余额说明</span>
					</section>
				</section>
				<section class="balance_content">
					<span>0.00</span>
					<span>元</span>
				</section>
				
				<button class="withdraw_button">提现</button>
				
			</section>
		</section>
		
		<section>
			<header class="deal_detail_header">
				交易明细
			</header>
			
			<section class="deal_detail">
				<img src="../../assets/notFound.png">
				<p>暂无明细记录</p>
			</section>
		</section>
	</div>
</template>

<script>
</script>

<style>
	.balance_header{
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
	
	.balance_header>span{
		position: absolute;
		left: 0.5rem;
		
		font-size: 2rem;
	}
	
	.balance_container{
		margin-top: 4rem;
		padding: 1rem;
		
		background: #3190E8;
	}
	
	.balance_container>section{
		padding: 0.6rem;
		
		background: #FFFFFF;
		border-radius: 0.3rem;
	}
	
	.balance_content_header{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.balance_content_header>span{
		font-size: 1.1rem;
		color: #666;
	}
	
	.balance_content_header>section{
		display: flex;
		align-items: center;
	}
	
	.balance_content_header>section>img{
		width: 1.2rem;
		height: 1.2rem;
		margin-right: 0.4rem;
	}
	
	.balance_content_header>section>span{
		color: #3190e8;
	}
	
	.balance_content>span:first-of-type{
		font-size: 3.6rem;
	}
	
	.balance_content>span:nth-of-type(2){
		margin-left: 0.5rem;
		
		font-size: 1.4rem;
	}
	
	.withdraw_button{
		display: block;
		
		width: 26rem;
		height: 4rem;
		margin: 1.5rem auto 0 auto;
		border: none;
		border-radius: 0.3rem;
		
		background-color: #CCCCCC;
		
		font-size: 1.5rem;
		color: #FFFFFF;
	}
	
	.deal_detail_header{
		font-size: 1.2rem;
		color: #999;
		line-height: 4rem;
		padding-left: 1rem;
	}
	
	.deal_detail{
		text-align: center;
	}
	
	.deal_detail>p{
		font-size: 1.4rem;
		color: #666666;
		margin-top: 1rem;
	}
</style>
