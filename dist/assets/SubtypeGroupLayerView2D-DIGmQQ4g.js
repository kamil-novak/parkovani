import{P as a,X as n,cw as d,cx as u,ak as l}from"./index-D-EuQFPo.js";import{r as g}from"./FeatureLayerView2D-BgpjERUw.js";import"./featureConversionUtils-DRwPdVeT.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./timeSupport-CndviBzI.js";import"./LayerView-Cyjxgo6F.js";import"./Container-5_-9syEu.js";import"./TechniqueInstance-OoBktFLk.js";import"./UpdateTracking2D-C9Iuj7d6.js";import"./BindType-BmZEZMMh.js";import"./Util-CvpqvGRq.js";import"./Program-7NGPrSAO.js";import"./BufferObject-CmsJpBLE.js";import"./LabelMetric-XHME2juw.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-Dcu9C1UK.js";import"./TileContainer-QLB1ojCk.js";import"./WGLContainer-VYV_jnOO.js";import"./VertexArrayObject-WGwiIclB.js";import"./ProgramTemplate-Z9CTDoVV.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-B-cxay13.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-B-cIMaDh.js";import"./CIMSymbolHelper-CWnH9st7.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-D1Ro05qb.js";import"./GeometryUtils-DBH8Ulmm.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./SDFHelper-M3KNxh1N.js";import"./floatRGBA-PUt72Re0.js";import"./HighlightCounter-Czi-fdpx.js";import"./popupUtils-D_NcIMEE.js";import"./RefreshableLayerView-HpfYl8Z6.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const Z=i;export{Z as default};
