const { createProxyMiddleware } = require("http-proxy-middleware");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://ventas.movistar.com.ar/fibra/prepreventa",
  },
  pathPrefix: `/fibra/prepreventa/`,
  developMiddleware: (app) => {
    app.use(
      `${process.env.MAIN_URL}`,
      createProxyMiddleware({
        target: "https://certventas.movistar.com.ar",
        changeOrigin: true,
      })
    );
  },
  plugins: [`gatsby-plugin-react-helmet`],
};
