const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry : './src/main/index.js',
    output : {
        filename: "[name].js",
        path: path.resolve(__dirname , "build"),
        publicPath: "./" ,
        chunkFilename: "[name]_[contentHash].js"
    },
    mode : 'development',
    devServer: {
       contentBase: path.join(__dirname,'build'),
        publicPath:'/',
        port : 3305,
        compress :true ,
        hot :true,
        hotOnly :true
    },
    module: {
        rules: [
            {
                test :/\.css$/ ,
                use : ['css-loader' ,'style-loader']
            },
            {
                test : /\.(png|jpg|jpeg|gif)$/,
                use : {
                    loader:'file-loader',
                    options: {
                        outputPath : 'image'
                    }
                }
            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title : 'webpack配置模板',
            template: "./src/view/index.html"
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}



