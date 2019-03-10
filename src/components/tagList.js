import React from "react";
import Tag from "./tag";
import tagListStyle from "./tagList.module.css";

export default (props) => (
  <div className={tagListStyle.container}>
    {props.tags.map(tag => (
      <Tag label={tag} className={tagListStyle.tag} />
    ))}
  </div>
)