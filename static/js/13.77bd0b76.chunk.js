(this.webpackJsonpintegra=this.webpackJsonpintegra||[]).push([[13],{449:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(87),r=n(0),i=n.n(r),u=n(2),o=n(16),l=n(3),s=n(47);t.default=function(e){var t=e.uploadService,n=Object(o.g)(),p=Object(l.g)().dispatch,f=Object(o.i)().type,m=Object(r.useState)(null),b=Object(a.a)(m,2),d=b[0],O=b[1];return Object(r.useEffect)((function(){p({type:l.d,value:u.a.t("pages.notice.upload")})})),i.a.createElement("div",{className:"container mx-auto py-4"},i.a.createElement(s.a,{error:d}),i.a.createElement("span",{className:"form-title"},u.a.t("notice.link.upload")),i.a.createElement(c.a,{onSubmit:function(e){var a=e.file,c=e.description;return O(null),t.uploadOne(a[0],f,c).then((function(){n.push("/oznamy/"+f)}),(function(e){O(u.a.t("errors.unknown"))}))}}))}}}]);
//# sourceMappingURL=13.77bd0b76.chunk.js.map