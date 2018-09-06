'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

//第二步：路由映射，暴露一个函数，根路由显示，定义的home.js文件
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list)
};
