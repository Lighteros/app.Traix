(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[780],{27130:function(e,t,n){"use strict";n.d(t,{Ry:function(){return f}});var r=new WeakMap,o=new WeakMap,a={},i=0,u=function(e){return e&&(e.host||u(e.parentNode))},c=function(e,t,n,c){var f=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=u(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var l=a[n],s=[],d=new Set,p=new Set(f),v=function(e){!e||d.has(e)||(d.add(e),v(e.parentNode))};f.forEach(v);var m=function(e){!e||p.has(e)||Array.prototype.forEach.call(e.children,function(e){if(d.has(e))m(e);else{var t=e.getAttribute(c),a=null!==t&&"false"!==t,i=(r.get(e)||0)+1,u=(l.get(e)||0)+1;r.set(e,i),l.set(e,u),s.push(e),1===i&&a&&o.set(e,!0),1===u&&e.setAttribute(n,"true"),a||e.setAttribute(c,"true")}})};return m(t),d.clear(),i++,function(){s.forEach(function(e){var t=r.get(e)-1,a=l.get(e)-1;r.set(e,t),l.set(e,a),t||(o.has(e)||e.removeAttribute(c),o.delete(e)),a||e.removeAttribute(n)}),--i||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},f=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),c(r,o,n,"aria-hidden")):function(){return null}}},77323:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(o of t.entries())if(!n.has(o[0]))return!1;for(o of t.entries())if(!e(o[1],n.get(o[0])))return!1;return!0}if(t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(o of t.entries())if(!n.has(o[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(t[o]!==n[o])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var r,o,a,i=a[o];if(("_owner"!==i||!t.$$typeof)&&!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n}},82397:function(e,t,n){function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o,a=r(n(8077)),i=n(7653),u=r(i),c=r(n(77323)),f=r(n(49418));function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var d={},p=function(){},v=(o=a.loadAnimation,i.memo(i.forwardRef(function(e,t){var n,r,a=e.play,v=void 0===a?null:a,m=e.speed,h=void 0===m?1:m,g=e.direction,y=void 0===g?1:g,E=e.segments,b=void 0===E?null:E,w=e.goTo,S=void 0===w?null:w,A=e.useSubframes,O=void 0===A||A,D=e.renderer,C=void 0===D?"svg":D,M=e.loop,R=void 0===M||M,L=e.rendererSettings,j=void 0===L?d:L,k=e.audioFactory,T=e.onLoad,x=void 0===T?p:T,P=e.onComplete,_=void 0===P?p:P,F=e.onLoopComplete,N=void 0===F?p:F,I=e.onEnterFrame,W=void 0===I?p:I,B=e.onSegmentStart,Z=void 0===B?p:B,V=s(e,["play","speed","direction","segments","goTo","useSubframes","renderer","loop","rendererSettings","audioFactory","onLoad","onComplete","onLoopComplete","onEnterFrame","onSegmentStart"]),z=V;"animationData"in V&&(n=V.animationData,z=s(V,["animationData"])),"path"in V&&(r=V.path,z=s(V,["path"]));var K=i.useRef(null),X=i.useRef(),Y=i.useCallback(function(){if(null==X.current)throw Error("Lottie ref is not set");return X.current},[]),q=i.useState(!1),H=q[0],U=q[1],$=i.useState(b),G=$[0],J=$[1];i.useEffect(function(){c(G,b)||J(b)},[b,G]);var Q=i.useState(j),ee=Q[0],et=Q[1];i.useEffect(function(){c(ee,j)||et(j)},[j,ee]),i.useEffect(function(){return function(){return Y().removeEventListener("complete",_)}},[Y,_]),i.useEffect(function(){return function(){return Y().removeEventListener("loopComplete",N)}},[Y,N]),i.useEffect(function(){return function(){return Y().removeEventListener("enterFrame",W)}},[Y,W]),i.useEffect(function(){return function(){return Y().removeEventListener("segmentStart",Z)}},[Y,Z]),i.useEffect(function(){return function(){return Y().removeEventListener("DOMLoaded",x)}},[Y,x]);var en=i.useCallback(function(e){X.current=e,"function"==typeof t?t(e):null!=t&&(t.current=e)},[t]);i.useEffect(function(){if(null==K.current)throw Error("animElementRef is not set");en(o(l({animationData:null==n||"object"!=typeof n?n:"default"in n&&"object"==typeof n.default?f(n.default):f(n),path:r,container:K.current,renderer:C,loop:!1,autoplay:!1,rendererSettings:ee},k?{audioFactory:k}:{})));var e=function(){return U(!0)};return Y().addEventListener("DOMLoaded",e),function(){Y().removeEventListener("DOMLoaded",e),U(!1),Y().destroy(),en(void 0)}},[R,C,ee,n,r,k,en,Y]),i.useEffect(function(){Y().addEventListener("DOMLoaded",x)},[Y,x]),i.useEffect(function(){Y().addEventListener("complete",_)},[Y,_]),i.useEffect(function(){Y().addEventListener("loopComplete",N)},[Y,N]),i.useEffect(function(){Y().addEventListener("enterFrame",W)},[Y,W]),i.useEffect(function(){Y().addEventListener("segmentStart",Z)},[Y,Z]),i.useEffect(function(){H&&(Y().loop=R)},[H,R,Y]);var er=i.useRef(!1);return i.useEffect(function(){H&&(!0===v?G?(Y().playSegments(G,!0),er.current=!0,-1===y&&e("number"==typeof G[1]?G[1]:G[1][1])):(er.current&&Y().resetSegments(!0),er.current=!1,-1===y?e(Y().getDuration(!0)):Y().play()):!1===v&&Y().pause());function e(e){Y().goToAndPlay(e,!0),Y().setDirection(y)}},[v,G,H,y,Y]),i.useEffect(function(){H&&(Number.isNaN(h)||Y().setSpeed(h))},[h,H,Y]),i.useEffect(function(){H&&Y().setDirection(y)},[y,Y,H]),i.useEffect(function(){H&&null!=S&&(v?Y().goToAndPlay(S,!0):Y().goToAndStop(S,!0))},[Y,S,v,H]),i.useEffect(function(){Y().setSubframe&&Y().setSubframe(O)},[Y,O]),u.createElement("div",l({},z,{ref:K}))})));e.exports=v},59242:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=n(7653),a="right-scroll-bar-position",i="width-before-scroll-bar",u=n(64296),c=(0,n(98788)._)(),f=function(){},l=o.forwardRef(function(e,t){var n=o.useRef(null),a=o.useState({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:f}),i=a[0],l=a[1],s=e.forwardProps,d=e.children,p=e.className,v=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,E=e.inert,b=e.allowPinchZoom,w=e.as,S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),A=(0,u.q)([n,t]),O=r(r({},S),i);return o.createElement(o.Fragment,null,m&&o.createElement(g,{sideCar:c,removeScrollBar:v,shards:h,noIsolation:y,inert:E,setCallbacks:l,allowPinchZoom:!!b,lockRef:n}),s?o.cloneElement(o.Children.only(d),r(r({},O),{ref:A})):o.createElement(void 0===w?"div":w,r({},O,{className:p,ref:A}),d))});l.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},l.classNames={fullWidth:i,zeroRight:a};var s=n(69806),d=n(50304),p={left:0,top:0,right:0,gap:0},v=function(e){return parseInt(e||"",10)||0},m=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[v(n),v(r),v(o)]},h=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return p;var t=m(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},g=(0,d.Ws)(),y=function(e,t,n,r){var o=e.left,u=e.top,c=e.right,f=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(f,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(f,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(f,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(a," {\n    right: ").concat(f,"px ").concat(r,";\n  }\n  \n  .").concat(i," {\n    margin-right: ").concat(f,"px ").concat(r,";\n  }\n  \n  .").concat(a," .").concat(a," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(i," .").concat(i," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(f,"px;\n  }\n")},E=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=void 0===r?"margin":r,i=o.useMemo(function(){return h(a)},[a]);return o.createElement(g,{styles:y(i,!t,a,n?"":"!important")})},b=!1;if("undefined"!=typeof window)try{var w=Object.defineProperty({},"passive",{get:function(){return b=!0,!0}});window.addEventListener("test",w,w),window.removeEventListener("test",w,w)}catch(e){b=!1}var S=!!b&&{passive:!1},A=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},O=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),D(e,n)){var r=C(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},D=function(e,t){return"v"===e?A(t,"overflowY"):A(t,"overflowX")},C=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},M=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,c=n.target,f=t.contains(c),l=!1,s=u>0,d=0,p=0;do{var v=C(e,c),m=v[0],h=v[1]-v[2]-i*m;(m||h)&&D(e,c)&&(d+=h,p+=m),c=c.parentNode}while(!f&&c!==document.body||f&&(t.contains(c)||t===c));return s&&(o&&0===d||!o&&u>d)?l=!0:!s&&(o&&0===p||!o&&-u>p)&&(l=!0),l},R=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},L=function(e){return[e.deltaX,e.deltaY]},j=function(e){return e&&"current"in e?e.current:e},k=0,T=[],x=(0,s.L)(c,function(e){var t=o.useRef([]),n=o.useRef([0,0]),r=o.useRef(),a=o.useState(k++)[0],i=o.useState(function(){return(0,d.Ws)()})[0],u=o.useRef(e);o.useEffect(function(){u.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(j),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var c=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!u.current.allowPinchZoom;var o,a=R(e),i=n.current,c="deltaX"in e?e.deltaX:i[0]-a[0],f="deltaY"in e?e.deltaY:i[1]-a[1],l=e.target,s=Math.abs(c)>Math.abs(f)?"h":"v";if("touches"in e&&"h"===s&&"range"===l.type)return!1;var d=O(s,l);if(!d)return!0;if(d?o=s:(o="v"===s?"h":"v",d=O(s,l)),!d)return!1;if(!r.current&&"changedTouches"in e&&(c||f)&&(r.current=o),!o)return!0;var p=r.current||o;return M(p,t,e,"h"===p?c:f,!0)},[]),f=o.useCallback(function(e){if(T.length&&T[T.length-1]===i){var n="deltaY"in e?L(e):R(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(j).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?c(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=o.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),s=o.useCallback(function(e){n.current=R(e),r.current=void 0},[]),p=o.useCallback(function(t){l(t.type,L(t),t.target,c(t,e.lockRef.current))},[]),v=o.useCallback(function(t){l(t.type,R(t),t.target,c(t,e.lockRef.current))},[]);o.useEffect(function(){return T.push(i),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:v}),document.addEventListener("wheel",f,S),document.addEventListener("touchmove",f,S),document.addEventListener("touchstart",s,S),function(){T=T.filter(function(e){return e!==i}),document.removeEventListener("wheel",f,S),document.removeEventListener("touchmove",f,S),document.removeEventListener("touchstart",s,S)}},[]);var m=e.removeScrollBar,h=e.inert;return o.createElement(o.Fragment,null,h?o.createElement(i,{styles:"\n  .block-interactivity-".concat(a," {pointer-events: none;}\n  .allow-interactivity-").concat(a," {pointer-events: all;}\n")}):null,m?o.createElement(E,{gapMode:"margin"}):null)}),P=o.forwardRef(function(e,t){return o.createElement(l,r({},e,{ref:t,sideCar:x}))});P.classNames=l.classNames;var _=P},50304:function(e,t,n){"use strict";n.d(t,{Ws:function(){return u}});var r,o=n(7653),a=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,i;(a=t).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},i=function(){var e=a();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},u=function(){var e=i();return function(t){return e(t.styles,t.dynamic),null}}},49418:function(e,t,n){"use strict";e.exports=n(82186)()},82186:function(e,t,n){"use strict";var r=n(87376).Buffer;function o(e){return e instanceof r?r.from(e):new e.constructor(e.buffer.slice(),e.byteOffset,e.length)}e.exports=function(e){if((e=e||{}).circles)return function(e){var t=[],n=[];return e.proto?function e(a){if("object"!=typeof a||null===a)return a;if(a instanceof Date)return new Date(a);if(Array.isArray(a))return r(a,e);if(a instanceof Map)return new Map(r(Array.from(a),e));if(a instanceof Set)return new Set(r(Array.from(a),e));var i={};for(var u in t.push(a),n.push(i),a){var c=a[u];if("object"!=typeof c||null===c)i[u]=c;else if(c instanceof Date)i[u]=new Date(c);else if(c instanceof Map)i[u]=new Map(r(Array.from(c),e));else if(c instanceof Set)i[u]=new Set(r(Array.from(c),e));else if(ArrayBuffer.isView(c))i[u]=o(c);else{var f=t.indexOf(c);-1!==f?i[u]=n[f]:i[u]=e(c)}}return t.pop(),n.pop(),i}:function e(a){if("object"!=typeof a||null===a)return a;if(a instanceof Date)return new Date(a);if(Array.isArray(a))return r(a,e);if(a instanceof Map)return new Map(r(Array.from(a),e));if(a instanceof Set)return new Set(r(Array.from(a),e));var i={};for(var u in t.push(a),n.push(i),a)if(!1!==Object.hasOwnProperty.call(a,u)){var c=a[u];if("object"!=typeof c||null===c)i[u]=c;else if(c instanceof Date)i[u]=new Date(c);else if(c instanceof Map)i[u]=new Map(r(Array.from(c),e));else if(c instanceof Set)i[u]=new Set(r(Array.from(c),e));else if(ArrayBuffer.isView(c))i[u]=o(c);else{var f=t.indexOf(c);-1!==f?i[u]=n[f]:i[u]=e(c)}}return t.pop(),n.pop(),i};function r(e,r){for(var a=Object.keys(e),i=Array(a.length),u=0;u<a.length;u++){var c=a[u],f=e[c];if("object"!=typeof f||null===f)i[c]=f;else if(f instanceof Date)i[c]=new Date(f);else if(ArrayBuffer.isView(f))i[c]=o(f);else{var l=t.indexOf(f);-1!==l?i[c]=n[l]:i[c]=r(f)}}return i}}(e);return e.proto?function e(n){if("object"!=typeof n||null===n)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return t(n,e);if(n instanceof Map)return new Map(t(Array.from(n),e));if(n instanceof Set)return new Set(t(Array.from(n),e));var r={};for(var a in n){var i=n[a];"object"!=typeof i||null===i?r[a]=i:i instanceof Date?r[a]=new Date(i):i instanceof Map?r[a]=new Map(t(Array.from(i),e)):i instanceof Set?r[a]=new Set(t(Array.from(i),e)):ArrayBuffer.isView(i)?r[a]=o(i):r[a]=e(i)}return r}:function e(n){if("object"!=typeof n||null===n)return n;if(n instanceof Date)return new Date(n);if(Array.isArray(n))return t(n,e);if(n instanceof Map)return new Map(t(Array.from(n),e));if(n instanceof Set)return new Set(t(Array.from(n),e));var r={};for(var a in n)if(!1!==Object.hasOwnProperty.call(n,a)){var i=n[a];"object"!=typeof i||null===i?r[a]=i:i instanceof Date?r[a]=new Date(i):i instanceof Map?r[a]=new Map(t(Array.from(i),e)):i instanceof Set?r[a]=new Set(t(Array.from(i),e)):ArrayBuffer.isView(i)?r[a]=o(i):r[a]=e(i)}return r};function t(e,t){for(var n=Object.keys(e),r=Array(n.length),a=0;a<n.length;a++){var i=n[a],u=e[i];"object"!=typeof u||null===u?r[i]=u:u instanceof Date?r[i]=new Date(u):ArrayBuffer.isView(u)?r[i]=o(u):r[i]=t(u)}return r}}},64296:function(e,t,n){"use strict";n.d(t,{q:function(){return o}});var r=n(7653);function o(e,t){var n,o,a;return n=t||null,o=function(t){return e.forEach(function(e){return"function"==typeof e?e(t):e&&(e.current=t),e})},(a=(0,r.useState)(function(){return{value:n,callback:o,facade:{get current(){return a.value},set current(value){var e=a.value;e!==value&&(a.value=value,a.callback(value,e))}}}})[0]).callback=o,a.facade}},69806:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=n(29303),o=n(7653),a=function(e){var t=e.sideCar,n=(0,r._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw Error("Sidecar medium not found");return o.createElement(a,(0,r.pi)({},n))};function i(e,t){return e.useMedium(t),a}a.isSideCarExport=!0},98788:function(e,t,n){"use strict";n.d(t,{_:function(){return a}});var r=n(29303);function o(e){return e}function a(e){void 0===e&&(e={});var t,n,a,i=(void 0===t&&(t=o),n=[],a=!1,{read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var r=t(e,a);return n.push(r),function(){n=n.filter(function(e){return e!==r})}},assignSyncMedium:function(e){for(a=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){a=!0;var t=[];if(n.length){var r=n;n=[],r.forEach(e),t=n}var o=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(o)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return i.options=(0,r.pi)({async:!0,ssr:!1},e),i}},29303:function(e,t,n){"use strict";n.d(t,{_T:function(){return o},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}},21293:function(e,t,n){"use strict";let r;n.d(t,{x8:function(){return en},VY:function(){return ee},aV:function(){return Q},h_:function(){return J},fC:function(){return G},Dx:function(){return et}});var o=n(17610),a=n(7653),i=n(46196),u=n(94492),c=n(99933),f=n(17321),l=n(47178),s=n(14184),d=n(78378),p=n(523);let v="focusScope.autoFocusOnMount",m="focusScope.autoFocusOnUnmount",h={bubbles:!1,cancelable:!0},g=(0,a.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:c,...f}=e,[l,s]=(0,a.useState)(null),g=(0,p.W)(i),S=(0,p.W)(c),A=(0,a.useRef)(null),O=(0,u.e)(t,e=>s(e)),D=(0,a.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,a.useEffect)(()=>{if(r){function e(e){if(D.paused||!l)return;let t=e.target;l.contains(t)?A.current=t:b(A.current,{select:!0})}function t(e){if(D.paused||!l)return;let t=e.relatedTarget;null===t||l.contains(t)||b(A.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;for(let n of e)n.removedNodes.length>0&&!(null!=l&&l.contains(t))&&b(l)});return l&&n.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,l,D.paused]),(0,a.useEffect)(()=>{if(l){w.add(D);let e=document.activeElement;if(!l.contains(e)){let t=new CustomEvent(v,h);l.addEventListener(v,g),l.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(b(r,{select:t}),document.activeElement!==n)return}(y(l).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&b(l))}return()=>{l.removeEventListener(v,g),setTimeout(()=>{let t=new CustomEvent(m,h);l.addEventListener(m,S),l.dispatchEvent(t),t.defaultPrevented||b(null!=e?e:document.body,{select:!0}),l.removeEventListener(m,S),w.remove(D)},0)}}},[l,g,S,D]);let C=(0,a.useCallback)(e=>{if(!n&&!r||D.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=y(e);return[E(t,e),E(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&b(a,{select:!0})):(e.preventDefault(),n&&b(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,D.paused]);return(0,a.createElement)(d.WV.div,(0,o.Z)({tabIndex:-1},f,{ref:O,onKeyDown:C}))});function y(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function E(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function b(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let w=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=S(r,e)).unshift(e)},remove(e){var t;null===(t=(r=S(r,e))[0])||void 0===t||t.resume()}});function S(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var A=n(20153),O=n(65622),D=n(60307),C=n(59242),M=n(27130),R=n(8828);let L="Dialog",[j,k]=(0,c.b)(L),[T,x]=j(L),P="DialogPortal",[_,F]=j(P,{forceMount:void 0}),N="DialogOverlay",I=(0,a.forwardRef)((e,t)=>{let n=F(N,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,u=x(N,e.__scopeDialog);return u.modal?(0,a.createElement)(O.z,{present:r||u.open},(0,a.createElement)(W,(0,o.Z)({},i,{ref:t}))):null}),W=(0,a.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,i=x(N,n);return(0,a.createElement)(C.Z,{as:R.g7,allowPinchZoom:!0,shards:[i.contentRef]},(0,a.createElement)(d.WV.div,(0,o.Z)({"data-state":H(i.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),B="DialogContent",Z=(0,a.forwardRef)((e,t)=>{let n=F(B,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,u=x(B,e.__scopeDialog);return(0,a.createElement)(O.z,{present:r||u.open},u.modal?(0,a.createElement)(V,(0,o.Z)({},i,{ref:t})):(0,a.createElement)(z,(0,o.Z)({},i,{ref:t})))}),V=(0,a.forwardRef)((e,t)=>{let n=x(B,e.__scopeDialog),r=(0,a.useRef)(null),c=(0,u.e)(t,n.contentRef,r);return(0,a.useEffect)(()=>{let e=r.current;if(e)return(0,M.Ry)(e)},[]),(0,a.createElement)(K,(0,o.Z)({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,i.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,i.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,i.M)(e.onFocusOutside,e=>e.preventDefault())}))}),z=(0,a.forwardRef)((e,t)=>{let n=x(B,e.__scopeDialog),r=(0,a.useRef)(!1),i=(0,a.useRef)(!1);return(0,a.createElement)(K,(0,o.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,a;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{var o,a;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(i.current=!0));let u=t.target;(null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}}))}),K=(0,a.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:c,...f}=e,l=x(B,n),d=(0,a.useRef)(null),p=(0,u.e)(t,d);return(0,D.EW)(),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(g,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:c},(0,a.createElement)(s.XB,(0,o.Z)({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":H(l.open)},f,{ref:p,onDismiss:()=>l.onOpenChange(!1)}))),!1)}),X="DialogTitle",Y=(0,a.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,i=x(X,n);return(0,a.createElement)(d.WV.h2,(0,o.Z)({id:i.titleId},r,{ref:t}))}),q=(0,a.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,u=x("DialogClose",n);return(0,a.createElement)(d.WV.button,(0,o.Z)({type:"button"},r,{ref:t,onClick:(0,i.M)(e.onClick,()=>u.onOpenChange(!1))}))});function H(e){return e?"open":"closed"}let[U,$]=(0,c.k)("DialogTitleWarning",{contentName:B,titleName:X,docsSlug:"dialog"}),G=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:u=!0}=e,c=(0,a.useRef)(null),s=(0,a.useRef)(null),[d=!1,p]=(0,l.T)({prop:r,defaultProp:o,onChange:i});return(0,a.createElement)(T,{scope:t,triggerRef:c,contentRef:s,contentId:(0,f.M)(),titleId:(0,f.M)(),descriptionId:(0,f.M)(),open:d,onOpenChange:p,onOpenToggle:(0,a.useCallback)(()=>p(e=>!e),[p]),modal:u},n)},J=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=x(P,t);return(0,a.createElement)(_,{scope:t,forceMount:n},a.Children.map(r,e=>(0,a.createElement)(O.z,{present:n||i.open},(0,a.createElement)(A.h,{asChild:!0,container:o},e))))},Q=I,ee=Z,et=Y,en=q},60307:function(e,t,n){"use strict";n.d(t,{EW:function(){return a}});var r=n(7653);let o=0;function a(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:i()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:i()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function i(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}}}]);