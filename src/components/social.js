import React from "react";
import { openURL } from "../utils/common.util";
import socialStyle from "./social.module.css";

const SocialProvider = ({ data }) => (
  <div onClick={() => openURL(data.url)} className={socialStyle.socialProvider}>
    <img src={data.logo} />
  </div>
)

export default ({ className, providers }) => (
  <div className={socialStyle.container + ' ' + className}>
    {providers.map(p => <SocialProvider key={p.url} data={p} />)}
  </div>
)