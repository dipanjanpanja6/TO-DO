(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{101:function(e,t,a){e.exports=a(132)},106:function(e,t,a){},107:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),r=a.n(o),s=(a(106),a(81)),i=a(82),c=a(83),d=a(91),h=a(92),u=(a(107),a(90)),m=a.n(u),p=a(156),g=a(158),f=a(171),E=a(160),k=a(161),S=a(162),C=a(47),v=a(159),b=a(136),y=a(163),O=a(164),w=a(172),I=a(165),j=a(166),A=a(169),J=a(167),M=a(168),N=a(87),x=a.n(N),W=a(88),B=a.n(W),D=a(89),T=a.n(D),F=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).componentDidMount=function(){null===localStorage.getItem("list")||e.setState({data:JSON.parse(localStorage.getItem("list"))}),console.log(JSON.parse(localStorage.getItem("list")))},e.handleOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1,error:!1,task:""})},e.handleChange=function(t){e.setState(Object(s.a)({},t.target.id,t.target.value))},e.handleAdd=function(){""===e.state.task?e.setState({error:!0}):(e.state.data.push(e.state.task),console.log(e.state.data),localStorage.setItem("list",JSON.stringify(e.state.data)),e.setState({task:""}),e.handleClose())},e.handleShuffle=function(){if(e.state.data.length>0){console.log(e.state.data.length);var t=e.state.data[Math.floor(Math.random()*e.state.data.length)];alert("Do "+t+" first ")}else alert("Add todo first")},e.handleClear=function(){localStorage.removeItem("list"),e.setState({data:[]})},e.state={open:!1,listCheck:!0,task:"",data:[],error:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.data.map((function(t){return l.a.createElement(p.a,{dense:!0,button:!0,key:8*Math.random()},l.a.createElement(g.a,null,l.a.createElement(f.a,{edge:"start",checked:e.state.listCheck,disableRipple:!0})),l.a.createElement(E.a,{id:"1",primary:t}))}));return l.a.createElement("div",null,l.a.createElement(k.a,{position:"static"},l.a.createElement(S.a,null,l.a.createElement(C.a,{className:t.title,display:"inline",variant:"h6"},"Todo List"),l.a.createElement(v.a,{color:"inherit",onClick:this.handleOpen},l.a.createElement(x.a,null)),l.a.createElement(v.a,{color:"inherit",onClick:this.handleShuffle},l.a.createElement(B.a,null)),l.a.createElement(v.a,{color:"inherit",onClick:this.handleClear},l.a.createElement(T.a,null)))),l.a.createElement(b.a,{className:"paper"},l.a.createElement(y.a,null,l.a.createElement(y.a,null,l.a.createElement(O.a,null,a))),l.a.createElement(w.a,{open:this.state.open,keepMounted:!0,onClose:this.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},l.a.createElement(I.a,null,l.a.createElement(j.a,null,"Add your todo item here....."),l.a.createElement(A.a,{error:this.state.error,autoFocus:!0,margin:"dense",id:"task",label:"Task name",fullWidth:!0,multiline:!0,value:this.state.task,onChange:this.handleChange})),l.a.createElement(J.a,null,l.a.createElement(M.a,{onClick:this.handleAdd,color:"primary"},"Add")))))}}]),a}(n.Component),G=m()({paper:{},heading:{padding:"12px"},title:{flexGrow:1}})(F);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.d2b9c737.chunk.js.map