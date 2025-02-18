import{gh as K,jd as L,je as Q,jf as X,im as W,jg as cn,b1 as fn,jh as pn,ji as An,jj as mn,ar as U,b2 as Z,aw as x,ax as S,jk as gn,b8 as Tn,ay as yn,jl as nn,jm as Rn,jn as tn,jo as G,jp as rn,jq as En,hy as Fn,f9 as Nn,ai as On,iD as I,e9 as dn,ec as $n,jr as hn}from"./index-lgQOPtME.js";import{a as en,w as wn}from"./spatialReferenceEllipsoidUtils-DxOUB5AL.js";import{C as $}from"./computeTranslationToOriginAndRotation-BFFQg_qE.js";import{a as _n,m as Pn}from"./meshVertexSpaceUtils-B2Vq9jie.js";import{f as b,l as on,i as _,e as V}from"./vec3-BO3iRWnv.js";import{i as O,T as d}from"./BufferView-C5J_dkNC.js";import{n as Cn}from"./vec4-NEFdDkNT.js";const rt="Projection may be possible after calling projection.load().";function E(n,t,r,o){n.error(`Failed to project from (wkid:${t.wkid}) to (wkid:${r.wkid}).${o?" ":""}${o}`)}function Mn(n,t,r,o,e,l){return v(N.TO_PCPF,O.fromTypedArray(n),m.NORMAL,d.fromTypedArray(t),r,d.fromTypedArray(o),e,O.fromTypedArray(l))?l:null}function xn(n,t,r,o,e,l){return v(N.FROM_PCPF,O.fromTypedArray(n),m.NORMAL,d.fromTypedArray(t),r,d.fromTypedArray(o),e,O.fromTypedArray(l))?l:null}function Sn(n,t,r,o){return K(n,t,0,r,o,0)?r:null}function vn(n,t,r,o){return K(n,t,0,r,o,0)?r:null}function an(n,t,r){return L(p,r),b(t,n,p),Q(p)&&on(t,t),t}function ln(n,t,r){return X(p,r),Cn(t,n,p),Q(p)&&on(t,t,4),t}function et(n,t,r,o){const e=t===m.NORMAL;return sn(n,t,r,(l,a)=>{const i=Math.cos(Tn(l));a[0]=e?i:1/i,a[1]=1},o)}function ot(n,t,r,o){const e=t===m.NORMAL;return sn(n,t,r,(l,a)=>{const i=Math.cosh(-l/gn.radius);a[0]=1,a[1]=e?i:1/i},o)}function sn(n,t,r,o,e){const l=t===m.NORMAL?3:4,a=[0,0];for(let i=0,c=1;i<n.length;i+=l,c+=3){o(r[c],a);const s=n[i]*a[0],f=n[i+1]*a[1],u=n[i+2],T=1/Math.sqrt(s*s+f*f+u*u);e[i]=s*T,e[i+1]=f*T,e[i+2]=u*T,l===4&&(e[i+3]=n[i+3])}return e}function jn(n,t,r,o,e,l){if(!v(N.TO_PCPF,O.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),m.TANGENT,d.fromTypedArray(t),r,d.fromTypedArray(o),e,O.fromTypedArray(l,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}function Gn(n,t,r,o,e,l){if(!v(N.FROM_PCPF,O.fromTypedArray(n,16),m.TANGENT,d.fromTypedArray(t),r,d.fromTypedArray(o),e,O.fromTypedArray(l,16)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}var m,N;function z(n,t,r,o,e){switch($(o,r,h,o),n===N.FROM_PCPF&&x(h,h),t){case m.NORMAL:return L(e,h);case m.TANGENT:return X(e,h)}}function v(n,t,r,o,e,l,a,i){if(!t)return;const c=o.count;if(Ln(e))for(let s=0;s<c;s++)l.getVec(s,M),t.getVec(s,R),W(R,R,z(n,r,M,a,p)),i.setVec(s,R);else for(let s=0;s<c;s++){l.getVec(s,M),t.getVec(s,R);const f=cn(o.get(s,1));let u=Math.cos(f);r===m.TANGENT!=(n===N.TO_PCPF)&&(u=1/u),z(n,r,M,a,p),n===N.TO_PCPF?(p[0]*=u,p[1]*=u,p[2]*=u,p[3]*=u,p[4]*=u,p[5]*=u):(p[0]*=u,p[3]*=u,p[6]*=u,p[1]*=u,p[4]*=u,p[7]*=u),W(R,R,p),fn(R,R),i.setVec(s,R)}return i}function Ln(n){return n.isWGS84||pn(n)||An(n)||mn(n)}(function(n){n[n.NORMAL=0]="NORMAL",n[n.TANGENT=1]="TANGENT"})(m||(m={})),function(n){n[n.TO_PCPF=0]="TO_PCPF",n[n.FROM_PCPF=1]="FROM_PCPF"}(N||(N={}));const M=U(),R=U(),h=S(),p=Z(),g=()=>On.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function at(n,t,{vertexSpace:r,spatialReference:o}){if(r.type==="georeferenced"){const s=n;if(!I(t,s,o))return!1;const{origin:f}=r;return dn(n,s,f),!0}const e=en(o),l=n;if(!I(t,l,e))return!1;const{origin:a}=r,i=J;if(!$(o,a,i,e))return!1;const c=x(J,i);return c!=null&&($n(n,l,c),!0)}function lt(n,t,r){const{vertexSpace:o,transform:e,vertexAttributes:l}=n,a=_n(o)?e:null,i=j(n.spatialReference,r,F.SOURCE_AND_TARGET);if(Pn(o,t)&&(!a||yn(a.localMatrix,nn))&&P(i)){const{position:c,normal:s,tangent:f}=l,u=r==null?void 0:r.allowBufferReuse;return{position:u?c:c.slice(),normal:u?s:s==null?void 0:s.slice(),tangent:u?f:f==null?void 0:f.slice()}}switch(n.vertexSpace.type){case"local":return t.type==="local"?kn(n,n.vertexSpace,t.origin,r):bn(n,n.vertexSpace,t.origin,r);case"georeferenced":return t.type==="local"?Vn(n,n.vertexSpace,t.origin,r):Un(n,n.vertexSpace,t.origin,r)}}function Un({vertexAttributes:n,transform:t,spatialReference:r},{origin:o},e,l){const a=j(r,l,F.SOURCE_AND_TARGET),i=o||!P(a)?Rn(A,(t==null?void 0:t.localMatrix)??nn):null;i&&B(i,r,l,F.SOURCE_AND_TARGET);const{position:c,normal:s,tangent:f}=i?k(n,i):n,u=l==null?void 0:l.allowBufferReuse,T=u?c:new Float64Array(c.length);let y=c;if(o&&(y=_(T,y,o)),e){const C=tn(un,e);y=_(T,y,C)}return{position:y!==n.position||u?y:y.slice(),normal:s!==n.normal||u?s:s==null?void 0:s.slice(),tangent:f!==n.tangent||u?f:f==null?void 0:f.slice()}}function D(n,t){return t!=null&&t.useEllipsoid&&hn(n)?wn:en(n)}function bn({spatialReference:n,vertexAttributes:t,transform:r},{origin:o},e,l){const a=D(n,l);if(!$(n,o,A,a))return E(g(),n,a),null;r&&G(A,A,r.localMatrix),B(A,n,l,F.SOURCE);const i=new Float64Array(t.position.length),c=Bn(t.position,A,n,i,a);if(!c)return null;const s=qn(c,n,i,a,t.normal,A);if(t.normal&&!s)return null;const f=Yn(c,n,i,a,t.tangent,A);if(t.tangent&&!f)return null;if(e){const u=tn(un,e);_(c,c,u)}return{position:c,normal:s,tangent:f}}function Vn({vertexAttributes:n,spatialReference:t,transform:r},{origin:o},e,l){const a=D(t,l);if(!$(t,e,A,a))return E(g(),t,a),null;const i=1/j(t,l,F.TARGET);rn(A,A,[i,i,i]);const c=x(w,A),{position:s,normal:f,tangent:u}=Dn(n,o,r),T=new Float64Array(s.length),y=Wn(s,t,c,T,a);if(!y)return null;const C=L(Hn,c),q=In(f,s,t,T,a,C,f!==n.normal?f:void 0);if(!q&&f)return null;const Y=zn(u,s,t,T,a,C,u!==n.tangent?u:void 0);return!Y&&u?null:{position:y,normal:q,tangent:Y}}function Dn(n,t,r){if(!t)return n;if(!r){const{position:e,normal:l,tangent:a}=n;return{position:_(new Float64Array(e.length),e,t),tangent:a,normal:l}}const o=k(n,r.localMatrix);return _(o.position,o.position,t),o}function kn({vertexAttributes:n,spatialReference:t,transform:r},{origin:o},e,l){const a=D(t,l);if(!$(t,o,A,a))return E(g(),t,a),null;if(r&&G(A,A,r.localMatrix),!$(t,e,w,a))return E(g(),a,t),null;x(w,w);const i=G(A,w,A);return B(i,t,l,F.SOURCE_AND_TARGET),k(n,i)}function k(n,t){const r=new Float64Array(n.position.length);V(r,n.position,t);const o=n.normal?new Float32Array(n.normal.length):null,e=n.tangent?new Float32Array(n.tangent.length):null;return o&&n.normal&&an(n.normal,o,t),e&&n.tangent&&ln(n.tangent,e,t),{position:r,normal:o,tangent:e}}function Bn(n,t,r,o,e){V(o,n,t);const l=new Float64Array(n.length);return vn(o,e,l,r)?l:(E(g(),e,r),null)}function qn(n,t,r,o,e,l){if(e==null)return null;const a=new Float32Array(e.length);return an(e,a,l),xn(a,n,t,r,o,a)?a:(E(g(),o,t),null)}function Yn(n,t,r,o,e,l){if(e==null)return null;const a=new Float32Array(e.length);return ln(e,a,l),Gn(a,n,t,r,o,a)?a:(E(g(),o,t),null)}function B(n,t,r,o){const e=j(t,r,o);P(e)||rn(n,n,[e,e,e])}function j(n,t,r){const o=!!(r&F.SOURCE),e=!!(r&F.TARGET),l=t==null?void 0:t.sourceUnit,a=t==null?void 0:t.targetUnit;if(!l&&!a)return 1;let i=H(l,n);o||!l||P(i)||(g().warn("source unit conversion not supported"),i=1);let c=1/H(a,n);return e||!a||P(c)||(g().warn("target unit conversion not supported"),c=1),i*c}function P(n){return En(n,1)}function Wn(n,t,r,o,e){const l=Sn(n,t,o,e);if(!l)return E(g(),t,e),null;const a=new Float64Array(l.length);return V(a,l,r),a}function In(n,t,r,o,e,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Mn(n,t,r,o,e,i)?(b(i,i,l),i):(E(g(),r,e),null)}function zn(n,t,r,o,e,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return jn(n,t,r,o,e,i)?(b(i,i,l,4),i):(E(g(),r,e),null)}function H(n,t){if(n==null)return 1;const r=Fn(t);return 1/Nn(r,"meters",n)}const A=S(),w=S(),Hn=Z(),un=U(),J=S();var F;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET",n[n.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"})(F||(F={}));export{lt as B,ln as C,Mn as E,E as F,Gn as G,ot as L,rt as O,xn as R,m as V,an as _,et as b,Sn as g,vn as h,at as k,H as n,jn as w};
