import React from "react";
import tagStyle from "./tag.module.css";

export default (props) => (
  <div className={tagStyle.container + ' ' + props.className}>{props.label}</div>
);