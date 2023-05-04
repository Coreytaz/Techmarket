module.exports = {
    extends: [
        'plugin:react/recommended',
        'next/core-web-vitals',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                'endOfLine': 'auto',
            }
        ],
    }
}
