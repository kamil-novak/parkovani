import{a7 as s,ab as n,cD as d,cE as u,ap as l}from"./index-BmtEbaAG.js";import{r as g}from"./FeatureLayerView2D-htkmmNRv.js";import"./featureConversionUtils-CzbuRL98.js";import"./timeSupport-DLpNBJT0.js";import"./LayerView-Dho7etU8.js";import"./Container-Dw5SoDgg.js";import"./TechniqueInstance-BUWbmFor.js";import"./UpdateTracking2D-D6NZlfpD.js";import"./BindType-BmZEZMMh.js";import"./Util-B05p6PfF.js";import"./Program-0ZRkLLhp.js";import"./BufferObject-DB88RjWs.js";import"./LabelMetric-BeuxSJWP.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-BUAv9Stm.js";import"./TileContainer-8MhENQC0.js";import"./WGLContainer-yIvsztpj.js";import"./VertexArrayObject-o2Zph7RQ.js";import"./ProgramTemplate-Clyzrk4a.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DYvh6uPO.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-BuUVPba4.js";import"./CIMSymbolHelper-gZcfDda3.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-IgbYXj5p.js";import"./GeometryUtils-B_1SA8xS.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./SDFHelper-DHqE-fVi.js";import"./floatRGBA-DKYvXt7p.js";import"./HighlightCounter-Czi-fdpx.js";import"./popupUtils-C82fdhzJ.js";import"./RefreshableLayerView-DD1K0END.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(a=>a.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,e=this.dataUpdating,m=t&&(r||o||p||e);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${m}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${e}
`),m}};i=s([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const W=i;export{W as default};
