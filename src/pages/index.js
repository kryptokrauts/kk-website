import { graphql } from "gatsby";
import React from "react";
import Header from "../components/header";
import Projects from "../components/projects";
import Team from "../components/team";

export default ({ data }) => (
  <div>
    <Header />
    <div className="content">
      <h2>Team</h2>
      <Team members={data.allTeamYaml.edges} />
      <h2>Projects</h2>
      <Projects items={data.allProjectsYaml.edges} />
    </div>
  </div>
)

export const query = graphql`
  query {
    allTeamYaml {
      edges {
        node {
          name
          avatar
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