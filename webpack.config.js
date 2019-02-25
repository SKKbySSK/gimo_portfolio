const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV == 'production';
const APP_DIR = path.resolve(__dirname, "./src/");

module.exports = {
    entry: path.resolve(APP_DIR, "App.tsx"),
    mode: isProduction ? "production" : "development",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // デバッグ用にソースマップの出力を有効にします。
    devtool: "source-map",

    resolve: {
        // 解決可能な拡張子として、'.ts' と '.tsx' を追加します。
        extensions: [".ts", ".tsx", ".js", ".json", ".png"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(APP_DIR, "index.html")
        })
    ],

    module: {
        rules: [
            { test: /\.html$/, loader: "html-loader" },
            // 拡張子が .ts と .tsx　のファイル を 'awesome-typescript-loader' で
            // 扱うようにします。
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {},
            }
        ]
    },

};