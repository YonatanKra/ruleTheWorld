const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');

// The path to the Cesium source code
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

module.exports = {
    output: {
        // Needed to compile multiline strings in Cesium
        sourcePrefix: ''
    },
    amd: {
        // Enable webpack-friendly use of require in Cesium
        toUrlUndefined: true
    },
    node: {
        // Resolve node module use of fs
        fs: 'empty'
    },
    resolve: {
        alias: {
            // Cesium module name
            cesium: path.resolve(__dirname, cesiumSource)
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), // use the clean plugin to delete the dist folder before a build
        // This plugin creates our index.html that would load the app for us in the browser
        new HtmlWebpackPlugin({
            title: 'Your Phrase Fireworks!'
        }),
        // Copy Cesium Assets, Widgets, and Workers to a static directory
        new CopywebpackPlugin([ { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' } ]),
        new CopywebpackPlugin([ { from: path.join(cesiumSource, 'Assets'), to: 'Assets' } ]),
        new CopywebpackPlugin([ { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' } ]),
        new webpack.DefinePlugin({
            // Define relative base path in cesium for loading assets
            CESIUM_BASE_URL: JSON.stringify('')
        })
    ],
    module: {
        rules: [
            // use the html loader
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {loader: 'html-loader'}
            },
            // use the css loaders (first load the css, then inject the style)
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
                use: [ 'url-loader' ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                cesium: {
                    test: /[\\/]node_modules[\\/]cesium/
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
            }
        }
    }
};