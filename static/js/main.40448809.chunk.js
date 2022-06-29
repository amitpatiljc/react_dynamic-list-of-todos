(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),s=n(4),a=n(3),o=n(2),i=n.n(o),u=n(1),l=(n(13),n(14),n(15),n(7)),d=n.n(l),j=n(0),p=function(e){var t=e.todos,n=e.onSelectHandler,c=Object(u.useState)(""),r=Object(a.a)(c,2),s=r[0],o=r[1],i=Object(u.useState)("all"),l=Object(a.a)(i,2),p=l[0],b=l[1],h=t.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}));return"all"!==p&&(h="completed"===p?h.filter((function(e){return e.completed})):h.filter((function(e){return!e.completed}))),Object(j.jsxs)("div",{className:"TodoList",children:[Object(j.jsx)("h2",{className:"title",children:"Todos"}),Object(j.jsx)("input",{type:"text","data-cy":"filterByTitle",placeholder:"search by title",value:s,onChange:function(e){return o(e.target.value)}}),Object(j.jsxs)("select",{value:p,onChange:function(e){return b(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Not Completed"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]}),Object(j.jsx)("div",{className:"TodoList__list-container",children:Object(j.jsx)("ul",{className:"TodoList__list",children:h.map((function(e){return Object(j.jsxs)("li",{className:d()("TodoList__item",{"TodoList__item--unchecked":!e.completed},{"TodoList__item--checked":e.completed}),children:[e.completed?Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",checked:!0}),Object(j.jsx)("p",{children:e.title})]}):Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox"}),Object(j.jsx)("p",{children:e.title})]}),Object(j.jsx)("button",{type:"button",className:" TodoList__user-button TodoList__user-button--selected button ","data-cy":"userButton",onClick:function(){return n(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))})})]})},b=function(e){return fetch("".concat("https://mate.academy/students-api").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},h=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/todos");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/users/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(n(17),function(e){var t=e.userId,n=e.onSelectHandler,c=Object(u.useState)(),r=Object(a.a)(c,2),o=r[0],l=r[1],d=function(){var e=Object(s.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,l(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){d()}),[t]),Object(j.jsxs)("div",{className:"CurrentUser",children:[Object(j.jsx)("h2",{className:"CurrentUser__title",children:Object(j.jsx)("span",{children:"Selected user: ".concat(t)})}),Object(j.jsx)("h3",{className:"CurrentUser__name",children:null===o||void 0===o?void 0:o.name}),Object(j.jsx)("p",{className:"CurrentUser__email",children:null===o||void 0===o?void 0:o.email}),Object(j.jsx)("p",{className:"CurrentUser__phone",children:null===o||void 0===o?void 0:o.phone}),Object(j.jsx)("button",{type:"button",className:"button",onClick:function(){return n(0)},children:"Clear"})]})}),m=(n(18),function(){var e=Object(u.useState)(0),t=Object(a.a)(e,2),n=t[0],c=t[1],r=Object(u.useState)([]),o=Object(a.a)(r,2),l=o[0],d=o[1],b=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){b()}),[]);var f=function(e){c(e)};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"App__sidebar",children:Object(j.jsx)(p,{todos:l,onSelectHandler:f})}),Object(j.jsx)("div",{className:"App__content",children:Object(j.jsx)("div",{className:"App__content-container",children:n?Object(j.jsx)(O,{userId:n,onSelectHandler:f}):"No user selected"})})]})});r.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.40448809.chunk.js.map