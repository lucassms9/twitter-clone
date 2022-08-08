const config = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/__tests__/providers.tsx'],
  collectCoverage: true,
  cacheDirectory: '.jest-cache'
};

module.exports = config;
