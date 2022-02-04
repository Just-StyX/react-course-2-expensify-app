const path = require('path');

//const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
    //const CSSExtract = new ExtractTextPlugin('styles.css')
    return {
        mode: 'production',
        entry: './src/app.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public'),
            publicPath: 'public'
        },
        module: {
            rules: [{
                use: {loader: 'babel-loader'},
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css/,
                use: [MiniCssExtractPlugin.loader, {loader: "css-loader", options: { sourceMap: true}}, {loader: 'sass-loader', options: {sourceMap: true}}]
                
            }]
        },
        plugins: [new MiniCssExtractPlugin({filename: "styles.css"})],
        //plugins: [ CSSExtract ],
        devtool: 'source-map',
        devServer: {
            static: {
              directory: path.resolve(__dirname, 'public')
            },
            historyApiFallback: true  
        },
    }
}
 