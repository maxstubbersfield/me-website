const { EleventyI18nPlugin } = require("@11ty/eleventy");
const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n');
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "en",
  });

  eleventyConfig.addPlugin(i18n, {
    translations
  });

  const md = markdownIt();

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  // Pass through copy
  eleventyConfig.addPassthroughCopy("src/assets/");

  // Watch
  eleventyConfig.addWatchTarget("src/assets/");

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