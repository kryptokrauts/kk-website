import React from "react";
import { openURL } from "../utils/common.util";
import logo from "./logo.module.css";

export default (props) => (
    <img onClick={() => openURL("/")} src="/img/logo.svg" className={logo.container + ' ' + props.className} alt="logo" />
)