module.exports = {
  siteMetadata: {
    title: `kryptokrauts`,
    founded: 2018 - 01 - 13,
    links: [{
      logo: `/img/logos/github-logo.png`,
      url: `https://github.com/kryptokrauts`,
      label: 'GitHub'
    }, {
      logo: `/img/logos/twitter-logo.png`,
      url: `https://twitter.com/kryptokrauts`,
      label: 'Twitter'
    }, {
      logo: `/img/logos/discord-logo.png`,
      url: `https://discord.gg/ZZTQgQb`,
      label: 'Discord'
    }, {
      logo: `/img/logos/pepo-logo.png`,
      url: `https://pepo.com/communities/kryptokrauts`,
      label: 'pepo'
    }]
  },
  plugins: [
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
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: 100
            }
          },
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
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 450,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 225, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
                {
                  id: 'vimeo',
                  embedURL: (videoId) => `https://player.vimeo.com/video/${videoId}`
                }
              ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            }
          }
        ]
      }
    },
    `gatsby-plugin-twitter`,
  ],
}