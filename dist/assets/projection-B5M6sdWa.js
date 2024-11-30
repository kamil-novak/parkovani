import{c$ as C,d0 as j,d1 as h,d2 as S,d3 as R,d4 as w,bz as x,d5 as O,bP as $,d6 as v,d7 as z,b3 as B,d8 as Y,d9 as J,da as W,bA as G,db as q}from"./index-BkgwewGo.js";import{e as D}from"./mat3f64-q3fE-ZOt.js";import{o as g,e as H}from"./mat4f64-CSKppSlJ.js";import{a as E}from"./spatialReferenceEllipsoidUtils-CCU9XOQQ.js";import{u as b}from"./computeTranslationToOriginAndRotation-HVagAca8.js";import{t as L,o as I}from"./DoubleArray-9VDKuLtr.js";import{i as P,T as y}from"./BufferView-DqUBo4lT.js";import{f as K,l as V,e as k}from"./vec3-Dyeqak7h.js";import{n as Q}from"./vec4-CbeV_8lx.js";const cr="Projection may be possible after calling projection.load().";function lr(r,o,e,t){r.error(`Failed to project from (wkid:${o.wkid}) to (wkid:${e.wkid}).${t?" ":""}${t}`)}function ur(r,o,e,t,n){return M(T.TO_PCPF,P.fromTypedArray(r),m.NORMAL,y.fromTypedArray(o),y.fromTypedArray(e),t,P.fromTypedArray(n))?n:null}function pr(r,o,e,t,n){return M(T.FROM_PCPF,P.fromTypedArray(r),m.NORMAL,y.fromTypedArray(o),y.fromTypedArray(e),t,P.fromTypedArray(n))?n:null}function mr(r,o,e){return C(r,o,0,e,E(o),0,r.length/3)?e:null}function Tr(r,o,e){return C(r,E(e),0,o,e,0,r.length/3)?o:null}function Pr(r,o,e){return j(s,e),K(o,r,s),h(s)&&V(o,o),o}function yr(r,o,e){return S(s,e),Q(o,r,s),h(s)&&V(o,o,4),o}function dr(r,o,e,t,n){if(!M(T.TO_PCPF,P.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),m.TANGENT,y.fromTypedArray(o),y.fromTypedArray(e),t,P.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function Ar(r,o,e,t,n){if(!M(T.FROM_PCPF,P.fromTypedArray(r,16),m.TANGENT,y.fromTypedArray(o),y.fromTypedArray(e),t,P.fromTypedArray(n,16)))return null;for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}var m,T;function _(r,o,e,t,n){switch(b(t,e,p,t),r===T.FROM_PCPF&&q(p,p),o){case m.NORMAL:return j(n,p);case m.TANGENT:return S(n,p)}}function M(r,o,e,t,n,f,u){if(!o)return;const c=t.count,d=E(f);if(U(f))for(let i=0;i<c;i++)n.getVec(i,N),o.getVec(i,l),R(l,l,_(r,e,N,d,s)),u.setVec(i,l);else for(let i=0;i<c;i++){n.getVec(i,N),o.getVec(i,l);const A=w(t.get(i,1));let a=Math.cos(A);e===m.TANGENT!=(r===T.TO_PCPF)&&(a=1/a),_(r,e,N,d,s),r===T.TO_PCPF?(s[0]*=a,s[1]*=a,s[2]*=a,s[3]*=a,s[4]*=a,s[5]*=a):(s[0]*=a,s[3]*=a,s[6]*=a,s[1]*=a,s[4]*=a,s[7]*=a),R(l,l,s),x(l,l),u.setVec(i,l)}return u}function Fr(r){return r.vertexSpace.type==="local"?X(r):Z(r)}function X({vertexSpace:r,transform:o,inSpatialReference:e,outSpatialReference:t,localMode:n,outPositions:f,positions:u}){const c=r.origin??O,d=r.origin!=null?(o==null?void 0:o.localMatrix)??g:g,i=E(e),A=t.isWebMercator&&n||!$(e,i)?e:i;b(e,c,p,A),v(p,p,d);const a=f??L(u.length);return k(a,u,p),C(a,A,0,a,t,0,a.length/3),a}function Z({vertexSpace:r,transform:o,outPositions:e,positions:t,inSpatialReference:n,outSpatialReference:f}){const u=r.origin!=null?(o==null?void 0:o.localMatrix)??g:g,c=e??L(t.length);z(u,g)?I(c,t):k(c,t,u);const d=r.origin??O;if(!B(d,O)){const[i,A,a]=d;for(let F=0;F<c.length;F+=3)c[F]+=i,c[F+1]+=A,c[F+2]+=a}return C(c,n,0,c,f,0,c.length/3)?c:null}function U(r){return r.isWGS84||Y(r)||J(r)||W(r)}(function(r){r[r.NORMAL=0]="NORMAL",r[r.TANGENT=1]="TANGENT"})(m||(m={})),function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(T||(T={}));const N=G(),l=G(),p=H(),s=D();export{m as VectorType,cr as loadProjectErrorMessage,lr as logProjectionError,Fr as project,Tr as projectFromPCPF,pr as projectNormalFromPCPF,ur as projectNormalToPCPF,Ar as projectTangentFromPCPF,dr as projectTangentToPCPF,mr as projectToPCPF,Pr as transformNormal,yr as transformTangent};