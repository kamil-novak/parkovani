import{ej as _e,ba as Ie,hE as Oe,ov as Re,iX as Te,bb as ot,bc as ie,dr as q,iM as $,kc as N,ae as i,af as s,fO as ce,ai as m,aj as g,fd as st,fC as j,eL as k,aR as d,de,c4 as le,ow as ae,aG as te,a6 as Ee,ox as Ae,az as P,_ as rt,ef as nt,m7 as lt,ax as ve,gD as at,jc as pt,ei as ut,f3 as ct,eU as dt,eV as yt,dm as ht,eW as mt,f4 as gt,f5 as ft,nE as vt,bn as bt,s as be,al as Be,cx as W,dY as St,hQ as xt,fy as Ce,ka as ke,eY as wt,eZ as Vt,cs as De,cM as jt,mt as $t,dq as Nt}from"./index-ZNyjz3YK.js";import{R as zt}from"./SceneService-BfptBY8n.js";import{j as It}from"./persistable-BYKZKxT1.js";import{b as Se,x as Rt}from"./quat-BtuWl2mw.js";import{e as me}from"./quatf64-aQ5IuZRd.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceUtils-mRJqlD4k.js";import"./resourceUtils-C2xy2_nX.js";import"./saveUtils-ksZS7p7z.js";import"./resourceExtension-KXy0Cy8v.js";import"./mat3f64-q3fE-ZOt.js";const f=ot(),Pe=me(),qe=me(),Le=me(),Ue=ie(0,0,1),Tt=ie(0,1,0),At=ie(1,0,0);function J(e){_e(f,e),Ie(f,f);const t=Math.atan2(f[1],f[0]),o=Se(me(),Ue,-t);Oe(f,f,o);const r=-1*Math.atan2(f[2],f[0]);return[Re(t)+270,Re(r)+90]}function ye(e,t){return Se(qe,Ue,Te(e-270)),Se(Le,Tt,Te(t-90)),Rt(Pe,qe,Le),_e(f,At),Oe(f,f,Pe),Ie(f,f),[f[0],f[1],f[2]]}let I=class extends q(g){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(t),0,!0)}set orientation(t){const o=ye(t,this.tilt);this._set("normal",o),this._set("orientation",t)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(o),0,!0)}set tilt(t){const o=ye(this.orientation,t);this._set("normal",o),this._set("tilt",t)}};i([s({type:Boolean,json:{write:!0}})],I.prototype,"enabled",void 0),i([s({type:String,json:{write:!0}})],I.prototype,"label",void 0),i([s({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>$.normalize(N(e),0,!0))],I.prototype,"orientation",null),i([s({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>$.normalize(N(e),0,!0))],I.prototype,"tilt",null),i([s({type:[Number],json:{write:!0}})],I.prototype,"normal",void 0),i([s({type:[Number],json:{write:!0}})],I.prototype,"point",void 0),I=i([m("esri.layers.voxel.VoxelSlice")],I);const he=I;let b=class extends q(g){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(t),0,!0)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(o),0,!0)}};i([s({type:Boolean,json:{default:!0,write:!0}})],b.prototype,"enabled",void 0),i([s({type:String,json:{origins:{service:{read:st}},write:{enabled:!0,isRequired:!0}}}),It({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],b.prototype,"href",void 0),i([s({type:j,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"id",void 0),i([s({type:String,json:{write:!0}})],b.prototype,"label",void 0),i([s({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"orientation",null),i([s({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"tilt",null),i([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"normal",void 0),i([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"point",void 0),i([s({type:[j],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"sizeInPixel",void 0),i([s({type:[he],json:{write:!0}})],b.prototype,"slices",void 0),i([s({type:j,json:{default:0,write:!0}})],b.prototype,"timeId",void 0),i([s({type:j,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"variableId",void 0),b=i([m("esri.layers.voxel.VoxelSection")],b);const xe=b;let Q=class extends g{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};i([s({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],Q.prototype,"diffuseFactor",void 0),i([s({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],Q.prototype,"specularFactor",void 0),Q=i([m("esri.layers.voxel.VoxelSimpleShading")],Q);const We=Q;let R=class extends g{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};i([s({type:["discrete","continuous"],json:{write:!0}})],R.prototype,"continuity",void 0),i([s({type:Boolean,json:{write:!0}})],R.prototype,"hasNoData",void 0),i([s({type:Number,json:{write:!0}})],R.prototype,"noData",void 0),i([s({type:Number,json:{write:!0}})],R.prototype,"offset",void 0),i([s({type:Number,json:{write:!0}})],R.prototype,"scale",void 0),i([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],R.prototype,"type",void 0),R=i([m("esri.layers.voxel.VoxelFormat")],R);const Fe=R;let V=class extends g{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"id",void 0),i([s({type:String,json:{write:!0}})],V.prototype,"description",void 0),i([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"name",void 0),i([s({type:Fe,json:{write:!0}})],V.prototype,"originalFormat",void 0),i([s({type:Fe,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"renderingFormat",void 0),i([s({type:String,json:{write:!0}})],V.prototype,"unit",void 0),i([s({type:Number,json:{write:!0}})],V.prototype,"volumeId",void 0),i([s({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],V.prototype,"type",void 0),V=i([m("esri.layers.voxel.VoxelVariable")],V);const Dt=V;let M=class extends q(g){constructor(){super(...arguments),this.color=k.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};i([s({type:k,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],M.prototype,"color",void 0),i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"value",void 0),i([s({type:Boolean,json:{default:!0,write:!0}})],M.prototype,"enabled",void 0),i([s({type:String,json:{write:!0}})],M.prototype,"label",void 0),i([s({type:Boolean,json:{default:!1,write:!0}})],M.prototype,"colorLocked",void 0),M=i([m("esri.layers.voxel.VoxelIsosurface")],M);const Je=M;let X=class extends q(g){constructor(){super(...arguments),this.color=null,this.position=0}};i([s({type:k,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],X.prototype,"color",void 0),i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],X.prototype,"position",void 0),X=i([m("esri.layers.voxel.VoxelColorStop")],X);const we=X;let H=class extends q(g){constructor(){super(...arguments),this.opacity=1,this.position=0}};i([s({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],H.prototype,"opacity",void 0),i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],H.prototype,"position",void 0),H=i([m("esri.layers.voxel.VoxelOpacityStop")],H);const Ve=H;let K=class extends q(g){constructor(){super(...arguments),this.enabled=!1,this.range=null}};i([s({type:Boolean,json:{default:!1,write:!0}})],K.prototype,"enabled",void 0),i([s({type:[Number],json:{write:!0}})],K.prototype,"range",void 0),K=i([m("esri.layers.voxel.VoxelRangeFilter")],K);const Pt=K;var w;(function(e){e[e.Color=1]="Color",e[e.Alpha=2]="Alpha",e[e.Both=3]="Both"})(w||(w={}));let T=class extends q(g){constructor(e){super(e),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(d.ofType(we)),this.opacityStops=new(d.ofType(Ve))}set colorStops(e){this._set("colorStops",de(e,this._get("colorStops"),d.ofType(we)))}set opacityStops(e){this._set("opacityStops",de(e,this._get("opacityStops"),d.ofType(Ve)))}getPreviousNext(e,t,o){let r=e;for(;--r>0&&t[r].type!==o&&t[r].type!==w.Both;);let n=e;const l=t.length;for(;++n<l&&t[n].type!==o&&t[n].type!==w.Both;);return[r,n]}get rasterizedTransferFunction(){const e=[];if(this.colorStops.length<2)return e;const t=[],o=[],r=1e-5;for(const a of this.colorStops){if(!a.color)return e;o.push({color:{r:a.color.r,g:a.color.g,b:a.color.b,a:Math.round(255*(1-a.color.a))},position:a.position,type:w.Color})}if(this.opacityStops.length===0)for(const a of o)t.push({color:a.color,position:a.position});else{for(const u of this.opacityStops){const c=le(u.position,0,1),y=Math.round(255*le(1-u.opacity,0,1));let v=!1;for(const h of o)if(h.type===w.Color&&Math.abs(h.position-c)<r){h.color.a=y,h.type=w.Both,v=!0;break}v||o.push({color:{r:0,g:0,b:0,a:y},position:u.position,type:w.Alpha})}o.sort((u,c)=>u.position<c.position?-1:1);const a=o.length;for(let u=0;u<a;++u){const c=o[u];if(c.type!==w.Both)if(c.type===w.Color){const[y,v]=this.getPreviousNext(u,o,w.Alpha);if(y!==-1&&v!==a){const h=(c.position-o[y].position)/(o[v].position-o[y].position);c.color.a=Math.round(ae(o[y].color.a,o[v].color.a,h))}else c.color.a=y!==-1?o[y].color.a:o[v].color.a}else{const[y,v]=this.getPreviousNext(u,o,w.Color);if(y!==-1&&v!==a){const h=(c.position-o[y].position)/(o[v].position-o[y].position),L=o[y].color,oe=o[v].color;pe.forEach(F=>{c.color[F]=Math.round(ae(L[F],oe[F],h))})}else y!==-1?pe.forEach(h=>{c.color[h]=o[y].color[h]}):pe.forEach(h=>{c.color[h]=o[v].color[h]})}}for(const u of o)t.push({color:u.color,position:u.position})}t[0].position=0,t[t.length-1].position=1;let n=0,l=1;for(let a=0;a<this._colorMapSize;++a){const u=a/this._colorMapSize;for(;u>t[l].position;)n=l++;const c=(u-t[n].position)/(t[l].position-t[n].position),y=t[n].color,v=t[l].color,h=new k;pe.forEach(L=>{h[L]=Math.round(ae(y[L],v[L],c))}),h.a=le(1-ae(y.a,v.a,c)/255,0,1),e.push(h)}return e}getColorForContinuousDataValue(e,t){const o=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||o.length<256)return null;let r=this.stretchRange[0],n=this.stretchRange[1];if(r>n){const a=r;r=n,n=a}e=le(e,r,n);const l=o[Math.round((e-r)/(n-r)*(this._colorMapSize-1))].clone();return t||(l.a=1),l}};i([s({type:["linear","nearest"],json:{write:!0}})],T.prototype,"interpolation",void 0),i([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],T.prototype,"stretchRange",void 0),i([s({type:d.ofType(we),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],T.prototype,"colorStops",null),i([s({type:d.ofType(Ve),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],T.prototype,"opacityStops",null),i([s({type:Pt,json:{write:!0}})],T.prototype,"rangeFilter",void 0),i([s({type:[k],clonable:!1,json:{read:!1}})],T.prototype,"rasterizedTransferFunction",null),T=i([m("esri.layers.voxel.VoxelTransferFunctionStyle")],T);const qt=T,pe=["r","g","b"];let B=class extends q(g){constructor(){super(...arguments),this.color=k.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};i([s({type:k,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],B.prototype,"color",void 0),i([s({type:j,json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"value",void 0),i([s({type:Boolean,json:{default:!0,write:!0}})],B.prototype,"enabled",void 0),i([s({type:String,json:{write:!0}})],B.prototype,"label",void 0),B=i([m("esri.layers.voxel.VoxelUniqueValue")],B);const Ze=B;var je;let _=je=class extends g{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(d.ofType(Ze)),this.isosurfaces=new(d.ofType(Je))}clone(){return new je({variableId:this.variableId,label:this.label,transferFunction:te(this.transferFunction),uniqueValues:te(this.uniqueValues),isosurfaces:te(this.isosurfaces)})}};i([s({type:j,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"variableId",void 0),i([s({type:String,json:{write:!0}})],_.prototype,"label",void 0),i([s({type:qt,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],_.prototype,"transferFunction",void 0),i([s({type:d.ofType(Ze),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],_.prototype,"uniqueValues",void 0),i([s({type:d.ofType(Je),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,t=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&t}}}}})],_.prototype,"isosurfaces",void 0),_=je=i([m("esri.layers.voxel.VoxelVariableStyle")],_);const Ye=_;function Me(e){const t=/^(days?|hours?|minutes?|seconds?|d|h|m|s) since (\d{1,4})-(\d{1,2})-(\d{1,2})[ |T](\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[\s|Z]?(([+|\-|\s?])(\d{1,2}):(\d{1,2}))?$/i.exec(e);if(t==null)return{didParse:!1};const[,o,r,n,l,a,u,c,y,v,h,L,oe]=t;let F="seconds";const ge=o.charAt(0).toLowerCase();ge==="d"?F="days":ge==="h"?F="hours":ge==="m"&&(F="minutes");const Z=parseInt(r,10);if(Number.isNaN(Z))return{didParse:!1};const z=parseInt(n,10);if(Number.isNaN(z)||z<1||z>12)return{didParse:!1};const O=parseInt(l,10);if(Number.isNaN(O)||O<1||O>31)return{didParse:!1};if(z===2){const G=Z%4==0&&(Z%100!=0||Z%400==0);if(G&&O>29||!G&&O>28)return{didParse:!1}}else if((z===4||z===6||z===9||z===11)&&O>30)return{didParse:!1};const se=parseInt(a,10);if(Number.isNaN(se)||se<0||se>23)return{didParse:!1};const re=parseInt(u,10);if(Number.isNaN(re)||re<0||re>59)return{didParse:!1};const ne=parseInt(c,10);if(Number.isNaN(ne)||ne<0||ne>59)return{didParse:!1};let fe=1,E=0,U=0;if(h&&(fe=h==="-"?-1:1),L){if(E=parseInt(L,10),Number.isNaN(E)||E<0)return{didParse:!1};if(E!==0){const G=fe*E;if(G<-12||G>14)return{didParse:!1}}}if(oe&&(U=parseInt(oe,10),Number.isNaN(U)||U<0||U>59))return{didParse:!1};const Xe=`${Z}`.padStart(4,"0"),He=`${z}`.padStart(2,"0"),Ke=`${O}`.padStart(2,"0"),et=`${se}`.padStart(2,"0"),tt=`${re}`.padStart(2,"0"),it=`${ne}`.padStart(2,"0");let Y="Z";return E===0&&U===0||(Y=fe>0?"+":"-",Y+=`${E}`.padStart(2,"0"),Y+=":",Y+=`${U}`.padStart(2,"0")),{didParse:!0,unit:F,reference:new Date(`${Xe}-${He}-${Ke}T${et}:${tt}:${it}.000${Y}`)}}let ue=class extends g{constructor(){super(...arguments),this.values=null}};i([s({type:[Number],json:{write:!0}})],ue.prototype,"values",void 0),ue=i([m("esri.layers.voxel.VoxelIrregularSpacing")],ue);const Lt=ue;let ee=class extends g{constructor(){super(...arguments),this.scale=1,this.offset=0}};i([s({type:Number,json:{write:!0}})],ee.prototype,"scale",void 0),i([s({type:Number,json:{write:!0}})],ee.prototype,"offset",void 0),ee=i([m("esri.layers.voxel.VoxelRegularSpacing")],ee);const Ft=ee;let S=class extends g{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(this.irregularSpacing==null||this.irregularSpacing===void 0)&&this.regularSpacing!==null}getRange(){var e;return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray((e=this.irregularSpacing)==null?void 0:e.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};i([s({type:Lt,json:{write:!0}})],S.prototype,"irregularSpacing",void 0),i([s({type:Boolean,json:{write:!0}})],S.prototype,"isPositiveUp",void 0),i([s({type:Boolean,json:{write:!0}})],S.prototype,"isWrappedDateLine",void 0),i([s({type:String,json:{write:!0}})],S.prototype,"label",void 0),i([s({type:String,json:{write:!0}})],S.prototype,"name",void 0),i([s({type:String,json:{write:!0}})],S.prototype,"quantity",void 0),i([s({type:Ft,json:{write:!0}})],S.prototype,"regularSpacing",void 0),i([s({type:Number,json:{write:!0}})],S.prototype,"size",void 0),i([s({type:String,json:{write:!0}})],S.prototype,"unit",void 0),i([s({type:Boolean,json:{read:!1}})],S.prototype,"isRegular",null),S=i([m("esri.layers.voxel.VoxelDimension")],S);const Mt=S;let x=class extends g{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=Ee.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(this.zDimension===-1||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),t=this.dimensions[1].getRange(),o=this.dimensions[2],r=o.isRegular?o.getRange():[0,o.size];return[e[0],t[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),t=this.dimensions[1].getRange(),o=this.dimensions[2],r=o.isRegular?o.getRange():[0,o.size],n=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let l=0;l<3;++l)n[l]<2?n[l]=1:n[l]-=1;return o.isRegular&&!o.isPositiveUp&&(n[2]*=-1),[(e[1]-e[0])/n[0],(t[1]-t[0])/n[1],(r[1]-r[0])/n[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0;let t=this.dimensions[3].size>0;if(t){const o=this.dimensions[3];t=o.quantity==="time",t&&o.unit!==null&&(t=Me(o.unit).didParse)}if(!e&&t)return"xyt";if(e&&t)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}get timeStops(){var r,n,l;if(this.volumeType!=="xyzt")return[];const e=this.dimensions[3],t=[],o=Me(e.unit);if(o.didParse){if(e.isRegular){const a=((r=e.regularSpacing)==null?void 0:r.offset)??0,u=((n=e.regularSpacing)==null?void 0:n.scale)||1;for(let c=0;c<e.size;++c){const y=a+u*c;t.push(Ae(o.reference,y,o.unit))}}else if(Array.isArray((l=e.irregularSpacing)==null?void 0:l.values)&&e.irregularSpacing.values.length>0)for(let a=0;a<e.irregularSpacing.values.length;++a){const u=e.irregularSpacing.values[a];t.push(Ae(o.reference,u,o.unit))}}return t}computeVoxelSpaceLocation(e){var r;if(!this.isValid)return[0,0,0];if(this.volumeType==="xyt")return P.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!rt(this.spatialReference,e.spatialReference))return P.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const t=ie(e.x,e.y,e.z??0);nt(t,t,this.originInLayerSpace3D),lt(t,t,this.voxelSizeInLayerSpaceSigned);const o=this.dimensions[this.zDimension];if(!o.isRegular&&Array.isArray((r=o.irregularSpacing)==null?void 0:r.values)&&o.irregularSpacing.values.length>1){const n=e.z??0,l=o.irregularSpacing.values,a=o.isPositiveUp?1:-1,u=l.reduce((c,y)=>Math.abs(a*y-n)<Math.abs(a*c-n)?y:c);for(let c=0;c<l.length;++c)if(l[c]===u){t[2]=c;break}}return[t[0],t[1],t[2]]}computeLayerSpaceLocation(e){var r;if(!this.isValid)return new ve({x:0,y:0,spatialReference:this.spatialReference});const t=at(e);if(pt(t,t,this.voxelSizeInLayerSpaceSigned),ut(t,t,this.originInLayerSpace3D),this.volumeType==="xyt")return new ve({x:t[0],y:t[1],spatialReference:this.spatialReference});const o=this.dimensions[this.zDimension];return o.isRegular||Array.isArray((r=o.irregularSpacing)==null?void 0:r.values)&&(e[2]<0?t[2]=o.irregularSpacing.values[0]:e[2]<o.irregularSpacing.values.length?t[2]=o.irregularSpacing.values[e[2]]:t[2]=o.irregularSpacing.values[o.irregularSpacing.values.length-1],o.isPositiveUp||(t[2]*=-1)),new ve({x:t[0],y:t[1],z:t[2],spatialReference:this.spatialReference})}};i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"id",void 0),i([s({type:[Mt],json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"dimensions",void 0),i([s({type:Ee,json:{read:{enabled:!1}}})],x.prototype,"spatialReference",void 0),i([s({type:Number,json:{read:!1}})],x.prototype,"zDimension",null),i([s({type:[Boolean],json:{read:!1}})],x.prototype,"isValid",null),i([s({type:[Number],json:{read:!1}})],x.prototype,"originInLayerSpace3D",null),i([s({type:[Number],json:{read:!1}})],x.prototype,"voxelSizeInLayerSpaceSigned",null),i([s({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],x.prototype,"volumeType",null),i([s({type:[Number],json:{read:!1}})],x.prototype,"sizeInVoxels",null),i([s({type:[Date],json:{read:!1,write:!1}})],x.prototype,"timeStops",null),x=i([m("esri.layers.voxel.VoxelVolume")],x);const Ge=x;var $e;let C=$e=class extends g{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new $e;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"apronWidth",void 0),i([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"brickSize",void 0),i([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"maxLodLevel",void 0),i([s({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"nodeSize",void 0),C=$e=i([m("esri.layers.voxel.VoxelVolumeIndex")],C);const _t=C;let A=class extends q(g){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(t),0,!0)}set orientation(t){const o=ye(t,this.tilt);this._set("normal",o),this._set("orientation",t)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(o),0,!0)}set tilt(t){const o=ye(this.orientation,t);this._set("normal",o),this._set("tilt",t)}};i([s({type:Boolean,json:{default:!0,write:!0}})],A.prototype,"enabled",void 0),i([s({type:String,json:{write:!0}})],A.prototype,"label",void 0),i([s({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>$.normalize(N(e),0,!0))],A.prototype,"orientation",null),i([s({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>$.normalize(N(e),0,!0))],A.prototype,"tilt",null),i([s({type:[Number],json:{write:!0}})],A.prototype,"normal",void 0),i([s({type:[Number],json:{write:!0}})],A.prototype,"point",void 0),A=i([m("esri.layers.voxel.VoxelDynamicSection")],A);const Ne=A;var ze;let D=ze=class extends g{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(d.ofType(he)),this.dynamicSections=new(d.ofType(Ne))}set slices(e){this._set("slices",de(e,this._get("slices"),d.ofType(he)))}set dynamicSections(e){this._set("dynamicSections",de(e,this._get("dynamicSections"),d.ofType(Ne)))}clone(){return new ze({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:te(this.slices),dynamicSections:te(this.dynamicSections)})}};i([s({type:j,json:{write:{enabled:!0,isRequired:!0}}})],D.prototype,"volumeId",void 0),i([s({type:Number,json:{default:1,write:!0}})],D.prototype,"verticalExaggeration",void 0),i([s({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],D.prototype,"exaggerationMode",void 0),i([s({type:Number,json:{default:0,write:!0}})],D.prototype,"verticalOffset",void 0),i([s({type:d.ofType(he),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],D.prototype,"slices",null),i([s({type:d.ofType(Ne),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],D.prototype,"dynamicSections",null),D=ze=i([m("esri.layers.voxel.VoxelVolumeStyle")],D);const Qe=D;let p=class extends zt(ct(dt(yt(ht(mt(gt(ft(Nt)))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new We,this.opacity=1,this.variables=new d,this.volumes=new d,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.popupTemplate=null,this.test=null,this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0,this.volumeStyles=new(d.ofType(Qe)),this.variableStyles=new(d.ofType(Ye)),this.sections=new(d.ofType(xe))}normalizeCtorArgs(e){return e!=null&&e.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",vt(e,P.getLogger(this)))}load(e){const t=e!=null?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(bt).then(()=>this._fetchService(t)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(o),Promise.resolve(this)}read(e,t){super.read(e,t),(t==null?void 0:t.origin)==="service"&&this.version.major<=3&&this.version.minor<=0&&!this.getAtOrigin("popupTemplate","service")&&this.setAtOrigin("popupTemplate",this.createPopupTemplate(),"service");for(const o of this.volumes)o.spatialReference=this.spatialReference}readVersion(e,t){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new be("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new be("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new be("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,t,o){if(e!=null&&typeof e=="object"){const r=Be.fromJSON(e,o);if(r.zmin===0&&r.zmax===0&&Array.isArray(t.volumes)){const n=Ge.fromJSON(t.volumes[0]);if(n.isValid&&n.volumeType!=="xyt"){const l=n.dimensions[2];if(l.isRegular){let a=l.regularSpacing.offset,u=l.regularSpacing.offset+l.regularSpacing.scale*(l.size-1);if(a>u){const c=a;a=u,u=c}r.zmin=a,r.zmax=u}}}return r}return null}get fields(){const e=[new W({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"}),new W({name:"Voxel.CurrentVariable",alias:"Current Variable",domain:null,editable:!1,length:128,type:"string"})];for(const o of this.variables){const r=new W({name:o.name,alias:o.description,domain:null,editable:!1,length:128,type:o.renderingFormat.continuity==="discrete"?"string":"double"});e.push(r)}const t=this.getVolume(null);if(t!=null){if(t.volumeType==="xyzt"||t.volumeType==="xyt"){const o=new W({name:"Voxel.LocalTime",alias:"Local Time",domain:null,editable:!1,length:256,type:"date"});e.push(o);const r=new W({name:"Voxel.SourceTime",alias:"Source Time",domain:null,editable:!1,length:256,type:"string"});e.push(r)}if(t.volumeType!=="xyt"){const o=new W({name:"Voxel.Depth",alias:"Depth",domain:null,editable:!1,length:128,type:"double"});e.push(o)}}return e}get fieldsIndex(){return this.loaded?new St(this.fields):null}getField(e){var t;return(t=this.fieldsIndex)==null?void 0:t.get(e)}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const t=this.fields;return xt({fields:t,title:"{Voxel.Position}"},e)}getConfiguration(){var t,o;const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:(t=this.index)==null?void 0:t.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&((o=this.index)!=null&&o.isValid())?JSON.stringify(e):""}getVariableStyle(e){let t=-1;if(t=e??this.currentVariableId,!this.variableStyles||t===-1)return null;const o=this.variableStyles.findIndex(r=>r.variableId===t);return o<0?null:this.variableStyles.at(o)}getVariable(e){let t=-1;if(t=e??this.currentVariableId,!this.variables||t===-1)return null;const o=this.variables.findIndex(r=>r.id===t);return o<0?null:this.variables.at(o)}getVolume(e){const t=this.getVariable(e);return t!=null?this.volumes.find(({id:o})=>o===t.volumeId):null}get timeInfo(){const e=this.getVolume(null);if((e==null?void 0:e.volumeType)!=="xyzt")return null;const t=e.timeStops;if(!(t!=null&&t.length))return null;const o=new Ce({start:t[0],end:t.at(-1)});return new ke({fullTimeExtent:o,stops:t})}getVolumeStyle(e){const t=this.getVariable(e);return t!=null?this.volumeStyles.find(({volumeId:o})=>o===t.volumeId):null}getColorForContinuousDataValue(e,t,o){var a;const r=this.getVariable(e);if(r==null||((a=r.renderingFormat)==null?void 0:a.continuity)!=="continuous"||!this.variableStyles)return null;const n=this.variableStyles.findIndex(u=>u.variableId===e);if(n<0)return null;const l=this.variableStyles.at(n);return l!=null&&l.transferFunction?l.transferFunction.getColorForContinuousDataValue(t,o):null}getSections(){const e=[];for(const t of this.sections)e.push(new xe({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}getVariableStyles(){const e=[];for(const t of this.variableStyles){const o=this._getVariable(t);if(o!=null){const r=t.clone();r.isosurfaces.length>4&&(r.isosurfaces=r.isosurfaces.slice(0,3),P.getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const n of r.isosurfaces)if(!n.colorLocked){const l=this.getColorForContinuousDataValue(r.variableId,n.value,!1);l===null||l.equals(n.color)||(n.color=l)}if(o.renderingFormat.continuity==="continuous")(r.transferFunction===null||r.transferFunction.colorStops.length<2)&&P.getLogger(this).error(`VoxelVariableStyle for variable ${o.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),r.transferFunction!==null&&(Array.isArray(r.transferFunction.stretchRange)&&r.transferFunction.stretchRange.length===2||(P.getLogger(this).error(`VoxelVariableStyle for variable ${o.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),r.transferFunction.stretchRange=[0,1],r.transferFunction.colorStops.removeAll()));else if(o.renderingFormat.continuity==="discrete")if(t.uniqueValues.length===0)P.getLogger(this).error(`VoxelVariableStyle for variable ${o.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const n of t.uniqueValues)n.label!==null&&n.label!==void 0||n.value===null||n.value===void 0||(n.label=n.value.toString());e.push(r)}else P.getLogger(this).error(`VoxelVariable ID=${t.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const t of this.volumeStyles){const o=this._getVolumeFromVolumeId(t.volumeId);if(o!=null){const r=t.clone();for(const n of r.slices)this._isPlaneValid(n,[0,1,o.zDimension],o.dimensions)||(n.enabled=!1,n.label="invalid");for(const n of r.dynamicSections)this._isPlaneValid(n,[0,1,o.zDimension],o.dimensions)||(n.enabled=!1,n.label="invalid");e.push(r)}else P.getLogger(this).error(`VoxelVolume ID=${t.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const t=e.variableId;for(const o of this.variables)if(o.id===t)return o;return null}_getVolumeFromVolumeId(e){for(const t of this.volumes)if(t.id===e)return t;return null}_isPlaneValid(e,t,o){if(!e.point||!Array.isArray(e.point)||e.point.length!==3||!e.normal||!Array.isArray(e.normal)||e.normal.length!==3)return!1;const r=ie(e.normal[0],e.normal[1],e.normal[2]);return Ie(r,r),!(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<1e-6)&&(e.normal[0]=r[0],e.normal[1]=r[1],e.normal[2]=r[2],!0)}};i([s({type:["Voxel"]})],p.prototype,"operationalLayerType",void 0),i([s(wt)],p.prototype,"legendEnabled",void 0),i([s({json:{write:!0}})],p.prototype,"title",void 0),i([s(Vt)],p.prototype,"url",null),i([s({type:d.ofType(xe),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],p.prototype,"sections",void 0),i([s({type:j,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],p.prototype,"currentVariableId",void 0),i([s({type:d.ofType(Qe),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],p.prototype,"volumeStyles",void 0),i([s({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],p.prototype,"renderMode",void 0),i([s({type:d.ofType(Ye),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],p.prototype,"variableStyles",void 0),i([s({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],p.prototype,"enableSlices",void 0),i([s({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],p.prototype,"enableSections",void 0),i([s({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],p.prototype,"enableDynamicSections",void 0),i([s({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],p.prototype,"enableIsosurfaces",void 0),i([s({type:We,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],p.prototype,"shading",void 0),i([s({type:["show","hide"]})],p.prototype,"listMode",void 0),i([s({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],p.prototype,"opacity",void 0),i([s({type:d.ofType(Dt)})],p.prototype,"variables",void 0),i([s({type:d.ofType(Ge)})],p.prototype,"volumes",void 0),i([s({type:_t})],p.prototype,"index",void 0),i([s({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],p.prototype,"minScale",void 0),i([s({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],p.prototype,"maxScale",void 0),i([s({json:{read:!1},readOnly:!0})],p.prototype,"type",void 0),i([s({readOnly:!0,json:{name:"serviceVersion"}})],p.prototype,"version",void 0),i([De("service","version")],p.prototype,"readVersion",null),i([s({type:Be})],p.prototype,"fullExtent",void 0),i([De("service","fullExtent",["fullExtent"])],p.prototype,"readFullExtent",null),i([s({readOnly:!0,clonable:!1,json:{read:!1}})],p.prototype,"fields",null),i([s({readOnly:!0})],p.prototype,"fieldsIndex",null),i([s({type:Boolean,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,t,o){t[o]=!e}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],p.prototype,"popupEnabled",void 0),i([s({type:jt,json:{name:"popupInfo",write:!0}})],p.prototype,"popupTemplate",void 0),i([s({readOnly:!0,json:{read:!1}})],p.prototype,"defaultPopupTemplate",null),i([s({type:ke,readOnly:!0,json:{read:!1}})],p.prototype,"timeInfo",null),i([s({type:Ce,json:{read:!1}})],p.prototype,"timeExtent",void 0),i([s({type:$t,json:{read:!1}})],p.prototype,"timeOffset",void 0),i([s({type:Boolean,nonNullable:!0,json:{origins:{"web-scene":{name:"timeAnimation",write:!0},service:{read:!1}}}})],p.prototype,"useViewTime",void 0),p=i([m("esri.layers.VoxelLayer")],p);const ui=p;export{ui as default};
