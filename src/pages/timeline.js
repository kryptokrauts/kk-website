import { graphql } from "gatsby";
import React from "react";
import Header from "../components/header";
import Timeline from "../components/timeline";

export default ({ data }) => (
  <div>
    <Header />
    <div className="content">
      <h2>
        Timeline
        <a href="/log/how-to-contribute" className="timeline-contrib-info" title="How to contribute?">
          <i className="fas fa-info-circle"></i>
        </a>
      </h2>
      <Timeline data={data.allMarkdownRemark.edges}></Timeline>
    </div>
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {frontmatter: {path: {regex: "/^\/timeline/" }}}
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