const coverageThreshold = 100;
const collectCoverageFrom = [
    "src/BundleContext/**/*.ts",
    "src/sdk/**/*.ts",
    "!src/BundleContext/Users/Infrastructure/**",
    "!node_modules/**"
];

const moduleNameMapper={
    '^@sdk/(.*)$': '<rootDir>/src/sdk/$1',
    '^@app/(.*)$': '<rootDir>/src/BundleContext/$1'
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