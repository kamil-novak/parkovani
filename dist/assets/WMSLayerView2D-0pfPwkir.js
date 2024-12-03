import{ae as a,af as m,ai as E,cP as F,s as f,aB as M,cv as S,az as C,cK as R,al as q}from"./index-ZNyjz3YK.js";import{a as b}from"./BitmapContainer-C84QtjqX.js";import{j as U,y as V}from"./LayerView-CoM8wpCc.js";import{_ as L}from"./ExportStrategy-UP07lgev.js";import{i as W}from"./RefreshableLayerView-mLcwqZfS.js";import{a as z}from"./ExportWMSImageParameters-prgKAILk.js";import{i as A}from"./timeSupport-CeBOJJca.js";import"./WGLContainer-CVrOVarw.js";import"./LabelMetric-ng4resGt.js";import"./Program-CdhMMBD0.js";import"./BufferObject-DtDoOsh0.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CHdGaPl8.js";import"./VertexArrayObject-BWLL62RD.js";import"./ProgramTemplate-BsvK1Sfh.js";import"./vec3f32-nZdmKIgz.js";import"./Container-D-ALvfw4.js";import"./StyleDefinition-Da9exCts.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-DikS9Fwt.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./Bitmap-C07_1MXA.js";const H=r=>{let t=class extends r{initialize(){this.exportImageParameters=new z({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return A(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,s){const{layer:o}=this;if(!e)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:c}=o;if(!c)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:c});const i=this.createFetchPopupFeaturesQuery(e);if(!i)return[];const{extent:n,width:p,height:h,x:d,y}=i;if(!(n&&p&&h))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:n,width:p,height:h});const g=await o.fetchFeatureInfo(n,p,h,d,y);return M(s),g}};return a([m()],t.prototype,"exportImageParameters",void 0),a([m({readOnly:!0})],t.prototype,"exportImageVersion",null),a([m()],t.prototype,"layer",void 0),a([m({readOnly:!0})],t.prototype,"timeExtent",null),t=a([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends H(W(U(V))){constructor(){super(...arguments),this.bitmapContainer=new b}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(t=>{S(t)||C.getLogger(this).error(t)})}attach(){const{layer:r}=this,{imageMaxHeight:t,imageMaxWidth:e}=r;this.bitmapContainer=new b,this.container.addChild(this.bitmapContainer),this.strategy=new L({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:e,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:t,bitmapContainer:e}=this,{x:s,y:o}=r,{spatialReference:c}=t;let i,n=0,p=0;if(e.children.some(g=>{const{width:w,height:v,resolution:P,x:l,y:x}=g,I=l+P*w,$=x-P*v;return s>=l&&s<=I&&o<=x&&o>=$&&(i=new q({xmin:l,ymin:$,xmax:I,ymax:x,spatialReference:c}),n=w,p=v,!0)}),!i)return null;const h=i.width/n,d=Math.round((s-i.xmin)/h),y=Math.round((i.ymax-o)/h);return{extent:i,width:n,height:p,x:d,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,t,e,s){return this.layer.fetchImageBitmap(r,t,e,{timeExtent:this.timeExtent,...s})}};a([m()],u.prototype,"strategy",void 0),a([m()],u.prototype,"updating",void 0),u=a([E("esri.views.2d.layers.WMSLayerView2D")],u);const mt=u;export{mt as default};
