(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t){e.exports=require("electron")},73:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n.n(r),i=n(11),o=n.n(i),s=n(22),l=n(49),j=n.n(l),d=n(51),b=n(19),u=(n(73),n(111)),O=n(113),h=n(115),m=n(117),x=n(118),p=n(121),f=n(128),g=n(123),v=n(125),y="static/media/episen_logo.4f9feb6a.png",C=n(127),k=n(129),w=n(120),S=n(119),E=n(122),F=n(124),B=n(126),N=n(58),W=n.n(N),I=n(59),R=n.n(I),T=n(56),A=n.n(T),M=n(57),D=n.n(M),J=n(116),L=n(45),P=Object(u.a)((function(e){return{root:{flexGrow:1},paper:{height:"auto",width:450},margin:{marginTop:10}}}));var q=function(){var e=P(),t=Object(r.useState)(!1),n=Object(b.a)(t,2),i=n[0],o=n[1],l=Object(r.useState)(!0),u=Object(b.a)(l,2),N=u[0],I=u[1],T=Object(r.useState)({}),M=Object(b.a)(T,2),q=M[0],G=M[1],H=Object(r.useState)({user:"",pass:"",save:!1}),_=Object(b.a)(H,2),z=_[0],K=_[1],Q=Object(r.useState)(null),U=Object(b.a)(Q,2),V=U[0],X=U[1],Y=Object(r.useState)(!1),Z=Object(b.a)(Y,2),$=Z[0],ee=Z[1],te=Object(r.useState)({backgroundColor:"#FE0041"}),ne=Object(b.a)(te,2),ae=ne[0],re=ne[1],ce=function(){L.ipcRenderer.invoke("status").then((function(e){return function(e){var t=e;I(!0),G(t),console.log("res :",t),void 0!==t&&(null===V&&X(t.authFile),0===t.status?(o(!0),re({backgroundColor:"#1EBF28"})):(re({backgroundColor:"#FE0041"}),o(!1))),I(!1)}(e)}))};Object(r.useEffect)((function(){ce()}),[]);var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e.preventDefault(),re({backgroundColor:"#FDB328"}),L.ipcRenderer.invoke("auth",z).then((function(e){G(e),1===e.status&&(ee(!0),X(!1)),setTimeout(ce,6e3)}))},oe=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L.ipcRenderer.invoke("disconnect"),setTimeout(ce);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(O.a,{style:ae,children:Object(a.jsxs)(h.a,{container:!0,className:e.root,spacing:2,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"},children:[Object(a.jsx)(h.a,{item:!0,xs:6,children:Object(a.jsx)(v.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",style:{display:"flex",alignItems:"center",justifyContent:"center"},open:$,onClose:function(){ee(!1)},closeAfterTransition:!0,BackdropProps:{timeout:500},children:Object(a.jsx)(B.a,{in:$,children:Object(a.jsxs)(J.a,{className:e.paper,children:[Object(a.jsx)("h2",{id:"transition-modal-title",children:"Error"}),Object(a.jsx)("p",{id:"transition-modal-description",children:q.error})]})})})}),Object(a.jsx)(h.a,{item:!0,xs:12,children:Object(a.jsx)("img",{src:y,style:{maxWidth:250,marginBottom:200},alt:"Episen Logo"})}),Object(a.jsx)(m.a,{}),N||i?i&&!N?Object(a.jsx)(g.a,{color:"primary",style:{margin:"0.5rem 0 0.5rem 5vw",backgroundColor:"#FE0041",color:"white"},"aria-label":"disconnect",onClick:oe,children:Object(a.jsx)(R.a,{})}):N?Object(a.jsx)(h.a,{item:!0,xs:12,children:Object(a.jsxs)("h1",{style:{color:"white"},children:["Loading ...",Object(a.jsx)(F.a,{})]})}):Object(a.jsxs)("div",{children:[" ",Object(a.jsx)("span",{children:"Null"})," "]}):Object(a.jsx)(h.a,{item:!0,xs:12,style:{marginBottom:250},children:Object(a.jsx)(J.a,{className:e.paper,children:V?Object(a.jsx)(h.a,{item:!0,xs:12,children:Object(a.jsx)(g.a,{color:"primary",style:{margin:"0.5rem 0 0.5rem 200px",backgroundColor:"#FE0041",color:"white"},"aria-label":"connect",onClick:ie,children:Object(a.jsx)(W.a,{})})}):Object(a.jsx)("form",{onSubmit:ie,autoComplete:"off",children:Object(a.jsxs)(x.a,{children:[Object(a.jsxs)(S.a,{fullWidth:!0,className:e.margin,variant:"outlined",children:[Object(a.jsx)(k.a,{htmlFor:"outlined-userid",children:"Identifiant"}),Object(a.jsx)(C.a,{id:"outlined-adornment-userid",startAdornment:Object(a.jsx)(w.a,{position:"start",children:Object(a.jsx)(A.a,{})}),labelWidth:60,autoComplete:"off",onChange:function(e){K((function(t){return Object(s.a)(Object(s.a)({},t),{},{user:e.target.value})}))},disabled:V})]}),Object(a.jsxs)(S.a,{fullWidth:!0,className:e.margin,variant:"outlined",children:[Object(a.jsx)(k.a,{htmlFor:"outlined-adornment-password",children:"Mot de Passe"}),Object(a.jsx)(C.a,{id:"outlined-password",type:"password",autoComplete:"off",startAdornment:Object(a.jsx)(w.a,{position:"start",children:Object(a.jsx)(D.a,{})}),labelWidth:60,disabled:V,onChange:function(e){K((function(t){return Object(s.a)(Object(s.a)({},t),{},{pass:e.target.value})}))}})]}),Object(a.jsx)(p.a,{disabled:V,control:Object(a.jsx)(f.a,{checked:z.save,onChange:function(e){console.log(e.target.value),K((function(e){return Object(s.a)(Object(s.a)({},e),{},{save:!e.save})}))}}),label:"Sauvegarder identifiant"}),Object(a.jsx)("br",{}),Object(a.jsx)(S.a,{children:Object(a.jsx)(E.a,{type:"submit",style:{borderRadius:25,margin:"0.5rem 0 0.5rem 150px",width:"150px",backgroundColor:"#FE0041",color:"white"},children:"Connecter"})})]})})})})]})})})};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(q,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.cd82f350.chunk.js.map