import{cT as se,lP as ae,lQ as ie,lR as ue,lm as Y,aY as le,lS as J,aq as fe,ji as ce,bD as de,s as l,lT as pe,ao as me,eB as he,d6 as Te,lU as ye,lV as we,gA as ge,du as be,iL as X,lW as V,a5 as I,lX as xe}from"./index-BkgwewGo.js";import{e as Q,r as $}from"./mat4f64-CSKppSlJ.js";import{D as M,L,C as f,E as g}from"./enums-BlUEVwJR.js";import{v as _e}from"./quat-COgZtRdQ.js";import{e as Se}from"./quatf64-Bdb9ZJJK.js";import{c as H,u as W,F as Ee,w as Oe,q as Re,A as Ne,V as Ae,B as ve,g as Ce,d as Ie,i as U,x as Me,L as Le,O as Fe,E as Be}from"./BufferView-DqUBo4lT.js";import{n as Ue,t as $e,o as De,r as Pe}from"./resourceUtils-DJvbVI6N.js";import{l as Ge,i as je}from"./Indices-QgoYjU0d.js";function Ve(r,e){Z(r.typedBuffer,e.typedBuffer,r.typedBufferStride,e.typedBufferStride)}function Z(r,e,o=2,t=o){const n=e.length/2;let s=0,a=0;if(se(e)||ae(e)){for(let u=0;u<n;++u)r[s]=e[a],r[s+1]=e[a+1],s+=o,a+=t;return}const i=ie(e);if(ue(e))for(let u=0;u<n;++u)r[s]=Math.max(e[a]/i,-1),r[s+1]=Math.max(e[a+1]/i,-1),s+=o,a+=t;else for(let u=0;u<n;++u)r[s]=e[a]/i,r[s+1]=e[a+1]/i,s+=o,a+=t}function He(r,e,o,t){const n=r.typedBuffer,s=r.typedBufferStride,a=(t==null?void 0:t.count)??r.count;let i=((t==null?void 0:t.dstIndex)??0)*s;for(let u=0;u<a;++u)n[i]=e,n[i+1]=o,i+=s}Object.freeze(Object.defineProperty({__proto__:null,fill:He,normalizeIntegerBuffer:Z,normalizeIntegerBufferView:Ve},Symbol.toStringTag,{value:"Module"}));function ke(r,e){ee(r.typedBuffer,e.typedBuffer,r.typedBufferStride,e.typedBufferStride)}function ee(r,e,o=3,t=o){const n=e.length/t;let s=0,a=0;for(let i=0;i<n;++i)r[s]=e[a],r[s+1]=e[a+1],r[s+2]=e[a+2],s+=o,a+=t}function ze(r,e,o,t,n){const s=r.typedBuffer,a=r.typedBufferStride,i=(n==null?void 0:n.count)??r.count;let u=((n==null?void 0:n.dstIndex)??0)*a;for(let c=0;c<i;++c)s[u]=e,s[u+1]=o,s[u+2]=t,u+=a}Object.freeze(Object.defineProperty({__proto__:null,copy:ee,copyView:ke,fill:ze},Symbol.toStringTag,{value:"Module"}));function qe(r,e){te(r.typedBuffer,e,r.typedBufferStride)}function te(r,e,o=4){const t=e.typedBuffer,n=e.typedBufferStride,s=e.count;let a=0,i=0;for(let u=0;u<s;++u)r[a]=t[i],r[a+1]=t[i+1],r[a+2]=t[i+2],r[a+3]=t[i+3],a+=o,i+=n}function Ke(r,e,o,t,n,s){const a=r.typedBuffer,i=r.typedBufferStride,u=(s==null?void 0:s.count)??r.count;let c=((s==null?void 0:s.dstIndex)??0)*i;for(let m=0;m<u;++m)a[c]=e,a[c+1]=o,a[c+2]=t,a[c+3]=n,c+=i}Object.freeze(Object.defineProperty({__proto__:null,copy:te,copyView:qe,fill:Ke},Symbol.toStringTag,{value:"Module"}));let Nt=class{constructor(e){this._streamDataRequester=e}async loadJSON(e,o){return this._load("json",e,o)}async loadBinary(e,o){return Y(e)?(le(o),J(e)):this._load("binary",e,o)}async loadImage(e,o){return this._load("image",e,o)}async _load(e,o,t){if(this._streamDataRequester==null)return(await fe(o,{responseType:Ye[e]})).data;const n=await ce(this._streamDataRequester.request(o,e,t));if(n.ok===!0)return n.value;throw de(n.error),new l("",`Request for resource failed: ${n.error}`)}};const Ye={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function Je(r={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...r}}function Xe(r,e={}){return{data:r,parameters:{wrap:{s:M.REPEAT,t:M.REPEAT,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}function C(r,e){const o=r.count;e||(e=new r.TypedArrayConstructor(o));for(let t=0;t<o;t++)e[t]=r.get(t);return e}Object.freeze(Object.defineProperty({__proto__:null,makeDense:C},Symbol.toStringTag,{value:"Module"}));let k=class{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const o=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,o,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var S,z;(function(r){r.SCALAR="SCALAR",r.VEC2="VEC2",r.VEC3="VEC3",r.VEC4="VEC4",r.MAT2="MAT2",r.MAT3="MAT3",r.MAT4="MAT4"})(S||(S={})),function(r){r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(z||(z={}));const re={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Qe={pbrMetallicRoughness:re,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},We={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},q=(r={})=>{const e={...re,...r.pbrMetallicRoughness},o=Ze({...We,...r.extras});return{...Qe,...r,pbrMetallicRoughness:e,extras:o}};function Ze(r){switch(r.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:r.ESRI_externalColorMixMode="tint"}return r}const et={magFilter:L.LINEAR,minFilter:L.LINEAR_MIPMAP_LINEAR,wrapS:M.REPEAT,wrapT:M.REPEAT},tt=r=>({...et,...r});function rt(r){let e,o;return r.replace(/^(.*\/)?([^/]*)$/,(t,n,s)=>(e=n||"",o=s||"","")),{dirPart:e,filePart:o}}const A={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class w{constructor(e,o,t,n){if(this._context=e,this.uri=o,this.json=t,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=rt(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.scenes==null)throw new l("gltf-loader-unsupported-feature","Scenes must be defined.");if(t.meshes==null)throw new l("gltf-loader-unsupported-feature","Meshes must be defined");if(t.nodes==null)throw new l("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,o,t){if(Y(o)){const a=me(o);if(a&&a.mediaType!=="model/gltf-binary")try{const u=JSON.parse(a.isBase64?atob(a.data):a.data);return new w(e,o,u)}catch{}const i=J(o);if(w._isGLBData(i))return this._fromGLBData(e,o,i)}if(ut.test(o)||(t==null?void 0:t.expectedType)==="gltf"){const a=await e.loadJSON(o,t);return new w(e,o,a)}const n=await e.loadBinary(o,t);if(w._isGLBData(n))return this._fromGLBData(e,o,n);if(lt.test(o)||(t==null?void 0:t.expectedType)==="glb")throw new l("gltf-loader-invalid-glb","This is not a valid glb file.");const s=await e.loadJSON(o,t);return new w(e,o,s)}static _isGLBData(e){if(e==null)return!1;const o=new k(e);return o.remainingBytes()>=4&&o.readUint32()===A.MAGIC}static async _fromGLBData(e,o,t){const n=await w._parseGLBData(t);return new w(e,o,n.json,n.binaryData)}static async _parseGLBData(e){const o=new k(e);if(o.remainingBytes()<12)throw new l("gltf-loader-error","glb binary data is insufficiently large.");const t=o.readUint32(),n=o.readUint32(),s=o.readUint32();if(t!==A.MAGIC)throw new l("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<s)throw new l("gltf-loader-error","glb binary data is smaller than header specifies.");if(n!==2)throw new l("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let a,i,u=0;for(;o.remainingBytes()>=8;){const c=o.readUint32(),m=o.readUint32();if(u===0){if(m!==A.CHUNK_TYPE_JSON)throw new l("gltf-loader-error","First glb chunk must be JSON.");if(c<0)throw new l("gltf-loader-error","No JSON data found.");a=await Ue(o.readUint8Array(c))}else if(u===1){if(m!==A.CHUNK_TYPE_BIN)throw new l("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");i=o.readUint8Array(c)}else I.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");u+=1}if(!a)throw new l("gltf-loader-error","No glb JSON chunk detected.");return{json:a,binaryData:i}}async getBuffer(e,o){const t=this.json.buffers[e];if(t.uri==null){if(this._glbBuffer==null)throw new l("gltf-loader-error","glb buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(e,o);if(n.byteLength!==t.byteLength)throw new l("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,o){const t=this._bufferLoaders.get(e);if(t)return t;const n=this.json.buffers[e].uri,s=this._context.loadBinary(this._resolveUri(n),o).then(a=>new Uint8Array(a));return this._bufferLoaders.set(e,s),s}async getAccessor(e,o){if(!this.json.accessors)throw new l("gltf-loader-unsupported-feature","Accessors missing.");const t=this.json.accessors[e];if((t==null?void 0:t.bufferView)==null)throw new l("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(t.type in[S.MAT2,S.MAT3,S.MAT4])throw new l("gltf-loader-unsupported-feature",`AttributeType ${t.type} is not supported`);const n=this.json.bufferViews[t.bufferView],s=await this.getBuffer(n.buffer,o),a=st[t.type],i=at[t.componentType],u=a*i,c=n.byteStride||u;return{raw:s.buffer,byteStride:c,byteOffset:s.byteOffset+(n.byteOffset||0)+(t.byteOffset||0),entryCount:t.count,isDenselyPacked:c===u,componentCount:a,componentByteSize:i,componentType:t.componentType,min:t.min,max:t.max,normalized:!!t.normalized}}async getIndexData(e,o){if(e.indices==null)return;const t=await this.getAccessor(e.indices,o);if(t.isDenselyPacked)switch(t.componentType){case f.UNSIGNED_BYTE:return new Uint8Array(t.raw,t.byteOffset,t.entryCount);case f.UNSIGNED_SHORT:return new Uint16Array(t.raw,t.byteOffset,t.entryCount);case f.UNSIGNED_INT:return new Uint32Array(t.raw,t.byteOffset,t.entryCount)}else switch(t.componentType){case f.UNSIGNED_BYTE:return C(y(Ie,t));case f.UNSIGNED_SHORT:return C(y(Ce,t));case f.UNSIGNED_INT:return C(y(ve,t))}}async getPositionData(e,o){if(e.attributes.POSITION==null)throw new l("gltf-loader-unsupported-feature","No POSITION vertex data found.");const t=await this.getAccessor(e.attributes.POSITION,o);if(t.componentType!==f.FLOAT)throw new l("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+f[t.componentType]);if(t.componentCount!==3)throw new l("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return y(U,t)}async getNormalData(e,o){if(e.attributes.NORMAL==null)throw new l("gltf-loader-error","No NORMAL vertex data found.");const t=await this.getAccessor(e.attributes.NORMAL,o);if(t.componentType!==f.FLOAT)throw new l("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+f[t.componentType]);if(t.componentCount!==3)throw new l("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return y(U,t)}async getTangentData(e,o){if(e.attributes.TANGENT==null)throw new l("gltf-loader-error","No TANGENT vertex data found.");const t=await this.getAccessor(e.attributes.TANGENT,o);if(t.componentType!==f.FLOAT)throw new l("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+f[t.componentType]);if(t.componentCount!==4)throw new l("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+t.componentCount.toFixed());return new H(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount)}async getTextureCoordinates(e,o){if(e.attributes.TEXCOORD_0==null)throw new l("gltf-loader-error","No TEXCOORD_0 vertex data found.");const t=await this.getAccessor(e.attributes.TEXCOORD_0,o);if(t.componentCount!==2)throw new l("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+t.componentCount.toFixed());if(t.componentType===f.FLOAT)return y(W,t);if(!t.normalized)throw new l("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return it(t)}async getVertexColors(e,o){if(e.attributes.COLOR_0==null)throw new l("gltf-loader-error","No COLOR_0 vertex data found.");const t=await this.getAccessor(e.attributes.COLOR_0,o);if(t.componentCount!==4&&t.componentCount!==3)throw new l("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+t.componentCount.toFixed());if(t.componentCount===4){if(t.componentType===f.FLOAT)return y(H,t);if(t.componentType===f.UNSIGNED_BYTE)return y(Me,t);if(t.componentType===f.UNSIGNED_SHORT)return y(Le,t)}else if(t.componentCount===3){if(t.componentType===f.FLOAT)return y(U,t);if(t.componentType===f.UNSIGNED_BYTE)return y(Fe,t);if(t.componentType===f.UNSIGNED_SHORT)return y(Be,t)}throw new l("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+f[t.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,o,t){var s,a,i,u,c,m,h,b,p,_;let n=e.material?this._materialCache.get(e.material):void 0;if(!n){const d=e.material!=null?q(this.json.materials[e.material]):q(),T=d.pbrMetallicRoughness,E=this.hasVertexColors(e),x=this.getTexture(T.baseColorTexture,o),O=this.getTexture(d.normalTexture,o),F=t?this.getTexture(d.occlusionTexture,o):void 0,B=t?this.getTexture(d.emissiveTexture,o):void 0,R=t?this.getTexture(T.metallicRoughnessTexture,o):void 0,N=e.material!=null?e.material:-1;n={alphaMode:d.alphaMode,alphaCutoff:d.alphaCutoff,color:T.baseColorFactor,doubleSided:!!d.doubleSided,colorTexture:await x,normalTexture:await O,name:d.name,id:N,occlusionTexture:await F,emissiveTexture:await B,emissiveFactor:d.emissiveFactor,metallicFactor:T.metallicFactor,roughnessFactor:T.roughnessFactor,metallicRoughnessTexture:await R,hasVertexColors:E,ESRI_externalColorMixMode:d.extras.ESRI_externalColorMixMode,colorTextureTransform:(a=(s=T==null?void 0:T.baseColorTexture)==null?void 0:s.extensions)==null?void 0:a.KHR_texture_transform,normalTextureTransform:(u=(i=d.normalTexture)==null?void 0:i.extensions)==null?void 0:u.KHR_texture_transform,occlusionTextureTransform:(m=(c=d.occlusionTexture)==null?void 0:c.extensions)==null?void 0:m.KHR_texture_transform,emissiveTextureTransform:(b=(h=d.emissiveTexture)==null?void 0:h.extensions)==null?void 0:b.KHR_texture_transform,metallicRoughnessTextureTransform:(_=(p=T==null?void 0:T.metallicRoughnessTexture)==null?void 0:p.extensions)==null?void 0:_.KHR_texture_transform,receiveAmbientOcclusion:d.extras.ESRI_receiveAmbientOcclusion,receiveShadows:d.extras.ESRI_receiveShadows}}return n}async getTexture(e,o){if(!e)return;if((e.texCoord||0)!==0)throw new l("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const t=e.index,n=this.json.textures[t],s=tt(n.sampler!=null?this.json.samplers[n.sampler]:{}),a=K(n),i=this.json.images[a],u=await this._loadTextureImageData(t,n,o);return he(this._textureCache,t,()=>{const c=h=>h===33071||h===33648||h===10497,m=h=>{throw new l("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${h}`)};return{data:u,wrapS:c(s.wrapS)?s.wrapS:m(s.wrapS),wrapT:c(s.wrapT)?s.wrapT:m(s.wrapT),minFilter:s.minFilter,name:i.name,id:t}})}getNodeTransform(e){if(e===void 0)return ot;let o=this._nodeTransformCache.get(e);if(!o){const t=this.getNodeTransform(this._getNodeParent(e)),n=this.json.nodes[e];n.matrix?o=Te(Q(),t,n.matrix):n.translation||n.rotation||n.scale?(o=$(t),n.translation&&ye(o,o,n.translation),n.rotation&&(v[3]=_e(v,n.rotation),we(o,o,v[3],v)),n.scale&&ge(o,o,n.scale)):o=$(t),this._nodeTransformCache.set(e,o)}return o}_resolveUri(e){return be(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=X.parse(this.json.asset.version,"glTF");nt.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every(o=>this._supportedExtensions.includes(o)))throw new l("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,o)=>{e.children&&e.children.forEach(t=>{this._nodeParentMap.set(t,o)})})}async _loadTextureImageData(e,o,t){const n=this._textureLoaders.get(e);if(n)return n;const s=this._createTextureLoader(o,t);return this._textureLoaders.set(e,s),s}async _createTextureLoader(e,o){const t=K(e),n=this.json.images[t];if(n.uri){if(n.uri.endsWith(".ktx2")){const u=await this._context.loadBinary(this._resolveUri(n.uri),o);return new $e(new Uint8Array(u))}return this._context.loadImage(this._resolveUri(n.uri),o)}if(n.bufferView==null)throw new l("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(n.mimeType==null)throw new l("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[n.bufferView],a=await this.getBuffer(s.buffer,o);if(s.byteStride!=null)throw new l("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const i=a.byteOffset+(s.byteOffset||0);return De(new Uint8Array(a.buffer,i,s.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await V(Array.from(this._bufferLoaders.values())),o=await V(Array.from(this._textureLoaders.values()));return e.reduce((t,n)=>t+((n==null?void 0:n.byteLength)??0),0)+o.reduce((t,n)=>t+(n?Pe(n)?n.data.byteLength:n.width*n.height*4:0),0)}}const ot=pe(Q(),Math.PI/2),nt=new X(2,0,"glTF"),v=Se(),st={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},at={[f.BYTE]:1,[f.UNSIGNED_BYTE]:1,[f.SHORT]:2,[f.UNSIGNED_SHORT]:2,[f.HALF_FLOAT]:2,[f.FLOAT]:4,[f.INT]:4,[f.UNSIGNED_INT]:4};function it(r){switch(r.componentType){case f.BYTE:return new Ae(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount);case f.UNSIGNED_BYTE:return new Ne(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount);case f.SHORT:return new Re(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount);case f.UNSIGNED_SHORT:return new Oe(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount);case f.UNSIGNED_INT:return new Ee(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount);case f.FLOAT:return new W(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}}function y(r,e){return new r(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}function K(r){var e;if(((e=r.extensions)==null?void 0:e.KHR_texture_basisu)!=null)return r.extensions.KHR_texture_basisu.source;if(r.source!==null)return r.source;throw new l("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}const ut=/\.gltf$/i,lt=/\.glb$/i;let ft=0;async function Ct(r,e,o={},t=!0){var h,b;const n=await w.load(r,e,o),s="gltf_"+ft++,a={lods:[],materials:new Map,textures:new Map,meta:ct(n)},i=!(!n.json.asset.extras||n.json.asset.extras.ESRI_type!=="symbolResource"),u=(b=(h=n.json.asset.extras)==null?void 0:h.ESRI_webstyleSymbol)==null?void 0:b.webstyle,c=new Map;await dt(n,async(p,_,d,T)=>{var j;const E=c.get(d)??0;c.set(d,E+1);const x=p.mode!==void 0?p.mode:g.TRIANGLES,O=x===g.TRIANGLES||x===g.TRIANGLE_STRIP||x===g.TRIANGLE_FAN?x:null;if(O==null)return void I.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+g[x]+"). Skipping primitive.");if(!n.hasPositions(p))return void I.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const F=n.getPositionData(p,o),B=n.getMaterial(p,o,t),R=n.hasNormals(p)?n.getNormalData(p,o):null,N=n.hasTangents(p)?n.getTangentData(p,o):null,D=n.hasTextureCoordinates(p)?n.getTextureCoordinates(p,o):null,P=n.hasVertexColors(p)?n.getVertexColors(p,o):null,oe=n.getIndexData(p,o),ne={name:T,transform:$(_),attributes:{position:await F,normal:R?await R:null,texCoord0:D?await D:null,color:P?await P:null,tangent:N?await N:null},indices:await oe,primitiveType:O,material:mt(a,await B,s)};let G=null;((j=a.meta)==null?void 0:j.ESRI_lod)!=null&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(G=a.meta.ESRI_lod.thresholds[d]),a.lods[d]=a.lods[d]||{parts:[],name:T,lodThreshold:G},a.lods[d].parts[E]=ne});for(const p of a.lods)p.parts=p.parts.filter(_=>!!_);const m=await n.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:i,uri:n.uri,ESRI_webstyle:u},customMeta:{},size:m}}function ct(r){const e=r.json;let o=null;return e.nodes.forEach(t=>{const n=t.extras;n!=null&&(n.ESRI_proxyEllipsoid||n.ESRI_lod)&&(o=n)}),o}async function dt(r,e){const o=r.json,t=o.scenes[o.scene||0].nodes,n=t.length>1,s=[];for(const i of t){const u=o.nodes[i];s.push(a(i,0)),pt(u)&&!n&&u.extensions.MSFT_lod.ids.forEach((c,m)=>a(c,m+1))}async function a(i,u){const c=o.nodes[i],m=r.getNodeTransform(i);if(c.weights!=null&&I.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),c.mesh!=null){const h=o.meshes[c.mesh];for(const b of h.primitives)s.push(e(b,m,u,h.name))}for(const h of c.children||[])s.push(a(h,u))}await Promise.all(s)}function pt(r){var e;return((e=r.extensions)==null?void 0:e.MSFT_lod)&&Array.isArray(r.extensions.MSFT_lod.ids)}function mt(r,e,o){const t=s=>{const a=`${o}_tex_${s&&s.id}${s!=null&&s.name?"_"+s.name:""}`;if(s&&!r.textures.has(a)){const i=Xe(s.data,{wrap:{s:s.wrapS,t:s.wrapT},mipmap:ht.has(s.minFilter),noUnpackFlip:!0});r.textures.set(a,i)}return a},n=`${o}_mat_${e.id}_${e.name}`;if(!r.materials.has(n)){const s=Je({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?t(e.colorTexture):void 0,textureNormal:e.normalTexture?t(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?t(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?t(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?t(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,receiveShadows:e.receiveShadows,receiveAmbientOcclustion:e.receiveAmbientOcclusion});r.materials.set(n,s)}return n}const ht=new Set([L.LINEAR_MIPMAP_LINEAR,L.LINEAR_MIPMAP_NEAREST]);function It(r,e){switch(e){case g.TRIANGLES:return Tt(r);case g.TRIANGLE_STRIP:return yt(r);case g.TRIANGLE_FAN:return wt(r)}}function Tt(r){return typeof r=="number"?Ge(r):xe(r)?new Uint16Array(r):r}function yt(r){const e=typeof r=="number"?r:r.length;if(e<3)return[];const o=e-2,t=je(3*o);if(typeof r=="number"){let n=0;for(let s=0;s<o;s+=1)s%2==0?(t[n++]=s,t[n++]=s+1,t[n++]=s+2):(t[n++]=s+1,t[n++]=s,t[n++]=s+2)}else{let n=0;for(let s=0;s<o;s+=1)s%2==0?(t[n++]=r[s],t[n++]=r[s+1],t[n++]=r[s+2]):(t[n++]=r[s+1],t[n++]=r[s],t[n++]=r[s+2])}return t}function wt(r){const e=typeof r=="number"?r:r.length;if(e<3)return new Uint16Array(0);const o=e-2,t=o<=65536?new Uint16Array(3*o):new Uint32Array(3*o);if(typeof r=="number"){let i=0;for(let u=0;u<o;++u)t[i++]=0,t[i++]=u+1,t[i++]=u+2;return t}const n=r[0];let s=r[1],a=0;for(let i=0;i<o;++i){const u=r[i+2];t[a++]=n,t[a++]=s,t[a++]=u,s=u}return t}const Mt=2.1;export{Ke as a,Ve as b,He as c,ke as d,qe as e,ze as f,Mt as g,Z as h,ee as i,Ct as l,Nt as n,It as o,te as t};
