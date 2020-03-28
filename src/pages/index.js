import { graphql } from "gatsby";
import React from "react";
import Header from "../components/header";
import Social from "../components/social";
import VideoSlider from "../components/videoSlider";

export default ({ data }) => (
  <div className="main-container">
    <Header />
    <div className="content">
      <h2>Community</h2>
      <VideoSlider />
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
      <h2>Join Us</h2>
      <Social providers={data.site.siteMetadata.links} />
    </div>
  </div>
)
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
  }
`