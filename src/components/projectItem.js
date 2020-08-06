import React from "react";
import { openURL } from '../utils/common.util';
import projectItemStyle from "./projectItem.module.css";
import TagList from "./tagList";

export default (props) => (
  <div className={projectItemStyle.container} onClick={() => openURL(props.project.links.website, true)}>
    <div className={projectItemStyle.name}>
      {props.project.project}
    </div>
    <div className={projectItemStyle.content}>
      <div><i className="fas fa-calendar-alt" title="since"></i> {props.project.year}</div>
      <div>{props.project.description}</div>
      <div>{props.project.work}</div>
    </div>
    <TagList tags={props.project.tags} />
  </div>
);