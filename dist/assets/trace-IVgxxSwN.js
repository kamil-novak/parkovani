import{b8 as i,cq as g,cr as y,aq as u,cs as l}from"./index-BkgwewGo.js";async function m(r,e,n){const t=i(r),a=e.toJSON();a.traceLocations=JSON.stringify(e.traceLocations),e.resultTypes&&(a.resultTypes=JSON.stringify(e.resultTypes));const o=g(t.query,{query:y({...a,f:"json"}),...n}),s=`${t.path}/trace`;return u(s,o).then(c=>p(c,e.outSpatialReference))}async function d(r,e,n){const t=i(r),a=e.toJSON();a.traceLocations=JSON.stringify(e.traceLocations),e.resultTypes&&(a.resultTypes=JSON.stringify(e.resultTypes));const o=g(t.query,{query:y({...a,async:!0,f:"json"}),...n}),s=`${t.path}/trace`,{data:c}=await u(s,o);return c.statusUrl}function p(r,e){const{data:n}=r,t=l.fromJSON(n.traceResults);return t.aggregatedGeometry&&e&&(t.aggregatedGeometry.line&&(t.aggregatedGeometry.line.spatialReference=e.clone()),t.aggregatedGeometry.multipoint&&(t.aggregatedGeometry.multipoint.spatialReference=e.clone()),t.aggregatedGeometry.polygon&&(t.aggregatedGeometry.polygon.spatialReference=e.clone())),t}export{d as submitTraceJob,m as trace};
