import React from "react";
import { dateFormatter, openURL } from "../utils/common.util";
import timelineItem from "./timelineItem.module.css";

const renderItem = (itemData, itemClasses) => (
  <div className={itemClasses} id={itemData.title.replace(/[. ,:-]+/g, "-").replace(/["]+/g, "")}>
    <div className={timelineItem.date}>{dateFormatter(itemData.date)}</div>
    <div className={timelineItem.icon}><i className={itemData.icon || "fas fa-bell"}></i></div>
    <div className={timelineItem.line}></div>
    <a href={"#" + itemData.title.replace(/[. ,:-]+/g, "-").replace(/["]+/g, "")}></a>
    <div className={timelineItem.title}
      onClick={() => openURL((itemData.path ? itemData.path : itemData.externalLink), itemData.path ? false : true)}>
      {itemData.title}
    </div>
    <div>
      {itemData.thumbnail ? (
        <img className={timelineItem.thumbnail} src={itemData.thumbnail} alt="" />
      ) : ""}
    </div>
  </div>
)

export default (props) => {
  let className = `${timelineItem.container} ${props.className}`;
  const itemData = props.data.frontmatter;
  if (itemData.path || itemData.externalLink) {
    className = `${className} ${timelineItem.interactive}`;
  }
  if (props.odd) {
    className = `${className} ${timelineItem.odd}`;
  }
  return renderItem(itemData, className);
}
