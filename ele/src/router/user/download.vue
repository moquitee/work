<template>
	<div>
		<header class="balance_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>下载</h2>
		</header>
		
		<section class="download_container">
			<img src="../../assets/elm_logo.jpg">
			<p>下载饿了么APP</p>
			<button>下载</button>
		</section>
	</div>
</template>

<script>
</script>

<style>
	.download_container{
		margin-top: 6.5rem;
		
		text-align: center;
	}
	
	.download_container>img{
		border-radius: 2rem;
	}
	
	.download_container>p{
		font-size: 1.6rem;
		color: #666666;
		
		margin-bottom: 2rem;
	}
	
	.download_container>button{
		width: 28.5rem;
		margin: 0 auto;
		height: 3.5rem;
		
		background-color: #4cd964;
		border-radius: 0.4rem;
		
		font-size: 1.4rem;
		color: #FFFFFF;
	}
</style>
