const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./loadGLTFMesh-DolSvUxL.js","./index-Bf1OihDl.js","./index-D74mM2bJ.css","./mat3f64-q3fE-ZOt.js","./MeshVertexAttributes-Bv1m47Nb.js","./meshVertexSpaceUtils-DFyjXiLe.js","./MeshLocalVertexSpace-KkI1kom-.js","./BufferView-C5M1G9eR.js","./vec3-BM7AKafA.js","./vec4-hLsZwzFg.js","./types-D0PSWh4d.js","./loader-CKfiKPJD.js","./mat4f64-CSKppSlJ.js","./quat-Wq316E4s.js","./quatf64-aQ5IuZRd.js","./resourceUtils-DA3_P-8R.js","./basicInterfaces-CZwQPxTp.js","./DefaultMaterial_COLOR_GAMMA-TKKYi10J.js","./Indices-CavXPDDe.js","./vertexSpaceConversion-BxTjBk_1.js","./spatialReferenceEllipsoidUtils-B9Y9O0bd.js","./computeTranslationToOriginAndRotation-B4orLfH2.js","./projectPointToVector-x35GYMgk.js","./MeshTransform-DO_wgChn.js","./earcut-Lltz9D9k.js","./plane-BCZoS4VK.js","./deduplicate-ZamJbZJd.js","./External-C2-KEXeQ.js","./infoFor3D-CxdEiWhp.js","./gltfexport-DO9rlfVA.js"])))=>i.map(i=>d[i]);
import{a7 as u,a8 as f,hR as Nt,af as Wt,cn as Pt,ab as z,ac as ve,fg as We,ad as Se,o8 as zt,de as Ht,dz as ot,fQ as Pe,ai as ae,aq as Ae,s as re,gB as kt,eH as _,cM as Bt,mo as Gt,ey as pe,o9 as Vt,oa as Zt,ob as Ee,lS as le,ah as Xt,ej as qt,em as Yt,aV as S,aW as Re,oc as Jt,kX as ze,od as Me,cN as Kt,ae as Qt,dZ as en,k4 as st,_ as _e,ak as we,ag as j,n7 as tn,oe as nn,mL as rn,iS as on,iU as sn,ki as an,az as ln,cx as cn,he as Ce,aU as un,of as at,nN as pn,j2 as $e,hC as it,og as lt,hD as ct,oh as ut,oi as pt,hv as hn,eG as fn,eF as mn,ek as dn,gn,lL as yn,cC as xn,d2 as vn,oj as wn,bR as $n,ok as bn,g1 as An}from"./index-Bf1OihDl.js";import{j as ht,N as oe,z as ft,w as he,k as mt,d as Tn}from"./MeshTransform-DO_wgChn.js";import{r as Sn,n as Rn,p as fe}from"./MeshVertexAttributes-Bv1m47Nb.js";import{a as Le,b as me}from"./MeshLocalVertexSpace-KkI1kom-.js";import{a as ie,s as de,g as dt,u as Mn}from"./meshVertexSpaceUtils-DFyjXiLe.js";import{e as _n}from"./earcut-Lltz9D9k.js";import{t as gt}from"./Indices-CavXPDDe.js";import{M as Cn,O as Ln,v as Dn}from"./plane-BCZoS4VK.js";import{e as He}from"./deduplicate-ZamJbZJd.js";import{c as I}from"./projectPointToVector-x35GYMgk.js";import{F as $,B as De,O as N,n as Fn,k as yt,g as xt,E as vt,w as wt,h as $t,R as bt,G as At}from"./vertexSpaceConversion-BxTjBk_1.js";import{e as be}from"./mat4f64-CSKppSlJ.js";import{a as Ie}from"./spatialReferenceEllipsoidUtils-B9Y9O0bd.js";import{C as Tt}from"./computeTranslationToOriginAndRotation-B4orLfH2.js";import{e as ke,i as On}from"./vec3-BM7AKafA.js";import{o as Be,h as jn,m as En}from"./External-C2-KEXeQ.js";import{e as St}from"./mat3f64-q3fE-ZOt.js";import{b as In}from"./quat-Wq316E4s.js";import{e as Un,r as Nn}from"./quatf64-aQ5IuZRd.js";var V;const Te=new WeakMap;let Wn=0,F=V=class extends ve{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,n,r){if(e instanceof HTMLImageElement){const o={type:"image-element",src:We(e.src,r),crossOrigin:e.crossOrigin};t[n]=o}else if(e instanceof HTMLCanvasElement){const o={type:"canvas-element",imageData:Ge(e.getContext("2d").getImageData(0,0,e.width,e.height))};t[n]=o}else if(e instanceof HTMLVideoElement){const o={type:"video-element",src:We(e.src,r),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[n]=o}else if(e instanceof ImageData){const o={type:"image-data",imageData:Ge(e)};t[n]=o}}readData(e){switch(e.type){case"image-element":{const t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{const t=Ve(e.imageData),n=document.createElement("canvas");return n.width=t.width,n.height=t.height,n.getContext("2d").putImageData(t,0,0),n}case"image-data":return Ve(e.imageData);case"video-element":{const t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){const{data:e,url:t}=this;return e instanceof HTMLCanvasElement?Ze(e.getContext("2d").getImageData(0,0,e.width,e.height)):e instanceof ImageData?Ze(e):!(!(t!=null&&t.toLowerCase().endsWith(".png"))&&!(t!=null&&t.toLocaleLowerCase().startsWith("data:image/png;")))}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){const e=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",t=(n="")=>`d:${n},t:${this.transparent},w:${e}`;return this.url!=null?t(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?t(this.data.src):(Te.has(this.data)||Te.set(this.data,++Wn),t(Te.get(this.data))):t()}get memoryUsage(){let e=0;if(e+=this.url!=null?this.url.length:0,this.data!=null){const t=this.data;"data"in t?e+=t.data.byteLength:t instanceof HTMLImageElement?e+=t.naturalWidth*t.naturalHeight*3:t instanceof HTMLCanvasElement&&(e+=t.width*t.height*3)}return e}clone(){const e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new V(e)}cloneWithDeduplication(e){const t=e.get(this);if(t)return t;const n=this.clone();return e.set(this,n),n}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(e){return typeof e=="string"?new V({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new V({data:e}):Se(V,e)}};function Ge(e){let t="";for(let n=0;n<e.data.length;n++)t+=String.fromCharCode(e.data[n]);return{data:btoa(t),width:e.width,height:e.height}}function Ve(e){const t=atob(e.data),n=new Uint8ClampedArray(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return zt(n,e.width,e.height)}function Ze(e){for(let t=3;t<e.data.length;t+=4)if(e.data[t]!==255)return!0;return!1}u([f({type:String,json:{write:Nt}})],F.prototype,"url",null),u([f({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),f()],F.prototype,"data",null),u([Wt("data")],F.prototype,"writeData",null),u([Pt("data")],F.prototype,"readData",null),u([f({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],F.prototype,"transparent",null),u([f({json:{write:!0}})],F.prototype,"wrap",void 0),u([f({readOnly:!0})],F.prototype,"contentHash",null),F=V=u([z("esri.geometry.support.MeshTexture")],F);const te=F;let Z=class extends Ht(ve){constructor(t){super(t),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};u([f({type:[Number],nonNullable:!0,json:{write:!0}})],Z.prototype,"offset",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0}})],Z.prototype,"rotation",void 0),u([f({type:[Number],nonNullable:!0,json:{write:!0}})],Z.prototype,"scale",void 0),Z=u([z("esri.geometry.support.MeshTextureTransform")],Z);const ne=Z;var Fe;let C=Fe=class extends ve{constructor(e){super(e),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=e!=null?e.get(this):null;if(n)return n;const r=new Fe(this.clonePropertiesWithDeduplication(t));return e!=null&&e.set(this,r),r}clonePropertiesWithDeduplication(e){var t,n,r,o;return{color:this.color!=null?this.color.clone():null,colorTexture:(t=this.colorTexture)==null?void 0:t.cloneWithDeduplication(e),normalTexture:(n=this.normalTexture)==null?void 0:n.cloneWithDeduplication(e),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:(r=this.colorTextureTransform)==null?void 0:r.clone(),normalTextureTransform:(o=this.normalTextureTransform)==null?void 0:o.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let e=0;return e+=this.color!=null?16:0,this.colorTexture!=null&&(e+=this.colorTexture.memoryUsage),e+=this.colorTextureTransform!=null?20:0,this.normalTexture!=null&&(e+=this.normalTexture.memoryUsage),e+=this.normalTextureTransform!=null?20:0,e}};u([f({type:ot,json:{write:!0}})],C.prototype,"color",void 0),u([f({type:te,json:{write:!0}})],C.prototype,"colorTexture",void 0),u([f({type:ne,json:{write:!0}})],C.prototype,"colorTextureTransform",void 0),u([f({type:te,json:{write:!0}})],C.prototype,"normalTexture",void 0),u([f({type:ne,json:{write:!0}})],C.prototype,"normalTextureTransform",void 0),u([f({nonNullable:!0,json:{write:!0}})],C.prototype,"alphaMode",void 0),u([f({nonNullable:!0,json:{write:!0}})],C.prototype,"alphaCutoff",void 0),u([f({nonNullable:!0,json:{write:!0}})],C.prototype,"doubleSided",void 0),C=Fe=u([z("esri.geometry.support.MeshMaterial")],C);const Ue=C;var Oe;let R=Oe=class extends Ue{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=e!=null?e.get(this):null;if(n)return n;const r=new Oe(this.clonePropertiesWithDeduplication(t));return e!=null&&e.set(this,r),r}getMemoryUsage(){let e=super.getMemoryUsage();return e+=this.emissiveColor!=null?16:0,this.emissiveTexture!=null&&(e+=this.emissiveTexture.memoryUsage),e+=this.emissiveTextureTransform!=null?20:0,this.occlusionTexture!=null&&(e+=this.occlusionTexture.memoryUsage),e+=this.occlusionTextureTransform!=null?20:0,this.metallicRoughnessTexture!=null&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=this.metallicRoughnessTextureTransform!=null?20:0,e}clonePropertiesWithDeduplication(e){var t,n,r,o,s,a,i;return{...super.clonePropertiesWithDeduplication(e),emissiveColor:(t=this.emissiveColor)==null?void 0:t.clone(),emissiveTexture:(n=this.emissiveTexture)==null?void 0:n.cloneWithDeduplication(e),emissiveTextureTransform:(r=this.emissiveTextureTransform)==null?void 0:r.clone(),occlusionTexture:(o=this.occlusionTexture)==null?void 0:o.cloneWithDeduplication(e),occlusionTextureTransform:(s=this.occlusionTextureTransform)==null?void 0:s.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:(a=this.metallicRoughnessTexture)==null?void 0:a.cloneWithDeduplication(e),metallicRoughnessTextureTransform:(i=this.metallicRoughnessTextureTransform)==null?void 0:i.clone()}}};u([f({type:ot,json:{write:!0}})],R.prototype,"emissiveColor",void 0),u([f({type:te,json:{write:!0}})],R.prototype,"emissiveTexture",void 0),u([f({type:ne,json:{write:!0}})],R.prototype,"emissiveTextureTransform",void 0),u([f({type:te,json:{write:!0}})],R.prototype,"occlusionTexture",void 0),u([f({type:ne,json:{write:!0}})],R.prototype,"occlusionTextureTransform",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],R.prototype,"metallic",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],R.prototype,"roughness",void 0),u([f({type:te,json:{write:!0}})],R.prototype,"metallicRoughnessTexture",void 0),u([f({type:ne,json:{write:!0}})],R.prototype,"metallicRoughnessTextureTransform",void 0),R=Oe=u([z("esri.geometry.support.MeshMaterialMetallicRoughness")],R);const Pn=R;var Q;let O=Q=class extends ve{static from(e){return Se(Q,e)}constructor(e){super(e),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(e){return Rn(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},ae.getLogger(this))}castMaterial(e){return Se(e&&typeof e=="object"&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?Pn:Ue,e)}clone(){return new Q({faces:Ae(this.faces),shading:this.shading,material:Ae(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(e,t){const n={faces:Ae(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new Q(n)}get memoryUsage(){let e=0;return this.faces!=null&&(e+=this.faces.byteLength),this.material!=null&&(e+=this.material.memoryUsage),e}};u([f({json:{write:Sn}})],O.prototype,"faces",void 0),u([Pe("faces")],O.prototype,"castFaces",null),u([f({type:Ue,json:{write:!0}})],O.prototype,"material",void 0),u([Pe("material")],O.prototype,"castMaterial",null),u([f({json:{write:!0}})],O.prototype,"name",void 0),u([f({type:String,json:{write:!0}})],O.prototype,"shading",void 0),u([f({type:Boolean})],O.prototype,"trustSourceNormals",void 0),O=Q=u([z("esri.geometry.support.MeshComponent")],O);const J=O,zn="Mesh must be loaded before applying operations",Hn="Provided component is not part of the list of components",kn="Expected polygon to be a Polygon instance",ee="Expected location to be a Point instance";class Xe extends re{constructor(){super("invalid-input:location",ee)}}function Bn(e,t,n){const r=Gn(qe,e,t,n)?Ln(qe):[0,0,1];return Math.abs(r[2])>Math.cos(kt(80))?_.Z:Math.abs(r[1])>Math.abs(r[0])?_.Y:_.X}function Gn(e,t,n,r){const o=(a=>!Array.isArray(a[0]))(t)?(a,i)=>t[3*a+i]:(a,i)=>t[a][i],s=r?Bt(r)/Gt(r):1;return Dn(e,(a,i)=>pe(a,o(i,0)*s,o(i,1)*s,o(i,2)),n)}const qe=Cn();function Vn(e){const t=Xn(e.rings,e.hasZ,ge.CCW_IS_HOLE,e.spatialReference),n=new Array;let r=0,o=0;for(const i of t.polygons){const l=i.count,c=i.index,h=Vt(t.position,3*c,3*l),d=i.holeIndices.map(p=>p-c),m=gt(_n(h,d,3));n.push({position:h,faces:m}),r+=h.length,o+=m.length}const s=Zn(n,r,o),a=Array.isArray(s.position)?He(s.position,3,{originalIndices:s.faces}):He(s.position.buffer,6,{originalIndices:s.faces});return s.position=Zt(new Float64Array(a.buffer)),s.faces=a.indices,s}function Zn(e,t,n){if(e.length===1)return e[0];const r=Ee(t),o=new Array(n);let s=0,a=0,i=0;for(const l of e){for(let c=0;c<l.position.length;c++)r[s++]=l.position[c];for(const c of l.faces)o[a++]=c+i;i=s/3}return{position:r,faces:gt(o)}}function Xn(e,t,n,r){const o=e.length,s=new Array(o),a=new Array(o),i=new Array(o);let l=0;for(let g=0;g<o;++g)l+=e[g].length;let c=0,h=0,d=0;const m=Ee(3*l);let p=0;for(let g=o-1;g>=0;g--){const y=e[g],b=n===ge.CCW_IS_HOLE&&qn(y,t,r);if(b&&o!==1)s[c++]=y;else{let L=y.length;for(let x=0;x<c;++x)L+=s[x].length;const w={index:p,pathLengths:new Array(c+1),count:L,holeIndices:new Array(c)};w.pathLengths[0]=y.length,y.length>0&&(i[d++]={index:p,count:y.length}),p=b?ce(y,y.length-1,-1,m,p,y.length,t):ce(y,0,1,m,p,y.length,t);for(let x=0;x<c;++x){const T=s[x];w.holeIndices[x]=p,w.pathLengths[x+1]=T.length,T.length>0&&(i[d++]={index:p,count:T.length}),p=ce(T,0,1,m,p,T.length,t)}c=0,w.count>0&&(a[h++]=w)}}for(let g=0;g<c;++g){const y=s[g];y.length>0&&(i[d++]={index:p,count:y.length}),p=ce(y,0,1,m,p,y.length,t)}return a.length=h,i.length=d,{position:m,polygons:a,outlines:i}}function ce(e,t,n,r,o,s,a){o*=3;for(let i=0;i<s;++i){const l=e[t];r[o++]=l[0],r[o++]=l[1],r[o++]=a&&l[2]?l[2]:0,t+=n}return o/3}function qn(e,t,n){if(!t)return!le(e);const r=e.length-1;switch(Bn(e,r,n)){case _.X:return!le(e,_.Y,_.Z);case _.Y:return!le(e,_.X,_.Z);case _.Z:return!le(e,_.X,_.Y)}}var ge;(function(e){e[e.NONE=0]="NONE",e[e.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(ge||(ge={}));function Ne(e,t,n,r){if(r!==void 0){Xt(e(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const o=t.type==="local";if(!ie(t)||r===o)return n.isGeographic||n.isWebMercator&&r;e().warnOnce(`Specifying the 'geographic' parameter (${r}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return n.isGeographic;case"local":return n.isGeographic||n.isWebMercator}}const se=()=>ae.getLogger("esri.geometry.support.meshUtils.centerAt");function Yn(e,t,n){var a;if(!((a=e.vertexAttributes)!=null&&a.position))return;const{vertexSpace:r}=e,o=(n==null?void 0:n.origin)??e.origin,s=Ne(se,r,o.spatialReference,n==null?void 0:n.geographic);ie(r)?Jn(e,t,o):s?Kn(e,t,o):Qn(e,t,o)}function Jn(e,t,n){const{vertexSpace:r}=e;if(!ie(r))return;const o=Mt,s=Rt;if(!I(t,s,e.spatialReference))return void $(se(),t.spatialReference,e.spatialReference,N);if(!I(n,o,e.spatialReference)){const i=e.origin;return o[0]=i.x,o[1]=i.y,o[2]=i.z,void $(se(),n.spatialReference,e.spatialReference,N)}const a=qt(tr,s,o);r.origin=Yt(S(),r.origin,a)}function Kn(e,t,n){const r=Re(n.x,n.y,n.z??0),o=De(e,new Le({origin:r}));if(!o)return;const s=Re(t.x,t.y,t.z??0),a=De({vertexAttributes:o,spatialReference:e.spatialReference,vertexSpace:new Le({origin:s})},me.absolute);if(!a)return;const{position:i,normal:l,tangent:c}=a;e.vertexAttributes.position=i,e.vertexAttributes.normal=l,e.vertexAttributes.tangent=c,e.vertexAttributesChanged()}function Qn(e,t,n){const r=Mt,o=Rt;if(I(t,o,e.spatialReference)){if(!I(n,r,e.spatialReference)){const s=e.origin;return r[0]=s.x,r[1]=s.y,r[2]=s.z,void $(se(),n.spatialReference,e.spatialReference,N)}er(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else $(se(),t.spatialReference,e.spatialReference,N)}function er(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]}const Rt=S(),Mt=S(),tr=S();function nr(e){const{spatialReference:t,vertexSpace:n,untransformedBounds:r}=e,o=Jt(r,rr);if(ie(n)&&e.transform&&ke(o,o,e.transform.localMatrix),n.type==="georeferenced"){const i=n.origin;return i&&On(o,o,i),ze(Me(o),t)}const s=Ie(t),a=n.origin;if(!Kt(s,t)){const[i,l,c]=a;return new Qt({xmin:i,ymin:l,zmin:c,xmax:i,ymax:l,zmax:c,spatialReference:t})}return Tt(t,a,Ye,s),ke(o,o,Ye),en(o,s,0,o,t,0),ze(Me(o),t)}const Ye=be(),rr=Ee(24);async function or(e,t,n){const{source:r}=t,{loadGLTFMesh:o}=await st(_e(()=>import("./loadGLTFMesh-DolSvUxL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url),n),s=await ar(r,n);we(n);const a=o(new j({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:sr(s),signal:n==null?void 0:n.signal,expectedType:s.type,unitConversionDisabled:t.unitConversionDisabled});a.then(()=>s.dispose(),()=>s.dispose());const{vertexAttributes:i,components:l}=await a;e.vertexAttributes=i,e.components=l}function sr(e){const t=tn(e.url);return n=>{const r=nn(n,t,t),o=r?r.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??n}}async function ar(e,t){if(Array.isArray(e)){if(!e.length)throw new re("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?lr(e):cr(e,t)}return _t(e)}async function ir(e,t){const{parts:n,assetMimeType:r,assetName:o}=e;if(n.length===1)return new ye(n[0].partUrl);const s=await e.toBlob(t);return we(t),ye.fromBlob(s,Ot(o,r))}function _t(e){return ye.fromBlob(e,Ot(e.name,e.type))}function lr(e){return Dt(e.map(t=>({name:t.name,mimeType:t.type,source:_t(t)})))}async function cr(e,t){const n=await rn(e.map(async r=>{const o=await ir(r);return we(t),{name:r.assetName,mimeType:r.assetMimeType,source:o}}));if(on(t))throw n.forEach(r=>r.source.dispose()),sn();return Dt(n)}const Ct=/^model\/gltf\+json$/,Lt=/^model\/gltf-binary$/,je=/\.gltf$/i,ur=/\.glb$/i;function Je({mimeType:e,source:t,name:n}){return Ct.test(e)||je.test(n)?{url:t.url,type:"gltf"}:Lt.test(e)||ur.test(n)?{url:t.url,type:"glb"}:null}function Dt(e){const t=new Map;let n=null,r=null;for(const s of e){const{source:a,name:i}=s;n??(n=Je(s)),i==="ESRI3DO_NORM.glb"&&(r=Je(s)),t.set(i,a.url),a.files.forEach((l,c)=>t.set(c,l))}const o=r??n;if(o==null)throw new re("mesh-load-external:missing-files","Missing files to load external mesh source");return new ye(o.url,()=>e.forEach(({source:s})=>s.dispose()),t,o.type)}let ye=class Ft{constructor(t,n=()=>{},r=new Map,o){this.url=t,this.dispose=n,this.files=r,this.type=o}static fromBlob(t,n){const r=URL.createObjectURL(t);return new Ft(r,()=>URL.revokeObjectURL(r),void 0,n)}};function Ot(e,t){return Ct.test(t)||je.test(e)?"gltf":Lt.test(t)||je.test(e)?"glb":void 0}let E=class extends an{constructor(e){super(e),this.externalSources=new ln,this._explicitDisplaySource=null,this.georeferenced=!1,this.addHandles(cn(()=>this.externalSources,"after-remove",({item:t})=>{t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!Be(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!jn(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>En(t,e))}get _implicitDisplaySource(){return this.externalSources.find(Be)}};u([f()],E.prototype,"externalSources",void 0),u([f()],E.prototype,"displaySource",null),u([f()],E.prototype,"_implicitDisplaySource",null),u([f()],E.prototype,"_explicitDisplaySource",void 0),u([f()],E.prototype,"georeferenced",void 0),E=u([z("esri.geometry.support.meshUtils.Metadata")],E);function pr(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=wr,r=4*e.length,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(2*e.length*3);let l=0,c=0,h=0,d=0;for(let m=0;m<e.length;m++){const p=e[m],g=l/3;for(const b of t)i[d++]=g+b;const y=p.corners;for(let b=0;b<4;b++){const L=y[b];let w=0;a[h++]=.25*n[b][0]+p.uvOrigin[0],a[h++]=p.uvOrigin[1]-.25*n[b][1];for(let x=0;x<3;x++)p.axis[x]!==0?(o[l++]=.5*p.axis[x],s[c++]=p.axis[x]):(o[l++]=.5*L[w++],s[c++]=0)}}return{position:o,normal:s,uv:a,faces:i}}function hr(e,t){const n=e.components[0],r=n.faces,o=$r[t],s=6*o,a=new Array(6),i=new Array(r.length-6);let l=0,c=0;for(let h=0;h<r.length;h++)h>=s&&h<s+6?a[l++]=r[h]:i[c++]=r[h];if(e.vertexAttributes.uv!=null){const h=new Float32Array(e.vertexAttributes.uv),d=4*o*2,m=[0,1,1,1,1,0,0,0];for(let p=0;p<m.length;p++)h[d+p]=m[p];e.vertexAttributes.uv=h}return e.components=[new J({faces:a,material:n.material}),new J({faces:i})],e}function fr(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*((t-1)*n*2));let l=0,c=0,h=0,d=0;for(let m=0;m<=t;m++){const p=m/t*Math.PI+.5*Math.PI,g=Math.cos(p),y=Math.sin(p);v[2]=y;const b=m===0||m===t,L=b?n-1:n;for(let w=0;w<=L;w++){const x=w/L*2*Math.PI;v[0]=-Math.sin(x)*g,v[1]=Math.cos(x)*g;for(let T=0;T<3;T++)o[l]=.5*v[T],s[l]=v[T],++l;a[c++]=(w+(b?.5:0))/n,a[c++]=m/t,m!==0&&w!==n&&(m!==t&&(i[h++]=d,i[h++]=d+1,i[h++]=d-n),m!==1&&(i[h++]=d,i[h++]=d-n,i[h++]=d-n-1)),d++}}return{position:o,normal:s,uv:a,faces:i}}function mr(e=0){const n=Math.round(16*2**e),r=4*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*(4*n));let l=0,c=0,h=0,d=0,m=0;for(let p=0;p<=5;p++){const g=p===0||p===5,y=p<=1||p>=4,b=p===2||p===4,L=g?n-1:n;for(let w=0;w<=L;w++){const x=w/L*2*Math.PI,T=g?0:.5;v[0]=T*Math.sin(x),v[1]=T*-Math.cos(x),v[2]=p<=2?.5:-.5;for(let H=0;H<3;H++)o[l++]=v[H],s[c++]=y?H===2?p<=1?1:-1:0:H===2?0:v[H]/T;a[h++]=(w+(g?.5:0))/n,a[h++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,b||p===0||w===n||(p!==5&&(i[d++]=m,i[d++]=m+1,i[d++]=m-n),p!==1&&(i[d++]=m,i[d++]=m-n,i[d++]=m-n-1)),m++}}return{position:o,normal:s,uv:a,faces:i}}function dr(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function gr(e){const t=K.facingAxisOrderSwap[e],n=K.position,r=K.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let a=0;for(let i=0;i<4;i++){const l=a;for(let c=0;c<3;c++){const h=t[c],d=Math.abs(h)-1,m=h>=0?1:-1;o[a]=n[l+d]*m,s[a]=r[l+d]*m,a++}}return{position:o,normal:s,uv:new Float32Array(K.uv),faces:new Uint32Array(K.faces),isPlane:!0}}const k=1,B=2,G=3,K={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[G,k,B],west:[-G,-k,B],north:[-k,G,B],south:[k,-G,B],up:[k,B,G],down:[k,-B,-G]}};function ue(e,t,n){e.isPlane||yr(e),vr(e,xr(n==null?void 0:n.size,n==null?void 0:n.unit,t.spatialReference));const r=de(t,n),o=t.spatialReference.isGeographic?de(t):r,s=De({vertexAttributes:e,vertexSpace:o,spatialReference:t.spatialReference},r,{allowBufferReuse:!0});return{vertexAttributes:new fe({...s,uv:e.uv}),vertexSpace:r,components:[new J({faces:e.faces,material:(n==null?void 0:n.material)||null})],spatialReference:t.spatialReference}}function yr(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function xr(e,t,n){const r=Fn(t,n);if(e==null&&r===1)return null;if(e==null)return[r,r,r];if(typeof e=="number"){const o=e*r;return[o,o,o]}return[e.width!=null?e.width*r:r,e.depth!=null?e.depth*r:r,e.height!=null?e.height*r:r]}function vr(e,t){if(t!=null){U[0]=t[0],U[4]=t[1],U[8]=t[2];for(let n=0;n<e.position.length;n+=3){for(let r=0;r<3;r++)v[r]=e.position[n+r];Ce(v,v,U);for(let r=0;r<3;r++)e.position[n+r]=v[r]}if(t[0]!==t[1]||t[1]!==t[2]){U[0]=1/t[0],U[4]=1/t[1],U[8]=1/t[2];for(let n=0;n<e.normal.length;n+=3){for(let r=0;r<3;r++)v[r]=e.normal[n+r];Ce(v,v,U),un(v,v);for(let r=0;r<3;r++)e.normal[n+r]=v[r]}}}}const wr={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},$r={south:0,east:1,north:2,west:3,up:4,down:5},v=S(),U=St(),W=()=>ae.getLogger("esri.geometry.support.meshUtils.rotate");function br(e,t,n){var l;if(!((l=e.vertexAttributes)!=null&&l.position)||t[3]===0)return;const{spatialReference:r,vertexSpace:o}=e,s=(n==null?void 0:n.origin)??e.origin,a=n==null?void 0:n.geographic,i=Ne(W,o,r,a);dt(e)?Ar(e,t,s):i?Tr(e,t,s):Sr(e,t,s)}function Ar(e,t,n){e.transform??(e.transform=new oe);const{vertexSpace:r,transform:o,spatialReference:s}=e,[a,i,l]=r.origin,c=new j({x:a,y:i,z:l,spatialReference:s}),h=X;if(c.equals(n))pe(h,0,0,0);else if(!yt(h,n,e))return void $(W(),n.spatialReference,s,N);In(tt,he(t),ft(t));const d=at(Ke,tt,$e,pn,h),{localMatrix:m}=o,p=it(Ke,d,m);o.scale=lt(S(),p),ct(p,p,ut(X,o.scale));const g=o.rotationAxis;o.rotation=mt(p),o.rotationAngle===0&&(o.rotationAxis=g),o.translation=pt(S(),p)}function Tr(e,t,n){const r=e.spatialReference,o=Ie(r),s=jt;if(!I(n,s,o)&&($(W(),n.spatialReference,o,"Falling back to mesh origin"),!I(e.origin,s,o)))return void $(W(),e.origin.spatialReference,o);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(a.length),h=i!=null?new Float32Array(i.length):null,d=l!=null?new Float32Array(l.length):null;Tt(o,s,xe,o),hn(et,xe);const m=Qe;Ce(he(Qe),he(t),et),m[3]=t[3],xt(a,r,c,o)&&(i==null||h==null||vt(i,a,r,c,o,h))&&(l==null||d==null||wt(l,a,r,c,o,d))?(Y(c,m,3,s),$t(c,o,a,r)&&(i==null||h==null||(Y(h,m,3),bt(h,a,r,c,o,i)))&&(l==null||d==null||(Y(d,m,4),At(d,a,r,c,o,l)))?e.vertexAttributesChanged():$(W(),o,r)):$(W(),r,o)}function Sr(e,t,n){const r=jt;if(!I(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void $(W(),n.spatialReference,e.spatialReference,N)}Y(e.vertexAttributes.position,t,3,r),Y(e.vertexAttributes.normal,t,3),Y(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function Y(e,t,n,r=$e){if(e!=null){fn(xe,ft(t),he(t));for(let o=0;o<e.length;o+=n){for(let s=0;s<3;s++)X[s]=e[o+s]-r[s];mn(X,X,xe);for(let s=0;s<3;s++)e[o+s]=X[s]+r[s]}}}const X=S(),Ke=be(),Qe=ht(),xe=be(),et=St(),jt=S(),tt=Un(),P=()=>ae.getLogger("esri.geometry.support.meshUtils.scale");function Rr(e,t,n){var l;if(!((l=e.vertexAttributes)!=null&&l.position))return;const{vertexSpace:r,spatialReference:o}=e,s=(n==null?void 0:n.origin)??e.origin,a=n==null?void 0:n.geographic,i=Ne(P,r,o,a);dt(e)?Mr(e,t,s):i?_r(e,t,s):Cr(e,t,s)}function Mr(e,t,n){e.transform??(e.transform=new oe);const{vertexSpace:r,transform:o,spatialReference:s}=e,[a,i,l]=r.origin,c=new j({x:a,y:i,z:l,spatialReference:s}),h=q;if(c.equals(n))pe(h,0,0,0);else if(!yt(h,n,e))return void $(P(),n.spatialReference,s,N);const d=pe(Lr,t,t,t),m=at(nt,Nn,$e,d,h),{localMatrix:p}=o,g=it(nt,m,p);o.scale=lt(S(),g),ct(g,g,ut(q,o.scale));const y=o.rotationAxis;o.rotation=mt(g),o.rotationAngle===0&&(o.rotationAxis=y),o.translation=pt(S(),g)}function _r(e,t,n){const r=e.spatialReference,o=Ie(r),s=It;if(!I(n,s,o)&&($(P(),n.spatialReference,o,"Falling back to mesh origin"),!I(e.origin,s,o)))return void $(P(),e.origin.spatialReference,o);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(a.length),h=i!=null?new Float32Array(i.length):null,d=l!=null?new Float32Array(l.length):null;xt(a,r,c,o)&&(i==null||h==null||vt(i,a,r,c,o,h))&&(l==null||d==null||wt(l,a,r,c,o,d))?(Et(c,t,s),$t(c,o,a,r)&&(i==null||h==null||bt(h,a,r,c,o,i))&&(l==null||d==null||At(d,a,r,c,o,l))?e.vertexAttributesChanged():$(P(),o,r)):$(P(),r,o)}function Cr(e,t,n){const r=It;if(!I(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void $(P(),n.spatialReference,e.spatialReference,N)}Et(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function Et(e,t,n=$e){if(e)for(let r=0;r<e.length;r+=3){for(let o=0;o<3;o++)q[o]=e[r+o]-n[o];dn(q,q,t);for(let o=0;o<3;o++)e[r+o]=q[o]+n[o]}}const q=S(),Lr=S(),nt=be(),It=S();var M;const Ut="esri.geometry.Mesh";function D(){return ae.getLogger(Ut)}const Dr={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:me,local:Le}};let A=M=class extends gn.LoadableMixin(yn(An)){constructor(e){super(e),this.components=null,this.vertexSpace=new me,this.transform=null,this.metadata=new E,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new fe,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(xn(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(t=>t.clone())}},()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){var e;return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):((e=this.metadata.displaySource)==null?void 0:e.extent)!=null}get _transformedExtent(){const{spatialReference:e,vertexSpace:t}=this,n=this;return nr({get transform(){return n.transform},vertexSpace:t,spatialReference:e,untransformedBounds:this._untransformedBounds})}get _untransformedBounds(){const{vertexAttributes:{position:e},components:t}=this;return e.length===0||(t==null?void 0:t.length)===0?vn(wn):Me(e)}get origin(){const e=Mn(this.vertexSpace,this.spatialReference);if(e!=null)return e;const{center:t,zmin:n}=this._transformedExtent;return new j({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get extent(){var e,t;return this.loaded||((t=(e=this.metadata)==null?void 0:e.displaySource)==null?void 0:t.extent)==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(J.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}D().error("removeComponent()",Hn)}}rotate(e,t,n,r){return Tn(e,t,n,rt),br(this,rt,r),this}offset(e,t,n){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:r,vertexAttributes:o}=this,s=o==null?void 0:o.position;if(!s)return this;if(ie(r)){const[a,i,l]=r.origin;r.origin=Re(a+e,i+t,l+n)}else{for(let a=0;a<s.length;a+=3)s[a]+=e,s[a+1]+=t,s[a+2]+=n;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(Rr(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Yn(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(or(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone(),{preserveMetadata:!0})}cloneAndModifyVertexAttributes(e,t,n){var s;let r=null;if(this.components){const a=new Map,i=new Map;r=this.components.map(l=>l.cloneWithDeduplication(a,i))}const o={components:r,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:((s=this.transform)==null?void 0:s.clone())??null,metadata:n!=null&&n.preserveMetadata?this.metadata.clone():new E};return new M(o)}cloneShallow(){return new M({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([_e(()=>import("./gltfexport-DO9rlfVA.js"),__vite__mapDeps([29,1,2,13,3,14,19,12,20,21,22,5,6,8,7,9,15,16,23,4,24,18,25,26,27,28]),import.meta.url),this.load(e)]);return we(e),await t(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(D().error(e,zn),!1)}static createBox(e,t){if(!(e instanceof j))return D().error(".createBox()",ee),null;const n=new M(ue(pr(),e,t));return t!=null&&t.imageFace&&t.imageFace!=="all"?hr(n,t.imageFace):n}static createSphere(e,t){return e instanceof j?new M(ue(fr((t==null?void 0:t.densificationFactor)||0),e,t)):(D().error(".createSphere()",ee),null)}static createCylinder(e,t){return e instanceof j?new M(ue(mr((t==null?void 0:t.densificationFactor)||0),e,t)):(D().error(".createCylinder()",ee),null)}static createPlane(e,t){if(!(e instanceof j))return D().error(".createPlane()",ee),null;const n=(t==null?void 0:t.facing)??"up",r=dr(n,t==null?void 0:t.size);return new M(ue(gr(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof $n))return D().error(".createFromPolygon()",kn),null;const n=Vn(e);return new M({vertexAttributes:new fe({position:n.position}),components:[new J({faces:n.faces,shading:"flat",material:(t==null?void 0:t.material)??null})],spatialReference:e.spatialReference,vertexSpace:new me})}static async createFromGLTF(e,t,n){if(!(e instanceof j)){const o=new Xe;throw D().error(".createfromGLTF()",o.message),o}const{loadGLTFMesh:r}=await st(_e(()=>import("./loadGLTFMesh-DolSvUxL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url),n);return new M(await r(e,t,n))}static async createFromFiles(e,t,n){bn(D(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});const r=o=>D().error(".createFromFiles()",o.message);if(!(e instanceof j)){const o=new Xe;throw r(o),o}if(!(n!=null&&n.layer))throw new re("invalid:no-layer","SceneLayer required for file to mesh conversion.");return n.layer.convertMesh(t,{location:e,...n})}static createWithExternalSource(e,t,n){var h;const r=(n==null?void 0:n.extent)??null,{spatialReference:o}=e,s=((h=n==null?void 0:n.transform)==null?void 0:h.clone())??new oe,a=de(e,n),i=n==null?void 0:n.unitConversionDisabled,l={source:t,extent:r,unitConversionDisabled:i},c=new E;return c.externalSources.push(l),new M({metadata:c,transform:s,vertexSpace:a,spatialReference:o})}static createIncomplete(e,t){var a;const{spatialReference:n}=e,r=((a=t==null?void 0:t.transform)==null?void 0:a.clone())??new oe,o=de(e,t),s=new M({transform:r,vertexSpace:o,spatialReference:n});return s.addResolvingPromise(Promise.reject(new re("mesh-incomplete","Mesh resources are not complete"))),s}};u([f({type:[J],json:{write:!0}})],A.prototype,"components",void 0),u([f({nonNullable:!0,types:Dr,constructOnly:!0,json:{write:!0}})],A.prototype,"vertexSpace",void 0),u([f({type:oe,json:{write:!0}})],A.prototype,"transform",void 0),u([f({constructOnly:!0})],A.prototype,"metadata",void 0),u([f()],A.prototype,"hasExtent",null),u([f()],A.prototype,"_transformedExtent",null),u([f()],A.prototype,"_untransformedBounds",null),u([f()],A.prototype,"origin",null),u([f({readOnly:!0,json:{read:!1}})],A.prototype,"extent",null),u([f({readOnly:!0,json:{read:!1,write:!0,default:!0}})],A.prototype,"hasZ",void 0),u([f({readOnly:!0,json:{read:!1,write:!0,default:!1}})],A.prototype,"hasM",void 0),u([f({type:fe,nonNullable:!0,json:{write:!0}})],A.prototype,"vertexAttributes",void 0),A=M=u([z(Ut)],A);const rt=ht(),Kr=A;export{Kr as $,ne as c,J as f,Pn as m,te as w};
