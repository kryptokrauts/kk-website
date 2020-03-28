import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useScroll } from "../common/useScroll";
import headerStyles from "./header.module.css";
import CenteredLogo from "./logo";

export default () => {

  const scrolled = useScroll();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const headerRenderer = (data) => {
    const menu = data.allMenuYaml.edges.map(item => item.node);
    return (
      <div className={headerStyles.header + ' ' + (scrolled ? headerStyles.scrolled : '')}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>kryptokrauts.com</title>
        </Helmet>
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
        <div className={headerStyles.menuMobileLauncher} onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={headerStyles.menuMobile + ' ' + (mobileMenuOpen ? headerStyles.menuMobileActive : '')}>
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
      </div >
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query {
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
      render={headerRenderer}
    ></StaticQuery>
  )
}