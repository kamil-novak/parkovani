const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-CH9okHeJ.js","./index-lgQOPtME.js","./index-MbXLh5Yy.css","./json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{hO as j,hP as v,T as u,aC as Z,hQ as g,aN as m,hR as R,F as A,fS as T,fG as h,fo as N,hS as P,aH as B,dA as E,bV as _,bd as J,be as L,d5 as q,hT as I,aL as V,fr as p,_ as k}from"./index-lgQOPtME.js";import{t as S}from"./json-Wa8cmqdu.js";const c=[0,0];function d(e,n){if(!n)return null;if("x"in n){const t={x:0,y:0};return[t.x,t.y]=e(n.x,n.y,c),n.z!=null&&(t.z=n.z),n.m!=null&&(t.m=n.m),t}if("xmin"in n){const t={xmin:0,ymin:0,xmax:0,ymax:0};return[t.xmin,t.ymin]=e(n.xmin,n.ymin,c),[t.xmax,t.ymax]=e(n.xmax,n.ymax,c),n.hasZ&&(t.zmin=n.zmin,t.zmax=n.zmax,t.hasZ=!0),n.hasM&&(t.mmin=n.mmin,t.mmax=n.mmax,t.hasM=!0),t}return"rings"in n?{rings:x(n.rings,e),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:x(n.paths,e),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:w(n.points,e),hasM:n.hasM,hasZ:n.hasZ}:null}function x(e,n){const t=[];for(const i of e)t.push(w(i,n));return t}function w(e,n){const t=[];for(const i of e){const a=n(i[0],i[1],[0,0]);t.push(a),i.length>2&&a.push(i[2]),i.length>3&&a.push(i[3])}return t}async function b(e,n){if(!e||!n)return;const t=Array.isArray(e)?e.map(i=>i.geometry!=null?i.geometry.spatialReference:null).filter(A):[e];await T(t.map(i=>({source:i,dest:n})))}const M=d.bind(null,j),z=d.bind(null,v);function F(e,n,t,i){if(!e||(t||(t=n,n=e.spatialReference),!h(n)||!h(t)||u(n,t)))return e;if(g(n,t)){const a=m(t)?M(e):z(e);return a.spatialReference=t,a}return R(S,[e],n,t,null,i)[0]}class C{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(n,t,i,a){if(!(n!=null&&n.length)||!t||!i||u(t,i))return n;const r={geometries:n,inSpatialReference:t,outSpatialReference:i,geographicTransformation:a,resolve:Z()};return this._jobs.push(r),this._timer??(this._timer=setTimeout(this._process,10)),r.resolve.promise}_process(){this._timer=null;const n=this._jobs.shift();if(!n)return;const{geometries:t,inSpatialReference:i,outSpatialReference:a,resolve:r,geographicTransformation:o}=n;g(i,a)?m(a)?r(t.map(M)):r(t.map(z)):r(R(S,t,i,a,o,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const D=new C;function $(e,n,t,i){return D.push(e,n,t,i)}const G=new N({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),y=Object.freeze({});async function ee(e,n,t){const{outFields:i,orderByFields:a,groupByFieldsForStatistics:r,outStatistics:o}=e;if(i)for(let s=0;s<i.length;s++)i[s]=i[s].trim();if(a)for(let s=0;s<a.length;s++)a[s]=a[s].trim();if(r)for(let s=0;s<r.length;s++)r[s]=r[s].trim();if(o)for(let s=0;s<o.length;s++)o[s].onStatisticField&&(o[s].onStatisticField=o[s].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),H(e,n,t)}async function H(e,n,t){var r;if(!e)return null;let{where:i}=e;if(e.where=i=i==null?void 0:i.trim(),(!i||/^1 *= *1$/.test(i)||n&&n===i)&&(e.where=null),!e.geometry)return e;let a=await Q(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:o}=e.geometry;a=P(a),a.spatialReference=o}if(a){await b(a.spatialReference,t),a=K(a,t);const o=(await B(E(a)))[0];if(o==null)throw y;const s="quantizationParameters"in e&&((r=e.quantizationParameters)==null?void 0:r.tolerance)||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,U=s&&O(a,t)?{densificationStep:8*s}:void 0,f=o.toJSON(),l=F(f,f.spatialReference,t,U);if(!l)throw y;l.spatialReference=t,e.geometry=l}return e}function O(e,n){if(!e)return!1;const t=e.spatialReference;return(_(e)||J(e)||L(e))&&!u(t,n)&&!q(t,n)}function K(e,n){const t=e.spatialReference;return O(e,n)&&_(e)?{spatialReference:t,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function Q(e){const{distance:n,units:t}=e,i=e.geometry;if(n==null||"vertexAttributes"in i)return i;const a=i.spatialReference,r=t?G.fromJSON(t):I(a),o=a&&(V(a)||m(a))?i:await b(a,p).then(()=>F(i,p));return(await W())(o.spatialReference,o,n,r)}async function W(){return(await k(async()=>{const{geodesicBuffer:e}=await import("./geometryEngineJSON-CH9okHeJ.js").then(n=>n.g);return{geodesicBuffer:e}},__vite__mapDeps([0,1,2,3]),import.meta.url)).geodesicBuffer}export{G as R,ee as S,H as a,$ as b,y as g,F as j,b as x};
