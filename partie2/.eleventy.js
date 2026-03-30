import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {


  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ["avif", "webp", "jpeg"],
		widths: ["auto"],
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			},
			pictureAttributes: {}
		},
  });

  eleventyConfig.addFilter("debugger", (...args) => {
    console.log(...args)
    debugger;
  });

  eleventyConfig.addPassthroughCopy("./src/assets/");

  eleventyConfig.addLayoutAlias('index', 'index.html');
  eleventyConfig.addLayoutAlias('detail', 'detail.html');

  eleventyConfig.addCollection("type", function(collectionApi) {
    return collectionApi.getAll().filter(function(item) {
      return "type" in item.data
    });
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
  }

}