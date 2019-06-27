module.exports = {
  chainWebpack: config => {
    (config.devtool = "source-map"),
      config.module
        .rule("vue")
        .use("vue-loader")
        .loader("vue-loader")
        .tap(options => {
          options["transformAssetUrls"] = {
            img: "src",
            image: "xlink:href",
            "b-img": "src",
            "b-img-lazy": ["src", "blank-src"],
            "b-card": "img-src",
            "b-card-img": "src",
            "b-card-img-lazy": ["src", "blank-src"],
            "b-carousel-slide": "img-src",
            "b-embed": "src"
          };

          return options;
        });
  }
};
