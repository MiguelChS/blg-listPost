const miniCSSExtractPluging = require('mini-css-extract-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "index.js",
        path: __dirname + "/dist",
        libraryTarget: 'commonjs'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
        }, {
            test: /\.scss$/,
            use: [{
                loader: miniCSSExtractPluging.loader,
            }, {
                loader: 'css-loader',
            },
            {
                loader: 'sass-loader',
            }
            ]
        }]
    },
    plugins: [
        new optimizeCSSAssetsPlugin(),
        new miniCSSExtractPluging({
            filename: 'index.css',
        }),
    ],
    externals: {
        react: "react",
        "blg-post": "blg-post",
        "react-redux": "react-redux"
    }
};