(this.webpackJsonpintegra=this.webpackJsonpintegra||[]).push([[6],{312:function(e,t){},313:function(e,t){},314:function(e,t){},315:function(e,t){},316:function(e,t){},323:function(e,t,a){"use strict";var n=a(5),c=a(0),o=a.n(c),r=a(322),l=(a(318),a(2));t.a=function(e){var t=e.file;r.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(r.c.version,"/pdf.worker.js");var a=Object(c.useState)(null),i=Object(n.a)(a,2),s=i[0],u=i[1],m=Object(c.useState)(1),d=Object(n.a)(m,2),f=d[0],b=d[1];return o.a.createElement("div",{className:"py-4 container"},o.a.createElement(r.a,{file:t,error:l.a.t("pdf-reader.error"),loading:l.a.t("pdf-reader.loading"),onLoadSuccess:function(e){var t=e.numPages;u(t)},onClick:function(){return b(f+1)}},o.a.createElement(r.b,{pageNumber:f,scale:2})),s&&o.a.createElement("div",{className:"text-center"},f>1&&o.a.createElement("button",{className:"pr-4 font-bold text-4xl focus:outline-none text-blue-500 hover:text-blue-600",onClick:function(){return b(f-1)}}," "," < "," "),o.a.createElement("span",null,f,"/",s),f<s&&o.a.createElement("button",{className:"pl-4 font-bold text-4xl focus:outline-none text-blue-500 hover:text-blue-600",onClick:function(){return b(f+1)}}," "," > "," ")))}},449:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(0),o=a.n(c),r=a(323),l=a(16),i=a(4),s=a(7),u=a(40),m=a(58),d=a(2),f=a(3);t.default=function(e){var t=e.uploadService,a=Object(c.useState)(null),b=Object(n.a)(a,2),p=b[0],v=b[1],E=Object(c.useState)(null),j=Object(n.a)(E,2),k=j[0],x=j[1],O=Object(l.i)().id,g=Object(f.g)(),N=g.state,h=g.dispatch;return Object(c.useEffect)((function(){h({type:f.d,value:d.a.t("pages.most.detail")}),t.getUpload({type:"menu",category:s.c,id:O}).then((function(e){v(e)}),(function(e){x(e)}))}),[h,O,t]),p&&o.a.createElement("div",{className:"container py-4 mx-auto"},o.a.createElement(u.a,{error:k}),o.a.createElement(i.b,{to:"/most/archive",className:"block"},d.a.t("most.link.back")),N.user&&(N.user.can_edit||N.user.is_admin)?o.a.createElement("div",{className:"text-right"},o.a.createElement(i.b,{to:"/most/".concat(O,"/edit"),className:"btn"},d.a.t("notice.link.edit"))):null,o.a.createElement("span",{className:"form-title"},p.description),o.a.createElement("div",{className:"py-4"},o.a.createElement(r.a,{file:"".concat(m.a,"/api/v1/uploads/menu/").concat(s.c,"/").concat(p.id,"/download")})))}}}]);
//# sourceMappingURL=6.4eb8e876.chunk.js.map