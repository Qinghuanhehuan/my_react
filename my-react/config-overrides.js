const { override, fixBabelImports, addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: 'css',
  }),
  addDecoratorsLegacy(), //配置装饰器
);
