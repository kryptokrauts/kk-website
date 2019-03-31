import React from "react";
import TimelineItem from "../components/timelineItem";
import timeline from "./timeline.module.css";

export default (props) => (
  <div className={timeline.container}>
    <TimelineItem isFirst={true}></TimelineItem>
    {props.data.map((item, i) => (
      <TimelineItem data={item.node} key={i}></TimelineItem>
    ))}
  </div>
)