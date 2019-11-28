const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const { createRedirect } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  createRedirect({
    fromPath: `/log/first-claim-ever-of-an-aens-domain`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/log/first-claim-ever-of-an-aens-name`,
  });

  return graphql(`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "/\/timeline|\/log/"
        }
      },
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.path) {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {}, // additional data can be passed via context
        })
      }
    })
  })
}