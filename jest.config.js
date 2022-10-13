const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverageFrom: ["!src/pages/**/*.ts"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^styled-components":
      "<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
