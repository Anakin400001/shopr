(this.webpackJsonpshopr=this.webpackJsonpshopr||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},197:function(e,t,a){e.exports=a(301)},301:function(e,t,a){"use strict";a.r(t);a(198),a(224),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264);var n=a(0),c=a.n(n),r=a(104),l=a.n(r),s=a(38),o=a.n(s),i=a(105),m=a(106),u=a(114),d=a(113),p=a(39),h=a(67),f=a.n(h),E=a(112),b=a.n(E),g=(a(276),a(278),a(279),a(50)),k=a.n(g),v=a(45),y=a.n(v),U=a(51),P=a.n(U),j=a(107),I=a.n(j),O=(a(96),function(e){var t=e.id,a=(e.go,e.fetchedUser),n=e.openKupit;return c.a.createElement(k.a,{id:t},a&&c.a.createElement(p.b,{status:"ID: ".concat(a.id),before:a.photo_200?c.a.createElement("a",{href:"https://vk.com/id".concat(a.id),target:"_blank"},c.a.createElement(I.a,{src:a.photo_200})):null},"".concat(a.first_name," ").concat(a.last_name)),c.a.createElement("center",{className:"skypka"},c.a.createElement("br",null),"\u0421\u043a\u0443\u043f\u043a\u0430 \u2022 \u041f\u0440\u043e\u0434\u0430\u0436\u0430"),c.a.createElement("br",null),c.a.createElement(P.a,{style:{display:"flex"}},c.a.createElement(y.a,{onClick:n,size:"l",stretched:!0,style:{marginRight:8}},"\u041a\u0443\u043f\u0438\u0442\u044c"),c.a.createElement(y.a,{size:"l",stretched:!0,mode:"secondary"},"\u041f\u0440\u043e\u0434\u0430\u0442\u044c")),c.a.createElement("br",null),c.a.createElement(P.a,null,c.a.createElement(y.a,{className:"footer2",mode:"tertiary"},"\u041a\u0443\u043f\u043b\u0435\u043d\u043e:")),c.a.createElement(P.a,null,c.a.createElement(y.a,{className:"footer",mode:"tertiary"},"\u041f\u0440\u043e\u0434\u0430\u043d\u043e:")))}),_=a(66),A=a.n(_),C=a(111),K=a.n(C),N=a(108),V=a.n(N),W=a(109),w=a.n(W),x=a(110),z=a.n(x),S=Object(p.c)(),D=function(e){return c.a.createElement(k.a,{id:e.id},c.a.createElement(A.a,{left:c.a.createElement(K.a,{onClick:e.go,"data-to":"home"},S===p.a?c.a.createElement(V.a,null):c.a.createElement(w.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:z.a,alt:"Persik The Cat"}))},G=(Object(p.c)(),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,popout:c.a.createElement(b.a,{size:"large"})},n}return Object(m.a)(a,[{key:"useEffect",value:function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}}))}},{key:"componentDidMount",value:function(){var e=this;o.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),e.setState({popout:null})}})),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(f.a,{activePanel:this.state.activePanel,popout:this.state.popout},c.a.createElement(O,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(D,{id:"persik",go:this.go}))}}]),a}(c.a.Component));o.a.send("VKWebAppInit"),l.a.render(c.a.createElement(G,null),document.getElementById("root"))},96:function(e,t,a){}},[[197,1,2]]]);
//# sourceMappingURL=main.d5544143.chunk.js.map