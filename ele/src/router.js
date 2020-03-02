import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './router/#.vue';
import city from './router/city.vue';
import searchcity from './router/searchcity.vue';
import search from './router/search.vue';
import shop_catagory from './router/shop_catagory.vue';
import shop from './router/shop/shop.vue';
import shop_menu from './router/shop/shop_menu.vue';
import shop_rate from './router/shop/shop_rate.vue';
import shop_detail from './router/shop/shop_detail.vue';
import food_detail from './router/shop/food_detail.vue';
import shop_safe from './router/shop/shop_safe.vue';
import user from './router/user/user.vue';
import user_info from './router/user/user_info.vue';
import login from './router/login.vue';
import set_username from './router/user/user_info/set_username.vue';
import set_address from './router/user/user_info/set_address.vue';
import add_address from './router/user/user_info/set_address/add_address.vue'
import add_address_detail from './router/user/user_info/set_address/add_address_detail.vue'
import user_password from './router/user/user_info/user_password.vue'
import balance from './router/user/balance.vue'
import benefit from './router/user/benefit.vue'
import hongbao from './router/user/benefit/hongbao.vue'
import daijinquan from './router/user/benefit/daijinquan.vue'
import hongbao_history from './router/user/benefit/hongbao/hongbao_history.vue'
import exchange from './router/user/benefit/hongbao/exchange.vue'
import commend from './router/user/benefit/hongbao/commend.vue'
import point from './router/user/point.vue'
import service from './router/user/service.vue'

Vue.use(VueRouter);

const routes = [
	{
		name:'home',
		path:'/',
		component:home,
	},
	{
		name:'city',
		path:'/city',
		component:city,
	},
	{
		name:'searchcity',
		path:'/searchcity',
		component:searchcity,
	},
	{
		name:'search',
		path:'/search',
		component:search,
	},
	{
		name:'shop_catagory',
		path:'/shop_catagory',
		component:shop_catagory,
	},
	{
		name:'shop',
		path:'/shop/:shop_id',
		component:shop,
		children:[
			{
				name:'shop_menu',
				path:'menu',
				components: { shop_menu_or_rate:shop_menu},
			},
			{
				name:'shop_rate',
				path:'rate',
				components: { shop_menu_or_rate:shop_rate},
			},
			{
				name:'shop_detail',
				path:'shop_detail',
				components: { shop_menu_or_rate:shop_detail} ,
			},
			{
				name:'food_detail',
				path:'food_detail',
				components: { shop_menu_or_rate:food_detail} ,
			},
			{
				name:'shop_safe',
				path:'shop_safe',
				components: { shop_menu_or_rate:shop_safe },
			}
		]
	},
	{
		name:'user',
		path:'/user',
		component: user,
		children:[
			{
				name:'user_info',
				path:'user_info',
				component:user_info,
				children:[
					{
						name:'set_username',
						path:'set_username',
						component:set_username,
					},
					
					{
						name:'set_address',
						path:'set_address',
						component:set_address,
						children:[
							{
								name:'add_address',
								path:'add_address',
								component:add_address,
								children:[
									{
										name:'add_address_detail',
										path:'add_address_detail',
										component:add_address_detail,
									}
								]
							}
						]
					},
					
					{
						name:'user_password',
						path:'user_password',
						component:user_password,
					}
				]
			},
			
			{
				name:'balance',
				path:'balance',
				component: balance,
			},
			
			{
				name:'benefit',
				path:'benefit',
				component:benefit,
				redirect: { name: 'hongbao' },
				children:[
					{
						name:'hongbao',
						path:'hongbao',
						component:hongbao,
						children:[
							{
								name:'hongbao_history',
								path:'hongbao_history',
								component:hongbao_history,
							},
							{
								name:'exchange',
								path:'exchange',
								component:exchange,
							},
							{
								name:'commend',
								path:'commend',
								component:commend,
							}
						]
					},
					{
						name:'daijinquan',
						path:'daijinquan',
						component:daijinquan,
					}
				]
			},
			{
				name:'point',
				path:'point',
				component:point,
			},
			{
				name:'service',
				path:'service',
				component:service,
			}
		]
	},
	{
		name:'login',
		path:'/login',
		component: login,
	}
];

export default new VueRouter({
	routes,
});