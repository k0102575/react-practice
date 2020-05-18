### 1

npm install -D eslint prettier

### 2

npx install-peerdeps --dev eslint-config-airbnb

### 3

npm install -D eslint-config-prettier eslint-plugin-prettier

### .eslintrc.json

```
{
  "extends": ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "rules": {
    "jsx-a11y/href-no-hash": ["off"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "react/require-default-props": "off",
    "react/prefer-stateless-function": 0,
    "max-len": [
      "warn",
      {
        "code": 80,
        "tabWidth": 2,
        "comments": 80,
        "ignoreComments": false,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ]
  }
}
```

### .prettierrc.json

```
{
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all",
  "useTabs": false,
  "tabWidth": 2,
  "semi": true
}
```

### setting.json

```
"editor.formatOnSave": true
```

git config --global core.autocrlf false
