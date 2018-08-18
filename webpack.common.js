const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new CleanWebpackPlugin(['dist']), // use the clean plugin to delete the dist folder before a build
        // This plugin creates our index.html that would load the app for us in the browser
        new HtmlWebpackPlugin({
            title: 'Your Phrase Fireworks!'
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
            }
        ]
    }
};