// config-overrides.js
const path = require('path');
const { override, addWebpackAlias, addBabelPlugin } = require('customize-cra');

module.exports = override(
  // Webpack Alias 설정
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@features': path.resolve(__dirname, 'src/components/features'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@routes': path.resolve(__dirname, 'src/routes'),
  }),
  // Babel 플러그인 추가
  addBabelPlugin('@babel/plugin-proposal-private-property-in-object')
);
