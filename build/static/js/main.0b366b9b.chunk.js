(this["webpackJsonpfacebook-messenger-clone"]=this["webpackJsonpfacebook-messenger-clone"]||[]).push([[0],{42:function(e,a,t){e.exports=t(66)},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(13),c=t.n(o),r=(t(47),t(28)),m=t(88),i=t(86),l=(t(48),t(87)),u=t(83),p=t(84),d=(t(49),Object(n.forwardRef)((function(e,a){var t=e.message,n=e.username===t.username;return s.a.createElement("div",{ref:a,className:"message ".concat(n&&"message__user")},s.a.createElement(l.a,{className:n?"message__userCard":"message__guestCard"},s.a.createElement(u.a,null,s.a.createElement(p.a,{color:"textSecondary",variant:"h5",component:"h2"},!n&&"".concat(t.username||"Unkow User",": ")," ",t.message))))}))),f=t(27),g=t.n(f),b=g.a.initializeApp({apiKey:"AIzaSyAgPmIc42O693bzLemDmj6QqDsT0Ubp-ns",authDomain:"facebook-messenger-clone-1db02.firebaseapp.com",databaseURL:"https://facebook-messenger-clone-1db02.firebaseio.com",projectId:"facebook-messenger-clone-1db02",storageBucket:"facebook-messenger-clone-1db02.appspot.com",messagingSenderId:"1035589381812",appId:"1:1035589381812:web:5a7335639fe9ac7cd8f1e1",measurementId:"G-KFWK22PH56"}).firestore(),h=t(39),E=t(38),v=t.n(E),k=t(85);var _=function(){var e=Object(n.useState)(""),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)([]),l=Object(r.a)(c,2),u=l[0],p=l[1],f=Object(n.useState)(""),E=Object(r.a)(f,2),_=E[0],w=E[1];return Object(n.useEffect)((function(){b.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){p(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(n.useEffect)((function(){w(prompt("Please enter your name"))}),[]),s.a.createElement("div",{className:"App"},s.a.createElement("img",{src:"https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"}),s.a.createElement("form",{className:"app__form"},s.a.createElement(m.a,{className:"app__formControl"},s.a.createElement(i.a,{className:"app__input",placeholder:"Enter a message...",value:t,onChange:function(e){return o(e.target.value)}}),s.a.createElement(k.a,{className:"app__iconButton",disabled:!t,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),b.collection("messages").add({message:t,username:_,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),o("")}},s.a.createElement(v.a,null)))),s.a.createElement(h.a,null,u.map((function(e){var a=e.id,t=e.message;return s.a.createElement(d,{key:a,username:_,message:t})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.0b366b9b.chunk.js.map