import React from "react";
import Header from "../components/header";
import { dateFormatter } from "../utils/common.util";
import blogTemplateModule from "./blogTemplate.module.css";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <Header />
      <div className="content">
        <div className={blogTemplateModule.post}>
          <h1 className={blogTemplateModule.title}>{frontmatter.date ? dateFormatter(frontmatter.date) + ": " : ""}{frontmatter.title}</h1>
          {frontmatter.image ? (
            <div className={blogTemplateModule.imageContainer}>
              <div className={blogTemplateModule.image}>
                <img src={frontmatter.image} />
              </div>
              <div className={blogTemplateModule.imageSource}>Source: {frontmatter.imageSource || frontmatter.image}</div>
            </div>
          ) : ""}
          <div className={blogTemplateModule.date}>published: {dateFormatter(frontmatter.publishedOn)}</div>
          <div className={blogTemplateModule.author}>Author: {frontmatter.author}</div>
          <div
            className={blogTemplateModule.content}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path } }) {
      html
      frontmatter {
        publishedOn
        date
        title
        author
      }
    }
  }
`