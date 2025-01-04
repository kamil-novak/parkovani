import{eM as Fe,V as de,g2 as De,eN as X,ev as H,g3 as Y}from"./index-DhmWq2Im.js";import{N as C,t as Te,D as xe,l as q}from"./arcadeUtils-DGiGFbpj.js";import{i as b,g as be,t as ee,K as A,a as c,r as m,P as v,d as E,j as Ee,B as ue,k as ce,W as me,Y as L,S as $,E as N,U as G,X as k,v as Ne,h as O,J as Ae,l as B,V as Se}from"./languageUtils-C-G6gsG6.js";import{M as Le,q as ye,f as Ze,c as K,e as Ce,a as ve,b as Pe,T as ne,E as Me,N as Re,O as Ue,L as U,B as ke,d as _,R as Z,k as te}from"./featureSetUtils-Ozpk-i2r.js";import{t as $e}from"./ImmutableArray-BPVd6ESQ.js";import{l as Oe}from"./portalUtils-BM7IcXNN.js";import{u as ze,O as pe}from"./SpatialFilter-Bu8tKWPC.js";import{Z as x}from"./WhereClause-Dzs5sSsw.js";import"./featureConversionUtils-DNxNDcP4.js";import"./number-DOS8mz9s.js";import"./geometryEngineAsync-BkVXSp7X.js";function We(i){if(i.length===1){if(N(i[0]))return q("distinct",i[0],-1);if(k(i[0]))return q("distinct",i[0].toArray(),-1)}return q("distinct",i,-1)}async function ie(i,n,a){const p=i.getVariables();if(p.length>0){const F=[];for(let t=0;t<p.length;t++){const s={name:p[t]};F.push(await n.evaluateIdentifier(a,s))}const e={};for(let t=0;t<p.length;t++)e[p[t]]=F[t];return i.parameters=e,i}return i}function u(i,n,a=null){for(const p in i)if(p.toLowerCase()===n.toLowerCase())return i[p];return a}function we(i){if(i===null)return null;const n={type:u(i,"type",""),name:u(i,"name","")};if(n.type==="range")n.range=u(i,"range",[]);else{n.codedValues=[];for(const a of u(i,"codedValues",[]))n.codedValues.push({name:u(a,"name",""),code:u(a,"code",null)})}return n}function ae(i){if(i===null)return null;const n={},a=u(i,"wkt");a!==null&&(n.wkt=a);const p=u(i,"wkid");return p!==null&&(n.wkid=p),n}function he(i){if(i===null)return null;const n={hasZ:u(i,"hasz",!1),hasM:u(i,"hasm",!1)},a=u(i,"spatialreference");a!=null&&(n.spatialReference=ae(a));const p=u(i,"x",null);if(p!==null)return n.x=p,n.y=u(i,"y",null),n.hasZ&&(n.z=u(i,"z",null)),n.hasM&&(n.m=u(i,"m",null)),n;const F=u(i,"rings",null);if(F!==null)return n.rings=F,n;const e=u(i,"paths",null);if(e!==null)return n.paths=e,n;const t=u(i,"points",null);if(t!==null)return n.points=t,n;for(const s of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const f=u(i,s,null);f!==null&&(n[s]=f)}return n}function je(i,n){for(const a of n)if(a===i)return!0;return!1}function He(i){return!!i.layerDefinition&&!!i.featureSet&&je(i.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&N(i.layerDefinition.fields)!==!1&&N(i.featureSet.features)!==!1}function z(i){return(i==null?void 0:i.toLowerCase())==="utc"?"UTC":(i==null?void 0:i.toLowerCase())==="unknown"?"Unknown":i}function nn(i){i.mode==="async"&&(i.functions.timezone=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{var f,y;if(b(e,1,2,n,a),be(e[0])||ee(e[0]))return"Unknown";if(A(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].datesInUnknownTimezone?z("unknown"):z(e[0].dateFieldsTimeZone);if(!(e[1]instanceof C)||e[1].hasField("type")===!1)throw new c(n,m.InvalidParameter,a);const o=e[1].field("type");if(v(o)===!1)throw new c(n,m.InvalidParameter,a);switch(E(o).toLowerCase()){case"preferredtimezone":return z(e[0].preferredTimeZone);case"editfieldsinfo":return z(((f=e[0].editFieldsInfo)==null?void 0:f.timeZone)??null);case"timeinfo":return z(((y=e[0].timeInfo)==null?void 0:y.timeZone)??null);case"field":if(e[1].hasField("fieldname")&&v(e[1].field("fieldname")))return z(e[0].fieldTimeZone(E(e[1].field("fieldname"))))}throw new c(n,m.InvalidParameter,a)}const t=Ee(e[0],ue(n));if(t===null)return null;const s=t.timeZone;return s==="system"?Fe.systemTimeZoneCanonicalName:s.toLowerCase()==="utc"?"UTC":s.toLowerCase()==="unknown"?"Unknown":s})},i.functions.sqltimestamp=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{b(e,1,3,n,a);const t=e[0];if(ce(t)){if(e.length===1)return t.toSQLWithKeyword();if(e.length===2)return t.changeTimeZone(E(e[1])).toSQLWithKeyword();throw new c(n,m.InvalidParameter,a)}if(ee(t))return t.toSQLWithKeyword();if(A(t)){if(e.length!==3)throw new c(n,m.InvalidParameter,a);await t.load();const s=E(e[1]);if(ee(e[2]))return e[2].toSQLWithKeyword();if(ce(e[2])===!1)throw new c(n,m.InvalidParameter,a);const f=t.fieldTimeZone(s);return f===null?e[2].toSQLWithKeyword():e[2].changeTimeZone(f).toSQLWithKeyword()}throw new c(n,m.InvalidParameter,a)})},i.signatures.push({name:"sqltimestamp",min:2,max:4}),i.functions.featuresetbyid=function(n,a){return i.standardFunctionAsync(n,a,(p,F,e)=>{if(b(e,2,4,n,a),me(e[0])){const t=E(e[1]);let s=L(e[2],null);const f=$(L(e[3],!0));if(s===null&&(s=["*"]),N(s)===!1)throw new c(n,m.InvalidParameter,a);return e[0].featureSetById(t,f,s)}throw new c(n,m.InvalidParameter,a)})},i.signatures.push({name:"featuresetbyid",min:2,max:4}),i.functions.getfeatureset=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{if(b(e,1,2,n,a),G(e[0])){let t=L(e[1],"datasource");return t===null&&(t="datasource"),t=E(t).toLowerCase(),Le(e[0].fullSchema(),t,n.lrucache,n.interceptor,n.spatialReference??null)}throw new c(n,m.InvalidParameter,a)})},i.signatures.push({name:"getfeatureset",min:1,max:2}),i.functions.featuresetbyportalitem=function(n,a){return i.standardFunctionAsync(n,a,(p,F,e)=>{var o,r;if(b(e,2,5,n,a),e[0]===null)throw new c(n,m.PortalRequired,a);if(e[0]instanceof Te){const l=E(e[1]),d=E(e[2]);let w=L(e[3],null);const D=$(L(e[4],!0));if(w===null&&(w=["*"]),N(w)===!1)throw new c(n,m.InvalidParameter,a);let h;return h=(o=n.services)!=null&&o.portal?n.services.portal:de.getDefault(),h=Oe(e[0],h),ye(l,d,n.spatialReference??null,w,D,h,n.lrucache,n.interceptor)}if(v(e[0])===!1)throw new c(n,m.PortalRequired,a);const t=E(e[0]),s=E(e[1]);let f=L(e[2],null);const y=$(L(e[3],!0));if(f===null&&(f=["*"]),N(f)===!1)throw new c(n,m.InvalidParameter,a);return ye(t,s,n.spatialReference??null,f,y,((r=n.services)==null?void 0:r.portal)??de.getDefault(),n.lrucache,n.interceptor)})},i.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),i.functions.featuresetbyname=function(n,a){return i.standardFunctionAsync(n,a,(p,F,e)=>{if(b(e,2,4,n,a),me(e[0])){const t=E(e[1]);let s=L(e[2],null);const f=$(L(e[3],!0));if(s===null&&(s=["*"]),N(s)===!1)throw new c(n,m.InvalidParameter,a);return e[0].featureSetByName(t,f,s)}throw new c(n,m.InvalidParameter,a)})},i.signatures.push({name:"featuresetbyname",min:2,max:4}),i.functions.featureset=function(n,a){return i.standardFunction(n,a,(p,F,e)=>{b(e,1,1,n,a);const t={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",hasM:!1,hasZ:!1,fields:[]},featureSet:{geometryType:"",features:[]}};if(v(e[0])){const s=JSON.parse(e[0]);s.layerDefinition!==void 0?(t.layerDefinition=s.layerDefinition,t.featureSet=s.featureSet,s.layerDefinition.spatialReference&&(t.layerDefinition.spatialReference=s.layerDefinition.spatialReference)):(t.featureSet.features=s.features,t.featureSet.geometryType=s.geometryType,t.layerDefinition.geometryType=t.featureSet.geometryType,t.layerDefinition.objectIdField=s.objectIdFieldName??"",t.layerDefinition.typeIdField=s.typeIdFieldName,t.layerDefinition.globalIdField=s.globalIdFieldName,t.layerDefinition.fields=s.fields,s.spatialReference&&(t.layerDefinition.spatialReference=s.spatialReference))}else{if(!(e[0]instanceof C))throw new c(n,m.InvalidParameter,a);{const s=JSON.parse(e[0].castToText(!0)),f=u(s,"layerdefinition");if(f!==null){t.layerDefinition.geometryType=u(f,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.globalIdField=u(f,"globalidfield",""),t.layerDefinition.objectIdField=u(f,"objectidfield",""),t.layerDefinition.typeIdField=u(f,"typeidfield",""),t.layerDefinition.hasZ=u(f,"hasz",!1)===!0,t.layerDefinition.hasM=u(f,"hasm",!1)===!0;const y=u(f,"spatialreference");y&&(t.layerDefinition.spatialReference=ae(y));const o=[];for(const l of u(f,"fields",[])){const d={name:u(l,"name",""),alias:u(l,"alias",""),type:u(l,"type",""),nullable:u(l,"nullable",!0),editable:u(l,"editable",!0),length:u(l,"length",null),domain:we(u(l,"domain"))};o.push(d)}t.layerDefinition.fields=o;const r=u(s,"featureset");if(r){const l={};for(const d of o)l[d.name.toLowerCase()]=d.name;for(const d of u(r,"features",[])){const w={},D=u(d,"attributes",{});for(const h in D)w[l[h.toLowerCase()]]=D[h];t.featureSet.features.push({attributes:w,geometry:he(u(d,"geometry"))})}}}else{t.layerDefinition.hasZ=u(s,"hasz",!1)===!0,t.layerDefinition.hasM=u(s,"hasm",!1)===!0,t.layerDefinition.geometryType=u(s,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.objectIdField=u(s,"objectidfieldname",""),t.layerDefinition.typeIdField=u(s,"typeidfieldname","");const y=u(s,"spatialreference");y&&(t.layerDefinition.spatialReference=ae(y));const o=[],r=u(s,"fields",null);if(!N(r))throw new c(n,m.InvalidParameter,a);for(const w of r){const D={name:u(w,"name",""),alias:u(w,"alias",""),type:u(w,"type",""),nullable:u(w,"nullable",!0),editable:u(w,"editable",!0),length:u(w,"length",null),domain:we(u(w,"domain"))};o.push(D)}t.layerDefinition.fields=o;const l={};for(const w of o)l[w.name.toLowerCase()]=w.name;let d=u(s,"features",null);if(N(d))for(const w of d){const D={},h=u(w,"attributes",{});for(const T in h)D[l[T.toLowerCase()]]=h[T];t.featureSet.features.push({attributes:D,geometry:he(u(w,"geometry",null))})}else d=null,t.featureSet.features=d}}}if(He(t)===!1)throw new c(n,m.InvalidParameter,a);return t.layerDefinition.geometryType||(t.layerDefinition.geometryType="esriGeometryNull"),Ze.create(t,n.spatialReference)})},i.signatures.push({name:"featureset",min:1,max:1}),i.functions.filter=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{if(b(e,2,2,n,a),N(e[0])||k(e[0])){const t=[];let s,f=e[0];if(f instanceof $e&&(f=f.toArray()),!Ne(e[1]))throw new c(n,m.InvalidParameter,a);s=e[1].createFunction(n);for(const y of f){const o=s(y);De(o)?await o===!0&&t.push(y):o===!0&&t.push(y)}return t}if(A(e[0])){const t=await e[0].load(),s=x.create(e[1],{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC}),f=s.getVariables();if(f.length>0){const y=[];for(let r=0;r<f.length;r++){const l={name:f[r]};y.push(await i.evaluateIdentifier(n,l))}const o={};for(let r=0;r<f.length;r++)o[f[r]]=y[r];return s.parameters=o,new K({parentfeatureset:e[0],whereclause:s})}return new K({parentfeatureset:e[0],whereclause:s})}throw new c(n,m.InvalidParameter,a)})},i.signatures.push({name:"filter",min:2,max:2}),i.functions.orderby=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{if(b(e,2,2,n,a),A(e[0])){const t=new Ce(e[1]);return new ve({parentfeatureset:e[0],orderbyclause:t})}throw new c(n,m.InvalidParameter,a)})},i.signatures.push({name:"orderby",min:2,max:2}),i.functions.top=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{if(b(e,2,2,n,a),A(e[0]))return new Pe({parentfeatureset:e[0],topnum:e[1]});if(N(e[0]))return O(e[1])>=e[0].length?e[0].slice():e[0].slice(0,O(e[1]));if(k(e[0]))return O(e[1])>=e[0].length()?e[0].slice():e[0].slice(0,O(e[1]));throw new c(n,m.InvalidParameter,a)})},i.signatures.push({name:"top",min:2,max:2}),i.functions.first=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{if(b(e,1,1,n,a),A(e[0])){const t=await e[0].first(p.abortSignal);if(t!==null){const s=xe.createFromGraphicLikeObject(t.geometry,t.attributes,e[0],n.timeZone);return s._underlyingGraphic=t,s}return t}return N(e[0])?e[0].length===0?null:e[0][0]:k(e[0])?e[0].length()===0?null:e[0].get(0):null})},i.signatures.push({name:"first",min:1,max:1}),i.functions.attachments=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{b(e,1,2,n,a);const t={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof C){if(e[1].hasField("minsize")&&(t.minsize=O(e[1].field("minsize"))),e[1].hasField("metadata")&&(t.returnMetadata=$(e[1].field("metadata"))),e[1].hasField("maxsize")&&(t.maxsize=O(e[1].field("maxsize"))),e[1].hasField("types")){const s=Ae(e[1].field("types"),!1);s.length>0&&(t.types=s)}}else if(e[1]!==null)throw new c(n,m.InvalidParameter,a)}if(G(e[0])){let s=e[0]._layer;return s instanceof X&&(s=ne(s,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),s===null?[]:A(s)===!1?[]:(await s.load(),s.queryAttachments(e[0].field(s.objectIdField),t.minsize,t.maxsize,t.types,t.returnMetadata))}if(e[0]===null)return[];throw new c(n,m.InvalidParameter,a)})},i.signatures.push({name:"attachments",min:1,max:2}),i.functions.featuresetbyrelationshipname=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{b(e,2,4,n,a);const t=e[0],s=E(e[1]);let f=L(e[2],null);const y=$(L(e[3],!0));if(f===null&&(f=["*"]),N(f)===!1)throw new c(n,m.InvalidParameter,a);if(e[0]===null)return null;if(!G(e[0]))throw new c(n,m.InvalidParameter,a);let o=t._layer;if(o instanceof X&&(o=ne(o,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),o===null||A(o)===!1)return null;o=await o.load();const r=o.relationshipMetaData().filter(h=>h.name===s);if(r.length===0)return null;if(r[0].relationshipTableId!==void 0&&r[0].relationshipTableId!==null&&r[0].relationshipTableId>-1)return Me(o,r[0],t.field(o.objectIdField),o.spatialReference,f,y,n.lrucache,n.interceptor);let l=o.serviceUrl();if(!l)return null;l=l.charAt(l.length-1)==="/"?l+r[0].relatedTableId.toString():l+"/"+r[0].relatedTableId.toString();const d=await Re(l,o.spatialReference,f,y,n.lrucache,n.interceptor);await d.load();let w=d.relationshipMetaData();if(w=w.filter(h=>h.id===r[0].id),t.hasField(r[0].keyField)===!1||t.field(r[0].keyField)===null){const h=await o.getFeatureByObjectId(t.field(o.objectIdField),[r[0].keyField]);if(h){const T=x.create(w[0].keyField+"= @id",{fieldsIndex:d.getFieldsIndex(),timeZone:d.dateFieldsTimeZoneDefaultUTC});return T.parameters={id:h.attributes[r[0].keyField]},d.filter(T)}return new ze({parentfeatureset:d})}const D=x.create(w[0].keyField+"= @id",{fieldsIndex:d.getFieldsIndex(),timeZone:d.dateFieldsTimeZoneDefaultUTC});return D.parameters={id:t.field(r[0].keyField)},d.filter(D)})},i.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),i.functions.featuresetbyassociation=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{b(e,2,3,n,a);const t=e[0],s=E(L(e[1],"")).toLowerCase(),f=v(e[2])?E(e[2]):null;if(e[0]===null)return null;if(!G(e[0]))throw new c(n,m.InvalidParameter,a);let y=t._layer;if(y instanceof X&&(y=ne(y,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),y===null||A(y)===!1)return null;await y.load();const o=y.serviceUrl(),r=await Ue(o,n.spatialReference);let l=null,d=null,w=!1;if(f!==null&&f!==""&&f!==void 0){for(const g of r.terminals)g.terminalName===f&&(d=g.terminalId);d===null&&(w=!0)}const D=r.associations.getFieldsIndex(),h=D.get("TOGLOBALID").name,T=D.get("FROMGLOBALID").name,V=D.get("TOTERMINALID").name,J=D.get("FROMTERMINALID").name,W=D.get("FROMNETWORKSOURCEID").name,j=D.get("TONETWORKSOURCEID").name,R=D.get("ASSOCIATIONTYPE").name,Ie=D.get("ISCONTENTVISIBLE").name,ge=D.get("OBJECTID").name;for(const g of y.fields)if(g.type==="global-id"){l=t.field(g.name);break}let P=null,re=new U(new H({name:"percentalong",alias:"percentalong",type:"double"}),x.create("0",{fieldsIndex:r.associations.getFieldsIndex(),timeZone:r.associations.dateFieldsTimeZoneDefaultUTC})),se=new U(new H({name:"side",alias:"side",type:"string"}),x.create("''",{fieldsIndex:r.associations.getFieldsIndex(),timeZone:r.associations.dateFieldsTimeZoneDefaultUTC}));const S="globalid",le="globalId",oe={};for(const g in r.lkp)oe[g]=r.lkp[g].sourceId;const M=new ke(new H({name:"classname",alias:"classname",type:"string"}),null,oe);let I="";switch(s){case"midspan":{I=`((${h}='${l}') OR ( ${T}='${l}')) AND (${R} IN (5))`,M.codefield=x.create(`CASE WHEN (${h}='${l}') THEN ${W} ELSE ${j} END`,{fieldsIndex:r.associations.getFieldsIndex(),timeZone:r.associations.dateFieldsTimeZoneDefaultUTC});const g=Y(Z.findField(r.associations.fields,T));g.name=S,g.alias=S,P=new U(g,x.create(`CASE WHEN (${T}='${l}') THEN ${h} ELSE ${T} END`,{fieldsIndex:r.associations.getFieldsIndex(),timeZone:r.associations.dateFieldsTimeZoneDefaultUTC})),re=r.unVersion>=4?new te(Z.findField(r.associations.fields,D.get("PERCENTALONG").name)):new U(new H({name:"percentalong",alias:"percentalong",type:"double"}),x.create("0",{fieldsIndex:r.associations.getFieldsIndex(),timeZone:r.associations.dateFieldsTimeZoneDefaultUTC}));break}case"junctionedge":{I=`((${h}='${l}') OR ( ${T}='${l}')) AND (${R} IN (4,6))`,M.codefield=x.create(`CASE WHEN (${h}='${l}') THEN ${W} ELSE ${j} END`,{fieldsIndex:r.associations.getFieldsIndex(),timeZone:r.associations.dateFieldsTimeZoneDefaultUTC});const g=Y(Z.findField(r.associations.fields,T));g.name=S,g.alias=S,P=new U(g,x.create(`CASE WHEN (${T}='${l}') THEN ${h} ELSE ${T} END`,{fieldsIndex:r.associations.getFieldsIndex(),timeZone:r.associations.dateFieldsTimeZoneDefaultUTC})),se=new U(new H({name:"side",alias:"side",type:"string"}),x.create(`CASE WHEN (${R}=4) THEN 'from' ELSE 'to' END`,{fieldsIndex:r.associations.getFieldsIndex(),timeZone:r.associations.dateFieldsTimeZoneDefaultUTC}));break}case"connected":{let g=`${h}='@T'`,fe=`${T}='@T'`;d!==null&&(g+=` AND ${V}=@A`,fe+=` AND ${J}=@A`),I="(("+g+") OR ("+fe+"))",I=B(I,"@T",l??""),g=B(g,"@T",l??""),d!==null&&(g=B(g,"@A",d.toString()),I=B(I,"@A",d.toString())),M.codefield=x.create("CASE WHEN "+g+` THEN ${W} ELSE ${j} END`,{fieldsIndex:r.associations.getFieldsIndex(),timeZone:r.associations.dateFieldsTimeZoneDefaultUTC});const Q=Y(Z.findField(r.associations.fields,T));Q.name=S,Q.alias=S,P=new U(Q,x.create("CASE WHEN "+g+` THEN ${T} ELSE ${h} END`,{fieldsIndex:r.associations.getFieldsIndex(),timeZone:r.associations.dateFieldsTimeZoneDefaultUTC}));break}case"container":I=`${h}='${l}' AND ${R} = 2`,d!==null&&(I+=` AND ${V} = `+d.toString()),M.codefield=W,I="( "+I+" )",P=new _(Z.findField(r.associations.fields,T),S,S);break;case"content":I=`(${T}='${l}' AND ${R} = 2)`,d!==null&&(I+=` AND ${J} = `+d.toString()),M.codefield=j,I="( "+I+" )",P=new _(Z.findField(r.associations.fields,h),S,S);break;case"structure":I=`(${h}='${l}' AND ${R} = 3)`,d!==null&&(I+=` AND ${V} = `+d.toString()),M.codefield=W,I="( "+I+" )",P=new _(Z.findField(r.associations.fields,T),S,le);break;case"attached":I=`(${T}='${l}' AND ${R} = 3)`,d!==null&&(I+=` AND ${J} = `+d.toString()),M.codefield=j,I="( "+I+" )",P=new _(Z.findField(r.associations.fields,h),S,le);break;default:throw new c(n,m.InvalidParameter,a)}return w&&(I="1 <> 1"),new Z({parentfeatureset:r.associations,adaptedFields:[new te(Z.findField(r.associations.fields,ge)),new te(Z.findField(r.associations.fields,Ie)),P,se,M,re],extraFilter:I?x.create(I,{fieldsIndex:r.associations.getFieldsIndex(),timeZone:r.associations.dateFieldsTimeZoneDefaultUTC}):null})})},i.signatures.push({name:"featuresetbyassociation",min:2,max:6}),i.functions.groupby=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{if(b(e,3,3,n,a),!A(e[0]))throw new c(n,m.InvalidParameter,a);const t=await e[0].load(),s=[],f=[];let y=!1,o=[];if(v(e[1]))o.push(e[1]);else if(e[1]instanceof C)o.push(e[1]);else if(N(e[1]))o=e[1];else{if(!k(e[1]))throw new c(n,m.InvalidParameter,a);o=e[1].toArray()}for(const r of o)if(v(r)){const l=x.create(E(r),{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC}),d=pe(l)===!0?E(r):"%%%%FIELDNAME";s.push({name:d,expression:l}),d==="%%%%FIELDNAME"&&(y=!0)}else{if(!(r instanceof C))throw new c(n,m.InvalidParameter,a);{const l=r.hasField("name")?r.field("name"):"%%%%FIELDNAME",d=r.hasField("expression")?r.field("expression"):"";if(l==="%%%%FIELDNAME"&&(y=!0),!l)throw new c(n,m.InvalidParameter,a);s.push({name:l,expression:x.create(d||l,{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC})})}}if(o=[],v(e[2]))o.push(e[2]);else if(N(e[2]))o=e[2];else if(k(e[2]))o=e[2].toArray();else{if(!(e[2]instanceof C))throw new c(n,m.InvalidParameter,a);o.push(e[2])}for(const r of o){if(!(r instanceof C))throw new c(n,m.InvalidParameter,a);{const l=r.hasField("name")?r.field("name"):"",d=r.hasField("statistic")?r.field("statistic"):"",w=r.hasField("expression")?r.field("expression"):"";if(!l||!d||!w)throw new c(n,m.InvalidParameter,a);f.push({name:l,statistic:d.toLowerCase(),expression:x.create(w,{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC})})}}if(y){const r={};for(const d of t.fields)r[d.name.toLowerCase()]=1;for(const d of s)d.name!=="%%%%FIELDNAME"&&(r[d.name.toLowerCase()]=1);for(const d of f)d.name!=="%%%%FIELDNAME"&&(r[d.name.toLowerCase()]=1);let l=0;for(const d of s)if(d.name==="%%%%FIELDNAME"){for(;r["field_"+l.toString()]===1;)l++;r["field_"+l.toString()]=1,d.name="FIELD_"+l.toString()}}for(const r of s)await ie(r.expression,i,n);for(const r of f)await ie(r.expression,i,n);return e[0].groupby(s,f)})},i.signatures.push({name:"groupby",min:3,max:3}),i.functions.distinct=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{if(A(e[0])){b(e,2,2,n,a);const t=await e[0].load(),s=[];let f=[];if(v(e[1]))f.push(e[1]);else if(e[1]instanceof C)f.push(e[1]);else if(N(e[1]))f=e[1];else{if(!k(e[1]))throw new c(n,m.InvalidParameter,a);f=e[1].toArray()}let y=!1;for(const o of f)if(v(o)){const r=x.create(E(o),{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC}),l=pe(r)===!0?E(o):"%%%%FIELDNAME";s.push({name:l,expression:r}),l==="%%%%FIELDNAME"&&(y=!0)}else{if(!(o instanceof C))throw new c(n,m.InvalidParameter,a);{const r=o.hasField("name")?o.field("name"):"%%%%FIELDNAME",l=o.hasField("expression")?o.field("expression"):"";if(r==="%%%%FIELDNAME"&&(y=!0),!r)throw new c(n,m.InvalidParameter,a);s.push({name:r,expression:x.create(l||r,{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC})})}}if(y){const o={};for(const l of t.fields)o[l.name.toLowerCase()]=1;for(const l of s)l.name!=="%%%%FIELDNAME"&&(o[l.name.toLowerCase()]=1);let r=0;for(const l of s)if(l.name==="%%%%FIELDNAME"){for(;o["field_"+r.toString()]===1;)r++;o["field_"+r.toString()]=1,l.name="FIELD_"+r.toString()}}for(const o of s)await ie(o.expression,i,n);return e[0].groupby(s,[])}return We(e)})},i.functions.getfeaturesetinfo=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{if(b(e,1,1,n,a),!A(e[0]))return null;const t=await e[0].getFeatureSetInfo();return t?C.convertObjectToArcadeDictionary({layerId:t.layerId,layerName:t.layerName,itemId:t.itemId,serviceLayerUrl:t.serviceLayerUrl,webMapLayerId:t.webMapLayerId??null,webMapLayerTitle:t.webMapLayerTitle??null,className:null,objectClassId:null},ue(n),!1,!1):null})},i.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),i.functions.filterbysubtypecode=function(n,a){return i.standardFunctionAsync(n,a,async(p,F,e)=>{if(b(e,2,2,n,a),A(e[0])){const t=await e[0].load(),s=e[1];if(!Se(s))throw new c(n,m.InvalidParameter,a);if(t.subtypeField){const y=x.create(`${t.subtypeField}= ${e[1]}`,{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC});return new K({parentfeatureset:e[0],whereclause:y})}if(t.typeIdField===null||t.typeIdField==="")throw new c(n,m.FeatureSetDoesNotHaveSubtypes,a);const f=x.create(`${t.typeIdField}= ${e[1]}`,{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC});return new K({parentfeatureset:e[0],whereclause:f})}throw new c(n,m.InvalidParameter,a)})},i.signatures.push({name:"filterbysubtypecode",min:2,max:2}))}export{nn as registerFunctions};