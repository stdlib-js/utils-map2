// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-shapes@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-maybe-broadcast-array@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@v0.2.1-esm/index.mjs";var p="throw";function j(r,e,s,t,n){var i,o,a,d,h,l,f,j,c,v,g,w,b,y,x,E,V,X,u,T,B,k,H,z;if(x=r.length,w=r.shape,b=e.shape,y=s.shape,i=r.data,o=e.data,a=s.data,E=r.strides,V=e.strides,X=s.strides,u=r.offset,T=e.offset,B=s.offset,d=r.order,h=e.order,l=s.order,f=r.accessors[0],j=e.accessors[0],c=s.accessors[1],v=r.ref,g=e.ref,0!==w.length||0!==b.length)for(z=0;z<x;z++)k=m(w,E,u,d,z,p),H=m(b,V,T,h,z,p),c(a,m(y,X,B,l,z,p),t.call(n,f(i,k),j(o,H),z,[v,g]));else c(a,B,t.call(n,f(i,u),j(o,T),0,[v,g]))}function c(r,e,s,t,n){var i,o,a,d,h,l,m;for(i=r.data,o=e.data,a=s.data,d=r.accessors[0],h=e.accessors[0],l=s.accessors[1],m=0;m<i.length;m++)l(a,m,t.call(n,d(i,m),h(o,m),m,[i,o]))}function v(r,m,f,p){var v,g,w,b,y;if(!t(f))throw new TypeError(l("1VX2H",f));if(v=s(r),g=s(m),v){if(!g)throw new TypeError(l("1VXBI",m));if(null===(y=d([r.shape,m.shape])))throw new Error(l("1VX1j"));return(b=i(h(r,y))).ref=r,r=b,(b=i(h(m,y))).ref=m,m=b,w=a(y,{dtype:"generic",order:r.order}),j(r,m,i(w),f,p),w}if(e(r)){if(g||!e(m))throw new TypeError(l("1VXBK",m));if(m.length!==r.length)throw new RangeError(l("1VXD3"));return w=n(r.length),c(o(r),o(m),o(w),f,p),w}throw new TypeError(l("1VXBH",r))}function g(r,n,a,d,m){var p,v,g,w,b;if(!t(d))throw new TypeError(l("1VX32",d));if(p=s(r),v=s(n),g=s(a),p){if(!v)throw new TypeError(l("1VXBI",n));if(!g)throw new TypeError(l("1VXBJ",a));if(f(a))throw new Error(l("1VX1g"));return b=(a=i(a)).shape,(w=i(h(r,b))).ref=r,r=w,(w=i(h(n,b))).ref=n,j(r,n=w,a,d,m),a.ref}if(e(r)){if(v||!e(n))throw new TypeError(l("1VXBK",n));if(g||!e(a))throw new TypeError(l("1VXBL",a));if(r.length!==n.length||n.length!==a.length)throw new RangeError(l("1VX1h"));return c(o(r),o(n),o(a),d,m),a}throw new TypeError(l("1VXBH",r))}r(v,"assign",g);export{g as assign,v as default};
//# sourceMappingURL=index.mjs.map
