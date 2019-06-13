import React from "react";
import { dateFormatter, openURL } from "../utils/common.util";
import logItemStyle from "./logItem.module.css";
import TagList from "./tagList";

export default (props) => {
    const itemData = props.data.frontmatter;
    return (
        <article className={logItemStyle.card} onClick={() => openURL(itemData.path)}>
            {itemData.thumbnail ? (
                <div className={logItemStyle.thumbnailContainer}>
                    <img className={logItemStyle.thumbnail} src={itemData.thumbnail} alt="" />
                    <div className={logItemStyle.thumbnailSource}>Image: {itemData.thumbnailSource}</div>
                </div>
            ) : ""}
            <div className={logItemStyle.content}>
                <div className={logItemStyle.date}>{dateFormatter(itemData.publishedOn)}</div>
                <div className={logItemStyle.contentTitle}>{itemData.title}</div>
                <div className={logItemStyle.introText}>{itemData.introText}</div>
                <TagList tags={itemData.tags} />
            </div>
        </article>
    )
}