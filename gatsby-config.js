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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-graph',
            options: {
              // this is the language in your code-block that triggers mermaid parsing
              language: 'mermaid', // default
              theme: 'default' // could also be dark, forest, or neutral
            }
          },
          {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              trackingIds: [
                "UA-139263777-1", // Google Analytics
              ],
              gtagConfig: {
                anonymize_ip: true,
                cookie_expires: 0,
              },
              pluginConfig: {
                head: false,
                respectDNT: true,
              },
            }
          },
        ]
      }
    },
    `gatsby-plugin-twitter`
  ],
}