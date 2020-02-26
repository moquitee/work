<template>
	<div>
		<header class="set_username_header">
			<span v-on:click="$router.go(-1)">&lt;</span>
			<h2>修改用户名</h2>
		</header>
		
		<section>
			<input class="username_input" v-bind:class="{ alarm : input_invalid }" type="text" placeholder="输入用户名" v-model="user_input" v-on:input="highlight_text()"/>
			<p v-bind:class="{ highlight : input_invalid }" ref="set_username_tips">用户名只能修改一次（5-24字符之间）</p>
		</section>
		
		<section class="set_username_confirm">
			<button v-bind:class="{ active : button_highlight }">确认修改</button>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				user_input:'',
				input_invalid: false,
				button_highlight: false,
			}
		},
		
		methods:{
			highlight_text(){
				if ( this.user_input.length < 5 || this.user_input.length > 24 ){
					this.input_invalid = true;
					this.button_highlight = false;
					this.$refs.set_username_tips.innerHTML = '用户名长度在5到24位之间'
				}
				else{
					this.input_invalid = false;
					this.button_highlight = true;
					this.$refs.set_username_tips.innerHTML = '用户名只能修改一次（5-24字符之间）'
				}
			}
		}
	}
</script>

<style>
	.set_username_header{
		width: 100%;
		height: 4rem;
		
		text-align: center;
		color: #FFFFFF;
		line-height: 4rem;
		
		background: #3190E8;
	}
	
	.set_username_header>span{
		position: absolute;
		left: 0.5rem;
		
		font-size: 2rem;
	}
	
	.set_username_header+section{
		width: 28rem;
		margin: 1.5rem auto;
	}
	
	.username_input{
		width: 28rem;
		height: 3.5rem;
		border: 0.1rem solid #DDDDDD;
		border-radius: 0.2rem;
		
		background: none;
		
		font-size: 1.5rem;
	}
	
	.username_input.active{
		border-color: #ea3106;
	}
	
	.set_username_header+section>p{
		margin-top: 0.5rem;
		
		font-size: 0.9rem;
	}
	
	.set_username_header+section>p.highlight{
		font-size: 1.2rem;
		color: #ea3106;
	}
	
	.set_username_confirm{
		width: 28rem;
		margin: 2rem auto;
		height: 4.2rem;
		
		
		background: #3190E8;
	}
	
	.set_username_confirm>button{
		width: 100%;
		height: 100%;
		border: none;
		
		color: #FFFFFF;
		font-size: 1.3rem;
		
		background: none;
		opacity: 0.6;
		
		transition: all 1s;
	}
	
	.set_username_confirm>button.active{
		opacity: 1;
		transition: all 1s;
	}
</style>
