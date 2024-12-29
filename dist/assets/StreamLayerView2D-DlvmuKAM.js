import{a7 as s,a8 as o,hj as _,ab as m,cD as c,s as d,h5 as g,c6 as f,cF as l}from"./index-DKZ740yB.js";import{n as v,r as S}from"./FeatureLayerView2D-DlThDNKo.js";import"./featureConversionUtils-BVzSO52q.js";import"./timeSupport-e4PUQlb-.js";import"./LayerView-kEEwk2k5.js";import"./Container-DmietRM8.js";import"./TechniqueInstance--XDAuQK6.js";import"./UpdateTracking2D-IIqEyhyO.js";import"./BindType-BmZEZMMh.js";import"./Util-DCYfFhdL.js";import"./Program-DYaR84TZ.js";import"./BufferObject-DcMyGiVY.js";import"./LabelMetric-CdCCs6Uu.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-DOceAM16.js";import"./TileContainer-CH4gLnuW.js";import"./WGLContainer-CrA5m4I_.js";import"./VertexArrayObject-BcwFzAnn.js";import"./ProgramTemplate-DfVvLOip.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-7ehiT4h5.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-D6k9KsDg.js";import"./CIMSymbolHelper-CQ6A6WHf.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-mTwmuihq.js";import"./GeometryUtils-R6eK0Ozy.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./SDFHelper-DB7wJ720.js";import"./floatRGBA-Dloeu7El.js";import"./HighlightCounter-Czi-fdpx.js";import"./popupUtils-dVhMj-aK.js";import"./RefreshableLayerView-BOBc3zFI.js";const C=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([o()],t.prototype,"_isUserPaused",void 0),s([o({readOnly:!0})],t.prototype,"connectionStatus",null),s([o({type:_})],t.prototype,"filter",void 0),t=s([m("esri.views.layers.StreamLayerView")],t),t};let n=class extends C(S){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([c(()=>this.layer.customParameters,async e=>{(await this.getWorker()).streamMessenger.updateCustomParameters(e)}),this.layer.on("send-message-to-socket",async e=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(e)}),this.layer.on("send-message-to-client",async e=>{(await this.getWorker()).streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&e.type==="clear"&&this.incrementSourceRefreshVersion()}),c(()=>this.layer.purgeOptions,()=>this._update()),c(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new d("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return g(e.map(i=>this.on(i,t)));const r=["data-received","message-received"].includes(e);r&&this.getWorker().then(i=>i.streamMessenger.enableEvent(e,!0));const p=super.on(e,t),a=this;return f(()=>{p.remove(),r&&(a._workerProxy.closed||a.hasEventListener(e)||a.getWorker().then(i=>i.streamMessenger.enableEvent(e,!1)))})}async queryLatestObservations(e,t){var p,a,i;if(!((p=this.layer.timeInfo)!=null&&p.endField||(a=this.layer.timeInfo)!=null&&a.startField||(i=this.layer.timeInfo)!=null&&i.trackIdField))throw new d("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const r=await this.getWorker();return v(r.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then(y=>{const h=l.fromJSON(y);return h.features.forEach(u=>{u.layer=this.layer,u.sourceLayer=this.layer}),h}),new l({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this.getWorker().then(e=>e.streamMessenger.disconnect()),this._doPause()}_doConnect(){this.getWorker().then(e=>e.streamMessenger.connect()),this.resume()}_doClear(){this.getWorker().then(e=>e.streamMessenger.clear()),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:r=>{this.set(r.propertyName,r.value)}}}};s([o()],n.prototype,"pipelineConnectionStatus",void 0),s([o()],n.prototype,"pipelineErrorString",void 0),s([o({readOnly:!0})],n.prototype,"connectionError",null),s([o({readOnly:!0})],n.prototype,"_streamConnectionStatus",null),n=s([m("esri.views.2d.layers.StreamLayerView2D")],n);const ie=n;export{ie as default};