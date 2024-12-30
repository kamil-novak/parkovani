import{a7 as a,a8 as m,ab as E,cJ as F,s as w,ak as M,cq as S,ai as C,cD as q,ae as R}from"./index-Cwh4c7GA.js";import{a as $}from"./BitmapContainer-DJ7RDyET.js";import{j as U,y as V}from"./LayerView-Dd60nR-Z.js";import{_ as L}from"./ExportStrategy-D721KVve.js";import{i as W}from"./RefreshableLayerView-uIYz2XW8.js";import{a as A}from"./ExportWMSImageParameters--vfS-RY4.js";import{i as H}from"./timeSupport-Cw1NqnnK.js";import"./WGLContainer-DVJI5-UO.js";import"./LabelMetric-DU9SXqSE.js";import"./Program-4duA06n_.js";import"./BufferObject-BCBjjpCN.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-B8uTs5Id.js";import"./VertexArrayObject-DtRaH-4n.js";import"./ProgramTemplate-BKOLmzVi.js";import"./vec3f32-nZdmKIgz.js";import"./Container-Cy2YhLiT.js";import"./StyleDefinition-CtdXeKoS.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-1lyN02hp.js";import"./Bitmap-Y4SrVMl6.js";const _=r=>{let t=class extends r{initialize(){this.exportImageParameters=new A({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return H(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,s){const{layer:o}=this;if(!e)throw new w("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:c}=o;if(!c)throw new w("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:c});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:n,width:p,height:h,x:d,y}=i;if(!(n&&p&&h))throw new w("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:n,width:p,height:h});const g=await o.fetchFeatureInfo(n,p,h,d,y);return M(s),g}};return a([m()],t.prototype,"exportImageParameters",void 0),a([m({readOnly:!0})],t.prototype,"exportImageVersion",null),a([m()],t.prototype,"layer",void 0),a([m({readOnly:!0})],t.prototype,"timeExtent",null),t=a([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends _(W(U(V))){constructor(){super(...arguments),this.bitmapContainer=new $}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(t=>{S(t)||C.getLogger(this).error(t)})}attach(){const{layer:r}=this,{imageMaxHeight:t,imageMaxWidth:e}=r;this.bitmapContainer=new $,this.container.addChild(this.bitmapContainer),this.strategy=new L({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:e,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(q(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:t,bitmapContainer:e}=this,{x:s,y:o}=r,{spatialReference:c}=t;let i,n=0,p=0;if(e.children.some(g=>{const{width:f,height:v,resolution:b,x:l,y:x}=g,I=l+b*f,P=x-b*v;return s>=l&&s<=I&&o<=x&&o>=P&&(i=new R({xmin:l,ymin:P,xmax:I,ymax:x,spatialReference:c}),n=f,p=v,!0)}),!i)return null;const h=i.width/n,d=Math.round((s-i.xmin)/h),y=Math.round((i.ymax-o)/h);return{extent:i,width:n,height:p,x:d,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,t,e,s){return this.layer.fetchImageBitmap(r,t,e,{timeExtent:this.timeExtent,...s})}};a([m()],u.prototype,"strategy",void 0),a([m()],u.prototype,"updating",void 0),u=a([E("esri.views.2d.layers.WMSLayerView2D")],u);const nt=u;export{nt as default};