import{a7 as s,ab as n,cD as d,cE as u,ap as l}from"./index-C4hmu5N0.js";import{r as g}from"./FeatureLayerView2D-7XT62pol.js";import"./featureConversionUtils-aRNvZgBX.js";import"./timeSupport-CgUx4QVK.js";import"./LayerView-DjvUaExk.js";import"./Container-Ddv9y1Ln.js";import"./TechniqueInstance-ChQzaPbO.js";import"./UpdateTracking2D-DFLCObVc.js";import"./BindType-BmZEZMMh.js";import"./Util-Bcdh5t4Q.js";import"./Program-DZRB5kBP.js";import"./BufferObject-BX3BdEj9.js";import"./LabelMetric-9E751NnW.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-Z9mIzorg.js";import"./TileContainer-CE4hmsxl.js";import"./WGLContainer-BO67TfPk.js";import"./VertexArrayObject-BxEK75Nm.js";import"./ProgramTemplate-DFb01Y_8.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DFsooI12.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-8QYXLDye.js";import"./CIMSymbolHelper-Dd30aJNc.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-yFW0HhKe.js";import"./GeometryUtils-CpHPvaWC.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./SDFHelper-DJtyDImN.js";import"./floatRGBA-CHrLSNMZ.js";import"./HighlightCounter-Czi-fdpx.js";import"./popupUtils-CTp8ECbb.js";import"./RefreshableLayerView-DYqisRa6.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(a=>a.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,e=this.dataUpdating,m=t&&(r||o||p||e);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${m}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${e}
`),m}};i=s([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const W=i;export{W as default};
