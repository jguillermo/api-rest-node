const coverageThreshold = 100;
const collectCoverageFrom = [
    "src/BundleContext/**/*.ts",
    "src/Sdk/**/*.ts",
    "!**/node_modules/**",
    "!**/vendor/**"
];

const moduleNameMapper={
    '^@sdk/(.*)$': '<rootDir>/src/sdk/$1'
  };

module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    coverageThreshold: {
        global: {
            branches: coverageThreshold,
            functions: coverageThreshold,
            lines: coverageThreshold,
            statements: coverageThreshold
        }
    },
    collectCoverageFrom,
    moduleNameMapper
}