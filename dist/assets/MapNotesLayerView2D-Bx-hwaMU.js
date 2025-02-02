import{aA as u,az as f,F as w,c6 as c,cC as a,cD as o,cx as y,a7 as _,ab as V}from"./index-Bf1OihDl.js";import{j as v,y as C}from"./LayerView-CSnYYIEW.js";import{t as g}from"./GraphicContainer-CreYM0Kd.js";import{F as d}from"./GraphicsView2D-BNZGKIfc.js";import"./Container-BRzoZibE.js";import"./AGraphicContainer-KrBvbIKd.js";import"./TechniqueInstance-C8y4wjs6.js";import"./UpdateTracking2D-BO20RzD7.js";import"./BindType-BmZEZMMh.js";import"./Util-Bhpdg_yc.js";import"./Program-VADNTEX5.js";import"./BufferObject-C-RZ3WhR.js";import"./LabelMetric-BuQxMXB8.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-B6sQGwPa.js";import"./TileContainer-DkQ6CVUe.js";import"./WGLContainer-BEfwQ6A4.js";import"./VertexArrayObject-Cw_FmKcd.js";import"./ProgramTemplate-Tq9zsx96.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DY7VymuU.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-DpAGojQr.js";import"./FeatureCommandQueue-DaZSLw1c.js";import"./CIMSymbolHelper-Q5H41wx-.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-B8diEBxZ.js";import"./GeometryUtils-BpA-N9t_.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-DNgh4klY.js";import"./timeSupport-tfXiFAl7.js";import"./queryUtils-DZunm7IU.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-BiE65zcq.js";const m="sublayers",l="layerView",H=new Set(["default"]);let n=class extends v(C){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const h=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&h.popupTemplate&&(r.popupTemplate=h.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const h=new g(this.view.featuresTilingScheme),r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:h});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([a(()=>s.visible,p=>r.container.visible=p,o),a(()=>r.updating,()=>this.notifyChange("updating"),o)],l)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const h=new g(this.view.featuresTilingScheme);h.fadeTransitionEnabled=!0;const r=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:h});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),a(()=>s.visible,p=>r.container.visible=p,o),a(()=>r.updating,()=>this.notifyChange("updating"),o)],l),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),t=this._getHighlightBits(H);for(const e of this.graphicsViews())e.setHighlight(i.map(s=>({objectId:s,highlightFlags:t})))}};n=_([V("esri.views.2d.layers.MapNotesLayerView2D")],n);const ai=n;export{ai as default};
