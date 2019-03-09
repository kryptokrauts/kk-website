import React from "react"
import { graphql } from "gatsby"
import CenteredLogo from "../components/centered_logo";

export default ({data}) => (
  <div>
    <h3>{data.site.siteMetadata.title}</h3>
    <ul>
      <li>founded: {data.site.siteMetadata.founded}</li>
      <li>links:</li>
      <ul>
        <li>{data.site.siteMetadata.links.github}</li>
        <li>{data.site.siteMetadata.links.twitter}</li>
      </ul>
    </ul>
    <div>
      <h4>Team</h4>
      {data.allTeamYaml.edges.map(({node}) => (
        <ul>
          <li>{node.name}</li>
          <li>{node.joined}</li>
          <li>{node.roles}</li>
          <li>{node.name}</li>
          <li>{node.company.name} / {node.company.website}</li>
          <li>{node.profiles.github}</li>
          <li>{node.profiles.twitter}</li>
          <li>{node.profiles.linkedin}</li>
        </ul>
      ))}
    </div>
    <div>
      <h4>Projects</h4>
      {data.allProjectsYaml.edges.map(({node}) => (
        <ul>
          <li>{node.project}</li>
          <li>{node.year}</li>
          <li>{node.description}</li>
          <li>{node.work}</li>
          <li>{node.links.website}</li>
          <li>{node.links.github}</li>
          <li>{node.links.docs}</li>
          <li>{node.links.twitter}</li>
          <li>{node.tags}</li>
        </ul>
      ))}
    </div>
    <CenteredLogo />
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
    allTeamYaml {
      edges {
        node {
          name
          roles
          joined
          company {
            name
            website
          }
          profiles {
            github
            twitter
            linkedin
          }
        }
      }
    }
    allProjectsYaml {
      edges {
        node {
          project,
          year,
          description,
          work,
          links {
            website,
            github,
            docs,
            twitter
          },
          tags
        }
      }
    }
  }
`