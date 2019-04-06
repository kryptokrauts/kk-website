import React from "react";
import { openURL } from '../utils/common.util';
import projectItemStyle from "./projectItem.module.css";
import Social from "./social";
import TagList from "./tagList";

export default (props) => (
  <div className={projectItemStyle.container} onClick={() => openURL(props.project.links.website)}>
    <div className={projectItemStyle.name}>
      {props.project.project}
      <div className={projectItemStyle.addionalIcons}>{props.project.links.docs ?
        <a href={props.project.links.docs} title="Documentation"><i className="fas fa-book"></i></a> : ''}</div>
      <Social className={projectItemStyle.socialLinks} providers={props.project.links} />
    </div>
    <div className={projectItemStyle.content}>
      <div><i className="fas fa-calendar-alt" title="since"></i> {props.project.year}</div>
      <div>{props.project.description}</div>
      <div>{props.project.work}</div>
    </div>
    <TagList tags={props.project.tags} />
  </div>
);

/*
        {data.allProjectsYaml.edges.map(({ node }) => (
          <ul>

          </ul>
        ))}
        */