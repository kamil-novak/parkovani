import{ag as p,s as m,al as s}from"./index-D-EuQFPo.js";import{p as a}from"./MeshVertexAttributes-By6pSuVx.js";import{B as n}from"./vertexSpaceConversion-DVl13BiX.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-YD5Kuzo7.js";import"./computeTranslationToOriginAndRotation-ChVY3f4H.js";import"./projectPointToVector-DWPvGoZ2.js";import"./meshVertexSpaceUtils-Bw9tgTQd.js";import"./MeshLocalVertexSpace-DNWwV1wd.js";import"./vec3-CoeB3nRH.js";import"./BufferView-Cq09iLbp.js";import"./vec4-BPxMy2yd.js";async function E(t,o,r){await Promise.resolve(),p(r);const e=n(t,o,{useEllipsoid:r==null?void 0:r.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new a({...e,uv:s(t.vertexAttributes.uv),color:s(t.vertexAttributes.color)}),o);return i.transform=null,i}export{E as convertMeshVertexSpace};