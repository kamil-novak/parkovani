const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GroupLayer-C8kYuVK-.js","./index-BkgwewGo.js","./index-D6MmE7Y6.css","./fetchService-D708_sdx.js","./saveUtils-BuPUcw3x.js"])))=>i.map(i=>d[i]);
import{_ as C,r as _,s as w,ct as F,cu as $,I as N,cv as P}from"./index-BkgwewGo.js";import{s as V}from"./associatedFeatureServiceUtils-D5PyMzu1.js";import{b as f,i as S,t as J,a as k}from"./fetchService-D708_sdx.js";const x={FeatureLayer:!0,SceneLayer:!0};async function q(a){const{properties:s,url:e}=a,t={...s,url:e},l=await M(e,s==null?void 0:s.customParameters),{Constructor:r,layerId:o,sourceJSON:c,parsedUrl:u,layers:y,tables:d}=l;if(y.length+d.length===0)return o!=null&&(t.layerId=o),c!=null&&(t.sourceJSON=c),new r(t);const m=new(await C(async()=>{const{default:v}=await import("./GroupLayer-C8kYuVK-.js");return{default:v}},__vite__mapDeps([0,1,2,3,4]),import.meta.url)).default({title:u.title});return await E(m,l,t),m}function O(a,s){return a?a.find(({id:e})=>e===s):null}function T(a,s,e,t,l){const r={...l,layerId:s};return a!=null&&(r.url=a),e!=null&&(r.sourceJSON=e),"sublayerTitleMode"in t.prototype&&(r.sublayerTitleMode="service-name"),new t(r)}async function E(a,s,e){const t=s.sublayerConstructorProvider;for(const{id:l,serverUrl:r}of s.layers){const o=O(s.sublayerInfos,l),c=T(r,l,o,(o&&(t==null?void 0:t(o)))??s.Constructor,e);a.add(c)}if(s.tables.length){const l=await b("FeatureLayer");s.tables.forEach(({id:r,serverUrl:o})=>{const c=T(o,r,O(s.tableInfos,r),l,e);a.tables.add(c)})}}async function M(a,s){var d,m,v,h,I,g,L;let e=_(a);if(e==null&&(e=await D(a,s)),e==null)throw new w("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:a});const{serverType:t,sublayer:l}=e;let r;const o={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},c=t==="FeatureServer",u=t==="SceneServer",y={parsedUrl:e,Constructor:null,layerId:c||u?l??void 0:void 0,layers:[],tables:[]};switch(t){case"MapServer":if(l!=null){const{type:n}=await f(a,{customParameters:s});switch(r="FeatureLayer",n){case"Catalog Layer":r="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new w("arcgis-layers:unsupported",`fromUrl() not supported for "${n}" layers`)}}else r=await A(a,s)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await f(a,{customParameters:s}),{tileInfo:i,cacheType:p}=n;r=i?((d=i==null?void 0:i.format)==null?void 0:d.toUpperCase())!=="LERC"||p&&p.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await f(e.url.path,{customParameters:s});if(r="SceneLayer",n){const i=n==null?void 0:n.layers;if((n==null?void 0:n.layerType)==="Voxel")r="VoxelLayer";else if(i!=null&&i.length){const p=(m=i[0])==null?void 0:m.layerType;p!=null&&P[p]!=null&&(r=P[p])}}break}case"3DTilesServer":throw new w("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(r="FeatureLayer",l!=null){const n=await f(a,{customParameters:s});y.sourceJSON=n,r=S(n.type)}break;default:r=o[t]}if(x[r]&&l==null){const n=await G(a,t,s);if(c&&(y.sublayerInfos=n.layerInfos,y.tableInfos=n.tableInfos),n.layers.length+n.tables.length!==1)y.layers=n.layers,y.tables=n.tables,c&&((v=n.layerInfos)!=null&&v.length)&&(y.sublayerConstructorProvider=await K(n.layerInfos));else if(c||u){const i=((h=n.layerInfos)==null?void 0:h[0])??((I=n.tableInfos)==null?void 0:I[0]);if(y.layerId=((g=n.layers[0])==null?void 0:g.id)??((L=n.tables[0])==null?void 0:L.id),y.sourceJSON=i,c){const p=i==null?void 0:i.type;r=S(p)}}}return y.Constructor=await b(r),y}async function D(a,s){var c;const e=await f(a,{customParameters:s});let t=null,l=null;const r=e.type;if(r==="Feature Layer"||r==="Table"?(t="FeatureServer",l=e.id??null):r==="indexedVector"?t="VectorTileServer":e.hasOwnProperty("mapName")?t="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?t="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":e.hasOwnProperty("streamUrls")?t="StreamServer":U(e)?(t="SceneServer",l=e.id):e.hasOwnProperty("layers")&&U((c=e.layers)==null?void 0:c[0])&&(t="SceneServer"),!t)return null;const o=l!=null?F(a):null;return{title:o!=null&&e.name||$(a),serverType:t,sublayer:l,url:{path:o!=null?o.serviceUrl:N(a).path}}}function U(a){return a!=null&&a.hasOwnProperty("store")&&a.hasOwnProperty("id")&&typeof a.id=="number"}async function G(a,s,e){let t,l,r=!1;switch(s){case"FeatureServer":{const u=await J(a,{customParameters:e});r=!!u.layersJSON,t=u.layersJSON||u.serviceJSON;break}case"SceneServer":{const u=await R(a,e);t=u.serviceInfo,l=u.tableServerUrl;break}default:t=await f(a,{customParameters:e})}const o=t==null?void 0:t.layers,c=t==null?void 0:t.tables;return{layers:(o==null?void 0:o.map(u=>({id:u.id})).reverse())||[],tables:(c==null?void 0:c.map(u=>({serverUrl:l,id:u.id})).reverse())||[],layerInfos:r?o:[],tableInfos:r?c:[]}}async function R(a,s){var l;const e=await f(a,{customParameters:s});if(!((l=e.layers)==null?void 0:l[0]))return{serviceInfo:e};try{const{serverUrl:r}=await V(a),o=await f(r,{customParameters:s}).catch(()=>null);return o&&(e.tables=o.tables),{serviceInfo:e,tableServerUrl:r}}catch{return{serviceInfo:e}}}async function b(a){return(0,k[a])()}async function A(a,s){return(await f(a,{customParameters:s})).tileInfo}async function K(a){if(!a.length)return;const s=new Set,e=[];for(const{type:r}of a)s.has(r)||(s.add(r),e.push(b(S(r))));const t=await Promise.all(e),l=new Map;return Array.from(s).forEach((r,o)=>{l.set(r,t[o])}),r=>l.get(r.type)}export{q as fromUrl};
