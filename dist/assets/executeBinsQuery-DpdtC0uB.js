import{a3 as c,ay as f,fV as y,al as l,cc as S,fz as s,e6 as m,T as R,ce as g,cF as p}from"./index-CrRj_mLP.js";import J from"./BinsQuery-zFSxmyFD.js";import"./queryUtils-Bi3z_K6X.js";import"./json-Wa8cmqdu.js";function N(a){const t=a.geometry,n=a.toJSON(),e=n;let i,r,o;return t!=null&&(r=t.spatialReference,o=s(r),e.geometryType=m(t),e.geometry=JSON.stringify(t),e.inSR=o),n.outSR?(e.outSR=s(n.outSR),i=a.outSpatialReference):t&&(e.outSR=e.inSR,i=r),e.bin&&(e.bin=JSON.stringify(e.bin)),e.quantizationParameters&&(e.quantizationParameters=JSON.stringify(e.quantizationParameters)),e.outStatistics&&(e.outStatistics=JSON.stringify(e.outStatistics)),e.outTimeReference&&(e.outTimeReference=JSON.stringify(e.outTimeReference)),a.defaultSpatialReference&&R(r,i)&&(e.defaultSR=e.inSR,delete e.inSR,delete e.outSR),e}async function O(a,t,n){return d(a,t,n)}async function d(a,t,n={}){const e=typeof a=="string"?c(a):a,i=t.geometry?[t.geometry]:[],r=await f(i,null,{signal:n.signal}),o=r==null?void 0:r[0];o!=null&&((t=t.clone()).geometry=o);const u=y({...e.query,f:"json",...N(t)});return l(S(e.path,"queryBins"),{...n,query:{...u,...n.query}})}async function b(a,t,n){const{data:e}=await O(g(a),J.from(t),n);return p.fromJSON(e)}export{b as executeBinsQuery};