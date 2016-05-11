///// webpack.config.js
var path = require('path');
module.exports = {
	entry:path.resolve(__dirname,'app/app.js'),//// 入口文件
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'bundle.js'// 打包输出的文件
	},
	module:{
		loaders:[
		{
			test:/\.js?$/,//// test 去判断是否为.js,是的话就是进行es6和jsx的编译
			exclude:/node_modules/,
			loader:'babel',
			query:{
				presets:['es2015','react']
			}
		},
		{//图片模块化
			test:/\.(png|jpg|gif)$/,
			loader:'url-loader?limit=8192',//这里的limit=8192表示用base64编码 <=8k的图片
		},		
		{//样式模块化.
			test:/\.css$/,
			loader:'style!css'//// 用!去链式调用loader
		}
		]
	},
	resolve: {
    // 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee']
  }
}
