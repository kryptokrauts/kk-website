(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{152:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return u}),t.d(a,"pageQuery",function(){return o});var n=t(0),r=t.n(n),c=t(175),i=t(170),l=t(153),s=t.n(l);function u(e){var a=e.data.markdownRemark,t=a.frontmatter,n=a.html;return r.a.createElement("div",null,r.a.createElement(c.a,null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:s.a.post},r.a.createElement("h1",{className:s.a.title},t.date?Object(i.a)(t.date)+" - ":"",t.title),r.a.createElement("div",{className:s.a.date},"published: ",Object(i.a)(t.publishedOn)),r.a.createElement("div",{className:s.a.author},"Author: ",t.author),r.a.createElement("div",{className:s.a.content,dangerouslySetInnerHTML:{__html:n}}))))}var o="2361283927"},169:function(e,a,t){var n;e.exports=(n=t(174))&&n.default||n},170:function(e,a,t){"use strict";function n(e){if(4==e.length)return e;function a(e){return e<10?"0"+e:e}return e instanceof Date||(e=new Date(e)),a(e.getUTCDate()+"."+a(e.getUTCMonth()+1)+"."+e.getUTCFullYear())}function r(e){e&&(window.location.href=e)}t.d(a,"a",function(){return n}),t.d(a,"b",function(){return r})},171:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(149),i=t.n(c);a.a=function(e){return r.a.createElement("div",{className:i.a.container+" "+e.className},e.providers.github?r.a.createElement("a",{href:e.providers.github,className:i.a.icon},r.a.createElement("i",{className:"fab fa-github"})):"",e.providers.twitter?r.a.createElement("a",{href:e.providers.twitter,className:i.a.icon},r.a.createElement("i",{className:"fab fa-twitter"})):"",e.providers.linkedin?r.a.createElement("a",{href:e.providers.linkedin,className:i.a.icon},r.a.createElement("i",{className:"fab fa-linkedin"})):"")}},172:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t(0);function r(){var e=Object(n.useState)(!1),a=e[0],t=e[1],r=function(e){e.currentTarget.pageYOffset>0?t(!0):t(!1)};return Object(n.useEffect)(function(){return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}),a}},173:function(e){e.exports={data:{site:{siteMetadata:{title:"kryptokrauts",founded:2004,links:{github:"https://github.com/kryptokrauts",twitter:"https://twitter.com/kryptokrauts"}}},allMenuYaml:{edges:[{node:{prefix:"kraut",label:"LOG",path:"/log"}},{node:{prefix:"kraut",label:"TIMELINE",path:"/timeline"}},{node:{prefix:"kraut",label:"LEXICON",path:"/lexicon"}},{node:{prefix:"kraut",label:"ACADEMY",path:null}}]}}}},174:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),c=t(4),i=t.n(c),l=t(55),s=t(2),u=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=u},175:function(e,a,t){"use strict";var n=t(173),r=t(0),c=t.n(r),i=t(4),l=t.n(i),s=(t(33),t(169),c.a.createContext({})),u=function(e){return c.a.createElement(s.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var o=t(176),m=t(172),d=t(147),f=t.n(d),p=t(170),v=t(148),E=t.n(v),h=function(e){return c.a.createElement("img",{onClick:function(){return Object(p.b)("/")},src:"/img/logo.svg",className:E.a.container+" "+e.className,alt:"logo"})},b=t(171);a.a=function(){var e=Object(m.a)(),a=Object(r.useState)(!1),t=a[0],i=a[1],l=function(){return i(!t)};return c.a.createElement(u,{query:"2435070319",render:function(a){var n=a.site.siteMetadata,r=a.allMenuYaml.edges.map(function(e){return e.node});return c.a.createElement("div",{className:f.a.header+" "+(e?f.a.scrolled:"")},c.a.createElement(o.Helmet,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"kryptokrauts.com")),c.a.createElement(h,null),c.a.createElement("div",{className:f.a.menu},r.map(function(e,a){return c.a.createElement("div",{key:a,className:f.a.menuItemContainer},e.path?"":c.a.createElement("div",{className:f.a.menuInactiveBadge},"coming soon"),c.a.createElement("a",{href:e.path,className:e.path?"":"inactive"},e.prefix,c.a.createElement("b",null,e.label)))})),c.a.createElement(b.a,{className:f.a.socialinfo,providers:n.links}),c.a.createElement("div",{className:f.a.menuMobileLauncher,onClick:l},c.a.createElement("i",{className:"fas fa-bars"})),c.a.createElement("div",{className:f.a.menuMobile+" "+(t?f.a.menuMobileActive:"")},r.map(function(e,a){return c.a.createElement("div",{key:a,className:f.a.menuItemContainer},e.path?"":c.a.createElement("div",{className:f.a.menuInactiveBadge},"coming soon"),c.a.createElement("a",{href:e.path,className:e.path?"":"inactive"},e.prefix,c.a.createElement("b",null,e.label)))})))},data:n})}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-8939b4b2984d1742c289.js.map