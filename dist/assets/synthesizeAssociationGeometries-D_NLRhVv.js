import{ae as i,af as n,ai as u,aj as y,an as d,ap as h,ao as l,aq as x}from"./index-ZNyjz3YK.js";import{d as $}from"./Association-D4luLTj1.js";let a=class extends y{constructor(o){super(o),this.maxGeometryCountExceeded=!1,this.associations=[]}};i([n({type:Boolean,json:{write:!0}})],a.prototype,"maxGeometryCountExceeded",void 0),i([n({type:[$],json:{write:!0}})],a.prototype,"associations",void 0),a=i([u("esri.rest.networks.support.AssociationGeometriesResult")],a);const G=a;async function A(o,t,e){const s=d(o),r={...t.toJSON(),f:"json"},c=h({...s.query,...r});e?e.method="post":e={method:"post"};const p=l(c,e),m=`${s.path}/synthesizeAssociationGeometries`;return x(m,p).then(f=>j(f,t.outSpatialReference))}function j(o,t){const{data:e}=o;if(t)for(const s of e.associations)s.geometry.spatialReference||(s.geometry.spatialReference=t.clone());return G.fromJSON(e)}export{A as synthesizeAssociationGeometries};
