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
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollHandler.bind(this));
    }
  }

  componentWillMount() {
    this.scrollListener = window.addEventListener('scroll', this.scrollHandler.bind(this));
  }

  render() {
    return (
      <div className={headerStyles.header + ' ' + (this.state.scrolled ? headerStyles.scrolled : '')}>
        <CenteredLogo />
        <div className={headerStyles.sitename}>{this.props.title}</div>
        <Social className={headerStyles.socialinfo} providers={this.props.social} />
      </div>
    )
  }
}