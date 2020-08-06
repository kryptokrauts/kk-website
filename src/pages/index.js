import { graphql } from "gatsby";
import React from "react";
import Header from "../components/header";
import Projects from "../components/projects";
import Social from "../components/social";

export default ({ data }) => {
  return (
    <div className="main-container">
      <Header />
      <div className="content">
        <h2>Mission</h2>
        <blockquote>
          <p>
            We create tools and content for the crypto community to spread awareness.
            Currently our initiative is evolving and we are very curious about its future development.
      We encourage you to check out our <a href="/timeline">krautTIMELINE</a> to which everybody is invited to contribute!
      </p>
          <p>
            We have many ideas we want to bring to life and invite you to <a href="https://discord.gg/ZZTQgQb" target="_blank" rel="noopener noreferrer">join our discussion</a> on Discord to play a part in the growth of kryptokrauts!
      </p>
        </blockquote>
        <h2>Get Involved</h2>
        <Social providers={data.site.siteMetadata.links} />
        <h2>Projects</h2>
        <Projects items={data.allProjectsYaml.edges} />
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        links {
          logo
          url
        }
      }
    }
    allProjectsYaml {
      edges {
        node {
          project,
          year,
          description,
          links {
            website
          },
          tags
        }
      }
    }
  }
`