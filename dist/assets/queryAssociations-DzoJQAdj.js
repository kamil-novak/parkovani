import{P as i,Q as m,X as y,Y as d,a1 as f,a3 as g,a2 as v,a4 as $,fY as j,aj as w,V as S}from"./index-i1xHX9d5.js";import{d as I}from"./Association-CR4scVHy.js";let n=class extends d{constructor(s){super(s),this.associations=[]}};i([m({type:[I],json:{write:!0}})],n.prototype,"associations",void 0),n=i([y("esri.rest.networks.support.QueryAssociationsResult")],n);const J=n;function O(e){const{returnDeletes:s,elements:r,gdbVersion:o,moment:a}=e.toJSON();return{returnDeletes:s,elements:JSON.stringify(r.map(t=>({globalId:t.globalId,networkSourceId:t.networkSourceId,terminalId:t.terminalId}))),types:JSON.stringify(e.types.map(t=>S.toJSON(t))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:o,moment:a}}async function N(e,s,r){const o=f(e),a={...O(s),f:"json"},t=g({...o.query,...a}),c=v(t,{...r,method:"post"}),p=`${o.path}/associations/query`,{data:u}=await $(p,c),l=J.fromJSON(u);return s.types.includes("connectivity")&&j(w.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),l}export{N as queryAssociations};