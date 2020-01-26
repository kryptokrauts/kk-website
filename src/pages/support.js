import { graphql } from "gatsby";
import React from "react";
import Header from "../components/header";
import QRCode from "qrcode.react";
import supportStyle from "./support.module.css";

export default ({ data }) => (
  <div className="main-container">
    <Header />
    <div className="content">
      <h1>download Brave</h1>
      <a href="https://brave.com/kry019"><img src="/img/brave/728x90-standard.png" alt="Download Brave"/></a>
      <p>You still don't know about Brave and BAT? Read our <b><i><a href="/log/brave-and-basic-attention-token">Brave guide</a></i></b> to learn about it!</p>

      <h1>send us some crypto</h1>
        {data.allSupportYaml.edges.map(({ node }, index) => (
          <div className={supportStyle.container} key={index}>
              <h2>{node.chain}</h2>
              <QRCode value={node.address}/>
              <div>{node.address}</div>
          </div>
        ))}
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