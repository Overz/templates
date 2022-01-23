module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~',
          rootPathSuffix: 'src',
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: false,
        },
      ],
      ['react-native-reanimated/plugin'],
    ],
    // Caso utilizando o react-native-paper
    // env: {
    //   production: {
    //     plugins: ['react-native-paper/babel'],
    //   },
    // },
  };
};
