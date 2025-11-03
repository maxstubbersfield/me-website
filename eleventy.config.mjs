import { EleventyI18nPlugin, EleventyRenderPlugin } from "@11ty/eleventy";
import i18n from "eleventy-plugin-i18n";
import translations from "./src/_data/i18n/index.js";
import UpgradeHelper from "@11ty/eleventy-upgrade-help";

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("_site");

  // Plugins
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "en",
  });

  eleventyConfig.addPlugin(i18n, { translations });
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(UpgradeHelper); // Must be last

  // Markdown helper
  eleventyConfig.addFilter("addLeadingNewlineIfNeeded", value =>
    value.startsWith("\n") ? value : "\n" + value
  );

  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  // Pass-through copy
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/.well-known/");
  eleventyConfig.addPassthroughCopy("src/netlify.toml");

  // Watch targets
  eleventyConfig.addWatchTarget("src/assets/");
  eleventyConfig.addWatchTarget("src/_data/");
}

export const config = {
  dir: {
    input: "src",
    includes: "_includes",
    output: "_site",
  },
  templateFormats: ["md", "njk", "html"],
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dataTemplateEngine: "njk",
};