import{d_ as x,ci as P,jJ as d,a6 as i,a7 as s,b1 as w,cf as O,a8 as h,ck as T,jF as N,ac as v,ak as k,a9 as $,hc as L,aj as R,jK as C,eP as H,jL as M,jM as V,e1 as J,e3 as K,ch as B}from"./index-BkgwewGo.js";import{c as D}from"./Analysis-BOj5ANj0.js";import{j as f}from"./persistable-BOnv8S3p.js";import{i as G}from"./elevationInfoUtils-BLeAH6sr.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-CS0ORPie.js";function S(e,t){return m(e)===m(t)}function m(e){if(e==null)return null;const t=e.layer!=null?e.layer.id:"";let r=null;return r=e.objectId!=null?e.objectId:e.layer!=null&&"objectIdField"in e.layer&&e.layer.objectIdField!=null&&e.attributes!=null?e.attributes[e.layer.objectIdField]:e.uid,r==null?null:`o-${t}-${r}`}const E={json:{write:{writer:Q,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:U}}}};function Q(e,t){var r;((r=e==null?void 0:e.layer)==null?void 0:r.objectIdField)!=null&&e.attributes!=null&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function U(e){if(e.layerId!=null&&e.objectId!=null)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}let a=class extends x(P(T)){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return d(this.position,t.position)&&d(this.elevationInfo,t.elevationInfo)&&S(this.feature,t.feature)}};i([s({type:w,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),i([s({type:O}),f()],a.prototype,"elevationInfo",void 0),i([s(E)],a.prototype,"feature",void 0),a=i([h("esri.analysis.LineOfSightAnalysisObserver")],a);const F=a;let u=class extends x(N){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return d(this.position,e.position)&&d(this.elevationInfo,e.elevationInfo)&&S(this.feature,e.feature)}};i([s({type:w}),f()],u.prototype,"position",void 0),i([s({type:O}),f()],u.prototype,"elevationInfo",void 0),i([s(E)],u.prototype,"feature",void 0),u=i([h("esri.analysis.LineOfSightAnalysisTarget")],u);const _=u,g=v.ofType(_);let l=class extends D{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles($(()=>this._computeExtent(),t=>{(t==null?void 0:t.pending)==null&&this._set("extent",t!=null?t.extent:null)},L))}get targets(){return this._get("targets")||new g}set targets(t){this._set("targets",R(t,this.targets,g))}get spatialReference(){var t;return((t=this.observer)==null?void 0:t.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var t;return[(t=this.observer)==null?void 0:t.position]}async waitComputeExtent(){const t=this._computeExtent();return t!=null?t.pending:Promise.resolve()}_computeExtent(){var j;const t=this.spatialReference;if(((j=this.observer)==null?void 0:j.position)==null||t==null)return null;const r=p=>G(p.position,p.elevationInfo)==="absolute-height",o=this.observer.position,b=C(o.x,o.y,o.z,o.x,o.y,o.z);for(const p of this.targets)if(p.position!=null){const y=H(p.position,t);if(y.pending!=null)return{pending:y.pending,extent:null};if(y.geometry!=null){const{x:z,y:q,z:A}=y.geometry;M(b,[z,q,A])}}const c=V(b,t);return r(this.observer)&&this.targets.every(r)||(c.zmin=void 0,c.zmax=void 0),{pending:null,extent:c}}clear(){this.observer=null,this.targets.removeAll()}};i([s({type:["line-of-sight"]})],l.prototype,"type",void 0),i([s({type:F,json:{read:!0,write:!0}})],l.prototype,"observer",void 0),i([s({cast:k,type:g,nonNullable:!0,json:{read:!0,write:!0}})],l.prototype,"targets",null),i([s({value:null,readOnly:!0})],l.prototype,"extent",void 0),i([s({readOnly:!0})],l.prototype,"spatialReference",null),i([s({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=i([h("esri.analysis.LineOfSightAnalysis")],l);const I=l,W=v.ofType(_);let n=class extends J(K(B)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new I,this.opacity=1}initialize(){this.addHandles($(()=>this.analysis,(e,t)=>{t!=null&&t.parent===this&&(t.parent=null),e!=null&&(e.parent=this)},L))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var e;return(e=this.analysis)==null?void 0:e.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return this.analysis!=null?this.analysis.targets:new v}set targets(e){var t;R(e,(t=this.analysis)==null?void 0:t.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new I)}};i([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),i([s({type:["LineOfSightLayer"]})],n.prototype,"operationalLayerType",void 0),i([s({type:F,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],n.prototype,"observer",null),i([s({type:W,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"targets",null),i([s({nonNullable:!0,json:{read:!1,write:!1}})],n.prototype,"analysis",void 0),i([s({readOnly:!0})],n.prototype,"fullExtent",null),i([s({readOnly:!0})],n.prototype,"spatialReference",null),i([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),i([s({type:["show","hide"]})],n.prototype,"listMode",void 0),n=i([h("esri.layers.LineOfSightLayer")],n);const re=n;export{re as default};