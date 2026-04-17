// import de la librairie
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

// exposer la config
export default function (eleventyConfig) {
  // ajout de plugin
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp", "jpeg"],
    widths: ["auto"],
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
      pictureAttributes: {},
    },
  });

  // ajout de filtre
  eleventyConfig.addFilter("debugger", (...args) => {
    console.log(...args);
    debugger;
  });

  // copie des fichiers css js
  eleventyConfig.addPassthroughCopy("./src/assets/");

  // déclaration des templates
  eleventyConfig.addLayoutAlias("index", "index.html");
  eleventyConfig.addLayoutAlias("detail", "detail.html");

  // création d'une collection type
  eleventyConfig.addCollection("type", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return "type" in item.data;
    });
  });

  // config moteur de template / dossier sources destination
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
  };
}
