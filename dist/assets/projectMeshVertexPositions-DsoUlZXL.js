import{T as p,dZ as e}from"./index-DhmWq2Im.js";import{b as s}from"./MeshLocalVertexSpace-BPfzD1Hw.js";import{B as m}from"./vertexSpaceConversion-0c41GSyJ.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-CFjlElgp.js";import"./computeTranslationToOriginAndRotation-BHEYoXRp.js";import"./projectPointToVector-BCoQcLL-.js";import"./meshVertexSpaceUtils-Dob6purZ.js";import"./vec3-Bzzhqdk8.js";import"./BufferView-BtmYarK6.js";import"./vec4-Dh7g1MVU.js";function g(t,i){const o=m(t,s.absolute);if(!o)return null;let r=o.position;return p(t.spatialReference,i)||(r=new Float64Array(o.position.length),e(o.position,t.spatialReference,0,r,i,0))?r:null}export{g as projectMeshVertexPositions};