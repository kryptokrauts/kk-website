module.exports = {
  siteMetadata: {
    title: `kryptokrauts`,
    founded: 2018 - 01 - 13,
    links: {
      github: `https://github.com/kryptokrauts`,
      twitter: `https://twitter.com/kryptokrauts`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-remark`
  ],
}