(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],{25:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(18),r=c.n(s),a=c(4),o=c(8),j=c(2),u=(c(25),c(0)),p=function(){return Object(u.jsxs)("div",{id:"home-page",children:[Object(u.jsx)("h1",{children:"Kingdom of Games"}),Object(u.jsx)("div",{id:"shop-link-container",children:Object(u.jsx)(o.b,{to:"/Shop",children:"Go to the shop\u2192 "})}),Object(u.jsxs)("div",{id:"info",children:[Object(u.jsx)("p",{children:"-Get your gaming components from the best online shop!"}),Object(u.jsx)("p",{children:"-Fast delivery to any place in the world with a perfect state."}),Object(u.jsx)("p",{children:"-Supports +10 E-commerce payment systems."})]})]})},b=(c(32),function(e){return Object(u.jsxs)("nav",{children:[Object(u.jsx)(o.b,{id:"home-anchor",to:"/Shopping-Cart",children:"Home"}),Object(u.jsx)(o.b,{id:"shop-anchor",to:"/Shopping-Cart/Shop",children:"Shop"}),Object(u.jsxs)(o.b,{id:"bag-anchor",to:"/Shopping-Cart/Purchases",children:["Purchases (",e.items,")"," "]})]})}),h=(c(33),function(e){var t=Object(n.useState)("Buy"),c=Object(a.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)({display:"none"}),o=Object(a.a)(r,2),j=o[0],p=o[1],b=Object(n.useState)({display:"block"}),h=Object(a.a)(b,2),d=h[0],l=h[1],O=Object(n.useState)({display:"0"}),m=Object(a.a)(O,2),g=m[0],x=m[1],f=Object(n.useState)(1),v=Object(a.a)(f,2),S=v[0],y=v[1];return Object(n.useEffect)((function(){p("Buy"===i?{display:"none"}:{display:"flex"})}),[i]),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("img",{src:"/Shopping-Cart/images/"+e.img+".jpg",alt:e.img,onClick:function(){return window.open("/Shopping-Cart/images/"+e.img+".jpg","_blank")},style:g,onLoad:function(){l({display:"none"}),x({opacity:"1"})}}),Object(u.jsx)("img",{style:d,className:"loading",src:"/Shopping-Cart/images/loading.svg",alt:"loading"}),Object(u.jsxs)("div",{className:"buy-input",style:j,children:[Object(u.jsxs)("div",{className:"items-count",children:[Object(u.jsx)("div",{onClick:function(){y(S<=0||!S?0:function(e){return e-1})},className:"minus",children:"-"}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{onChange:function(e){var t=parseInt(e.target.value);t.isNaN&&(t=0),y(t)},type:"number",value:S})}),Object(u.jsx)("div",{onClick:function(){y(S?function(e){return e+1}:1)},className:"plus",children:"+"})]}),Object(u.jsx)("div",{className:"bought",children:"1 item."}),Object(u.jsxs)("div",{className:"total-cost",children:["Total:"," ",S?S*e.price:0,"$."]})]})]}),Object(u.jsx)("div",{className:"description",children:e.description}),Object(u.jsxs)("div",{className:"cost",children:["Price: ",e.price,"$"]}),Object(u.jsx)("div",{className:"buy-button",onClick:function(t){"Buy"===t.target.textContent?s("Confirm"):(s("Buy"),e.bought(e.description,e.price,S))},children:i})]})}),d=(c(34),function(e){var t=Object(n.useState)(e.purchases),c=Object(a.a)(t,2),i=c[0],s=c[1],r=function(t,c,n){var r=i;n>0?(r.set(t,[Number(c),n]),s(r),e.purchasesParent(r)):(r.delete(t),e.purchasesParent(r))};return Object(u.jsxs)("main",{children:[Object(u.jsx)(h,{description:"Gaming Pc",img:"case",price:"1500",bought:r}),Object(u.jsx)(h,{description:"Asus RoG gaming laptop",img:"laptop",price:"1200",bought:r}),Object(u.jsx)(h,{description:"RGB keyboard",img:"keyboard",price:"50",bought:r}),Object(u.jsx)(h,{description:"Gaming mouse",img:"mouse",price:"40",bought:r}),Object(u.jsx)(h,{description:"144hz monitor",img:"monitor",price:"600",bought:r}),Object(u.jsx)(h,{description:"Gaming headphone",img:"headphone",price:"100",bought:r}),Object(u.jsx)(h,{description:"Gaming chair",img:"chair",price:"500",bought:r}),Object(u.jsx)(h,{description:"vr headset",img:"vr",price:"1000",bought:r})]})}),l=c(20),O=(c(35),c(36),function(e){var t=Object(n.useState)(Object(u.jsxs)("div",{className:"cart-card",children:[Object(u.jsxs)("h3",{children:["Product name: ",e.name]}),Object(u.jsxs)("p",{children:["Price: ",e.price]}),Object(u.jsxs)("p",{children:["Amount: ",e.amount]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("p",{children:["Total: ",e.amount*e.price,"$"]}),Object(u.jsx)("p",{onClick:function(){e.remove(e.name,e.price*e.amount),s(Object(u.jsx)(u.Fragment,{}))},children:"Cancel"})]})),c=Object(a.a)(t,2),i=c[0],s=c[1];return Object(u.jsx)(u.Fragment,{children:i})}),m=function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(0),o=Object(a.a)(r,2),j=o[0],p=o[1],b=function(t,c){e.remove(t),p((function(e){return e-c}))};return Object(n.useEffect)((function(){s((function(e){return[]})),p((function(e){return 0})),console.log(e.purchases),e.purchases.forEach((function(e,t){var c=Object(a.a)(e,2),n=c[0],i=c[1];s((function(e){return[].concat(Object(l.a)(e),[Object(u.jsx)(O,{remove:b,name:t,price:n,amount:i},t)])})),p((function(e){return e+n*i}))}))}),[e]),Object(u.jsxs)("div",{id:"shopping-cart",children:[i,Object(u.jsxs)("div",{className:"check-out",children:["Total cost: ",j,"$",Object(u.jsx)("div",{onClick:function(){s([]),p(0),e.purchasesParent(new Map)},children:"Check out"})]})]})},g=(c(37),new Map(JSON.parse(localStorage.getItem("purchasesMap"))));null===g&&(g=new Map);var x=function(){var e=Object(n.useState)(g),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(0),r=Object(a.a)(s,2),h=r[0],l=r[1],O=Object(n.useState)(""),x=Object(a.a)(O,2),f=x[0],v=x[1],S=function(e){i(e),v(JSON.stringify(Array.from(e.entries()))),localStorage.setItem("purchasesMap",JSON.stringify(Array.from(e.entries())))};return Object(n.useEffect)((function(){l(c.size)}),[f]),Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{id:"app",children:[Object(u.jsx)(b,{items:h}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/Shopping-Cart/",children:Object(u.jsx)(p,{})}),Object(u.jsx)(j.a,{exact:!0,path:"/Shopping-Cart/Shop",children:Object(u.jsx)(d,{purchases:c,purchasesParent:S})}),Object(u.jsx)(j.a,{exact:!0,path:"/Shopping-Cart/Purchases",children:Object(u.jsx)(m,{purchases:c,purchasesParent:S,remove:function(e){var t=c;t.delete(e),i(t),localStorage.setItem("purchasesMap",JSON.stringify(Array.from(t.entries()))),v(JSON.stringify(Array.from(c.entries())))}})})]})]})})},f=(c(38),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))});r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),f()}},[[39,1,2]]]);
//# sourceMappingURL=main.90975ea4.chunk.js.map