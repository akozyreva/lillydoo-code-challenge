module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/_fonts.scss";
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_components.scss";
          @import "@/assets/styles/_base.scss";
          @import "@/assets/styles/_media-queries.scss";
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
   ? '/lillydoo-code-challenge/'
   : '/'
};
