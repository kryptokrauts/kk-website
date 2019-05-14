import React from "react";
import { dateFormatter, openURL } from "../utils/common.util";
import logItem from "./logItem.module.css";

export default (props) => {
    const itemData = props.data.frontmatter;
    return (
        <article class="card">
            <div className={logItem.title} onClick={() => openURL(itemData.path)}>{itemData.title}</div>
            <div className={logItem.date}>{dateFormatter(itemData.date)}</div>
            {itemData.thumbnail ? (
                <div className={logItem.thumbnailContainer}>
                <img className={logItem.thumbnail} src={itemData.thumbnail} alt="" />
                <div className={logItem.thumbnailSource}>Image: {itemData.thumbnailSource}</div>
                </div>
            ) : ""}
        </article>
    )
}