import{a7 as s,ab as n,cC as d,cD as u,ap as l}from"./index-Bf1OihDl.js";import{r as g}from"./FeatureLayerView2D-C2xFQUeJ.js";import"./featureConversionUtils-DpAGojQr.js";import"./timeSupport-CWO7L2G-.js";import"./LayerView-CSnYYIEW.js";import"./Container-BRzoZibE.js";import"./TechniqueInstance-C8y4wjs6.js";import"./UpdateTracking2D-BO20RzD7.js";import"./BindType-BmZEZMMh.js";import"./Util-Bhpdg_yc.js";import"./Program-VADNTEX5.js";import"./BufferObject-C-RZ3WhR.js";import"./LabelMetric-BuQxMXB8.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-B6sQGwPa.js";import"./TileContainer-DkQ6CVUe.js";import"./WGLContainer-BEfwQ6A4.js";import"./VertexArrayObject-Cw_FmKcd.js";import"./ProgramTemplate-Tq9zsx96.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DY7VymuU.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-DaZSLw1c.js";import"./CIMSymbolHelper-Q5H41wx-.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-B8diEBxZ.js";import"./GeometryUtils-BpA-N9t_.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./SDFHelper-Dvfg7geR.js";import"./floatRGBA-DrdDHoMU.js";import"./HighlightCounter-Czi-fdpx.js";import"./popupUtils-CDA48Emn.js";import"./RefreshableLayerView-csAhicQM.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(a=>a.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,e=this.dataUpdating,m=t&&(r||o||p||e);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${m}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${e}
`),m}};i=s([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const W=i;export{W as default};
