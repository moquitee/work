<template>
  <div id="app">
	<div class="header">
		<img src="./assets/searchicon.png" class="searchicon">
		<a class="positionlink" href="#">
			<span class="position">一个很长的地址，要有省略号</span>
		</a>
		<a class="login" href="#">
			<span class="signup">登陆|注册</span>
		</a>
	</div>
	
	<div class="content">
		<div class="specitialty">
			<div class="leftside">
				<a class="linktofood">
					<img src="./assets/chuanxiangcai.jpeg">
					<span>川湘菜</span>
				</a>
				<a class="linktofood">
					<img src="./assets/malatan.jpeg">
					<span>麻辣烫</span>
				</a>
				<a class="linktofood">
					<img src="./assets/baozi.jpeg">
					<span>包子粥店</span>
				</a>
				<a class="linktofood">
					<img src="./assets/dangao.jpeg">
					<span>鲜花蛋糕</span>
				</a>
				<a class="linktofood">
					<img src="./assets/liaoli.jpeg">
					<span>日韩料理</span>
				</a>
				<a class="linktofood">
					<img src="./assets/shucai.jpeg">
					<span>果蔬生鲜</span>
				</a>
				<a class="linktofood">
					<img src="./assets/hanbao.jpeg">
					<span>汉堡薯条</span>
				</a>
				<a class="linktofood">
					<img src="./assets/pizza.jpeg">
					<span>披萨意面</span>
				</a>
			</div>
				<div class="rightside">
				<a class="linktofood">
					<img src="./assets/yinping.jpeg">
					<span>甜品饮品</span>
				</a>
				<a class="linktofood">
					<img src="./assets/chaoshi.jpeg">
					<span>超市便利</span>
				</a>
				<a class="linktofood">
					<img src="./assets/meishi.jpeg">
					<span>美食</span>
				</a>
				<a class="linktofood">
					<img src="./assets/jiancan.jpeg">
					<span>简餐</span>
				</a>
				<a class="linktofood">
					<img src="./assets/xindian.jpeg">
					<span>新店优惠</span>
				</a>
				<a class="linktofood">
					<img src="./assets/zhunshida.jpeg">
					<span>准时达</span>
				</a>
				<a class="linktofood">
					<img src="./assets/zaocan.jpeg">
					<span>预定早餐</span>
				</a>
				<a class="linktofood">
					<img src="./assets/tuhao.jpeg">
					<span>土豪推荐</span>
				</a>
			</div>
		</div>
	</div>
	
	<div class="footer">
		<section class="guide">
			<img id="waimai" src="./assets/waimai1.png">
			<span>外卖</span>
		</section>
		<section class="guide">
			<img id="sousuo" src="./assets/sousuo1.png">
			<span>搜索</span>
		</section>
		<section class="guide">
			<img id="dingdan" src="./assets/dingdan1.png">
			<span>订单</span>
		</section>
		<section class="guide">
			<img id="wode" src="./assets/wode.png">
			<span>我的</span>
		</section>
	</div>
  </div>
</template>

<script>

export default {
	data:{
		
	}
}

</script>

<style>
	body,html,#app{
		width:100%;
		height:100%;
		margin: 0;
	}
	
	.header {
		position:fixed;
		top:0;
		z-index: 998;
		
		background: #3190e8;
		
		margin: 0 auto;
		width: 30rem;
		height: 4rem;
	}
	
	.content {
		margin: 0 auto;
		width: 30rem;
		height: 100%;
		
		padding-top:4.3rem;
	}
	
	.footer{
		position:fixed;
		bottom:0;
		z-index: 999;
		
		margin: 0 auto;
		width: 30rem;
		height: 4rem;
		
		background: #FFF;
		
		box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
	}
	
	.searchicon{
		position: absolute;
		top:1.1rem;
		left:1.5rem;
		
		width:2.0rem;
	}
	
	.positionlink{
		position:absolute;
		top:1.5rem;
		left:7.6rem;
		
		font-size: 1.5rem;
		width:15rem;
	}
	
	.position{
		display: block;
		
		text-align:center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.login{
		position: absolute;
		right: 1.1rem;
		top: 1.8rem;
		
		font-size: 1.2rem;
	}
	
	.guide{
		display: inline-block;
		
		width: 7.5rem;
		height: 4rem;
		text-align: center;
	}
	
	.guide img{
		display: block;
		position: relative;
		
		margin: 1rem auto 0 auto;
		width:1.8rem;
		height: 1.8rem;
	}
	
	.specitialty{
		width: 60rem;
		height: 17rem;
		display: -webkit-box;
		
		overflow: hidden;
	}
	
	.leftside , .rightside{
		width: 30rem;
	}
	
	.linktofood{
		display: inline-block;
		width:7.5rem;
		
		text-align:center;
	}
	
	.linktofood img{
		display: block;
		
		width:4.5rem;
		margin:0.5rem auto;
	}
</style>
