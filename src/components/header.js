import { graphql, StaticQuery } from "gatsby";
import React, { Component } from "react";
import headerStyles from "./header.module.css";
import CenteredLogo from "./logo";
import Social from "./social";

export default class Header extends Component {

  state = {
    scrolled: false
  };

  scrollHandler(evt) {
    if (evt.currentTarget.pageYOffset > 0) {
      this.setState({
        scrolled: true
      });
    } else {
      this.setState({
        scrolled: false
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler.bind(this));
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler.bind(this));
  }

  headerRenderer(data) {
    const metaInfo = data.site.siteMetadata;
    const menu = data.allMenuYaml.edges.map(item => item.node);
    return (
      <div className={headerStyles.header + ' ' + (this.state.scrolled ? headerStyles.scrolled : '')}>
        <CenteredLogo />
        <div className={headerStyles.menu}>
          {menu.map((item, i) => (
            <div key={i} className={headerStyles.menuItemContainer}>
              {!item.path ? (
                <div className={headerStyles.menuInactiveBadge}>coming soon</div>
              ) : ""}
              <a href={item.path} className={!item.path ? "inactive" : ""}>{item.prefix}<b>{item.label}</b></a>
            </div>
          ))
          }
        </div>
        <Social className={headerStyles.socialinfo} providers={metaInfo.links} />
      </div>
    )
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
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
          allMenuYaml {
            edges {
              node {
                prefix
                label
                path
              }
            }
          }
        }
        `}
        render={this.headerRenderer.bind(this)}
      ></StaticQuery>
    )
  }
}