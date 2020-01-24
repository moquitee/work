<template>
	<div>
		<!-- 因为buer2的props为false,所以只能按原来的方法获取参数 -->
		<p>视图2</p>
		<h1>ID: {{ $route.params.id }}</h1>
		<h1>名字: {{ $route.params.userName }}</h1>
	</div>
</template>

<script>
</script>

<style>
</style>
