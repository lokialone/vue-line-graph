/*
* @Author: 王春岩 <Bolt>
* @Date:   2017-03-30 17:06:12
* @Last Modified by:   Bolt
* @Last Modified time: 2017-05-05 18:41:16
*/

'use strict';

module.exports = {
    // 这里是为了公用项目 node_modules 而不需要为 examples 再次安装
    // 会在项目目录生成 .nuxt 目录, 需要添加到 .gitignore
    rootDir: '..',

    // 将项目资源重新指向当前目录
    srcDir: 'examples',

    // 将生成的文件指向当前目录下 dist, 需要添加到 .gitignore
    generate: {
        dir: 'examples/dist'
    },

    router: {
        base: process.env.BASE_PATH
    },

    // 引入插件
    plugins: ['~/../config/plugins/vue-lazyload'],

    // 添加 qiwa 项目特有环境
    head: {
        script: [
            { src: '//f2e.souche.com/projects/dafengche/weidian-util-flexible-js/flexible-1.0.1.js' }
        ],
        link: [
            { rel: 'stylesheet', href: '//f2e.souche.com/shop/util/qiwa-s-color/style.css?S_color=%23ff571a' }
        ]
    },

    // 定制 webpack 配置
    build: {
        postcss: [
            // 保留 default
            require('autoprefixer')({
                browsers: ['last 3 versions']
            }),

            // 定制
            require('postcss-px2rem')()
        ],

        loaders: [
            // 保留 default
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 1000, // 1KO
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 1000, // 1 KO
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },

            // 定制
            {
                test: /\.(js|vue)$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                exclude: /(node_modules|.nuxt)/,
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            }
        ]
    }
};
