"use strict";var j=function(u,t){return function(){return t||u((t={exports:{}}).exports,t),t.exports}};var A=j(function(J,k){
function P(u,t,s,a,p,w,o,l,n){var f,d,m,y;for(f=w,m=0;m<u;m++){for(d=n,y=0;y<t&&s[f+y*p]===o[d];y++)d+=l;if(y===t)return m;f+=a}return-1}k.exports=P
});var N=j(function(K,R){
var I=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,U=require('@stdlib/assert-is-positive-integer/dist'),O=require('@stdlib/assert-is-integer/dist').isPrimitive,S=require('@stdlib/assert-is-function-array/dist'),B=require('@stdlib/assert-is-function/dist'),F=require('@stdlib/assert-is-collection/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist'),C=require('@stdlib/math-base-special-abs/dist'),z=A();function D(u,t,s,a,p,w){var o,l,n,f,d,m;if(B(u))m=u;else if(!S(u))throw new TypeError(i('1Nn5d',u));if(!F(t))throw new TypeError(i('1Nn2y',t));if(!F(s)&&s!==null)throw new TypeError(i('1Nn5e',s));if(!U(a))throw new TypeError(i('1Nn5f',a));if(!I(p))throw new TypeError(i('1Nn5X',p));if(!I(w))throw new TypeError(i('1Nn5g',w));if(n=p+w,n===0)throw new Error(format('1Nn1M'));if(m){if(f=t.length/n,!O(f))throw new Error(format('1Nn1N'))}else if(f=u.length,t.length!==f*n)throw new Error(format('1Nn1N'));if(s&&s.length!==f)throw new Error(format('1Nn0k'));if(n*3+1===a)l=!1;else if(n*4+1===a)l=!0;else throw new Error(format('1Nn1O'));return l?o=4:o=3,d=p*o+1,y;function y(){var v,E,h,V,T,q,g,c,r,b,e,x;if(q=arguments.length,q!==a)throw q<a?new Error(format('1Nn0l')):new Error(format('1Nn0m'));if(c=arguments[0],!O(c))throw new TypeError(i('1Nn7e',c));for(T=[c],V=[],e=1;e<a;e+=o)V.push(arguments[e]);for(v=[],e=3;e<a;e+=o){if(r=arguments[e],!O(r))throw e<d?new TypeError(i('1NnAH',r)):new TypeError(i('1NnAI',r));v.push(r)}if(l)for(E=[],e=4;e<a;e+=o){if(r=arguments[e],!I(r))throw e<d?new TypeError(i('1NnAG',r)):new TypeError(i('1NnAE',r));E.push(r)}for(h=[],e=2;e<a;e+=o){if(r=arguments[e],!F(r))throw e<d?new TypeError(i('1NnDg',r)):new TypeError(i('1NnDh',r));if(x=(e-2)/o,l){if(g=E[x]+(c-1)*v[x],c>0&&(g<0||g>=r.length))throw e<d?new RangeError(format('1Nn1T')):new RangeError(format('1Nn1U'))}else if((c-1)*C(v[x])>=r.length)throw e<d?new RangeError(format('1Nn1T')):new RangeError(format('1Nn1U'));h.push(r)}if(g=z(f,n,t,n,1,0,V,1,0),g<0)throw new TypeError(format('1Nn1L'));if(m?b=m:b=u[g],s?l?b(h,T,v,E,s[g]):b(h,T,v,s[g]):l?b(h,T,v,E):b(h,T,v),w===1)return h[n-1];if(w!==0)return h.slice(p)}}R.exports=D
});var G=N();module.exports=G;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
