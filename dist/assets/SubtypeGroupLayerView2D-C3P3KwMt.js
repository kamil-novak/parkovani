import{a7 as s,ab as n,cD as d,cE as u,ap as l}from"./index-BgIY_7Ci.js";import{r as g}from"./FeatureLayerView2D-CTyfZQTS.js";import"./featureConversionUtils-ipBj0yxd.js";import"./timeSupport-C7LROX60.js";import"./LayerView-BD2nDAE4.js";import"./Container-Df763sWw.js";import"./TechniqueInstance-BT8yVWtr.js";import"./UpdateTracking2D-CX7KYKa4.js";import"./BindType-BmZEZMMh.js";import"./Util-BJ91HjuZ.js";import"./Program-Drk2fmEE.js";import"./BufferObject-ozULPpBA.js";import"./LabelMetric-Xqe3MsSo.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CqLsfJ1l.js";import"./TileContainer-CIfmulJB.js";import"./WGLContainer-CPo1qNKu.js";import"./VertexArrayObject-CgcJNjI3.js";import"./ProgramTemplate-DJVhB8nq.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BZhOtRQn.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-CiUvIa9v.js";import"./CIMSymbolHelper-B1BfIRy5.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-8tiZ7fiP.js";import"./GeometryUtils-DYYkNZ-o.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./SDFHelper-CoOgjBws.js";import"./floatRGBA-CEgAJ6gy.js";import"./HighlightCounter-Czi-fdpx.js";import"./popupUtils-CJULju37.js";import"./RefreshableLayerView-Dpyab-Pt.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(a=>a.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,e=this.dataUpdating,m=t&&(r||o||p||e);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${m}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${e}
`),m}};i=s([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const W=i;export{W as default};
