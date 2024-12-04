import{cM as o,aC as g,aB as m,F as l,c0 as a,P as p,Q as c,X as n}from"./index-i1xHX9d5.js";import{j as d,y as u}from"./LayerView-BwugUvnP.js";import{t as w}from"./GraphicContainer-Nl7tGIJg.js";import{F as y}from"./GraphicsView2D-Cv73ViW0.js";import{e as V}from"./HighlightCounter-Czi-fdpx.js";import"./Container-BEOYuYAx.js";import"./AGraphicContainer-CKiE-wPi.js";import"./TechniqueInstance-mcfjFDRH.js";import"./UpdateTracking2D-B4C358IZ.js";import"./BidiEngine-DNnuvc1i.js";import"./OptimizedFeature-D3320lj0.js";import"./GeometryUtils-CrHdthll.js";import"./Rect-CUzevAry.js";import"./LabelMetric-p8Vo3DNf.js";import"./Program-CdS23I-N.js";import"./BufferObject-2Td0Kv4c.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-Gk2XI9GV.js";import"./TileContainer-C7S_fPT6.js";import"./WGLContainer-BOGow5OB.js";import"./VertexArrayObject-BU_PqsFN.js";import"./ProgramTemplate-t5Z5fobM.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-CD0ggnu2.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-1gMcYmRJ.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-Du2O2zJ7.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-BpfEVEhO.js";import"./TimeOnly-Cs51moYZ.js";import"./timeSupport-CnXyY5Qx.js";import"./queryUtils-CwPqVSBK.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-Ae1WbTBP.js";let s=class extends d(u){constructor(){super(...arguments),this._highlightCounter=new V}attach(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new w(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="default"){let r;typeof i=="number"?r=[i]:i instanceof g?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):m.isCollection(i)&&i.length>0&&(r=i.map(h=>h&&h.uid).toArray());const e=r==null?void 0:r.filter(l);return e!=null&&e.length?(this._addHighlight(e,t),a(()=>this._removeHighlight(e,t))):a()}_addHighlight(i,t){this._highlightCounter.addGroup(i,t),this._updateHighlights()}_removeHighlight(i,t){this._highlightCounter.deleteGroup(i,t),this._updateHighlights()}_updateHighlights(){var t;const i=[];for(const r of this._highlightCounter.ids()){const e=this._highlightCounter.getHighlightGroups(r),h=this._getHighlightBits(e);i.push({objectId:r,highlightFlags:h})}(t=this.graphicsView)==null||t.setHighlight(i)}};p([c()],s.prototype,"graphicsView",void 0),s=p([n("esri.views.2d.layers.GraphicsLayerView2D")],s);const ri=s;export{ri as default};