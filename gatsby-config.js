module.exports = {
    siteMetadata: {
        title: `kryptokrauts`,
        founded: 2018-01-13,
        links: {
            github: `https://github.com/kryptokrauts`,
            twitter: `https://twitter.com/kryptokrauts`
        }
    },
    // Note: it must *not* have a trailing slash.
    pathPrefix: `/img`,
    plugins: [
        `gatsby-transformer-yaml`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `./src/data/`,
          },
        },
    ],
}