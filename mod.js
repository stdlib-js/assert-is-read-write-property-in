// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t=void 0!==Object.getOwnPropertyDescriptor,e=Object.getOwnPropertyDescriptor;var n=function(r,t){var n;return null==r||void 0===(n=e(r,t))?null:n},o=Object.prototype.hasOwnProperty;var u=function(r,t){return null!=r&&o.call(r,t)},i=u;var c=t?n:function(r,t){return i(r,t)?{configurable:!0,enumerable:!0,writable:!0,value:r[t]}:null},a=/./,l="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=function(){try{return l({},"x",{}),!0}catch(r){return!1}},p=Object.defineProperty,v=Object.prototype,y=v.toString,b=v.__defineGetter__,s=v.__defineSetter__,_=v.__lookupGetter__,j=v.__lookupSetter__;var d=function(r,t,e){var n,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===y.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(_.call(r,t)||j.call(r,t)?(n=r.__proto__,r.__proto__=v,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&b&&b.call(r,t,e.get),i&&s&&s.call(r,t,e.set),r},g=p,w=d,O=f()?g:w;var m=function(r,t,e){O(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},h=m;var P=function(r){return"boolean"==typeof r};var S=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var E=function(){return S&&"symbol"==typeof Symbol.toStringTag},A=Object.prototype.toString,B=A;var T=function(r){return B.call(r)},k="function"==typeof Symbol?Symbol.toStringTag:"",x=u,G=k,M=A;var V=T,C=function(r){var t,e,n;if(null==r)return M.call(r);e=r[G],t=x(r,G);try{r[G]=void 0}catch(t){return M.call(r)}return n=M.call(r),t?r[G]=e:delete r[G],n},D=E()?C:V,F=Boolean.prototype.toString;var L=D,R=function(r){try{return F.call(r),!0}catch(r){return!1}},X=E();var z=function(r){return"object"==typeof r&&(r instanceof Boolean||(X?R(r):"[object Boolean]"===L(r)))},I=P,N=z;var U=h,q=function(r){return I(r)||N(r)},H=z;U(q,"isPrimitive",P),U(q,"isObject",H);var J="object"==typeof self?self:null,K="object"==typeof window?window:null,Q=q.isPrimitive,W=function(){return new Function("return this;")()},Y=J,Z=K,$=r(Object.freeze({__proto__:null}));var rr=function(r){if(arguments.length){if(!Q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return W()}if(Y)return Y;if(Z)return Z;if($)return $;throw new Error("unexpected error. Unable to resolve global object.")},tr=rr(),er=tr.document&&tr.document.childNodes,nr=Int8Array,or=a,ur=er,ir=nr;var cr=function(){return"function"==typeof or||"object"==typeof ir||"function"==typeof ur};var ar=function(){return/^\s*function\s*([^(]*)/i},lr=ar;h(lr,"REGEXP",ar());var fr=lr,pr=D;var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===pr(r)};var yr=function(r){return null!==r&&"object"==typeof r};h(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!vr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(yr));var br=yr;var sr=D,_r=fr.REGEXP,jr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var dr=function(r){var t,e,n;if(("Object"===(e=sr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=_r.exec(n.toString()))return t[1]}return jr(r)?"Buffer":e},gr=dr;var wr=dr;var Or=function(r){var t;return null===r?"null":"object"===(t=typeof r)?gr(r).toLowerCase():t},mr=function(r){return wr(r).toLowerCase()},hr=cr()?mr:Or;var Pr=function(r){return"function"===hr(r)},Sr=Object.getPrototypeOf;var Er=function(r){return r.__proto__},Ar=D,Br=Er;var Tr=function(r){var t=Br(r);return t||null===t?t:"[object Function]"===Ar(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},kr=Sr,xr=Tr,Gr=Pr(Object.getPrototypeOf)?kr:xr;var Mr=c,Vr=function(r){return null==r?null:(r=Object(r),Gr(r))};var Cr=function(r,t){var e,n;if(null==r)return null;n=Object(r);do{if(e=Mr(n,t))return e;n=Vr(n)}while(n);return null},Dr=Cr;var Fr=function(r,t){var e=Dr(r,t);return null!==e&&(!0===e.writable||"function"==typeof e.get&&"function"==typeof e.set)};export{Fr as default};
//# sourceMappingURL=mod.js.map
