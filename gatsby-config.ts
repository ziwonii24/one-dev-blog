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
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-catch-links",
  ],
};
