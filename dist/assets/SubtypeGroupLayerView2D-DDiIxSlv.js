import{a7 as s,ab as n,cD as d,cE as u,ap as l}from"./index-COSAHm4B.js";import{r as g}from"./FeatureLayerView2D-DUCRbaUh.js";import"./featureConversionUtils-AMPUmCQX.js";import"./timeSupport-CkTAacvO.js";import"./LayerView-DPc_pfV1.js";import"./Container-CgxHrhr9.js";import"./TechniqueInstance-BYIYj_bA.js";import"./UpdateTracking2D-DfrJ0lix.js";import"./BindType-BmZEZMMh.js";import"./Util-lHxcHm9L.js";import"./Program-BeHs0l3u.js";import"./BufferObject-Q4QFr6bE.js";import"./LabelMetric-DQe4sFML.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-Bk7pren-.js";import"./TileContainer-Brfurka5.js";import"./WGLContainer-DUav56oT.js";import"./VertexArrayObject-DJh4w3NV.js";import"./ProgramTemplate-B4SL13T1.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-fCqlawR8.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-DUe1Gas-.js";import"./CIMSymbolHelper-DHAy-nJN.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-C6o636zK.js";import"./GeometryUtils-LoYQdasq.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./SDFHelper-BjHyjIDK.js";import"./floatRGBA-DLTHEjPQ.js";import"./HighlightCounter-Czi-fdpx.js";import"./popupUtils-B9K4EtTg.js";import"./RefreshableLayerView-BxpcPtVc.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(a=>a.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,e=this.dataUpdating,m=t&&(r||o||p||e);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${m}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${e}
`),m}};i=s([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const W=i;export{W as default};