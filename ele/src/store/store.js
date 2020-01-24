import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	acquireData:[
		[],// 序号0 对应 热门城市
		{},// 序号1 对应 所有城市
		{},// 序号2 对应 所选城市信息
		[],// 序号3 对应 搜索地址信息
		[],// 序号4 对应 食品分类列表
		[],// 序号5 对应 获取商铺列表
		[],// 序号6 对应 搜索餐馆列表
		[],// 序号7 对应 所有商铺分类列表
		[],// 序号8 对应 配送方式
		[],// 序号9 对应 商家属性活动列表
		{},// 序号10 对应 餐馆详情
		{ category_list: [] },// 序号11 对应 店铺食品种类 初始化一下
		{},// 序号12 对应 商店评价分数
		[],// 序号13 对应 商店评价分类
		[],// 序号14 对应 商店评价信息
	],
	
	user_input_data:'',
};

const mutations = {
	getData: function ( state , anObject ){ //传入一个对象 { which , data , renewway }
		if ( anObject.renewway == 'set'){
			Vue.set(state.acquireData,anObject.which,anObject.data);
		}
		else if ( anObject.renewway == 'push' ){
			// 将两个数组合并成一个 a.push.apply(a,b) 省内存的方法
			state.acquireData[anObject.which].push.apply(state.acquireData[anObject.which],anObject.data)
		}
		window.console.log(state.acquireData[ anObject.which ])
	},
};

const actions = {
	fetchData: function ( { commit } , anObject ){ //传入一个对象 { url , method , which , renewway }
		fetch(anObject.url,{
			method: anObject.method ,
		}).then((result) => {
			return result.text();
		}).then((result) => {
			commit('getData', { which:anObject.which , data:JSON.parse(result) , renewway:anObject.renewway })
		}) .catch((error) => {
			window.console.log(error);
			this.dispatch('fetchData', anObject );
		})
	},
};
export default new Vuex.Store({
	state,
	mutations,
	actions,
});