(this.webpackJsonpintegra=this.webpackJsonpintegra||[]).push([[8],{306:function(e,a){},307:function(e,a){},308:function(e,a){},309:function(e,a){},310:function(e,a){},323:function(e,a,t){"use strict";var n=t(5),c=t(316),r=t(0),o=t.n(r),i=(t(312),t(2));a.a=function(e){var a=e.file;c.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(c.c.version,"/pdf.worker.js");var t=Object(r.useState)(null),l=Object(n.a)(t,2),u=l[0],s=l[1];return o.a.createElement(c.a,{file:a,error:i.a.t("pdf-reader.error"),loading:i.a.t("pdf-reader.loading"),onLoadSuccess:function(e){var a=e.numPages;s(a)}},Array.from(new Array(u),(function(e,a){return o.a.createElement(c.b,{key:"page_".concat(a+1),pageNumber:a+1,scale:2})})))}},447:function(e,a,t){"use strict";t.r(a);var n=t(5),c=t(0),r=t.n(c),o=t(16),i=t(4),l=t(57),u=t(56),s=t(2),f=t(3),d=t(323);a.default=function(e){var a=e.uploadService,t=Object(c.useState)(null),p=Object(n.a)(t,2),m=p[0],b=p[1],j=Object(c.useState)(null),v=Object(n.a)(j,2),g=v[0],O=v[1],y=Object(o.i)().id,k=Object(f.g)().dispatch,E=Object(o.i)().type;return Object(c.useEffect)((function(){k({type:f.d,value:s.a.t("pages.notice.detail")}),a.getUpload({type:"menu",category:E,id:y}).then((function(e){b(e)}),(function(e){O(e)}))}),[k,y,E,a]),m&&r.a.createElement("div",{className:"container py-4 mx-auto"},r.a.createElement(l.a,{error:g}),r.a.createElement(i.b,{to:"/oznamy/".concat(E,"/archive"),className:"block"},s.a.t("notice.link.back")),r.a.createElement("span",{className:"form-title"},m.description),r.a.createElement("div",{className:"py-4"},r.a.createElement(d.a,{file:"".concat(u.a,"/api/v1/uploads/menu/").concat(E,"/").concat(m.id,"/download")})))}}}]);
//# sourceMappingURL=8.0a1be58e.chunk.js.map