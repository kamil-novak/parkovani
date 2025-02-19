import{ak as p,s as m,aq as s}from"./index-UMzlneO_.js";import{p as n}from"./MeshVertexAttributes-BKKLm6j4.js";import{B as a}from"./vertexSpaceConversion-CjrnGW_O.js";import"./meshProperties-C4iW0Ukm.js";import"./spatialReferenceEllipsoidUtils-BEKtrSjo.js";import"./computeTranslationToOriginAndRotation-BJVgx53G.js";import"./meshVertexSpaceUtils-ukTsmT9Q.js";import"./MeshLocalVertexSpace-CSk5gD6i.js";import"./vec3-BEM1KEQc.js";import"./BufferView-CQwkEFOa.js";import"./vec4-DNyt3E6k.js";async function V(t,o,r){await Promise.resolve(),p(r);const e=a(t,o,{useEllipsoid:r==null?void 0:r.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new n({...e,uv:s(t.vertexAttributes.uv),color:s(t.vertexAttributes.color)}),o);return i.transform=null,i}export{V as convertMeshVertexSpace};
