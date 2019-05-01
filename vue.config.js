module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/_fonts.scss";
          @import "@/assets/styles/_variables.scss";
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
   ? '/lillydoo-code-challenge/'
   : '/'
};
