(this.webpackJsonpshopr=this.webpackJsonpshopr||[]).push([[0],{102:function(e,t,a){},120:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},195:function(e,t,a){e.exports=a(300)},293:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);a(196),a(222),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262);var n=a(0),l=a.n(n),s=a(110),c=a.n(s),r=a(28),o=a.n(r),i=a(123),m=a(111),d=a(112),u=a(49),h=a(125),p=a(124),f=a(12),E=a(70),b=a.n(E),v=a(122),g=a.n(v),k=a(50),y=a.n(k),C=(a(281),a(282),a(53)),w=a.n(C),O=(a(283),a(51)),U=a.n(O),j=a(52),P=a.n(j),S=a(45),A=a.n(S),M=a(54),x=a.n(M),H=a(117),I=a.n(H),K=(a(102),function(e){var t=e.id,a=(e.go,e.fetchedUser),n=e.openKupit;return l.a.createElement(U.a,{id:t},a&&l.a.createElement(P.a,{left:a.photo_200?l.a.createElement("a",{href:"https://vk.com/id".concat(a.id),target:"_blank"},l.a.createElement(I.a,{src:a.photo_200})):null},l.a.createElement(f.k,{status:"ID: ".concat(a.id)},"".concat(a.first_name," ").concat(a.last_name))),l.a.createElement("center",{className:"skypka"},l.a.createElement("br",null),"\u0421\u043a\u0443\u043f\u043a\u0430 \u2022 \u041f\u0440\u043e\u0434\u0430\u0436\u0430"),l.a.createElement("br",null),l.a.createElement(x.a,{style:{display:"flex"}},l.a.createElement(A.a,{onClick:n,size:"l",stretched:!0,style:{marginRight:8}},"\u041a\u0443\u043f\u0438\u0442\u044c"),l.a.createElement(A.a,{size:"l",stretched:!0,mode:"secondary"},"\u041f\u0440\u043e\u0434\u0430\u0442\u044c")),l.a.createElement("br",null),l.a.createElement(x.a,null,l.a.createElement(A.a,{className:"footer2",mode:"tertiary"},"\u041a\u0443\u043f\u043b\u0435\u043d\u043e:")),l.a.createElement(x.a,null,l.a.createElement(A.a,{className:"footer",mode:"tertiary"},"\u041f\u0440\u043e\u0434\u0430\u043d\u043e:")))}),_=a(121),B=a.n(_),N=a(118),z=a.n(N),V=a(119),W=a.n(V),T=a(120),D=a.n(T),F=Object(f.l)(),G=function(e){return l.a.createElement(U.a,{id:e.id},l.a.createElement(P.a,{left:l.a.createElement(B.a,{onClick:e.go,"data-to":"home"},F===f.e?l.a.createElement(z.a,null):l.a.createElement(W.a,null))},"Persik"),l.a.createElement("img",{className:"Persik",src:D.a,alt:"Persik The Cat"}))},J=(a(293),Object(f.l)()),R=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,popout:l.a.createElement(g.a,{size:"large"}),activeModal:null,modalHistory:[],psbalance:1e6,password:"1",purpose:""},n.onChange=n.onChange.bind(Object(u.a)(n)),n.modalBack=function(){n.setActiveModal(n.state.modalHistory[n.state.modalHistory.length-2])},n}return Object(d.a)(a,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(i.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"useEffect",value:function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var l=document.createAttribute("scheme");l.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(l)}}))}},{key:"onChange",value:function(e){var t=e.currentTarget,a=(t.name,t.value);a>this.state.psbalance&&this.setState({password:this.state.psbalance}),a<1&&this.setState({password:1}),a>=1&&this.setState({password:a})}},{key:"componentDidMount",value:function(){var e=this;o.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),e.setState({popout:null})}})),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){var e=this,t=this.state,a=t.password,n=(t.purpose,l.a.createElement(f.i,{activeModal:this.state.activeModal,onClose:this.modalBack},l.a.createElement(f.g,{id:"filters",onClose:this.modalBack,header:l.a.createElement(f.h,{left:l.a.createElement(f.j,{onClick:this.modalBack},J===f.e?"\u041e\u0442\u043c\u0435\u043d\u0430":l.a.createElement(y.a,null))},"\u0421\u043a\u0443\u043f\u043a\u0430 PaperScroll")},l.a.createElement(f.c,null,l.a.createElement(f.d,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e PaperScroll | \u0426\u0435\u043d\u0430: 1\u043a\u043a - 0,06\u0440"},l.a.createElement(f.f,{name:"password",value:a,onChange:this.onChange,status:this.state.psbalance<a?"error":"",bottom:this.state.psbalance<a?"\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u0431\u043e\u043b\u044c\u0448\u0435 \u0431\u0430\u043b\u0430\u043d\u0441\u0430":""})),l.a.createElement(f.d,null,l.a.createElement(f.b,{indicator:l.a.createElement(w.a,null)},"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: +7987654321"),this.state.fetchedUser&&l.a.createElement(f.b,{asideContent:l.a.createElement(w.a,null)},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439: ".concat(this.state.fetchedUser.id)),l.a.createElement(f.b,{indicator:l.a.createElement(w.a,null)},"\u0421\u0443\u043c\u043c\u0430: ".concat(parseFloat(this.state.password).toFixed(2))),l.a.createElement(f.a,{size:"xl"},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c"))))));return l.a.createElement(b.a,{activePanel:this.state.activePanel,popout:this.state.popout,modal:n},l.a.createElement(K,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,openKupit:function(){return e.setActiveModal("filters")}}),l.a.createElement(G,{id:"persik",go:this.go}))}}]),a}(l.a.Component);o.a.send("VKWebAppInit"),c.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.f1084dab.chunk.js.map