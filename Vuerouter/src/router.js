import Vue from 'vue' 
import VueRouter from 'vue-router'

//引入组件
import home from "./home.vue";
import about from "./about.vue";
import user from "./user.vue";

import phone from "./phone.vue";
import tablet from "./tablet.vue";
import computer from "./computer.vue";

import First from "./first.vue";
import Second from "./second.vue";
import Third from "./third.vue";

import UserSettings from "./usersettings.vue";
import UserEmailsSubscriptions from "./useremailssubscriptions.vue";
import UserProfilePreview from "./userprofilepreview.vue";
import UserProfile from "./userprofile.vue";

import news from "./news.vue";

import pass from "./pass.vue";
import hello from "./hello.vue";
import hello2 from "./hello2.vue";

import buer from "./buer.vue";
import buer1 from "./buer1.vue";
import buer2 from "./buer2.vue";
import buer3 from "./buer3.vue";
import buer4 from "./buer4.vue";

function dynamicPropsFunc (route) {
  return {
	//这个message就是传入的参数
    message: "欢迎您：" + route.params.userName
  }
}

// 告诉vue使用vueRouter
Vue.use(VueRouter); 

const routes = [					//配置路由，这里是个数组
	{								//每一个链接都是一个对象
		path: '/home',				//链接路径
		component: home,			//对应的组件模板
		children:[
			{
				path: "phone",
				component: phone
			},
			{
				path: "tablet",
				component: tablet,
			},
			{
				path: "computer",
				component: computer
			},
			//当进入home时，首先显示phone组件
			{
				path:"",
				component: phone
			},
		]
	},
	{
		path:'/about',
		component: about ,
	},
	//新增user路径,配置了动态的id*/
	{
		path: "/user/:id",
		name: "user",
		component: user
	},
	//重定向
	{
		path:'/',
		redirect:'/home'
	},
	//命名视图，多视图组件
	{
		path: "/multiview",
		// 这里注意多视图compoents，复数
		components: {
			// 没有name属性的,默认是default,不过主页面上已经有一个了，再设置的话，会有两个default视图
			//default: First,
			a : First,
			b : Second,
			c : Third, 
		}
	},
	//嵌套命名视图
	{
		path: '/settings',
		components: { usersettings:UserSettings},
		children: [{
			path: 'emails',
			component: UserEmailsSubscriptions,
			},
			{
				path: 'profile',
				components: {
					default: UserProfile,
					helper: UserProfilePreview
				}
			}]
	},
	//别名
	{
		path:'/news',
		components: { news : news },
		alias:'/another',
	},
	{	//使用冒号：的形式传递参数
		path:'/pass/:id/:userName',
		components: {pass:pass},
	},
	{	//使用query方式或params方式传递参数
		path: '/hello', // path不需要配置参数
		name: 'hello', //params方式一定要有
		components: {pass:hello}, 
	},
	{
		//使用params方式传递参数
		path: '/hello2', // path不需要配置参数
		name: 'hello2', //params方式一定要有
		components: {pass:hello2}, 
	},
	{
		//布尔模式
		path:"/buer/:id/:userName",
		name:"buer",
		component: buer, //由于不是命名视图，会显示在default的视图上
		props: true
	},
	{
		//布尔模式 包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项
		path:"/buer1/:id/:userName",
		name:"buer1",
		components: { buer1:buer1 , buer2:buer2}, //记得左边是名字，右边是引入的组件变量
		props: { buer1:true, buer2:false }
	},
	{	//传入对象
		path:'/buer3',
		name:'buer3',
		component: buer3,
		props:{
			id: 1234,
			userName: "hangge"
		}
	},
	{	//函数模式
		path:'/buer4',
		name:'buer4',
		component:buer4,
		props: dynamicPropsFunc
	}
]

var router = new VueRouter({
	routes
})

export default router;