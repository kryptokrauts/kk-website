(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{AaZk:function(e,t,a){e.exports={container:"social-module--container--2-FKh",socialProvider:"social-module--social-provider--1ypMd"}},N4SA:function(e,t,a){e.exports={slider:"videoSlider-module--slider--2bnVs",sliderContent:"videoSlider-module--slider-content--32KQb",sliderItem:"videoSlider-module--slider-item--EPCi8",sliderItemLeft:"videoSlider-module--slider-item-left--k57u9",sliderItemRight:"videoSlider-module--slider-item-right--iBVOp",sliderControl:"videoSlider-module--slider-control--to-0d",sliderIndicator:"videoSlider-module--slider-indicator--2uUfq",sliderIndicatorActive:"videoSlider-module--slider-indicator-active--36z65"}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return y}));var r=a("q1tI"),n=a.n(r),i=a("LbRr"),o=a("GOuc"),l=a("AaZk"),c=a.n(l),s=function(e){var t=e.data;return n.a.createElement("div",{onClick:function(){return Object(o.b)(t.url,!0)},className:c.a.socialProvider},n.a.createElement("img",{src:t.logo}))},d=function(e){var t=e.className,a=e.providers;return n.a.createElement("div",{className:c.a.container+" "+t},a.map((function(e){return n.a.createElement(s,{key:e.url,data:e})})))},u=a("YRI7"),m=a.n(u),v=function(e){var t=e.data;if(!t)return n.a.createElement("div",null);var a=Object(r.useState)(!1),i=a[0],o=a[1],l=n.a.createRef(),c=function(){l.current.pause(),l.current.currentTime=0,o(!1)};return Object(r.useEffect)((function(){var e=l.current;return e.setAttribute("playsinline",!0),e.addEventListener("ended",c),function(){return e.removeEventListener("ended",c)}})),n.a.createElement("div",{className:m.a.container},n.a.createElement("div",{className:m.a.likes,title:"Likes"},n.a.createElement("div",{className:m.a.likesCounter},t.total_contribution_amount),n.a.createElement("div",{className:m.a.likesImage})),n.a.createElement("video",{ref:l,className:m.a.video,poster:t.poster_image},n.a.createElement("source",{src:t.video_url,type:"video/mp4"}),"Your browser does not support the video tag."),i?n.a.createElement("div",{className:m.a.control,onClick:c},n.a.createElement("i",{className:"far fa-pause-circle"})):n.a.createElement("div",{className:m.a.control,onClick:function(){l.current.play(),o(!0)}},n.a.createElement("i",{className:"far fa-play-circle"})))},f=a("N4SA"),p=a.n(f),E=function(e){var t=e.onClick,a=e.selected;return n.a.createElement("div",{onClick:t,className:a?p.a.sliderIndicator+" "+p.a.sliderIndicatorActive:p.a.sliderIndicator})},k=function(e){var t=e.items,a=e.active,r=e.onChange;return n.a.createElement("div",{className:p.a.sliderControl},t.map((function(e){return n.a.createElement(E,{key:e,selected:e===a,onClick:function(){return r(e)}})})))},h=function(e){var t=e.items,a=e.active,r=p.a.sliderItem+" "+p.a.sliderItemRight,i=p.a.sliderItem+" "+p.a.sliderItemLeft,o=function(e){return e<a?i:e>a?r:p.a.sliderItem};return n.a.createElement("div",{className:p.a.sliderContent},t.map((function(e,t){return n.a.createElement("div",{key:e.id+"-"+t,className:o(t)},n.a.createElement(v,{data:e}))})))},I=function(e){var t=e.videos,a=Object(r.useState)(0),i=a[0],o=a[1],l=t.map((function(e,t){return t}));return n.a.createElement("div",{className:p.a.slider},n.a.createElement(h,{items:t,active:i}),n.a.createElement(k,{items:l,active:i,onChange:o}))},y=(t.default=function(e){var t=e.data,a=Object(r.useState)([]),o=a[0],l=a[1];return Object(r.useEffect)((function(){fetch("https://api.kryptokrauts.com/pepo/v1/videos?limit=5").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),n.a.createElement("div",{className:"main-container"},n.a.createElement(i.a,null),n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"Community"),n.a.createElement(I,{videos:o}),n.a.createElement("h2",null,"Mission"),n.a.createElement("blockquote",null,n.a.createElement("p",null,"The goal of kryptokrauts is to create a knowledge platform for the crypto community - created by people and made for people. Currently the project is evolving and we are very curious about its future development. We encourage you to check out our ",n.a.createElement("a",{href:"/timeline"},"krautTIMELINE")," to which everybody is invited to contribute!"),n.a.createElement("p",null,"We have many ideas we want to bring to life and invite you to ",n.a.createElement("a",{href:"https://discord.gg/ZZTQgQb",target:"_blank",rel:"noopener noreferrer"},"join our discussion")," on Discord to play a part in the growth of kryptokrauts!")),n.a.createElement("h2",null,"Get Involved"),n.a.createElement(d,{providers:t.site.siteMetadata.links})))},"1130680243")},YRI7:function(e,t,a){e.exports={container:"videoItem-module--container--2T1e7",video:"videoItem-module--video--1fmcE",likes:"videoItem-module--likes--2vPnU",likesCounter:"videoItem-module--likes-counter--2VPhs",likesImage:"videoItem-module--likes-image--216wq",control:"videoItem-module--control--2doDq"}}}]);
//# sourceMappingURL=component---src-pages-index-js-9d903dd70db01cbe9a77.js.map