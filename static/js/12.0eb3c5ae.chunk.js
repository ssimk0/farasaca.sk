(this.webpackJsonpintegra=this.webpackJsonpintegra||[]).push([[12],{443:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a(0),r=a.n(n),s=a(9),l=a(86),o=a(16),i=a(4),p=a(57),u=a(2),m=a(3);t.default=function(e){var t=e.uploadService,a=Object(n.useState)(null),g=Object(c.a)(a,2),d=g[0],b=g[1],f=Object(n.useState)(null),h=Object(c.a)(f,2),E=h[0],v=h[1],j=new URLSearchParams(Object(o.h)().search).get("page"),O=Object(m.g)().dispatch;return Object(n.useEffect)((function(){O({type:m.d,value:u.a.t("pages.most.archive")}),t.getUploads({type:"menu",category:s.c,page:j}).then((function(e){b(e)}),(function(e){v(e)}))}),[O,j,t]),d&&r.a.createElement("div",{className:"container mx-auto py-4"},r.a.createElement(p.a,{error:E}),r.a.createElement("span",{className:"form-title"},u.a.t("most.archive")),r.a.createElement("div",{className:"pt-4"},r.a.createElement("ul",null,d.upload&&d.upload.map((function(e){return r.a.createElement("li",{key:"most-"+e.id},r.a.createElement(i.b,{to:"/most/".concat(e.id)},e.description))})))),r.a.createElement(l.a,{page:d.page,total_pages:d.total_pages}))}}}]);
//# sourceMappingURL=12.0eb3c5ae.chunk.js.map