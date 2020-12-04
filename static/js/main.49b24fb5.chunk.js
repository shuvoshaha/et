(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),a=n(7),i=n.n(a),o=(n(14),n(3)),u=n(8),j=n(6),l=function(e,t){switch(t.type){case"delete":return Object(j.a)(Object(j.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.id}))});case"AddItem":return{transactions:[t.AddTransanction].concat(Object(u.a)(e.transactions))};default:return e}},d=JSON.parse(localStorage.getItem("transaction")),b={transactions:d||[]},x=Object(s.createContext)(b),h=function(e){var t=e.children,n=Object(s.useReducer)(l,b),r=Object(o.a)(n,2),a=r[0],i=r[1];return Object(s.useEffect)((function(){localStorage.setItem("transaction",JSON.stringify(a.transactions))}),[a]),Object(c.jsx)(x.Provider,{value:{transactions:a.transactions,dispatch:i},children:t})},O=function(){var e=r.a.useContext(x).dispatch,t=r.a.useState(""),n=Object(o.a)(t,2),s=n[0],a=n[1],i=r.a.useState(""),u=Object(o.a)(i,2),j=u[0],l=u[1],d=(new Date).getDay();console.log(d);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Add new transaction"}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),document.getElementById("reset").reset();var n={id:Math.floor(1e3*Math.random()),text:s,amount:+j};e({type:"AddItem",AddTransanction:n})},id:"reset",children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{htmlFor:"text",children:"Text"}),Object(c.jsx)("input",{type:"text",placeholder:"Enter text...",onChange:function(e){return a(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(c.jsx)("br",{}),"(negative - expense, positive + income)"]}),Object(c.jsx)("input",{type:"text",placeholder:"Enter amount...",onChange:function(e){return l(e.target.value)}})]}),Object(c.jsx)("input",{type:"submit",className:"btn",value:"Add Transaction"})]})]})},m=function(){var e=Object(s.useContext)(x).transactions.map((function(e){return e.amount})),t=""!=e?e.reduce((function(e,t){return e+t})).toFixed(2):"0.00";return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{className:"balancer-title",children:"Your Balance"}),Object(c.jsxs)("p",{className:"balance",children:["\u09f3 ",t," "]})]})},f=function(){return Object(c.jsx)("h1",{className:"title",children:"Expense Tracker"})},p=function(){var e=Object(s.useContext)(x).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(c.jsxs)("div",{className:"inc-exp-container",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Income"}),Object(c.jsxs)("p",{id:"money-plus",className:"money plus",children:["\u09f3",t," "]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Expense"}),Object(c.jsxs)("p",{id:"money-minus",className:"money minus",children:["\u09f3",Math.abs(n)," "]})]})]})},v=function(e){var t=e.transaction,n=t.amount>0?"":"-",r=Object(s.useContext)(x).dispatch;return console.log(t.length),Object(c.jsx)("div",{children:Object(c.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text," ",Object(c.jsxs)("span",{children:[n," \u09f3",Math.abs(t.amount)]}),Object(c.jsx)("button",{onClick:function(){return r({type:"delete",id:t.id})},className:"delete-btn",children:"x"}),Object(c.jsx)("p",{children:"05-12-2020"})]})})},g=function(){var e=Object(s.useContext)(x).transactions;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"History"}),Object(c.jsx)("ul",{id:"list",className:"list",children:e.map((function(e){return Object(c.jsx)(v,{transaction:e},e.id)}))})]})};var y=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(h,{children:[Object(c.jsx)(f,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(m,{}),Object(c.jsx)(p,{}),Object(c.jsx)(O,{}),Object(c.jsx)(g,{})]})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),N()}},[[15,1,2]]]);
//# sourceMappingURL=main.49b24fb5.chunk.js.map