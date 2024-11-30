import{s as L,aq as P,eB as _,au as v,d0 as z,d1 as B,d2 as D,jl as G,bB as U,ef as q}from"./index-BkgwewGo.js";import{e as C}from"./mat3f64-q3fE-ZOt.js";import{w as N,m as K,h as Q,c as V}from"./Mesh-CVs80Mg7.js";import{l as k}from"./MeshVertexAttributes-C0DyV3ap.js";import{s as M}from"./meshVertexSpaceUtils-DnF5DRli.js";import{c as O,x as F,L as H,O as S,i as j,E as J,T as W,u as X}from"./BufferView-DqUBo4lT.js";import{t as Y,r as Z,u as ee,n as E}from"./vec3-Dyeqak7h.js";import{f as te,o as re,u as R}from"./vec4-CbeV_8lx.js";import{e as oe}from"./types-D0PSWh4d.js";import{n as ne,l as se,o as ae,f as le,a as h,b as ie,c as ue,e as ce,d as fe,g as me}from"./DefaultMaterial_COLOR_GAMMA-B027UhdK.js";import{M as pe}from"./vertexSpaceConversion-BKaK1_hV.js";import{r as de}from"./resourceUtils-DJvbVI6N.js";import{D as w}from"./enums-BlUEVwJR.js";import"./MeshTransform-DzVpA9n_.js";import"./infoFor3D-DsOdlPuA.js";import"./mat4f64-CSKppSlJ.js";import"./quat-COgZtRdQ.js";import"./quatf64-Bdb9ZJJK.js";import"./imageUtils-DJtD_hR2.js";import"./MeshLocalVertexSpace-DaA7Qz4Y.js";import"./earcut-_Wo_nt3E.js";import"./DoubleArray-9VDKuLtr.js";import"./Indices-QgoYjU0d.js";import"./plane-DnBsgdKv.js";import"./deduplicate-Csqk3Wrh.js";import"./projection-B5M6sdWa.js";import"./spatialReferenceEllipsoidUtils-CCU9XOQQ.js";import"./computeTranslationToOriginAndRotation-HVagAca8.js";import"./basicInterfaces-DngWxyLO.js";function ge(e,t,r){const u=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,c=t.typedBufferStride,i=r?r.count:t.count;let s=((r==null?void 0:r.dstIndex)??0)*n,m=((r==null?void 0:r.srcIndex)??0)*c;for(let l=0;l<i;++l){for(let o=0;o<9;++o)u[s+o]=a[m+o];s+=n,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:ge},Symbol.toStringTag,{value:"Module"}));function xe(e,t,r){const u=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,c=t.typedBufferStride,i=r?r.count:t.count;let s=((r==null?void 0:r.dstIndex)??0)*n,m=((r==null?void 0:r.srcIndex)??0)*c;for(let l=0;l<i;++l){for(let o=0;o<16;++o)u[s+o]=a[m+o];s+=n,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:xe},Symbol.toStringTag,{value:"Module"}));function $(e,t){return new e(new ArrayBuffer(t*e.ElementCount*oe(e.ElementType)))}async function ot(e,t,r){const u=new ne($e(r)),n=(await se(u,t,r,!0)).model,a=n.lods.shift(),c=new Map,i=new Map;n.textures.forEach((x,y)=>c.set(y,he(x))),n.materials.forEach((x,y)=>i.set(y,we(x,c)));const s=ye(a);for(const x of s.parts)be(s,x,i);const{position:m,normal:l,tangent:o,color:f,texCoord0:p}=s.vertexAttributes,g=M(e,r),I=e.spatialReference.isGeographic?M(e):g,b=pe({vertexAttributes:{position:m.typedBuffer,normal:l==null?void 0:l.typedBuffer,tangent:o==null?void 0:o.typedBuffer},vertexSpace:I,spatialReference:e.spatialReference},g,{allowBufferReuse:!0,sourceUnit:"meters"});if(!b)throw new L("loadGLTFMesh()","Failed to load mesh from glTF due to projection errors");return{transform:null,vertexSpace:g,components:s.components,spatialReference:e.spatialReference,vertexAttributes:new k({...b,color:f==null?void 0:f.typedBuffer,uv:p==null?void 0:p.typedBuffer})}}function $e(e){const t=e==null?void 0:e.resolveFile;return t?{busy:!1,request:async(r,u,n)=>{const a=(t==null?void 0:t(r))??r;return(await P(a,{responseType:u==="image"?"image":u==="binary"||u==="image+type"?"array-buffer":"json",signal:n==null?void 0:n.signal,timeout:0})).data}}:null}function T(e,t){if(e==null)return"-";const r=e.typedBuffer;return`${_(t,r.buffer,()=>t.size)}/${r.byteOffset}/${r.byteLength}`}function Te(e){return e!=null?e.toString():"-"}function ye(e){let t=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},u=new Map,n=new Map,a=[];for(const c of e.parts){const{attributes:{position:i,normal:s,color:m,tangent:l,texCoord0:o}}=c,f=`
      ${T(i,u)}/
      ${T(s,u)}/
      ${T(m,u)}/
      ${T(l,u)}/
      ${T(o,u)}/
      ${Te(c.transform)}
    `;let p=!1;const g=_(n,f,()=>(p=!0,{start:t,length:i.count}));p&&(t+=i.count),s&&(r.normal=!0),m&&(r.color=!0),l&&(r.tangent=!0),o&&(r.texCoord0=!0),a.push({gltf:c,writeVertices:p,region:g})}return{vertexAttributes:{position:$(W,t),normal:r.normal?$(j,t):null,tangent:r.tangent?$(O,t):null,color:r.color?$(F,t):null,texCoord0:r.texCoord0?$(X,t):null},parts:a,components:[]}}function he(e){return new N({data:(de(e.data),e.data),wrap:Ce(e.parameters.wrap)})}function we(e,t){const r=new v(Me(e.color,e.opacity)),u=e.emissiveFactor?new v(Se(e.emissiveFactor)):null,n=a=>a?new V({scale:a.scale?[a.scale[0],a.scale[1]]:[1,1],rotation:q(a.rotation??0),offset:a.offset?[a.offset[0],a.offset[1]]:[0,0]}):null;return new K({color:r,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:u,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:Be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:n(e.colorTextureTransform),normalTextureTransform:n(e.normalTextureTransform),occlusionTextureTransform:n(e.occlusionTextureTransform),emissiveTextureTransform:n(e.emissiveTextureTransform),metallicRoughnessTextureTransform:n(e.metallicRoughnessTextureTransform)})}function be(e,t,r){t.writeVertices&&ve(e,t);const{indices:u,attributes:n,primitiveType:a,material:c}=t.gltf;let i=ae(u||n.position.count,a);const s=t.region.start;if(s){const m=new Uint32Array(i);for(let l=0;l<i.length;l++)m[l]+=s;i=m}e.components.push(new Q({name:t.gltf.name,faces:i,material:r.get(c),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function ve(e,t){const{position:r,normal:u,tangent:n,color:a,texCoord0:c}=e.vertexAttributes,i=t.region.start,{attributes:s,transform:m}=t.gltf,l=s.position.count;if(Y(r.slice(i,l),s.position,m),s.normal!=null&&u!=null){const o=z(C(),m),f=u.slice(i,l);Z(f,s.normal,o),B(o)&&ee(f,f)}else u!=null&&le(u,0,0,1,{dstIndex:i,count:l});if(s.tangent!=null&&n!=null){const o=D(C(),m),f=n.slice(i,l);te(f,s.tangent,o),B(o)&&re(f,f)}else n!=null&&h(n,0,0,1,1,{dstIndex:i,count:l});if(s.texCoord0!=null&&c!=null?ie(c.slice(i,l),s.texCoord0):c!=null&&ue(c,0,0,{dstIndex:i,count:l}),s.color!=null&&a!=null){const o=s.color,f=a.slice(i,l);if(o.elementCount===4)o instanceof O?R(f,o,255):o instanceof F?ce(f,o):o instanceof H&&R(f,o,1/256);else{h(f,255,255,255,255);const p=S.fromTypedArray(f.typedBuffer,f.typedBufferStride);o instanceof j?E(p,o,255):o instanceof S?fe(p,o):o instanceof J&&E(p,o,1/256)}}else a!=null&&h(a.slice(i,l),255,255,255,255)}function Be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ce(e){return{horizontal:A(e.s),vertical:A(e.t)}}function A(e){switch(e){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function d(e){return e**(1/me)*255}function Me(e,t){return G(d(e[0]),d(e[1]),d(e[2]),t)}function Se(e){return U(d(e[0]),d(e[1]),d(e[2]))}export{ot as loadGLTFMesh};