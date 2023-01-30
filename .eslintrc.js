module.exports = {
    parserOptions: {
        ecmaVersion: '2022'
    },
    extends: [
        'eslint:recommended'
    ],
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true
    },
    rules: {
        'no-console': [
            'error',
            {
                allow: ['error']
            }
        ]
    }
}
