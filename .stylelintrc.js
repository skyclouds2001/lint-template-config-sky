module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {},
  plugins: [],
  overrides: [
    {
      files: ['**/*.md'],
      customSyntax: 'postcss-markdown',
    },
    {
      files: ['**/*.html'],
      extends: ['stylelint-config-html'],
    },
    {
      files: ['**/*.vue'],
      extends: ['stylelint-config-standard-vue'],
    },
    {
      files: ['**/*.sass'],
      customSyntax: 'postcss-sass',
    },
    {
      files: ['**/*.scss'],
      extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
    },
    {
      files: ['**/*.less'],
      extends: ['stylelint-config-recommended-less'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['**/*.styl', '**/*.stylus'],
      extends: ['stylelint-stylus/standard'],
    },
    {
      files: ['**/*.sss'],
      customSyntax: 'sugarss',
    },
  ],
}
