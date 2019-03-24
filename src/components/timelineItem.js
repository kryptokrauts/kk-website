import React from "react";
import { dateFormatter } from "../utils/format.util";
import timelineItem from "./timelineItem.module.css";


export default (props) => {
  if (props.isFirst) {
    return (
      <div className={timelineItem.container + ' ' + timelineItem.first + ' ' + props.className}
        title={'Today: ' + dateFormatter(new Date())}>
        <div className={timelineItem.icon}><i className="fas fa-calendar-day"></i></div>
        <div className={timelineItem.line}></div>
      </div>
    )
  } else {
    return (
      <div className={timelineItem.container + ' ' + props.className}>
        <div className={timelineItem.icon}><i className="fas fa-bell"></i></div>
        <div className={timelineItem.date}>{dateFormatter(props.data.date)}</div>
        <div className={timelineItem.title}>{props.data.title}</div>
        <div>{props.data.summary}</div>
        <div className={timelineItem.line}></div>
      </div>
    )
  }
}