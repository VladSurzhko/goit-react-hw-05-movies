"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[461],{454:function(n,e,t){t.d(e,{a:function(){return p}});var r,o,a=t(243),i=t(168),s=t(706),c=s.Z.div(r||(r=(0,i.Z)(["\nposition: fixed;\ntop:0;\nleft:0;\nright:0;\nbottom:0;\nbackground-color: rgba(36,36,36, 0.5);\n"]))),l=s.Z.div(o||(o=(0,i.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\ntransform: translate(-50%,-50%)\n"]))),u=t(184),p=function(){return(0,u.jsx)(c,{children:(0,u.jsx)(l,{children:(0,u.jsx)(a.W0,{height:100,width:100,radius:5,color:"#6c4da9",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})})})}},461:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,o,a,i,s=t(861),c=t(439),l=t(687),u=t.n(l),p=t(791),d=t(87),f=t(342),x=t(454),h=t(168),b=t(706),g=b.Z.label(r||(r=(0,h.Z)(["\nmargin-top: 20px;\nmargin-left: 20px;\ndisplay: block;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]))),v=b.Z.input(o||(o=(0,h.Z)(["\npadding: 5px;\n  padding-left: 24px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n"]))),m=b.Z.form(a||(a=(0,h.Z)(["\nmargin-top: 20px;\n"]))),Z=b.Z.button(i||(i=(0,h.Z)(["\n  margin: 12px;\n  padding: 10px 20px;\n  font-size: 16px;\n  background-color: #00d4ff;\n  color: white;\n  font-weight: bold;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    color: black;\n    background-color: #b7b7bb;\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px black;\n  }\n"]))),k=t(184),w=function(){var n,e=(0,d.lr)(),t=(0,c.Z)(e,2),r=t[0],o=t[1],a=(0,p.useState)([]),i=(0,c.Z)(a,2),l=i[0],h=i[1],b=(0,p.useState)(!1),w=(0,c.Z)(b,2),j=w[0],S=w[1],y=(0,p.useState)(null),C=(0,c.Z)(y,2),_=C[0],M=C[1],z=null!==(n=r.get("movieName"))&&void 0!==n?n:"",N=(0,p.useState)(!0),E=(0,c.Z)(N,2),F=E[0],H=E[1];(0,p.useEffect)((function(){var n=function(){var n=(0,s.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,S(!0),n.next=4,(0,f.HI)(z);case 4:e=n.sent,h(e.results),0===e.results.length?M("Movie '".concat(z,"' not found")):M(null),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),M(n.t0.message);case 12:return n.prev=12,S(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();F||n()}),[F,z]);return(0,k.jsxs)(k.Fragment,{children:[!F&&_&&(0,k.jsxs)("p",{children:["Movie ",z," not found"]}),j&&(0,k.jsx)(x.a,{}),(0,k.jsxs)(m,{children:[(0,k.jsx)(g,{children:"Movie search"}),(0,k.jsx)(v,{type:"text",value:z,onChange:function(n){var e=n.target.value;if(""===e)return o({});o({movieName:e}),H(!1)}})]}),(0,k.jsx)(Z,{type:"submit",children:"Search"}),l.map((function(n){return(0,k.jsx)("li",{children:(0,k.jsx)(d.rU,{to:"/movies/".concat(n.id),state:{},children:n.title})},n.id)}))]})}}}]);
//# sourceMappingURL=461.f6790174.chunk.js.map