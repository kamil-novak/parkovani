import{a1 as n,$ as e}from"./index-D-EuQFPo.js";import{d as p}from"./queryTopFeatures-DTFSuefU.js";import s from"./TopFeaturesQuery-38PXMWV-.js";import"./query-CycvhsGh.js";import"./pbfQueryUtils-CbYyfbjh.js";import"./pbf-oXFO9hZI.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";async function S(a,i,m){const r=n(a),o=await p(r,s.from(i),{...m}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:e.fromJSON(t)}}export{S as executeForTopExtents};