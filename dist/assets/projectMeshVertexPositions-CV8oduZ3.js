import{z as e,e0 as p}from"./index-i1xHX9d5.js";import{b as s}from"./MeshLocalVertexSpace-SY8G2dy-.js";import{B as m}from"./vertexSpaceConversion-Bhf0t2J6.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-C156E205.js";import"./computeTranslationToOriginAndRotation-ZlHqNFok.js";import"./projectPointToVector-DVN8fluz.js";import"./meshVertexSpaceUtils-Bu3_WRRG.js";import"./vec3-DfWx2aEX.js";import"./BufferView-B9O7bAGv.js";import"./vec4-CLgptRAW.js";function j(t,i){const o=m(t,s.absolute);if(!o)return null;let r=o.position;return e(t.spatialReference,i)||(r=new Float64Array(o.position.length),p(o.position,t.spatialReference,0,r,i,0))?r:null}export{j as projectMeshVertexPositions};