module.exports = {
    extends: [
        'eslint:recommended'
    ],
    env: {
        browser: true,
        amd: true,
        node: true,
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
