import{ak as p,s as m,aq as s}from"./index-SYDbGvbb.js";import{p as a}from"./MeshVertexAttributes-DZUe8Cbi.js";import{B as n}from"./vertexSpaceConversion-m1aS0ZSb.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-CQiJYvRU.js";import"./computeTranslationToOriginAndRotation-laQf3ACU.js";import"./projectPointToVector-DEdLrI0m.js";import"./meshVertexSpaceUtils-V2kJ7urw.js";import"./MeshLocalVertexSpace-DhjTMabU.js";import"./vec3-Cjcj0aws.js";import"./BufferView-7fZ_XDob.js";import"./vec4-Cn67Y_4U.js";async function E(t,o,r){await Promise.resolve(),p(r);const e=n(t,o,{useEllipsoid:r==null?void 0:r.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new a({...e,uv:s(t.vertexAttributes.uv),color:s(t.vertexAttributes.color)}),o);return i.transform=null,i}export{E as convertMeshVertexSpace};
