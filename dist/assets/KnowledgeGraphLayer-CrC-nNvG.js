import{eS as T,eW as _,eT as S,f5 as D,eU as L,eV as v,eX as C,f6 as E,az as m,cC as A,fq as N,bc as k,s as b,fr as f,fs as $,ai as g,ft as I,fi as R,fg as w,fj as G,fu as O,a7 as o,a8 as d,cn as U,af as j,e_ as F,ab as z,c9 as P,cc as x,f4 as K}from"./index-Bf1OihDl.js";import{u,c as M,E as H,F as V,R as q}from"./KnowledgeGraphSublayer-Dm_Vcvt-.js";import{F as B}from"./knowledgeGraphService-CUPNYmbR.js";import"./featureConversionUtils-DpAGojQr.js";import"./GraphQueryStreaming-D_aANTAD.js";import"./FeatureStore-BiMq6e1U.js";import"./BoundsStore-WNlzJI5K.js";import"./PooledRBush-DMvBr6uu.js";import"./timeSupport-tfXiFAl7.js";import"./queryUtils-DZunm7IU.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-CCVYkCJ2.js";import"./QueryEngine-CndOhFZf.js";import"./WhereClause-CRT2WcyI.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-CziOdNAQ.js";import"./utils-DPaDow35.js";import"./ClassBreaksDefinition-A8AUI3sv.js";import"./clientSideDefaults-puJzkGMT.js";import"./capabilities-Y9lFlGVh.js";let n=class extends T(_(S(D(L(v(C(E(K)))))))){constructor(e){super(e),this._graphTypeLookup=new Map,this._namedTypesModified=!1,this.dataManager=null,this.definitionSetMap=null,this.knowledgeGraph=null,this.layers=new(m.ofType(u)),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="KnowledgeGraphLayer",this.sublayerIdsCache=new Map,this.tables=new(m.ofType(u)),this.type="knowledge-graph",this.url=null,this.addHandles(A(()=>this.layers.concat(this.tables),(t,i)=>this._handleSublayersChange(t,i),N))}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){try{await this.loadFromPortal({supportedTypes:["Knowledge Graph Layer"]},e)}catch(t){k(t)}await this._fetchMetadata(),await this._initializeLayerProperties(),this.loadLayerAssumingLocalCache(),await M(this)}async _fetchMetadata(){if(!this.url)throw new b("knowledge-graph:missing-url","KnowledgeGraphLayer must be created with a url");const e=await B(this.url);this.knowledgeGraph=e,this._forEachGraphType(t=>{t.name&&this._graphTypeLookup.set(t.name,t)})}async _initializeLayerProperties(){this.originIdOf("inclusionModeDefinition")===f.USER?this._validateInclusionModeDefinition():await this._initializeInclusionModeDefinition(),this._setMemberTypes(),this.dataManager=new H({knowledgeGraph:this.knowledgeGraph,inclusionModeDefinition:this.inclusionModeDefinition})}async _initializeInclusionModeDefinition(){const e=this.definitionSetMap?await V(this.definitionSetMap,!0):{generateAllSublayers:!0,namedTypeDefinitions:new Map};[...this.layers.toArray(),...this.tables.toArray()].forEach(t=>{const i=this._graphTypeLookup.get(t.graphTypeName);i&&!e.namedTypeDefinitions.has(i.name)&&e.namedTypeDefinitions.set(i.name,{useAllData:!0})}),this.setAtOrigin("inclusionModeDefinition",e,$(this.originIdOf("definitionSetMap")))}_validateInclusionModeDefinition(){const{inclusionModeDefinition:e}=this;if(!e)return;const{namedTypeDefinitions:t}=e;if((t==null?void 0:t.size)>0)t.forEach((i,a)=>{const s=this._graphTypeLookup.get(a);if(!s)return g.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't in the data model and will be removed`),void t.delete(a);s.type!=="relationship"&&s.type!=="entity"&&(g.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't properly modeled and will be removed`),t.delete(a))});else if(!e.generateAllSublayers)throw new b("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined")}_setMemberTypes(){var s,r;let e=[],t=[];const{inclusionModeDefinition:i}=this,a=i==null?void 0:i.namedTypeDefinitions;!i||i.generateAllSublayers?(e=((s=this.knowledgeGraph.dataModel)==null?void 0:s.entityTypes)??[],t=((r=this.knowledgeGraph.dataModel)==null?void 0:r.relationshipTypes)??[]):a&&a.size>0&&a.forEach((p,l)=>{const h=this._graphTypeLookup.get(l);switch(h==null?void 0:h.type){case"relationship":t.push(h);break;case"entity":e.push(h)}}),this.memberEntityTypes=e,this.memberRelationshipTypes=t}_forEachGraphType(e){var t,i;[...((t=this.knowledgeGraph.dataModel)==null?void 0:t.entityTypes)??[],...((i=this.knowledgeGraph.dataModel)==null?void 0:i.relationshipTypes)??[]].forEach(a=>{e(a)})}_refreshNamedTypes(){this._namedTypesModified=!0;for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const a=this._graphTypeLookup.get(i);a&&(this._addSublayer(a),a.type==="entity"?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),this.dataManager.sublayerCaches.set(i,new Map))}await M(this,t),this._refreshNamedTypes()}_createSublayers(e,t,i){e.forEach(a=>{const s=this._createSublayer(a);i(s)&&t.push(s),this._updateSublayerCaches(a)})}_addSublayer(e){const t=this._createSublayer(e);return t.geometryType?this.layers.push(t):this.tables.push(t),t}_createSublayer(e){return new u({objectType:e,parentCompositeLayer:this,graphType:e.type})}_updateSublayers(e,t){t.forEach(i=>{i.parentCompositeLayer=this;const a=e.find(s=>s.type===i.graphType&&s.name===i.graphTypeName);a&&(i.objectType=a,this._updateSublayerCaches(a))})}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}_saveUrlAsNewResource(e,t,i,a){e[t]="<pending>",i.pendingOperations.push(W(this.inclusionModeDefinition).then(s=>{const r=X(a);e[t]=r.itemRelativeUrl,i.toAdd.push({resource:r,content:{type:"blob",blob:s},compress:!1,finish:p=>{this.definitionSetMap=p.url}})}))}_displaysAllRecords(e){for(const[,{useAllData:t}]of e.namedTypeDefinitions)if(!t)return!1;return!0}_handleSublayersChange(e,t){t&&(t.forEach(i=>{i.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(i=>{i.parent=this}),this.addHandles([e.on("after-add",({item:i})=>{i.parent=this}),e.on("after-remove",({item:i})=>{i.parent=null})],"sublayers-owner"))}readDefinitionSetMap(e,t,i){return I(e,i)}writeDefinitionSetMap(e,t,i,a){const s=a==null?void 0:a.portalItem,r=a==null?void 0:a.resources,p=R(a==null?void 0:a.origin);if(!s||!r||p==null)return void(e&&(t[i]=w(e,a)));const{inclusionModeDefinition:l}=this;if(!l||this._displaysAllRecords(l))return void(this.definitionSetMap=null);const h=this.originIdOf("inclusionModeDefinition");if(h===f.USER||this._namedTypesModified||p<h)this._saveUrlAsNewResource(t,i,r,s);else if(p===h&&e){const c=w(e,a);G(c)?this._saveUrlAsNewResource(t,i,r,s):t[i]=c}}set inclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("inclusionModeDefinition",e):g.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}loadLayerAssumingLocalCache(){var t,i;const e=[...this.memberEntityTypes,...this.memberRelationshipTypes];this.originIdOf("layers")===f.DEFAULTS?this._createSublayers(e,this.layers,a=>!!a.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===f.DEFAULTS?this._createSublayers(e,this.tables,a=>!a.geometryType):this._updateSublayers(e,this.tables),(i=(t=this.dataManager.inclusionModeDefinition)==null?void 0:t.namedTypeDefinitions)==null||i.forEach((a,s)=>{var p;const r=O(this.sublayerIdsCache,s,()=>new Set);(p=a.members)==null||p.forEach(l=>{r.add(l.id)})})}async addRecords(e){await this._handleNewRecords(e)}async removeRecords(e){var i,a,s,r,p,l,h,c;const t=[];for(const y of e)((s=(a=(i=this.dataManager.inclusionModeDefinition)==null?void 0:i.namedTypeDefinitions)==null?void 0:a.get(y.typeName))==null?void 0:s.useAllData)===!1&&((h=(l=(p=(r=this.dataManager.inclusionModeDefinition)==null?void 0:r.namedTypeDefinitions)==null?void 0:p.get(y.typeName))==null?void 0:l.members)!=null&&h.has(y.id))&&t.push(y);this.dataManager.removeFromLayer(t);for(const y of t)(c=this.sublayerIdsCache.get(y.typeName))==null||c.delete(y.id);return this._refreshNamedTypes(),t}};o([d()],n.prototype,"dataManager",void 0),o([d({json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],n.prototype,"definitionSetMap",void 0),o([U("definitionSetMap")],n.prototype,"readDefinitionSetMap",null),o([j("definitionSetMap")],n.prototype,"writeDefinitionSetMap",null),o([d()],n.prototype,"inclusionModeDefinition",null),o([d()],n.prototype,"knowledgeGraph",void 0),o([d({type:m.ofType(u),json:{write:{ignoreOrigin:!0}}})],n.prototype,"layers",void 0),o([d()],n.prototype,"memberEntityTypes",void 0),o([d()],n.prototype,"memberRelationshipTypes",void 0),o([d({type:["KnowledgeGraphLayer"]})],n.prototype,"operationalLayerType",void 0),o([d()],n.prototype,"sublayerIdsCache",void 0),o([d({type:m.ofType(u),json:{write:{ignoreOrigin:!0}}})],n.prototype,"tables",void 0),o([d({json:{read:!1}})],n.prototype,"type",void 0),o([d(F)],n.prototype,"url",void 0),n=o([z("esri.layers.KnowledgeGraphLayer")],n);const me=n;async function W(e){const t=await q(e);return new Blob([t],{type:"application/x-protobuf"})}function X(e){const t=`definitionSetMap-${P()}.dat`,i=x("knowledgeGraphLayer",t);return e.resourceFromPath(i)}export{me as default};
