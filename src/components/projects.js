import React from "react";
import ProjectItem from "./projectItem";
import projectsStyle from "./projects.module.css";

export default (props) => (
  <div className={projectsStyle.container}>
    {props.items.map(({ node }, index) => (
      <ProjectItem project={node} key={index}></ProjectItem>
    ))}
  </div>
)