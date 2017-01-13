
var path = require('path');
// Node.js path 模块提供了一些用于处理文件路径的小工具，我们可以通过以up方式引入该模块：
var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//var node_modules = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

 
module.exports = {
    //插件项
    //plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        //main : path.resolve(__dirname,'public/js/app/main.js'),
        index : path.resolve(__dirname,'public/js/app/index.js'),//demo
        vendors: ['main','jsbox'] // 其他库
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname,'public/js'),
        //filename: 'build.js'
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "less-loader") },
            //{ test: /\.txt$/, loader: 'raw-loader' },
            { test: /\.js$/,loader: 'babel'}, 
            { test: /\.js$/,loader: 'babel-loader!jsx-loader?harmony'},
            { test: /\.less$/, loader:  ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
            { test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=../img/[name].[ext]'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new ExtractTextPlugin("../css/admin.css"),
    ],
    externals: {
        jquery: 'window.$'
    },
    //其它解决方案配置
    resolve: {
        //查找module的话从这里开始查找
        root: path.resolve(__dirname,'public/'), //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.css', '.js', '.json', '.less', '.jsx'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            template : 'js/base/template.js',
            templateConfig : 'js/base/template.config.js',
            base : 'js/base/base.js',
            form : 'js/base/form.js',
            main : 'js/app/main.js',
            //url : 'js/base/url.js',
            jsbox : 'js/base/jsbox/jsbox.js',
        }
    }
};