先安装命令行工具
npm install -g react-tools
将React文件转成标准的 JavaScript:
jsx --watch src/ build/


安装 webpack
npm install webpack -g

webpack 也有一个 web 服务器 webpack-dev-server, 我们也安装上
npm install webpack-dev-server -g

选择一个目录下有webpack.config.js文件的文件夹，然后运行下面的命令:

webpack 开发环境下编译
webpack -p 产品编译及压缩
webpack --watch 开发环境下持续的监听文件变动来进行编译(非常快!)
webpack -d 引入 source maps