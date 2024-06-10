module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testMatch: [
      '**/tests/**/*.spec.[jt]s?(x)'
    ],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
  };
  