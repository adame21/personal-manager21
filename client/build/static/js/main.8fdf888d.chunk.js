(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(0);t.default=function(){return Object(a.jsx)("div",{className:"text-center mt-5",children:Object(a.jsx)("h2",{children:"\u05e0\u05d9\u05d4\u05d5\u05dc \u05d9\u05d5\u05de\u05d9"})})}},function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(1),n=c(0);t.default=function(){var e={protein:"120",carbs:"230",fat:"80",calories:2120},t=Object(s.useState)(""),c=Object(a.a)(t,2),l=c[0],r=c[1],i=Object(s.useState)(""),o=Object(a.a)(i,2),j=o[0],d=o[1],m=Object(s.useState)(""),b=Object(a.a)(m,2),u=b[0],O=b[1],x=Object(s.useState)(""),v=Object(a.a)(x,2),h=v[0],f=v[1],N=Object(s.useState)(""),S=Object(a.a)(N,2),p=S[0],g=S[1],C=Object(s.useState)(""),I=Object(a.a)(C,2),w=I[0],y=I[1];function J(e,t){var c=localStorage.getItem("adamStats");(c=JSON.parse(c))[e]=t,localStorage.setItem("adamStats",JSON.stringify(c))}return Object(s.useEffect)((function(){var t,c=(new Date).setHours(0,0,0,0),a=localStorage.getItem("adamLastDate");a?(c>a?localStorage.setItem("adamStats",JSON.stringify(e)):localStorage.getItem("adamStats")||localStorage.setItem("adamStats",JSON.stringify(e)),t=localStorage.getItem("adamStats"),t=JSON.parse(t),r(t.protein),O(t.carbs),g(t.fat)):localStorage.setItem("adamLastDate",c)}),[]),Object(n.jsxs)("div",{className:"container text-center mt-5",dir:"rtl",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-2",children:"\u05d7\u05dc\u05d1\u05d5\u05df"}),Object(n.jsx)("div",{className:"col-2",children:l}),Object(n.jsx)("div",{className:"col-2",children:Object(n.jsx)("input",{pattern:"[0-9]*",type:"tel",name:"proteinConsumed",className:"form-control",value:j,onChange:function(e){d(e.target.value)}})}),Object(n.jsx)("div",{className:"col-2",children:Object(n.jsx)("button",{className:"btn btn-success",name:"protein",onClick:function(e){r(l-j),J("protein",l-j),d("")},children:"\u05e0\u05d0\u05db\u05dc"})})]}),Object(n.jsxs)("div",{className:"row mt-2",children:[Object(n.jsx)("div",{className:"col-2",children:"\u05e4\u05d7\u05de\u05d9\u05de\u05d4"}),Object(n.jsx)("div",{className:"col-2",children:u}),Object(n.jsx)("div",{className:"col-2",children:Object(n.jsx)("input",{pattern:"[0-9]*",type:"tel",name:"carbsConsumed",className:"form-control",value:h,onChange:function(e){f(e.target.value)}})}),Object(n.jsx)("div",{className:"col-2",children:Object(n.jsx)("button",{className:"btn btn-success",name:"carbs",onClick:function(e){O(u-h),J("carbs",u-h),f("")},children:"\u05e0\u05d0\u05db\u05dc"})})]}),Object(n.jsxs)("div",{className:"row mt-2",children:[Object(n.jsx)("div",{className:"col-2",children:"\u05e9\u05d5\u05de\u05df"}),Object(n.jsx)("div",{className:"col-2",children:p}),Object(n.jsx)("div",{className:"col-2",children:Object(n.jsx)("input",{pattern:"[0-9]*",type:"tel",name:"fatConsumed",className:"form-control",value:w,onChange:function(e){y(e.target.value)}})}),Object(n.jsx)("div",{className:"col-2",children:Object(n.jsx)("button",{className:"btn btn-success",name:"fat",onClick:function(e){g(p-w),J("fat",p-w),y("")},children:"\u05e0\u05d0\u05db\u05dc"})})]}),Object(n.jsxs)("div",{className:"row mt-2",children:[Object(n.jsx)("div",{className:"col-2",children:"\u05e7\u05dc\u05d5\u05e8\u05d9\u05d5\u05ea"}),Object(n.jsx)("div",{className:"col-2",children:4*l+4*u+9*p})]})]})}},function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(4),l=c.n(n),r=(c(9),c(0)),i=c(11).default,o=c(12).default;var j=function(){return Object(r.jsxs)("div",{className:"App text-center",children:[Object(r.jsx)(i,{}),Object(r.jsx)(o,{})]})};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.8fdf888d.chunk.js.map