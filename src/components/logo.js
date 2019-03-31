import React from "react";
import logo from "./logo.module.css";

export default (props) => (
    <img src="/img/logo.svg" className={logo.container + ' ' + props.className} alt="logo" />
)