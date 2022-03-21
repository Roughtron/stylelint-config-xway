module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-plugin-stylus/standard",
    "stylelint-config-rational-order"
  ],
  rules: {
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'stylus/declaration-colon': null
  }
};