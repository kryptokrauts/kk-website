import React from "react";
import ProjectItem from "./projectItem";
import projectsStyle from "./projects.module.css";

export default (props) => (
  <div className={projectsStyle.container}>
    {props.items.map(({ node }) => (
      <ProjectItem project={node}></ProjectItem>
    ))}
  </div>
)