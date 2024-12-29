import{eV as C,kd as H,a7 as t,a8 as s,ag as J,fR as B,ke as b,kf as G,ab as F,kg as U,az as k,d9 as X,cD as A,id as L,d8 as Y,kh as I,ae as K,gB as _,bS as q,eY as Q,e_ as W,af as Z,dj as ee}from"./index-DKZ740yB.js";import{c as te,b as ie}from"./featureReferenceUtils-CVOCcaw9.js";import{c as se}from"./Analysis-zBApVkxG.js";import"./sphere-DltEyvUF.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-CZuXnedf.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./IntersectorInterfaces-dI_rFEZm.js";import"./boundedPlane-DdOvkJUd.js";import"./lineSegment-OypHFrNj.js";let a=class extends C(U){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(e){return H(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&te(this.feature,e.feature)}};t([s({type:J,json:{write:!0}})],a.prototype,"observer",void 0),t([s({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],a.prototype,"farDistance",void 0),t([s({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),B(i=>b.normalize(G(i),void 0,!0))],a.prototype,"heading",void 0),t([s({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],a.prototype,"tilt",void 0),t([s({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],a.prototype,"horizontalFieldOfView",void 0),t([s({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],a.prototype,"verticalFieldOfView",void 0),t([s(ie)],a.prototype,"feature",void 0),t([s({json:{read:!1}})],a.prototype,"isValid",null),a=t([F("esri.analysis.Viewshed")],a);const P=a,j=k.ofType(P);let p=class extends se{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles(A(()=>this._computeExtent(),e=>{e.pending==null&&(this._extent=e.extent)},L))}get viewsheds(){return this._get("viewsheds")||new j}set viewsheds(e){this._set("viewsheds",Y(e,this.viewsheds,j))}get spatialReference(){for(const e of this.viewsheds)if(e.observer!=null)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map(({observer:e})=>e)}async waitComputeExtent(){const e=this._computeExtent();e.pending!=null&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(e==null)return{pending:null,extent:null};const u=this.viewsheds.filter(r=>r.observer!=null),y=u.map(r=>r.observer).toArray(),o=I(y,e);return o.pending!=null?{pending:o.pending,extent:null}:{pending:null,extent:o.geometries.map((r,d)=>{const V=u.at(d);return r!=null&&V!=null?this._computeViewshedExtent(this.viewsheds.at(d),r):null}).filter(r=>r!=null).reduce((r,d)=>re(r,d),null)}}_computeViewshedExtent(e,u){const{farDistance:y,heading:o,tilt:r,horizontalFieldOfView:d,verticalFieldOfView:V}=e,{spatialReference:v}=u,O=d/2,$=V/2,z=y/v.metersPerUnit,S=[b.normalize(o-O),o,b.normalize(o+O)],h=K.fromPoint(u),g=f=>{const c=S.map(l=>b.normalize(l-f));if(c[0]>c[2]||d===360)return z;const w=c.map(l=>Math.abs(l>180?360-l:l)).reduce((l,x)=>l>x?x:l);return w>90?0:z*Math.cos(_(w))};h.xmax+=g(90),h.xmin-=g(-90),h.ymax+=g(0),h.ymin-=g(180);const m=u.z;if(m!=null){let f=m,c=m;const w=r-90,l=q(w+$,-90,90),x=q(w-$,-90,90),R=v!=null&&v.isGeographic?y:z;f+=R*N(l),c+=R*N(x);const T=D($)*R,E=N(w)*T*(1-D(O));r<90&&(f-=E),r>90&&(c-=E),h.zmax=Math.max(f,m),h.zmin=Math.min(c,m)}return h}clear(){this.viewsheds.removeAll()}};function re(i,e){return i==null?e:e==null?i:i.union(e)}function D(i){return Math.cos(_(i))}function N(i){return Math.sin(_(i))}t([s({type:["viewshed"]})],p.prototype,"type",void 0),t([s({cast:X,type:j,nonNullable:!0})],p.prototype,"viewsheds",null),t([s({readOnly:!0})],p.prototype,"spatialReference",null),t([s()],p.prototype,"_extent",void 0),t([s({readOnly:!0})],p.prototype,"extent",null),t([s({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([F("esri.analysis.ViewshedAnalysis")],p);const M=p;let n=class extends Q(W(ee)){constructor(i){super(i),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new M,this.opacity=1}initialize(){this.addHandles(A(()=>this.source,(i,e)=>{e!=null&&e.parent===this&&(e.parent=null),i!=null&&(i.parent=this)},L))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(i){this.source===i&&(this.source=new M)}get analysis(){return this.source}set analysis(i){this.source=i}get viewsheds(){return this.source.viewsheds}set viewsheds(i){this.source.viewsheds=i}writeViewsheds(i,e,u,y){e.viewsheds=i.filter(o=>o.isValid()).map(o=>o.toJSON(y)).toJSON()}};t([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([s({type:["ViewshedLayer"]})],n.prototype,"operationalLayerType",void 0),t([s({nonNullable:!0})],n.prototype,"source",void 0),t([s({readOnly:!0})],n.prototype,"spatialReference",null),t([s({readOnly:!0})],n.prototype,"fullExtent",null),t([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([s({type:["show","hide"]})],n.prototype,"listMode",void 0),t([s({type:k.ofType(P),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"viewsheds",null),t([Z("web-scene","viewsheds")],n.prototype,"writeViewsheds",null),n=t([F("esri.layers.ViewshedLayer")],n);const ve=n;export{ve as default};