import{eK as b,cp as d,P as t,Q as n,fr as h,ki as w,kj as q,X as m,jL as j,ah as v,fD as D,ik as S,jK as z,aB as R,dd as k,cH as $,hP as N,dc as E,jM as L,$ as x,eN as A,eP as C,a0 as T,dr as _}from"./index-i1xHX9d5.js";import{c as H}from"./Analysis-LSrTyh3s.js";let r=class extends b(j){constructor(e){super(e),this.type="simple",this.color=new d("black"),this.lineSize=2,this.fontSize=10,this.textColor=new d("black"),this.textBackgroundColor=new d([255,255,255,.6])}};t([n({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],r.prototype,"type",void 0),t([n({type:d,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],r.prototype,"color",void 0),t([n({type:Number,cast:w,nonNullable:!0,range:{min:q(1)},json:{write:{isRequired:!0}}})],r.prototype,"lineSize",void 0),t([n({type:Number,cast:w,nonNullable:!0,json:{write:{isRequired:!0}}})],r.prototype,"fontSize",void 0),t([n({type:d,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],r.prototype,"textColor",void 0),t([n({type:d,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],r.prototype,"textBackgroundColor",void 0),r=t([m("esri.analysis.DimensionSimpleStyle")],r);const g=r;var y;(function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"})(y||(y={}));const M=[y.Horizontal,y.Vertical,y.Direct];let l=class extends b(j){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=y.Direct,this.offset=0,this.orientation=0}};t([n({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),t([n({type:v,json:{write:!0}})],l.prototype,"startPoint",void 0),t([n({type:v,json:{write:!0}})],l.prototype,"endPoint",void 0),t([n({type:M,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),t([n({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),t([n({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),D(e=>S.normalize(z(e),0,!0))],l.prototype,"orientation",void 0),l=t([m("esri.analysis.LengthDimension")],l);const O=l,f=R.ofType(O);let a=class extends H{constructor(e){super(e),this.type="dimension",this.style=new g,this.extent=null}initialize(){this.addHandles($(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},N))}get dimensions(){return this._get("dimensions")||new f}set dimensions(e){this._set("dimensions",E(e,this.dimensions,f))}get spatialReference(){for(const e of this.dimensions){if(e.startPoint!=null)return e.startPoint.spatialReference;if(e.endPoint!=null)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,i)=>(e.push(i.startPoint,i.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(e==null)return{pending:null,extent:null};const i=[];for(const o of this.dimensions)o.startPoint!=null&&i.push(o.startPoint),o.endPoint!=null&&i.push(o.endPoint);const p=L(i,e);if(p.pending!=null)return{pending:p.pending,extent:null};let c=null;return p.geometries!=null&&(c=p.geometries.reduce((o,u)=>o==null?u!=null?x.fromPoint(u):null:u!=null?o.union(x.fromPoint(u)):o,null)),{pending:null,extent:c}}clear(){this.dimensions.removeAll()}};t([n({type:["dimension"]})],a.prototype,"type",void 0),t([n({cast:k,type:f,nonNullable:!0})],a.prototype,"dimensions",null),t([n({readOnly:!0})],a.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:g}},nonNullable:!0})],a.prototype,"style",void 0),t([n({value:null,readOnly:!0})],a.prototype,"extent",void 0),t([n({readOnly:!0})],a.prototype,"requiredPropertiesForEditing",null),a=t([m("esri.analysis.DimensionAnalysis")],a);const P=a;let s=class extends A(C(_)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new P,this.opacity=1,e){const{source:i,style:p}=e;i&&p&&(i.style=p)}}initialize(){this.addHandles([$(()=>this.source,(e,i)=>{i!=null&&i.parent===this&&(i.parent=null),e!=null&&(e.parent=this)},N)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new P)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,i,p,c){i.dimensions=e.filter(({startPoint:o,endPoint:u})=>o!=null&&u!=null).map(o=>o.toJSON(c)).toJSON()}};t([n({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([n({type:["ArcGISDimensionLayer"]})],s.prototype,"operationalLayerType",void 0),t([n({nonNullable:!0})],s.prototype,"source",void 0),t([n({readOnly:!0})],s.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:g}},json:{write:{ignoreOrigin:!0}}})],s.prototype,"style",null),t([n({readOnly:!0})],s.prototype,"fullExtent",null),t([n({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],s.prototype,"opacity",void 0),t([n({type:["show","hide"]})],s.prototype,"listMode",void 0),t([n({type:R.ofType(O),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],s.prototype,"dimensions",null),t([T("web-scene","dimensions")],s.prototype,"writeDimensions",null),s=t([m("esri.layers.DimensionLayer")],s);const F=s;export{F as default};
