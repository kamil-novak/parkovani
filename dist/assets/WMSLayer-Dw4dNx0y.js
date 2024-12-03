import{eS as Me,cF as q,fo as F,cK as J,gG as Te,aR as Q,ae as a,af as u,al as R,cs as O,fO as _e,ai as xe,a9 as je,s as we,F as M,a6 as I,aa as ve,cy as Ce,kf as qe,dH as Ve,dl as Be,ft as We,eT as ke,dm as De,eU as Ge,eV as Xe,eW as He,dg as Je,bn as Ze,d8 as se,fw as ie,aq as k,kg as ze,_ as Qe,fQ as Ke,cM as Ye,aS as et,ia as tt,bS as rt,aG as nt,am as D,eY as st,fC as it,eZ as at,dq as ot,kh as lt}from"./index-ZNyjz3YK.js";import{o as Z}from"./crsUtils-DAndLU68.js";import{a as ae}from"./ExportWMSImageParameters-prgKAILk.js";import{t as ut}from"./imageBitmapUtils-BxwWv2le.js";var _;let pt=0,h=_=class extends Me(je){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([q(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},F),q(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},F),J(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=this,n.layer=this.layer},F),J(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},F)])}get id(){return this._get("id")??pt++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return Te(Q.ofType(_),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){var t,r,n;const e=new _;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=((t=this.fullExtents)==null?void 0:t.map(s=>s.clone()))??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=(r=this.sublayers)==null?void 0:r.map(s=>s.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=(n=this.spatialReferences)==null?void 0:n.map(s=>s)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};a([u()],h.prototype,"description",void 0),a([u({readOnly:!0})],h.prototype,"dimensions",void 0),a([u({type:R,json:{name:"extent"}})],h.prototype,"fullExtent",void 0),a([u()],h.prototype,"fullExtents",void 0),a([u({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],h.prototype,"id",null),a([u({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],h.prototype,"legendUrl",void 0),a([O("legendUrl",["legendUrl","legendURL"])],h.prototype,"readLegendUrl",null),a([u({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],h.prototype,"legendEnabled",void 0),a([u()],h.prototype,"layer",void 0),a([u()],h.prototype,"maxScale",void 0),a([u()],h.prototype,"minScale",void 0),a([u({readOnly:!0})],h.prototype,"effectiveScaleRange",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"name",void 0),a([u()],h.prototype,"parent",void 0),a([u({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],h.prototype,"popupEnabled",void 0),a([u({type:Boolean,json:{write:{ignoreOrigin:!0}}})],h.prototype,"queryable",void 0),a([u()],h.prototype,"sublayers",void 0),a([_e("sublayers")],h.prototype,"castSublayers",null),a([u({type:[Number],json:{read:{source:"spatialReferences"}}})],h.prototype,"spatialReferences",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",void 0),a([u({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],h.prototype,"visible",null),h=_=a([xe("esri.layers.support.WMSSublayer")],h);const z=h,oe={84:4326,83:4269,27:4267};function ct(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const b=Array.prototype.slice.call(r.childNodes).map(P=>P.textContent).join(`\r
`);throw new we("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",b)}const n=x("Capability",r),s=x("Service",r),l=n&&x("Request",n);if(!n||!s||!l)return null;const o=x("Layer",n);if(!o)return null;const d=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",i=v("Title",s,"")||v("Name",s,""),m=v("AccessConstraints",s,""),c=/^none$/i.test(m)?"":m,y=v("Abstract",s,""),f=parseInt(v("MaxWidth",s,"5000"),10),w=parseInt(v("MaxHeight",s,"5000"),10),S=ue(l,"GetMap"),N=le(l,"GetMap"),g=U(o,d,t);if(!g)return null;let K,V=0;const Ee=Array.prototype.slice.call(n.childNodes),$e=g.sublayers??[],B=b=>{b!=null&&$e.push(b)};Ee.forEach(b=>{b.nodeName==="Layer"&&(V===0?K=b:(V===1&&g.name&&(g.name="",B(U(K,d,t))),B(U(b,d,t))),V++)});let E=g.sublayers,W=g.extent;const Oe=g.fullExtents??[];if(E||(E=[]),E.length===0&&E.push(g),!W){const b=new R(E[0].extent);g.extent=b.toJSON(),W=g.extent}const Re=g.spatialReferences.length>0?g.spatialReferences:Se(g),Y=le(l,"GetFeatureInfo"),Pe=Y?ue(l,"GetFeatureInfo"):null,ee=Ne(E),Le=g.minScale||0,Ae=g.maxScale||0,te=g.dimensions??[],Ue=ee.reduce((b,P)=>b.concat(P.dimensions??[]),[]),re=te.concat(Ue).filter(Ie);let ne=null;if(re.length){const b=re.map(P=>{const{extent:L}=P;return ft(L)?L.map(T=>T.getTime()):L==null?void 0:L.map(T=>[T.min.getTime(),T.max.getTime()])}).flat(2).filter(M);ne={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...b),Math.max(...b)]}}return{copyright:c,description:y,dimensions:te,extent:W,fullExtents:Oe,featureInfoFormats:Pe,featureInfoUrl:Y,mapUrl:N,maxWidth:f,maxHeight:w,maxScale:Ae,minScale:Le,layers:ee,spatialReferences:Re,supportedImageFormatTypes:S,timeInfo:ne,title:i,version:d}}function dt(e){const t=e.filter(r=>r.popupEnabled&&r.name&&r.queryable);return t.length?t.map(({name:r})=>r).join():null}function Se(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=Se(t);if(r.length>0)return r}return[]}function Ne(e){var r;let t=[];for(const n of e)t.push(n),(r=n.sublayers)!=null&&r.length&&(t=t.concat(Ne(n.sublayers)),delete n.sublayers);return t}function j(e,t,r){return t.getAttribute(e)??r}function mt(e,t,r,n){const s=x(e,r);return s?j(t,s,n):n}function x(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(Fe(n)&&n.nodeName===e)return n}return null}function C(e,t){if(t==null)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];Fe(s)&&s.nodeName===e&&r.push(s)}return r}function v(e,t,r){var n;return((n=x(e,t))==null?void 0:n.textContent)??r}function A(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),o=parseFloat(e.getAttribute("maxy"));let d,i,m,c;r?(d=isNaN(s)?-Number.MAX_VALUE:s,i=isNaN(n)?-Number.MAX_VALUE:n,m=isNaN(o)?Number.MAX_VALUE:o,c=isNaN(l)?Number.MAX_VALUE:l):(d=isNaN(n)?-Number.MAX_VALUE:n,i=isNaN(s)?-Number.MAX_VALUE:s,m=isNaN(l)?Number.MAX_VALUE:l,c=isNaN(o)?Number.MAX_VALUE:o);const y=new I({wkid:t});return new R({xmin:d,ymin:i,xmax:m,ymax:c,spatialReference:y})}function le(e,t){const r=x(t,e);if(r){const n=x("DCPType",r);if(n){const s=x("HTTP",n);if(s){const l=x("Get",s);if(l){let o=mt("OnlineResource","xlink:href",l,null);if(o){const d=o.indexOf("&");return d!==-1&&d===o.length-1&&(o=o.slice(0,-1)),ht(o,["service","request"])}}}}}return null}function ue(e,t){const r=C("Operation",e);if(!r.length)return C("Format",x(t,e)).map(({textContent:s})=>s).filter(M);const n=[];for(const s of r)if(s.getAttribute("name")===t){const l=C("Format",s);for(const{textContent:o}of l)o!=null&&n.push(o)}return n}function pe(e,t,r){const n=x(t,e);if(!n)return r;const{textContent:s}=n;if(s==null||s==="")return r;const l=Number(s);return isNaN(l)?r:l}function U(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},s=x("LatLonBoundingBox",e),l=x("EX_GeographicBoundingBox",e);let o=null;s&&(o=A(s,4326)),l&&(o=new R(0,0,0,0,new I({wkid:4326})),o.xmin=parseFloat(v("westBoundLongitude",l,"0")),o.ymin=parseFloat(v("southBoundLatitude",l,"0")),o.xmax=parseFloat(v("eastBoundLongitude",l,"0")),o.ymax=parseFloat(v("northBoundLatitude",l,"0"))),s||l||(o=new R(-180,-90,180,90,new I({wkid:4326}))),n.minScale=pe(e,"MaxScaleDenominator",0),n.maxScale=pe(e,"MinScaleDenominator",0);const d=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(i=>{var m;if(i.nodeName==="Name")n.name=i.textContent||"";else if(i.nodeName==="Title")n.title=i.textContent||"";else if(i.nodeName==="Abstract")n.description=i.textContent||"";else if(i.nodeName==="BoundingBox"){const c=i.getAttribute(d);if(c&&c.indexOf("EPSG:")===0){const f=parseInt(c.slice(5),10);f===0||isNaN(f)||o||(o=t==="1.3.0"?A(i,f,Z(f)):A(i,f))}const y=c==null?void 0:c.indexOf(":");if(y&&y>-1){let f=parseInt(c.slice(y+1),10);f===0||isNaN(f)||(f=oe[f]??f);const w=t==="1.3.0"?A(i,f,Z(f)):A(i,f);w&&n.fullExtents&&n.fullExtents.push(w)}}else if(i.nodeName===d)(((m=i.textContent)==null?void 0:m.split(" "))??[]).forEach(c=>{let y=NaN;if(c.includes(":")){const[f,w]=c.toUpperCase().split(":");f!=="CRS"&&f!=="EPSG"||(y=parseInt(w,10))}else y=parseInt(c,10);if(y!==0&&!isNaN(y)){const f=oe[y]??y;n.spatialReferences.includes(f)||n.spatialReferences.push(f)}});else if(i.nodeName!=="Style"||n.legendUrl){if(i.nodeName==="Layer"){const c=U(i,t,r);c&&(c.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(c))}}else{const c=x("LegendURL",i);if(c){const y=x("OnlineResource",c);y&&(n.legendUrl=y.getAttribute("xlink:href"))}}}),n.extent=o==null?void 0:o.toJSON(),n.dimensions=C("Dimension",e).filter(i=>i.getAttribute("name")&&i.getAttribute("units")&&i.textContent).map(i=>{const m=i.getAttribute("name"),c=i.getAttribute("units"),y=i.textContent,f=i.getAttribute("unitSymbol")??void 0,w=i.getAttribute("default")??void 0,S=j("default",i,"0")!=="0",N=j("nearestValue",i,"0")!=="0",g=j("current",i,"0")!=="0";return Ie({name:m,units:c})?{name:"time",units:"ISO8601",extent:me(y),default:me(w),multipleValues:S,nearestValue:N,current:g}:yt({name:m,units:c})?{name:"elevation",units:c,extent:ce(y),unitSymbol:f,default:ce(w),multipleValues:S,nearestValue:N}:{name:m,units:c,extent:de(y),unitSymbol:f,default:de(w),multipleValues:S,nearestValue:N}}),n}function ft(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function Fe(e){return e.nodeType===Node.ELEMENT_NODE}function yt(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function Ie(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ht(e,t){const r=[],n=ve(e);for(const s in n.query)n.query.hasOwnProperty(s)&&(t.includes(s.toLowerCase())||r.push(s+"="+n.query[s]));return n.path+(r.length?"?"+r.join("&"):"")}function ce(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:parseFloat(s[0]),max:parseFloat(s[1]),resolution:s.length>=3&&s[2]!=="0"?parseFloat(s[2]):void 0}}).filter(M):r.map(n=>parseFloat(n))}function de(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:s[0],max:s[1],resolution:s.length>=3&&s[2]!=="0"?s[2]:void 0}}).filter(M):r}function me(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:G(s[0]),max:G(s[1]),resolution:s.length>=3&&s[2]!=="0"?gt(s[2]):void 0}}).filter(M):r.map(n=>G(n))}function G(e){return Ce.fromISO(e,{zone:qe.utcInstance}).toJSDate()}function gt(e){const t=/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i,r=e.match(t);return r?{years:$(r[1]),months:$(r[2]),days:$(r[3]),hours:$(r[4]),minutes:$(r[5]),seconds:$(r[6])}:null}function $(e){if(!e)return 0;const t=/(?:\d+(?:\.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function X(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const bt="0000-01-01T00:00:00Z",xt="9999-12-31T23:59:59Z";function fe(e){if(!e||e.isAllTime||e.isEmpty)return;const{start:t,end:r}=e;return t&&r&&t.getTime()===r.getTime()?`${X(t)}`:`${t?X(t):bt}/${r?X(r):xt}`}const ye=new Set([102100,3857,102113,900913]),wt=new Set([3395,54004]);function vt(e,t){let r=e.wkid;return t==null?r:(r!=null&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),r!=null&&ye.has(r)?t.find(n=>ye.has(n))||t.find(n=>wt.has(n))||102100:r)}const H=new Ve({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function he(e){return e==="text/html"}function ge(e){return e==="text/plain"}let p=class extends Be(We(ke(De(Ge(Xe(He(ot))))))){constructor(...e){super(...e),this.allSublayers=new Je({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([q(()=>this.sublayers,"after-add",({item:t})=>{t.parent=t.layer=this},F),q(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},F),J(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=n.layer=this},F)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Ze).then(()=>this._fetchService(t)).then(()=>this._checkLayerValidity())),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new R({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return this.featureInfoFormats==null?null:this.featureInfoFormats.find(he)??this.featureInfoFormats.find(ge)??null}set featureInfoFormat(e){e==null?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(he(e)||ge(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new I(t.spatialReferences[0])}writeSpatialReferences(e,t){var n;const r=(n=this.spatialReference)==null?void 0:n.wkid;e&&r?(t.spatialReferences=e.filter(s=>s!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return be(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return be(t.layers,r)}writeSublayers(e,t,r,n){var o,d;t.layers=[];const s=new Map,l=e.flatten(({sublayers:i})=>i??[]);for(const i of l)if(typeof((o=i.parent)==null?void 0:o.id)=="number"){const m=s.get(i.parent.id);m!=null?m.push(i.id):s.set(i.parent.id,[i.id])}for(const i of l){const m={sublayer:i,...n},c=i.write({parentLayerId:typeof((d=i.parent)==null?void 0:d.id)=="number"?i.parent.id:-1},m);if(s.has(i.id)&&(c.sublayerIds=s.get(i.id)),!i.sublayers&&i.name){const y=i.write({},m);delete y.id,t.layers.push(y)}}t.visibleLayers=l.filter(({visible:i,sublayers:m})=>i&&!m).map(({name:i})=>i).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=ve(e);for(const s in r)/^(request|service)$/i.test(s)&&delete r[s];const n=se(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const s=(n==null?void 0:n.pixelRatio)??1,l=ie({extent:e,width:t})*s,o=new ae({layer:this,scale:l}),{xmin:d,ymin:i,xmax:m,ymax:c,spatialReference:y}=e,f=vt(y,this.spatialReferences),w=this.version==="1.3.0"&&Z(f)?`${i},${d},${c},${m}`:`${d},${i},${m},${c}`,S=o.toJSON(),N=this.version==="1.3.0"?"crs":"srs";return{bbox:w,[N]:f==null||isNaN(f)?void 0:"EPSG:"+f,...S}}async fetchImage(e,t,r,n){const s=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const i=document.createElement("canvas");return i.width=t,i.height=r,i}const o=fe(n==null?void 0:n.timeExtent),d={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:o,...this.refreshParameters}),signal:n==null?void 0:n.signal};return k(s??"",d).then(i=>i.data)}async fetchImageBitmap(e,t,r,n){const s=this.mapUrl??"",l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const m=document.createElement("canvas");return m.width=t,m.height=r,m}const o=fe(n==null?void 0:n.timeExtent),d={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...l,time:o,...this.refreshParameters}),signal:n==null?void 0:n.signal},{data:i}=await k(s,d);return ut(i,s,n==null?void 0:n.signal)}fetchFeatureInfo(e,t,r,n,s){const l=ie({extent:e,width:t}),o=new ae({layer:this,scale:l}),d=dt(o.visibleSublayers);if(this.featureInfoUrl==null||d==null)return Promise.resolve([]);if(this.fetchFeatureInfoFunction==null&&this.featureInfoFormat==null)return Promise.resolve([]);const i=this.version==="1.3.0"?{I:n,J:s}:{x:n,y:s},m={query_layers:d,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...i},c={...this.createExportImageParameters(e,t,r),...m},y=this._mixCustomParameters(c);return this.fetchFeatureInfoFunction!=null?this.fetchFeatureInfoFunction(y):this._defaultFetchFeatureInfoFunction(se(this.featureInfoUrl,y))}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return ze(this.url)||this.spatialReferences!=null&&this.spatialReferences.some(t=>{const r=t===900913?I.WebMercator:new I({wkid:t});return Qe(r,e)})}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=Ke(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new Ye({title:this.title,content:t}),n=new et({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){var t;if(!this.resourceInfo&&((t=this.parsedUrl)!=null&&t.path)){const{path:r,query:n}=this.parsedUrl,{data:s}=await k(r,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...n,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=ct(s)}if(this.parsedUrl){const r=new tt(this.parsedUrl.path),{httpsDomains:n}=rt.request;r.scheme!=="https"||r.port&&r.port!=="443"||!r.host||n.includes(r.host)||n.push(r.host)}this.read(this.resourceInfo,{origin:"service"})}_checkLayerValidity(){if(!this.allSublayers.length)throw new we("wmslayer:empty-layer","The layer doesn't have any sublayer")}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function St(e,t){return e.some(r=>{for(const n in r)if(lt(r,n,null,t))return!0;return!1})}function be(e,t,r){e=e??[];const n=new Map;e.every(l=>l.id==null)&&(e=nt(e)).forEach((l,o)=>l.id=o);for(const l of e){const o=new z;o.read(l,t),r&&!r.includes(o.name)&&(o.visible=!1),n.set(o.id,o)}const s=[];for(const l of e){const o=l.id!=null?n.get(l.id):null;if(o)if(l.parentLayerId!=null&&l.parentLayerId>=0){const d=n.get(l.parentLayerId);if(!d)continue;d.sublayers||(d.sublayers=new Q),d.sublayers.push(o)}else s.push(o)}return s}a([u({readOnly:!0})],p.prototype,"allSublayers",void 0),a([u({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),a([u({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),a([u({type:String,json:{write:!0}})],p.prototype,"copyright",void 0),a([u()],p.prototype,"description",void 0),a([u({readOnly:!0})],p.prototype,"dimensions",void 0),a([u({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],p.prototype,"fullExtent",void 0),a([O(["web-document","portal-item"],"fullExtent",["extent"])],p.prototype,"readFullExtentFromItemOrMap",null),a([D(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],p.prototype,"writeFullExtent",null),a([u()],p.prototype,"fullExtents",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"featureInfoFormat",null),a([u({type:[String],readOnly:!0})],p.prototype,"featureInfoFormats",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"featureInfoUrl",void 0),a([u()],p.prototype,"fetchFeatureInfoFunction",void 0),a([u({type:String,json:{origins:{"web-document":{default:"image/png",type:H.jsonValues,read:{reader:H.read,source:"format"},write:{writer:H.write,target:"format"}}}}})],p.prototype,"imageFormat",void 0),a([O("imageFormat",["supportedImageFormatTypes"])],p.prototype,"readImageFormat",null),a([u({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],p.prototype,"imageMaxHeight",void 0),a([u({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],p.prototype,"imageMaxWidth",void 0),a([u()],p.prototype,"imageTransparency",void 0),a([u(st)],p.prototype,"legendEnabled",void 0),a([u({type:["show","hide","hide-children"]})],p.prototype,"listMode",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"mapUrl",void 0),a([u({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),a([u({type:["WMS"]})],p.prototype,"operationalLayerType",void 0),a([u()],p.prototype,"resourceInfo",void 0),a([u({type:I,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],p.prototype,"spatialReference",void 0),a([O(["web-document","portal-item"],"spatialReference",["spatialReferences"])],p.prototype,"readSpatialReferenceFromItemOrDocument",null),a([u({type:[it],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],p.prototype,"spatialReferences",void 0),a([D(["web-document","portal-item"],"spatialReferences")],p.prototype,"writeSpatialReferences",null),a([u({type:Q.ofType(z),json:{write:{target:"layers",overridePolicy(e,t,r){if(St(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],p.prototype,"sublayers",void 0),a([O(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],p.prototype,"readSublayersFromItemOrMap",null),a([O("service","sublayers",["layers"])],p.prototype,"readSublayers",null),a([D("sublayers",{layers:{type:[z]},visibleLayers:{type:[String]}})],p.prototype,"writeSublayers",null),a([u({json:{read:!1},readOnly:!0,value:"wms"})],p.prototype,"type",void 0),a([u(at)],p.prototype,"url",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"version",void 0),p=a([xe("esri.layers.WMSLayer")],p);const $t=p;export{$t as default};
