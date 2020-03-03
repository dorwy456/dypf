const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/Index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/dist")
  },
  mode: "development",
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: "/node_modules",
          use: ['babel-loader']
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.css$/,
          use: ['css-loader']
        },
        {
          test: /\.svg$/,
          loader: 'file-loader'
        }
      ]
  },
  devServer: {
        contentBase: path.resolve(__dirname + "/dist"),
        inline: true,
        hot: true,
        open:true,
        compress: true,
        host: "localhost",
        port: 5050
  },
  resolve: {
    modules: ['node_modules'],
    extensions:['*','.js','.json','.jsx','.css','.ts','.tsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html', // public/index.html 파일을 읽는다.
      filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
    })
  ]
};
