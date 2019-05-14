import { graphql } from "gatsby";
import React from "react";
import Header from "../components/header";
import Log from "../components/log";

export default ({ data }) => (
  <div>
    <Header />
    <div className="content">
      <Log data={data.allMarkdownRemark.edges}></Log>
    </div>
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {frontmatter: {path: {regex: "/^\/log/" }}}
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            path
            icon
            thumbnail
            thumbnailSource
          }
        }
      }
    }
  }
`