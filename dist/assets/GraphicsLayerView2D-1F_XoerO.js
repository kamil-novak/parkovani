import{cB as o,ax as g,aw as m,F as l,b$ as a,P as p,Q as c,X as n}from"./index-Drt46XzA.js";import{j as d,y as u}from"./LayerView-CCV2lqFe.js";import{t as w}from"./GraphicContainer-Coiq-fFx.js";import{F as y}from"./GraphicsView2D-DtqRJ-Tp.js";import{e as V}from"./HighlightCounter-Czi-fdpx.js";import"./Container-39eCDGle.js";import"./AGraphicContainer-B3XdSrGg.js";import"./TechniqueInstance-C_REfCdo.js";import"./UpdateTracking2D-_N_GswyJ.js";import"./BindType-BmZEZMMh.js";import"./Util-Dz9x07mo.js";import"./Program-BCbV3gAX.js";import"./BufferObject-Db0W1uxR.js";import"./LabelMetric-BFj03Cak.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CuLdZudv.js";import"./TileContainer-5gpwVGB1.js";import"./WGLContainer-Fyx8AacP.js";import"./VertexArrayObject-CexGqnst.js";import"./ProgramTemplate-CmpvALWz.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DZ7DuW33.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-DMYaqbHj.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-CsZq185j.js";import"./CIMSymbolHelper-D_NM22_u.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-uXtWyTQK.js";import"./GeometryUtils-B7qvaa9h.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-Cuus5y9D.js";import"./TimeOnly-D4-ViYfI.js";import"./timeSupport-CA0D5OEr.js";import"./queryUtils-BoBOZCSn.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-BcHcWGV1.js";let s=class extends d(u){constructor(){super(...arguments),this._highlightCounter=new V}attach(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new w(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="default"){let r;typeof i=="number"?r=[i]:i instanceof g?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):m.isCollection(i)&&i.length>0&&(r=i.map(h=>h&&h.uid).toArray());const e=r==null?void 0:r.filter(l);return e!=null&&e.length?(this._addHighlight(e,t),a(()=>this._removeHighlight(e,t))):a()}_addHighlight(i,t){this._highlightCounter.addGroup(i,t),this._updateHighlights()}_removeHighlight(i,t){this._highlightCounter.deleteGroup(i,t),this._updateHighlights()}_updateHighlights(){var t;const i=[];for(const r of this._highlightCounter.ids()){const e=this._highlightCounter.getHighlightGroups(r),h=this._getHighlightBits(e);i.push({objectId:r,highlightFlags:h})}(t=this.graphicsView)==null||t.setHighlight(i)}};p([c()],s.prototype,"graphicsView",void 0),s=p([n("esri.views.2d.layers.GraphicsLayerView2D")],s);const ai=s;export{ai as default};