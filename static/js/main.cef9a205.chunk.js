(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),r=c(4),l=c(2),o=c(3),i=c.n(o),d=c(1),j=(c(13),c(14),c(6)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.onSelectTodo,s=e.isTodoSelected,a=e.selectedTodoId;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()({"has-text-danger":!e.completed},{"has-text-success":e.completed}),children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:u()({"far fa-eye-slash":a===e.id&&s},{"far fa-eye":!(a===e.id&&s)})})})})})]},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var O=function(e){var t=e.selectedOption,c=e.onSelectOption,a=e.query,n=e.onInputQuery;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return c(e.target.value)},children:[Object(b.jsx)("option",{value:s.ALL,children:"All"}),Object(b.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(b.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){return n(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]})};function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var x=function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})},p=function(e){var t=e.selectedTodo,c=e.isTodoSelected,s=e.setIsTodoSelected,a=Object(d.useState)(null),n=Object(l.a)(a,2),o=n[0],j=n[1],u=function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(null===t||void 0===t?void 0:t.userId)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.t0=j,e.next=6,c=null===t||void 0===t?void 0:t.userId,m("/users/".concat(c));case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 10:throw e.prev=10,e.t2=e.catch(2),new Error("User loading error");case 13:case"end":return e.stop()}var c}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){u()}),[]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),!o&&c&&Object(b.jsx)(x,{}),o&&c&&Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){j(null),s(!1)}})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(null===o||void 0===o?void 0:o.email),children:null===o||void 0===o?void 0:o.name})]})]})]})]})},f=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(s.ALL),o=Object(l.a)(n,2),j=o[0],u=o[1],f=Object(d.useState)(""),v=Object(l.a)(f,2),N=v[0],y=v[1],g=Object(d.useState)(null),k=Object(l.a)(g,2),T=k[0],S=k[1],w=Object(d.useState)(!1),C=Object(l.a)(w,2),E=C[0],L=C[1],I=function(){var e=Object(r.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("/todos");case 3:t=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Data loading error");case 9:e.t1=j,e.next=e.t1===s.ALL?12:e.t1===s.ACTIVE?13:e.t1===s.COMPLETED?15:17;break;case 12:return e.abrupt("break",18);case 13:return t=t.filter((function(e){return!e.completed})),e.abrupt("break",18);case 15:return t=t.filter((function(e){return e.completed})),e.abrupt("break",18);case 17:return e.abrupt("break",18);case 18:c=N.toLowerCase(),t=t.filter((function(e){return e.title.toLowerCase().includes(c)})),a(t);case 21:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){I()})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(O,{selectedOption:j,onSelectOption:function(e){u(e)},query:N,onInputQuery:function(e){y(e)}})}),Object(b.jsx)("div",{className:"block",children:c.length||N?Object(b.jsx)(h,{todos:c,onSelectTodo:function(e){S(e),L(!0)},isTodoSelected:E,selectedTodoId:null===T||void 0===T?void 0:T.id}):Object(b.jsx)(x,{})})]})})}),E&&Object(b.jsx)(p,{selectedTodo:T,isTodoSelected:E,setIsTodoSelected:L})]})};n.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cef9a205.chunk.js.map