import React from "react";
import { dateFormatter } from "../utils/format.util";
import Social from "./social";
import teamMemberStyle from "./teamMember.module.css";

export default (props) => (
  <div className={teamMemberStyle.container}>
    <div className={teamMemberStyle.avatar}>
      <i className="fas fa-user-secret"></i>
    </div>
    <div className={teamMemberStyle.content}>
      <div className={teamMemberStyle.name}>
        {props.member.name}
        <Social className={teamMemberStyle.socialLinks} providers={props.member.profiles} />
      </div>
      <div><img className={teamMemberStyle.logo} src="/img/logo.svg" title="kryptokraut" alt="kryptokraut"></img> since {dateFormatter(props.member.joined)}</div>
      <div><i className="fas fa-user"></i> {props.member.roles.join(' & ')}</div>
      <div><i className="fas fa-building" title="working at"></i> <a href={props.member.company.website}>{props.member.company.name}</a></div>
    </div>
  </div>
)