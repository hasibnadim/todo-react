(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(43),r=n.n(a),i=(n(61),n(40)),s=n(12),d=n(9),l=(n(62),n(3));function j(){return Object(l.jsx)("header",{children:Object(l.jsx)("span",{className:"logo",children:"TODO"})})}var u=n(50),b=n.n(u),O=n(49),f=n.n(O),g=n(84),x=n(51),h=n.n(x);function m(e){var t=e.atodo,n=e.doneToggle,c=e.deleteHandeler;return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)(g.a,{onClick:function(){return n(t.index)},color:"secondary","aria-label":"delete",size:"large",children:t.done?Object(l.jsx)(f.a,{color:"success"}):Object(l.jsx)(b.a,{color:"action"})}),Object(l.jsx)("p",{children:t.name}),Object(l.jsx)(g.a,{onClick:function(){return c(t.index)},color:"secondary","aria-label":"delete",size:"large",children:Object(l.jsx)(h.a,{fontSize:"inherit"})})]})}var v=n(85);function p(e){var t=e.newTodoHandel,n=Object(c.useState)(""),o=Object(d.a)(n,2),a=o[0],r=o[1];return Object(l.jsx)("div",{className:"new_todo_div",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.length>1&&(t(a),r(""))},children:[Object(l.jsx)("input",{type:"text",placeholder:"New Todo",name:"newtodo",value:a,onChange:function(e){return r(e.target.value)},id:"newtodo"}),Object(l.jsx)("div",{className:"btn",children:Object(l.jsx)(v.a,{type:"submit",variant:"contained",children:"Add"})})]})})}var S=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],o=t[1],a=function(e){console.log(e),n[e]={done:!n[e].done,name:n[e].name},localStorage.setItem("todos",JSON.stringify(n)),o(Object(s.a)(n))},r=function(e){var t=n.filter((function(t,n){return n!==e}));localStorage.setItem("todos",JSON.stringify(t)),o(Object(s.a)(t))};return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos"));o(e||[])}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(p,{newTodoHandel:function(e){e={done:!1,name:e},localStorage.setItem("todos",JSON.stringify([e].concat(Object(s.a)(n)))),o([e].concat(Object(s.a)(n)))}}),n.length>0?n.map((function(e,t){return Object(l.jsx)(m,{atodo:Object(i.a)(Object(i.a)({},e),{},{index:t}),doneToggle:a,deleteHandeler:r},t)})):Object(l.jsx)("p",{className:"no_todo_style",children:"Wow! Now I am free\ud83d\ude0e "})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),N()}},[[69,1,2]]]);
//# sourceMappingURL=main.a5a9e9b9.chunk.js.map