const path = require('path');

module.exports = {
    mode: 'development',
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
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'source-map',
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'public')
        },
        historyApiFallback: true  
    },
}