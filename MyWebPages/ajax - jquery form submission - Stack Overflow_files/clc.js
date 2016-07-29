"use strict";!function(){function e(e,t,n){H.appendChild(Q("script",function(r){var a="onreadystatechange",o="onload",c="readyState",i=!1;if(r.async=!0,r.src=e,"function"==typeof t){var s=function(){i||r[c]&&"loaded"!==r[c]&&"complete"!==r[c]||(i=!0,"function"==typeof t&&t(r),r[o]=r[a]=null,n&&r.parentNode.removeChild(r))};r[o]=r[a]=s}}))}function t(){var e=C.StackExchange,t="options",n="user";return e&&e[t]&&e[t][n]&&e[t][n].accountId}function n(e){e=D(L.hash?L.hash.substr(1):"",e||{});var n=e.ac||e.accountId||t();if(n&&(e.ac=n),!e.tags){var r=X();r.length>0&&(e.tags=r.join(";"))}return e.host=L.host.replace(/\.internal$/,""),e}function r(e,t,n){var r=U(e);if(null===r)return function(){};var a=A(),o=setInterval(function(){$(r)&&(clearInterval(o),n(!1,A()-a))},t);return function(){return clearInterval(o)}}function a(e){var t=1,n=2,r=L.hash.indexOf("large=1")!==-1,a=L.hash.indexOf("small=1")!==-1,o=K(),c=!a&&(r||!o||e),i=c?t:n,s=J(T.sb,F),l=[i+"="+s],u=J(T.tlb,F);u&&l.push("5="+u);var d=J(T.mlb,F);return d&&l.push("6="+d),l.join("&")}function o(t,r){var o=!!U("#careersadsdoublehigh"),c=h({},{zones:a(o)}),i=n(c);t&&(i.azt=1),r&&(i.lw=r),"number"==typeof C.innerWidth&&(i.bw=C.innerWidth);var s=G()-(o+0);s>0&&(i.az="1");var l=["zones","ip","ac","eng","prov","tags","theme","at","remote","seed","lw","azt","sysadmin","bw","nocpm","creative","jobview","cpview","ver","host","exp","fallback","cp","az","jc","job"],u=P(i,l),d=S+"?"+u;R=A(),e(d)}function c(e){function t(){r.forEach(V),a.forEach(function(e){return i(e,n[e],c,o)}),"function"==typeof C.clc_after_load&&C.clc_after_load()}var n=e.cr,r=e.st,a=Object.keys(n),o=R?A()-R:0,c="//"+E+"/ct";t()}function i(e,t,n,r){var a=t.cl,o=t.cn,c=t.an,i=t.tr,u=(a||[]).join(" "),d=U("#"+e);d&&(u&&(d.className+=" "+u),d.innerHTML=o.replace("&pt=0","&pt="+(r||0)),d.addEventListener("mousedown",s(d,c,i,n)),d.addEventListener("click",l(d,c)))}function s(e,t,n,r){return function(a){for(var o=a.target;"A"!==o.tagName&&o!==e;)o=o.parentNode;if(o!==e&&!/(^|\s+)clc-non-ad(\s+|$)/.test(o.className)){var c=[];t&&c.push("an="+t);var i=[].filter.call(o.attributes,function(e){return/^data-/.test(e.name)});i.length>0&&i.forEach(function(e){var t=e.name.replace(/^data-/,"");c.push(k(t)+"="+k(e.value))}),c.push("tr="+n);var s="";c.length>0&&(s="?"+c.join("&")),o.href=r+s}}}function l(e,t){return function(e){var t=e.target;for(var n in Y)y(t,n)&&Y[n](e)===!1&&(e.preventDefault(),e.stopPropagation())}}function u(e,t){for(var n=e.parentNode;"LI"!==n.tagName;)n=n.parentNode;if(n=n.querySelector(".job-wrap")){var r=Q("div",function(e){e.className="clc-dismissed-overlay hidden",e.innerHTML=t.content});n.appendChild(r),setTimeout(function(){r.className="clc-dismissed-overlay"},20)}}function d(e,t){for(;e.className.indexOf("clc-dismissed-overlay")===-1;)e=e.parentNode;return e.className="clc-dismissed-overlay hidden",setTimeout(function(){for(var t=e;"LI"!==t.tagName;)t=t.parentNode;t=t.querySelector(".clc-dismiss"),t&&(t.style.display="",t.querySelector(".clc-tooltip").style.display=""),e.parentNode.removeChild(e)},210),!1}function f(e,t,n,r){var a=new XMLHttpRequest;a.open("POST",e,!0),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.withCredentials=!0,a.onreadystatechange=function(){4===a.readyState&&(200===a.status?n(p(a)):r(a.status,a.responseText,a))},t?("[object Object]"===Object.prototype.toString.call(t)&&(t=Object.keys(t).map(function(e){return k(e)+"="+k(t[e])}).join("&")),a.send(t)):a.send()}function p(e){var t=e.getResponseHeader("content-type");switch(t=t.substr(0,t.indexOf(";"))){case"application/json":return JSON.parse(e.responseText);default:return e.responseText}}function m(e){return[].filter.call(e.attributes,function(e){return/^data-clcparam-/.test(e.name)}).map(function(e){var t=k(e.name.replace(/^data-clcparam-/,"")),n=k(e.value);return t+"="+n}).join("&")}function v(){var e=function(){};K()&&b?e=r("#sidebar "+_,20,o):o(!1,0),M(function(){var t=U(_);t&&($(t)||(t.parentNode.removeChild(t),e(),x&&q.body.appendChild(Q("img",function(e){e.src="//"+E+"/to.gif",e.style.display="none"}))))},j)}var h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y=function(e,t){return(HTMLElement.prototype.matches||HTMLElement.prototype.msMatchesSelector).call(e,t)},g=window.clc_opts||{},w=g.az,b=void 0===w||w,N=g.kt,j=void 0===N?2e3:N,O=g.tto,x=void 0===O||O,S=g.u,T=g.d,E=g.h,C=window,L=C.location,k=C.encodeURIComponent,I=C.decodeURIComponent,q=C.document,H=q.body,z=q.getElementsByTagName("head")[0],M=C.setTimeout,_="[id^=adzerk].everyonelovesstackoverflow",R=0,A=function(){return(new Date).getTime()},D=function(e,t){return e.split(/\&/g).reduce(function(e,t){var n=t.split("=");return e[I(n[0])]=I(n[1]),e},t||{})},P=function(e,t){return Object.keys(e).filter(function(e){return t.indexOf(e)!==-1}).map(function(t){return k(t)+"="+k(e[t])}).join("&")},$=function(e){return e.innerHTML.replace(/\s+$/g,"")},B=q.querySelectorAll.bind(q),U=q.querySelector.bind(q),W=q.getElementById.bind(q),J=function(e,t){return e.filter(t)[0]},X=function(){return[].map.call(B(".post-taglist .post-tag"),function(e){return e.textContent})},F=function(e){return!!W(e)},G=function(){return B(_).length},K=function(){return G()>0},Q=function(e,t){var n=q.createElement(e);return t&&t(n),n},V=void 0;V=function(e){z.appendChild(Q("link",function(t){t.type="text/css",t.rel="stylesheet",t.href=e}))};var Y={"a.clc-dismiss":function(e){var t=e.target;return t.className.indexOf("error")===-1&&(t.querySelector(".clc-tooltip").style.display="none",t.className="clc-dismiss spinner",f(t.getAttribute("data-clc-url"),m(t),function(e){t.className="clc-dismiss",t.style.display="none",u(t,e)},function(){t.className="clc-dismiss error",t.title="Oops! Something went wrong. Don't worry, our best people are on it!"}),!1)},"a.clc-dismiss-undo":function(e){var t=e.target,n=t.parentNode.querySelector(".clc-spinner");return n.className.indexOf("error")===-1&&(n.className="clc-spinner",f(t.getAttribute("data-clc-url"),m(t),function(e){n.className="clc-spinner hidden",d(t,e)},function(){for(var e=t;e.className.indexOf("clc-dismissed-overlay")===-1;)e=e.parentNode;e.className+=" error",e.innerHTML="<div>Oops! Something went wrong. Don't worry, our best people are on it!</div>"}),!1)}};C.clc=h(window.clc||{},{init:c,load:v,ls:e,as:V,tags:X}),window.clc_init&&window.clc_init.forEach&&window.clc_init.forEach(function(e){return e()})}();