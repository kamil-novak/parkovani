import{n as r}from"./timeSupport-tfXiFAl7.js";import{b0 as o,b1 as i}from"./index-Bf1OihDl.js";const s={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new o(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(t.centroid==null&&(t.centroid=r(new i,t.geometry,e.hasZ,e.hasM)),t.centroid)};export{s as o};
