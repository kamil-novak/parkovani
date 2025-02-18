import{a7 as i,a8 as s,ab as u,ac as q,dA as P,h0 as A,ae as H,d4 as C,aI as R,n6 as _,ds as O,n7 as j,s as V,cW as h,i_ as p,n8 as x,cR as T,n9 as U,na as k,nb as L,ai as N,nc as M}from"./index-lgQOPtME.js";import{n as G}from"./Container-Dv4WkFL3.js";let g=class extends q{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};i([s({readOnly:!0})],g.prototype,"version",null),g=i([u("esri.views.layers.support.ClipArea")],g);const b=g;var f;let l=f=class extends b{constructor(a){super(a),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};i([s({type:[Number,String],json:{write:!0}})],l.prototype,"left",void 0),i([s({type:[Number,String],json:{write:!0}})],l.prototype,"right",void 0),i([s({type:[Number,String],json:{write:!0}})],l.prototype,"top",void 0),i([s({type:[Number,String],json:{write:!0}})],l.prototype,"bottom",void 0),l=f=i([u("esri.views.layers.support.ClipRect")],l);const I=l;var w;const B={base:A,key:"type",typeMap:{extent:H,polygon:C}};let y=w=class extends b{constructor(a){super(a),this.type="geometry",this.geometry=null}clone(){var a;return new w({geometry:((a=this.geometry)==null?void 0:a.clone())??null})}commitVersionProperties(){this.commitProperty("geometry")}};i([s({types:B,json:{read:P,write:!0}})],y.prototype,"geometry",void 0),y=w=i([u("esri.views.layers.support.Geometry")],y);const D=y;let m=class extends b{constructor(a){super(a),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};i([s({type:[[[Number]]],json:{write:!0}})],m.prototype,"path",void 0),m=i([u("esri.views.layers.support.Path")],m);const W=m,v=R.ofType({key:"type",base:null,typeMap:{rect:I,path:W,geometry:D}}),F=new(R.ofType(_)),J=a=>{let r=class extends a{constructor(){super(...arguments),this.attached=!1,this.clips=new v,this.highlights=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){var n,c,d;const t=((n=this.view)==null?void 0:n.spatialReferenceLocked)??!0;((c=this.view)==null?void 0:c.spatialReference)&&t&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new V("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new G),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([h(()=>this.suspended,e=>{this.container&&(this.container.visible=!e)},p),h(()=>this.updateSuspended,e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()},p),h(()=>{var e;return((e=this.layer)==null?void 0:e.opacity)??1},e=>{this.container&&(this.container.opacity=e)},p),h(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",e=>{this.container&&(this.container.blendMode=e)},p),h(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,e=>{this.container&&(this.container.effect=e)},p),h(()=>this._mergedHighlights.items.map(e=>({name:e.name,options:{fillColor:e.options.color,haloColor:e.options.haloColor,fillOpacity:e.options.fillOpacity,haloOpacity:e.options.haloOpacity,haloWidth:e.options.haloWidth,haloBlur:e.options.haloBlur}})),()=>{this.container.highlightGradient=x(this.container.highlightGradient,this._mergedHighlights.items)},p),h(()=>this._mergedHighlights.items.map(e=>e.name),()=>{this._updateHighlights()}),T(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},p),h(()=>{var e;return{scale:(e=this.view)==null?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:e,scaleRange:$})=>{const S=M($,e);S!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=S)},p)],"constructor"),(d=this.view)!=null&&d.whenLayerView?this.view.whenLayerView(this.layer).then(e=>{e===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}_updateHighlights(){}destroy(){this.processDetach(),this.updateRequested=!1}get highlightOptions(){return U(this)}set highlightOptions(t){k(this,t)}get _mergedHighlights(){if(!this.view)return F;if(!this.highlights)return this.view.highlights;const t=this.view.highlights.clone();for(const o of this.highlights){const n=t.find(c=>c.name===o.name);n&&(n.options=o.options)}return t}get scheduler(){return this.view.scheduler}get spatialReferenceSupported(){var o;const t=(o=this.view)==null?void 0:o.spatialReference;return t==null||this.supportsSpatialReference(t)}get updating(){var t;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!((t=this._updatingHandles)!=null&&t.updating)||this.container.transitioning)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}hitTest(t,o){return Promise.resolve(null)}supportsSpatialReference(t){return!0}canResume(){var t;if(!this.spatialReferenceSupported)return!1;switch((t=this.layer)==null?void 0:t.type){case"link-chart":case"knowledge-graph-sublayer":break;default:if(L(this.view)&&!this.view.inGeographicLayout)return!1}return!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const t=super.getSuspendInfo(),o=!this.spatialReferenceSupported;return o&&(t.spatialReferenceNotSupported=o),t}addAttachHandles(t){this.addHandles(t,"attach")}_getHighlightBits(t){t=new Set(t);let o=1,n=0;if(!this.view)return 0;const c=this._mergedHighlights;for(const{name:d}of c)t.delete(d)&&(n=o),o<<=1;for(const d of t)N.getLogger(this).error("#highlights",`${d} was not found. Features in this group will not be highlighted.`);return n}};return i([s()],r.prototype,"attached",void 0),i([s({type:v,set(t){const o=O(t,this._get("clips"),v);this._set("clips",o)}})],r.prototype,"clips",void 0),i([s()],r.prototype,"container",void 0),i([s({type:j})],r.prototype,"highlightOptions",null),i([s({type:R.ofType(_)})],r.prototype,"highlights",void 0),i([s()],r.prototype,"_mergedHighlights",null),i([s()],r.prototype,"moving",void 0),i([s({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),i([s({readOnly:!0})],r.prototype,"updateParameters",void 0),i([s()],r.prototype,"updateRequested",void 0),i([s()],r.prototype,"updating",null),i([s()],r.prototype,"view",void 0),i([s()],r.prototype,"_visibleAtCurrentScale",void 0),i([s({readOnly:!0})],r.prototype,"visibleAtCurrentScale",null),r=i([u("esri.views.2d.layers.LayerView2D")],r),r};export{D as a,J as j};
