const path = require('path');
// const HtmlWebpackPlugin = require('HtmlWebpackPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddScriptToHeadPlugin = require('./AddScriptToHeadPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                postcssOptions: {
                    config: '.postcssrc.js'
                },
                execute: true
            }
        }
    },
    chainWebpack: config => {
        // config.module
        //     .rule('scss')
        //     .use('dynamicCssVariableLoader')
        //     .loader('./dynamicCssVariableLoader.js')
        //     .before('sass-loader') // 确保在 sass-loader 之前使用
        //     .end();

        // config.module
        //     .rule('scss')
        //     .use('postcss-loader')
        //     .loader('postcss-loader')
        //     .tap(options => {
        //         options.postcssOptions = {
        //             config: './postcss.config.js',
        //         };
        //         return options;
        //     });

    },
    configureWebpack: {
        plugins: [
            // 在这里添加 HTML 插件配置
            // 例如，添加一个自定义的标题
            // new HtmlWebpackPlugin({
            //     title: 'My Custom Title',
            // }),
            // new HtmlWebpackPlugin({
            //     template: 'public/index.html',
            //     BASE_URL: '/',
            //     minify: {
            //         removeComments: false,
            //         // 其他 minify 选项
            //     },
            //     // 其他 HtmlWebpackPlugin 选项
            // }),

            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'src/your-script.js',
                        to: 'your-script.js',
                    },
                    // 可以添加更多文件的复制规则
                ],
            }),
            new AddScriptToHeadPlugin({
                src: './your-script.js', // 替换为实际的脚本文件路径
            })
        ],
    }
};


// module.exports2 = {
//     // pages: {
//     //     index: {
//     //         entry: 'src/main.js',  // 页面1的入口文件
//     //         template: 'public/index.html',  // 页面1的HTML模板
//     //         filename: 'index.html',  // 生成的HTML文件名
//     //     },
//     //     index2: {
//     //         entry: 'src/main2.js',  // 页面2的入口文件
//     //         template: 'public/index2.html',  // 页面2的HTML模板
//     //         filename: 'index2.html',  // 生成的HTML文件名
//     //     },
//     //     // 添加更多页面的配置...
//     // },
//     chainWebpack: (config) => {
//         // 针对 HTML 文件添加自定义 Loader
//         // config.module
//         //     .rule('vue')
//         //     .use('replace-h1-loader')
//         //     .loader('./replace-h1-loader.js') // 指定自定义 Loader 的文件路径
//         //     .end()
//         //     .use('print-content-loader')
//         //     .loader('./print-content-loader.js')
//         //     .end()
//         //     .use('custom-directive-loader')
//         //     .loader('./custom-directive-loader.js')
//         //     .end();
//         // console.log(config.plugin('html'));
//         // config.plugin('html').tap((args) => {
//         //     // args[0].minify = {
//         //     //     removeComments: false, // 不移除HTML注释
//         //     // };
//         //     // return args;
//         // });

//         config.plugin('html').tap((args) => {
//             args[0].minify = {
//                 removeComments: false,
//             };
//             return args;
//         });
//     },
//     // configureWebpack: {
//     //     plugins: [
//     //         // 在这里添加 HTML 插件配置
//     //         // 例如，添加一个自定义的标题
//     //         new HtmlWebpackPlugin({
//     //             title: 'My Custom Title',
//     //         }),
//     //     ],
//     // }
//     // configureWebpack: config => {
//     //     new HtmlWebpackPlugin({
//     //         template: 'public/index.html',
//     //         minify: {
//     //             removeComments: false, // 不移除HTML注释
//     //         },
//     //     }),
//     // }
//     // configureWebpack: {
//     //     plugins: [
//     //         // new HtmlWebpackPlugin({
//     //         //     template: 'public/index.html',
//     //         //     minify: {
//     //         //         removeComments: false, // 不移除HTML注释
//     //         //     },
//     //         // }),
//     //     ],
//     // }
// };