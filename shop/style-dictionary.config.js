const StyleDictionary = require('style-dictionary');
const tokensStudio = require('@tokens-studio/sd-transforms');

StyleDictionary.registerTransformGroup(tokensStudio);

module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: { selector: ':root' },
        },
      ],
    },
  },
};