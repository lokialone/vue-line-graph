/*
* @Author: 王春岩 <Bolt>
* @Date:   2017-04-05 21:10:26
* @Last Modified by:   Bolt
* @Last Modified time: 2017-04-07 20:15:18
*/

'use strict';

/**
 * 项目内 require('*.js') 或者 import '*.js' 均需要写成
 *     require('babel-loader!*.js') 和 import 'babel-loader!*.js'
 * 因此本项目中的 es6 模块均会得到 babel 编译支持，而无需手动编译
 *
 * 本文件作为输出出口，必须写成 es5 模块
 *     用于其他项目依赖本项目时，无需添加 'babel-loader!'
 * 而其他文件均无需使用 commonjs 规范(即使用 require('*.js'))
 *     请使用 es6 module 规范(即使用 import '*.js')
 *
 * 一般情况下，无需修改 package.json 中的 main 属性以及本文件
 *     修改时请确保您了解以上描述内容
 * 您完全可以理解为输出出口被固定为 `./index.babel.js`
 */

module.exports = require('babel-loader!./index.babel.js');

/**
 * 使用本脚手架生成的项目( 如，module-a )，默认输出为一个 ES6 Module，因此您的项目在依赖时可以直接使用
 *
 * ```
 * import moduleA from 'module-a';
 * import { propertyA, propertyB } from 'module-a';
 * ```
 *
 * 如果您的项目中需要使用 commonjs 的语法，或者使用 webpack 的代码分割懒加载功能，您需要相应的写成
 *
 * ```
 * var moduleA = require('module-a').default;  // 相当于 import moduleA from 'module-a';
 * var moduleA = require('module-a');   // 非 ./index.babel.js 中的 export default 的输出
 * ```
 */

/**
 * 特别说明:(以 modula-a 举例)
 *
 * 如果您的项目中想 require('module-a/xx.vue')，则无需使用 require('module-a/xx.vue').default
 * 
 * 如果您的项目中想 require('module-a/xx.js') 或者 import 'module-a/xx.js'
 *     将会 error，因为没有得到 babel 编译支持
 *     因此您需要 require('babel-loader!module-a/xx.js') 
 *         或者 import 'babel-loader!module-a/xx.js'
 *     我们并不推荐您这样引用
 */

/**
 * 以上说明均由于 webpack 项目中 babel 配置为 exclude: /node_modules/
 *     当然，您不得不这样做
 *     否则，您项目中的 vue/angular/react 均将受到 babel 编译，从而影响编译速度
 */
