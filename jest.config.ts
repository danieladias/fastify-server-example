/** @type {import('ts-jest').JestConfigWithTsJest} */
import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js}',
    '!src/server.ts',
    '!src/app.ts',
    '!dist/**',
    '!node_modules/**',
  ],
  testPathIgnorePatterns: ['.vscode'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  errorOnDeprecated: true,
};

export default config;
