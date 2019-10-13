import { graphql } from "gatsby";
import React from "react";
import Header from "../components/header";
import Log from "../components/log";

export default ({ data }) => (
  <div>
    <Header />
    <div className="content">
      <h2>
        krautLOG
      </h2>
      <Log data={data.allMarkdownRemark.edges}></Log>
    </div>
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "/\/log/"
        }
      },
      sort: { order: DESC, fields: [frontmatter___publishedOn] }
    ) {
      edges {
        node {
          frontmatter {
            title
            publishedOn
            path
            introText
            thumbnail
            thumbnailSource
            tags
          }
        }
      }
    }
  }
`