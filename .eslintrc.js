module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true,
        "jest/globals": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "testing-library"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "testing-library/await-async-query": "error",
        "testing-library/no-await-sync-query": "error",
        "testing-library/no-debug": "off",
        "testing-library/no-dom-import": "off",
    }
};
