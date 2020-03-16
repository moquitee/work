// 导入path模块,是node.js的api
const path = require('path')

// 引用vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 引入html-webpack-Plugin
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// 打包模式 有'development' 和 'production'两种选择，
	// development 会打包成易看懂的js文件, prodution 会打包压缩成体积较小但不易读的文件
	mode:'development',
	// 打包入口文件
	entry: './src/main.js',
	// 打包出口文件
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),//__dirname总是指向被执行js文件的绝对路径
	},
	// 打包规则:
	module:{
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(jpg|jpeg|png|svg)$/,
				loader: 'url-loader',
				options:{
					name: '[name].[ext]',
					// 如果小于2048b，则打包成base64图片;如果大于2048b，则使用file-loader
					limit: 2048
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			}
		]
	},
	// 插件
	plugins:[
		new VueLoaderPlugin(),
		new HtmlwebpackPlugin()
	],
	resolve: {
		alias:{
			'vue': 'vue/dist/vue.js'
		}
	}
	
}