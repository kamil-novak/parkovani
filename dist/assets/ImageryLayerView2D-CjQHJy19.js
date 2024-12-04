import{P as n,Q as o,X as v,de as R,cb as b,aj as _,aC as P,bz as V,fR as A,$ as B,cH as f,hP as F,a4 as I,fm as T,s as U,al as C,as as j,ah as E,cv as L,fh as $,aB as S,c0 as q,ap as M}from"./index-i1xHX9d5.js";import{d as O,f as H,a as N}from"./RasterVFDisplayObject-QiW7GQ7Z.js";import{j as G,y as J}from"./LayerView-BwugUvnP.js";import{F as W}from"./GraphicsView2D-Cv73ViW0.js";import{h as K}from"./HighlightGraphicContainer-DWQKjdkY.js";import{M as Q,m as X,f as Y}from"./dataUtils-CDYv7A7M.js";import{a as Z}from"./BitmapContainer-eFaR6-xN.js";import{n as ee}from"./Container-BEOYuYAx.js";import{l as te}from"./Bitmap-YsOH11Zt.js";import{_ as ie}from"./ExportStrategy-DkAHxDak.js";import{K as re}from"./rasterProjectionHelper-Dqm3xi24.js";import{n as se}from"./WGLContainer-BOGow5OB.js";import{i as ae}from"./timeSupport-CY0QqOPa.js";import{p as ne}from"./popupUtils-DwcniOWB.js";import{i as oe}from"./RefreshableLayerView-B-AnIH_H.js";import"./BufferObject-2Td0Kv4c.js";import"./VertexArrayObject-BU_PqsFN.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./LabelMetric-p8Vo3DNf.js";import"./Program-CdS23I-N.js";import"./UpdateTracking2D-B4C358IZ.js";import"./BidiEngine-DNnuvc1i.js";import"./OptimizedFeature-D3320lj0.js";import"./GeometryUtils-CrHdthll.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-Gk2XI9GV.js";import"./AttributeStore-BpfEVEhO.js";import"./TimeOnly-Cs51moYZ.js";import"./timeSupport-CnXyY5Qx.js";import"./featureConversionUtils-1gMcYmRJ.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryUtils-CwPqVSBK.js";import"./json-Wa8cmqdu.js";import"./FeatureCommandQueue-Du2O2zJ7.js";import"./constants-F8oTIn7N.js";import"./normalizeUtilsSync-Ae1WbTBP.js";import"./AGraphicContainer-CKiE-wPi.js";import"./TechniqueInstance-mcfjFDRH.js";import"./TileContainer-C7S_fPT6.js";import"./vec3f32-nZdmKIgz.js";import"./ProgramTemplate-t5Z5fobM.js";import"./StyleDefinition-CD0ggnu2.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";let p=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new ee,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Z}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch(i=>{b(i)||_.getLogger(this).error(i)})}hitTest(t){return new P({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,i=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new ie({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:i,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async t=>{const{source:i}=t;if(!i||i instanceof ImageBitmap)return;const r=await this.layer.applyRenderer({extent:i.extent,pixelBlock:i.originalPixelBlock??i.pixelBlock});i.filter=s=>this.layer.pixelFilter?this.layer.applyFilter(s):{...r,extent:i.extent}}).catch(t=>{b(t)||_.getLogger(this).error(t)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(t.length===1&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const i=this.view.extent,r=t.map(a=>a.source).filter(a=>a.extent&&a.extent.intersects(i)).map(a=>({extent:a.extent,pixelBlock:a.originalPixelBlock})),s=Q(r,i);return s!=null?{extent:s.extent,pixelBlock:s.pixelBlock}:null}return null}async _fetchImage(t,i,r,s){var h;(s=s||{}).timeExtent=this.timeExtent,s.requestAsImageElement=!0,s.returnImageBitmap=!0;const a=await this.layer.fetchImage(t,i,r,s);if(a.imageBitmap)return a.imageBitmap;const l=await this.layer.applyRenderer(a.pixelData,{signal:s.signal}),m=new te(l.pixelBlock,(h=l.extent)==null?void 0:h.clone(),a.pixelData.pixelBlock);return m.filter=c=>this.layer.applyFilter(c),m}};n([o()],p.prototype,"attached",void 0),n([o()],p.prototype,"container",void 0),n([o()],p.prototype,"layer",void 0),n([o()],p.prototype,"strategy",void 0),n([o()],p.prototype,"timeExtent",void 0),n([o()],p.prototype,"view",void 0),n([o()],p.prototype,"updateRequested",void 0),n([o()],p.prototype,"updating",null),n([o()],p.prototype,"type",void 0),p=n([v("esri.views.2d.layers.imagery.ImageryView2D")],p);const le=p;class he extends se{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[O],target:()=>this.children,drawPhase:V.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===V.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let y=class extends R{constructor(e){super(e),this._loading=null,this.update=A((t,i)=>this._update(t,i).catch(r=>{b(r)||_.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:s}=e.state,a=new B({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[l,m]=e.state.size;this._loading=this.fetchPixels(a,l,m,i);const h=await this._loading;this._addToDisplay(h,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(e.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=e,a=new H(s);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=r.xmin,a.y=r.ymax,a.pixelRatio=i.pixelRatio,a.rotation=i.rotation,a.resolution=i.resolution,a.width=s.width*t.symbolTileSize,a.height=s.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(a)}};n([o()],y.prototype,"fetchPixels",void 0),n([o()],y.prototype,"container",void 0),n([o()],y.prototype,"_loading",void 0),n([o()],y.prototype,"updating",null),y=n([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const pe=y;let d=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new he,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:l,width:m,height:h}=X(e,t,i,a,s);if(s!=null&&!s.intersects(e))return{extent:l,pixelBlock:null};const c={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(c)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===c.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,m,h,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=c;const x=g==null?void 0:g.pixelBlock;return x==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?Y(x,"vector-uv"):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new pe({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),F),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const e=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch(t=>{b(t)||_.getLogger(this).error(t)})}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&i&&r&&s}async _getProjectedFullExtent(e){try{return re(this.layer.fullExtent,e)}catch{try{const i=(await I(this.layer.url,{query:{option:"footprints",outSR:T(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?B.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(e){e.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};n([o()],d.prototype,"attached",void 0),n([o()],d.prototype,"container",void 0),n([o()],d.prototype,"layer",void 0),n([o()],d.prototype,"timeExtent",void 0),n([o()],d.prototype,"type",void 0),n([o()],d.prototype,"view",void 0),n([o()],d.prototype,"updating",null),d=n([v("esri.views.2d.layers.imagery.VectorFieldView2D")],d);const ce=d,de=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}get timeExtent(){var i;return ae(this.layer,(i=this.view)==null?void 0:i.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,r){const{layer:s}=this;if(!i)throw new U("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:a}=s,l=ne(s,r);if(!a||l==null)return[];const m=await l.getRequiredFields();C(r);const h=new j;h.timeExtent=this.timeExtent,h.geometry=i,h.outFields=m,h.outSpatialReference=i.spatialReference;const{resolution:c,spatialReference:g}=this.view,x=this.view.type==="2d"?new E(c,c,g):new E(.5*c,.5*c,g),{returnTopmostRaster:u,showNoDataRecords:D}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:x,showNoDataRecords:D,signal:r==null?void 0:r.signal};return s.queryVisibleRasters(h,k).then(z=>z)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return n([o()],t.prototype,"layer",void 0),n([o()],t.prototype,"suspended",void 0),n([o({readOnly:!0})],t.prototype,"timeExtent",null),n([o()],t.prototype,"view",void 0),t=n([v("esri.views.layers.ImageryLayerView")],t),t};let w=class extends de(oe(G(J))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new L,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){var t;(t=this.subview)==null||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new W({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new K(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},$),f(()=>this.timeExtent,e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())},$),this.layer.on("redraw",()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(e=this.subview)==null||e.destroy(),this.subview=null,(t=this._highlightView)==null||t.destroy(),this._exportImageVersion=-1}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:S.isCollection(e)?e.at(0):e)instanceof P))return q();let i=[];return Array.isArray(e)||S.isCollection(e)?i=e.map(r=>r.clone()):e instanceof P&&(i=[e.clone()]),this._highlightGraphics.addMany(i),q(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){var t,i;const e=!this.subview||this.subview.updating||!!((t=this._highlightView)!=null&&t.updating);return M("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${(i=this._highlightView)==null?void 0:i.updating}
`),e}_setSubView(){var i,r;if(!this.view)return;const e=(i=this.layer.renderer)==null?void 0:i.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:s}=this.subview;if(s===t)return this._attachSubview(this.subview),void(s==="flow"?this.subview.redrawOrRefetch():s==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=t==="imagery"?new le({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new ce({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new N({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){e!=null&&e.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};n([o()],w.prototype,"pixelData",null),n([o()],w.prototype,"subview",void 0),w=n([v("esri.views.2d.layers.ImageryLayerView2D")],w);const at=w;export{at as default};