var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src/js/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src/js')
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test:/\.png$/,
                loaders:['url-loader?limit=8192']
            }
        ]
    }
};