(window.webpackJsonplesson2=window.webpackJsonplesson2||[]).push([[0],{31:function(e,t,n){e.exports=n(45)},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),o=n.n(r),i=n(15),l=n(30);function u(e){var t=e.data,n=(e.handleMenuItem,e.active),a=e.changeActive,r=t.title,o=t.link,l=t.icon;return c.a.createElement(i.b,{to:o,className:"menuItem"+(n?" active":""),onClick:a},c.a.createElement("div",{className:"iconfont icon-"+l}),c.a.createElement("div",{className:"name"},r))}n(40);function m(e){var t=e.menu,n=void 0===t?[]:t,r=(e.currentPath,Object(a.useState)(0)),o=Object(l.a)(r,2),i=o[0],m=o[1];return c.a.createElement("div",{className:"tabBar"},n.map((function(e,t){return c.a.createElement(u,{key:"menuItem"+t,data:e,active:i===t,changeActive:function(){return m(t)}})})))}n(41);var s=n(8),d=n(9),h=n(10),p=n(12),v=n(11),b=n(13),f=n(21),E=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.num,n=e.add,a=e.minus,r=e.asynAdd;return console.log("hah",this.props),c.a.createElement("div",null,c.a.createElement("p",null,t),c.a.createElement("button",{onClick:n},"+"),c.a.createElement("button",{onClick:a},"-"),c.a.createElement("button",{onClick:r},"asynAdd"))}}]),t}(a.Component),j=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Search")}}]),t}(a.Component),O=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"User")}}]),t}(a.Component);function k(){return c.a.createElement("div",null,"\u627e\u4e0d\u5230\u54e6")}var w=function(e){return c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:E}),c.a.createElement(s.a,{exact:!0,path:"/home",component:E}),c.a.createElement(s.a,{path:"/search",component:j}),c.a.createElement(s.a,{path:"/user",component:O}),c.a.createElement(s.a,{component:k}))},g=[{title:"\u9996\u9875",icon:"shouye",link:"/"},{title:"\u5206\u7c7b",icon:"fenlei",link:"/search"},{title:"\u6211\u7684",icon:"wode",link:"/user"}];function y(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"page"},c.a.createElement(w,null)),c.a.createElement(m,{menu:g}))}n(43),n(44);var C=function(){return c.a.createElement(i.a,null,c.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(14),A=n(28),I=n(29),x=n.n(I),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return console.log("omg"),e+1;case"minus":return e-1;default:return e}},J=Object(N.d)(Object(N.c)({home:B}),Object(N.a)(x.a,A.a)),S=function(){o.a.render(c.a.createElement(f.a,{store:J},c.a.createElement(C,null)),document.getElementById("root"))};S(),J.subscribe(S),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.8cce1df4.chunk.js.map