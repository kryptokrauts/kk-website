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
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-remark`,
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
      },
    },
  ],
}