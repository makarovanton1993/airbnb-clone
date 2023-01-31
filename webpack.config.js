const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require ("path");

module.exports = {
    entry:"./src/index.tsx",
    output:{
        path:path.join(__dirname,"/dist"),
        filename:"index_bundle.js",
    },
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test:/\.js$/,                 // следить за файлами jsx и переделывает из jsx в js
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            {
                test:/\.css$/,               // следить за файлами css
                use:["style-loader","css-loader"] // css-loader объеденяет все файлы в один ,а  style-loader добавляет эти стили в тег style
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ]
};