import{cd as o,ce as p,Z as i,a6 as r,a7 as s,cf as h,cg as n,a8 as c,ch as d}from"./index-BkgwewGo.js";let t=class extends o(p(d)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new i,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,a){return super.on(e,a)}graphicChanged(e){this.emit("graphic-update",e)}};r([s({type:h})],t.prototype,"elevationInfo",void 0),r([s(n(i,"graphics"))],t.prototype,"graphics",void 0),r([s({type:["show","hide"]})],t.prototype,"listMode",void 0),r([s()],t.prototype,"screenSizePerspectiveEnabled",void 0),r([s({readOnly:!0})],t.prototype,"type",void 0),r([s({constructOnly:!0})],t.prototype,"internal",void 0),t=r([c("esri.layers.GraphicsLayer")],t);const y=t;export{y as h};
