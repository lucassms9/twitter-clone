module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@styles': './src/styles',
          '@components': './src/components',
          '@store': './src/store',
          '@services': './src/services',
          '@utils': './src/utils',
          '@tests': './__tests__'
        }
      }
    ]
  ]
};
