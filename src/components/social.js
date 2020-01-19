import React from "react";
import { openURL } from "../utils/common.util"
import socialStyle from "./social.module.css";

export default (props) => (
  <div className={socialStyle.container + ' ' + props.className}>
    {props.providers.github ?
      <a href="#" onClick={() => openURL(props.providers.github, true)} className={socialStyle.icon}><i className="fab fa-github"></i></a> : ''}
    {props.providers.twitter ?
      <a href="#" onClick={() => openURL(props.providers.twitter, true)} className={socialStyle.icon}><i className="fab fa-twitter"></i></a> : ''}
    {props.providers.linkedin ?
      <a href="#" onClick={() => openURL(props.providers.linkedin, true)} className={socialStyle.icon}><i className="fab fa-linkedin"></i></a> : ''}
  </div>
)