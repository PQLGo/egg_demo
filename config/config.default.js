'use strict';

//第三步：定义配置文件，exports.keys = <此处改为你自己的 Cookie 安全字符串>;，暴露配置对象
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1536232514964_5630';
  //添加view配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  }
  // add your config here
  config.middleware = [
  
  ];
  
  return config;
};

