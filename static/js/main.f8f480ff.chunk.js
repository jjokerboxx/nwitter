(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r,o,c,a=n(3),i=n.n(a),s=n(60),b=n.n(s),d=n(13),l=n(42),u=n(20),j=n(10),p=n(16),x=n(71),O=n(41),f=n(44),h=(Object(x.a)({apiKey:"AIzaSyDQfpzAy2sHeCD78F6JMp35qlueE0x76us",authDomain:"nwitter-60857.firebaseapp.com",projectId:"nwitter-60857",storageBucket:"nwitter-60857.appspot.com",messagingSenderId:"250110002373",appId:"1:250110002373:web:638c93c421ce7423ad9cac"}),Object(O.c)()),g=Object(f.b)(),m=n(26),v=n(0),w=n.n(v),k=n(1),y=n(17),S=n(31),C=Object(S.b)({key:"writeOpenState",default:!1}),F=Object(S.b)({key:"deleteState",default:!1}),N=n(9),z=y.a.div(r||(r=Object(p.a)(['\n  position: relative;\n  word-wrap: "break-word";\n  background-color: ',';\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  /* border: "none"; */\n  border-radius: 10px;\n  padding: 10px;\n  margin: 30px;\n  outline-style: none;\n  resize: none;\n  width: 250px;\n  height: 150px;\n'])),(function(e){return e.postObj.color})),A=function(e){var t=e.postObj,n=e.isOwner,r=(Object(u.f)(),Object(S.c)(F)),o=Object(d.a)(r,2),c=(o[0],o[1]),a=function(){var e=Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.c)(Object(m.d)(g,"Post",t.id));case 2:c((function(e){return!e})),console.log("delete doc",t.id);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(k.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(m.d)(g,"Post",t.id),e.next=3,Object(m.i)(n,{like:t.like+1});case 3:console.log("like doc",t.id);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=new Date(t.uploadedAt);"".concat(s.getMonth()+1,", ").concat(s.getDate(),", ").concat(s.getFullYear());return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(z,{postObj:t,children:[n&&Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{children:Object(N.jsx)("button",{style:{position:"absolute",marginBottom:5,right:"10px",border:"none",backgroundColor:t.color,color:"white"},onClick:a,children:"\u2716"})})}),Object(N.jsx)("div",{style:{width:220},id:t.id,children:Object(N.jsx)("span",{children:t.contents})}),Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{children:Object(N.jsx)("button",{style:{position:"absolute",marginBottom:5,right:"10px",top:"40px",border:"none",backgroundColor:t.color,color:"white"},onClick:i,children:Object(N.jsxs)("b",{children:["\ud83d\udc4d\ud83c\udffb ",0!=t.like&&t.like]})})})})]})})},D=(n(91),n(95)),P=n(97),I=n(96),q=function(e){var t=e.color;return Object(N.jsx)("div",{id:t,className:"colorButton",style:{backgroundColor:t},onClick:function(e){var t=e.target.id,n=document.querySelector(".post"),r=document.querySelector(".postIt");n.animate({backgroundColor:t},{duration:400,fill:"forwards"}),r.animate({backgroundColor:t},{duration:400,fill:"forwards"}),setTimeout((function(){n.style.backgroundColor=t,r.style.backgroundColor=t}),100)}})},B=Object(y.a)(D.a.div)(o||(o=Object(p.a)(["\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n"]))),E=Object(y.a)(D.a.div)(c||(c=Object(p.a)(["\n  z-index: 1001;\n  border-radius: 15px !important;\n  overflow: auto !important;\n  top: ","px;\n  position: absolute;\n  width: 800px;\n\n  height: 60%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: white;\n"])),(function(e){return e.scrollY.get()+100}));var L,T,M,Y,H,J,G,K,Q,R,W,U,V,X=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(d.a)(n,2),o=r[0],c=r[1],i=Object(a.useState)([]),s=Object(d.a)(i,2),b=(s[0],s[1],Object(a.useState)(!1)),l=Object(d.a)(b,2),u=(l[0],l[1],Object(S.c)(C)),j=Object(d.a)(u,2),p=(j[0],j[1]),x=function(){var e=Object(k.a)(w.a.mark((function e(n){var r,a,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=document.querySelector(".postIt"),a={contents:o,uploadedAt:Date.now(),author:t.uid,color:r.style.backgroundColor,like:0},e.next=5,Object(m.a)(Object(m.b)(g,"Post"),a);case 5:i=e.sent,console.log("Document written with ID: ",i.id),document.querySelector(".post").value="",c(""),p(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=Object(P.a)().scrollY;return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(I.a,{children:[Object(N.jsx)(B,{onClick:function(){p((function(e){return!e}))},animate:{opacity:1},exit:{opacity:0}}),Object(N.jsx)(E,{scrollY:O,children:Object(N.jsx)("div",{style:{flex:1,marginTop:70},children:Object(N.jsxs)("form",{className:"postForm",children:[Object(N.jsxs)("div",{className:"postIt",style:{backgroundColor:"#ffd359"},children:[Object(N.jsx)("textarea",{style:{marginTop:"10px"},className:"post",cols:30,rows:7,value:o,onChange:function(e){var t=e.target.value;c(t)},placeholder:"What's on your mind?",maxLength:140}),Object(N.jsx)("div",{className:"colorPalette",children:["#ffd359","#e2ff3d","#ff8547","#44ccff","#ff8adc"].map((function(e){return Object(N.jsx)(q,{color:e})}))})]}),Object(N.jsx)("button",{className:"defaultButton",onClick:x,children:"Post!"})]})})})]})})},Z=y.a.div(L||(L=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n"]))),$=y.a.button(T||(T=Object(p.a)(['\n  cursor: pointer;\n  width: 100px;\n  border: none;\n  color: white;\n  background-color: orange;\n  padding: 5px;\n  font-size: 15px;\n  border-radius: 10px;\n  margin: 10px;\n  font-family: "SpoqaHanSansNeo";\n']))),_=y.a.div(M||(M=Object(p.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 300px;\n"]))),ee=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(d.a)(n,2),o=(r[0],r[1],Object(a.useState)([])),c=Object(d.a)(o,2),i=c[0],s=c[1],b=Object(a.useState)(!1),l=Object(d.a)(b,2),u=l[0],p=l[1],x=Object(S.c)(C),O=Object(d.a)(x,2),f=O[0],h=O[1];return Object(a.useEffect)((function(){var e="uploadedAt";console.log(e);var t=Object(m.h)(Object(m.b)(g,"Post"),Object(m.g)(e,"desc"));Object(m.f)(t,(function(e){var t=e.docs.map((function(e){return Object(j.a)({id:e.id},e.data())}));s(t)}));console.log("isSorted",u)}),[u]),Object(a.useEffect)((function(){}),[]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(_,{children:[Object(N.jsxs)("button",{className:"defaultButton",onClick:function(){p((function(e){return!e})),console.log(u)},children:["Sort by ",u?"Time":"Like"]}),Object(N.jsx)($,{onClick:function(){h((function(e){return!e}))},children:"\uc0c8 \uae00 \uc791\uc131\ud558\uae30"})]}),Object(N.jsxs)("div",{className:"flexContainer",children:[f&&Object(N.jsx)(X,{userObj:t}),Object(N.jsx)(Z,{children:i.sort((function(e,t){return u?t.like-e.like:t.uploadedAt-e.uploadedAt})).map((function(e){return Object(N.jsx)(A,{postObj:e,isOwner:t.uid===e.author},e.id)}))})]})]})},te=y.a.div(Y||(Y=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n"]))),ne=function(e){var t=e.userObj,n=t.uid;console.log(n);var r=Object(a.useState)([]),o=Object(d.a)(r,2),c=o[0],i=o[1],s=Object(S.c)(F),b=Object(d.a)(s,2),l=b[0];b[1];return Object(a.useEffect)((function(){var e=Object(f.e)(Object(f.a)(g,"Post"),Object(f.f)("author","==",n),Object(f.d)("uploadedAt","desc"));Object(f.c)(e,(function(e){var t=e.docs.map((function(e){return Object(j.a)({id:e.id},e.data())}));i(t)}))}),[l]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("b",{style:{marginLeft:40,fontSize:"20px"},children:"\ub0b4\uac00 \uc4f4 \uae00 \ubaa8\uc544\ubcf4\uae30"}),Object(N.jsx)("div",{className:"flexContainer",children:Object(N.jsx)(te,{children:0==c.length?"\uc544\uc9c1 \uc4f4 \uae00\uc774 \uc5c6\ub124\uc694":c.map((function(e){return Object(N.jsx)(A,{postObj:e,isOwner:t.uid===e.author},e.id)}))})})]})},re=n(76),oe=y.a.div(H||(H=Object(p.a)(["\n  background-color: white;\n  height: 100vh;\n"]))),ce=y.a.div(J||(J=Object(p.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 400px;\n  gap: 30px;\n"]))),ae=y.a.div(G||(G=Object(p.a)(["\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),ie=y.a.form(K||(K=Object(p.a)(["\n  margin: 0 auto;\n  width: 100%;\n  max-width: 414px;\n  padding: 1.3rem;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]))),se=y.a.input(Q||(Q=Object(p.a)(["\n  max-width: 100%;\n  padding: 11px 13px;\n  background: #f9f9fa;\n  color: #f03d4e;\n  margin-bottom: 0.9rem;\n  border-radius: 4px;\n  outline: 0;\n  border: 1px solid rgba(245, 245, 245, 0.7);\n  font-size: 14px;\n  transition: all 0.3s ease-out;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);\n  :focus,\n  :hover {\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);\n  }\n"]))),be=y.a.button(R||(R=Object(p.a)(["\n  max-width: 100%;\n  padding: 11px 13px;\n  color: rgb(253, 249, 243);\n  font-weight: 600;\n  text-transform: uppercase;\n  background: #f03d4e;\n  border: none;\n  border-radius: 3px;\n  outline: 0;\n  cursor: pointer;\n  margin-top: 0.6rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease-out;\n  :hover {\n    background: rgb(200, 50, 70);\n    animation: 0.2s ease-out forwards;\n  }\n"]))),de=y.a.button(W||(W=Object(p.a)(["\n  max-width: 100%;\n  padding: 11px 13px;\n  color: rgb(253, 249, 243);\n  font-weight: 600;\n  text-transform: uppercase;\n  background: grey;\n  border: none;\n  border-radius: 3px;\n  outline: 0;\n  cursor: pointer;\n  margin-top: 0.6rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease-out;\n  :hover {\n    background: #3d3b3b;\n    animation: 0.2s ease-out forwards;\n  }\n"]))),le=y.a.button(U||(U=Object(p.a)(["\n  max-width: 100%;\n  padding: 11px 13px;\n  color: black;\n  font-weight: 600;\n  text-transform: uppercase;\n  background: #e8dfdf;\n  border: none;\n  border-radius: 3px;\n  outline: 0;\n  cursor: pointer;\n  margin-top: 0.6rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease-out;\n  :hover {\n    background: #303030;\n    color: white;\n    animation: 0.2s ease-out forwards;\n  }\n"]))),ue=y.a.h2(V||(V=Object(p.a)(["\n  text-align: center;\n  font-size: 38px;\n  margin-top: 30px;\n  margin-bottom: 20px;\n"])));var je,pe,xe=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),c=Object(d.a)(o,2),i=c[0],s=c[1],b=Object(a.useState)(!0),l=Object(d.a)(b,2),u=l[0],p=l[1],x=Object(a.useState)(""),f=Object(d.a)(x,2),g=f[0],m=f[1],v=Object(re.a)(),y=v.register,S=v.handleSubmit,C=function(){var e=Object(k.a)(w.a.mark((function e(t,r){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),r.preventDefault(),e.prev=2,!u){e.next=9;break}return e.next=6,Object(O.b)(h,n,i);case 6:e.sent,e.next=12;break;case 9:return e.next=11,Object(O.d)(h,n,i);case 11:e.sent;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0.message),m(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(k.a)(w.a.mark((function e(){var t,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O.a,e.prev=1,e.next=4,Object(O.e)(h,t);case 4:n=e.sent,r=O.a.credentialFromResult(n),r.accessToken,n.user,e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.code,e.t0.message,e.t0.email,O.a.credentialFromError(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),z=function(e){var t=e.target,n=t.name,o=t.value;"email"===n?r(o):"password"===n&&s(o)};return Object(N.jsxs)(oe,{children:[Object(N.jsx)(ue,{children:"\uc0ac\uc6a9\uc790 \uc778\uc99d"}),Object(N.jsxs)(ae,{children:[Object(N.jsxs)(ie,{onSubmit:S(C),children:[Object(N.jsx)(se,Object(j.a)(Object(j.a)({},y("email",{required:!0,onChange:z,value:n})),{},{type:"email",id:"id",placeholder:"Email"})),Object(N.jsx)(se,Object(j.a)(Object(j.a)({},y("password",{required:!0,onChange:z,value:i})),{},{type:"text",id:"pw",placeholder:"Password"})),Object(N.jsx)(be,{type:"submit",children:u?"\uac00\uc785\ud558\uae30":"\ub85c\uadf8\uc778"})]}),Object(N.jsxs)(ce,{children:[Object(N.jsx)("div",{children:Object(N.jsx)(de,{onClick:F,children:"Goolge \ub85c\uadf8\uc778 \ud558\uae30"})}),Object(N.jsx)("div",{children:Object(N.jsx)(le,{onClick:function(){return p((function(e){return!e}))},children:u?"\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc5b4\uc694":"\uc0c8\ub86d\uac8c \uacc4\uc815\uc744 \uc0dd\uc131\ud574\uc57c\ud574\uc694"})})]}),g]})]})},Oe=y.a.nav(je||(je=Object(p.a)(['\n  margin: 30px;\n  display: flex;\n  gap: 20px;\n  height: 30px;\n  align-items: baseline;\n  background-color: white;\n\n  a {\n    text-decoration: none;\n    font-size: 12px;\n    color: black;\n    height: 1rem;\n\n    :first-child {\n      color: "1B1A17";\n      font-size: 24px;\n    }\n  }\n']))),fe=y.a.button(pe||(pe=Object(p.a)(['\n  position: absolute;\n  cursor: pointer;\n  right: 20px;\n  width: 50px;\n  border: none;\n  color: white;\n  background-color: grey;\n  padding: 5px;\n  font-size: 10px;\n  border-radius: 10px;\n  margin: 10px;\n  font-family: "SpoqaHanSansNeo";\n  transition: all 0.3s ease-out;\n  :hover {\n    background: #303030;\n    color: white;\n    animation: 0.2s ease-out forwards;\n  }\n']))),he=function(){var e=Object(u.f)(),t=Object(u.g)("/profile");console.log(t);return Object(N.jsxs)(Oe,{isProfile:t,children:[Object(N.jsx)(l.b,{to:"/",children:"Post It Board"}),Object(N.jsx)(l.b,{style:{textDecoration:t?"underline":"none"},to:"/profile",children:"My profile"}),Object(N.jsx)(fe,{onClick:function(){h.signOut(),e.push("/")},children:"Log Out"})]})},ge=function(e){var t=e.isLoggedin,n=e.userObj;return console.log(t?"Logged in":"Not logged in"),Object(N.jsxs)(l.a,{basename:"https://kylelee-js.github.io/Post-it-board",children:[t&&Object(N.jsx)(he,{}),Object(N.jsx)(u.c,{children:t?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(u.a,{exact:!0,path:"/",children:Object(N.jsx)(ee,{userObj:n})}),Object(N.jsx)(u.a,{exact:!0,path:"/profile",children:Object(N.jsx)(ne,{userObj:n})})]}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(u.a,{exact:!0,path:"/",children:Object(N.jsx)(xe,{})})})})]})};var me=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!0),c=Object(d.a)(o,2),i=c[0],s=c[1],b=Object(a.useState)(null),l=Object(d.a)(b,2),u=l[0],j=l[1];return Object(a.useEffect)((function(){h.onAuthStateChanged((function(e){e?(s(!0),j(e)):s(!1),r(!0)}))}),[]),Object(N.jsx)("div",{className:"App",children:n?Object(N.jsx)(ge,{isLoggedin:i,userObj:u}):"\ub85c\uadf8\uc778 \uc815\ubcf4 \ubd88\ub7ec\uc624\ub294 \uc911..."})};b.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(S.a,{children:Object(N.jsx)(me,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.f8f480ff.chunk.js.map