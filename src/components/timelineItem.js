import React from "react";
import { dateFormatter, openURL } from "../utils/format.util";
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
    const itemData = props.data.frontmatter;
    return (
      <div className={timelineItem.container + ' ' + props.className}
        onClick={() => openURL(itemData.path)}>
        <div className={timelineItem.icon}><i className={itemData.icon || "fas fa-bell"}></i></div>
        <div className={timelineItem.date}>{dateFormatter(itemData.date)}</div>
        <div className={timelineItem.title}>{itemData.title}</div>
        <div className={timelineItem.line}></div>
      </div>
    )
  }
}