const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "numberbaseball",
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
  plugins: [new RefreshWebpackPlugin()], // 추가해야함
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
