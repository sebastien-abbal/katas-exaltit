module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  moduleNameMapper: {
    "^@features/(.*)": "<rootDir>/src/features/$1",
    "^@utils": "<rootDir>/src/utils",
    "^@types": "<rootDir>/src/@types",
    "^@config": "<rootDir>/src/config",
  },
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
};
