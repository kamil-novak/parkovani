import{a7 as o,a8 as i,ae as m,$ as y,af as l,ab as d,ac as w,ad as v}from"./index-Bf1OihDl.js";var n;let t=n=class extends w{static from(e){return v(n,e)}constructor(e){super(e),this.returnAttachmentAssociations=!1,this.returnConnectivityAssociations=!1,this.returnContainmentAssociations=!1,this.extent=null,this.maxGeometryCount=null,this.outSpatialReference=null,this.gdbVersion=null,this.moment=null}writeOutSR(e,s,r){if(e!=null){const{wkid:a,latestWkid:c,wkt:p,wkt2:u}=e;s[r]=JSON.stringify({wkid:a??void 0,latestWkid:c??void 0,wkt:p??void 0,wkt2:u??void 0})}}};o([i({type:Boolean,json:{read:{source:"attachmentAssociations"},write:{target:"attachmentAssociations"}}})],t.prototype,"returnAttachmentAssociations",void 0),o([i({type:Boolean,json:{read:{source:"connectivityAssociations"},write:{target:"connectivityAssociations"}}})],t.prototype,"returnConnectivityAssociations",void 0),o([i({type:Boolean,json:{read:{source:"containmentAssociations"},write:{target:"containmentAssociations"}}})],t.prototype,"returnContainmentAssociations",void 0),o([i({type:m,json:{write:!0}})],t.prototype,"extent",void 0),o([i({type:Number,json:{write:!0}})],t.prototype,"maxGeometryCount",void 0),o([i({type:y,json:{write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),o([l("outSpatialReference")],t.prototype,"writeOutSR",null),o([i({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),o([i({type:Date,json:{type:Number,write:{writer:(e,s)=>{s.moment=e==null?void 0:e.getTime()}}}})],t.prototype,"moment",void 0),t=n=o([d("esri.rest.networks.support.SynthesizeAssociationGeometriesParameters")],t);const h=t;export{h as default};
