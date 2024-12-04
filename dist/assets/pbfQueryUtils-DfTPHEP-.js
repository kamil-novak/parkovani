import{z as I,hZ as d,s as w}from"./index-DObp-awF.js";import{n as S}from"./pbf-QZfaxEJP.js";import{s as y}from"./OptimizedGeometry-BF8iz5FO.js";import{s as U,e as G}from"./OptimizedFeature-6cJ-QFG5.js";import{e as D}from"./OptimizedFeatureSet-Blu9Ckm7.js";const F=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];let ee=class{constructor(e){this._options=e,this.geometryTypes=F,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new D}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!(e!=null&&e.features)||!e.hasZ||!this._options.sourceSpatialReference||!e.spatialReference||I(e.spatialReference,this._options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const a=d(this._options.sourceSpatialReference)/d(e.spatialReference);if(a!==1)for(const n of e.features){if(!U(n))continue;const r=n.geometry.coords;for(let s=2;s<r.length;s+=3)r[s]*=a}}addFeature(e,a){e.features.push(a)}createFeature(){return new G}createSpatialReference(){return{wkid:0}}createGeometry(){return new y}addField(e,a){e.fields.push(a)}allocateCoordinates(e){e.coords.length=e.lengths.reduce((a,n)=>a+n,0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,a){e.coords[this._coordinatePtr++]=a}addCoordinatePoint(e,a){e.coords.push(a)}addLength(e,a){e.lengths.push(a)}addQueryGeometry(e,a){e.queryGeometry=a.queryGeometry,e.queryGeometryType=a.queryGeometryType}createPointGeometry(){return new y}};const h=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],m=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],b=["upperLeft","lowerLeft"];function k(t){return t>=h.length?null:h[t]}function R(t){return t>=m.length?null:m[t]}function T(t){return t>=b.length?null:b[t]}function q(t,e){return e>=t.geometryTypes.length?null:t.geometryTypes[e]}function x(t,e,a){const r=t.asUnsafe(),s=e.createPointGeometry(a);for(;r.next();)switch(r.tag()){case 3:{const o=r.getUInt32(),i=r.pos()+o;let c=0;for(;r.pos()<i;)e.addCoordinatePoint(s,r.getSInt64(),c++);break}default:r.skip()}return s}function M(t,e,a){const s=t.asUnsafe(),o=e.createGeometry(a),i=2+(a.hasZ?1:0)+(a.hasM?1:0);for(;s.next();)switch(s.tag()){case 2:{const c=s.getUInt32(),g=s.pos()+c;let l=0;for(;s.pos()<g;)e.addLength(o,s.getUInt32(),l++);break}case 3:{const c=s.getUInt32(),g=s.pos()+c;let l=0;for(e.allocateCoordinates(o);s.pos()<g;)e.addCoordinate(o,s.getSInt64(),l),l++,l===i&&(l=0);break}default:s.skip()}return o}function P(t){const r=t.asUnsafe(),s=new y;let o="esriGeometryPoint";for(;r.next();)switch(r.tag()){case 2:{const i=r.getUInt32(),c=r.pos()+i;for(;r.pos()<c;)s.lengths.push(r.getUInt32());break}case 3:{const i=r.getUInt32(),c=r.pos()+i;for(;r.pos()<c;)s.coords.push(r.getSInt64());break}case 1:o=F[r.getEnum()];break;default:r.skip()}return{queryGeometry:s,queryGeometryType:o}}function W(t){const l=t.asUnsafe();for(;l.next();)switch(l.tag()){case 1:return l.getString();case 2:return l.getFloat();case 3:return l.getDouble();case 4:return l.getSInt32();case 5:return l.getUInt32();case 6:return l.getInt64();case 7:return l.getUInt64();case 8:return l.getSInt64();case 9:return l.getBool();default:return l.skip(),null}return null}function _(t){const i=t.asUnsafe(),c={type:k(0)};for(;i.next();)switch(i.tag()){case 1:c.name=i.getString();break;case 2:c.type=k(i.getEnum());break;case 3:c.alias=i.getString();break;case 4:c.sqlType=R(i.getEnum());break;case 5:i.skip();break;case 6:c.defaultValue=i.getString();break;default:i.skip()}return c}function B(t){const n={},r=t.asUnsafe();for(;r.next();)switch(r.tag()){case 1:n.name=r.getString();break;case 2:n.isSystemMaintained=r.getBool();break;default:r.skip()}return n}function L(t,e,a,n){const i=e.createFeature(a);let c=0;for(;t.next();)switch(t.tag()){case 1:{const g=n[c++].name;i.attributes[g]=t.processMessage(W);break}case 2:i.geometry=t.processMessageWithArgs(M,e,a);break;case 4:i.centroid=t.processMessageWithArgs(x,e,a);break;default:t.skip()}return i}function N(t){const s=[1,1,1,1],o=t.asUnsafe();for(;o.next();)switch(o.tag()){case 1:s[0]=o.getDouble();break;case 2:s[1]=o.getDouble();break;case 4:s[2]=o.getDouble();break;case 3:s[3]=o.getDouble();break;default:o.skip()}return s}function A(t){const s=[0,0,0,0],o=t.asUnsafe();for(;o.next();)switch(o.tag()){case 1:s[0]=o.getDouble();break;case 2:s[1]=o.getDouble();break;case 4:s[2]=o.getDouble();break;case 3:s[3]=o.getDouble();break;default:o.skip()}return s}function V(t){const r={originPosition:T(0)},s=t.asUnsafe();for(;s.next();)switch(s.tag()){case 1:r.originPosition=T(s.getEnum());break;case 2:r.scale=s.processMessage(N);break;case 3:r.translate=s.processMessage(A);break;default:s.skip()}return r}function C(t){const r={},s=t.asUnsafe();for(;s.next();)switch(s.tag()){case 1:r.shapeAreaFieldName=s.getString();break;case 2:r.shapeLengthFieldName=s.getString();break;case 3:r.units=s.getString();break;default:s.skip()}return r}function $(t,e){const i=e.createSpatialReference();for(;t.next();)switch(t.tag()){case 1:i.wkid=t.getUInt32();break;case 5:i.wkt=t.getString();break;case 2:i.latestWkid=t.getUInt32();break;case 3:i.vcsWkid=t.getUInt32();break;case 4:i.latestVcsWkid=t.getUInt32();break;default:t.skip()}return i}function v(t,e){const u=e.createFeatureResult(),p=t.asUnsafe();u.geometryType=q(e,0);let f=!1;for(;p.next();)switch(p.tag()){case 1:u.objectIdFieldName=p.getString();break;case 3:u.globalIdFieldName=p.getString();break;case 4:u.geohashFieldName=p.getString();break;case 5:u.geometryProperties=p.processMessage(C);break;case 7:u.geometryType=q(e,p.getEnum());break;case 8:u.spatialReference=p.processMessageWithArgs($,e);break;case 10:u.hasZ=p.getBool();break;case 11:u.hasM=p.getBool();break;case 12:u.transform=p.processMessage(V);break;case 9:u.exceededTransferLimit=p.getBool();break;case 13:e.addField(u,p.processMessage(_));break;case 15:f||(e.prepareFeatures(u),f=!0),e.addFeature(u,p.processMessageWithArgs(L,e,u,u.fields));break;case 2:u.uniqueIdField=p.processMessage(B);break;default:p.skip()}return e.finishFeatureResult(u),u}function E(t,e){const r={};let s=null;for(;t.next();)switch(t.tag()){case 4:s=t.processMessageWithArgs(P);break;case 1:r.featureResult=t.processMessageWithArgs(v,e);break;default:t.skip()}return s!=null&&r.featureResult&&e.addQueryGeometry(r,s),r}function O(t,e){try{const n=new S(new Uint8Array(t),new DataView(t)),r={};for(;n.next();)n.tag()===2?r.queryResult=n.processMessageWithArgs(E,e):n.skip();return r}catch(a){throw new w("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:a})}}function se(t,e){const a=O(t,e),n=a.queryResult.featureResult,r=a.queryResult.queryGeometry,s=a.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const o=n.objectIdFieldName;for(const i of n.features)i.attributes&&(i.objectId=i.attributes[o])}return n&&(n.queryGeometry=r,n.queryGeometryType=s),n}export{ee as a,_ as b,V as h,se as t};
