module.exports = {
  // tell Jest to handle `*.vue` files
  moduleFileExtensions: ['js', 'json', 'vue'],
  watchman: false,
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^~~/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    // process js with `babel-jest`
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  testEnvironment: 'jsdom',
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/*.vue',
  ],
  // coverageThreshold: {
  //   global: {
  //     branches: 75,
  //     functions: 75,
  //     lines: 75,
  //     statements: 75,
  //   },
  // },
};
