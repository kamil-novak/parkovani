import{a7 as s,a8 as o,hi as _,ab as m,cD as c,s as d,h4 as g,c6 as f,cF as l}from"./index-C4hmu5N0.js";import{n as v,r as S}from"./FeatureLayerView2D-7XT62pol.js";import"./featureConversionUtils-aRNvZgBX.js";import"./timeSupport-CgUx4QVK.js";import"./LayerView-DjvUaExk.js";import"./Container-Ddv9y1Ln.js";import"./TechniqueInstance-ChQzaPbO.js";import"./UpdateTracking2D-DFLCObVc.js";import"./BindType-BmZEZMMh.js";import"./Util-Bcdh5t4Q.js";import"./Program-DZRB5kBP.js";import"./BufferObject-BX3BdEj9.js";import"./LabelMetric-9E751NnW.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-Z9mIzorg.js";import"./TileContainer-CE4hmsxl.js";import"./WGLContainer-BO67TfPk.js";import"./VertexArrayObject-BxEK75Nm.js";import"./ProgramTemplate-DFb01Y_8.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DFsooI12.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-8QYXLDye.js";import"./CIMSymbolHelper-Dd30aJNc.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-yFW0HhKe.js";import"./GeometryUtils-CpHPvaWC.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./SDFHelper-DJtyDImN.js";import"./floatRGBA-CHrLSNMZ.js";import"./HighlightCounter-Czi-fdpx.js";import"./popupUtils-CTp8ECbb.js";import"./RefreshableLayerView-DYqisRa6.js";const C=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([o()],t.prototype,"_isUserPaused",void 0),s([o({readOnly:!0})],t.prototype,"connectionStatus",null),s([o({type:_})],t.prototype,"filter",void 0),t=s([m("esri.views.layers.StreamLayerView")],t),t};let n=class extends C(S){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([c(()=>this.layer.customParameters,async e=>{(await this.getWorker()).streamMessenger.updateCustomParameters(e)}),this.layer.on("send-message-to-socket",async e=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(e)}),this.layer.on("send-message-to-client",async e=>{(await this.getWorker()).streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&e.type==="clear"&&this.incrementSourceRefreshVersion()}),c(()=>this.layer.purgeOptions,()=>this._update()),c(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new d("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return g(e.map(i=>this.on(i,t)));const r=["data-received","message-received"].includes(e);r&&this.getWorker().then(i=>i.streamMessenger.enableEvent(e,!0));const p=super.on(e,t),a=this;return f(()=>{p.remove(),r&&(a._workerProxy.closed||a.hasEventListener(e)||a.getWorker().then(i=>i.streamMessenger.enableEvent(e,!1)))})}async queryLatestObservations(e,t){var p,a,i;if(!((p=this.layer.timeInfo)!=null&&p.endField||(a=this.layer.timeInfo)!=null&&a.startField||(i=this.layer.timeInfo)!=null&&i.trackIdField))throw new d("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const r=await this.getWorker();return v(r.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then(y=>{const h=l.fromJSON(y);return h.features.forEach(u=>{u.layer=this.layer,u.sourceLayer=this.layer}),h}),new l({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this.getWorker().then(e=>e.streamMessenger.disconnect()),this._doPause()}_doConnect(){this.getWorker().then(e=>e.streamMessenger.connect()),this.resume()}_doClear(){this.getWorker().then(e=>e.streamMessenger.clear()),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:r=>{this.set(r.propertyName,r.value)}}}};s([o()],n.prototype,"pipelineConnectionStatus",void 0),s([o()],n.prototype,"pipelineErrorString",void 0),s([o({readOnly:!0})],n.prototype,"connectionError",null),s([o({readOnly:!0})],n.prototype,"_streamConnectionStatus",null),n=s([m("esri.views.2d.layers.StreamLayerView2D")],n);const ie=n;export{ie as default};