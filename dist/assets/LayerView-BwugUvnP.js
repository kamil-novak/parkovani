import{P as i,Q as s,X as y,Y as P,fK as H,fV as q,$ as x,bO as T,aB as S,l8 as A,dc as E,l9 as j,s as V,cH as h,hP as p,la as I,cB as L,lb as U,lc as N,aj as O,ld as k,eL as M,le as B,dQ as G,de as D,fQ as F,cM as Q,lf as _}from"./index-i1xHX9d5.js";import{n as z}from"./Container-BEOYuYAx.js";function W(e){return e!=null&&typeof e=="object"&&e.type==="2d"&&e.view2dType==="linkchart"}let g=class extends P{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};i([s({readOnly:!0})],g.prototype,"version",null),g=i([y("esri.views.layers.support.ClipArea")],g);const R=g;var w;let d=w=class extends R{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new w({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};i([s({type:[Number,String],json:{write:!0}})],d.prototype,"left",void 0),i([s({type:[Number,String],json:{write:!0}})],d.prototype,"right",void 0),i([s({type:[Number,String],json:{write:!0}})],d.prototype,"top",void 0),i([s({type:[Number,String],json:{write:!0}})],d.prototype,"bottom",void 0),d=w=i([y("esri.views.layers.support.ClipRect")],d);const K=d;var b;const X={base:q,key:"type",typeMap:{extent:x,polygon:T}};let v=b=class extends R{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e;return new b({geometry:((e=this.geometry)==null?void 0:e.clone())??null})}commitVersionProperties(){this.commitProperty("geometry")}};i([s({types:X,json:{read:H,write:!0}})],v.prototype,"geometry",void 0),v=b=i([y("esri.views.layers.support.Geometry")],v);const Y=v;let m=class extends R{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};i([s({type:[[[Number]]],json:{write:!0}})],m.prototype,"path",void 0),m=i([y("esri.views.layers.support.Path")],m);const J=m,f=S.ofType({key:"type",base:null,typeMap:{rect:K,path:J,geometry:Y}}),Z=new(S.ofType(A)),ie=e=>{let r=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new f,this.highlights=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){var l,u,c;const t=((l=this.view)==null?void 0:l.spatialReferenceLocked)??!0;((u=this.view)==null?void 0:u.spatialReference)&&t&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new V("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new z),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([h(()=>this.suspended,n=>{this.container&&(this.container.visible=!n)},p),h(()=>this.updateSuspended,n=>{this.view&&!n&&this.updateRequested&&this.view.requestUpdate()},p),h(()=>{var n;return((n=this.layer)==null?void 0:n.opacity)??1},n=>{this.container&&(this.container.opacity=n)},p),h(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",n=>{this.container&&(this.container.blendMode=n)},p),h(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,n=>{this.container&&(this.container.effect=n)},p),h(()=>this._mergedHighlights.items.map(n=>({name:n.name,options:{fillColor:n.options.color,haloColor:n.options.haloColor,fillOpacity:n.options.fillOpacity,haloOpacity:n.options.haloOpacity,haloWidth:n.options.haloWidth,haloBlur:n.options.haloBlur}})),()=>{this.container.highlightGradient=I(this.container.highlightGradient,this._mergedHighlights.items)},p),h(()=>this._mergedHighlights.items.map(n=>n.name),()=>{this._updateHighlights()}),L(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},p),h(()=>{var n;return{scale:(n=this.view)==null?void 0:n.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:n,scaleRange:C})=>{const $=k(C,n);$!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=$)},p)],"constructor"),(c=this.view)!=null&&c.whenLayerView?this.view.whenLayerView(this.layer).then(n=>{n===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}_updateHighlights(){}destroy(){this.processDetach(),this.updateRequested=!1}get highlightOptions(){return U(this)}set highlightOptions(t){N(this,t)}get _mergedHighlights(){if(!this.view)return Z;if(!this.highlights)return this.view.highlights;const t=this.view.highlights.clone();for(const a of this.highlights){const l=t.find(u=>u.name===a.name);l&&(l.options=a.options)}return t}get scheduler(){return this.view.scheduler}get spatialReferenceSupported(){var a;const t=(a=this.view)==null?void 0:a.spatialReference;return t==null||this.supportsSpatialReference(t)}get updating(){var t;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!((t=this._updatingHandles)!=null&&t.updating)||this.container.transitioning)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}hitTest(t,a){return Promise.resolve(null)}supportsSpatialReference(t){return!0}canResume(){var t;if(!this.spatialReferenceSupported)return!1;switch((t=this.layer)==null?void 0:t.type){case"link-chart":case"knowledge-graph-sublayer":break;default:if(W(this.view)&&!this.view.inGeographicLayout)return!1}return!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const t=super.getSuspendInfo(),a=!this.spatialReferenceSupported;return a&&(t.spatialReferenceNotSupported=a),t}addAttachHandles(t){this.addHandles(t,"attach")}_getHighlightBits(t){t=new Set(t);let a=1,l=0;if(!this.view)return 0;const u=this._mergedHighlights;for(const{name:c}of u)t.delete(c)&&(l=a),a<<=1;for(const c of t)O.getLogger(this).error("#highlights",`${c} was not found. Features in this group will not be highlighted.`);return l}};return i([s()],r.prototype,"attached",void 0),i([s({type:f,set(t){const a=E(t,this._get("clips"),f);this._set("clips",a)}})],r.prototype,"clips",void 0),i([s()],r.prototype,"container",void 0),i([s({type:j})],r.prototype,"highlightOptions",null),i([s({type:S.ofType(A)})],r.prototype,"highlights",void 0),i([s()],r.prototype,"_mergedHighlights",null),i([s()],r.prototype,"moving",void 0),i([s({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),i([s({readOnly:!0})],r.prototype,"updateParameters",void 0),i([s()],r.prototype,"updateRequested",void 0),i([s()],r.prototype,"updating",null),i([s()],r.prototype,"view",void 0),i([s()],r.prototype,"_visibleAtCurrentScale",void 0),i([s({readOnly:!0})],r.prototype,"visibleAtCurrentScale",null),r=i([y("esri.views.2d.layers.LayerView2D")],r),r};let o=class extends M(B(G.EventedMixin(D))){constructor(e){super(e),this._updatingHandles=new F,this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{var r;if(e.name!=="layerview:create-error"){const t=this.layer&&this.layer.id||"no id",a=((r=this.layer)==null?void 0:r.title)||"no title";O.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${a}', id: '${t}')`,e)}})}destroy(){this._updatingHandles=Q(this._updatingHandles)}get fullOpacity(){var e,r;return(((e=this.layer)==null?void 0:e.opacity)??1)*(((r=this.parent)==null?void 0:r.fullOpacity)??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&((e=this.layer)==null?void 0:e.legendEnabled)===!0}get updating(){var e;return!(!((e=this._updatingHandles)!=null&&e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return((e=this.layer)==null?void 0:e.visible)===!0}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var t;const e=this.view.timeExtent,r=(t=this.layer)==null?void 0:t.visibilityTimeExtent;return!e||!r||!e.intersection(r).isEmpty}canResume(){var r,t,a;const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&((r=this.layer)==null?void 0:r.loaded)&&!((t=this.parent)!=null&&t.suspended)&&((a=this.view)==null?void 0:a.ready)&&_(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var a,l;const e=(a=this.parent)!=null&&a.suspended?this.parent.suspendInfo:{};(l=this.view)!=null&&l.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return _(t)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};i([s()],o.prototype,"view",void 0),i([s()],o.prototype,"fullOpacity",null),i([s()],o.prototype,"layer",void 0),i([s()],o.prototype,"parent",void 0),i([s({readOnly:!0})],o.prototype,"suspended",null),i([s({readOnly:!0})],o.prototype,"suspendInfo",null),i([s({readOnly:!0})],o.prototype,"legendEnabled",null),i([s({type:Boolean,readOnly:!0})],o.prototype,"updating",null),i([s({readOnly:!0})],o.prototype,"updatingProgress",null),i([s()],o.prototype,"updateSuspended",null),i([s()],o.prototype,"visible",null),i([s({readOnly:!0})],o.prototype,"visibleAtCurrentScale",null),i([s({readOnly:!0})],o.prototype,"visibleAtCurrentTimeExtent",null),o=i([y("esri.views.layers.LayerView")],o);const se=o;export{Y as a,ie as j,se as y};
