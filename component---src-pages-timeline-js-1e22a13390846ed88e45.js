(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{166:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(173),i=t(169),c=t(161),s=t.n(c),o=function(e){if(e.isFirst)return r.a.createElement("div",{className:s.a.container+" "+s.a.first+" "+e.className,title:"Today: "+Object(i.a)(new Date)},r.a.createElement("div",{className:s.a.icon},r.a.createElement("i",{className:"fas fa-calendar-day"})),r.a.createElement("div",{className:s.a.line}));var a=e.data.frontmatter;return r.a.createElement("div",{className:s.a.container+" "+e.className,onClick:function(){return Object(i.b)(a.path)}},a.thumbnail?r.a.createElement("div",{className:s.a.thumbnailContainer},r.a.createElement("img",{className:s.a.thumbnail,src:a.thumbnail,alt:""}),r.a.createElement("div",{className:s.a.thumbnailSource},"Image: ",a.thumbnailSource)):"",r.a.createElement("div",{className:s.a.icon},r.a.createElement("i",{className:a.icon||"fas fa-bell"})),r.a.createElement("div",{className:s.a.date},Object(i.a)(a.date)),r.a.createElement("div",{className:s.a.title},a.title),r.a.createElement("div",{className:s.a.line}))},u=t(162),m=t.n(u),d=function(e){return r.a.createElement("div",{className:m.a.container},r.a.createElement(o,{isFirst:!0}),e.data.map(function(e,a){return r.a.createElement(o,{data:e.node,key:a})}))};t.d(a,"query",function(){return f});a.default=function(e){var a=e.data;return r.a.createElement("div",null,r.a.createElement(l.a,null),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Timeline",r.a.createElement("a",{href:"/log/how-to-contribute",className:"timeline-contrib-info",title:"How to contribute?"},r.a.createElement("i",{className:"fas fa-info-circle"}))),r.a.createElement(d,{data:a.allMarkdownRemark.edges})))};var f="2771225995"},168:function(e,a,t){var n;e.exports=(n=t(172))&&n.default||n},169:function(e,a,t){"use strict";function n(e){function a(e){return e<10?"0"+e:e}return e instanceof Date||(e=new Date(e)),a(e.getUTCDate()+"."+a(e.getUTCMonth()+1)+"."+e.getUTCFullYear())}function r(e){e&&(window.location.href=e)}t.d(a,"a",function(){return n}),t.d(a,"b",function(){return r})},170:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(148),i=t.n(l);a.a=function(e){return r.a.createElement("div",{className:i.a.container+" "+e.className},e.providers.github?r.a.createElement("a",{href:e.providers.github,className:i.a.icon},r.a.createElement("i",{className:"fab fa-github"})):"",e.providers.twitter?r.a.createElement("a",{href:e.providers.twitter,className:i.a.icon},r.a.createElement("i",{className:"fab fa-twitter"})):"",e.providers.linkedin?r.a.createElement("a",{href:e.providers.linkedin,className:i.a.icon},r.a.createElement("i",{className:"fab fa-linkedin"})):"")}},171:function(e){e.exports={data:{site:{siteMetadata:{title:"kryptokrauts",founded:2004,links:{github:"https://github.com/kryptokrauts",twitter:"https://twitter.com/kryptokrauts"}}},allMenuYaml:{edges:[{node:{prefix:"kraut",label:"LOG",path:"/log"}},{node:{prefix:"kraut",label:"TIMELINE",path:"/timeline"}},{node:{prefix:"kraut",label:"LEXICON",path:"/lexicon"}},{node:{prefix:"kraut",label:"ACADEMY",path:null}}]}}}},172:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(55),s=t(2),o=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},173:function(e,a,t){"use strict";var n=t(7),r=t.n(n),l=t(171),i=t(0),c=t.n(i),s=t(4),o=t.n(s),u=(t(33),t(168),c.a.createContext({})),m=function(e){return c.a.createElement(u.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};var d=t(174),f=t(146),p=t.n(f),h=t(169),E=t(147),v=t.n(E),b=function(e){return c.a.createElement("img",{onClick:function(){return Object(h.b)("/")},src:"/img/logo.svg",className:v.a.container+" "+e.className,alt:"logo"})},N=t(170);t.d(a,"a",function(){return g});var g=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={scrolled:!1},a}r()(a,e);var t=a.prototype;return t.scrollHandler=function(e){e.currentTarget.pageYOffset>0?this.setState({scrolled:!0}):this.setState({scrolled:!1})},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler.bind(this))},t.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandler.bind(this))},t.headerRenderer=function(e){var a=e.site.siteMetadata,t=e.allMenuYaml.edges.map(function(e){return e.node});return c.a.createElement("div",{className:p.a.header+" "+(this.state.scrolled?p.a.scrolled:"")},c.a.createElement(d.Helmet,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"kryptokrauts.com")),c.a.createElement(b,null),c.a.createElement("div",{className:p.a.menu},t.map(function(e,a){return c.a.createElement("div",{key:a,className:p.a.menuItemContainer},e.path?"":c.a.createElement("div",{className:p.a.menuInactiveBadge},"coming soon"),c.a.createElement("a",{href:e.path,className:e.path?"":"inactive"},e.prefix,c.a.createElement("b",null,e.label)))})),c.a.createElement(N.a,{className:p.a.socialinfo,providers:a.links}))},t.render=function(){return c.a.createElement(m,{query:"2435070319",render:this.headerRenderer.bind(this),data:l})},a}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-timeline-js-1e22a13390846ed88e45.js.map