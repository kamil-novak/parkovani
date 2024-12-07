import{d7 as w,ff as T,d8 as O,eR as P,eG as L,eH as E,eI as F,eF as M,eT as R,eS as j,fg as _,b6 as J,f2 as v,fb as g,fh as x,fi as N,fj as U,a4 as f,$ as q,fk as A,fl as k,fm as V,s as S,cf as z,P as a,Q as o,fn as I,c7 as G,a0 as H,eL as Z,X as B,db as C,fo as D}from"./index-D-EuQFPo.js";import{m as K,f as W,t as Q}from"./SublayersOwner-n_wHzXRa.js";import{t as X}from"./imageBitmapUtils-DQliMqTm.js";import"./QueryTask-CjP1LST1.js";import"./infoFor3D-CxdEiWhp.js";import"./executeForIds-CVEO_nAU.js";import"./query-CycvhsGh.js";import"./pbfQueryUtils-CbYyfbjh.js";import"./pbf-oXFO9hZI.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./executeQueryJSON-DYHLsojv.js";import"./featureConversionUtils-DRwPdVeT.js";let s=class extends w(T(O(K(W(P(L(E(F(M(R(j(C)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new _({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(J).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const p=r.supportedImageFormatTypes;return p&&p.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,p,t){var m,u,b;if(!this.loaded||!e)return;const i=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray();let n=!1;const h=v(t.origin);if((m=this.capabilities)!=null&&m.operations.supportsExportMap&&((b=(u=this.capabilities)==null?void 0:u.exportMap)!=null&&b.supportsDynamicLayers)){if(h===g.PORTAL_ITEM){const l=this.createSublayersForOrigin("service").sublayers;n=x(i,l,g.SERVICE)}else if(h>g.PORTAL_ITEM){const l=this.createSublayersForOrigin("portal-item");n=x(i,l.sublayers,v(l.origin))}}const c=[],d={writeSublayerStructure:n,...t};let y=n||this.hasVisibleLayersForOrigin(h);i.forEach(l=>{const $=l.write({},d);c.push($),y=y||l.originOf("visible")==="user"}),c.some(l=>Object.keys(l).length>1)&&(r.layers=c),y&&(r.visibleLayers=i.filter(l=>l.visible).map(l=>l.id))}createExportImageParameters(e,r,p,t){const i=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=(t==null?void 0:t.floors)??null,this._exportImageParameters.scale=N({extent:e,width:r})*i;const n=this._exportImageParameters.toJSON(),h=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},c=e==null?void 0:e.spatialReference,d=U(c);n.dpi*=i;const y={};if(t!=null&&t.timeExtent){const{start:m,end:u}=t.timeExtent.toJSON();y.time=m&&u&&m===u?""+m:`${m??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:d,imageSR:d,size:r+","+p,...n,...h,...y}}async fetchImage(e,r,p,t){const{data:i}=await this._fetchImage("image",e,r,p,t);return i}async fetchImageBitmap(e,r,p,t){const{data:i,url:n}=await this._fetchImage("blob",e,r,p,t);return X(i,n,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:p}=await f(this.url,r),{extent:t,fullExtent:i,timeExtent:n}=p,h=t||i;return{fullExtent:h&&q.fromJSON(h),timeExtent:n&&A.fromJSON({start:n[0],end:n[1]})}}loadAll(){return k(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return V(this,e)}async _fetchImage(e,r,p,t,i){var c,d,y;const n={responseType:e,signal:(i==null?void 0:i.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,p,t,i),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},h=this.parsedUrl.path+"/export";if(((c=n.query)==null?void 0:c.dynamicLayers)!=null&&!((y=(d=this.capabilities)==null?void 0:d.exportMap)!=null&&y.supportsDynamicLayers))throw new S("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:m}=await f(h,n);return{data:m,url:h}}catch(m){throw z(m)?m:new S("mapimagelayer:image-fetch-error",`Unable to load image: ${h}`,{error:m})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:p}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});p&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){var r;return!(e==null||!((r=this.sublayersSourceJSON[e])!=null&&r.visibleLayers))}};a([o(I("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),a([o({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),a([o()],s.prototype,"dpi",void 0),a([o()],s.prototype,"gdbVersion",void 0),a([o()],s.prototype,"imageFormat",void 0),a([G("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),a([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),a([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),a([o()],s.prototype,"imageTransparency",void 0),a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),a([o({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),a([o({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),a([o({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),a([o(I("preferredTimeReference"))],s.prototype,"preferredTimeZone",void 0),a([o()],s.prototype,"sourceJSON",void 0),a([o({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),a([H("sublayers",{layers:{type:[Q]},visibleLayers:{type:[D]}})],s.prototype,"writeSublayers",null),a([o({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),a([o({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),a([o(Z)],s.prototype,"url",void 0),s=a([B("esri.layers.MapImageLayer")],s);const ce=s;export{ce as default};