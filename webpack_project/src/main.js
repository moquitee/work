// 实例化Vue根实例
import Vue from 'vue';

import App from './App.vue'

new Vue({
	el:'#app',
	components:{
		// 组件名: 组件对象
		App
	},
	template: '<App/>'
})
// 挂载App组件