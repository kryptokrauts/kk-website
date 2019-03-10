import React from "react";
import teamStyle from "./team.module.css";
import TeamMember from "./teamMember";

export default (props) => (
  <div className={teamStyle.container}>
    {props.members.map(({ node }, index) => (
      <TeamMember member={node} key={index}></TeamMember>
    ))}
  </div>
)
