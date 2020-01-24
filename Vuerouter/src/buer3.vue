<template>
	<div>
		<h1>ID: {{ id }}</h1>
		<h1>名字: {{ userName }}</h1>
	</div>
</template>

<script>
	export default {
		props: ['id','userName'],
	}
</script>

<style>
</style>