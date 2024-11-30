import{a9 as l,aa as h,ab as g,ac as w,ad as f,ae as d,af as n,a6 as u,a8 as V}from"./index-BkgwewGo.js";import{f as b,y as S}from"./LayerView-CnpyCtHj.js";import{t as _}from"./GraphicContainer-CV7_cnnM.js";import{V as T}from"./GraphicsView2D-fz8qnDvD.js";import"./Container-CR7OUX17.js";import"./highlightReasons-KT_hqacP.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-BWE1xnZK.js";import"./AGraphicContainer-BW6Tn6eg.js";import"./TechniqueInstance-DeOQ74xG.js";import"./UpdateTracking2D-C_Qzq7QN.js";import"./BindType-BmZEZMMh.js";import"./Util-CBXgEzf0.js";import"./Program-DZ4bBhGZ.js";import"./LabelMetric-BcRCt4vY.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-aP_cuMFl.js";import"./TileContainer-BYA7222C.js";import"./WGLContainer-DJ8z_WXA.js";import"./ProgramTemplate-GEkSqzgy.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-IzIuJmZe.js";import"./config-MDUrh2eL.js";import"./earcut-_Wo_nt3E.js";import"./featureConversionUtils-Cyq484pm.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-c1SDkNyJ.js";import"./CIMSymbolHelper-BzFkl20j.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-BAeTG13P.js";import"./GeometryUtils-DTT7PogZ.js";import"./Rect-CUzevAry.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-CoboeZx7.js";import"./TimeOnly-Dgk-lK6N.js";import"./timeSupport-BIsjDKH2.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-DCSCvvjV.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(i=>{const t=this._popupTemplates.get(i),p=i.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=t;return p}).map(i=>({type:"graphic",graphic:i,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:i}of e){const t=g.fromJSON(o),p=new w(t.features),s=i.drawingInfo,c=r?f.fromJSON(r):null,a=d(s.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const ne=y;export{ne as default};