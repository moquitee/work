<template>
	<div>
		<h1>User Settings</h1>
		<div>
			<li>
				<router-link to='/settings/emails'>UserEmailsSubscriptions</router-link>
			</li>
			<li>
				<router-link to='/settings/profile'>UserProfile</router-link>
			</li>
		</div>
		<router-view></router-view>
		<router-view name="helper"></router-view>
	</div>
</template>
	
<script>
	export default{
		
	}
</script>

<style>
</style>
