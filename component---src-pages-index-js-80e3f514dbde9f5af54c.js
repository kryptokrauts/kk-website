(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RXBc:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=t("LbRr"),l=(t("f3/d"),t("GOuc")),o=t("vvJk"),i=t.n(o),m=t("NO0K"),s=t("mN3F"),u=function(e){return r.a.createElement("div",{className:i.a.container,onClick:function(){return Object(l.b)(e.project.links.website,!0)}},r.a.createElement("div",{className:i.a.name},e.project.project,r.a.createElement("div",{className:i.a.addionalIcons},e.project.links.docs?r.a.createElement("a",{href:"#",onClick:function(){return Object(l.b)(e.project.links.docs,!0)},title:"Documentation"},r.a.createElement("i",{className:"fas fa-book"})):""),r.a.createElement(m.a,{className:i.a.socialLinks,providers:e.project.links})),r.a.createElement("div",{className:i.a.content},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-calendar-alt",title:"since"})," ",e.project.year),r.a.createElement("div",null,e.project.description),r.a.createElement("div",null,e.project.work)),r.a.createElement(s.a,{tags:e.project.tags}))},d=t("2AaB"),f=t.n(d),v=function(e){return r.a.createElement("div",{className:f.a.container},e.items.map((function(e,a){var t=e.node;return r.a.createElement(u,{project:t,key:a})})))},E=t("GgkA"),p=t.n(E),b=t("dEtu"),k=t("Pa+g"),g=t.n(k),y=function(e){return r.a.createElement("div",{className:g.a.container},r.a.createElement("div",{className:g.a.avatar},e.member.avatar?r.a.createElement("img",{src:e.member.avatar,alt:"Avatar"}):r.a.createElement("i",{className:"fas fa-user-secret"})),r.a.createElement("div",{className:g.a.content},r.a.createElement("div",{className:g.a.name},e.member.name,r.a.createElement(m.a,{className:g.a.socialLinks,providers:e.member.profiles})),r.a.createElement("div",null,r.a.createElement("img",{className:g.a.logo,src:"/img/logo.svg",title:"kryptokraut",alt:"kryptokraut"})," since ",Object(l.a)(e.member.joined)),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-user"})," ",e.member.roles.join(" & ")),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-building",title:"working at"}),r.a.createElement(b.OutboundLink,{href:e.member.company.website},e.member.company.name))))},N=function(e){return r.a.createElement("div",{className:p.a.container},e.members.map((function(e,a){var t=e.node;return r.a.createElement(y,{member:t,key:a})})))};t.d(a,"query",(function(){return h}));a.default=function(e){var a=e.data;return r.a.createElement("div",{className:"main-container"},r.a.createElement(c.a,null),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Team"),r.a.createElement(N,{members:a.allTeamYaml.edges}),r.a.createElement("h2",null,"Mission"),r.a.createElement("blockquote",null,r.a.createElement("p",null,"The goal of kryptokrauts is to create a knowledge platform for the crypto community - created by people and made for people. Currently the project is evolving and we are very curious about its future development. We encourage you to check out our ",r.a.createElement("a",{href:"/timeline"},"krautTIMELINE")," to which everybody is invited to contribute!"),r.a.createElement("p",null,"We have many ideas we want to bring to life and invite you to ",r.a.createElement("a",{href:"https://discord.gg/ZZTQgQb",target:"_blank",rel:"noopener noreferrer"},"join our discussion")," on Discord to play a part in the growth of kryptokrauts!")),r.a.createElement("h2",null,"Projects"),r.a.createElement(v,{items:a.allProjectsYaml.edges})))};var h="273218619"},dEtu:function(e,a,t){"use strict";var n=t("TqRt");a.__esModule=!0,a.OutboundLink=o;var r=n(t("pVnL")),c=n(t("q1tI")),l=n(t("17x9"));function o(e){return c.default.createElement("a",(0,r.default)({},e,{onClick:function(a){"function"==typeof e.onClick&&e.onClick(a);var t=!0;return(0!==a.button||a.altKey||a.ctrlKey||a.metaKey||a.shiftKey||a.defaultPrevented)&&(t=!1),e.target&&"_self"!==e.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:e.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=e.href)}}):t&&(document.location=e.href),!1}}))}o.propTypes={href:l.default.string,target:l.default.string,onClick:l.default.func}},mN3F:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),c=t("aoNJ"),l=t.n(c),o=function(e){return r.a.createElement("div",{className:l.a.container+" "+e.className},e.label)},i=t("q4ns"),m=t.n(i);a.a=function(e){return r.a.createElement("div",{className:m.a.container},e.tags.map((function(e,a){return r.a.createElement(o,{label:e,className:m.a.tag,key:a})})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-80e3f514dbde9f5af54c.js.map