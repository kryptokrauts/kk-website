import { graphql } from "gatsby";
import React from "react";
import Header from "../components/header";
import Timeline from "../components/timeline";

const menuItems = [{
  label: 'Timeline',
  path: '/timeline'
}];

export default ({ data }) => (
  <div>
    <Header
      title={data.site.siteMetadata.title}
      social={data.site.siteMetadata.links}
      menu={menuItems} />
    <div className="content">
      <h2>Timeline</h2>
      <Timeline data={data.allMarkdownRemark.edges}></Timeline>
    </div>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title,
        founded,
        links {
          github,
          twitter
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            path
            icon
          }
        }
      }
    }
  }
`