import{a6 as t,a7 as e,a8 as s,cj as h,b1 as G,bG as v,ck as w}from"./index-BkgwewGo.js";let a=class extends h{constructor(p){super(p),this.properties=null}};t([e({json:{write:!0}})],a.prototype,"properties",void 0),a=t([s("esri.rest.knowledgeGraph.GraphObject")],a);const y=a;let i=class extends y{constructor(p){super(p),this.typeName=null,this.id=null}};t([e({type:String,json:{write:!0}})],i.prototype,"typeName",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"id",void 0),i=t([s("esri.rest.knowledgeGraph.GraphNamedObject")],i);const m=i;let l=class extends m{constructor(p){super(p),this.layoutGeometry=null}};t([e({type:G,json:{write:!0}})],l.prototype,"layoutGeometry",void 0),l=t([s("esri.rest.knowledgeGraph.Entity")],l);const x=l;let n=class extends m{constructor(r){super(r),this.originId=null,this.destinationId=null,this.layoutGeometry=null}};t([e({type:String,json:{write:!0}})],n.prototype,"originId",void 0),t([e({type:String,json:{write:!0}})],n.prototype,"destinationId",void 0),t([e({type:v,json:{write:!0}})],n.prototype,"layoutGeometry",void 0),n=t([s("esri.rest.knowledgeGraph.Relationship")],n);const Q=n;let c=class extends y{constructor(r){super(r)}};c=t([s("esri.rest.knowledgeGraph.ObjectValue")],c);const S=c;let u=class extends h{constructor(p){super(p),this.path=null}};t([e({type:[y],json:{write:!0}})],u.prototype,"path",void 0),u=t([s("esri.rest.knowledgeGraph.Path")],u);const f=u;let d=class extends w{constructor(r){super(r),this.openCypherQuery=""}};t([e()],d.prototype,"openCypherQuery",void 0),d=t([s("esri.rest.knowledgeGraph.GraphQuery")],d);const g=d;let o=class extends g{constructor(r){super(r),this.bindParameters=null,this.bindGeometryQuantizationParameters=null,this.outputQuantizationParameters=null,this.outputSpatialReference=null,this.provenanceBehavior=null}};t([e()],o.prototype,"bindParameters",void 0),t([e()],o.prototype,"bindGeometryQuantizationParameters",void 0),t([e()],o.prototype,"outputQuantizationParameters",void 0),t([e()],o.prototype,"outputSpatialReference",void 0),t([e()],o.prototype,"provenanceBehavior",void 0),o=t([s("esri.rest.knowledgeGraph.GraphQueryStreaming")],o);const z=o;export{f as c,x as m,Q as p,z as s,S as t};