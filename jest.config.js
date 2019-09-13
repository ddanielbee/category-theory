module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
      isolatedModules: true,
    },
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  testPathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/.home'],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageReporters: ['cobertura', 'text', 'html'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  transformIgnorePatterns: ['<rootDir>/src/node_modules/(?!@hc)'],
  modulePathIgnorePatterns: ['<rootDir>[/\\\\](dist|node_modules)[/\\\\]'],
};
