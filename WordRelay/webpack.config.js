const path = require("path");
const webpack = require("webpack");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "gugudan",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader", // 모듈
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-refresh/babel"], // 추가해야함
        },
      },
    ],
  },
  plugins: [
    new RefreshWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: "./index.html", // 적용될 html 경로
    //   // filename: "./index.html", // 결과 파일명
    //   meta: {
    //     // meta 태그를 추가
    //     viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    //   },
    //   hash: true, // 모든 스크립트, css 파일에 고유한 컴파일 해시 추가하여 캐시를 무효화
    //   showErrors: true, // 오류 정보가 html에 기록됨
    // }),
  ], // 추가해야함
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    // publicPath: "/dist/",
  },
  devServer: {
    // publicPath: "/dist/",
    devMiddleware: {
      publicPath: "/dist/",
    },
    static: {
      directory: path.resolve(__dirname), // webpack이 빌드한 파일들이 존재하는 곳
    }, // 실제로 존재하는 정적 파일들의 경로 if( src/ index.html) => path.resolve(__dirname, 'src')
    hot: true,
  },
};
