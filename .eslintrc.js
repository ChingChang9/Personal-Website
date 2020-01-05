module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  rules: {
    "no-unused-vars": "off",
    "no-undef": "off",
    "no-console": "off",
    "vue/require-v-for-key": "off",
    "vue/attributes-order": "error",
    "vue/order-in-components": "error",
    "vue/this-in-template": "error",
    "vue/html-quotes": "error",
    "vue/name-property-casing": "error",
    "vue/no-spaces-around-equal-signs-in-attribute": "error",
    "vue/prop-name-casing": "error",
    "vue/no-use-v-if-with-v-for": "off",
    "vue/no-unused-vars": "off"
  },
  parserOptions: {
    "parser": "babel-eslint"
  }
}