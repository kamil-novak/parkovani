import{e2 as n,e3 as p,eY as l,a6 as r,a7 as i,a8 as d,ch as u,s as y}from"./index-BkgwewGo.js";let t=class extends n(p(u)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{l(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unsupported layer type";s&&(a+=" "+s),o(new y("layer:unsupported-layer-type",a,{layerType:s}))})}))}read(e,o){const s={resourceInfo:e};e.id!=null&&(s.id=e.id),e.title!=null&&(s.title=e.title),super.read(s,o)}write(e,o){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};r([i({readOnly:!0})],t.prototype,"resourceInfo",void 0),r([i({type:["show","hide"]})],t.prototype,"listMode",void 0),r([i({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),r([i({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=r([d("esri.layers.UnsupportedLayer")],t);const h=t;export{h as default};
