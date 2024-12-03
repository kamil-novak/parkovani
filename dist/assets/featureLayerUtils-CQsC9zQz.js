import{c as z,h as B,a as d,F as j,l as S,b as I,f as u,u as f,e as V,s as y,i as k}from"./index-ZNyjz3YK.js";import{i as L}from"./originUtils-D69mHv66.js";import{P as q,y as N,w as x,$ as C,d as H,v as Q,p as O,f as W,I as R,m as T}from"./utils-FBt-NzBl.js";import{t as X,a as Z,i as aa}from"./fetchService-BgMfqEK5.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveUtils-ksZS7p7z.js";const w="Feature Service",v="feature-layer-utils",ea=`${v}-save`,ta=`${v}-save-as`,p=`${v}-saveall`,m=`${v}-saveall-as`;function $(a){return{isValid:V(a)&&(!("dynamicDataSource"in a)||!a.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function g(a){const e=[],t=[];for(const{layer:r,layerJSON:o}of a)r.isTable?t.push(o):e.push(o);return{layers:e,tables:t}}function M(a){return g([a])}async function D(a,e){return/\/\d+\/?$/.test(a.url)?M(e[0]):F(e,a)}async function F(a,e){if(a.reverse(),!e)return g(a);const t=await ra(e,a);for(const r of a)J(r.layer,r.layerJSON,t);return oa(t,a),t}async function ra(a,e){let t=await a.fetchData("json");if(na(t))return t;t||(t={}),sa(t);const{layer:{url:r,customParameters:o,apiKey:s}}=e[0];return await ia(t,{url:r??"",customParameters:o,apiKey:s},e.map(n=>n.layer.layerId)),t}function na(a){return!!(a&&Array.isArray(a.layers)&&Array.isArray(a.tables))}function sa(a){a.layers||(a.layers=[]),a.tables||(a.tables=[])}function oa(a,e){const t=[],r=[];for(const{layer:o}of e){const{isTable:s,layerId:n}=o;s?r.push(n):t.push(n)}A(a.layers,t),A(a.tables,r)}function A(a,e){if(a.length<2)return;const t=[];for(const{id:r}of a)t.push(r);z(t.sort(E),e.slice().sort(E))&&a.sort((r,o)=>{const s=e.indexOf(r.id),n=e.indexOf(o.id);return s<n?-1:s>n?1:0})}function E(a,e){return a<e?-1:a>e?1:0}async function ia(a,e,t){const{url:r,customParameters:o,apiKey:s}=e,{serviceJSON:n,layersJSON:i}=await X(r,{customParameters:o,apiKey:s}),l=b(a.layers,n.layers,t),c=b(a.tables,n.tables,t);a.layers=l.itemResources,a.tables=c.itemResources;const h=[...l.added,...c.added],K=i?[...i.layers,...i.tables]:[];await la(a,h,r,K)}function b(a,e,t){const r=B(a,e,(s,n)=>s.id===n.id);a=a.filter(s=>!r.removed.some(n=>n.id===s.id));const o=r.added;return o.forEach(({id:s})=>{a.push({id:s})}),{itemResources:a,added:o.filter(({id:s})=>!t.includes(s))}}async function la(a,e,t,r){const o=await ca(e),s=e.map(({id:n,type:i})=>new(o.get(i))({url:t,layerId:n,sourceJSON:r.find(({id:l})=>l===n)}));await Promise.allSettled(s.map(n=>n.load())),s.forEach(n=>{const{layerId:i,loaded:l,defaultPopupTemplate:c}=n;if(!l||c==null)return;const h={id:i,popupInfo:c.toJSON()};n.operationalLayerType!=="ArcGISFeatureLayer"&&(h.layerType=n.operationalLayerType),J(n,h,a)})}async function ca(a){const e=[];a.forEach(({type:o})=>{const s=aa(o),n=Z[s];e.push(n())});const t=await Promise.all(e),r=new Map;return a.forEach(({type:o},s)=>{r.set(o,t[s])}),r}function J(a,e,t){a.isTable?P(t.tables,e):P(t.layers,e)}function P(a,e){const t=a.findIndex(({id:r})=>r===e.id);t===-1?a.push(e):a[t]=e}function Y(a,e){if(!a.length)throw new y(`${e}:missing-parameters`,"'layers' array should contain at least one feature layer")}function ua(a,e){const t=a.map(r=>r.portalItem.id);if(new Set(t).size>1)throw new y(`${e}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")}function _(a,e){const t=a.map(r=>r.layerId);if(new Set(t).size!==t.length)throw new y(`${e}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function ya(a){Y(a,p),await Promise.all(a.map(e=>e.load()));for(const e of a)O(e,p,$),W({layer:e,itemType:w,errorNamePrefix:p});ua(a,p),_(a,p)}function U(a,e){const t=a.layers.some(r=>r.layerType==="OrientedImageryLayer");f(e,u.ORIENTED_IMAGERY_LAYER,t)}function G(a,e){const t=a.some(r=>r.type==="oriented-imagery");f(e,u.ORIENTED_IMAGERY_LAYER,t)}async function fa(a,e,t){U(t,e)}async function pa(a,e){const{url:t,layerId:r,title:o,fullExtent:s,isTable:n}=a,i=d(t);e.url=((i==null?void 0:i.serverType)==="FeatureServer"?t:`${t}/${r}`)??null,e.title||(e.title=o),e.extent=null,n||s==null||(e.extent=await S(s)),I(e,u.METADATA),I(e,u.MULTI_LAYER),k(e,u.SINGLE_LAYER),f(e,u.TABLE,n),G([a],e)}function ma(a,e){for(const s of a){const n=s.parsedUrl.path,i=d(n);if(!(i==null?void 0:i.url.path))throw new y(`${e}:invalid-parameters`,T(s,`has unsupported url pattern: ${n}`),{layer:s});const c=i==null?void 0:i.serverType;if(c!=="FeatureServer"&&c!=="MapServer")throw new y(`${e}:invalid-parameters`,T(s,`has unsupported server type: ${c}`),{layer:s});if(c==="MapServer"&&a.length>1)throw new y(`${e}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const t=d(a[0].parsedUrl.path),r=t==null?void 0:t.url.path;if(!a.every(s=>{const n=d(s.parsedUrl.path);return(n==null?void 0:n.url.path)===r}))throw new y(`${e}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")}async function da(a){Y(a,m),await Promise.all(a.map(e=>e.load()));for(const e of a)O(e,m,$);ma(a,m),_(a,m)}function ha(a,e){U(e,a),R(a)}async function wa(a,e){let t=0,r=0;for(const{isTable:n}of e)n?r++:t++;const o=e[0].parsedUrl.path,s=d(o);if(a.url=(s==null?void 0:s.serverType)==="FeatureServer"?s.url.path:o,a.title||(a.title=s.title),a.extent=null,t>0){const n=e.map(i=>i.fullExtent).filter(j).reduce((i,l)=>i.clone().union(l));n&&(a.extent=await S(n))}I(a,u.METADATA),f(a,u.MULTI_LAYER,e.length>1),f(a,u.SINGLE_LAYER,e.length===1),f(a,u.TABLE,r>0&&t===0),G(e,a),R(a)}async function ba(a,e){return q({layer:a,itemType:w,validateLayer:$,createItemData:(t,r)=>D(r,[t]),errorNamePrefix:ea,setItemProperties:fa},e)}async function Pa(a,e){await ya(a);const t=a[0].portalItem,r=N(t),o=await Promise.all(a.map(n=>x(n,r,e))),s=await D(t,a.map((n,i)=>({layer:n,layerJSON:o[i]})));return ha(t,s),await t.update({data:s}),await Promise.all(a.slice(1).map(n=>n.portalItem.reload())),L(r),t.clone()}async function Sa(a,e,t){return C({layer:a,itemType:w,validateLayer:$,createItemData:(r,o)=>Promise.resolve(M(r)),errorNamePrefix:ta,newItem:e,setItemProperties:pa},t)}async function La(a,e,t){await da(a);const r=H({itemType:w,errorNamePrefix:m,newItem:e}),o=N(r),s=await Promise.all(a.map(i=>x(i,o,t))),n=await F(a.map((i,l)=>({layer:i,layerJSON:s[l]})));await wa(r,a),await Q(r,n,t);for(const i of a)i.portalItem=r.clone();return L(o),r}export{ba as save,Pa as saveAll,La as saveAllAs,Sa as saveAs};
