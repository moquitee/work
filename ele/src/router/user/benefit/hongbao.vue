<template>
	<div>
		<header class="hongbao_header">
			<section>有<span v-if="hongbao_list">{{ hongbao_list.length }}</span><span v-else>0</span>个红包即将到期</section>
			<section>
				<img src="../../../assets/help.png">
				<span>红包说明</span>
			</section>
		</header>
		
		<section class="hongbao_list_container">
			<ul v-if="hongbao_list">
				<li v-for="hongbao in hongbao_list" v-bind:key="hongbao.id">
					<section>
						<section>
							<section>
								<span>¥</span>
								<span>{{ Math.floor(hongbao.amount) }}</span>
								<span>.</span>
								<span>{{ (hongbao.amount*10)%10 }}</span>
							</section>
						
							<p>{{ hongbao.description_map.sum_condition }}</p>
						</section>
						
						<section>
							<p>{{ hongbao.name }}</p>
							<p>{{ hongbao.end_date }}到期</p>
							<p>{{ hongbao.description_map.phone }}</p>
						</section>
					
						<section>
							<span>{{ hongbao.description_map.validity_delta }}</span>
						</section>
						
					</section>
					
					<footer v-if="hongbao.limit_map">
						<p>{{ hongbao.limit_map.restaurant_flavor_ids }}</p>
					</footer>
				</li>
			</ul>
		</section>
		
		<p class="hongbao_history" v-on:click="$router.push({ name: 'hongbao_history' })">查看历史红包 &gt;</p>
		
		<footer class="hongbao_footer">
			<router-link :to="{ name: 'exchange' }">兑换红包</router-link>
			<router-link :to="{ name: 'commend' }">推荐有奖</router-link>
		</footer>
		
		
		<router-view class="hongbao_view"></router-view>
	</div>
</template>

<script>
	export default{
		created() {
			this.$store.dispatch('fetchData',{ url: 'https://elm.cangdu.org/promotion/v2/users/' + this.user_id + '/hongbaos?limit=20&offset=0' , method: 'GET' , which: 23 , renewway:'set' });
		},
		
		computed:{
			user_id(){
				return localStorage.getItem('user_id')
			},
			
			hongbao_list(){
				return this.$store.state.acquireData[23]
			},
		}
	}
</script>

<style>
	.hongbao_header,.hongbao_list_container{
		padding: 0 1.5rem;
	}
	
	.hongbao_header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		margin: 1.5rem 0;
	}
	
	.hongbao_header>section:nth-of-type(1){
		color: #666;
	}
	
	.hongbao_header>section:nth-of-type(1)>span{
		color: #ff5340;
	}
	
	.hongbao_header>section:nth-of-type(2){
		display: flex;
		align-items: center;
		
		color: #3B95E9;
	}
	
	.hongbao_header>section:nth-of-type(2)>img{
		width: 1.2rem;
		height: 1.2rem;
		
		margin-right: 0.5rem;
	}
	
	.hongbao_list_container>ul>li{
		margin-bottom: 1.0rem;
	}
	
	.hongbao_list_container>ul>li>section{
		display: flex;
		justify-content: space-between;
		
		padding: 2rem 0.8rem;
		border-radius: 0.3rem;
		
		background: #FFFFFF url(../../../assets/hongbao_border.png) repeat-x;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(1){
		flex: 1;
		
		margin-top: 0.5rem;
		border-right: 0.025rem solid #ECECEC;
		
		color: #ff5340;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(1)>section>span{
		font-weight: 500;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(1)>section>span:nth-of-type(1){
		font-size: 1.2rem;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(1)>section>span:nth-of-type(2){
		font-size: 2.5rem;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(1)>section>span:nth-of-type(3){
		font-size: 2.0rem;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(1)>section>span:nth-of-type(4){
		font-size: 1.3rem;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(1)>p{
		font-size: 0.8rem;
		color: #999999;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(2){
		margin-left: 1.5rem;
		
		flex: 2;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(2)>p{
		white-space: nowrap;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(2)>p:nth-of-type(1){
		font-size: 1.3rem;
		
		color: #666;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(2)>p:nth-of-type(2){
		margin-top: 0.5rem;
		
		font-size: 0.90rem ;
		color: #999;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(2)>p:nth-of-type(3){
		margin-top: 0.5rem;
		
		font-size: 0.90rem ;
		color: #999;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(3){
		margin-top: 1.5rem;
	}
	
	.hongbao_list_container>ul>li>section>section:nth-of-type(3)>span{
		font-size: 1.5rem;
		color: #ff5340;
	}
	
	.hongbao_list_container>ul>li>footer{
		background: #f9f9f9;
		
		padding: 0.8rem;
		border-bottom-left-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
	}
	
	.hongbao_list_container>ul>li>footer>p{
		text-align: center;
		
		font-size: 0.9rem;
		color: #999;
	}
	
	.hongbao_history{
		margin: 2rem auto;
	}
	
	.hongbao_history{
		text-align: center;
		
		color: #999999;
	}
	
	.hongbao_footer{
		display: flex;
		
		position: fixed;
		bottom: 0;
		z-index: 28;
		
		height: 4rem;
		width: 100%;
		
		background: #FFFFFF;
		
	}
	
	.hongbao_footer>a{
		flex: 1;
		
		text-align: center;
		font-size: 1.3rem;
		line-height: 4rem;
		text-decoration: none;
		
		color: #555555;
	}
	
	.hongbao_footer>a:first-of-type{
		border-right: 0.03rem solid #ECECEC;
	}
	
	
	.hongbao_view{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 30;
		
		background: #F9F9F9;
	}
</style>
