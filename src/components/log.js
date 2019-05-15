import React from "react";
import LogItem from "../components/logItem";
import logStyle from "./log.module.css";

export default (props) => (
  <main>
    <div className={logStyle.sectionTitle}><h2 className={logStyle.title}>krautLOG</h2></div>
    {props.data.map((item, i) => (
      <LogItem data={item.node} key={i}></LogItem>
    ))}
  </main>
)