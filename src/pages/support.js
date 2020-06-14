import { graphql } from "gatsby";
import React from "react";
import SuperheroButton from "../components/superheroButton";
import Header from "../components/header";
import QRCode from "qrcode.react";
import supportStyle from "./support.module.css";

export default ({ data }) => (
  <div className="main-container">
    <Header />
    <div className="content">
      <div className={supportStyle.data}>
        <div className={supportStyle.container}>
          <h1>Give us some of your superpower!</h1>
          <div class="superhero-large"></div>
          <SuperheroButton />
          <p>Superhero is a decentralized social tipping platform. Read our <b><i><a href="/log/superhero-truly-decentralized-social-tipping-platform">article</a></i></b> and become a Superhero!</p>

          <h1>Download Brave</h1>
          <a href="https://brave.com/kry019"><img src="/img/brave/banner_horizontal.png" alt="Download Brave"/></a>
          <p>You still don't know about Brave and BAT? Read our <b><i><a href="/log/brave-and-basic-attention-token">Brave guide</a></i></b> to learn about it!</p>

          <h1>We appreciate tips in crypto</h1>
          {data.allSupportYaml.edges.map(({ node }, index) => (
            <div className={supportStyle.container} key={index}>
                <h2>{node.chain}</h2>
                <QRCode value={node.address}/>
                <div>{node.address}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export const query = graphql`
  query {
    allSupportYaml {
      edges {
        node {
          chain
          address
        }
      }
    }
  }
`