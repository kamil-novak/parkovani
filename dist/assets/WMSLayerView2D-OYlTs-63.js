import{P as a,Q as m,X as E,cM as M,s as w,al as F,cb as S,aj as C,cH as R,$ as q}from"./index-i1xHX9d5.js";import{a as I}from"./BitmapContainer-eFaR6-xN.js";import{j as U,y as V}from"./LayerView-BwugUvnP.js";import{_ as L}from"./ExportStrategy-DkAHxDak.js";import{i as W}from"./RefreshableLayerView-B-AnIH_H.js";import{a as H}from"./ExportWMSImageParameters-DD6Ynpbl.js";import{i as j}from"./timeSupport-CY0QqOPa.js";import"./WGLContainer-BOGow5OB.js";import"./LabelMetric-p8Vo3DNf.js";import"./Program-CdS23I-N.js";import"./BufferObject-2Td0Kv4c.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./VertexArrayObject-BU_PqsFN.js";import"./ProgramTemplate-t5Z5fobM.js";import"./vec3f32-nZdmKIgz.js";import"./Container-BEOYuYAx.js";import"./StyleDefinition-CD0ggnu2.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-1gMcYmRJ.js";import"./OptimizedFeature-D3320lj0.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./Bitmap-YsOH11Zt.js";const A=r=>{let t=class extends r{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters=M(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return j(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,s){const{layer:o}=this;if(!e)throw new w("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:c}=o;if(!c)throw new w("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:c});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:n,width:p,height:h,x:d,y}=i;if(!(n&&p&&h))throw new w("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:n,width:p,height:h});const g=await o.fetchFeatureInfo(n,p,h,d,y);return F(s),g}};return a([m()],t.prototype,"exportImageParameters",void 0),a([m({readOnly:!0})],t.prototype,"exportImageVersion",null),a([m()],t.prototype,"layer",void 0),a([m({readOnly:!0})],t.prototype,"timeExtent",null),t=a([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends A(W(U(V))){constructor(){super(...arguments),this.bitmapContainer=new I}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(t=>{S(t)||C.getLogger(this).error(t)})}attach(){const{layer:r}=this,{imageMaxHeight:t,imageMaxWidth:e}=r;this.bitmapContainer=new I,this.container.addChild(this.bitmapContainer),this.strategy=new L({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:e,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=M(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:t,bitmapContainer:e}=this,{x:s,y:o}=r,{spatialReference:c}=t;let i,n=0,p=0;if(e.children.some(g=>{const{width:f,height:v,resolution:P,x:l,y:x}=g,$=l+P*f,b=x-P*v;return s>=l&&s<=$&&o<=x&&o>=b&&(i=new q({xmin:l,ymin:b,xmax:$,ymax:x,spatialReference:c}),n=f,p=v,!0)}),!i)return null;const h=i.width/n,d=Math.round((s-i.xmin)/h),y=Math.round((i.ymax-o)/h);return{extent:i,width:n,height:p,x:d,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,t,e,s){return this.layer.fetchImageBitmap(r,t,e,{timeExtent:this.timeExtent,...s})}};a([m()],u.prototype,"strategy",void 0),a([m()],u.prototype,"updating",void 0),u=a([E("esri.views.2d.layers.WMSLayerView2D")],u);const pt=u;export{pt as default};