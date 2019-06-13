import React from "react";
import LogItem from "../components/logItem";
import logStyle from "./log.module.css";


export default (props) => (
  <div className={logStyle.logContainer}>
    {
      props.data.map((item, i) => (
        <LogItem data={item.node} key={i}></LogItem>
      ))
    }
  </div>
)