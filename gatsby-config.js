module.exports = {
  siteMetadata: {
    title: `Gatsby with Contentful`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `63gjib4vyfgd`,
        accessToken: `79d08ce152b25a6f52fc460a4ba54433189bc1541dcf1d68043414756a56de05`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
