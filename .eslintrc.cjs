module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["airbnb", "airbnb/hooks", "plugin:react/recommended", "plugin:prettier/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        "react/react-in-jsx-scope": 0,
        "import/no-extraneous-dependencies": 0,
        "linebreak-style": 0,
        "prettier/prettier": 0,
        "jsx-a11y/label-has-associated-control":0,
        "vendorPrefix": 0,
        "treact/no-unescaped-entities": 0,
        'react/jsx-props-no-spreading': 'off',
        'no-useless-return':0,
        'react/prop-types':0,
        // the below are for alias path "@"
        'import/extensions':0,
        'import/no-unresolved':0
    },
    // settings: {
    //     'import/resolver': {
    //       alias: {
    //         map: [['@', './src']],
    //         extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //       },
    //     },
    // },
};
