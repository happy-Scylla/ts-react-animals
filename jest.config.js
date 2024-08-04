const { TestEnvironment } = require("jest-environment-jsdom");

module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
    }
};
