(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{r8of:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=t("LbRr"),l=(t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("Vd3H"),t("pIFo"),t("GOuc")),i=t("rFDd"),o=t.n(i),m=function(e){var a=o.a.container+" "+e.className,t=e.data.frontmatter;return(t.path||t.externalLink)&&(a=a+" "+o.a.interactive),e.odd&&(a=a+" "+o.a.odd),function(e,a){return r.a.createElement("div",{className:a,id:e.title.replace(/[. ,:-]+/g,"-").replace(/["]+/g,"")},r.a.createElement("div",{className:o.a.date},Object(l.a)(e.date)),r.a.createElement("div",{className:o.a.icon},r.a.createElement("i",{className:e.icon||"fas fa-bell"})),r.a.createElement("div",{className:o.a.line}),r.a.createElement("a",{href:"#"+e.title.replace(/[. ,:-]+/g,"-").replace(/["]+/g,"")}),r.a.createElement("div",{className:o.a.title,onClick:function(){return Object(l.b)(e.path?e.path:e.externalLink,!e.path)}},e.title),r.a.createElement("div",null,e.thumbnail?r.a.createElement("img",{className:o.a.thumbnail,src:e.thumbnail,alt:""}):""))}(t,a)},u=t("Wa5a"),d=t.n(u),s=function(e){return r.a.createElement("div",{id:e.year,className:d.a.year},r.a.createElement("a",{href:"#"+e.year},e.year))},f=function(e){var a=function(e){return e.sort((function(e,a){return a.node.frontmatter.date.localeCompare(e.node.frontmatter.date)})).reduce((function(e,a,t){var n=function(e){return e.date.substring(0,4)}(a.node.frontmatter);return void 0===e[n]&&(e[n]=[]),e[n].push({isOdd:t%2==1,content:a}),e}),{})}(e);return Object.keys(a).sort((function(e,a){return a.localeCompare(e)})).map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(s,{year:e}),function(e){return e.map((function(e,a){return r.a.createElement(m,{data:e.content.node,key:a,odd:e.isOdd})}))}(a[e]))}))},E=function(e){return r.a.createElement("div",{className:d.a.container},f(e.data))};t.d(a,"query",(function(){return p}));a.default=function(e){var a=e.data;return r.a.createElement("div",null,r.a.createElement(c.a,null),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Timeline",r.a.createElement("a",{href:"/log/how-to-contribute",className:"timeline-contrib-info",title:"How to contribute?"},r.a.createElement("i",{className:"fas fa-info-circle"}))),r.a.createElement(E,{data:a.allMarkdownRemark.edges})))};var p="2767926290"}}]);
//# sourceMappingURL=component---src-pages-timeline-js-31025d4770766ec18245.js.map