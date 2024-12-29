import{ak as p,s as m,aq as s}from"./index-DKZ740yB.js";import{p as a}from"./MeshVertexAttributes-BGlYsURf.js";import{B as n}from"./vertexSpaceConversion-D8Nt2X_3.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-BTA8bemw.js";import"./computeTranslationToOriginAndRotation-D_RPrW2M.js";import"./projectPointToVector-D_bQioUJ.js";import"./meshVertexSpaceUtils-Bvi-0Orp.js";import"./MeshLocalVertexSpace-Cll37UWW.js";import"./vec3-BAcPVGp9.js";import"./BufferView-BylNm9rs.js";import"./vec4-CG9Gdm2e.js";async function E(t,o,r){await Promise.resolve(),p(r);const e=n(t,o,{useEllipsoid:r==null?void 0:r.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new a({...e,uv:s(t.vertexAttributes.uv),color:s(t.vertexAttributes.color)}),o);return i.transform=null,i}export{E as convertMeshVertexSpace};