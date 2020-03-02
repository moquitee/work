<template>
	<div>
		<header class="commend_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>推荐有奖</h2>
		</header>
		
		<section class="acitivity_banner">
			<img src="../../../../assets/activity.png">
		</section>
		
		<section class="hongbao_share_ways">
			<ul>
				<li>
					<img src="../../../../assets/wechat.png">
					<p>邀请微信好友</p>
				</li>
				
				<li>
					<img src="../../../../assets/QQ.png">
					<p>邀请QQ好友</p>
				</li>
				
				<li>
					<img src="../../../../assets/QRcode.png">
					<p>面对面邀请</p>
				</li>
			</ul>
		</section>
		
		<section class="hongbao_share_score">
			<div>
				<p>累计收益</p>
				<p><span>0</span><span>元</span></p>
			</div>
			
			<div>
				<p>成功邀请</p>
				<p><span>0</span><span>人</span></p>
			</div>
		</section>
		
		<section class="hongbao_share_history">
			<header>-收益明细-</header>
			<section>
				<img src="../../../../assets/grey_hongbao.png">
				<p>还不赶紧去邀请好友</p>
			</section>
		</section>
	</div>
</template>

<script>
</script>

<style>
	.commend_header{
		position: fixed;
		z-index: 80;
		
		width: 100%;
		height: 4rem;
		
		text-align: center;
		font-size: 1.2rem;
		line-height: 4rem;
		color: #FFFFFF;
		background: #3190E8;
	}
	
	.commend_header>span{
		position: absolute;
		left: 0.5rem;
		
		font-size: 2rem;
	}
	
	.acitivity_banner{
		margin-top: 4rem;
	}
	
	.acitivity_banner>img{
		width: 100%;
		height: 20rem;
	}
	
	.hongbao_share_ways{
		padding: 1.5rem;
		
		background: #FFFFFF;
	}
	
	.hongbao_share_ways>ul{
		display: flex;
		justify-content: space-between;
		
	}
	
	.hongbao_share_ways>ul>li{
		text-align: center;
	}
	
	.hongbao_share_ways>ul>li>img{
		width: 5rem;
		height: 5rem;
	}
	
	.hongbao_share_score{
		margin-top: 2rem;
		
		width: 100%;
		
		display: flex;
		justify-content: space-between;
	}
	
	.hongbao_share_score>div{
		flex: 1;
		
		text-align: center;
	}
	
	.hongbao_share_score>div:first-of-type{
		border-right: 0.05rem solid #ECECEC;
	}
	
	.hongbao_share_score>div>p:nth-of-type(2)>span:first-of-type{
		font-size: 1.5rem;
		font-weight: bold;
	}
	
	.hongbao_share_score>div:first-of-type>p:nth-of-type(2)>span:first-of-type{
		color: #ff5633;
	}
	
	.hongbao_share_score>div:nth-of-type(2)>p:nth-of-type(2)>span:first-of-type{
		color: #666;
	}
	
	.hongbao_share_history{
		margin-top: 1.5rem;
	}
	
	.hongbao_share_history{
		text-align: center;
	}
	
	.hongbao_share_history>header{
		margin-bottom: 2rem;
	}
	
	.hongbao_share_history>section>img{
		width: 2.6rem;
		height: 3.2rem;
	}
	
	.hongbao_share_history>section>p{
		color: #999;
	}
	
</style>
