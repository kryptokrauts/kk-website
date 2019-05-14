import React from "react";
import LogItem from "../components/logItem";

export default (props) => (
  <main>
    {props.data.map((item, i) => (
      <LogItem data={item.node} key={i}></LogItem>
    ))}
  </main>
)