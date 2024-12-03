import{dv as K,fs as it,aB as y,iw as rt,eQ as nt,aG as P,c6 as z,c9 as X,e1 as I,mi as D,h6 as R,lx as A,ae as h,af as f,ai as H,ds as Y,mj as M,mk as at,ml as x,g2 as tt,c as ot,fo as et,hf as lt,bn as N,az as j,fN as ut,aI as b,al as ct,mm as U,mn as ht,fI as dt,mo as q,ct as w,mp as ft,mq as B,mr as st,hJ as pt,dJ as _t,aL as gt,a6 as S,dn as yt,cK as k,X as mt,f$ as Ft}from"./index-ZNyjz3YK.js";import{m as Ct}from"./FeatureStore-AgBflpc5.js";import{V as Et}from"./QueryEngine-DAq1eE7P.js";import{i as Tt,c as vt,g as St}from"./featureConversionUtils-DikS9Fwt.js";import{a as bt}from"./pbfQueryUtils-B4QaxXml.js";import{x as It,f as wt,c as Ot,S as xt}from"./query-Cl5FCfEw.js";import{E as $t}from"./ByteSizeUnit-BsxeN7wM.js";import{o as Rt}from"./BoundsStore-B-ABL_bG.js";import"./timeSupport-C1qLK7dz.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./queryUtils-CLZx-8VR.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-c506W91n.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./WhereClause-BOKctiCK.js";import"./TimeOnly-BvSst3l7.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-B0N-sOdp.js";import"./utils-BuowkRiS.js";import"./ClassBreaksDefinition-CopJGeEy.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./pbf-ByIwnspL.js";import"./PooledRBush-CGjLVCrW.js";function V(e=!1,t){if(e){const{elevationInfo:s,alignPointsInFeatures:i}=t;return new Pt(s,i)}return new At}let At=class{async alignCandidates(t,s,i){return t}notifyElevationSourceChange(){}};const Ht=1024;let Pt=class{constructor(t,s){this._elevationInfo=t,this._alignPointsInFeatures=s,this._alignmentsCache=new K(Ht),this._cacheVersion=0}async alignCandidates(t,s,i){const r=this._elevationInfo;return r==null||r.mode!=="absolute-height"||r.featureExpressionInfo?this._alignComputedElevationCandidates(t,s,i):(Dt(t,s,r),t)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}async _alignComputedElevationCandidates(t,s,i){const r=new Map;for(const _ of t)it(r,_.objectId,Mt).push(_);const[n,a,o]=this._prepareQuery(r,s),l=await this._alignPointsInFeatures(n,i);if(y(i),o!==this._cacheVersion)return this._alignComputedElevationCandidates(t,s,i);this._applyCacheAndResponse(n,l,a);const{drapedObjectIds:c,failedObjectIds:d}=l,g=[];for(const _ of t){const{objectId:m}=_;c.has(m)&&_.type==="edge"&&(_.draped=!0),d.has(m)||g.push(_)}return g}_prepareQuery(t,s){const i=[],r=[];for(const[n,a]of t){const o=[];for(const l of a)this._addToQueriesOrCachedResult(n,l.target,o,r),l.type==="edge"&&(this._addToQueriesOrCachedResult(n,l.start,o,r),this._addToQueriesOrCachedResult(n,l.end,o,r));o.length!==0&&i.push({objectId:n,points:o})}return[{spatialReference:s.toJSON(),pointsInFeatures:i},r,this._cacheVersion]}_addToQueriesOrCachedResult(t,s,i,r){const n=J(t,s),a=this._alignmentsCache.get(n);a==null?i.push(s):r.push(new zt(s,a))}_applyCacheAndResponse(t,{elevations:s,drapedObjectIds:i,failedObjectIds:r},n){for(const l of n)l.apply();let a=0;const o=this._alignmentsCache;for(const{objectId:l,points:c}of t.pointsInFeatures){if(r.has(l)){a+=c.length;continue}const d=!i.has(l);for(const g of c){const _=J(l,g),m=s[a++];g.z=m,d&&o.put(_,m,1)}}}};class zt{constructor(t,s){this.point=t,this.z=s}apply(){this.point.z=this.z}}function J(e,{x:t,y:s,z:i,spatialReference:r}){return`${e}-${t}-${s}-${i??0}}-wkid:${r==null?void 0:r.wkid}`}function Dt(e,t,s){const{offset:i,unit:r}=s;if(i==null)return;const n=rt(t),a=i*(nt(r??"meters")/n);for(const o of e)switch(o.type){case"edge":o.start.z+=a,o.end.z+=a;continue;case"vertex":o.target.z+=a;continue}}function Mt(){return[]}let Nt=class{filter(t,s){return s}notifyElevationSourceChange(){}},jt=class{filter(t,s){const{point:i,distance:r}=t,{z:n}=i;if(n==null||s.length===0)return s;const a=Vt(r),o=this._updateCandidatesTo3D(s,i,a).filter(Ut);return o.sort(Jt),o}_updateCandidatesTo3D(t,s,i){for(const r of t)switch(r.type){case"edge":qt(r,s,i);continue;case"vertex":kt(r,s,i);continue}return t}};function Ut(e){return e.distance<=1}function L(e=!1){return e?new jt:new Nt}function qt(e,t,{x:s,y:i,z:r}){const{start:n,end:a,target:o}=e;e.draped||Bt(o,t,n,a);const l=(t.x-o.x)/s,c=(t.y-o.y)/i,d=(t.z-o.z)/r;e.distance=Math.sqrt(l*l+c*c+d*d)}function Bt(e,t,s,i){const r=i.x-s.x,n=i.y-s.y,a=i.z-s.z,o=r*r+n*n+a*a,l=(t.x-s.x)*r+(t.y-s.y)*n+a*(t.z-s.z),c=Math.min(1,Math.max(0,l/o)),d=s.x+r*c,g=s.y+n*c,_=s.z+a*c;e.x=d,e.y=g,e.z=_}function kt(e,t,{x:s,y:i,z:r}){const{target:n}=e,a=(t.x-n.x)/s,o=(t.y-n.y)/i,l=(t.z-n.z)/r,c=Math.sqrt(a*a+o*o+l*l);e.distance=c}function Vt(e){return typeof e=="number"?{x:e,y:e,z:e}:e}function Jt(e,t){return e.distance-t.distance}function Q(e=!1,t){return e?new Gt(t):new Lt}class Lt{async fetch(){return[]}notifySymbologyChange(){}}const Qt=1024;let Gt=class{constructor(t){this._getSymbologyCandidates=t,this._candidatesCache=new K(Qt),this._cacheVersion=0}async fetch(t,s){if(t.length===0)return[];const i=[],r=[],n=this._candidatesCache;for(const g of t){const _=G(g),m=n.get(_);if(m)for(const T of m)r.push(P(T));else i.push(g),n.put(_,[],1)}if(i.length===0)return r;const a=this._cacheVersion,{candidates:o,sourceCandidateIndices:l}=await this._getSymbologyCandidates(i,s);if(y(s),a!==this._cacheVersion)return this.fetch(t,s);const c=[],{length:d}=o;for(let g=0;g<d;++g){const _=o[g],m=G(i[l[g]]),T=n.get(m);T.push(_),n.put(m,T,T.length),c.push(P(_))}return r.concat(c)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}};function G(e){switch(e.type){case"vertex":{const{objectId:t,target:s}=e,i=`${t}-vertex-${s.x}-${s.y}-${s.z??0}`;return z(i).toString()}case"edge":{const{objectId:t,start:s,end:i}=e,r=`${t}-edge-${s.x}-${s.y}-${s.z??0}-to-${i.x}-${i.y}-${i.z??0}`;return z(r).toString()}default:return""}}class Wt{constructor(t,s){this.data=t,this.resolution=s,this.state={type:u.CREATED},this.alive=!0}process(t){switch(this.state.type){case u.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case u.FETCH_COUNT:break;case u.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case u.FETCH_FEATURES:break;case u.FETCHED_FEATURES:this.state=this._goToDone(this.state,t);case u.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case u.CREATED:case u.FETCH_COUNT:return 0;case u.FETCHED_COUNT:return this.state.featureCount;case u.FETCH_FEATURES:return this.state.previous.featureCount;case u.FETCHED_FEATURES:return this.state.features.length;case u.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case u.CREATED:return"created";case u.FETCH_COUNT:return"fetch-count";case u.FETCHED_COUNT:return"fetched-count";case u.FETCH_FEATURES:return"fetch-features";case u.FETCHED_FEATURES:return"fetched-features";case u.DONE:return"done"}}_gotoFetchCount(t,s){return{type:u.FETCH_COUNT,previous:t,task:I(async i=>{const r=await D(s.fetchCount(this,i));this.state.type===u.FETCH_COUNT&&(this.state=Zt(this.state,r.ok?r.value:1/0))})}}_gotoFetchFeatures(t,s){return{type:u.FETCH_FEATURES,previous:t,task:I(async i=>{const r=await D(s.fetchFeatures(this,t.featureCount,i));this.state.type===u.FETCH_FEATURES&&(this.state=Kt(this.state,r.ok?r.value:[]))})}}_goToDone(t,s){return s.finish(this,t.features),{type:u.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:u.CREATED},t.type){case u.CREATED:case u.FETCHED_COUNT:case u.FETCHED_FEATURES:case u.DONE:break;case u.FETCH_COUNT:case u.FETCH_FEATURES:t.task.abort()}}intersects(t){return t==null||!this.data.extent||(R(t,W),A(this.data.extent,W))}}function Zt(e,t){return{type:u.FETCHED_COUNT,featureCount:t,previous:e}}function Kt(e,t){return{type:u.FETCHED_FEATURES,previous:e,features:t}}var u;(function(e){e[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE"})(u||(u={}));const W=X();let p=class extends Y{get _minimumVerticesPerFeature(){var t;switch((t=this.store)==null?void 0:t.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}get _mandatoryOutFields(){const t=new Set;return this.objectIdField&&t.add(this.objectIdField),this.globalIdField&&t.add(this.globalIdField),t}set outFields(t){const s=this._get("outFields"),i=M(t,this._mandatoryOutFields);at(i,s)||(this._set("outFields",i),x(i,s)||this.refresh())}get outFields(){return this._get("outFields")??this._mandatoryOutFields}set filter(t){const s=this._get("filter"),i=this._filterProperties(t);JSON.stringify(s)!==JSON.stringify(i)&&this._set("filter",i)}set customParameters(t){const s=this._get("customParameters");JSON.stringify(s)!==JSON.stringify(t)&&this._set("customParameters",t)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(t){const s=this._get("tileInfo");s!==t&&(t!=null&&s!=null&&JSON.stringify(t)===JSON.stringify(s)||(this._set("tileInfo",t),this.store.tileInfo=t))}set tileSize(t){this._get("tileSize")!==t&&this._set("tileSize",t)}get updating(){return this._updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(t){super(t),this.suspended=!0,this._historicMoment=null,this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._updatingHandles=new tt}initialize(){this._initializeFetchExtent(),this._updatingHandles.add(()=>this._configuration,()=>this.refresh()),this._updatingHandles.add(()=>this.tilesOfInterest,(t,s)=>{ot(t,s,({id:i},{id:r})=>i===r)||this._process()},et),this.addHandles(lt(()=>!this.suspended,()=>this._process()))}destroy(){this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._updatingHandles.destroy()}refresh(){this.store.refresh(),this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._process()}async handleEdits(t){if(t.historicMoment&&(this._historicMoment=t.historicMoment),!t.addedFeatures.length&&!t.updatedFeatures.length&&!t.deletedFeatures.length)return;for(const r of this._pendingTiles.values())r.reset();const s={...t,deletedFeatures:t.deletedFeatures.map(({objectId:r,globalId:n})=>r&&r!==-1?r:this._lookupObjectIdByGlobalId(n))},i=I(async r=>{try{await this.store.processEdits(s,(n,a)=>this._queryFeaturesById(n,a),r),this._processPendingTiles()}catch(n){N(n),j.getLogger(this).warn("Failed to apply edits",n)}});this.addHandles(i),await this._updatingHandles.addPromise(i.promise)}setHistoricMoment(t){var s;(t==null?void 0:t.getTime())!==((s=this._historicMoment)==null?void 0:s.getTime())&&(this._historicMoment=t,this.refresh())}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!ut(this.url))return;const t=I(async s=>{var i;try{const r=await It(this.url,new b({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:s});this.store.extent=ct.fromJSON((i=r.data)==null?void 0:i.extent)}catch(r){N(r),j.getLogger(this).warn("Failed to fetch data extent",r)}});this._updatingHandles.addPromise(t.promise.then(()=>this._process())),this.addHandles(t)}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(t=>t.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const t of this._pendingTiles.values())t.alive=!1}_createPendingTiles(){if(this.suspended)return;const t=this._collectMissingTilesInfo();if(this._setAvailability(t==null?1:t.coveredArea/t.fullArea),t!=null)for(const{data:s,resolution:i}of t.missingTiles){const r=this._pendingTiles.get(s.id);r?(r.resolution=i,r.alive=!0):this._createPendingTile(s,i)}}_collectMissingTilesInfo(){let t=null;for(let s=this.tilesOfInterest.length-1;s>=0;s--){const i=this.tilesOfInterest[s],r=this.store.process(i,(n,a)=>this._verifyTileComplexity(n,a),this.outFields);t==null?t=r:t.prepend(r)}return t}_deletePendingTiles(){for(const t of this._pendingTiles.values())t.alive||this._deletePendingTile(t)}_processPendingTiles(){const t={fetchCount:(s,i)=>this._fetchCount(s,i),fetchFeatures:(s,i,r)=>this._fetchFeatures(s,i,r),finish:(s,i)=>this._finishPendingTile(s,i),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(t))for(const s of this._pendingTiles.values())this._verifyTileComplexity(this.store.getFeatureCount(s.data),s.resolution)&&this._updatingHandles.addPromise(s.process(t))}_verifyTileComplexity(t,s){return this._verifyVertexComplexity(t)&&this._verifyFeatureDensity(t,s)}_verifyVertexComplexity(t){return t*this._minimumVerticesPerFeature<Yt}_verifyFeatureDensity(t,s){if(this.tileInfo==null)return!1;const i=this.tileSize*s;return t*(te/(i*i))<ee}_ensureFetchAllCounts(t){let s=!0;for(const i of this._pendingTiles.values())i.state.type<u.FETCHED_COUNT&&this._updatingHandles.addPromise(i.process(t)),i.state.type<=u.FETCH_COUNT&&(s=!1);return s}_finishPendingTile(t,s){this.store.add(t.data,s),this._deletePendingTile(t),this._updateAvailability()}_updateAvailability(){const t=this._collectMissingTilesInfo();this._setAvailability(t==null?1:t.coveredArea/t.fullArea)}_setAvailability(t){this._set("availability",t)}_createPendingTile(t,s){const i=new Wt(t,s);return this._pendingTiles.set(t.id,i),i}_deletePendingTile(t){t.reset(),this._pendingTiles.delete(t.data.id)}async _fetchCount(t,s){return this.store.fetchCount(t.data,this.url,this._createCountQuery(t),{query:this.customParameters,timeout:O,signal:s})}async _fetchFeatures(t,s,i){let r=0;const n=[];let a=0,o=s;for(;;){const l=this._createFeaturesQuery(t),c=this._setPagingParameters(l,r,o),{features:d,exceededTransferLimit:g}=await this._queryFeatures(l,i);c&&(r+=l.num),a+=d.length;for(const _ of d)n.push(_);if(o=s-a,!c||!g||o<=0)return n}}_filterProperties(t){return t==null?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:t.where||"1=1",timeExtent:t.timeExtent,gdbVersion:t.gdbVersion}}_lookupObjectIdByGlobalId(t){const s=this.globalIdField,i=this.objectIdField;if(s==null)throw new Error("Expected globalIdField to be defined");let r=null;const n=t&&U(t);if(this.store.featureStore.forEach(a=>{n===U(a.attributes[s])&&(r=a.objectId??a.attributes[i])}),r==null)throw new Error(`Expected to find a feature with globalId ${t}`);return r}_queryFeaturesById(t,s){const i=this._createFeaturesQuery();return i.objectIds=t,this._queryFeatures(i,s)}_queryFeatures(t,s){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(t,s):this._queryFeaturesJSON(t,s)}async _queryFeaturesPBF(t,s){const{sourceSpatialReference:i}=this,{data:r}=await wt(this.url,t,new bt({sourceSpatialReference:i}),{query:this._configuration.customParameters,timeout:O,signal:s});return Tt(r)}async _queryFeaturesJSON(t,s){const{sourceSpatialReference:i}=this,{data:r}=await Ot(this.url,t,i,{query:this._configuration.customParameters,timeout:O,signal:s});return vt(r,this.objectIdField)}_createCountQuery(t){const s=this._createBaseQuery(t);return this.capabilities.query.supportsCacheHint&&(s.cacheHint=!0),s}_createFeaturesQuery(t=null){var n;const s=this._createBaseQuery(t),i=(t==null?void 0:t.data)!=null?this.store.getAttributesForTile((n=t==null?void 0:t.data)==null?void 0:n.id):null,r=M(ht(this.outFields,i??new Set),this._mandatoryOutFields);return s.outFields=Array.from(r),s.returnGeometry=!0,t!=null&&(this.capabilities.query.supportsResultType?s.resultType="tile":this.capabilities.query.supportsCacheHint&&(s.cacheHint=!0)),s}_createBaseQuery(t){const s=new b({returnZ:this.hasZ,returnM:!1,historicMoment:this._historicMoment,geometry:this.tileInfo!=null&&t!=null?dt(t.data.extent,this.tileInfo.spatialReference):void 0}),i=this._configuration.filter;return i!=null&&(s.where=i.where,s.gdbVersion=i.gdbVersion,s.timeExtent=i.timeExtent),s.outSpatialReference=this.spatialReference,s}_setPagingParameters(t,s,i){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:r,supportsCacheHint:n,tileMaxRecordCount:a,maxRecordCount:o,supportsResultType:l}=this.capabilities.query,c=r?b.MAX_MAX_RECORD_COUNT_FACTOR:1,d=c*((l||n)&&a?a:o||Xt);return t.start=s,r?(t.maxRecordCountFactor=Math.min(c,Math.ceil(i/d)),t.num=Math.min(i,t.maxRecordCountFactor*d)):t.num=Math.min(i,d),!0}};h([f({constructOnly:!0})],p.prototype,"url",void 0),h([f({constructOnly:!0})],p.prototype,"objectIdField",void 0),h([f({constructOnly:!0})],p.prototype,"globalIdField",void 0),h([f({constructOnly:!0})],p.prototype,"capabilities",void 0),h([f({constructOnly:!0})],p.prototype,"sourceSpatialReference",void 0),h([f({constructOnly:!0})],p.prototype,"spatialReference",void 0),h([f({constructOnly:!0})],p.prototype,"store",void 0),h([f({readOnly:!0})],p.prototype,"_minimumVerticesPerFeature",null),h([f()],p.prototype,"_mandatoryOutFields",null),h([f()],p.prototype,"outFields",null),h([f()],p.prototype,"suspended",void 0),h([f()],p.prototype,"_historicMoment",void 0),h([f()],p.prototype,"filter",null),h([f()],p.prototype,"customParameters",null),h([f({readOnly:!0})],p.prototype,"_configuration",null),h([f()],p.prototype,"tileInfo",null),h([f()],p.prototype,"tileSize",null),h([f()],p.prototype,"tilesOfInterest",void 0),h([f({readOnly:!0})],p.prototype,"updating",null),h([f({readOnly:!0})],p.prototype,"availability",void 0),h([f()],p.prototype,"hasZ",null),p=h([H("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],p);const Xt=2e3,O=6e5,Yt=1e6,te=25,ee=1;class se{constructor(){this._store=new Map,this._byteSize=0}set(t,s){this.delete(t),this._store.set(t,s),this._byteSize+=s.byteSize}delete(t){const s=this._store.get(t);return!!this._store.delete(t)&&(s!=null&&(this._byteSize-=s.byteSize),!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,s){for(const[i,r]of this._store){if(this._byteSize<=t)break;this.delete(i),s(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const s=this._store.get(t);s&&(this._store.delete(t),this._store.set(t,s))}}let C=class extends Y{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*$t.MEGABYTES,this._tileBounds=new Rt,this._tiles=new se,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=X()}add(e,t){var r;for(const n of t)this._referenceFeature(n.objectId);const s=this.featureStore.upsertMany(t),i=s.map(n=>new Set(Object.keys(n.attributes))).reduce((n,a)=>q(n,a),new Set(Object.keys(((r=s[0])==null?void 0:r.attributes)??[])));this._addTileStorage(e,new Set(s.map(n=>n.objectId)),re(s),i),this._tiles.applyByteSizeLimit(this.maximumByteSize,n=>this._removeTileStorage(n))}getAttributesForTile(e){var t;return e?(t=this._tiles.get(e))==null?void 0:t.attributeKeys:null}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(e,t,s){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,s)}_addTileStorage(e,t,s,i){const r=e.id;this._tiles.set(r,new oe(e,t,s,i)),this._tileBounds.set(r,e.extent),this._tileFeatureCounts.set(r,t.size)}_remove({id:e}){const t=this._tiles.get(e);t&&this._removeTileStorage(t)}_removeTileStorage(e){const t=[];for(const i of e.objectIds)this._unreferenceFeature(i)===E.REMOVED&&t.push(i);this.featureStore.removeManyById(t);const s=e.data.id;this._tiles.delete(s),this._tileBounds.delete(s)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const t of this._tiles.values()){for(const s of e)t.objectIds.delete(s);this._tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this._refCounts.delete(t)}async _processEditsRefetch(e,t,s){if(!e.length)return;const i=(await t(e,s)).features,{hasZ:r,hasM:n}=this.featureStore;for(const a of i){const o=St(this._tmpBoundingRect,a.geometry,r,n);o!=null&&this._tileBounds.forEachInBounds(o,l=>{const c=this._tiles.get(l);this.featureStore.add(a);const d=a.objectId;c.objectIds.has(d)||(c.objectIds.add(d),this._referenceFeature(d),this._tileFeatureCounts.set(c.data.id,c.objectIds.size))})}}process(e,t=()=>!0,s){if(this.tileInfo==null||!e.extent||this.extent!=null&&!A(R(this.extent,this._tmpBoundingRect),e.extent))return new $(e);const i=this.getAttributesForTile(e.id);if(x(s,i))return new $(e);const r=this._createTileTree(e,this.tileInfo);return this._simplify(r,t,null,0,1),this._collectMissingTiles(e,r,this.tileInfo,s)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:e})=>({data:e,featureCount:this._tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){return this._tileFeatureCounts.get(e.id)??0}async fetchCount(e,t,s,i){const r=this._tileFeatureCounts.get(e.id);if(r!=null)return r;const n=await xt(t,s,i);return this._tileFeatureCounts.set(e.id,n.data.count),n.data.count}_createTileTree(e,t){const s=new Z(e.level,e.row,e.col);return t.updateTileInfo(s,w.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(e.extent,i=>{var n;const r=(n=this._tiles.get(i))==null?void 0:n.data;r&&ie(e,r)&&this._populateChildren(s,r,t,this._tileFeatureCounts.get(r.id)||0)}),s}_populateChildren(e,t,s,i){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,a=t.col>>r,o=e.row<<1,l=a-(e.col<<1)+(n-o<<1),c=e.children[l];if(c!=null)this._populateChildren(c,t,s,i);else{const d=new Z(e.level+1,n,a);s.updateTileInfo(d,w.ExtrapolateOptions.POWER_OF_TWO),e.children[l]=d,this._populateChildren(d,t,s,i)}}_simplify(e,t,s,i,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this._remove(e),s!=null&&(s.children[i]=null),n);const a=r/2,o=a*a;let l=0;for(let c=0;c<e.children.length;c++){const d=e.children[c];l+=d!=null?this._simplify(d,t,e,c,a):o}return l===0?this._mergeChildren(e):1-l/n<ue&&(this._purge(e),s!=null&&(s.children[i]=null),l=n),l}_mergeChildren(e){const t=new Set;let s,i=0;this._forEachLeaf(e,r=>{const n=this._tiles.get(r.id);if(n){s=s?q(s,n.attributeKeys):new Set(n.attributeKeys),i+=n.byteSize;for(const a of n.objectIds)t.has(a)||(t.add(a),this._referenceFeature(a));this._remove(r)}}),this._addTileStorage(e,t,i,s??new Set),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this._tileFeatureCounts.set(e.id,t.size)}_forEachLeaf(e,t){for(const s of e.children)s!=null&&(s.isLeaf?t(s):this._forEachLeaf(s,t))}_purge(e){if(e!=null)if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++){const s=e.children[t];this._purge(s),e.children[t]=null}}_collectMissingTiles(e,t,s,i){const r=new le(s,e,this.extent);return this._collectMissingTilesRecurse(t,r,1,i),r.info}_collectMissingTilesRecurse(e,t,s,i){const r=this.getAttributesForTile(e.id),n=r&&!x(i,r);if(n&&t.addMissing(e.level,e.row,e.col,s),e.isLeaf)return;if(!e.hasChildren)return void(n||t.addMissing(e.level,e.row,e.col,s));const a=s/2;for(let o=0;o<e.children.length;o++){const l=e.children[o];l==null?t.addMissing(e.level+1,(e.row<<1)+((2&o)>>1),(e.col<<1)+(1&o),a):this._collectMissingTilesRecurse(l,t,a,i)}}_referenceFeature(e){const t=(this._refCounts.get(e)||0)+1;return this._refCounts.set(e,t),t===1?E.ADDED:E.UNCHANGED}_unreferenceFeature(e){const t=(this._refCounts.get(e)||0)-1;return t===0?(this._refCounts.delete(e),E.REMOVED):(t>0&&this._refCounts.set(e,t),E.UNCHANGED)}get test(){}};function ie(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const s=e.level<t.level,i=s?e:t,r=s?t:e,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}function re(e){return e.reduce((t,s)=>t+ne(s),0)}function ne(e){return 32+ae(e.geometry)+ft(e.attributes)}function ae(e){if(e==null)return 0;const t=B(e.lengths,4);return 32+B(e.coords,8)+t}h([f({constructOnly:!0})],C.prototype,"featureStore",void 0),h([f()],C.prototype,"tileInfo",void 0),h([f()],C.prototype,"extent",void 0),h([f()],C.prototype,"maximumByteSize",void 0),C=h([H("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],C);let oe=class{constructor(t,s,i,r){this.data=t,this.objectIds=s,this.byteSize=i,this.attributeKeys=r}};class Z{constructor(t,s,i){this.level=t,this.row=s,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(this.children[0]!=null||this.children[1]!=null||this.children[2]!=null||this.children[3]!=null)}}let $=class{constructor(t,s=[]){this.missingTiles=s,this.fullArea=0,this.coveredArea=0,this.fullArea=st(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}},le=class{constructor(t,s,i){this._tileInfo=t,this._extent=null,this.info=new $(s),i!=null&&(this._extent=R(i))}addMissing(t,s,i,r){const n=new pt(null,t,s,i);this._tileInfo.updateTileInfo(n,w.ExtrapolateOptions.POWER_OF_TWO),n.extent==null||this._extent!=null&&!A(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=st(n.extent))}};const ue=.18751;var E;(function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED"})(E||(E={}));let v=class extends _t.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=gt(),this._elevationAligner=V(),this._elevationFilter=L(),this._symbologyCandidatesFetcher=Q(),this._updatingHandles=new tt,this._alignPointsInFeatures=async(e,t)=>{const s={query:e},i=await this.remoteClient.invoke("alignElevation",s,{signal:t});return y(t),i},this._getSymbologyCandidates=async(e,t)=>{const s={candidates:e,spatialReference:this._spatialReference.toJSON()},i=await this.remoteClient.invoke("getSymbologyCandidates",s,{signal:t});return y(t),i}}get updating(){return this._isInitializing||this._updatingHandles.updating||this._featureFetcher.updating}destroy(){var e,t,s;(e=this._featureFetcher)==null||e.destroy(),(t=this._queryEngine)==null||t.destroy(),(s=this._featureStore)==null||s.clear()}async setup(e){if(this.destroyed)return{result:{}};const{geometryType:t,objectIdField:s,timeInfo:i,fieldsIndex:r}=e.serviceInfo,{hasZ:n}=e,a=S.fromJSON(e.spatialReference);this._spatialReference=a,this._featureStore=new Ct({...e.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new Et({spatialReference:e.spatialReference,featureStore:this._featureStore,geometryType:t,fieldsIndex:r,hasZ:n,hasM:!1,objectIdField:s,timeInfo:i}),this._featureFetcher=new p({store:new C({featureStore:this._featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:a,sourceSpatialReference:S.fromJSON(e.serviceInfo.spatialReference),customParameters:e.configuration.customParameters});const o=e.configuration.viewType==="3d";return this._elevationAligner=V(o,{elevationInfo:e.elevationInfo!=null?yt.fromJSON(e.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures}),this._elevationFilter=L(o),this.addHandles([k(()=>this._featureFetcher.availability,l=>this.emit("notify-availability",{availability:l}),et),k(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(e),F}async setSuspended(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(t),this._featureFetcher.suspended=e,F}async updateOutFields(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(t),this._featureFetcher.outFields=new Set(e??[]),F}async fetchCandidates(e,t){await this._whenSetup.promise,y(t);const s=ce(e),i=t==null?void 0:t.signal,r=await this._queryEngine.executeQueryForSnapping(s,i);y(i);const n=await this._elevationAligner.alignCandidates(r.candidates,S.fromJSON(e.point.spatialReference)??S.WGS84,i);y(i);const a=await this._symbologyCandidatesFetcher.fetch(n,i);y(i);const o=a.length===0?n:n.concat(a);return{result:{candidates:this._elevationFilter.filter(s,o)}}}async updateTiles(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(t),this._featureFetcher.tileSize=e.tileSize,this._featureFetcher.tilesOfInterest=e.tiles,this._featureFetcher.tileInfo=e.tileInfo!=null?w.fromJSON(e.tileInfo):null,F}async refresh(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(t),this._featureFetcher.refresh(),F}async whenNotUpdating(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(t),await mt(()=>!this.updating,t),y(t),F}async getDebugInfo(e,t){return y(t),{result:this._featureFetcher.debugInfo}}async handleEdits(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(t),await this._updatingHandles.addPromise(this._featureFetcher.handleEdits(e)),y(t),F}async setHistoricMoment(e,t){return this._featureFetcher.setHistoricMoment(e.moment),F}async notifyElevationSourceChange(e,t){return this._elevationAligner.notifyElevationSourceChange(),F}async notifySymbologyChange(e,t){return this._symbologyCandidatesFetcher.notifySymbologyChange(),F}async setSymbologySnappingSupported(e){return this._symbologyCandidatesFetcher=Q(e,this._getSymbologyCandidates),F}_updateFeatureFetcherConfiguration(e){this._featureFetcher.filter=e.filter!=null?b.fromJSON(e.filter):null,this._featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};h([f({readOnly:!0})],v.prototype,"updating",null),h([f()],v.prototype,"_isInitializing",void 0),v=h([H("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],v);const ke=v;function ce(e){if(!e.filter)return{...e,query:{where:"1=1"}};const{distance:t,units:s,spatialRel:i,where:r,timeExtent:n,objectIds:a}=e.filter,o={geometry:e.filter.geometry?Ft(e.filter.geometry):void 0,distance:t,units:s,spatialRel:i,timeExtent:n,objectIds:a,where:r??"1=1"};return{...e,query:o}}const F={result:{}};export{ke as default};
