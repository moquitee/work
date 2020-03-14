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
		{},// 序号15 对应 验证码地址
		{},// 序号16 对应 登陆返回用户信息
		{},// 序号17 对应 获取在此用户代理已经登陆的用户信息
		{},// 序号18 对应 上传图片后返回图片信息
		{},// 序号19 对应 上传地址后返回地址信息
		[],// 序号20 对应 获取用户地址信息
		{},// 序号21 对应 删除用户地址信息
		{},// 序号22 对应 更改密码返回信息
		[],// 序号23 对应 可用红包
		{},// 序号24 对应 兑换红包返回信息
		{},// 序号25 对应 过期红包
		{},// 序号26 对应 服务中心的热门问题
		{},// 序号27 对应 加入购物车后返回信息 ->  去结算 按钮
		{},// 序号28 对应 订单备注信息
		{},// 序号29 对应 下单后返回状态信息
	],
	
	user_input_data:'',
	
	user_shop_cart:{},
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
	
	change_shop_cart( state , value ){
		state.user_shop_cart = value 
	},
	
	clear_shop_cart( state , shop_id ){
		if ( state.user_shop_cart[shop_id] ){
			Vue.delete(state.user_shop_cart,shop_id)
		}
	}
};

const actions = {
	fetchData: function ( { commit } , anObject ){ //传入一个对象 { url , method , which , renewway }
		let fetch_promise = undefined;
		if ( anObject.method == 'GET'){
			if ( anObject.appendix ){
				fetch_promise = fetch(anObject.url,{ method: 'GET' , credentials: 'include' , ...anObject.appendix })
			}
			else{
				fetch_promise = fetch(anObject.url,{ method: 'GET' , credentials: 'include' })
			}
		}
		else if ( anObject.method == 'POST' ){
			if ( anObject.appendix ){
				fetch_promise = fetch(anObject.url,{ method: 'POST' , ...anObject.appendix })
			}
			else {
				fetch_promise = fetch(anObject.url,{ method: 'POST'})
			}
		}
		else if ( anObject.method == 'DELETE' ){
			if ( anObject.appendix ){
				fetch_promise = fetch(anObject.url,{ method: 'DELETE' , ...anObject.appendix })
			}
			else {
				fetch_promise = fetch(anObject.url,{ method: 'DELETE'})
			}
		}
		
		return fetch_promise.then((result) => {
			return result.text();
		}).then((result) => {
			commit('getData', { which:anObject.which , data:JSON.parse(result) , renewway:anObject.renewway })
			return JSON.parse(result)
		}) .catch((error) => {
			window.console.log(error);
		})
		
		
	},
};
export default new Vuex.Store({
	state,
	mutations,
	actions,
});