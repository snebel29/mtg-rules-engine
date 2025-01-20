module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  moduleNameMapper: {
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@common/(.*)$': '<rootDir>/src/models/common/$1',
    '^@game/(.*)$': '<rootDir>/src/models/game/$1',
  }
};
