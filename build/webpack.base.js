// webpack.base.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"), // 入口文件

  // 打包文件出口
  output: {
    filename: "static/js/[name].js", // 每个输出js的名称
    path: path.join(__dirname, "../dist"), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: "/", // 打包后文件的公共前缀路径
  },
  module: {
    rules: [
    //   {
    //     test: /.(ts|tsx)$/,
    //     use: {
    //       loader: "babel-loader",
    //       options: {
    //         // 执行顺序由右往左,所以先处理ts,再处理jsx,最后再试一下babel转换为低版本语法
    //         presets: [
    //           [
    //             "@babel/preset-env",
    //             {
    //               // 设置兼容目标浏览器版本,这里可以不写,babel-loader会自动寻找上面配置好的文件.browserslistrc
    //               // "targets": {
    //               //  "chrome": 35,
    //               //  "ie": 9
    //               // },
    //               useBuiltIns: "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
    //               corejs: 3, // 配置使用core-js低版本
    //             },
    //           ],
    //           "@babel/preset-react",
    //           "@babel/preset-typescript",
    //         ],
    //       },
    //     },
    //   },
    {
        test: /.(ts|tsx)$/,
        use: 'babel-loader'
      },
      {
        test: /.(css|less)$/, //匹配 css和less 文件
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test:/.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/images/[name][ext]', // 文件输出目录和命名
        },
      },
      {
        test:/.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/fonts/[name][ext]', // 文件输出目录和命名
        },
      },
      {
        test:/.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/media/[name][ext]', // 文件输出目录和命名
        },
      },
    ],
  },
  //只配置js, tsx和ts，其他文件引入都要求带后缀，可以提升构建速度。
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
    }),
    new webpack.DefinePlugin({
      "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV),
    }),
  ],
};
// console.log('NODE_ENV', process.env.NODE_ENV)
// console.log('BASE_ENV', process.env.BASE_ENV)
