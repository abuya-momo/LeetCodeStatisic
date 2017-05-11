var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src/js/main.jsx'
    ],
    output: {
        path: 'C:/Users/luming/Desktop/learn/React/LeetCodeStatisic/app/dist',
        publicPath: './dist',
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            loader: 'jsx-loader?harmony'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!less'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192&name=../img/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            Cookie: 'cookiejs',
            React: 'react',
            ReactDOM: 'react-dom',
            ClassNames: 'classnames'
        })
    ]
};
