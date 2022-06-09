module.exports = {
	plugins: [
		'stylelint-scss',
		'stylelint-color-format',
		'stylelint-use-logical-spec',
	],
	extends: [
		'stylelint-config-recommended',
		'stylelint-config-idiomatic-order',
	],
	rules: {
		indentation: 'tab',
		'string-quotes': 'double',
		'function-url-quotes': 'always',
		'selector-attribute-quotes': 'always',
		'selector-class-pattern': null,
		'keyframe-block-no-duplicate-selectors': true,
		'no-invalid-double-slash-comments': null,
		'order/properties-alphabetical-order': null,
		'string-no-newline': true,
		'font-weight-notation': 'numeric',
		'font-family-name-quotes': 'always-unless-keyword',
		'color-format/format': {
			'format': 'hsla',
		},
		'color-named': 'never',
		'length-zero-no-unit': true,
		'number-max-precision': [
			2,
			{
				ignoreUnits: ['em', 'rem']
			}
		],
		'declaration-block-single-line-max-declarations': 1,
		'declaration-block-no-shorthand-property-overrides': true,
		// next rule is optional, but I recommend turning it on
		'liberty/use-logical-spec': true,
	},
};
