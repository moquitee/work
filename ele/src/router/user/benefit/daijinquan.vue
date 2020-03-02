<template>
	<div>
		<header class="daijinquan_help">
			<img src="../../../assets/help.png">
			<span>商家代金券说明</span>
		</header>
		
		<section class="unable_use">
			<img src="../../../assets/not-found.png">
			<p>无法使用代金券</p>
			<p>非用户端或用户端版本过低</p>
			<button>下载或升级客户端</button>
		</section>
	</div>
</template>

<script>
</script>

<style>
	.daijinquan_help{
		padding: 1rem 1.5rem;
		text-align: end;
	}
	
	.daijinquan_help>img{
		width: 1.2rem;
		height: 1.2rem;
		
		vertical-align: middle;
	}
	
	.daijinquan_help>span{
		padding-left: 0.5rem;
		
		color: #3190e8;
		vertical-align: middle;
	}
	
	.unable_use{
		margin-top: 6rem;
		
		text-align: center;
	}
	
	.unable_use>p:first-of-type{
		margin-top: 1.5rem;
		
		font-size: 1.4rem;
		color: #666;
	}
	
	.unable_use>p:nth-of-type(2){
		margin-top: 1rem;
		margin-bottom: 1rem;
		
		color: #999999;
	}
	
	.unable_use>button{
		width: 12rem;
		height: 3rem;
		
		background: #56d176;
		
		font-size: 1.3rem;
		color: #FFFFFF;
		
		border-radius: 0.3rem;
	}
</style>
