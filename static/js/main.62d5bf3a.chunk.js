(this["webpackJsonps-mcneela.github.io"]=this["webpackJsonps-mcneela.github.io"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={navLinks:"NavigationItems_navLinks__3ZvWS",LinkTab:"NavigationItems_LinkTab__2nFY6",Home:"NavigationItems_Home__1sa_w"}},,,function(e,t,n){e.exports={Main:"HomePage_Main__25RJF",Heading:"HomePage_Heading__2FrSO",IntroBlurb:"HomePage_IntroBlurb__3IREx",CTA:"HomePage_CTA__sqxDf"}},,,,,function(e,t,n){e.exports={Main:"Toolbar_Main__32NJD",Button:"Toolbar_Button__14p_a",NavBar:"Toolbar_NavBar__r9INs"}},function(e,t,n){e.exports={nav_link_list:"NavigationItem_nav_link_list__2fLeO",nav_link:"NavigationItem_nav_link__2YHcw",Active:"NavigationItem_Active__3VVog"}},,,,,,,,function(e,t,n){},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){},function(e,t,n){e.exports={Header:"PageHeader_Header__Mjn8D"}},function(e,t,n){e.exports={Background:"Background_Background__B0tdY"}},,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(24),r=n.n(i),o=(n(35),n(36),n(7)),s=n(13),l=n(14),j=n(16),d=n(15),b=n(17),u=n.n(b),h=n(18),O=n.n(h),x=n(10),g=n(0),v=function(e){return Object(g.jsx)("li",{className:O.a.nav_link_list,children:Object(g.jsx)(x.b,{className:O.a.nav_link,isActive:e.isActive,to:e.link,activeClassName:O.a.Active,children:e.children})})},_=function(e){return e.children},m=n(9),f=n.n(m),p=function(e){return Object(g.jsx)(_,{children:Object(g.jsxs)("ul",{className:f.a.navLinks,children:[Object(g.jsx)(v,{isActive:function(){return!1},link:"/",children:Object(g.jsx)("div",{className:f.a.LinkTab,children:Object(g.jsx)("p",{children:"Home"})})}),Object(g.jsx)(v,{link:"/work/",children:Object(g.jsx)("div",{className:f.a.LinkTab,children:Object(g.jsx)("p",{children:"Work"})})}),Object(g.jsx)(v,{link:"/blog/",children:Object(g.jsx)("div",{className:f.a.LinkTab,children:Object(g.jsx)("p",{children:"Blog"})})}),Object(g.jsx)(v,{link:"/about/",children:Object(g.jsx)("div",{className:f.a.LinkTab,children:Object(g.jsx)("p",{children:"About"})})})]})})},k=function(e){return Object(g.jsxs)("div",{className:u.a.Main,children:[Object(g.jsx)("button",{className:u.a.Button,onClick:e.toggleModalMethod,children:"Menu"}),Object(g.jsx)("nav",{className:u.a.NavBar,children:Object(g.jsx)(p,{})})]})},M=n(26),N=n.n(M),w=function(e){return Object(g.jsx)("nav",{className:N.a.Modal,children:e.children})},B=n(27),I=n.n(B),H=function(e){return Object(g.jsx)("div",{className:I.a.Backdrop,onClick:e.toggleModalMethod})},T=n(28),A=n.n(T),C=function(e){return Object(g.jsxs)("div",{className:A.a.SideDrawer,children:[Object(g.jsx)(H,{toggleModalMethod:e.toggleModalMethod}),Object(g.jsx)(w,{children:Object(g.jsx)(p,{toggleModalMethod:e.toggleModalMethod})})]})},D=n(29),L=n.n(D),S=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={sideDrawerOpen:!1},e.toggleModal=function(){e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{sideDrawerOpen:!e.sideDrawerOpen})}))},e.clearModal=function(){e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{sideDrawerOpen:!1})}))},e.componentDidMount=function(){e.clearModal()},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("header",{className:L.a.Header,children:[this.state.sideDrawerOpen?Object(g.jsx)(C,{toggleModalMethod:this.toggleModal}):null,Object(g.jsx)(k,{toggleModalMethod:this.toggleModal})]})}}]),n}(a.Component),y=n(12),P=n.n(y),F=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={entered:!1},e.enter=function(){e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{entered:!0})}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(_,{children:[Object(g.jsx)(S,{}),Object(g.jsx)("div",{className:P.a.Heading,children:Object(g.jsx)("h1",{children:"Hello and Welcome"})}),Object(g.jsxs)("div",{className:P.a.Main,children:[Object(g.jsx)("div",{className:P.a.IntroBlurb,children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"My name is Stephen"}),Object(g.jsx)("p",{children:"I have a degree in Mechanical Engineering with training in software and math. I like to dabble in various computer science topics, most recently API development and mathematical/statistical programming."})]})}),Object(g.jsxs)("div",{className:P.a.CTA,children:[Object(g.jsx)("p",{children:"Please feel free to browse the site and look at some of the projects I've worked on (this site is one of them!)."}),Object(g.jsx)("p",{children:"Be sure to check out the blog section, where I give some helpful tips on JavaScript, React, Django, and CSS....things that would've saved me a lot of time when I was first learning!"})]})]})]})}}]),n}(a.Component),J=n(2),E=n(30),R=n.n(E),V=function(e){return Object(g.jsx)("div",{className:R.a.Background,children:e.children})};var W=function(){return Object(g.jsx)(_,{children:Object(g.jsx)("body",{children:Object(g.jsx)(V,{children:Object(g.jsxs)(J.c,{children:[Object(g.jsx)(J.a,{path:"/",render:function(e){return Object(g.jsx)(F,{})}}),Object(g.jsx)(J.a,{path:"/work/",exact:!0,render:function(e){return Object(g.jsx)(F,{})}}),Object(g.jsx)(J.a,{path:"/blog/",exact:!0,render:function(e){return Object(g.jsx)(F,{})}}),Object(g.jsx)(J.a,{path:"/about/",exact:!0,render:function(e){return Object(g.jsx)(F,{})}})]})})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(x.a,{children:Object(g.jsx)(W,{})})}),document.getElementById("root")),Y()}],[[43,1,2]]]);
//# sourceMappingURL=main.62d5bf3a.chunk.js.map