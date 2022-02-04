const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
    return {
        mode: 'production',
        entry: './src/app.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public', 'dist')
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
        devtool: 'source-map',
        devServer: {
            static: {
              directory: path.resolve(__dirname, 'public'),
              publicPath: '/dist'
            },
            historyApiFallback: true 
        },
    }
}
 