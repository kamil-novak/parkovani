import{a1 as n,a3 as l,a2 as u,a4 as c,dt as k,s as v}from"./index-i1xHX9d5.js";async function g(t,e,d){const a=n(t),i=e.toJSON();e.validationSet&&(i.validationSet=JSON.stringify(e.validationSet));const r={...i,returnEdits:!0,f:"json"},o=l({...a.query,...r}),s=u(o,{...d,method:"post"}),p=`${a.path}/validateNetworkTopology`,{data:f}=await c(p,s);return k.fromJSON(w(f))}async function S(t,e,d){if(!e.gdbVersion)throw new v("submit-validate-network-topology-job:missing-gdb-version","version is missing");const a=n(t),i=e.toJSON();e.validationSet&&(i.validationSet=JSON.stringify(e.validationSet));const r=u(a.query,{query:l({...i,returnEdits:!0,async:!0,f:"json"}),...d,method:"post"}),o=`${a.path}/validateNetworkTopology`,{data:s}=await c(o,r);return s?s.statusUrl:null}function w(t){return t.serviceEdits&&(t.serviceEdits=t.serviceEdits.map(e=>(e.editedFeatures.spatialReference&&(e.editedFeatures.spatialReference={wkid:e.editedFeatures.spatialReference.wkid,wkt:e.editedFeatures.spatialReference.wkt,wkt2:e.editedFeatures.spatialReference.wkt2,latestWkid:e.editedFeatures.spatialReference.latestWkid,latestVcsWkid:e.editedFeatures.spatialReference.latestVcsWkid,vcsWkid:e.editedFeatures.spatialReference.vcsWkid}),e={layerId:e.id,editedFeatures:e.editedFeatures}))),t}export{w as handleValidateNetworkTopologyResult,S as submitValidateNetworkTopologyJob,g as validateNetworkTopology};