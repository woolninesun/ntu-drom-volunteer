(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,n){e.exports=n(275)},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},275:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),i=n.n(c),o=(n(136),n(19)),l=(n(137),n(138),n(284)),u=(n(139),n(281)),s=n(280),m=function(e){var t=e.isLoading,n=e.headerContent,a=e.rowDatas;return r.a.createElement("div",{className:"card-view"},r.a.createElement(u.a.Group,{centered:!0,doubling:!0},t?"":a.map(function(e,t){return r.a.createElement(u.a,{key:t,fluid:!0},r.a.createElement(u.a.Content,null,r.a.createElement(s.a,{definition:!0},r.a.createElement(s.a.Body,null,n.map(function(t,n){return r.a.createElement(s.a.Row,{key:n},r.a.createElement(s.a.Cell,{width:4},t),r.a.createElement(s.a.Cell,null,e[t]))})))))})))};m.defaultProps={isLoading:!1,headerContent:[],rowDatas:[]};var f=m;n(255);function d(e){return e&&e.$t?e.$t:""}function h(e){return e.map(function(e){var t={};return Object.keys(e).filter(function(e){return e.indexOf("gsx$")>-1}).forEach(function(n){var a=n.substring(4),r=d(e[n]);t[a]=r}),t})}var E=function(e){var t=e.worksheet,n=r.a.useState(!0),a=Object(o.a)(n,2),c=a[0],i=a[1],u=r.a.useState([]),s=Object(o.a)(u,2),m=s[0],d=s[1];return r.a.useEffect(function(){fetch(t.link).then(function(e){return e.json()}).then(function(e){i(!1),d(h(e.feed.entry))},function(e){})},[t]),r.a.createElement("div",{className:"data-view-tab"},r.a.createElement(l.a,{as:"h1",textAlign:"center",dividing:!0},t.title),r.a.createElement(f,{isLoading:c,headerContent:Object.keys(m[0]||{}),rowDatas:m}))},b=(n(256),n(282)),v=n(75),p=n(278),w=n(283),k=n(285),g=function(e){var t=e.title,n=e.tabMenuItems,a=e.linkMenuItems,c=r.a.useState(!1),i=Object(o.a)(c,2),u=i[0],s=i[1],m=function(){return s(!1)},f=r.a.useState(0),d=Object(o.a)(f,2),h=d[0],E=d[1],g=function(e,t){E(t.index),m()},y=r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.Item,{header:!0},t),n.map(function(e,t){return r.a.createElement(b.a.Item,{key:t,index:t,active:h===t,onClick:g,icon:!0},r.a.createElement(v.a,{name:"table"}),e.name)}),r.a.createElement(p.a,{horizontal:!0},r.a.createElement(l.a,{as:"h6"},"Links")),a.map(function(e,t){return r.a.createElement(b.a.Item,{key:t,icon:!0,as:"a",href:e.href,target:"__blank"},r.a.createElement(v.a,{name:"external alternate"}),e.name)})),j=function(e){return r.a.createElement(w.a,{className:"app-container"},n.map(function(t,n){return r.a.createElement(w.a.Column,{key:n,className:h===n?"":"hidden",floated:"right",width:e},t.panel)}))};return r.a.createElement(w.a,null,r.a.createElement(w.a.Row,{columns:1,only:"mobile tablet"},r.a.createElement(k.a.Pushable,{as:w.a.Column,className:"mobile-sidebar-container"},r.a.createElement(k.a,{as:b.a,vertical:!0,animation:"overlay",color:"blue",onHide:m,visible:u},y),r.a.createElement(k.a.Pusher,{dimmed:u},r.a.createElement(b.a,{borderless:!0,compact:!0,fixed:"left",size:"small"},r.a.createElement(b.a.Item,{className:"mobile-sidebar-toggle",onClick:function(){return s(!0)}},r.a.createElement(v.a,{fitted:!0,name:"sidebar"}))),j(15)))),r.a.createElement(w.a.Row,{columns:1,only:"computer"},r.a.createElement(k.a.Pushable,{as:w.a.Column,className:"computer-sidebar-container"},r.a.createElement(b.a,{vertical:!0,fixed:"left",pointing:!0,secondary:!0,color:"blue"},y),r.a.createElement(k.a.Pusher,null,j(13)))))},y={title:"",links:[]},j={attribute:"",content:""},O=new RegExp(/^\[(.+)\]\((.+)\)$/),C=function(){var e=r.a.useState(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],c=r.a.useState(""),i=Object(o.a)(c,2),l=i[0],u=i[1],s=r.a.useState(y),m=Object(o.a)(s,2),f=m[0],b=m[1],v=r.a.useState([]),p=Object(o.a)(v,2),w=p[0],k=p[1];return r.a.useEffect(function(){var e=function(e){var t=[];return e.forEach(function(e){var n=d(e.title),a=function(e,t){var n=e.find(function(e){return t.test(e.rel)});return n?"".concat(n.href,"?alt=json"):""}(e.link,/#listfeed/);""!==n&&""!==a&&("Settings"!==n?t.push({title:n,link:a}):fetch(a).then(function(e){return e.json()}).then(function(e){if(e&&e.feed&&e.feed.title&&e.feed.entry){var t=y;h(e.feed.entry).forEach(function(e){var n=Object.assign(j,e);if("title"===n.attribute&&(t.title=n.content),"links"===n.attribute){var a=n.content.match(O)||[];t.links.push({name:a[1],href:a[2]})}}),b(t)}},function(e){}))}),t},t=new URLSearchParams(window.location.search).get("sheetid")||"";if(""!==t){var n="feeds/worksheets/".concat(t,"/public/values?alt=json"),r="".concat("https://spreadsheets.google.com","/").concat(n);fetch(r).then(function(e){return e.json()}).then(function(t){t&&t.feed&&t.feed.title&&t.feed.entry&&(u(d(t.feed.title)),k(e(t.feed.entry)),a(!1))},function(e){})}},[]),r.a.createElement(r.a.Fragment,null,n?"":r.a.createElement(g,{title:f.title||l,tabMenuItems:w.map(function(e){return{name:e.title,panel:r.a.createElement(E,{worksheet:e})}}),linkMenuItems:f.links}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,1,2]]]);
//# sourceMappingURL=main.a8a1a4e2.chunk.js.map