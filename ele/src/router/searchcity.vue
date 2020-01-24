<template>
	<div>
		<div class="header">
			<router-link class="ele" to="/city">&lt;</router-link>
			
			<h1 class="chosencity" v-if="title_city_info">{{ title_city_info.name }}</h1>
			
			<router-link class="login" to="/city">
				<span class="signup">切换城市</span>
			</router-link>
		</div>
		
		<div class="city_input_container">
			<input class="city_input" v-model="user_input_data" placeholder="输入学校、商务楼、地址" required="required" >
			
			<button class="submitcitykeyword" v-on:click="searchkeywordposition(user_input_data)">提交</button>
		</div>
		
		<header class="position_history" v-if="city_search_data.length == 0">位置历史</header>
		
		<ul class="city_search_data_style" v-if="city_search_data.length">
			<li class="indepentcityinfo" 
				v-for="position in city_search_data"
				v-bind:key="position.latitude"
				v-on:click="choose_a_place( position.longitude , position.latitude )"
			>
				<h4>{{ position.name }}</h4>
				<p>{{ position.address }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		created:function(){
			// 根据id，请求对应的城市名称 这里是为了得到标题城市
			this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v1/cities/'+ this.city_id , method: 'GET' , which: 2 , renewway:'set' });
			// 每次进入页面，重置一下user_input_data
			this.user_input_data = '';
		},
		
		computed:{
			city_id(){
				// 帮this.$route.query.id换个名字，它是路由跳转时传进来的参数
				return this.$route.query.id
			},
			
			title_city_info(){
				// 标题城市信息
				return this.$store.state.acquireData[2]
			},
			
			// 注意这里的写法
			user_input_data:{
				get(){
					return this.$store.state.user_input_data
				},
				
				set(cityname){
					this.$store.state.user_input_data = cityname
				},
			},
			
			city_search_data(){
				return this.$store.state.acquireData[3]
			}
		},
		methods:{
			searchkeywordposition:function(keyword){
				this.$store.dispatch('fetchData',{ url:'https://elm.cangdu.org/v1/pois?city_id='+ this.city_id + '&keyword=' + keyword , method: 'GET' , which: 3 , renewway:'set' })
			},
			
			choose_a_place:function( lotude , latude ){
				this.$router.push({ path: '/'});
				this.$cookie.set( 'longitude', lotude , 7 );
				this.$cookie.set( 'latitude' , latude , 7 );
			}
		},
		watch:{
			// 监听输入数据，有变化就调用方法searchkeywordposition()
			user_input_data:function(value){
				this.searchkeywordposition(value);
			},
		}
	}
</script>

<style>
	.chosencity{
		margin: 0;
		line-height: 2rem;
		
		font-size: 2rem;
		text-align: center;
	}
	
	.city_input_container{
		background: #FFFFFF;
		
		width: 30rem;
		height: 8rem;
		padding-top: 4rem;
	}
	
	.city_input{
		position: relative;
		top:1rem;
		left:1.6rem;
		
		width:26rem;
		height: 2rem;
		border: 1px solid #e4e4e4;
		border-radius: 0.2rem;
		padding: 0.4rem;
		
		font-size: 1.4rem;
	}
	
	.submitcitykeyword{
		display: block;
		position: relative;
		top:1.8rem;
		left:1.6rem;
		
		width:27rem;
		height: 2.5rem;
		border: 1px solid #e4e4e4;
		border-radius: 0.2rem;
		padding: 0.4rem;
		
		background: #3190E8;
		color: #FFFFFF;
		font-size: 1.5rem;
	}
	
	.position_history{
		font-size: 0.85rem;
		
		border-top: 2px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		padding: 0.3rem 0 0.3rem 0.8rem;
	}
	
	.city_search_data_style{
		margin:0;
		padding-left: 0;
		border-top: 1px solid #e4e4e4;
		
		list-style: none;
		
		background: #FFFFFF;
	}
	
	.indepentcityinfo{
		padding-top: 1.3rem;
		border-bottom: 1px solid #e4e4e4;
	}
	
	.indepentcityinfo h4{	
		margin: 0 auto;
		width:90%;
		
		font-size: 1.4rem;
		
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.indepentcityinfo p{
		margin: 0.45rem auto 0 auto;
		padding-bottom: 1rem;
		width: 90%;
		
		font-size: 0.7rem;
		color: #999;
		
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
