const { EleventyI18nPlugin, EleventyRenderPlugin } = require("@11ty/eleventy");
const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n');

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "en",
  });

  eleventyConfig.addPlugin(i18n, {
    translations
  });
  
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // Used for markdown strings
  eleventyConfig.addFilter("addLeadingNewlineIfNeeded", function(value) {
    // Check if the value starts with a newline character
    if (value.startsWith("\n")) {
      return value; // Return the value as it is
    } else {
      return "\n" + value; // Prepend a newline character and return
    }
  });
  
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  // Pass through copy
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/netlify.toml");

  // Watch
  eleventyConfig.addWatchTarget("src/assets/");
  eleventyConfig.addWatchTarget("src/_data/");

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
}