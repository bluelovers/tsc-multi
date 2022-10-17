"use strict";

const { mixinJestConfig } = require('@bluelovers/jest-config');

module.exports = mixinJestConfig({
  //preset: "ts-jest",
  testEnvironment: "node",
  watchPathIgnorePatterns: ["__fixtures__/output"],
  testTimeout: 30000,
  setupFilesAfterEnv: ["jest-extended/all"],
}, true, {
  file: __filename,
})

console.dir(module.exports);
