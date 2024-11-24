import{a6 as s,a7 as o,gn as _,a8 as l,a9 as h,s as d,fI as g,a2 as f,ab as m}from"./index-BkgwewGo.js";import{n as v,r as S}from"./FeatureLayerView2D-DtfCMABp.js";import"./featureConversionUtils-Cyq484pm.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./timeSupport-fmo5SaA8.js";import"./highlightReasons-KT_hqacP.js";import"./LayerView-CnpyCtHj.js";import"./Container-CR7OUX17.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-BWE1xnZK.js";import"./TechniqueInstance-DeOQ74xG.js";import"./UpdateTracking2D-C_Qzq7QN.js";import"./BindType-BmZEZMMh.js";import"./Util-CBXgEzf0.js";import"./Program-DZ4bBhGZ.js";import"./LabelMetric-BcRCt4vY.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-aP_cuMFl.js";import"./TileContainer-BYA7222C.js";import"./WGLContainer-DJ8z_WXA.js";import"./ProgramTemplate-GEkSqzgy.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-IzIuJmZe.js";import"./config-MDUrh2eL.js";import"./earcut-_Wo_nt3E.js";import"./CircularArray-CujHzHWW.js";import"./tileUtils-B7X19rIS.js";import"./CIMSymbolHelper-BzFkl20j.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-BAeTG13P.js";import"./GeometryUtils-DTT7PogZ.js";import"./Rect-CUzevAry.js";import"./SDFHelper-DBa9z1mX.js";import"./floatRGBA-iSFyYseX.js";import"./FeatureCommandQueue-c1SDkNyJ.js";import"./constants-D5zmR9t2.js";import"./HighlightCounter-DX8VQrOL.js";import"./popupUtils-BHCAAiwo.js";import"./RefreshableLayerView-DXr_kpMf.js";const C=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([o()],t.prototype,"_isUserPaused",void 0),s([o({readOnly:!0})],t.prototype,"connectionStatus",null),s([o({type:_})],t.prototype,"filter",void 0),t=s([l("esri.views.layers.StreamLayerView")],t),t};let n=class extends C(S){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([h(()=>this.layer.customParameters,async e=>{(await this.getWorker()).streamMessenger.updateCustomParameters(e)}),this.layer.on("send-message-to-socket",async e=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(e)}),this.layer.on("send-message-to-client",async e=>{(await this.getWorker()).streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&e.type==="clear"&&this.incrementSourceRefreshVersion()}),h(()=>this.layer.purgeOptions,()=>this._update()),h(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new d("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return g(e.map(i=>this.on(i,t)));const r=["data-received","message-received"].includes(e);r&&this.getWorker().then(i=>i.streamMessenger.enableEvent(e,!0));const p=super.on(e,t),a=this;return f(()=>{p.remove(),r&&(a._workerProxy.closed||a.hasEventListener(e)||a.getWorker().then(i=>i.streamMessenger.enableEvent(e,!1)))})}async queryLatestObservations(e,t){var p,a,i;if(!((p=this.layer.timeInfo)!=null&&p.endField||(a=this.layer.timeInfo)!=null&&a.startField||(i=this.layer.timeInfo)!=null&&i.trackIdField))throw new d("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const r=await this.getWorker();return v(r.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then(y=>{const u=m.fromJSON(y);return u.features.forEach(c=>{c.layer=this.layer,c.sourceLayer=this.layer}),u}),new m({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this.getWorker().then(e=>e.streamMessenger.disconnect()),this._doPause()}_doConnect(){this.getWorker().then(e=>e.streamMessenger.connect()),this.resume()}_doClear(){this.getWorker().then(e=>e.streamMessenger.clear()),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:r=>{this.set(r.propertyName,r.value)}}}};s([o()],n.prototype,"pipelineConnectionStatus",void 0),s([o()],n.prototype,"pipelineErrorString",void 0),s([o({readOnly:!0})],n.prototype,"connectionError",null),s([o({readOnly:!0})],n.prototype,"_streamConnectionStatus",null),n=s([l("esri.views.2d.layers.StreamLayerView2D")],n);const ue=n;export{ue as default};
