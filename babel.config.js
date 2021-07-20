const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
      targets: {
        chrome: 88,
        firefox: 78,
        edge: 88,
        // browsers: ['last 1 version', '> 5%', 'not dead'],
      },
      useBuiltIns: 'usage', // 按需引入不支持的es6 方法,like includes
      corejs: 3,
      debug: false, //方便调试
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',

  // 'react-app',
];

const plugins = [
  '@babel/plugin-transform-runtime',
  [
    'babel-plugin-import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    },
  ],
  [
    'import',
    {
      libraryName: '@ant-design/icons',
      // libraryDirectory: 'es/icons',
      camel2DashComponentName: false,
      customName: function (transformedMethodName) {
        // console.log('Antd Icons>>>>>>', transformedMethodName);
        if (transformedMethodName === 'default') {
          return '@ant-design/icons/es/components/Icon';
        } else {
          return `@ant-design/icons/es/icons/${transformedMethodName}`;
        }
      },
    },
    '@ant-design/icons',
  ],
  // [
  //   'import',
  //   {
  //     libraryName: 'antd-mobile',
  //     libraryDirectory: 'es6',
  //     style: true,
  //     // camel2DashComponentName: false,
  //   },
  //   'antd-mobile',
  // ],

  // [
  //   'react-intl-auto',
  //   {
  //     // 移除的前缀：true - ID 中将不包含任何文件路径前缀
  //     removePrefix: 'src.',
  //     //使用文件名生成 ID
  //     filebase: false,
  //     // 使用前导注释作为消息说明
  //     // 仅适用于使用 defineMessages 定义语言包的时候
  //     extractComments: true,
  //     useKey: true,
  //     // ID 中单词之间的分隔符
  //     separator: '.',
  //   },
  // ],
  [
    'formatjs',
    {
      idInterpolationPattern: '[sha512:contenthash:base64:6]',
      ast: true,
    },
  ],
  'react-hot-loader/babel',
];

module.exports = function (api) {
  api.cache(true);
  return { presets, plugins };
};
