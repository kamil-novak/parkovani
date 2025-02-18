const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./loader-CcU9Blst.js","./index-lgQOPtME.js","./index-MbXLh5Yy.css","./quat-k88Vehct.js","./BufferView-C5J_dkNC.js","./resourceUtils-BOPqetEU.js","./basicInterfaces-CZwQPxTp.js"])))=>i.map(i=>d[i]);
import{mV as ye,mW as be,kX as G,i8 as X,b2 as ae,mX as we,mN as oe,al as ve,bs as ie,s as Te,lB as le,as as K,eM as ue,mQ as N,dg as Y,ai as $e,mY as Re,_ as Me,mZ as Ae,jd as Be,je as Z,jf as Ee,aw as Oe,ax as Se,ec as J,e9 as Ie,m_ as ee,e1 as Pe,b1 as Ce,kU as Fe,ar as W}from"./index-lgQOPtME.js";import{C as ce,p as me,t as j}from"./Geometry-gIbUZ03Y.js";import{c as _e,x as fe,L as Ue,i as de,O as ke,E as je}from"./BufferView-C5J_dkNC.js";import{e as Ne,f as Le,l as te,o as re}from"./vec3-BO3iRWnv.js";import{n as qe,s as se}from"./vec4-NEFdDkNT.js";import{n as De,o as P,a as Ve,b as Ge,t as We,c as ze}from"./DefaultMaterial_COLOR_GAMMA-CqNBWs3J.js";import{r as z}from"./resourceUtils-BOPqetEU.js";import{t as He}from"./NestedMap-GuqgquCN.js";import{l as Qe}from"./Indices-CkyW8qYU.js";import{t as Xe}from"./requestImageUtils-BBffGNR6.js";import{t as F}from"./orientedBoundingBox-DRZUAq5H.js";import{e as H,i as R,n as Ke}from"./basicInterfaces-CZwQPxTp.js";import{e as I}from"./VertexAttribute-Cq4MnHjR.js";import{B as L,s as Ye,t as Ze,n as Je,o as et}from"./RealisticTree.glsl-CZx7PR_P.js";import{a as ne}from"./NormalAttribute.glsl-D9dxEpvF.js";function U(r){if(r==null)return null;const t=r.offset!=null?r.offset:ye,n=r.rotation!=null?r.rotation:0,s=r.scale!=null?r.scale:be,u=G(1,0,0,0,1,0,t[0],t[1],1),i=G(Math.cos(n),-Math.sin(n),0,Math.sin(n),Math.cos(n),0,0,0,1),a=G(s[0],0,0,0,s[1],0,0,0,1),l=ae();return X(l,i,a),X(l,u,l),l}class tt{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class rt{constructor(t,n,s){this.name=t,this.lodThreshold=n,this.pivotOffset=s,this.stageResources=new tt,this.numberOfVertices=0}}const B=()=>$e.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function st(r,t){const n=await nt(r,t),s=await ut(n.textureDefinitions??{},t);let u=0;for(const i in s)if(s.hasOwnProperty(i)){const a=s[i];u+=a!=null&&a.image?a.image.width*a.image.height*4:0}return{resource:n,textures:s,size:u+we(n)}}async function nt(r,t){const n=t==null?void 0:t.streamDataRequester;if(n)return at(r,n,t);const s=await oe(ve(r,t));if(s.ok===!0)return s.value.data;ie(s.error),pe(s.error)}async function at(r,t,n){const s=await oe(t.request(r,"json",n));if(s.ok===!0)return s.value;ie(s.error),pe(s.error.details.url)}function pe(r){throw new Te("",`Request for object resource failed: ${r}`)}function ot(r){const t=r.params,n=t.topology;let s=!0;switch(t.vertexAttributes||(B().warn("Geometry must specify vertex attributes"),s=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=t.faces;if(i){if(t.vertexAttributes)for(const a in t.vertexAttributes){const l=i[a];l!=null&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(B().warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),s=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(B().warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),s=!1)):(B().warn(`Indexed geometry does not specify face indices for '${a}' attribute`),s=!1)}}else B().warn("Indexed geometries must specify faces"),s=!1;break}default:B().warn(`Unsupported topology '${n}'`),s=!1}r.params.material||(B().warn("Geometry requires material"),s=!1);const u=r.params.vertexAttributes;for(const i in u)u[i].values||(B().warn("Geometries with externally defined attributes are not yet supported"),s=!1);return s}function it(r,t){var x,b;const n=new Array,s=new Array,u=new Array,i=new He,a=r.resource,l=le.parse(a.version||"1.0","wosr");mt.validate(l);const c=a.model.name,e=a.model.geometries,o=a.materialDefinitions??{},m=r.textures;let f=0;const p=new Map;for(let d=0;d<e.length;d++){const h=e[d];if(!ot(h))continue;const T=ct(h),w=h.params.vertexAttributes,_=[],q=g=>{if(h.params.topology==="PerAttributeArray")return null;const $=h.params.faces;for(const A in $)if(A===g)return $[A].values;return null},O=w[I.POSITION],k=O.values.length/O.valuesPerElement;for(const g in w){const $=w[g],A=$.values,V=q(g)??Qe(k);_.push([g,new F(A,V,$.valuesPerElement,!0)])}const M=T.texture,y=m&&m[M];if(y&&!p.has(M)){const{image:g,parameters:$}=y,A=new ce(g,$);s.push(A),p.set(M,A)}const S=p.get(M),D=S?S.id:void 0,E=T.material;let v=i.get(E,M);if(v==null){const g=o[E.slice(E.lastIndexOf("/")+1)].params;g.transparency===1&&(g.transparency=0);const $=y&&y.alphaChannelUsage,A=g.transparency>0||$==="transparency"||$==="maskAndTransparency",V=y?xe(y.alphaChannelUsage):void 0,Q={ambient:K(g.diffuse),diffuse:K(g.diffuse),opacity:1-(g.transparency||0),transparent:A,textureAlphaMode:V,textureAlphaCutoff:.33,textureId:D,initTextureTransparent:!0,doubleSided:!0,cullFace:H.None,colorMixMode:g.externalColorMixMode||"tint",textureAlphaPremultiplied:(y==null?void 0:y.parameters.preMultiplyAlpha)??!1};t!=null&&t.materialParameters&&Object.assign(Q,t.materialParameters),v=new L(Q,t),i.set(E,M,v)}u.push(v);const ge=new me(v,_);f+=((b=(x=_.find(g=>g[0]===I.POSITION))==null?void 0:x[1])==null?void 0:b.indices.length)??0,n.push(ge)}return{engineResources:[{name:c,stageResources:{textures:s,materials:u,geometries:n},pivotOffset:a.model.pivotOffset,numberOfVertices:f,lodThreshold:null}],referenceBoundingBox:lt(n)}}function lt(r){const t=ue();return r.forEach(n=>{const s=n.boundingInfo;s!=null&&(N(t,s.bbMin),N(t,s.bbMax))}),t}async function ut(r,t){const n=new Array;for(const i in r){const a=r[i],l=a.images[0].data;if(!l){B().warn("Externally referenced texture data is not yet supported");continue}const c=a.encoding+";base64,"+l,e="/textureDefinitions/"+i,o=a.channels==="rgba"?a.alphaChannelUsage||"transparency":"none",m={noUnpackFlip:!0,wrap:{s:Y.REPEAT,t:Y.REPEAT},preMultiplyAlpha:xe(o)!==R.Opaque},f=t!=null&&t.disableTextures?Promise.resolve(null):Xe(c,t);n.push(f.then(p=>({refId:e,image:p,parameters:m,alphaChannelUsage:o})))}const s=await Promise.all(n),u={};for(const i of s)u[i.refId]=i;return u}function xe(r){switch(r){case"mask":return R.Mask;case"maskAndTransparency":return R.MaskBlend;case"none":return R.Opaque;default:return R.Blend}}function ct(r){const t=r.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const mt=new le(1,2,"wosr");async function ft(r,t){var m;const n=he(Re(r));if(n.fileType==="wosr"){const f=await(t.cache?t.cache.loadWOSR(n.url,t):st(n.url,t)),{engineResources:p,referenceBoundingBox:x}=it(f,t);return{lods:p,referenceBoundingBox:x,isEsriSymbolResource:!1,isWosr:!0}}let s;if(t.cache)s=await t.cache.loadGLTF(n.url,t,!!t.usePBR);else{const{loadGLTF:f}=await Me(()=>import("./loader-CcU9Blst.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=await f(new De(t.streamDataRequester),n.url,t,t.usePBR)}const u=(m=s.model.meta)==null?void 0:m.ESRI_proxyEllipsoid,i=s.meta.isEsriSymbolResource&&u!=null&&s.meta.ESRI_webstyle==="EsriRealisticTreesStyle";i&&!s.customMeta.esriTreeRendering&&(s.customMeta.esriTreeRendering=!0,gt(s,u));const a=!!t.usePBR,l=s.meta.isEsriSymbolResource?{usePBR:a,isSchematic:!1,treeRendering:i,mrrFactors:Ye}:{usePBR:a,isSchematic:!1,treeRendering:!1,mrrFactors:Ze},c={...t.materialParameters,treeRendering:i},{engineResources:e,referenceBoundingBox:o}=dt(s,l,c,t,n.specifiedLodIndex);return{lods:e,referenceBoundingBox:o,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1}}function he(r){const t=r.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:r.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:r,specifiedLodIndex:null}:{fileType:"unknown",url:r,specifiedLodIndex:null}}function dt(r,t,n,s,u){const i=r.model,a=new Array,l=new Map,c=new Map,e=i.lods.length,o=ue();return i.lods.forEach((m,f)=>{const p=s.skipHighLods===!0&&(e>1&&f===0||e>3&&f===1)||s.skipHighLods===!1&&u!=null&&f!==u;if(p&&f!==0)return;const x=new rt(m.name,m.lodThreshold,[0,0,0]);m.parts.forEach(b=>{const d=p?new L({},s):pt(i,b,x,t,n,l,c,s),{geometry:h,vertexCount:T}=xt(b,d??new L({},s)),w=h.boundingInfo;w!=null&&f===0&&(N(o,w.bbMin),N(o,w.bbMax)),d!=null&&(x.stageResources.geometries.push(h),x.numberOfVertices+=T)}),p||a.push(x)}),{engineResources:a,referenceBoundingBox:o}}function pt(r,t,n,s,u,i,a,l){var x,b;const c=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),e=r.materials.get(t.material),o=t.attributes.texCoord0!=null,m=t.attributes.normal!=null;if(e==null)return null;const f=ht(e.alphaMode);if(!i.has(c)){if(o){const y=(S,D=!1)=>{if(S!=null&&!a.has(S)){const E=r.textures.get(S);if(E!=null){const v=E.data;a.set(S,new ce(z(v)?v.data:v,{...E.parameters,preMultiplyAlpha:!z(v)&&D,encoding:z(v)&&v.encoding!=null?v.encoding:void 0}))}}};y(e.textureColor,f!==R.Opaque),y(e.textureNormal),y(e.textureOcclusion),y(e.textureEmissive),y(e.textureMetallicRoughness)}const d=e.color[0]**(1/P),h=e.color[1]**(1/P),T=e.color[2]**(1/P),w=e.emissiveFactor[0]**(1/P),_=e.emissiveFactor[1]**(1/P),q=e.emissiveFactor[2]**(1/P),O=e.textureColor!=null&&o?a.get(e.textureColor):null,k=Je({normalTexture:e.textureNormal,metallicRoughnessTexture:e.textureMetallicRoughness,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,emissiveTexture:e.textureEmissive,emissiveFactor:e.emissiveFactor,occlusionTexture:e.textureOcclusion}),M=((x=e.normalTextureTransform)==null?void 0:x.scale)!=null?(b=e.normalTextureTransform)==null?void 0:b.scale:Ae;i.set(c,new L({...s,transparent:f===R.Blend,customDepthTest:Ke.Lequal,textureAlphaMode:f,textureAlphaCutoff:e.alphaCutoff,diffuse:[d,h,T],ambient:[d,h,T],opacity:e.opacity,doubleSided:e.doubleSided,doubleSidedType:"winding-order",cullFace:e.doubleSided?H.None:H.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:m?ne.Attribute:ne.ScreenDerivative,castShadows:!0,receiveShadows:e.receiveShadows,receiveAmbientOcclusion:e.receiveAmbientOcclustion,textureId:O!=null?O.id:void 0,colorMixMode:e.colorMixMode,normalTextureId:e.textureNormal!=null&&o?a.get(e.textureNormal).id:void 0,textureAlphaPremultiplied:O!=null&&!!O.parameters.preMultiplyAlpha,occlusionTextureId:e.textureOcclusion!=null&&o?a.get(e.textureOcclusion).id:void 0,emissiveTextureId:e.textureEmissive!=null&&o?a.get(e.textureEmissive).id:void 0,metallicRoughnessTextureId:e.textureMetallicRoughness!=null&&o?a.get(e.textureMetallicRoughness).id:void 0,emissiveFactor:[w,_,q],mrrFactors:k?et:[e.metallicFactor,e.roughnessFactor,s.mrrFactors[2]],isSchematic:k,colorTextureTransformMatrix:U(e.colorTextureTransform),normalTextureTransformMatrix:U(e.normalTextureTransform),scale:[M[0],M[1]],occlusionTextureTransformMatrix:U(e.occlusionTextureTransform),emissiveTextureTransformMatrix:U(e.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:U(e.metallicRoughnessTextureTransform),...u},l))}const p=i.get(c);if(n.stageResources.materials.push(p),o){const d=h=>{h!=null&&n.stageResources.textures.push(a.get(h))};d(e.textureColor),d(e.textureNormal),d(e.textureOcclusion),d(e.textureEmissive),d(e.textureMetallicRoughness)}return p}function xt(r,t){const n=r.attributes.position.count,s=Ve(r.indices||n,r.primitiveType),u=j(3*n),{typedBuffer:i,typedBufferStride:a}=r.attributes.position;Ne(u,i,r.transform,3,a);const l=[[I.POSITION,new F(u,s,3,!0)]];if(r.attributes.normal!=null){const e=j(3*n),{typedBuffer:o,typedBufferStride:m}=r.attributes.normal;Be(C,r.transform),Le(e,o,C,3,m),Z(C)&&te(e,e),l.push([I.NORMAL,new F(e,s,3,!0)])}if(r.attributes.tangent!=null){const e=j(4*n),{typedBuffer:o,typedBufferStride:m}=r.attributes.tangent;Ee(C,r.transform),qe(e,o,C,4,m),Z(C)&&te(e,e,4),l.push([I.TANGENT,new F(e,s,4,!0)])}if(r.attributes.texCoord0!=null){const e=j(2*n),{typedBuffer:o,typedBufferStride:m}=r.attributes.texCoord0;Ge(e,o,2,m),l.push([I.UV0,new F(e,s,2,!0)])}const c=r.attributes.color;if(c!=null){const e=new Uint8Array(4*n);c.elementCount===4?c instanceof _e?se(e,c,255):c instanceof fe?We(e,c):c instanceof Ue&&se(e,c,1/256):(e.fill(255),c instanceof de?re(e,c.typedBuffer,255,4,c.typedBufferStride):r.attributes.color instanceof ke?ze(e,c.typedBuffer,4,r.attributes.color.typedBufferStride):r.attributes.color instanceof je&&re(e,c.typedBuffer,1/256,4,c.typedBufferStride)),l.push([I.COLOR,new F(e,s,4,!0)])}return{geometry:new me(t,l),vertexCount:n}}const C=ae();function ht(r){switch(r){case"BLEND":return R.Blend;case"MASK":return R.Mask;case"OPAQUE":case null:case void 0:return R.Opaque}}function gt(r,t){for(let n=0;n<r.model.lods.length;++n){const s=r.model.lods[n];for(const u of s.parts){const i=u.attributes.normal;if(i==null)return;const a=u.attributes.position,l=a.count,c=W(),e=W(),o=W(),m=new Uint8Array(4*l),f=new Float64Array(3*l),p=Oe(Se(),u.transform);let x=0,b=0;for(let d=0;d<l;d++){a.getVec(d,e),i.getVec(d,c),J(e,e,u.transform),Ie(o,e,t.center),ee(o,o,t.radius);const h=o[2],T=Pe(o),w=Math.min(.45+.55*T*T,1);ee(o,o,t.radius),p!==null&&J(o,o,p),Ce(o,o),n+1!==r.model.lods.length&&r.model.lods.length>1&&Fe(o,o,c,h>-1?.2:Math.min(-4*h-3.8,1)),f[x]=o[0],f[x+1]=o[1],f[x+2]=o[2],x+=3,m[b]=255*w,m[b+1]=255*w,m[b+2]=255*w,m[b+3]=255,b+=4}u.attributes.normal=new de(f),u.attributes.color=new fe(m)}}}const Ct=Object.freeze(Object.defineProperty({__proto__:null,fetch:ft,parseUrl:he},Symbol.toStringTag,{value:"Module"}));export{ft as e,Ct as o,U as s};
