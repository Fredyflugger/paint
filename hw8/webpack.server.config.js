const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: {
    main: ["@babel/polyfill", "whatwg-fetch", "./src/server/server.js"]
  },
  output: {
    path: path.join (__dirname, "dist"),
    publicPath: "/",
    filename: "server/[name].js"
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: "src/server/db",
        to: "server/db/[name].[ext]",
        toType: 'template'
      }
    ])
  ]
}
