(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("LbRr"),i=a("GOuc"),o=a("AaZk"),l=a.n(o),s=function(e){var t=e.data;return r.a.createElement("div",{onClick:function(){return Object(i.b)(t.url)},className:l.a.socialProvider},r.a.createElement("img",{src:t.logo}))},u=function(e){var t=e.className,a=e.providers;return r.a.createElement("div",{className:l.a.container+" "+t},a.map((function(e){return r.a.createElement(s,{key:e.url,data:e})})))},m=a("YRI7"),d=a.n(m),v=function(e){var t=e.data;if(!t)return r.a.createElement("div",null);var a=Object(n.useState)(!1),c=a[0],i=a[1],o=r.a.createRef(),l=function(){o.current.pause(),o.current.currentTime=0,i(!1)};return Object(n.useEffect)((function(){var e=o.current;return e.setAttribute("playsinline",!0),e.addEventListener("ended",l),function(){return e.removeEventListener("ended",l)}})),r.a.createElement("div",{className:d.a.container},r.a.createElement("div",{className:d.a.likes,title:"Likes"},r.a.createElement("div",{className:d.a.likesCounter},t.total_contributors),r.a.createElement("div",{className:d.a.likesImage})),r.a.createElement("video",{ref:o,className:d.a.video,poster:t.poster_image},r.a.createElement("source",{src:t.video_url,type:"video/mp4"}),"Your browser does not support the video tag."),c?r.a.createElement("div",{className:d.a.control,onClick:l},r.a.createElement("i",{className:"far fa-pause-circle"})):r.a.createElement("div",{className:d.a.control,onClick:function(){o.current.play(),i(!0)}},r.a.createElement("i",{className:"far fa-play-circle"})))},f=a("N4SA"),p=a.n(f),E=function(e){var t=e.onClick,a=e.selected;return r.a.createElement("div",{onClick:t,className:a?p.a.sliderIndicator+" "+p.a.sliderIndicatorActive:p.a.sliderIndicator})},k=function(e){var t=e.items,a=e.active,n=e.onChange;return r.a.createElement("div",{className:p.a.sliderControl},t.map((function(e){return r.a.createElement(E,{key:e,selected:e===a,onClick:function(){return n(e)}})})))},h=function(e){var t=e.items,a=e.active,n=p.a.sliderItem+" "+p.a.sliderItemRight,c=p.a.sliderItem+" "+p.a.sliderItemLeft,i=function(e){return e<a?c:e>a?n:p.a.sliderItem};return r.a.createElement("div",{className:p.a.sliderContent},t.map((function(e,t){return r.a.createElement("div",{key:e.id+"-"+t,className:i(t)},r.a.createElement(v,{data:e}))})))},y=function(e){var t=e.videos,a=Object(n.useState)(0),c=a[0],i=a[1],o=t.map((function(e,t){return t}));return r.a.createElement("div",{className:p.a.slider},r.a.createElement(h,{items:t,active:c}),r.a.createElement(k,{items:o,active:c,onChange:i}))};a.d(t,"query",(function(){return b}));t.default=function(e){var t=e.data,a=Object(n.useState)([]),i=a[0],o=a[1];return Object(n.useEffect)((function(){fetch("https://api.kryptokrauts.com/pepo/v1/videos?limit=5").then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]),r.a.createElement("div",{className:"main-container"},r.a.createElement(c.a,null),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Community"),r.a.createElement(y,{videos:i}),r.a.createElement("h2",null,"Mission"),r.a.createElement("blockquote",null,r.a.createElement("p",null,"The goal of kryptokrauts is to create a knowledge platform for the crypto community - created by people and made for people. Currently the project is evolving and we are very curious about its future development. We encourage you to check out our ",r.a.createElement("a",{href:"/timeline"},"krautTIMELINE")," to which everybody is invited to contribute!"),r.a.createElement("p",null,"We have many ideas we want to bring to life and invite you to ",r.a.createElement("a",{href:"https://discord.gg/ZZTQgQb",target:"_blank",rel:"noopener noreferrer"},"join our discussion")," on Discord to play a part in the growth of kryptokrauts!")),r.a.createElement("h2",null,"Get Involved"),r.a.createElement(u,{providers:t.site.siteMetadata.links})))};var b="1387337984"}}]);
//# sourceMappingURL=component---src-pages-index-js-a9b59e4b5b9039c2ddd7.js.map