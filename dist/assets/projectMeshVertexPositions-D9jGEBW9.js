import{z as p,dT as e}from"./index-D-EuQFPo.js";import{b as s}from"./MeshLocalVertexSpace-DNWwV1wd.js";import{B as m}from"./vertexSpaceConversion-DVl13BiX.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-YD5Kuzo7.js";import"./computeTranslationToOriginAndRotation-ChVY3f4H.js";import"./projectPointToVector-DWPvGoZ2.js";import"./meshVertexSpaceUtils-Bw9tgTQd.js";import"./vec3-CoeB3nRH.js";import"./BufferView-Cq09iLbp.js";import"./vec4-BPxMy2yd.js";function g(t,i){const o=m(t,s.absolute);if(!o)return null;let r=o.position;return p(t.spatialReference,i)||(r=new Float64Array(o.position.length),e(o.position,t.spatialReference,0,r,i,0))?r:null}export{g as projectMeshVertexPositions};