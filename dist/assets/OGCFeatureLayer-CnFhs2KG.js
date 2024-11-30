import{a6 as s,a7 as o,a8 as j,g1 as L,ab as N,cD as R,f as C,hf as J,s as I,ee as U,ed as Z,gT as k,gU as z,cd as H,gS as V,eC as W,ce as K,e1 as X,e2 as Y,e0 as ee,e3 as te,gV as F,gX as se,b9 as O,gW as re,ek as oe,dJ as ie,bI as pe,dK as $,gZ as ne,g_ as ae,gY as le,e5 as ue,h0 as de,ad as ce,h1 as ye,h2 as he,h3 as fe,hg as me,e6 as ge,h5 as ve,ch as Se}from"./index-BkgwewGo.js";import{R as Ce,x as D,C as T,P as be,O as we,N as xe,q as Re,v as Ie,k as Fe}from"./ogcFeatureUtils-WD9zJBST.js";import"./featureConversionUtils-Cyq484pm.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./geojson-D4eVLuIa.js";import"./date-M6n_RqpC.js";import"./clientSideDefaults-gciTtx_P.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./sourceUtils-CQO3Z8RG.js";let d=class extends L{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:i,supportedCrs:p},layer:{apiKey:n,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:n,customParameters:l},spatialReference:i,supportedCrs:p}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(i=>N.fromJSON(i))}queryFeaturesJSON(e,t={}){const i=this.getSource();return this.load(t).then(()=>Ce(i,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const i=new RegExp(`^${R(t)}$`,"i");return e.conformsTo.some(p=>i.test(p))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){var i,p,n,l,a;const t=(i=e==null?void 0:e.components)==null?void 0:i.parameters;return((n=(p=t==null?void 0:t.limit)==null?void 0:p.schema)==null?void 0:n.maximum)??((a=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:a.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??D,i=T(t);return i==null?C.WGS84:new C({wkid:i})}_getSupportedSpatialReferences(e,t){const i="#/crs",p=e.crs??[D],n=p.includes(i)?p.filter(a=>a!==i).concat(t.crs??[]):p,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const i=t!=null?t.signal:null,{apiKey:p,collectionId:n,customParameters:l,fields:a,geometryType:h,hasZ:f,objectIdField:P,timeInfo:m,url:_}=e,E={fields:a==null?void 0:a.map(u=>u.toJSON()),geometryType:J.toJSON(h),hasZ:f??!1,objectIdField:P,timeInfo:m==null?void 0:m.toJSON()},c={apiKey:p,customParameters:l,signal:i},g=await be(_,c),[b,w]=await Promise.all([we(g,c),xe(g,c)]);if(!this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new I("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=w.collections.find(({id:u})=>u===n);if(!y)throw new I("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const q=this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Re(g,c):null,x=await Ie(y,E,c),A=this._getMaxRecordCount(q),G=this._getCapabilities(x.hasZ,A),M=this._getStorageSpatialReference(y).toJSON(),Q=this._getSupportedSpatialReferences(y,w),B=new RegExp(`^${R(Fe)}`,"i"),v={};for(const u of Q){const S=T(u);S!=null&&(v[S]||(v[S]=u.replace(B,"")))}this.featureDefinition={capabilities:G,collection:y,layerDefinition:x,spatialReference:M,supportedCrs:v}}};s([o()],d.prototype,"featureDefinition",void 0),s([o({constructOnly:!0})],d.prototype,"layer",void 0),s([o()],d.prototype,"type",void 0),d=s([j("esri.layers.graphics.sources.OGCFeatureSource")],d);const Oe=ve();let r=class extends U(Z(k(z(H(V(W(K(X(Y(ee(te(Se)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){F(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return se(this,e)}createQuery(){return new O}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let i,p=!1;const n=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return l!=null&&this.types&&(p=this.types.some(h=>{var f;return h.id==l&&(i=(f=h.domains)==null?void 0:f[e],(i==null?void 0:i.type)==="inherited"&&(i=this._getLayerDomain(e)),!0)})),p||i||(i=this._getLayerDomain(e)),i}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(O.from(e)||this.createQuery(),t)).then(i=>{var p;return(p=i==null?void 0:i.features)==null||p.forEach(n=>{n.layer=n.sourceLayer=this}),i})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),F(this.renderer,this.fieldsIndex),re(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};s([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],r.prototype,"capabilities",void 0),s([o({type:String,json:{write:!0}})],r.prototype,"collectionId",void 0),s([o({type:String})],r.prototype,"copyright",void 0),s([o({readOnly:!0})],r.prototype,"defaultPopupTemplate",null),s([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],r.prototype,"description",void 0),s([o({type:String})],r.prototype,"displayField",void 0),s([o({type:Number})],r.prototype,"effectiveMaxRecordCount",null),s([o(oe)],r.prototype,"elevationInfo",void 0),s([o({type:[ie],json:{origins:{service:{name:"layerDefinition.fields"}}}})],r.prototype,"fields",void 0),s([o(Oe.fieldsIndex)],r.prototype,"fieldsIndex",void 0),s([o({readOnly:!0,type:pe,json:{origins:{service:{name:"layerDefinition.extent"}}}})],r.prototype,"fullExtent",void 0),s([o({type:$.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:$.read}}}}})],r.prototype,"geometryType",void 0),s([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],r.prototype,"hasZ",void 0),s([o({type:Boolean,readOnly:!0})],r.prototype,"isTable",null),s([o({type:[ne],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ae},write:!0}}}})],r.prototype,"labelingInfo",void 0),s([o(le)],r.prototype,"labelsVisible",void 0),s([o(ue)],r.prototype,"legendEnabled",void 0),s([o({type:Number})],r.prototype,"maxRecordCount",void 0),s([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],r.prototype,"objectIdField",void 0),s([o({type:["OGCFeatureLayer"]})],r.prototype,"operationalLayerType",void 0),s([o(de)],r.prototype,"popupEnabled",void 0),s([o({type:ce,json:{name:"popupInfo",write:!0}})],r.prototype,"popupTemplate",void 0),s([o({types:ye,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:he,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],r.prototype,"renderer",null),s([o(fe)],r.prototype,"screenSizePerspectiveEnabled",void 0),s([o({readOnly:!0})],r.prototype,"source",void 0),s([o({readOnly:!0,type:C,json:{origins:{service:{read:!0}}}})],r.prototype,"spatialReference",void 0),s([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],r.prototype,"title",void 0),s([o({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),s([o({type:String,readOnly:!0})],r.prototype,"typeIdField",void 0),s([o({type:[me]})],r.prototype,"types",void 0),s([o(ge)],r.prototype,"url",void 0),r=s([j("esri.layers.OGCFeatureLayer")],r);const Qe=r;export{Qe as default};