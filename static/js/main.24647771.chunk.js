(this.webpackJsonpshopr=this.webpackJsonpshopr||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},205:function(e,t,a){e.exports=a(309)},309:function(e,t,a){"use strict";a.r(t);a(206),a(232),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272);var n=a(0),r=a.n(n),c=a(104),l=a.n(c),s=a(33),o=a.n(s),i=a(105),m=a(106),u=a(114),d=a(113),p=a(39),h=a(67),f=a.n(h),E=a(112),b=a.n(E),g=(a(280),a(282),a(283),a(49)),k=a.n(g),v=a(50),y=a.n(v),U=a(43),P=a.n(U),j=a(51),O=a.n(j),_=a(107),A=a.n(_),C=(a(96),function(e){var t=e.id,a=(e.go,e.fetchedUser),n=e.openKupit;return r.a.createElement(k.a,{id:t},a&&r.a.createElement(y.a,{left:a.photo_200?r.a.createElement("a",{href:"https://vk.com/id{fetchedUser.id}",target:"_blank"},r.a.createElement(A.a,{src:a.photo_200})):null},"".concat(a.first_name," ").concat(a.last_name)),r.a.createElement("center",{className:"skypka"},r.a.createElement("br",null),"\u0421\u043a\u0443\u043f\u043a\u0430 \u2022 \u041f\u0440\u043e\u0434\u0430\u0436\u0430"),r.a.createElement("br",null),r.a.createElement(O.a,{style:{display:"flex"}},r.a.createElement(P.a,{onClick:n,size:"l",stretched:!0,style:{marginRight:8}},"\u041a\u0443\u043f\u0438\u0442\u044c"),r.a.createElement(P.a,{size:"l",stretched:!0,mode:"secondary"},"\u041f\u0440\u043e\u0434\u0430\u0442\u044c")),r.a.createElement("br",null),r.a.createElement(O.a,null,r.a.createElement(P.a,{className:"footer2",mode:"tertiary"},"\u041a\u0443\u043f\u043b\u0435\u043d\u043e:")),r.a.createElement(O.a,null,r.a.createElement(P.a,{className:"footer",mode:"tertiary"},"\u041f\u0440\u043e\u0434\u0430\u043d\u043e:")))}),I=a(111),K=a.n(I),N=a(108),V=a.n(N),W=a(109),w=a.n(W),x=a(110),z=a.n(x),S=Object(p.b)(),G=function(e){return r.a.createElement(k.a,{id:e.id},r.a.createElement(y.a,{left:r.a.createElement(K.a,{onClick:e.go,"data-to":"home"},S===p.a?r.a.createElement(V.a,null):r.a.createElement(w.a,null))},"Persik"),r.a.createElement("img",{className:"Persik",src:z.a,alt:"Persik The Cat"}))},J=(Object(p.b)(),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,popout:r.a.createElement(b.a,{size:"large"})},n}return Object(m.a)(a,[{key:"useEffect",value:function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}}))}},{key:"componentDidMount",value:function(){var e=this;o.a.subscribe((function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),e.setState({popout:null})}})),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return r.a.createElement(f.a,{activePanel:this.state.activePanel,popout:this.state.popout},r.a.createElement(C,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),r.a.createElement(G,{id:"persik",go:this.go}))}}]),a}(r.a.Component));o.a.send("VKWebAppInit"),l.a.render(r.a.createElement(J,null),document.getElementById("root"))},96:function(e,t,a){}},[[205,1,2]]]);
//# sourceMappingURL=main.24647771.chunk.js.map