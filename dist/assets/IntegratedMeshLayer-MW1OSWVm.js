import{a7 as i,a8 as a,bR as _,af as I,ab as u,ac as x,cO as b,eo as L,jA as R,aq as N,eQ as M,az as A,a3 as V,al as J,f5 as $,eU as j,eV as U,eW as D,eX as E,f6 as P,f7 as K,cy as q,fq as z,ft as C,bc as G,s as d,ai as S,cn as k,fc as F,f4 as H}from"./index-C4hmu5N0.js";import{j as f}from"./persistable-BdZc0eTc.js";import{R as Q,V as w}from"./SceneService-CwY5Iwre.js";import{p as W,a as X,y as Z,m as B}from"./I3SLayerDefinitions-MS1zAaI5.js";import{$ as T,Z as Y,w as ee}from"./elevationInfoUtils-DDscb-47.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-BfvLf-1Z.js";import"./originUtils-D69mHv66.js";import"./resourceUtils-s0BxxAEN.js";import"./resourceUtils-BC4zxsNg.js";import"./saveUtils-x78kiPfg.js";var h;let n=h=class extends x{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){var l;if((l=r.layer)!=null&&l.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!b(e.spatialReference,r.layer.spatialReference))return void((r==null?void 0:r.messages)&&r.messages.push(new L("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const y=new _;R(e,y,r.layer.spatialReference),t[o]=y.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new h({geometry:N(this.geometry),type:this.type})}};i([a({type:_}),f()],n.prototype,"geometry",void 0),i([I(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),i([a({type:["clip","mask","replace"],nonNullable:!0}),f()],n.prototype,"type",void 0),n=h=i([u("esri.layers.support.SceneModification")],n);const m=n;var p;let c=p=class extends M(A.ofType(m)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const o=new p;for(const r of e)o.add(m.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:V(e),origin:"service"},l=await J(e,{responseType:"json",signal:o==null?void 0:o.signal}),y=t.toJSON(),g=[];for(const v of l.data)g.push(m.fromJSON({...v,geometry:{...v.geometry,spatialReference:y}},r));return new p({url:e,items:g})}};i([a({type:String})],c.prototype,"url",void 0),c=p=i([u("esri.layers.support.SceneModifications")],c);const O=c;let s=class extends Q($(j(U(D(E(P(K(H)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null,this.definitionExpression=null}initialize(){this.addHandles(q(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,z))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:C(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e==null?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){G(o)}if(await this._fetchService(t),this._modificationsSource!=null){const o=await O.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(w.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(w.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new d("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";T(S.getLogger(this),Y(t,"absolute-height",e)),T(S.getLogger(this),ee(t,e))}};i([a({type:String,readOnly:!0})],s.prototype,"geometryType",void 0),i([a({type:["show","hide"]})],s.prototype,"listMode",void 0),i([a({type:["IntegratedMeshLayer"]})],s.prototype,"operationalLayerType",void 0),i([a({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),i([a({type:W,readOnly:!0})],s.prototype,"nodePages",void 0),i([a({type:[X],readOnly:!0})],s.prototype,"materialDefinitions",void 0),i([a({type:[Z],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),i([a({type:[B],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),i([a({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),i([a({type:O}),f({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],s.prototype,"modifications",void 0),i([k(["web-scene","portal-item"],"modifications")],s.prototype,"readModifications",null),i([a(F)],s.prototype,"elevationInfo",null),i([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),s=i([u("esri.layers.IntegratedMeshLayer")],s);const de=s;export{de as default};