'use strict';

//web 应用第一步创建Controller，引入Controller
const Controller = require('egg').Controller;

//初始化实例，并定义异步函数index
class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
}

//将模块暴露
module.exports = HomeController;
