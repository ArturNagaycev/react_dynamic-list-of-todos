(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(4),l=c(2),o=c(3),r=c.n(o),i=c(1),d=(c(13),c(14),c(6)),j=c.n(d),u=c(0),b=function(e){var t=e.todos,c=e.onSelectTodo,s=e.isTodoSelected,a=e.selectedTodoId;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(u.jsx)("td",{className:"is-vcentered",children:e.id}),Object(u.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-danger":!e.completed},{"has-text-success":e.completed}),children:e.title})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()({"far fa-eye-slash":a===e.id&&s},{"far fa-eye":!(a===e.id&&s)})})})})})]},e.id)}))})]})},h=function(e){var t=e.selectedOption,c=e.onSelectOption,s=e.query,a=e.onInputQuery;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return c(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})};function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var O=function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})},x=function(e){var t=e.selectedTodo,c=e.isTodoSelected,s=e.setIsTodoSelected,a=Object(i.useState)(null),o=Object(l.a)(a,2),d=o[0],j=o[1],b=function(){var e=Object(n.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(null===t||void 0===t?void 0:t.userId)){e.next=2;break}return e.abrupt("return");case 2:return e.t0=j,e.next=5,c=null===t||void 0===t?void 0:t.userId,m("/users/".concat(c));case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){b()})),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),!d&&c&&Object(u.jsx)(O,{}),d&&c&&Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){j(null),s(!1)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(null===d||void 0===d?void 0:d.email),children:null===d||void 0===d?void 0:d.name})]})]})]})]})},f=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)("all"),o=Object(l.a)(a,2),d=o[0],j=o[1],f=Object(i.useState)(""),p=Object(l.a)(f,2),v=p[0],N=p[1],y=Object(i.useState)(null),g=Object(l.a)(y,2),k=g[0],S=g[1],T=Object(i.useState)(!1),w=Object(l.a)(T,2),I=w[0],C=w[1],_=function(){var e=Object(n.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/todos");case 2:t=e.sent,e.t0=d,e.next="all"===e.t0?6:"active"===e.t0?7:"completed"===e.t0?9:11;break;case 6:return e.abrupt("break",12);case 7:return t=t.filter((function(e){return!e.completed})),e.abrupt("break",12);case 9:return t=t.filter((function(e){return e.completed})),e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:t=t.filter((function(e){return e.title.toLowerCase().includes(v.toLowerCase())})),s(t);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){_()})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{selectedOption:d,onSelectOption:function(e){j(e)},query:v,onInputQuery:function(e){N(e)}})}),Object(u.jsx)("div",{className:"block",children:c.length||v?Object(u.jsx)(b,{todos:c,onSelectTodo:function(e){S(e),C(!0)},isTodoSelected:I,selectedTodoId:null===k||void 0===k?void 0:k.id}):Object(u.jsx)(O,{})})]})})}),I&&Object(u.jsx)(x,{selectedTodo:k,isTodoSelected:I,setIsTodoSelected:C})]})};a.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e87b52cc.chunk.js.map