(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o}),a.d(t,"pageQuery",function(){return u});var n=a(0),r=a.n(n),l=a(165),i=a(160),c=a(148),s=a.n(c);function o(e){var t=e.data.markdownRemark,a=t.frontmatter,n=t.html;return r.a.createElement("div",null,r.a.createElement(l.a,null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:s.a.post},r.a.createElement("h1",{className:s.a.title},a.date?Object(i.a)(a.date)+": ":"",a.title),r.a.createElement("div",{className:s.a.date},"published: ",Object(i.a)(a.publishedOn)),r.a.createElement("div",{className:s.a.author},"Author: ",a.author),r.a.createElement("div",{className:s.a.content,dangerouslySetInnerHTML:{__html:n}}))))}var u="2361283927"},160:function(e,t,a){"use strict";function n(e){return e instanceof Date||(e=new Date(e)),e.toLocaleDateString()}function r(e){e&&(window.location.href=e)}a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},161:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},162:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(146),i=a.n(l);t.a=function(e){return r.a.createElement("div",{className:i.a.container+" "+e.className},e.providers.github?r.a.createElement("a",{href:e.providers.github,className:i.a.icon},r.a.createElement("i",{className:"fab fa-github"})):"",e.providers.twitter?r.a.createElement("a",{href:e.providers.twitter,className:i.a.icon},r.a.createElement("i",{className:"fab fa-twitter"})):"",e.providers.linkedin?r.a.createElement("a",{href:e.providers.linkedin,className:i.a.icon},r.a.createElement("i",{className:"fab fa-linkedin"})):"")}},163:function(e){e.exports={data:{site:{siteMetadata:{title:"kryptokrauts",founded:2004,links:{github:"https://github.com/kryptokrauts",twitter:"https://twitter.com/kryptokrauts"}}},allMenuYaml:{edges:[{node:{prefix:"kraut",label:"TIMELINE",path:"/timeline"}},{node:{prefix:"kraut",label:"LOG",path:null}},{node:{prefix:"kraut",label:"LEXICON",path:null}},{node:{prefix:"kraut",label:"ACADEMY",path:null}}]}}}},164:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},165:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(163),i=a(0),c=a.n(i),s=a(4),o=a.n(s),u=(a(33),a(161),c.a.createContext({})),d=function(e){return c.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};var m=a(166),f=a(144),p=a.n(f),h=a(160),v=a(145),E=a.n(v),b=function(e){return c.a.createElement("img",{onClick:function(){return Object(h.b)("/")},src:"/img/logo.svg",className:E.a.container+" "+e.className,alt:"logo"})},g=a(162);a.d(t,"a",function(){return N});var N=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={scrolled:!1},t}r()(t,e);var a=t.prototype;return a.scrollHandler=function(e){e.currentTarget.pageYOffset>0?this.setState({scrolled:!0}):this.setState({scrolled:!1})},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler.bind(this))},a.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandler.bind(this))},a.headerRenderer=function(e){var t=e.site.siteMetadata,a=e.allMenuYaml.edges.map(function(e){return e.node});return c.a.createElement("div",{className:p.a.header+" "+(this.state.scrolled?p.a.scrolled:"")},c.a.createElement(m.Helmet,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"kryptokrauts.com")),c.a.createElement(b,null),c.a.createElement("div",{className:p.a.menu},a.map(function(e,t){return c.a.createElement("div",{key:t,className:p.a.menuItemContainer},e.path?"":c.a.createElement("div",{className:p.a.menuInactiveBadge},"coming soon"),c.a.createElement("a",{href:e.path,className:e.path?"":"inactive"},e.prefix,c.a.createElement("b",null,e.label)))})),c.a.createElement(g.a,{className:p.a.socialinfo,providers:t.links}))},a.render=function(){return c.a.createElement(d,{query:"2435070319",render:this.headerRenderer.bind(this),data:l})},t}(i.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-c8e9a93a86c01d313617.js.map