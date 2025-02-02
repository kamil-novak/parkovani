import{eQ as C,kf as H,a7 as t,a8 as s,ag as J,fQ as Q,kg as b,kh as U,ab as F,ki as X,az as k,d8 as B,cC as A,id as L,d7 as G,kj as I,ae as K,gB as E,bS as q,eU as W,eX as Y,af as Z,f4 as ee}from"./index-Bf1OihDl.js";import{c as te,b as ie}from"./featureReferenceUtils-C8EgzlPv.js";import{c as se}from"./Analysis-DvEnpVRR.js";import"./sphere-DWbgonzU.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-BCZoS4VK.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./IntersectorInterfaces-dI_rFEZm.js";import"./boundedPlane-2E8vu_qR.js";import"./lineSegment-BVWr2vTK.js";let a=class extends C(X){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(e){return H(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&te(this.feature,e.feature)}};t([s({type:J,json:{write:!0}})],a.prototype,"observer",void 0),t([s({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],a.prototype,"farDistance",void 0),t([s({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),Q(i=>b.normalize(U(i),void 0,!0))],a.prototype,"heading",void 0),t([s({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],a.prototype,"tilt",void 0),t([s({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],a.prototype,"horizontalFieldOfView",void 0),t([s({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],a.prototype,"verticalFieldOfView",void 0),t([s(ie)],a.prototype,"feature",void 0),t([s({json:{read:!1}})],a.prototype,"isValid",null),a=t([F("esri.analysis.Viewshed")],a);const P=a,j=k.ofType(P);let p=class extends se{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles(A(()=>this._computeExtent(),e=>{e.pending==null&&(this._extent=e.extent)},L))}get viewsheds(){return this._get("viewsheds")||new j}set viewsheds(e){this._set("viewsheds",G(e,this.viewsheds,j))}get spatialReference(){for(const e of this.viewsheds)if(e.observer!=null)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map(({observer:e})=>e)}async waitComputeExtent(){const e=this._computeExtent();e.pending!=null&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(e==null)return{pending:null,extent:null};const u=this.viewsheds.filter(r=>r.observer!=null),y=u.map(r=>r.observer).toArray(),o=I(y,e);return o.pending!=null?{pending:o.pending,extent:null}:{pending:null,extent:o.geometries.map((r,d)=>{const V=u.at(d);return r!=null&&V!=null?this._computeViewshedExtent(this.viewsheds.at(d),r):null}).filter(r=>r!=null).reduce((r,d)=>re(r,d),null)}}_computeViewshedExtent(e,u){const{farDistance:y,heading:o,tilt:r,horizontalFieldOfView:d,verticalFieldOfView:V}=e,{spatialReference:v}=u,O=d/2,$=V/2,z=y/v.metersPerUnit,S=[b.normalize(o-O),o,b.normalize(o+O)],h=K.fromPoint(u),g=f=>{const c=S.map(l=>b.normalize(l-f));if(c[0]>c[2]||d===360)return z;const w=c.map(l=>Math.abs(l>180?360-l:l)).reduce((l,x)=>l>x?x:l);return w>90?0:z*Math.cos(E(w))};h.xmax+=g(90),h.xmin-=g(-90),h.ymax+=g(0),h.ymin-=g(180);const m=u.z;if(m!=null){let f=m,c=m;const w=r-90,l=q(w+$,-90,90),x=q(w-$,-90,90),N=v!=null&&v.isGeographic?y:z;f+=N*R(l),c+=N*R(x);const T=M($)*N,_=R(w)*T*(1-M(O));r<90&&(f-=_),r>90&&(c-=_),h.zmax=Math.max(f,m),h.zmin=Math.min(c,m)}return h}clear(){this.viewsheds.removeAll()}};function re(i,e){return i==null?e:e==null?i:i.union(e)}function M(i){return Math.cos(E(i))}function R(i){return Math.sin(E(i))}t([s({type:["viewshed"]})],p.prototype,"type",void 0),t([s({cast:B,type:j,nonNullable:!0})],p.prototype,"viewsheds",null),t([s({readOnly:!0})],p.prototype,"spatialReference",null),t([s()],p.prototype,"_extent",void 0),t([s({readOnly:!0})],p.prototype,"extent",null),t([s({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([F("esri.analysis.ViewshedAnalysis")],p);const D=p;let n=class extends W(Y(ee)){constructor(i){super(i),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new D,this.opacity=1}initialize(){this.addHandles(A(()=>this.source,(i,e)=>{e!=null&&e.parent===this&&(e.parent=null),i!=null&&(i.parent=this)},L))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(i){this.source===i&&(this.source=new D)}get analysis(){return this.source}set analysis(i){this.source=i}get viewsheds(){return this.source.viewsheds}set viewsheds(i){this.source.viewsheds=i}writeViewsheds(i,e,u,y){e.viewsheds=i.filter(o=>o.isValid()).map(o=>o.toJSON(y)).toJSON()}};t([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([s({type:["ViewshedLayer"]})],n.prototype,"operationalLayerType",void 0),t([s({nonNullable:!0})],n.prototype,"source",void 0),t([s({readOnly:!0})],n.prototype,"spatialReference",null),t([s({readOnly:!0})],n.prototype,"fullExtent",null),t([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([s({type:["show","hide"]})],n.prototype,"listMode",void 0),t([s({type:k.ofType(P),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"viewsheds",null),t([Z("web-scene","viewsheds")],n.prototype,"writeViewsheds",null),n=t([F("esri.layers.ViewshedLayer")],n);const ve=n;export{ve as default};
