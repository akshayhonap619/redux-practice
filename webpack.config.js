var webpack = require('webpack')
var path = require("path")


module.exports ={
    entry: "./Components/react-scroll-parallax.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'public')
    },
    devServer: {
        contentBase : path.join(__dirname,'public')
    },

    module: {
        rules: [
            { test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "react"]
                }
            },
            {
                test:/\.css$/,

                use:['style-loader','css-loader']
            }
        ]
    }
}
