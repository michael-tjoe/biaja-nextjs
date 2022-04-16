module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@context(.*)$": "<rootDir>/src/context$1",
    "^@styles(.*)$": "<rootDir>/src/styles$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@constants(.*)$": "<rootDir>/src/constants$1",
  },
};
