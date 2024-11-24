const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editingSupport-CL5AHSE3.js","./index-BkgwewGo.js","./index-D6MmE7Y6.css","./infoFor3D-DsOdlPuA.js"])))=>i.map(i=>d[i]);
import{a6 as r,a7 as s,a8 as F,g1 as $,fH as w,ab as j,bI as O,s as f,bF as J,fr as N,aQ as R,dK as I,a5 as m,gS as P,ed as q,gT as T,gU as k,cd as D,eC as Z,ce as C,e0 as G,e1 as Q,e2 as z,e3 as L,f as E,bD as V,gV as g,gW as U,I as v,_ as W,gX as A,b9 as h,eK as B,ek as M,dJ as K,e4 as H,gY as X,gZ as Y,g_ as ee,e5 as te,g$ as re,h0 as se,ad as ie,h1 as oe,h2 as ne,h3 as ae,h4 as le,e6 as ue,h5 as de,ch as pe}from"./index-BkgwewGo.js";import{l as he}from"./clientSideDefaults-gciTtx_P.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";let u=class extends ${constructor(){super(...arguments),this.type="geojson",this.refresh=w(async e=>{await this.load();const{extent:t,timeExtent:o}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(o=>j.fromJSON(o))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(o=>({count:o.count,extent:O.fromJSON(o.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new f("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,o=[],n=[],l=[];if(e.addFeatures)for(const a of e.addFeatures)o.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)l.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:o,updates:l,deletes:n}).then(({extent:a,timeExtent:d,featureEditResults:c})=>(this.sourceJSON.extent=a,d&&(this.sourceJSON.timeInfo.timeExtent=[d.start,d.end]),this._createEditsResult(c)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new f("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,o=this._geometryForSerialization(e);return o?{geometry:o.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?J.fromExtent(t.extent):t}async _startWorker(e){this._connection=await N("GeoJSONSourceWorker",{strategy:R("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:o,hasZ:n,geometryType:l,objectIdField:a,url:d,timeInfo:c,customParameters:S}=this.layer,_=this.layer.originOf("spatialReference")==="defaults",x={url:d,customParameters:S,fields:t&&t.map(y=>y.toJSON()),geometryType:I.toJSON(l),hasZ:n,objectIdField:a,timeInfo:c?c.toJSON():null,spatialReference:_?null:o&&o.toJSON()},p=await this._connection.invoke("load",x,{signal:e});for(const y of p.warnings)m.getLogger(this.layer).warn("#load()",`$${y.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:y});p.featureErrors.length&&m.getLogger(this.layer).warn("#load()",`Encountered ${p.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:p.featureErrors}),this.sourceJSON=p.layerDefinition,this.capabilities=he(this.sourceJSON.hasZ,!0)}};r([s()],u.prototype,"capabilities",void 0),r([s()],u.prototype,"type",void 0),r([s({constructOnly:!0})],u.prototype,"layer",void 0),r([s()],u.prototype,"sourceJSON",void 0),u=r([F("esri.layers.graphics.sources.GeoJSONSource")],u);const b=de();let i=class extends P(q(T(k(D(Z(C(G(Q(z(L(pe))))))))))){constructor(e){super(e),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new u({layer:this}),this.spatialReference=E.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(V).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),U(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?v(this.url):null}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=v(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:o}=await W(()=>import("./editingSupport-CL5AHSE3.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);await this.load();const n=await o(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return A(this,e)}createQuery(){var l;const e=new h,t=(l=this.capabilities)==null?void 0:l.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:o,timeExtent:n}=this;return e.timeExtent=o!=null&&n!=null?n.offset(-o.value,o.unit):n||null,e}getFieldDomain(e,t){var o;return(o=this.getField(e))==null?void 0:o.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(h.from(e)||this.createQuery(),t)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(h.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(h.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(h.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};r([s({readOnly:!0,json:{read:!1,write:!1}})],i.prototype,"capabilities",null),r([s({type:String})],i.prototype,"copyright",void 0),r([s({readOnly:!0})],i.prototype,"createQueryVersion",null),r([s(B("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),r([s({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),r([s({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),r([s({type:String})],i.prototype,"displayField",void 0),r([s({type:Boolean})],i.prototype,"editingEnabled",void 0),r([s(M)],i.prototype,"elevationInfo",void 0),r([s({type:[K],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],i.prototype,"fields",void 0),r([s(b.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([s({type:O,json:{name:"extent"}})],i.prototype,"fullExtent",void 0),r([s({type:["point","polygon","polyline","multipoint"],json:{read:{reader:I.read}}})],i.prototype,"geometryType",void 0),r([s({type:Boolean})],i.prototype,"hasZ",void 0),r([s(H)],i.prototype,"id",void 0),r([s({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),r([s(X)],i.prototype,"labelsVisible",void 0),r([s({type:[Y],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ee},write:!0}})],i.prototype,"labelingInfo",void 0),r([s(te)],i.prototype,"legendEnabled",void 0),r([s({type:["show","hide"]})],i.prototype,"listMode",void 0),r([s({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],i.prototype,"objectIdField",void 0),r([s(re)],i.prototype,"opacity",void 0),r([s({type:["GeoJSON"]})],i.prototype,"operationalLayerType",void 0),r([s(b.outFields)],i.prototype,"outFields",void 0),r([s({readOnly:!0})],i.prototype,"parsedUrl",null),r([s(se)],i.prototype,"popupEnabled",void 0),r([s({type:ie,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([s({types:oe,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ne}}}})],i.prototype,"renderer",null),r([s(ae)],i.prototype,"screenSizePerspectiveEnabled",void 0),r([s({readOnly:!0})],i.prototype,"source",void 0),r([s({type:E})],i.prototype,"spatialReference",void 0),r([s({type:[le]})],i.prototype,"templates",void 0),r([s()],i.prototype,"title",void 0),r([s({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),r([s(ue)],i.prototype,"url",null),i=r([F("esri.layers.GeoJSONLayer")],i);const me=i;export{me as default};
