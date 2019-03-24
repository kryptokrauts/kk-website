import { graphql } from "gatsby";
import React from "react";
import Header from "../components/header";
import Projects from "../components/projects";
import Team from "../components/team";
import Timeline from "../components/timeline";

const timelineTestData = [{
  title: 'Event 3',
  summary: 'Lorem ipsum...',
  date: '2019-02-01'
}, {
  title: 'Event 2',
  summary: 'Lorem ipsum...',
  date: '2018-02-01'
}, {
  title: 'Event 1',
  summary: 'Lorem ipsum...',
  date: '2017-02-01'
}]

export default ({ data }) => (
  <div>
    <Header
      title={data.site.siteMetadata.title}
      social={data.site.siteMetadata.links} />
    <div className="content">
      <h2>Timeline</h2>
      <Timeline data={timelineTestData}></Timeline>
      <h2>Team</h2>
      <Team members={data.allTeamYaml.edges} />
      <h2>Projects</h2>
      <Projects items={data.allProjectsYaml.edges} />
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