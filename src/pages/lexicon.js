import { graphql } from "gatsby";
import React from "react";
import AlphabetSlider from "../components/alphabetSlider";
import Header from "../components/header";
import LexiconStyle from "./lexicon.module.css";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds the lexicon data
  const { html } = markdownRemark
  return (
    <div>
      <Header />
      <div className="content">
        <AlphabetSlider />
        <div
          className={LexiconStyle.lexiconContainer}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: {path: {eq: "/lexicon"}}) {
      html
    }
  }
`