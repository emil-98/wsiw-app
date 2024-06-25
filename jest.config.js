export const testEnvironment = "jsdom";
export const transform = {
  '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
};
export const setupFilesAfterEnv = ['@testing-library/jest-dom'];