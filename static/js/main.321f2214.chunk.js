(this.webpackJsonptriventi=this.webpackJsonptriventi||[]).push([[0],{59:function(e,t,n){e.exports=n(92)},64:function(e,t,n){},65:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(53),o=n.n(c),i=(n(64),n(24)),l=n(37),u=n(98),s=(n(65),n(4)),m=n(94),d=n(26),p=n(8),E=n(38),f=n.n(E),h=n(97),b=n(58),g=n(13),O={isFetching:!1,questions:[],currentQuestionIdx:0,score:0,timer:0},v=function(e,t){switch(t.type){case"FETCH_TRIVIA_START":return Object(g.a)(Object(g.a)({},e),{},{isFetching:!0});case"FETCH_TRIVIA_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{isFetching:!1,questions:t.payload});case"FETCH_TRIVIA_FAILURE":var n=t.payload;return alert("There was an error fetching trivia: ".concat(n.message,". Please try again.")),Object(g.a)(Object(g.a)({},e),{},{isFetching:!1});case"INCREMENT_TIMER":return Object(g.a)(Object(g.a)({},e),{},{timer:e.timer+1});case"QUESTION_CORRECT":return Object(g.a)(Object(g.a)({},e),{},{currentQuestionIdx:e.currentQuestionIdx+1,score:e.score+1});case"QUESTION_INCORRECT":return Object(g.a)(Object(g.a)({},e),{},{currentQuestionIdx:e.currentQuestionIdx+1});default:throw new Error}},w=Object(a.createContext)(O),C=function(e){var t=e.children,n=Object(a.useReducer)(v,O),c=Object(p.a)(n,2),o=c[0],i=c[1];return r.a.createElement(w.Provider,{value:[o,i]},t)},I=function(){var e=Object(a.useContext)(w),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(s.f)(),i=function(){c({type:"FETCH_TRIVIA_START"});var e=[];f.a.get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&encode=url3986").then((function(t){var n=t.data.results;return e.push.apply(e,Object(d.a)(n)),f.a.get("https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple&encode=url3986")})).then((function(t){var n=t.data.results;return e.push.apply(e,Object(d.a)(n)),f.a.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple&encode=url3986")})).then((function(t){var n=t.data.results;e.push.apply(e,Object(d.a)(n)),c({type:"FETCH_TRIVIA_SUCCESS",payload:e}),o.push("/play")})).catch((function(e){c({type:"FETCH_TRIVIA_FAILURE",payload:e})}))};return r.a.createElement(r.a.Fragment,null,n.isFetching?r.a.createElement(b.a,null,"Loading trivia..."):r.a.createElement(h.a,{onClick:i},"Click me to fetch trivia"))},j=function(){return r.a.createElement("div",{id:"main-window"},r.a.createElement(m.a,{as:"h1",color:"white",margin:"1rem"},"Welcome to Triventi!"),r.a.createElement(I,null))},y=n(7),T=n(95),R=function(e){return Math.floor(e/10/60)},_=function(e){return String((e/10%60).toFixed(1)).padStart(4,"0")},k=function(){var e=Object(a.useContext)(w),t=Object(p.a)(e,2),n=t[0],c=t[1],o=n.timer,i=Object(a.useState)("0"),l=Object(p.a)(i,2),u=l[0],s=l[1],m=Object(a.useState)("00"),d=Object(p.a)(m,2),E=d[0],f=d[1];return Object(a.useEffect)((function(){var e=setInterval((function(){c({type:"INCREMENT_TIMER"}),s(R(o)),f(_(o))}),100);return function(){!1,clearInterval(e)}}),[o]),r.a.createElement(y.a,{rounded:"sm",borderWidth:"2px",background:"white",padding:".5rem",margin:"1rem",position:"absolute",top:"1rem",left:"93%",minWidth:"5rem"},r.a.createElement(T.a,{fontWeight:"bold"},"Time:"),r.a.createElement(T.a,{fontWeight:"bold"},u,":",E))},x=function(){var e=Object(a.useContext)(w),t=Object(p.a)(e,1)[0];return r.a.createElement(y.a,{rounded:"sm",borderWidth:"2px",background:"white",padding:".5rem",margin:"1rem",position:"absolute",top:"1rem",left:"1%",minWidth:"5rem"},r.a.createElement(T.a,{fontWeight:"bold"},"Score:"),r.a.createElement(T.a,{fontWeight:"bold"},t.score))},S=n(96),F=function(e){var t=e.category,n=e.question,a=e.options,c=e.checkAnswer;return r.a.createElement(y.a,{rounded:"lg",textAlign:"center",borderWidth:"2px",background:"white",padding:"2rem",width:"85vw"},r.a.createElement(m.a,{as:"h2",size:"xl"},decodeURIComponent(t)),r.a.createElement(S.a,{borderColor:"black.600"}),r.a.createElement(m.a,{as:"h3",size:"lg"},decodeURIComponent(n)),r.a.createElement("div",{className:"buttons"},r.a.createElement(h.a,{variantColor:"blue",display:"block",margin:"1rem auto",onClick:function(){return c(a[0])}},r.a.createElement(T.a,null,decodeURIComponent(a[0]))),r.a.createElement(h.a,{variantColor:"yellow",display:"block",margin:"1rem auto",onClick:function(){return c(a[1])}},r.a.createElement(T.a,null,decodeURIComponent(a[1]))),r.a.createElement(h.a,{variantColor:"pink",display:"block",margin:"1rem auto",onClick:function(){return c(a[2])}},r.a.createElement(T.a,null,decodeURIComponent(a[2]))),r.a.createElement(h.a,{variantColor:"teal",display:"block",margin:"1rem auto",onClick:function(){return c(a[3])}},r.a.createElement(T.a,null,decodeURIComponent(a[3])))))};F.defaultProps={category:"",question:"",options:["","","",""]};var U=F,A=function(){var e=Object(a.useContext)(w),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(s.f)(),i=n.currentQuestionIdx,l=n.questions[i]||{correct_answer:null,incorrect_answers:[null]},u=l||"",m=u.category,E=u.question;Object(a.useEffect)((function(){l.correct_answer||o.push("/triventi")}),[]);var f=Object(a.useState)([]),h=Object(p.a)(f,2),b=h[0],g=h[1],O=function(){o.push("/game-over")};Object(a.useEffect)((function(){i<30?function(){for(var e=[l.correct_answer].concat(Object(d.a)(l.incorrect_answers)),t=e.length-1;t>0;t-=1){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}g(e)}():O()}),[i]);return r.a.createElement("div",{id:"main-window"},r.a.createElement(x,null),r.a.createElement(k,{endGame:O}),r.a.createElement(U,{category:m,question:E,options:b,checkAnswer:function(e){e===l.correct_answer?(document.getElementById("main-window").classList.add("flash-correct"),setTimeout((function(){document.getElementById("main-window").classList.remove("flash-correct")}),300),c({type:"QUESTION_CORRECT"})):(document.getElementById("main-window").classList.add("flash-incorrect"),setTimeout((function(){document.getElementById("main-window").classList.remove("flash-incorrect")}),500),c({type:"QUESTION_INCORRECT"}))}}))},W=function(){var e=Object(s.f)(),t=Object(a.useContext)(w),n=Object(p.a)(t,1)[0],c=n.timer;return Object(a.useEffect)((function(){n.questions.length<1&&e.push("/triventi")}),[]),r.a.createElement("div",{id:"main-window"},r.a.createElement(m.a,{as:"h1",color:"white"},"Game Over"),r.a.createElement(T.a,{color:"white"},"You got ".concat(n.score," points in a time of ").concat(R(c),":").concat(_(c))))};var N=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/triventi",component:j}),r.a.createElement(s.a,{path:"/play",component:A}),r.a.createElement(s.a,{path:"/game-over",component:W}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null,r.a.createElement(l.a,null,r.a.createElement(i.a,null,r.a.createElement(u.a,null),r.a.createElement(N,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.321f2214.chunk.js.map