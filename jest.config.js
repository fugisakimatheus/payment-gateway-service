/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: '<rootDir>/jest.setup.js',
  globalTeardown: '<rootDir>/jest.teardown.js',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: '<rootDir>/jest/coverage',
  testMatch: ['**/__tests__/**/*.test.ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  clearMocks: true,
  transform: {
    '.ts': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      compiler: 'ttypescript'
    }
  },
  moduleFileExtensions: ['js', 'ts'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '^data/(.*)$': '<rootDir>/src/data/$1',
    '^domain/(.*)$': '<rootDir>/src/domain/$1',
    '^infra/(.*)$': '<rootDir>/src/infra/$1',
    '^presentation/(.*)$': '<rootDir>/src/presentation/$1',
    '^tests/(.*)$': '<rootDir>/src/tests/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
  },
}
