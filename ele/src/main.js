import Vue from 'vue';
import Vuex from 'vuex';
import Vuerouter from 'vue-router';
import ElementUi from 'element-ui';
import Swiper from 'vue-awesome-swiper'

import store from './store/store';
import router from './router';

import App from './App.vue';

import cookie from './global/cookie.js';
import shop from './shop_js/shop.js'

//把cookie.js挂接到vue原型上
Vue.prototype.$cookie = cookie;
Vue.prototype.$shop = shop;

Vue.use([ Vuex , Vuerouter , ElementUi , Swiper ]);

Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')

var fontSizeAuto = function (){
	var viewportWidth = document.documentElement.clientWidth;
	document.documentElement.style.fontSize = viewportWidth/30 +'px';
}
fontSizeAuto();
window.onresize = fontSizeAuto;

/*
var startx,starty,endx,endy,nx,ny,angle;

function touchs(event){
	event.preventDefault();
	
	if(event.type=="touchstart"){
		
		window.console.log('开始');
		
		var touch = event.touches[0];
		
		startx = Math.floor(touch.pageX);
		
		starty = Math.floor(touch.pageY);
		
		
	}else if (event.type=="touchmove"){
		
		window.console.log('滑动中');
		
		// let touch = event.touches[0];
		//movex = Math.floor(touch.pageX);
		//movey = Math.floor(touch.pageY); 
		
	}else if(event.type == "touchend" || event.type == "touchcancel"){
		
		endx = Math.floor(event.changedTouches[0].pageX);
		endy = Math.floor(event.changedTouches[0].pageY);
		window.console.log("结束");
		
		nx = endx - startx;
		ny = endy - starty;
		
		angle = Math.atan2(ny,nx) * 180 / Math.PI;
		
		if(Math.abs(nx)<=1 || Math.abs(ny)<=1){
			window.console.log('滑动距离太小');
			return false;
		}
		
		//通过滑动的角度判断触摸的方向
		if(angle<45 && angle>=-45){
			alert('右滑动');
			return false;
		}else if(angle<135 && angle>=45){
			alert('下滑动');
			return false;
		}else if((angle<=180 && angle>=135) || (angle>=-180 && angle<-135 )){
			alert('左滑动');
			return false;
		}else if(angle<=-45 && angle >=-135){
			alert('上滑动');
			return false;
		}
	}
}
	

var specialty = document.getElementsByClassName('specialty')[0];

specialty.addEventListener('touchstart',touchs,false);
specialty.addEventListener('touchmove',touchs,false);
specialty.addEventListener('touchend',touchs,false);
*/