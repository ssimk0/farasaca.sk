(this.webpackJsonpintegra=this.webpackJsonpintegra||[]).push([[10],{443:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a(0),r=a.n(n),l=a(7),s=a(86),o=a(16),i=a(4),p=a(37),u=a(2),m=a(3);t.default=function(e){var t=e.uploadService,a=Object(n.useState)(null),g=Object(c.a)(a,2),d=g[0],b=g[1],f=Object(n.useState)(null),h=Object(c.a)(f,2),E=h[0],v=h[1],j=new URLSearchParams(Object(o.h)().search).get("page"),O=Object(m.g)().dispatch;return Object(n.useEffect)((function(){O({type:m.d,value:u.a.t("pages.most.archive")}),console.log(j),t.getUploads({type:"menu",category:l.c,page:j}).then((function(e){b(e)}),(function(e){v(e)}))}),[O,j,t]),d&&r.a.createElement("div",{className:"container mx-auto py-4"},r.a.createElement(p.a,{error:E}),r.a.createElement("span",{className:"form-title"},u.a.t("most.archive")),r.a.createElement("div",{className:"pt-4"},r.a.createElement("ul",null,d.upload&&d.upload.map((function(e){return r.a.createElement("li",{key:"most-"+e.id},r.a.createElement(i.b,{to:"/most/".concat(e.id)},e.description))})))),r.a.createElement(s.a,{page:d.page,total_pages:d.total_pages}))}}}]);
//# sourceMappingURL=10.0fa4f8aa.chunk.js.map