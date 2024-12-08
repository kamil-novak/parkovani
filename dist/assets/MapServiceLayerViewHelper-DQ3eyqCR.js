const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CDF62Mj_.js","./index-BIMcLEjD.css"])))=>i.map(i=>d[i]);
import{eb as X,fB as Y,fA as ee,lL as te,lM as R,h7 as J,a7 as n,a8 as p,gJ as re,dm as ie,af as Q,ae as z,$ as se,fC as oe,ab as G,ac as B,ad as ae,aA as k,cn as ne,ig as le,ce as pe,ay as ue,cg as ye,cf as ce,al as he,c6 as q,dl as de,f_ as fe,cy as me,s as A,az as ge,F as T,f5 as M,_ as we,fw as be,cN as ve,ap as xe,lN as $e,ak as L,lO as Se,dO as Fe}from"./index-CDF62Mj_.js";import{H as Oe}from"./languageUtils-Dp9VrIzp.js";import{o as U}from"./drapedUtils-DDUeuG1n.js";import{n as je,p as Ee}from"./popupUtils-DZ7_mYle.js";function Ne(t,e){const{dpi:i,gdbVersion:o,geometry:r,geometryPrecision:a,height:s,historicMoment:c,layerOption:h,mapExtent:l,maxAllowableOffset:u,returnFieldName:y,returnGeometry:m,returnUnformattedValues:x,returnZ:$,spatialReference:O,timeExtent:f,tolerance:F,width:w}=t.toJSON(),{dynamicLayers:g,layerDefs:b,layerIds:N}=_e(t),_=(e==null?void 0:e.geometry)!=null?e.geometry:null,v={historicMoment:c,geometryPrecision:a,maxAllowableOffset:u,returnFieldName:y,returnGeometry:m,returnUnformattedValues:x,returnZ:$,tolerance:F},j=(_==null?void 0:_.toJSON())||r;v.imageDisplay=`${w},${s},${i}`,o&&(v.gdbVersion=o),j&&(delete j.spatialReference,v.geometry=JSON.stringify(j),v.geometryType=X(j));const V=O??(j==null?void 0:j.spatialReference)??(l==null?void 0:l.spatialReference);if(V&&(v.sr=Y(V)),v.time=f?[f.start,f.end].join(","):null,l){const{xmin:Z,ymin:C,xmax:W,ymax:K}=l;v.mapExtent=`${Z},${C},${W},${K}`}return b&&(v.layerDefs=b),g&&!b&&(v.dynamicLayers=g),v.layers=h==="popup"?"visible":h,N&&!g&&(v.layers+=`:${N.join(",")}`),v}function _e(t){var $,O;const{mapExtent:e,floors:i,width:o,sublayers:r,layerIds:a,layerOption:s,gdbVersion:c}=t,h=(O=($=r==null?void 0:r.find(f=>f.layer!=null))==null?void 0:$.layer)==null?void 0:O.serviceSublayers,l=s==="popup",u={},y=ee({extent:e,width:o,spatialReference:e==null?void 0:e.spatialReference}),m=[],x=f=>{const F=y===0,w=f.minScale===0||y<=f.minScale,g=f.maxScale===0||y>=f.maxScale;if(f.visible&&(F||w&&g))if(f.sublayers)f.sublayers.forEach(x);else{if((a==null?void 0:a.includes(f.id))===!1||l&&(!f.popupTemplate||!f.popupEnabled))return;m.unshift(f)}};if(r==null||r.forEach(x),r&&!m.length)u.layerIds=[];else{const f=te(m,h,c),F=m.map(w=>{const g=R(i,w);return w.toExportImageJSON(g)});if(f)u.dynamicLayers=JSON.stringify(F);else{if(r){let g=m.map(({id:b})=>b);a&&(g=g.filter(b=>a.includes(b))),u.layerIds=g}else a!=null&&a.length&&(u.layerIds=a);const w=Ie(i,m);if(w!=null&&w.length){const g={};for(const b of w)b.definitionExpression&&(g[b.id]=b.definitionExpression);Object.keys(g).length&&(u.layerDefs=JSON.stringify(g))}}}return u}function Ie(t,e){const i=!!(t!=null&&t.length),o=e.filter(r=>r.definitionExpression!=null||i&&r.floorInfo!=null);return o.length?o.map(r=>{const a=R(t,r),s=J(a,r.definitionExpression);return{id:r.id,definitionExpression:s??void 0}}):null}var P;let d=P=class extends B{static from(t){return ae(P,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};n([p({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),n([p()],d.prototype,"floors",void 0),n([p({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),n([p({types:re,json:{read:ie,write:!0}})],d.prototype,"geometry",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"height",void 0),n([p({type:Date})],d.prototype,"historicMoment",void 0),n([Q("historicMoment")],d.prototype,"writeHistoricMoment",null),n([p({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),n([p({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),n([p({type:z,json:{write:!0}})],d.prototype,"mapExtent",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),n([p({type:se,json:{write:!0}})],d.prototype,"spatialReference",void 0),n([p()],d.prototype,"sublayers",void 0),n([p({type:oe,json:{write:!0}})],d.prototype,"timeExtent",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=P=n([G("esri.rest.support.IdentifyParameters")],d);const D=d;let S=class extends B{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return k.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:i,geometry:o}=t;i&&(e.attributes={...i}),o!=null&&(e.geometry=o.toJSON(),e.geometryType=le.toJSON(o.type))}};n([p({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),n([p({type:k})],S.prototype,"feature",void 0),n([ne("feature",["attributes","geometry"])],S.prototype,"readFeature",null),n([Q("feature")],S.prototype,"writeFeature",null),n([p({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),n([p({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=n([G("esri.rest.support.IdentifyResult")],S);const Pe=S;async function Re(t,e,i){const o=(e=Ve(e)).geometry?[e.geometry]:[],r=pe(t);return r.path+="/identify",ue(o).then(a=>{const s=Ne(e,{geometry:a==null?void 0:a[0]}),c=ye({...r.query,f:"json",...s}),h=ce(c,i);return he(r.path,h).then(Ge).then(l=>Ae(l,e.sublayers))})}function Ge(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(i=>Pe.fromJSON(i)),e}function Ve(t){return t=D.from(t)}function Ae(t,e){if(!(e!=null&&e.length))return t;const i=new Map;function o(r){i.set(r.id,r),r.sublayers&&r.sublayers.forEach(o)}e.forEach(o);for(const r of t.results)r.feature.sourceLayer=i.get(r.layerId);return t}const H=q();let I=null;function Be(t,e){return e.type==="tile"||e.type==="map-image"}let E=class extends de{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=fe(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([me(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){var s,c;const{layerView:{layer:i,view:{scale:o}}}=this;if(!t)throw new A("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:i});const r=Te(i.sublayers,o,e);if(!r.length)return[];const a=await Le(i,r);if(!((((c=(s=i.capabilities)==null?void 0:s.operations)==null?void 0:c.supportsIdentify)??!0)&&i.version>=10.5)&&!a)throw new A("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:i});return a?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!t||!e)return H;let i=Oe(t)?[t]:ge.isCollection(t)?t.toArray():Array.isArray(t)?t:[];if(i=i==null?void 0:i.filter(T),((i==null?void 0:i.length)??0)===0)return H;for(const o of i){const{sourceLayer:r}=o;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(o.visible=!1)}return e.addMany(i),q(()=>e.removeMany(i??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:i,highlightGraphicUpdated:o}=this;if(i&&o)for(const r of t){const a=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&a&&"getSymbolAsync"in a&&a.getSymbolAsync(r).then(async s=>{var l;s||(s=new M);let c=null;const h="visualVariables"in a?(l=a.visualVariables)==null?void 0:l.find(u=>u.type==="size"):void 0;h&&(I||(I=(await we(async()=>{const{getSize:u}=await import("./index-CDF62Mj_.js").then(y=>y.ts);return{getSize:u}},__vite__mapDeps([0,1]),import.meta.url)).getSize),c=I(h,r,{view:e.type,scale:e.scale,shape:s.type==="simple-marker"?s.style:null})),c||(c="width"in s&&"height"in s&&s.width!=null&&s.height!=null?Math.max(s.width,s.height):"size"in s?s.size:16),i.includes(r)&&(r.symbol=new M({style:"square",size:c,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),o(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:i},highlightGraphics:o,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(o!=null&&o.length)||!e.capabilities.operations.supportsQuery)return;const a=this._getTargetResolution(t),s=new Map;for(const l of o)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>a){const u=l.sourceLayer;be(s,u,()=>new Map).set(l.getObjectId(),l)}const c=Array.from(s,([l,u])=>{const y=l.createQuery();return y.objectIds=[...u.keys()],y.outFields=[l.objectIdField],y.returnGeometry=!0,y.maxAllowableOffset=a,y.outSpatialReference=i.spatialReference,l.queryFeatures(y)}),h=await Promise.all(c);if(!this.destroyed)for(const{features:l}of h)for(const u of l){const y=u.sourceLayer,m=s.get(y).get(u.getObjectId());m&&o.includes(m)&&(m.geometry=u.geometry,r(m,"geometry"),this._featuresResolutions.set(m,a))}}_getTargetResolution(t){const e=t*ve(this.layerView.view.spatialReference),i=e/16;return i<=10?0:t/e*i}async _fetchPopupFeaturesUsingIdentify(t,e,i){const o=await this._createIdentifyParameters(t,e,i);if(o==null)return[];const{results:r}=await Re(this.layerView.layer.parsedUrl,o,i);return r.map(a=>a.feature)}async _createIdentifyParameters(t,e,i){const{floors:o,layer:r,timeExtent:a,view:{spatialReference:s,scale:c}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load(i).catch(()=>{})));const h=Math.min(xe("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,$)=>$.renderer?U({renderer:$.renderer,pointerType:i==null?void 0:i.pointerType}):x,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,h),u=$e(c,s),y=Math.round(l.width/u),m=new z({xmin:l.center.x-u*y,ymin:l.center.y-u*y,xmax:l.center.x+u*y,ymax:l.center.y+u*y,spatialReference:l.spatialReference});return new D({floors:o,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:y,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:s,sublayers:r.sublayers,timeExtent:a,tolerance:h,width:y})}async _fetchPopupFeaturesUsingQueries(t,e,i){const{layerView:{floors:o,timeExtent:r}}=this,a=e.map(async({sublayer:s,popupTemplate:c})=>{var b;if(await s.load(i).catch(()=>{}),s.capabilities&&!s.capabilities.operations.supportsQuery)return[];const h=s.createQuery(),l=U({renderer:s.renderer,pointerType:i==null?void 0:i.pointerType}),u=this.createFetchPopupFeaturesQueryGeometry(t,l),y=new Set,[m]=await Promise.all([je(s,c),(b=s.renderer)==null?void 0:b.collectRequiredFields(y,s.fieldsIndex)]);L(i),Se(y,s.fieldsIndex,m);const x=Array.from(y).sort();h.geometry=u,h.outFields=x,h.timeExtent=r;const $=R(o,s);h.where=J(h.where,$);const O=this._getTargetResolution(u.width/l),f=await Me(c);L(i);const F=s.geometryType==="point"||f&&f.arcadeUtils.hasGeometryOperations(c);F||(h.maxAllowableOffset=O);let{features:w}=await s.queryFeatures(h,i);const g=F?0:O;w=await Ue(s,w,i);for(const N of w)this._featuresResolutions.set(N,g);return w});return(await Promise.allSettled(a)).reduce((s,c)=>c.status==="fulfilled"?[...s,...c.value]:s,[]).filter(T)}};function Te(t,e,i){const o=[];if(!t)return o;const r=a=>{const s=a.minScale===0||e<=a.minScale,c=a.maxScale===0||e>=a.maxScale;if(a.visible&&s&&c){if(a.sublayers)a.sublayers.forEach(r);else if(a.popupEnabled){const h=Ee(a,{...i,defaultPopupTemplateEnabled:!1});h!=null&&o.unshift({sublayer:a,popupTemplate:h})}}};return t.map(r),o}function Me(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(i=>i.type==="expression")?Fe():Promise.resolve()}async function Le(t,e){var i,o;if((o=(i=t.capabilities)==null?void 0:i.operations)!=null&&o.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Ue(t,e,i){const o=t.renderer;return o&&"defaultSymbol"in o&&!o.defaultSymbol&&(e=o.valueExpression?await Promise.all(e.map(r=>o.getSymbolAsync(r,i).then(a=>a?r:null))).then(r=>r.filter(a=>a!=null)):e.filter(r=>o.getSymbol(r)!=null)),e}n([p({constructOnly:!0})],E.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),n([p({constructOnly:!0})],E.prototype,"layerView",void 0),n([p({constructOnly:!0})],E.prototype,"highlightGraphics",void 0),n([p({constructOnly:!0})],E.prototype,"highlightGraphicUpdated",void 0),n([p({constructOnly:!0})],E.prototype,"updatingHandles",void 0),E=n([G("esri.views.layers.support.MapServiceLayerViewHelper")],E);export{E as R,Be as _};
