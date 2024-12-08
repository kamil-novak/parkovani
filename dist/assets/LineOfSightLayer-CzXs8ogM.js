import{eV as w,dk as A,kd as y,a7 as t,a8 as i,ag as O,dh as $,ab as d,dl as T,kg as P,az as c,d9 as V,cD as j,id as L,d8 as R,kT as C,fJ as F,kU as H,kV as N,eY as D,e_ as J,dj as M}from"./index-CDF62Mj_.js";import{c as U}from"./Analysis-XIITQAFt.js";import{c as E,b as I}from"./featureReferenceUtils-Dl079RhG.js";import{j as f}from"./persistable-gkRpm4JH.js";import{i as Y}from"./elevationInfoUtils-Dtx3b97q.js";import"./sphere-DGwO9T6J.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-DHKeJrPR.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./IntersectorInterfaces-dI_rFEZm.js";import"./boundedPlane-DROIi8Pt.js";import"./lineSegment-D0GpT3rM.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-DlK8eAMQ.js";let a=class extends w(A(T)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&E(this.feature,e.feature)}};t([i({type:O,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),t([i({type:$}),f()],a.prototype,"elevationInfo",void 0),t([i(I)],a.prototype,"feature",void 0),a=t([d("esri.analysis.LineOfSightAnalysisObserver")],a);const z=a;let l=class extends w(P){constructor(s){super(s),this.position=null,this.elevationInfo=null,this.feature=null}equals(s){return y(this.position,s.position)&&y(this.elevationInfo,s.elevationInfo)&&E(this.feature,s.feature)}};t([i({type:O}),f()],l.prototype,"position",void 0),t([i({type:$}),f()],l.prototype,"elevationInfo",void 0),t([i(I)],l.prototype,"feature",void 0),l=t([d("esri.analysis.LineOfSightAnalysisTarget")],l);const S=l,g=c.ofType(S);let r=class extends U{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(j(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},L))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",R(e,this.targets,g))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var b;const e=this.spatialReference;if(((b=this.observer)==null?void 0:b.position)==null||e==null)return null;const v=p=>Y(p.position,p.elevationInfo)==="absolute-height",o=this.observer.position,m=C(o.x,o.y,o.z,o.x,o.y,o.z);for(const p of this.targets)if(p.position!=null){const u=F(p.position,e);if(u.pending!=null)return{pending:u.pending,extent:null};if(u.geometry!=null){const{x:_,y:k,z:q}=u.geometry;H(m,[_,k,q])}}const h=N(m,e);return v(this.observer)&&this.targets.every(v)||(h.zmin=void 0,h.zmax=void 0),{pending:null,extent:h}}clear(){this.observer=null,this.targets.removeAll()}};t([i({type:["line-of-sight"]})],r.prototype,"type",void 0),t([i({type:z,json:{read:!0,write:!0}})],r.prototype,"observer",void 0),t([i({cast:V,type:g,nonNullable:!0,json:{read:!0,write:!0}})],r.prototype,"targets",null),t([i({value:null,readOnly:!0})],r.prototype,"extent",void 0),t([i({readOnly:!0})],r.prototype,"spatialReference",null),t([i({readOnly:!0})],r.prototype,"requiredPropertiesForEditing",null),r=t([d("esri.analysis.LineOfSightAnalysis")],r);const x=r,B=c.ofType(S);let n=class extends D(J(M)){constructor(s){super(s),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new x,this.opacity=1}initialize(){this.addHandles(j(()=>this.analysis,(s,e)=>{e!=null&&e.parent===this&&(e.parent=null),s!=null&&(s.parent=this)},L))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var s;return(s=this.analysis)==null?void 0:s.observer}set observer(s){const{analysis:e}=this;e&&(e.observer=s)}get targets(){return this.analysis!=null?this.analysis.targets:new c}set targets(s){var e;R(s,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(s){this.analysis===s&&(this.analysis=new x)}};t([i({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([i({type:["LineOfSightLayer"]})],n.prototype,"operationalLayerType",void 0),t([i({type:z,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],n.prototype,"observer",null),t([i({type:B,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"targets",null),t([i({nonNullable:!0,json:{read:!1,write:!1}})],n.prototype,"analysis",void 0),t([i({readOnly:!0})],n.prototype,"fullExtent",null),t([i({readOnly:!0})],n.prototype,"spatialReference",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([i({type:["show","hide"]})],n.prototype,"listMode",void 0),n=t([d("esri.layers.LineOfSightLayer")],n);const ye=n;export{ye as default};
