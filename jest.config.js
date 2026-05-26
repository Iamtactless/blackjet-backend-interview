module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  rootDir: ".",
  testEnvironment: "node",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": ["@swc/jest"],
  },
};
