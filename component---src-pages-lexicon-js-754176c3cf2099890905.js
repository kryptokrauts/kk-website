(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(158),i=a.n(l),c=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],o=function(e){return r.a.createElement("div",{className:i.a.container},c.map(function(e){return r.a.createElement("a",{className:i.a.char,key:e,href:"#"+e.toLowerCase()},e)}))},s=a(174),u=a(159),m=a.n(u);function d(e){var t=e.data.markdownRemark.html;return r.a.createElement("div",null,r.a.createElement(s.a,null),r.a.createElement(o,null),r.a.createElement("div",{className:"content has-slider"},r.a.createElement("div",{className:m.a.lexiconContainer,dangerouslySetInnerHTML:{__html:t}})))}a.d(t,"default",function(){return d}),a.d(t,"pageQuery",function(){return f});var f="4030406514"},169:function(e,t,a){var n;e.exports=(n=a(173))&&n.default||n},170:function(e,t,a){"use strict";function n(e){function t(e){return e<10?"0"+e:e}return e instanceof Date||(e=new Date(e)),t(e.getUTCDate()+"."+t(e.getUTCMonth()+1)+"."+e.getUTCFullYear())}function r(e){e&&(window.location.href=e)}a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},171:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(149),i=a.n(l);t.a=function(e){return r.a.createElement("div",{className:i.a.container+" "+e.className},e.providers.github?r.a.createElement("a",{href:e.providers.github,className:i.a.icon},r.a.createElement("i",{className:"fab fa-github"})):"",e.providers.twitter?r.a.createElement("a",{href:e.providers.twitter,className:i.a.icon},r.a.createElement("i",{className:"fab fa-twitter"})):"",e.providers.linkedin?r.a.createElement("a",{href:e.providers.linkedin,className:i.a.icon},r.a.createElement("i",{className:"fab fa-linkedin"})):"")}},172:function(e){e.exports={data:{site:{siteMetadata:{title:"kryptokrauts",founded:2004,links:{github:"https://github.com/kryptokrauts",twitter:"https://twitter.com/kryptokrauts"}}},allMenuYaml:{edges:[{node:{prefix:"kraut",label:"LOG",path:"/log"}},{node:{prefix:"kraut",label:"TIMELINE",path:"/timeline"}},{node:{prefix:"kraut",label:"LEXICON",path:"/lexicon"}},{node:{prefix:"kraut",label:"ACADEMY",path:null}}]}}}},173:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},174:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(172),i=a(0),c=a.n(i),o=a(4),s=a.n(o),u=(a(33),a(169),c.a.createContext({})),m=function(e){return c.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};var d=a(175),f=a(147),p=a.n(f),h=a(170),v=a(148),E=a.n(v),b=function(e){return c.a.createElement("img",{onClick:function(){return Object(h.b)("/")},src:"/img/logo.svg",className:E.a.container+" "+e.className,alt:"logo"})},g=a(171);a.d(t,"a",function(){return N});var N=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={scrolled:!1,mobileMenuOpen:!1},t}r()(t,e);var a=t.prototype;return a.scrollHandler=function(e){e.currentTarget.pageYOffset>0?this.setState({scrolled:!0}):this.setState({scrolled:!1})},a.toggleMobileMenu=function(){var e=this;return function(){e.setState({mobileMenuOpen:!e.state.mobileMenuOpen})}},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler.bind(this))},a.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandler.bind(this))},a.headerRenderer=function(e){var t=e.site.siteMetadata,a=e.allMenuYaml.edges.map(function(e){return e.node});return c.a.createElement("div",{className:p.a.header+" "+(this.state.scrolled?p.a.scrolled:"")},c.a.createElement(d.Helmet,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"kryptokrauts.com")),c.a.createElement(b,null),c.a.createElement("div",{className:p.a.menu},a.map(function(e,t){return c.a.createElement("div",{key:t,className:p.a.menuItemContainer},e.path?"":c.a.createElement("div",{className:p.a.menuInactiveBadge},"coming soon"),c.a.createElement("a",{href:e.path,className:e.path?"":"inactive"},e.prefix,c.a.createElement("b",null,e.label)))})),c.a.createElement(g.a,{className:p.a.socialinfo,providers:t.links}),c.a.createElement("div",{className:p.a.menuMobileLauncher,onClick:this.toggleMobileMenu()},c.a.createElement("i",{className:"fas fa-bars"})),c.a.createElement("div",{className:p.a.menuMobile+" "+(this.state.mobileMenuOpen?p.a.menuMobileActive:"")},a.map(function(e,t){return c.a.createElement("div",{key:t,className:p.a.menuItemContainer},e.path?"":c.a.createElement("div",{className:p.a.menuInactiveBadge},"coming soon"),c.a.createElement("a",{href:e.path,className:e.path?"":"inactive"},e.prefix,c.a.createElement("b",null,e.label)))})))},a.render=function(){return c.a.createElement(m,{query:"2435070319",render:this.headerRenderer.bind(this),data:l})},t}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-lexicon-js-754176c3cf2099890905.js.map