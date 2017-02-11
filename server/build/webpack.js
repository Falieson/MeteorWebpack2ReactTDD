const {
  createConfig, defineConstants, entryPoint, setOutput // , sourceMaps,  env
} = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
// const devServer = require('@webpack-blocks/dev-server2');

module.exports = createConfig([
  entryPoint('./src/main.js'),
  setOutput('./build/bundle.js'),
  babel(),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV
  })
  // env('development', [
  //   devServer(),
  //   devServer.proxy({
  //     '/api': { target: 'http://localhost:3000' }
  //   }),
  //   sourceMaps()
  // ])
]);
