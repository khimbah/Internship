!function(){function e(e,t){return"function"==typeof __an_obj_extend_thunk?__an_obj_extend_thunk(e,t):e}function t(e,t){"function"==typeof __an_err_thunk&&__an_err_thunk(e,t)}function n(e){"function"==typeof __an_redirect_thunk?__an_redirect_thunk(e):document.write('<script language="javascript" src="'+e+'"></scr'+'ipt>')};var r=function(e){this.rdParams=e};r.prototype={constructor:r,walkAncestors:function(e){try{if(!window.location.ancestorOrigins)return;for(var t=0,n=window.location.ancestorOrigins.length;n>t;t++)e.call(null,window.location.ancestorOrigins[t],t)}catch(r){"undefined"!=typeof console}return[]},walkUpWindows:function(e){var t,n=[];do try{t=t?t.parent:window,e.call(null,t,n)}catch(r){return"undefined"!=typeof console,n.push({referrer:null,location:null,isTop:!1}),n}while(t!==window.top);return n},getPubUrlStack:function(e){var n,r=[],o=null,i=null,c=null,d=null,a=null,s=null,u=null;for(n=e.length-1;n>=0;n--){try{c=e[n].location}catch(l){"undefined"!=typeof console,t(l,"AnRDModule::getPubUrlStack:: location")}if(c)i=encodeURIComponent(c),r.push(i),u||(u=i);else if(0!==n){d=e[n-1];try{a=d.referrer,s=d.ancestor}catch(l){"undefined"!=typeof console,t(l,"AnRDModule::getPubUrlStack:: prevFrame")}a?(i=encodeURIComponent(a),r.push(i),u||(u=i)):s?(i=encodeURIComponent(s),r.push(i),u||(u=i)):r.push(o)}else r.push(o)}return{stack:r,detectUrl:u}},getLevels:function(){var e=this.walkUpWindows(function(e,n){try{n.push({referrer:e.document.referrer||null,location:e.location.href||null,isTop:e===window.top})}catch(r){n.push({referrer:null,location:null,isTop:e===window.top}),"undefined"!=typeof console,t(r,"AnRDModule::getLevels")}});return this.walkAncestors(function(t,n){e[n].ancestor=t}),e},getRefererInfo:function(){var e="";try{var n=this.getLevels(),r=n.length-1,o=null!==n[r].location||r>0&&null!==n[r-1].referrer,i=this.getPubUrlStack(n);e=this.rdParams.rdRef+"="+i.detectUrl+"&"+this.rdParams.rdTop+"="+o+"&"+this.rdParams.rdIfs+"="+r+"&"+this.rdParams.rdStk+"="+i.stack+"&"+this.rdParams.rdQs}catch(c){e="","undefined"!=typeof console,t(c,"AnRDModule::getRefererInfo")}return e}};var o=function(n){var o="";try{n=e(n,0);var i=e(new r(n),1);return i.getRefererInfo()}catch(c){o="","undefined"!=typeof console,t(c,"AnRDModule::executeRD")}return o};;var i=function(e){this.viewParams=e};i.prototype={constructor:i,getAbsolutePositionIE:function(e,t){var n=e.document.documentElement.clientLeft||e.document.body.clientLeft,r=e.document.documentElement.clientTop||e.document.body.clientTop,o=e.document.documentElement.scrollLeft||e.document.body.scrollLeft,i=e.document.documentElement.scrollTop||e.document.body.scrollTop,c=t.getBoundingClientRect().left+o-n,d=t.getBoundingClientRect().top+i-r;return{x:c,y:d}},getAbsolutePositionFireFox:function(e,t){var n=e.document.documentElement,r=e.getComputedStyle(n,""),o=0,i=0;if(r){var c=t.getBoundingClientRect();o=c.left+parseInt(r.borderLeftWidth,10)+n.scrollLeft,i=c.top+parseInt(r.borderTopWidth,10)+n.scrollTop}return{x:o,y:i}},getAbsolutePositionChrome:function(e,t){if(null===t.offsetLeft)return 0;var n=0,r=t.parentNode;if(r)for(;r.offsetParent;)n-=r.scrollLeft,r=r.parentNode;for(var o,i=t;i&&(n+=i.offsetLeft,o=i.offsetParent,!o||"BODY"!==o.tagName||"absolute"!==i.style.position);)i=o;var c=e.getComputedStyle(e.document.documentElement,""),d=t.getBoundingClientRect().top+parseInt(c.borderTopWidth,10)+e.scrollY;return{x:n,y:d}},injectVirtualElement:function(){document.write('<img id="_anxfe" width="0" height="0" style="display: block; margin: 0px; padding: 0px; width: 0px;">');var e=document.getElementById("_anxfe");return e.removeAttribute("id"),e},isInView:function(e,t,n){var r=e.x,o=e.y;return t>r&&r>=0&&n>o&&o>=0},getAbsolutePosition:function(e,t){var n,r=navigator.userAgent.toLowerCase();return n=-1!==r.indexOf("webkit")?this.getAbsolutePositionChrome(e,t):-1!==r.indexOf("msie")?this.getAbsolutePositionIE(e,t):this.getAbsolutePositionFireFox(e,t)},isFriendlyFrame:function(){try{return!!top.location.href}catch(e){return!1}},getViewabilityData:function(e){var t,n,r,o=0,i=this.isFriendlyFrame();if(!i&&void 0===e.mozInnerScreenY)return{s:1};if(i){var c=this.injectVirtualElement();t=this.getAbsolutePosition(e,c);for(var d,a,s=e;s!=e.top;){try{a=s.frameElement}catch(u){return{s:4}}if(null===a)return{s:5};s=s.parent,d=this.getAbsolutePosition(s.parent,a),t={x:t.x+d.x,y:t.y+d.y}}var l=s.innerWidth||s.document.documentElement.clientWidth||s.document.body.clientWidth,f=s.innerHeight||s.document.documentElement.clientHeight||s.document.body.clientHeight;r={x:l,y:f},n=this.isInView(t,l,f)}else void 0!==e.mozInnerScreenY&&(t={x:e.mozInnerScreenX-e.screenX-4,y:e.mozInnerScreenY-e.screenY-40},r={x:screen.width-8,y:screen.height-119},n=this.isInView(t,r.x,r.y));return(void 0!==n&&void 0!==document.hidden&&document.hidden||i&&!e.top.document.hasFocus())&&(n=!1,o=3),{p:t,w:r,v:n,s:o}}};var c=function(n){var r,o="";try{n=e(n,0);var c=e(new i(n),1),d=c.getViewabilityData(window);void 0!==d.v&&(o+="&"+n.iv+"="+(d.v?1:0)),void 0!==d.p&&(o+="&"+n.pos+"="+Math.round(d.p.x)+","+Math.round(d.p.y)),void 0!==d.w&&(o+="&"+n.ws+"="+Math.round(d.w.x)+","+Math.round(d.w.y)),r=d.s,window._anxpv=d}catch(a){"undefined"!=typeof console,r=2,t(a,"AnViewModule::executeViewability")}return void 0!==r&&(o+="&"+n.vs+"="+r),"undefined"!=typeof console,o};;var s="http://ib.adnxs.com/ttj?ttjb=1&bdc=1470052680&bdh=cW5WxFwWca1lvP94ls3lwDtcsGA.";s+=c({iv:"view_iv",pos:"view_pos",ws:"view_ws",vs:"view_vs"}),s+="&"+o({rdRef:"bdref",rdTop:"bdtop",rdIfs:"bdifs",rdStk:"bstk",rdQs:"&id=5712578&cb=3211a174b1"}),n(s)}();