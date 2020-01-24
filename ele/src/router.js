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
import shop_detail from './router/shop/shop_detail.vue'
import food_detail from './router/shop/food_detail.vue'

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
		path:'/shop',
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
			}
		]
	},
	
];

export default new VueRouter({
	routes,
});