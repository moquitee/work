<template>
	<div>
		<div class="header">
			<section class="ele" @click="$router.go(-1)">ele.me</section>
			
			<router-link class="login" to="/login">
				<span class="signup">登陆|注册</span>
			</router-link>
		</div>
		
		<div class="citynavigation">
			<div class="currentcity">
				<span>当前定位城市</span>
				<span>定位城市</span>
			</div>
		</div>
		
		<div class="popularcitycontainer">
			<h4>热门城市</h4>
			<ul class="popularcity" v-if="popularcities.length">
				<li v-for="city in popularcities"
				v-bind:key="city['id']"
				v-on:click="chooseacity_by_onclick(city['id'])"
				>{{ city['name'] }}</li>
			</ul>
			<div style="clear:both"></div>
		</div>
		
		<div class="cityletter">
			
			<ul class="cityletter_classify" v-if="groupcities">
				<li class='citygroupscontainer' 
					v-for="letter in Object.keys(groupcities).sort()"
					v-bind:key="letter"
				>
				
					<h4>{{ letter }}<span> 按字母排序</span></h4>
					<ul class="citygroups" v-on:click="chooseacity_by_cityid($event)">
						<li v-for="city in groupcities[letter]"
							v-bind:cityid="city.id"
							v-bind:key="city.id"
						>{{ city.name }}</li>
					</ul>
					
				</li>
			</ul>
		
		</div>
		
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	
	export default{
		created:function(){		
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v1/cities?type=hot' , method: 'GET' , which: 0 , renewway:'set' })
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v1/cities?type=group' , method: 'GET' , which: 1 , renewway:'set' })
		},
		
		computed:{
			...mapState({
				popularcities(state){
					return state.acquireData[0]
				},
				
				groupcities(state){
					return state.acquireData[1]
				}
			})
		},
		
		methods:{
			chooseacity_by_cityid(event){
				this.$router.push({ path: '/searchcity', query: { id: event.target.getAttribute('cityid') }})
			},
			
			chooseacity_by_onclick(number){
				this.$router.push({ path: '/searchcity', query: { id: number }})
			}
		}
	}

</script>

<style>
	.ele{
		position: relative;
		top:1.4rem;
		left:1rem;
		
		text-decoration: none;
		font-size: 1.4rem;
		color: #FFFFFF;
	}
	
	.citynavigation{
		padding-top: 5.4rem;
		height: 2.5rem;
		border-bottom: 2px solid #e4e4e4;
		
		background: #FFFFFF;
		
	}
	
	.currentcity{
		display: flex;
		justify-content: space-between;
		line-height: 1.2rem;
		
		padding: 0 1rem ;
		
		font-size: 1.3rem;
	}
	
	.popularcitycontainer{
		height: 8.6rem;
		margin: 0.8rem 0;
		border-top:2px solid #e4e4e4;
		border-bottom:2px solid #e4e4e4;
		
		background: #FFFFFF
	}
	
	.popularcitycontainer h4{
		height:2.45rem; 
		margin: 0;
		padding-left: 0.8rem;
		line-height: 2.45rem;
	}
	
	.popularcity{
		list-style: none;
		font:1.3rem/1.75rem Microsoft YaHei;
		color: #3190e8;
		
		box-sizing: border-box;
		padding: 0;
		height: 6rem;
		margin: 0;
	}
	
	.popularcity li{
		width: 7.45rem;
		height:3rem;
		margin: 0;
		border-top: 0.025rem solid #e4e4e4;
		border-right: 0.015rem solid #e4e4e4;
		
		line-height: 3rem;
		float: left;
		text-align: center;
	}
	
	/* nth-of-type(4n)是第四个li元素*/
	.popularcity li:nth-of-type(4n){
		border-right: none;
	}
	
	.cityletter ul li{
		list-style: none;
	}
	
	.cityletter_classify{
		padding: 0;
		margin: 0;
	}
	
	.citygroupscontainer{
		border-top: 2px solid #e4e4e4;
		
		background: #FFFFFF;
	}
	
	.citygroupscontainer h4{
		height:2.45rem; 
		margin: 0;
		padding-left: 0.8rem;
		line-height: 2.45rem;
		border-bottom: 0.025rem solid #e4e4e4;
	}
	
	.citygroups{
		width: 30rem;
		padding: 0;
		margin-bottom: 0.8rem;
		
		font:1.3rem/1.75rem Microsoft YaHei;
		color: #3190e8;
		
		box-sizing: border-box;
	}
	
	.citygroups li{
		line-height: 3rem;
		float: left;
		text-align: center;
		
		width: 7.45rem;
		height:3rem;
		border-bottom: 0.025rem solid #e4e4e4;
		border-right: 0.025rem solid #e4e4e4;
		
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	/* nth-of-type(4n)是第四个li元素*/
	.citygroups li:nth-of-type(4n){
		border-right: none;
	}
	
	.citygroups:after{
		content:'';
		display:block;
		clear:both;
	}
</style>
