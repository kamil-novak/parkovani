const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./knowledgeGraphService-CUvBwPX-.js","./index-DObp-awF.js","./index-CFJhRowK.css","./GraphQueryStreaming-CFJPYOm5.js"])))=>i.map(i=>d[i]);
import{A as P,_ as G,bx as J,cC as Q,cD as V,cE as j,G as I,E as C,J as K,S as M,fN as T,D as B,fP as L}from"./index-DObp-awF.js";import{t as O,N as b}from"./arcadeUtils-9heVfewh.js";import{i as D,a as u,r as c,d as E,P as y,$ as z,Y as U,E as _,B as Y,z as A,k as W,t as Z,g as H,T as X,Z as N,_ as $}from"./languageUtils-Dp0Kro0P.js";import{l as tt}from"./portalUtils-DuF34v6H.js";import{s as nt,m as et,t as rt,p as at,c as it}from"./GraphQueryStreaming-CFJPYOm5.js";import"./TimeOnly-BKPW8CbT.js";import"./ImmutableArray-BPVd6ESQ.js";import"./featureConversionUtils-B3eCD7K0.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./number-BILATbFX.js";import"./shared-DNheAHal.js";let f=null;async function ot(t){const n=J.geometryServiceUrl??"";if(!n){Q()||await V();for(const e of t)e.container[e.indexer]=j(e.container[e.indexer],I.WGS84);return}const r=t.map(e=>e.container[e.indexer]),i=new C({geometries:r,outSpatialReference:I.WGS84}),s=await K(n,i);for(let e=0;e<s.length;e++){const a=t[e];a.container[a.indexer]=s[e]}}async function k(t,n){const r=new M({portal:t,id:n});return await r.load(),f===null&&(f=await G(()=>import("./knowledgeGraphService-CUvBwPX-.js").then(i=>i.k),__vite__mapDeps([0,1,2,3]),import.meta.url)),await f.fetchKnowledgeGraph(r.url)}function v(t,n,r,i,s){if(t===null)return null;if(y(t)||A(t))return t;if(W(t)||W(t))return t.toJSDate();if(Z(t))return t.toStorageFormat();if(H(t))return t.toStorageString();if(X(t)){const e={};for(const a of t.keys())e[a]=v(t.field(a),n,r,i,s),e[a]instanceof T&&s.push({container:e,indexer:a});return e}if(_(t)){const e=t.map(a=>v(a,n,r,i,s));for(let a=0;a<e.length;a++)e[a]instanceof T&&s.push({container:e,indexer:a});return e}return N(t)?t.spatialReference.isWGS84?t:t.spatialReference.isWebMercator&&n?B(t):t:void 0}function st(t,n){if(!t)return t;if(t.spatialReference.isWGS84&&n.spatialReference.isWebMercator)return L(t);if(t.spatialReference.equals(n.spatialReference))return t;throw new u(n,c.WrongSpatialReference,null)}function R(t,n){if(!t)return null;const r={};for(const i in t)r[i]=g(t[i],n);return r}function g(t,n){return t===null?null:_(t)?t.map(r=>g(r,n)):t instanceof et?{graphTypeName:t.typeName,id:t.id,graphType:"entity",properties:R(t.properties,n)}:t instanceof rt?{graphType:"object",properties:R(t.properties,n)}:t instanceof at?{graphTypeName:t.typeName,id:t.id,graphType:"relationship",originId:t.originId??null,destinationId:t.destinationId??null,properties:R(t.properties,n)}:t instanceof it?{graphType:"path",path:t.path?t.path.map(r=>g(r,n)):null}:N(t)?st(t,n):y(t)||A(t)||$(t)?t:null}function vt(t){t.mode==="async"&&(t.functions.knowledgegraphbyportalitem=function(n,r){return t.standardFunctionAsync(n,r,(i,s,e)=>{var m,d;if(D(e,2,2,n,r),e[0]===null)throw new u(n,c.PortalRequired,r);if(e[0]instanceof O){const p=E(e[1]);let h;return h=(m=n.services)!=null&&m.portal?n.services.portal:P.getDefault(),k(tt(e[0],h),p)}if(y(e[0])===!1)throw new u(n,c.InvalidParameter,r);const a=E(e[0]);return k(((d=n.services)==null?void 0:d.portal)??P.getDefault(),a)})},t.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),t.functions.querygraph=function(n,r){return t.standardFunctionAsync(n,r,async(i,s,e)=>{var x;D(e,2,4,n,r);const a=e[0];if(!z(a))throw new u(n,c.InvalidParameter,r);const m=e[1];if(!y(m))throw new u(n,c.InvalidParameter,r);f===null&&(f=await G(()=>import("./knowledgeGraphService-CUvBwPX-.js").then(o=>o.k),__vite__mapDeps([0,1,2,3]),import.meta.url));let d=null;const p=U(e[2],null);if(!(p instanceof b||p===null))throw new u(n,c.InvalidParameter,r);if(p){let o=[];d=v(p,!0,!1,n,o),o=o.filter(l=>!l.container[l.indexer].spatialReference.isWGS84),o.length>0&&await ot(o)}const h=new nt({openCypherQuery:m,bindParameters:d});(((x=a==null?void 0:a.serviceDefinition)==null?void 0:x.currentVersion)??11.3)>11.2&&(h.outputSpatialReference=n.spatialReference);const q=(await f.executeQueryStreaming(a,h)).resultRowsStream.getReader(),S=[];try{for(;;){const{done:o,value:l}=await q.read();if(o)break;if(_(l))for(const w of l)S.push(g(w,n));else{const w=[];for(const F of l)w.push(g(l[F],n));S.push(w)}}}catch(o){throw o}return b.convertJsonToArcade(S,Y(n),!1,!0)})},t.signatures.push({name:"querygraph",min:2,max:4}))}export{vt as registerFunctions};
