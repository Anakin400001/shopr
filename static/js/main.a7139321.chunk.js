(this.webpackJsonpshopr=this.webpackJsonpshopr||[]).push([[0],{100:function(e,t,a){},119:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},195:function(e,t,a){e.exports=a(298)},298:function(e,t,a){"use strict";a.r(t);a(196),a(222),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262);var n=a(0),l=a.n(n),c=a(108),r=a.n(c),o=a(28),s=a.n(o),i=a(122),m=a(109),u=a(110),d=a(124),p=a(123),h=a(12),f=a(68),E=a.n(f),v=a(121),b=a.n(v),k=a(49),y=a.n(k),g=(a(281),a(115)),O=a.n(g),P=(a(282),a(50)),j=a.n(P),A=a(51),C=a.n(A),M=a(45),U=a.n(M),H=a(52),I=a.n(H),K=a(116),S=a.n(K),_=(a(100),function(e){var t=e.id,a=(e.go,e.fetchedUser),n=e.openKupit;return l.a.createElement(j.a,{id:t},a&&l.a.createElement(C.a,{left:a.photo_200?l.a.createElement("a",{href:"https://vk.com/id".concat(a.id),target:"_blank"},l.a.createElement(S.a,{src:a.photo_200})):null},l.a.createElement(h.k,{status:"ID: ".concat(a.id)},"".concat(a.first_name," ").concat(a.last_name))),l.a.createElement("center",{className:"skypka"},l.a.createElement("br",null),"\u0421\u043a\u0443\u043f\u043a\u0430 \u2022 \u041f\u0440\u043e\u0434\u0430\u0436\u0430"),l.a.createElement("br",null),l.a.createElement(I.a,{style:{display:"flex"}},l.a.createElement(U.a,{onClick:n,size:"l",stretched:!0,style:{marginRight:8}},"\u041a\u0443\u043f\u0438\u0442\u044c"),l.a.createElement(U.a,{size:"l",stretched:!0,mode:"secondary"},"\u041f\u0440\u043e\u0434\u0430\u0442\u044c")),l.a.createElement("br",null),l.a.createElement(I.a,null,l.a.createElement(U.a,{className:"footer2",mode:"tertiary"},"\u041a\u0443\u043f\u043b\u0435\u043d\u043e:")),l.a.createElement(I.a,null,l.a.createElement(U.a,{className:"footer",mode:"tertiary"},"\u041f\u0440\u043e\u0434\u0430\u043d\u043e:")))}),x=a(120),B=a.n(x),N=a(117),V=a.n(N),W=a(118),w=a.n(W),z=a(119),D=a.n(z),G=Object(h.l)(),J=function(e){return l.a.createElement(j.a,{id:e.id},l.a.createElement(C.a,{left:l.a.createElement(B.a,{onClick:e.go,"data-to":"home"},G===h.e?l.a.createElement(V.a,null):l.a.createElement(w.a,null))},"Persik"),l.a.createElement("img",{className:"Persik",src:D.a,alt:"Persik The Cat"}))},R=Object(h.l)(),T=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,popout:l.a.createElement(b.a,{size:"large"}),activeModal:null,modalHistory:[]},n.modalBack=function(){n.setActiveModal(n.state.modalHistory[n.state.modalHistory.length-2])},n}return Object(u.a)(a,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(i.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"useEffect",value:function(){s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var l=document.createAttribute("scheme");l.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(l)}}))}},{key:"componentDidMount",value:function(){var e=this;s.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),e.setState({popout:null})}})),s.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){var e=this,t=l.a.createElement(h.i,{activeModal:this.state.activeModal,onClose:this.modalBack},l.a.createElement(h.g,{id:"filters",onClose:this.modalBack,header:l.a.createElement(h.h,{left:R===h.a&&l.a.createElement(h.j,{onClick:this.modalBack},l.a.createElement(y.a,null))},"\u0421\u043a\u0443\u043f\u043a\u0430 PaperScroll")},l.a.createElement(h.c,null,l.a.createElement(h.d,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e PaperScroll"},l.a.createElement(h.f,{value:"100"})),l.a.createElement(h.d,null,l.a.createElement(h.b,{indicator:l.a.createElement(O.a,null)},"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: +7987654321")))));return l.a.createElement(E.a,{activePanel:this.state.activePanel,popout:this.state.popout,modal:t},l.a.createElement(_,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,openKupit:function(){return e.setActiveModal("filters")}}),l.a.createElement(J,{id:"persik",go:this.go}))}}]),a}(l.a.Component);s.a.send("VKWebAppInit"),r.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.a7139321.chunk.js.map