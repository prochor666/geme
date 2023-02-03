module.exports = {
    env: {
        es6: true,
        browser: true,
        es2021: true,
    },
    globals: {
        H: true,
        axios: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'implicit-arrow-linebreak': 'off',
        'function-paren-newline': 'off',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'vue/no-unused-vars': [
            'error',
            {
                ignorePattern: '^_',
            },
        ],
    },
};
