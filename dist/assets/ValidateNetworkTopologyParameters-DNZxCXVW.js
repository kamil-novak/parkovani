import{P as e,Q as i,df as a,a0 as w,Y as y,Z as v,$ as c,G as S,X as f}from"./index-Drt46XzA.js";var s;let t=s=class extends y{static from(o){return v(s,o)}constructor(o){super(o),this.gdbVersion=null,this.sessionID=null,this.validationType=null,this.validateArea=null,this.validationSet=null,this.outSpatialReference=null}writeOutSR(o,r,l){if(o!=null){const{wkid:n,latestWkid:p,wkt:d,wkt2:u}=o;r[l]=JSON.stringify({wkid:n??void 0,latestWkid:p??void 0,wkt:d??void 0,wkt2:u??void 0})}}};e([i({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),e([i({type:String,json:{write:!0}})],t.prototype,"sessionID",void 0),e([i({type:a.apiValues,json:{type:a.jsonValues,read:a.read,write:a.write}})],t.prototype,"validationType",void 0),e([i({type:c,json:{write:!0}})],t.prototype,"validateArea",void 0),e([i({type:[Object],json:{write:!0}})],t.prototype,"validationSet",void 0),e([i({type:S,json:{write:{allowNull:!0,target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),e([w("outSpatialReference")],t.prototype,"writeOutSR",null),t=s=e([f("esri.rest.networks.support.ValidateNetworkTopologyParameters")],t);const g=t;export{g as default};