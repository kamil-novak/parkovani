import{z as p,dT as e}from"./index-Drt46XzA.js";import{b as s}from"./MeshLocalVertexSpace-W3BxGE7x.js";import{B as m}from"./vertexSpaceConversion-Du7DT4im.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-2OinnsTc.js";import"./computeTranslationToOriginAndRotation-CCzMFvQn.js";import"./projectPointToVector-Bp4JnL7n.js";import"./meshVertexSpaceUtils-DsF25cLL.js";import"./vec3-6XHCeI3u.js";import"./BufferView-DzAwwvSs.js";import"./vec4-DOohNC4e.js";function g(t,i){const o=m(t,s.absolute);if(!o)return null;let r=o.position;return p(t.spatialReference,i)||(r=new Float64Array(o.position.length),e(o.position,t.spatialReference,0,r,i,0))?r:null}export{g as projectMeshVertexPositions};