import{ak as p,s as m,aq as s}from"./index-BPk7jPND.js";import{p as a}from"./MeshVertexAttributes-rloIdRFk.js";import{B as n}from"./vertexSpaceConversion-DJ0MEIGT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-D_NyH5s3.js";import"./computeTranslationToOriginAndRotation-DNuL2DQB.js";import"./projectPointToVector-Cn51TCkq.js";import"./meshVertexSpaceUtils-tIkl2-U2.js";import"./MeshLocalVertexSpace-1VpsEVY5.js";import"./vec3-DXou8a47.js";import"./BufferView-9-vHMTjr.js";import"./vec4-BipfRZU7.js";async function E(t,o,r){await Promise.resolve(),p(r);const e=n(t,o,{useEllipsoid:r==null?void 0:r.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new a({...e,uv:s(t.vertexAttributes.uv),color:s(t.vertexAttributes.color)}),o);return i.transform=null,i}export{E as convertMeshVertexSpace};
