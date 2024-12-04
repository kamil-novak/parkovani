import{eY as j,eN as U,eO as V,dn as z,eP as P,eZ as k,e_ as F,G as b,$ as w,e$ as _,aY as x,ek as G,en as p,eF as $,eo as S,e0 as E,dZ as L,f0 as R,f1 as T,f2 as d,s as W,bb as N,a4 as Z,aj as D,P as c,Q as u,f3 as q,eS as K,X as O,dr as Y,aX as g}from"./index-i1xHX9d5.js";import{$ as X,Z as Q,w as B}from"./elevationInfoUtils-CeSlFrpL.js";let y=class extends j(U(V(z(P(k(F(Y))))))){constructor(a){super(a),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new b({wkid:4326,vcsWkid:115700}),this.fullExtent=new w(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(a){this._set("elevationInfo",a),this._validateElevationInfo()}_verifyArray(a,i){if(!Array.isArray(a)||a.length<i)return!1;for(const o of a)if(typeof o!="number")return!1;return!0}_initFullExtent(a){var I,M;const i=(I=a.root)==null?void 0:I.boundingVolume;if(!i)return;if(i.box){const t=i==null?void 0:i.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const o=(M=a.root)==null?void 0:M.transform,f=g();if(i.region&&this._verifyArray(i.region,6)){const t=i.region,l=_(t[0]),n=_(t[1]),s=t[4],r=_(t[2]),e=_(t[3]),h=t[5];this.fullExtent=new w({xmin:l,ymin:n,zmin:s,xmax:r,ymax:e,zmax:h,spatialReference:this.spatialReference})}else if(i.sphere&&this._verifyArray(i.sphere,4)){const t=i.sphere,l=x(t[0],t[1],t[2]),n=t[3]/Math.sqrt(3),s=g();G(s,l,x(n,n,n));const r=g();if(p(r,l,x(n,n,n)),o&&this._verifyArray(o,16)){const v=o;$(f,s,v),S(s,f),$(f,r,v),S(r,f)}E(s,L,0,s,b.WGS84,0),E(r,L,0,r,b.WGS84,0);const e=g(),h=g();R(e,s,r),T(h,s,r),this.fullExtent=new w({xmin:e[0],ymin:e[1],zmin:e[2],xmax:h[0],ymax:h[1],zmax:h[2],spatialReference:this.spatialReference})}else if(i.box&&this._verifyArray(i.box,12)){const t=i.box,l=x(t[0],t[1],t[2]),n=x(t[3],t[4],t[5]),s=x(t[6],t[7],t[8]),r=x(t[9],t[10],t[11]),e=[];for(let m=0;m<8;++m)e.push(g());if(p(e[0],l,n),p(e[0],e[0],s),p(e[0],e[0],r),d(e[1],l,n),p(e[1],e[1],s),p(e[1],e[1],r),p(e[2],l,n),d(e[2],e[2],s),p(e[2],e[2],r),d(e[3],l,n),d(e[3],e[3],s),p(e[3],e[3],r),p(e[4],l,n),p(e[4],e[4],s),d(e[4],e[4],r),d(e[5],l,n),p(e[5],e[5],s),d(e[5],e[5],r),p(e[6],l,n),d(e[6],e[6],s),d(e[6],e[6],r),d(e[7],l,n),d(e[7],e[7],s),d(e[7],e[7],r),o&&this._verifyArray(o,16)){const m=o;for(let A=0;A<8;++A)$(e[A],e[A],m)}const h=x(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),v=x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let m=0;m<8;++m)E(e[m],L,0,e[m],b.WGS84,0),R(v,v,e[m]),T(h,h,e[m]);this.fullExtent=new w({xmin:v[0],ymin:v[1],zmin:v[2],xmax:h[0],ymax:h[1],zmax:h[2],spatialReference:this.spatialReference})}}async load(a){return this.addResolvingPromise(this._doLoad(a)),this}async _doLoad(a){const i=a!=null?a.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:o=>{var f;if((f=o.typeKeywords)!=null&&f.includes("IntegratedMesh"))return!0;throw new W("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},a)}catch(o){N(o)}this.url&&await Z(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:i}).then(f=>{this._initFullExtent(f.data)},f=>{N(f)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(){const a=this.elevationInfo,i="Integrated mesh 3d tiles layers";X(D.getLogger(this),Q(i,"absolute-height",a)),X(D.getLogger(this),B(i,a))}};c([u({type:["IntegratedMesh3DTilesLayer"]})],y.prototype,"operationalLayerType",void 0),c([u({type:b})],y.prototype,"spatialReference",void 0),c([u({type:w})],y.prototype,"fullExtent",void 0),c([u(q)],y.prototype,"elevationInfo",null),c([u({type:["show","hide"]})],y.prototype,"listMode",void 0),c([u(K)],y.prototype,"url",void 0),c([u({readOnly:!0})],y.prototype,"type",void 0),c([u({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],y.prototype,"path",void 0),c([u({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],y.prototype,"minScale",void 0),c([u({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],y.prototype,"maxScale",void 0),y=c([O("esri.layers.IntegratedMesh3DTilesLayer")],y);const J=y;export{J as default};