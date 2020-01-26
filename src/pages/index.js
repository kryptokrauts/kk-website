import { graphql } from "gatsby";
import React from "react";
import Header from "../components/header";
import Projects from "../components/projects";
import Team from "../components/team";

export default ({ data }) => (
  <div className="main-container">
    <Header />
    <div className="content">
      <h2>Team</h2>
      <Team members={data.allTeamYaml.edges} />
      <h2>Mission</h2>
      <blockquote>
      <p>
      The goal of kryptokrauts is to create a knowledge platform for the crypto community - created by people and made for people.
      Currently the project is evolving and we are very curious about its future development.
      We encourage you to check out our <a href="/timeline">krautTIMELINE</a> to which everybody is invited to contribute!
      </p>
      <p>
      We have many ideas we want to bring to life and invite you to <a href="https://discord.gg/ZZTQgQb" target="_blank" rel="noopener noreferrer">join our discussion</a> on Discord to play a part in the growth of kryptokrauts!
      </p>
      </blockquote>
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