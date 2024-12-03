const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mediaLayerUtils-B0N4Z_Ru.js","./utils-FBt-NzBl.js","./index-ZNyjz3YK.js","./index-BAq5M1RB.css","./originUtils-D69mHv66.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./saveUtils-ksZS7p7z.js","./resourceUtils-mRJqlD4k.js","./resourceUtils-C2xy2_nX.js"])))=>i.map(i=>d[i]);
import{ae as s,ai as R,kd as Re,fG as K,az as W,af as a,ax as h,eR as Ae,a6 as le,h9 as N,s as x,hh as w,nb as Ce,cs as D,am as Y,nc as z,nd as fe,c3 as ce,he as b,aj as We,ne as Z,al as ue,f6 as Ge,nf as ye,iX as Ue,fg as ze,fp as J,ng as ke,eW as _e,gp as be,c5 as Be,fr as qe,fe as ge,fi as $e,ff as Fe,fh as Se,lS as pe,fj as de,nh as Je,aq as Ie,cn as Ke,cq as De,ec as Qe,li as Xe,fQ as ve,ni as Ye,aR as ne,l_ as Ze,dJ as et,cK as tt,aB as nt,de as ot,eq as rt,_ as st,cS as it,h6 as at,kK as lt,dl as ct,dm as ut,eU as pt,eV as dt,g3 as ht,i4 as ee,fO as mt,dq as ft,a4 as yt}from"./index-ZNyjz3YK.js";import{p as S,j as Oe,m as gt}from"./perspectiveUtils-D78YwJWn.js";import{t as vt,e as oe}from"./mat3f64-q3fE-ZOt.js";import{p as Pt}from"./resourceExtension-KXy0Cy8v.js";import{o as wt}from"./BoundsStore-B-ABL_bG.js";import"./normalizeUtilsSync-B0_VkCVq.js";import"./PooledRBush-CGjLVCrW.js";let ie=class extends Re{projectOrWarn(e,t){if(e==null)return e;const{geometry:o,pending:n}=K(e,t);return n?null:n||o?o:(W.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};ie=s([R("esri.layers.support.GeoreferenceBase")],ie);const Q=ie,re=oe(),d=b();let q=class extends We{};s([a({type:Number,json:{write:!0}})],q.prototype,"x",void 0),s([a({type:Number,json:{write:!0}})],q.prototype,"y",void 0),q=s([R("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],q);let F=class extends Re{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};s([a()],F.prototype,"sourcePoint",void 0),s([a({type:h})],F.prototype,"mapPoint",void 0),F=s([R("esri.layers.support.ControlPointsGeoreference.ControlPoint")],F);let v=class extends Ae(Q){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const o=le.fromJSON(t.spatialReference),n=vt(...t.coefficients,1);return e.map(r=>(N(d,r.x,r.y),S(d,d,n),{sourcePoint:r,mapPoint:new h({x:d[0],y:d[1],spatialReference:o})}))}writeControlPoints(e,t,o,n){if(this.transform!=null)e!=null&&y(e[0])&&(t.controlPoints=e.map(r=>{const i=r.sourcePoint;return{x:i.x,y:i.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const r=new x("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration. Make sure the parent media element is loaded i.e. the ImageElement or VideoElement set as 'MediaLayer.source'.",{layer:n==null?void 0:n.layer,georeference:this});n!=null&&n.messages?n.messages.push(r):W.getLogger(this).error(r.name,r.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(re);if(e==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return $t(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!y(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:o,height:n}=this,{rings:[[r,i,l,c]]}=e,u={sourcePoint:w(0,n),mapPoint:new h({x:r[0],y:r[1],spatialReference:t})},p={sourcePoint:w(0,0),mapPoint:new h({x:i[0],y:i[1],spatialReference:t})},m={sourcePoint:w(o,0),mapPoint:new h({x:l[0],y:l[1],spatialReference:t})},g={sourcePoint:w(o,n),mapPoint:new h({x:c[0],y:c[1],spatialReference:t})};y(u)&&y(p)&&y(m)&&y(g)&&(Pe(re,u,p,m,g),this.controlPoints=this.controlPoints.map(({sourcePoint:$})=>(N(d,$.x,$.y),S(d,d,re),{sourcePoint:$,mapPoint:new h({x:d[0],y:d[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:Ce(oe(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;N(d,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return S(d,d,this.transform),new h({x:d[0],y:d[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=K(e,t).geometry)==null?null:(N(d,e.x,e.y),S(d,d,this.inverseTransform),w(d[0],d[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:o,height:n}=this;if(!(t!=null&&o>0&&n>0))return null;const[r,i,l,c]=t;if(!y(r))return null;const u=r.mapPoint.spatialReference,p=this._projectControlPoint(i,u),m=this._projectControlPoint(l,u),g=this._projectControlPoint(c,u);if(!p.valid||!m.valid||!g.valid||!y(p.controlPoint))return null;e==null&&(e=oe());let $=null;return $=y(m.controlPoint)&&y(g.controlPoint)?Pe(e,r,p.controlPoint,m.controlPoint,g.controlPoint):y(m.controlPoint)?Rt(e,r,p.controlPoint,m.controlPoint):xt(e,r,p.controlPoint),$.every(Ne=>Ne===0)?null:$}_projectControlPoint(e,t){if(!y(e))return{valid:!0,controlPoint:e};const{sourcePoint:o,mapPoint:n}=e,{geometry:r,pending:i}=K(n,t);return i?{valid:!1,controlPoint:null}:i||r?{valid:!0,controlPoint:{sourcePoint:o,mapPoint:r}}:(W.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:n.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function y(e){return(e==null?void 0:e.sourcePoint)!=null&&e.mapPoint!=null}s([a({type:[F],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[q]},coefficients:{type:[Number]},spatialReference:{type:le}}}}})],v.prototype,"controlPoints",void 0),s([D("controlPoints")],v.prototype,"readControlPoints",null),s([Y("controlPoints")],v.prototype,"writeControlPoints",null),s([a({clonable:!1})],v.prototype,"coords",null),s([a({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"height",void 0),s([a({readOnly:!0})],v.prototype,"inverseTransform",null),s([a({readOnly:!0})],v.prototype,"transform",null),s([a({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"width",void 0),v=s([R("esri.layers.support.ControlPointsGeoreference")],v);const I=b(),O=b(),A=b(),j=b(),E=b(),M=b(),C=b(),V=b(),te=Math.PI/2;function L(e,t,o){N(e,o.sourcePoint.x,o.sourcePoint.y),N(t,o.mapPoint.x,o.mapPoint.y)}function xt(e,t,o){return L(I,E,t),L(O,M,o),z(A,O,I,te),z(j,I,O,te),z(C,M,E,-te),z(V,E,M,-te),he(e,I,O,A,j,E,M,C,V)}function Rt(e,t,o,n){return L(I,E,t),L(O,M,o),L(A,C,n),fe(j,I,O,.5),z(j,A,j,Math.PI),fe(V,E,M,.5),z(V,C,V,Math.PI),he(e,I,O,A,j,E,M,C,V)}function Pe(e,t,o,n,r){return L(I,E,t),L(O,M,o),L(A,C,n),L(j,V,r),he(e,I,O,A,j,E,M,C,V)}const _t=new Array(8).fill(0),bt=new Array(8).fill(0);function we(e,t,o,n,r){return e[0]=t[0],e[1]=t[1],e[2]=o[0],e[3]=o[1],e[4]=n[0],e[5]=n[1],e[6]=r[0],e[7]=r[1],e}function he(e,t,o,n,r,i,l,c,u){return Oe(e,we(_t,t,o,n,r),we(bt,i,l,c,u))}function $t(e,t,o,n){const r=Z(0,o),i=Z(0,0),l=Z(t,0),c=Z(t,o);return S(r,r,e),S(i,i,e),S(l,l,e),S(c,c,e),new ce({rings:[[r,i,l,c,r]],spatialReference:n})}const X=v,k=b();let T=class extends Q{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:o,bottomRight:n}=this;if(e==null||t==null||o==null||n==null)return null;const r=e.spatialReference;return t=this.projectOrWarn(t,r),o=this.projectOrWarn(o,r),n=this.projectOrWarn(n,r),t==null||o==null||n==null?null:new ce({rings:[[[o.x,o.y],[e.x,e.y],[t.x,t.y],[n.x,n.y],[o.x,o.y]]],spatialReference:r})}set coords(e){const{topLeft:t}=this;if(t==null)return;const o=t.spatialReference;if((e=this.projectOrWarn(e,o))==null)return;const{rings:[[n,r,i,l]]}=e;this.bottomLeft=new h({x:n[0],y:n[1],spatialReference:o}),this.topLeft=new h({x:r[0],y:r[1],spatialReference:o}),this.topRight=new h({x:i[0],y:i[1],spatialReference:o}),this.bottomRight=new h({x:l[0],y:l[1],spatialReference:o})}toSourceNormalized(e){const{topLeft:t,topRight:o,bottomRight:n,bottomLeft:r}=this;if(e==null||t==null||o==null||n==null||r==null)return null;const i=t.spatialReference;e=e.normalize();const l=K(e,i).geometry;if(l==null)return null;N(k,l.x,l.y);const c=Oe(oe(),[t.x,t.y,r.x,r.y,o.x,o.y,n.x,n.y],[0,0,0,1,1,0,1,1]);return S(k,k,c),w(k[0],k[1])}};s([a({clonable:!1})],T.prototype,"coords",null),s([a({type:h})],T.prototype,"bottomLeft",void 0),s([a({type:h})],T.prototype,"bottomRight",void 0),s([a({type:h})],T.prototype,"topLeft",void 0),s([a({type:h})],T.prototype,"topRight",void 0),T=s([R("esri.layers.support.CornersGeoreference")],T);const St=T;let G=class extends Q{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:o,ymax:n,spatialReference:r}=this.extent;let i;if(this.rotation){const{x:l,y:c}=this.extent.center,u=se(l,c,this.rotation);i=[u(e,t),u(e,n),u(o,n),u(o,t)],i.push(i[0])}else i=[[e,t],[e,n],[o,n],[o,t],[e,t]];return new ce({rings:[i],spatialReference:r})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),(e==null?void 0:e.extent)==null)return;const{rings:[[o,n,r]],extent:{center:{x:i,y:l}}}=e,c=Ge(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),u=se(i,l,-c),[p,m]=u(o[0],o[1]),[g,$]=u(r[0],r[1]);this.extent=new ue({xmin:p,ymin:m,xmax:g,ymax:$,spatialReference:t}),this.rotation=c}toSourceNormalized(e){const{extent:t,rotation:o}=this;if(e==null||t==null)return null;const{xmin:n,ymin:r,xmax:i,ymax:l,center:c,spatialReference:u}=t;e=e.normalize();const p=K(e,u).geometry;if(p==null)return null;let m=p.x,g=p.y;return o&&([m,g]=se(c.x,c.y,-o)(m,g)),w(ye(m,n,i,0,1),ye(g,l,r,0,1))}};function se(e,t,o){const n=Ue(o),r=Math.cos(n),i=Math.sin(n);return(l,c)=>[r*(l-e)+i*(c-t)+e,r*(c-t)-i*(l-e)+t]}s([a({clonable:!1})],G.prototype,"coords",null),s([a({type:ue})],G.prototype,"extent",void 0),s([a({type:Number})],G.prototype,"rotation",void 0),G=s([R("esri.layers.support.ExtentAndRotationGeoreference")],G);const It=G;function Ot(e){return(e==null?void 0:e.type)==="media"}function Ee(e,t){const o=ze(t);return Ot(e)&&!!e.portalItem&&o!=null&&o>J.PORTAL_ITEM}function Et(e,t,o){var p;if(!e||e.type==="control-points")return e;const{coords:n}=e;if(((p=n==null?void 0:n.rings[0])==null?void 0:p.length)!==5)return null;const[r,i,l,c]=n.rings[0],{spatialReference:u}=n;return new X({controlPoints:[{mapPoint:new h({x:r[0],y:r[1],spatialReference:u}),sourcePoint:w(0,o)},{mapPoint:new h({x:i[0],y:i[1],spatialReference:u}),sourcePoint:w(0,0)},{mapPoint:new h({x:l[0],y:l[1],spatialReference:u}),sourcePoint:w(t,0)},{mapPoint:new h({x:c[0],y:c[1],spatialReference:u}),sourcePoint:w(t,o)}],width:t,height:o})}function Me(e,t,o){return{enabled:!Ee(o==null?void 0:o.layer,o==null?void 0:o.origin),ignoreOrigin:!0}}const Le={json:{name:"url",type:String,write:{overridePolicy:Me}}},Te={readOnly:!0,json:{read:!1,write:{target:"mediaType",overridePolicy:Me}}},Mt={types:{key:"type",base:Q,typeMap:{"control-points":X,corners:St,"extent-and-rotation":It}},json:{types:{key:"type",base:Q,typeMap:{"control-points":X}},write:{overridePolicy:()=>({enabled:!0,ignoreOrigin:!0})}}};let H=class extends ke(_e(be)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return X.fromJSON(e)}writeGeoreference(e,t,o,n){var l;const r=(l=n==null?void 0:n.resources)==null?void 0:l.pendingOperations,i=()=>{var u;const c=Et(this.georeference,this.contentWidth,this.contentHeight);if(c){if(e.type!=="control-points"&&W.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),((u=c.controlPoints)==null?void 0:u.length)!==4&&(n==null?void 0:n.messages))return void n.messages.push(new x("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));t[o]=c.write({},n)}};if(e.type!=="control-points"&&!this.loaded&&r)return t[o]={},void r.push(this.load().then(i));i()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:o,contentHeight:n}=this;if(e==null||t==null||o===0||n===0)return null;const r=t.toSourceNormalized(e);return r==null?null:(r.x*=o,r.y*=n,r)}};s([a(Mt)],H.prototype,"georeference",void 0),s([D("georeference")],H.prototype,"readGeoreference",null),s([Y("georeference")],H.prototype,"writeGeoreference",null),s([a({json:{read:!1,write:!1}})],H.prototype,"opacity",void 0),H=s([R("esri.layers.support.MediaElementBase")],H);const me=H;let P=class extends me{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if(typeof t=="string"){const o=Be(t).then(n=>{this._set("content",n)});this.addResolvingPromise(o)}else if(t instanceof HTMLImageElement){const o=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(o)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new x("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,o,n){return qe(o.url,n)}writeImage(t,o,n,r){if(t==null)return;const i=r==null?void 0:r.portalItem,l=r==null?void 0:r.resources;if(!i||!l)return void(typeof t=="string"&&(o[n]=ge(t,r)));const c=Lt(t)?t:null;if(c){if($e(c)==null)return void(o[n]=c);const u=ge(c,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Fe.NO);if(i&&u&&!Se(u))return l.toKeep.push({resource:i.resourceFromPath(u),compress:!1}),void(o[n]=u)}o[n]="<pending>",l.pendingOperations.push(Tt(t).then(u=>{const p=Vt(u,i);o[n]=p.itemRelativeUrl,l.toAdd.push({resource:p,content:{type:"blob",blob:u},compress:!1,finish:m=>{this.image=m.url}})}))}};s([a()],P.prototype,"animationOptions",void 0),s([a({readOnly:!0})],P.prototype,"content",void 0),s([a({readOnly:!0})],P.prototype,"contentWidth",null),s([a({readOnly:!0})],P.prototype,"contentHeight",null),s([a(Le)],P.prototype,"image",void 0),s([D("image",["url"])],P.prototype,"readImage",null),s([Y("image")],P.prototype,"writeImage",null),s([a(Te)],P.prototype,"type",void 0),P=s([R("esri.layers.support.ImageElement")],P);const je=P;function Lt(e){return typeof e=="string"&&!pe(e)&&!de(e)}async function Tt(e){return typeof e=="string"?pe(e)?Je(e):(await Ie(e,{responseType:"blob"})).data:new Promise(t=>jt(e).toBlob(t))}function jt(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,o=e instanceof HTMLImageElement?e.naturalHeight:e.height,n=document.createElement("canvas"),r=n.getContext("2d");return n.width=t,n.height=o,e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),n}function Vt(e,t){const o=Ke(),n=`${De("media",o)}.${Pt({type:"blob",blob:e})}`;return t.resourceFromPath(n)}let _=class extends me{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;return typeof e=="string"?this.addResolvingPromise(this._preProcessVideoUrl(e).then(t=>{const o=document.createElement("video");return o.src=t,o.crossOrigin="anonymous",o.autoplay=!0,o.muted=!0,o.loop=!0,o.playsInline=!0,this._loadVideo(o).then(()=>{this._set("content",o)})})):e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new x("video-element:invalid-video-type","Invalid video type",{video:e}))),Promise.resolve(this)}get contentWidth(){var e;return((e=this.content)==null?void 0:e.videoWidth)??0}get contentHeight(){var e;return((e=this.content)==null?void 0:e.videoHeight)??0}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):W.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}writeVideo(e,t,o,n){if(!e)return void((n==null?void 0:n.messages)&&n.messages.push(new x("video-element:unsupported-video","video source is missing")));const r=Ht(e)?e:null;if(!r)return void((n==null?void 0:n.messages)&&n.messages.push(new x("video-element:unsupported-video","video source must be an absolute url")));!Se(r)&&(n!=null&&n.blockedRelativeUrls)&&n.blockedRelativeUrls.push(r);const i=Qe(r);$e(i)?n!=null&&n.messages&&n.messages.push(new x("video-element:unsupported-video","video source cannot be an item resource")):t[o]=i}async _preProcessVideoUrl(e){if(Xe(e))return ve(e);try{return await Ie(e,{method:"head"}),e}catch{return ve(e,!0)}}_loadVideo(e){return new Promise((t,o)=>{const n=Ye(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,o):t()});this.addHandles(n,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",de(e.src)||(e.src=e.src))})}};s([a()],_.prototype,"autoplay",void 0),s([a({readOnly:!0})],_.prototype,"content",void 0),s([a({readOnly:!0})],_.prototype,"contentWidth",null),s([a({readOnly:!0})],_.prototype,"contentHeight",null),s([a(Le)],_.prototype,"video",null),s([Y("video")],_.prototype,"writeVideo",null),s([a(Te)],_.prototype,"type",void 0),_=s([R("esri.layers.support.VideoElement")],_);const Ve=_;function Ht(e){return typeof e=="string"&&!pe(e)&&!de(e)}const Nt={key:"type",defaultKeyValue:"image",base:me,typeMap:{image:je,video:Ve}},xe=ne.ofType(Nt);let U=class extends be.LoadableMixin(Ze(et.EventedAccessor)){constructor(e){super(e),this._index=new wt,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const n of t.removed){const r=this._elementViewsMap.get(n);this._elementViewsMap.delete(n),this._index.delete(r),this.removeHandles(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:o}=this;for(const n of t.added){if(this._elementViewsMap.get(n))continue;const r=new gt({spatialReference:o,element:n});this._elementViewsMap.set(n,r);const i=tt(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.addHandles(i,r)}this._elementsIndexes.clear(),this.elements.forEach((n,r)=>this._elementsIndexes.set(n,r)),this.emit("refresh")},this.elements=new xe}async load(e){if(nt(e),!this.spatialReference){const t=this.elements.find(o=>{var n;return((n=o.georeference)==null?void 0:n.coords)!=null});this._set("spatialReference",t?t.georeference.coords.spatialReference:le.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",ot(e,this._get("elements"),xe))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new ue({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):W.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await rt(e.spatialReference,this.spatialReference,null,t);const o=st(e.spatialReference,this.spatialReference)?e:it(e,this.spatialReference);if(!o)return[];const n=o.normalize(),r=[];for(const i of n)this._index.forEachInBounds(at(i),({normalizedCoords:l,element:c})=>{l!=null&&lt(i,l)&&r.push(c)});return r.sort((i,l)=>this._elementsIndexes.get(i)-this._elementsIndexes.get(l)),r}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const o=e.normalizedBounds,n=this._index.has(e),r=o!=null;this._index.delete(e),r&&this._index.set(e,o),this.notifyChange("fullExtent"),t||(n!==r?this.emit("refresh"):this.emit("change",{element:e.element}))}};s([a()],U.prototype,"elements",null),s([a({readOnly:!0})],U.prototype,"fullExtent",null),s([a()],U.prototype,"spatialReference",null),U=s([R("esri.layers.support.LocalMediaElementSource")],U);const B=U;function ae(e){return typeof e=="object"&&e!=null&&"type"in e}function He(e){return ae(e)&&(e.type==="image"||e.type==="video")}let f=class extends ct(ut(pt(dt(_e(ft))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=ht(async(t,o,n)=>{const{save:r,saveAs:i}=await yt(()=>import("./mediaLayerUtils-B0N4Z_Ru.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);switch(t){case ee.SAVE:return r(this,o);case ee.SAVE_AS:return i(this,n,o)}}),this.source=new B}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new x("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const o=this._getSourceOverride(t,this.georeference);o&&(this.setAtOrigin("source",o,"web-map"),this.setAtOrigin("source",o,"web-scene"),t=o);const n=ae(t)?new B({elements:new ne([t])}):t;this._set("effectiveSource",n),this.spatialReference&&(n.spatialReference=this.spatialReference),await n.load(e),this.spatialReference=n.spatialReference}destroy(){var e,t;(e=this.effectiveSource)==null||e.destroy(),this.effectiveSource!==this.source&&((t=this.source)==null||t.destroy())}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):W.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new B({elements:new ne(e)}):e instanceof ne?new B({elements:e}):e:null}readSource(e,t,o){if("itemId"in t&&t.itemId)return;const n=this._createSource(t);return n==null||n.read(t,o),n}writeSource(e,t,o,n){if(e&&e instanceof B){const r=e.elements.length;if(r!==1)return void((n==null?void 0:n.messages)&&n.messages.push(new x("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0)}He(e)?e.write(t,n):n!=null&&n.messages&&(e?n.messages.push(new x("media-layer:unsupported-source","only media elements of type 'ImageElement' or 'VideoElement' can be persisted")):n.messages.push(new x("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(ee.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(ee.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new je;case"video":return new Ve}return null}_getSourceOverride(e,t){if(ae(e)&&this.originIdOf("source")===J.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===J.WEB_MAP||this.originIdOf("georeference")===J.WEB_SCENE)){const o=e.toJSON(),n=this._createSource(o);return n.read({...o},{origin:"portal-item"}),n.read({georeference:t},{origin:"web-map"}),n.read({georeference:t},{origin:"web-scene"}),n}return null}};s([a({readOnly:!0})],f.prototype,"effectiveSource",void 0),s([a({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],f.prototype,"georeference",void 0),s([D("web-document","georeference")],f.prototype,"readGeoreference",null),s([a({type:String})],f.prototype,"copyright",void 0),s([a({readOnly:!0})],f.prototype,"fullExtent",null),s([a({type:["MediaLayer"]})],f.prototype,"operationalLayerType",void 0),s([a({type:["show","hide"]})],f.prototype,"listMode",void 0),s([a({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image","video"]},georeference:{type:X}},overridePolicy(e,t,o){return{enabled:!0,allowNull:!1,ignoreOrigin:Ee(this,o==null?void 0:o.origin)&&He(e)&&!!e.georeference&&e.originIdOf("georeference")>J.PORTAL_ITEM}}}}})],f.prototype,"source",null),s([mt("source")],f.prototype,"castSource",null),s([D("source",["url"])],f.prototype,"readSource",null),s([Y("source")],f.prototype,"writeSource",null),s([a()],f.prototype,"spatialReference",void 0),s([a({readOnly:!0})],f.prototype,"type",void 0),f=s([R("esri.layers.MediaLayer")],f);const Ft=f;export{Ft as default};
