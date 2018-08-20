const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/' // URL loader emits the URL of the file with output.publicPath prepended to the url.
        // this is used by any loader that uses a file path approach
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }), // we're making sure our css is seperated out into a seperate file. 
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 40000 } // limit defined as 40000. If the image is larger than 40000 bytes, seperate it out
                    }, // we can add options to loaders by passing them in as objects
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css') // anything grabbed by the loader will be exporteed to style.css
    ]
};

module.exports = config;