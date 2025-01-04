import{ak as p,s as m,aq as s}from"./index-DhmWq2Im.js";import{p as a}from"./MeshVertexAttributes-x-3PBH7P.js";import{B as n}from"./vertexSpaceConversion-0c41GSyJ.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-CFjlElgp.js";import"./computeTranslationToOriginAndRotation-BHEYoXRp.js";import"./projectPointToVector-BCoQcLL-.js";import"./meshVertexSpaceUtils-Dob6purZ.js";import"./MeshLocalVertexSpace-BPfzD1Hw.js";import"./vec3-Bzzhqdk8.js";import"./BufferView-BtmYarK6.js";import"./vec4-Dh7g1MVU.js";async function E(t,o,r){await Promise.resolve(),p(r);const e=n(t,o,{useEllipsoid:r==null?void 0:r.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new a({...e,uv:s(t.vertexAttributes.uv),color:s(t.vertexAttributes.color)}),o);return i.transform=null,i}export{E as convertMeshVertexSpace};
