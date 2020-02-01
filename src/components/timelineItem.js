import React from "react";
import { dateFormatter, openURL } from "../utils/common.util";
import timelineItem from "./timelineItem.module.css";

let currentYear;

function RenderYear(props) {
  const year = props.date.substring(0,4);
  if(!currentYear || currentYear > year) {
    currentYear = year;
    return(
  <div className={timelineItem.year}><a href={"#" + year} className="anchor">{year}</a></div>
    );
  }
  return null;
}

const renderFirst = (itemClasses) => (
  <div className={itemClasses}>
    <div className={timelineItem.icon}><i className="fas fa-calendar-day"></i></div>
    <div className={timelineItem.titleSmall}>{'Today: ' + dateFormatter(new Date())}</div>
    <div className={timelineItem.line}></div>
  </div>
)

const renderItem = (itemData, itemClasses) => (
  <div className={itemClasses}>
    <RenderYear date={itemData.date}></RenderYear>
    <div id={itemData.title.replace(/[. ,:-]+/g, "-").replace(/["]+/g, "")}
      onClick={() => openURL((itemData.path ? itemData.path : itemData.externalLink), itemData.path ? false : true)}>
      {itemData.thumbnail ? (
        <div className={timelineItem.thumbnailContainer}>
          <img className={timelineItem.thumbnail} src={itemData.thumbnail} alt="" />
          <div className={timelineItem.thumbnailSource}>Image: {itemData.thumbnailSource}</div>
        </div>
      ) : ""}
      <div className={timelineItem.icon}><i className={itemData.icon || "fas fa-bell"}></i></div>
      <div className={timelineItem.date}>{dateFormatter(itemData.date)}</div>
      <a href={"#" + itemData.title.replace(/[. ,:-]+/g, "-").replace(/["]+/g, "")}></a>
      <div className={timelineItem.title}>
        {itemData.title}
      </div>
      <div className={timelineItem.line}></div>
    </div>
  </div>
)

export default (props) => {
  let className = `${timelineItem.container} ${props.className}`;
  if (props.isFirst) {
    className = `${className} ${timelineItem.first}`;
    return renderFirst(className);
  } else {
    const itemData = props.data.frontmatter;
    if (itemData.path || itemData.externalLink) {
      className = `${className} ${timelineItem.interactive}`;
    }
    return renderItem(itemData, className);
  }
}