//引入node里的path,拼接路径
const path = require("path");

//引入html-webpack-plugin
const HTMLWebpackPlugin = require("html-webpack-plugin");

//引入clean-webpack-plugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//webpack中所有的配置信息都应该写在module.export中
module.exports = {
  mode: "development",
  //指定入口文件
  entry: "./src/index.ts",

  //指定打包文件所在的目录
  output: {
    //路径配置
    path: path.resolve(__dirname, "dist"),
    //打包后文件的文件配置
    filename: "bundle.js",
  },
  //指定webpack打宝石要使用的模块
  module: {
    //指定加载的规则
    rules: [
      {
        //规则生效文件,匹配以ts结尾的文件
        test: /\.ts$/,
        //要使用的loader
        use: "ts-loader",
        //要排除的文件
        exclude: /node-modules/,
      },
    ],
  },
  //配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title:'我自定义一个名字'
      template: "./src/index.html", //打包生成的html根据这个模板生成的
    }), //自动生成html,并引入资源，可以自己配置
  ],
  //设置引用模块
  resolve:{
      extensions:['.ts','.js']
  }
};
