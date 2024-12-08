import{ak as p,s as m,aq as s}from"./index-C--HEXUi.js";import{p as a}from"./MeshVertexAttributes-DSHkzpf5.js";import{B as n}from"./vertexSpaceConversion-BJjCvXih.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-a8l4exlS.js";import"./computeTranslationToOriginAndRotation-BAUrYEfh.js";import"./projectPointToVector-DH5De2TV.js";import"./meshVertexSpaceUtils-M55youmy.js";import"./MeshLocalVertexSpace-CGCp1vAr.js";import"./vec3-CjQwKBsm.js";import"./BufferView-xEjEuLFf.js";import"./vec4-BZ4zyszk.js";async function E(t,o,r){await Promise.resolve(),p(r);const e=n(t,o,{useEllipsoid:r==null?void 0:r.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new a({...e,uv:s(t.vertexAttributes.uv),color:s(t.vertexAttributes.color)}),o);return i.transform=null,i}export{E as convertMeshVertexSpace};