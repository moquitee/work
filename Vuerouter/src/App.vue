<template>
  <div id="app">
	<header>
	<!-- router-link 定义点击后导航再哪个路径下 -->
		<router-link to="/home" class="nochosen">Home</router-link>
		<router-link to="/about" class="nochosen">About</router-link>
		<!-- 增加两个到user组件的导航，这里使用了不同的to属性 -->
		<router-link to="/user/123">User123</router-link>
		<!-- <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link> 等于上面一条 当使用对象作为路由的时候，to前面要加一个冒号,表示绑定-->
		<router-link to="/user/456">User456</router-link>
		<router-link :to="{ name:'user' , params: { id:'123'} }">根据user的name属性和传入对象id:'123'到达</router-link>
		<!-- router-link 的 to 属性要注意，路由是先进入到home,然后才进入相应的子路由 例如phone -->
		<p>
			<router-link to="/home/phone">手机</router-link>
			<router-link to="/home/tablet">平板</router-link>
			<router-link to="/home/computer">电脑</router-link>
		</p>
		<button @click="$router.push('/about')">通过按钮方法$router.push去about组件</button>
		<button @click="$router.push({ path : '/home' })">通过按钮方法$router.push,传入对象,去home组件</button>
		<button @click="$router.push({ name: 'user', params: { id: '123' }})">传入对象,去user的子组件123,命名的路由</button>
		<button @click="$router.push({ path: 'user', query: { id: '456' }})">传入对象,去user的子组件456,带查询参数，变成 /user?id=456</button>
		<br>
		<button @click="$router.replace({ path: '/about'})">用$router.replace(),去about组件,但不会留下history，后退不了,其他与push一样</button>
		<br>
		<p>用router.go() 分别传入1,-1,3；前提是在浏览器中有history</p>
		<button @click="$router.go(1)">前进1步</button>
		<button @click="$router.go(-1)">后退1步</button>
		<button @click="$router.go(3)">前进3步</button>
	</header>
	<!-- 对应的组件内容渲染到router-view中 -->
	<router-view></router-view>
	<hr/>
	
	<br>
	<router-link to="/multiview">去multiview组件</router-link>
	<router-view class="view one" name="a"></router-view>
	<router-view class="view two" name="b"></router-view>
	<router-view class="view three" name="c"></router-view>
	
	<hr/>
	<router-link to="/settings">去usersettings组件</router-link>
	<router-view class="usersettings" name="usersettings"></router-view>
	<hr/>
	<router-link to="/another">去another但它会匹配到news</router-link>
	<router-view name="news"></router-view>
	<hr/>
	<router-link to='/pass/1108/mike'>去id为1108，userName为mike的pass页面 </router-link>
	<router-link to='/pass/1108/mike'>这个使用$router.push()方法</router-link>
	<br>
	<router-link :to="{ path:'/hello' , query:{ id:123 , userName:'kyle' }}">跳转到hello,用query传入两个参数 </router-link>
	<!-- 用params方式传递参数，只能用name引入路由，而不能用path -->
	<router-link :to="{name:'hello2' , params:{ id:789 , userName:'stan' }}"> 跳到hello2</router-link>
	<router-view name="pass"></router-view>
	<hr/>
	<p>上面如果用params或query传入参数，需要新建另一个文件来，或者说是用不同的代码来获取参数，不太方便</p>
	<router-link to="/buer/000/carment">去buer</router-link>
	<router-link to="/buer1/111/keney">去buer1</router-link>
	<router-link to="/buer1/222/butters">去buer1</router-link>
	<router-link to="/buer3">去buer3</router-link>
	<router-link :to="{path:'/buer4' , params:{ id:123,userName:'hand'}}">去buer4</router-link>
	<router-view name="buer1"></router-view>
	<router-view name="buer2"></router-view>
	</div>
</template>

<script>

export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*组件未被选中时 */
a.nochosen {
	background:burlywood;
}

/* 组件被选中时，添加class: router-link-active */
a.router-link-active { 
	background:#42B983;
}
</style>
