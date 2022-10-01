import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "@code/(.*)": "<rootDir>/src/$1"
  },
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
  // The root directory that Jest should scan for tests and modules within
  rootDir: './src',
  // The test environment that will be used for testing
  testEnvironment: "jest-environment-node",
};

export default config;