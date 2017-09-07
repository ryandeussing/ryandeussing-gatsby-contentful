module.exports = {
  siteMetadata: {
    title: `Ryan Deussing`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `63gjib4vyfgd`,
        accessToken: `79d08ce152b25a6f52fc460a4ba54433189bc1541dcf1d68043414756a56de05`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`
  ],
}
