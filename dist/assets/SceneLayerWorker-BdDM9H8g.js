const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./i3s-RfwEB8nJ.js","./_commonjsHelpers-DCkdB7M8.js","./index-ZNyjz3YK.js","./index-BAq5M1RB.css","./projectMeshVertexPositions-CBHQ18Bv.js","./MeshLocalVertexSpace-DPGN4cSG.js","./vertexSpaceConversion-0DYmGp4w.js","./mat3f64-q3fE-ZOt.js","./mat4f64-CSKppSlJ.js","./spatialReferenceEllipsoidUtils-B_FVZrSH.js","./computeTranslationToOriginAndRotation-BW78r3m1.js","./projectPointToVector--ab4wrkY.js","./meshVertexSpaceUtils-CCBmMDYc.js","./vec3-B5JTUzpT.js","./BufferView-Cv2xrARM.js","./vec4-AYMjioNF.js"])))=>i.map(i=>d[i]);
import{a4 as N,gP as K,a6 as C,hk as Q}from"./index-ZNyjz3YK.js";import{b as W,a as X}from"./MeshLocalVertexSpace-DPGN4cSG.js";import{f as Z,l as ee}from"./vec3-B5JTUzpT.js";import"./sphere-CRXb3DFh.js";import"./I3SUtil-CEzTYL_0.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-ki7urMuq.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./projectVectorToVector-DvTB2cLL.js";import"./projectPointToVector--ab4wrkY.js";import"./I3SBinaryReader-EwkYSd1C.js";import"./VertexAttribute-BdZWZuT1.js";import"./floatRGBA-BIkO0Fpb.js";import"./NormalAttribute.glsl-CS2Gkk9y.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./orientedBoundingBox-Bb_ac3PV.js";import"./quat-BtuWl2mw.js";import"./spatialReferenceEllipsoidUtils-B_FVZrSH.js";import"./computeTranslationToOriginAndRotation-BW78r3m1.js";var R,j;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(R||(R={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(j||(j={}));function te(){return M||(M=new Promise(e=>N(()=>import("./i3s-RfwEB8nJ.js"),__vite__mapDeps([0,1]),import.meta.url).then(t=>t.i).then(({default:t})=>{const o=t({locateFile:oe,onRuntimeInitialized:()=>e(o)});delete o.then})).catch(e=>{throw e})),M}function oe(e){return K(`esri/libs/i3s/${e}`)}let M;var $,g,B,k,V;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})($||($={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(g||(g={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(B||(B={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(k||(k={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(V||(V={}));async function Ne(e){n=await w();const t=[e.geometryBuffer];return{result:H(n,e,t),transferList:t}}async function Re(e){var b;n=await w();const t=[e.geometryBuffer],{geometryBuffer:o}=e,a=o.byteLength,i=n._malloc(a),l=new Uint8Array(n.HEAPU8.buffer,i,a);l.set(new Uint8Array(o));const s=n.dracoDecompressPointCloudData(i,l.byteLength);if(n._free(i),s.error.length>0)throw new Error(`i3s.wasm: ${s.error}`);const f=((b=s.featureIds)==null?void 0:b.length)>0?s.featureIds.slice():null,d=s.positions.slice();return f&&t.push(f.buffer),t.push(d.buffer),{result:{positions:d,featureIds:f},transferList:t}}async function Se(e){await w(),ne(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function Ue(e){await w(),re(e)}async function xe(e){n=await w(),n.setLegacySchema(e.context,e.jsonSchema)}async function Me(e){const{localMatrix:t,origin:o,positions:a,vertexSpace:i}=e,l=C.fromJSON(e.inSpatialReference),s=C.fromJSON(e.outSpatialReference);let f;const[{projectBuffer:d},{initializeProjection:b}]=await Promise.all([N(()=>import("./index-ZNyjz3YK.js").then(c=>c.t3),__vite__mapDeps([2,3]),import.meta.url),N(()=>import("./index-ZNyjz3YK.js").then(c=>c.t4),__vite__mapDeps([2,3]),import.meta.url)]);await b(l,s);const E=[0,0,0];if(!d(o,l,0,E,s,0))throw new Error("Failed to project");if(i.type==="georeferenced"&&i.origin==null){if(f=new Float64Array(a.length),!d(a,l,0,f,s,0,f.length/3))throw new Error("Failed to project")}else{const c=i.type==="georeferenced"?W.fromJSON(i):X.fromJSON(i),{projectMeshVertexPositions:u}=await N(async()=>{const{projectMeshVertexPositions:p}=await import("./projectMeshVertexPositions-CBHQ18Bv.js");return{projectMeshVertexPositions:p}},__vite__mapDeps([4,2,3,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url),m=u({vertexAttributes:{position:a},transform:t?{localMatrix:t}:void 0,vertexSpace:c,spatialReference:l},s);if(!m)throw new Error("Failed to project");f=m}const S=f.length,[_,I,A]=E;for(let c=0;c<S;c+=3)f[c]-=_,f[c+1]-=I,f[c+2]-=A;return{result:{projected:f,original:a,projectedOrigin:E},transferList:[f.buffer,a.buffer]}}async function ve({normalMatrix:e,normals:t}){const o=new Float32Array(t.length);return Z(o,t,e),Q(e)&&ee(o,o),{result:{transformed:o,original:t},transferList:[o.buffer,t.buffer]}}function Fe(e){Y(e)}let L,n;function re(e){if(!n)return;const t=e.modifications,o=n._malloc(8*t.length),a=new Float64Array(n.HEAPU8.buffer,o,t.length);for(let i=0;i<t.length;++i)a[i]=t[i];n.setModifications(e.context,o,t.length,e.isGeodetic),n._free(o)}function H(e,t,o){const{context:a,globalTrafo:i,mbs:l,obbData:s,elevationOffset:f,geometryBuffer:d,geometryDescriptor:b,indexToVertexProjector:E,vertexToRenderProjector:S}=t,_=e._malloc(d.byteLength),I=33,A=e._malloc(I*Float64Array.BYTES_PER_ELEMENT),c=new Uint8Array(e.HEAPU8.buffer,_,d.byteLength);c.set(new Uint8Array(d));const u=new Float64Array(e.HEAPU8.buffer,A,I);P(u,[NaN,NaN,NaN]);let m=u.byteOffset+3*u.BYTES_PER_ELEMENT,p=new Float64Array(u.buffer,m);P(p,i),m+=16*u.BYTES_PER_ELEMENT,p=new Float64Array(u.buffer,m),P(p,l),m+=4*u.BYTES_PER_ELEMENT,s&&(p=new Float64Array(u.buffer,m),P(p,s));const v=b,J={isDraco:!1,isLegacy:!1,color:t.layouts.some(h=>h.some(y=>y.name==="color")),normal:t.needNormals&&t.layouts.some(h=>h.some(y=>y.name==="normalCompressed")),uv0:t.layouts.some(h=>h.some(y=>y.name==="uv0")),uvRegion:t.layouts.some(h=>h.some(y=>y.name==="uvRegion")),featureIndex:v.featureIndex},r=e.process(a,!!t.obbData,_,c.byteLength,v,J,A,f,E,S,t.normalReferenceFrame);if(e._free(A),e._free(_),r.error.length>0)throw new Error(`i3s.wasm: ${r.error}`);if(r.discarded)return null;const U=r.componentOffsets.length>0?r.componentOffsets.slice():null,x=r.featureIds.length>0?r.featureIds.slice():null,z=r.anchorIds.length>0?Array.from(r.anchorIds):null,G=r.anchors.length>0?Array.from(r.anchors):null,F=r.interleavedVertedData.slice().buffer,O=r.indicesType===R.Int16?new Uint16Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/2).slice():new Uint32Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/4).slice(),T=r.positions.slice(),D=r.positionIndicesType===R.Int16?new Uint16Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/2).slice():new Uint32Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/4).slice(),q={layout:t.layouts[0],interleavedVertexData:F,indices:O,hasColors:r.hasColors,hasModifications:r.hasModifications,positionData:{data:T,indices:D}};return x&&o.push(x.buffer),U&&o.push(U.buffer),o.push(F),o.push(O.buffer),o.push(T.buffer),o.push(D.buffer),{componentOffsets:U,featureIds:x,anchorIds:z,anchors:G,transformedGeometry:q,obb:r.obb,globalTrafo:i}}function Oe(e){return e===0?g.Unmodified:e===1?g.PotentiallyModified:e===2?g.Culled:g.Unknown}function ne(e){if(!n)return;const{context:t,buffer:o}=e,a=n._malloc(o.byteLength),i=o.byteLength/Float64Array.BYTES_PER_ELEMENT,l=new Float64Array(n.HEAPU8.buffer,a,i),s=new Float64Array(o);l.set(s),n.filterOBBs(t,a,i),s.set(l),n._free(a)}function Y(e){n&&n.destroy(e)===0&&(n=null)}function P(e,t){for(let o=0;o<t.length;++o)e[o]=t[o]}async function Te(){n||await w()}function w(){return n?Promise.resolve(n):(L||(L=te().then(e=>(n=e,L=null,n))),L)}const De={transform:(e,t)=>n&&H(n,e,t),destroy:Y};export{Fe as destroyContext,Re as dracoDecompressPointCloudData,Se as filterObbsForModifications,ne as filterObbsForModificationsSync,Te as initialize,Oe as interpretObbModificationResults,Ne as process,Me as project,xe as setLegacySchema,Ue as setModifications,re as setModificationsSync,De as test,ve as transformNormals};
