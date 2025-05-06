/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/one-dev-blog",
  siteMetadata: {
    title: `One Dev Blog`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/contents/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `wiki`,
        path: `${__dirname}/contents/wiki`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 90,
              withWebp: true,
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-catch-links",
  ],
};
