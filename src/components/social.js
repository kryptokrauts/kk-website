import React from "react";
import socialStyle from "./social.module.css";

export default (props) => (
  <div className={socialStyle.container + ' ' + props.className}>
    {props.providers.github ?
      <a href={props.providers.github} className={socialStyle.icon}><i className="fab fa-github"></i></a> : ''}
    {props.providers.twitter ?
      <a href={props.providers.twitter} className={socialStyle.icon}><i className="fab fa-twitter"></i></a> : ''}
    {props.providers.linkedin ?
      <a href={props.providers.linkedin} className={socialStyle.icon}><i className="fab fa-linkedin"></i></a> : ''}
  </div>
)