import React from "react";
import projectItemStyle from "./projectItem.module.css";
import Social from "./social";
import TagList from "./tagList";

export default (props) => (
  <a className={projectItemStyle.link} href={props.project.links.website}>
    <div className={projectItemStyle.container}>
      <div className={projectItemStyle.name}>
        {props.project.project}
        <div className={projectItemStyle.addionalIcons}>{props.project.links.docs ?
          <a href={props.project.links.docs} title="Documentation"><i className="fas fa-book"></i></a> : ''}</div>
        <Social className={projectItemStyle.socialLinks} providers={props.project.links} />
      </div>
      <div>{props.project.year}</div>
      <div>{props.project.description}</div>
      <div>{props.project.work}</div>
      <TagList tags={props.project.tags} />
    </div>
  </a>
);

/*
        {data.allProjectsYaml.edges.map(({ node }) => (
          <ul>

          </ul>
        ))}
        */