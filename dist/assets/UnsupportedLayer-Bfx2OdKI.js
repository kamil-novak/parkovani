import{eO as p,eP as a,fE as l,P as t,Q as i,X as d,dr as u,s as y}from"./index-i1xHX9d5.js";let s=class extends p(a(u)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{l(()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let n="Unsupported layer type";r&&(n+=" "+r),o(new y("layer:unsupported-layer-type",n,{layerType:r}))})}))}read(e,o){const r={resourceInfo:e};e.id!=null&&(r.id=e.id),e.title!=null&&(r.title=e.title),super.read(r,o)}write(e,o){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};t([i({readOnly:!0})],s.prototype,"resourceInfo",void 0),t([i({type:["show","hide"]})],s.prototype,"listMode",void 0),t([i({type:Boolean,readOnly:!1})],s.prototype,"persistenceEnabled",void 0),t([i({json:{read:!1},readOnly:!0,value:"unsupported"})],s.prototype,"type",void 0),s=t([d("esri.layers.UnsupportedLayer")],s);const f=s;export{f as default};
