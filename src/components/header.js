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

  render() {
    return (
      <div className={headerStyles.header + ' ' + (this.state.scrolled ? headerStyles.scrolled : '')}>
        <CenteredLogo />
        <a href="/" className={headerStyles.sitename} >{this.props.title}</a>
        <div className={headerStyles.menu}>
          {this.props.menu.map((item, i) => (
            <a href={item.path} key={i}>{item.label}</a>
          ))}
        </div>
        <Social className={headerStyles.socialinfo} providers={this.props.social} />
      </div>
    )
  }
}