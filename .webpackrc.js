import { resolve } from 'path';

const config = {
  // target: 'electron-renderer',
  extraBabelPlugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]],
};

export default config;
