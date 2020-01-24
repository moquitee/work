<template>
	<div>
		<h1> home </h1>
		<p> {{ msg }}</p>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: '我是home组件'
			}
		}
	}
</script>

<style>
</style>
