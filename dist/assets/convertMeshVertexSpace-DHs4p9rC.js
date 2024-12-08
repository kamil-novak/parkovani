import{ak as p,s as m,aq as s}from"./index-DxNBHqwQ.js";import{p as a}from"./MeshVertexAttributes-CQNwHAT0.js";import{B as n}from"./vertexSpaceConversion-DK3kq3jq.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-Dvll-7a9.js";import"./computeTranslationToOriginAndRotation-p1Q0hNDn.js";import"./projectPointToVector-AjOa6fgM.js";import"./meshVertexSpaceUtils-qWRGEM7b.js";import"./MeshLocalVertexSpace-D07paSDu.js";import"./vec3-BXvtIVfc.js";import"./BufferView-DrORk5sN.js";import"./vec4-krDc1TZI.js";async function E(t,o,r){await Promise.resolve(),p(r);const e=n(t,o,{useEllipsoid:r==null?void 0:r.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new a({...e,uv:s(t.vertexAttributes.uv),color:s(t.vertexAttributes.color)}),o);return i.transform=null,i}export{E as convertMeshVertexSpace};
