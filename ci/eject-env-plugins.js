const webpack = require('webpack');
const wrapperEnv = require('../config');

const Envhandler = {
  env: {},
  push: (key, value) => {
    if (typeof key === 'string') {
      Envhandler.env[key] = JSON.stringify(value);
    }
    return Envhandler;
  },
  getEnv: () => {
    return { ...Envhandler.env };
  },
};

let commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString();
const versionTag = `${wrapperEnv['APP_VERSION']}-${
  commitHash.endsWith('\n')
    ? commitHash.substring(0, commitHash.length - 2)
    : commitHash
}`;

const EJECT_ENV = Envhandler.push('__DEBUG__', process.env.DEV_DEBUG)
  .push('__VERSION_TAG__', versionTag)
  .push('__INFURA_KEY__', wrapperEnv['INFURA_KEY'] || '')
  .push('__INFURA_SECRET__', wrapperEnv['INFURA_SECRET'] || '')
  .push('__TOKEN_ADDRESS__', wrapperEnv['TOKEN_ADDRESS'] || '')
  .getEnv();

module.exports = [new webpack.DefinePlugin(EJECT_ENV)];
