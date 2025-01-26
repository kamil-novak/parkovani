import{hO as l,ez as _,em as h,a7 as v,ab as y,aV as p,ak as L,ei as m}from"./index-dSHJTskp.js";import{v as x,b as j,j as P}from"./lineSegment-4BSBna0I.js";import{E as S,U as f,i as C}from"./sphere-nZpsnGm-.js";import{Y as b}from"./Octree-BS-z3dhX.js";import{m as V}from"./edgeProcessing-J1GxS7UK.js";import"./plane-CXKmbels.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./Util-BrZR1-KB.js";import"./deduplicate-C9OlsQBk.js";import"./Indices-CAOfUqJK.js";import"./InterleavedLayout-C5pR3_g4.js";import"./BufferView-DyLZKehY.js";import"./types-D0PSWh4d.js";import"./VertexAttribute-BdZWZuT1.js";import"./glUtil-DI5uFxL2.js";import"./VertexElementDescriptor-BOD-G50G.js";const $=1e3;function I(t,o,n){const e=S(),i=f(e);return l(i,i,t,.5),l(i,i,o,.5),e[3]=_(i,t),h(i,i,n),e}let g=class{constructor(){this._idToComponent=new Map,this._components=new b(t=>t.bounds),this._edges=new b(t=>t.bounds),this._tmpLineSegment=x(),this._tmpP1=p(),this._tmpP2=p(),this._tmpP3=p(),this.remoteClient=null}async fetchCandidates(t,o){await Promise.resolve(),L(o),await this._ensureEdgeLocations(t,o);const n=[];return this._edges.forEachNeighbor(e=>(this._addCandidates(t,e,n),n.length<$),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,o){const n=[];if(this._components.forEachNeighbor(s=>{if(s.info==null){const{id:c,uid:r}=s;n.push({id:c,uid:r})}return!0},t.bounds),!n.length)return;const e={components:n},i=await this.remoteClient.invoke("fetchAllEdgeLocations",e,o??{});for(const s of i.components)this._setFetchEdgeLocations(s)}async add(t){const o=new u(t.id,t.bounds);return this._idToComponent.set(o.id,o),this._components.add([o]),{result:{}}}async remove(t){const o=this._idToComponent.get(t.id);if(o){const n=[];this._edges.forEachNeighbor(e=>(e.component===o&&n.push(e),!0),o.bounds),this._edges.remove(n),this._components.remove([o]),this._idToComponent.delete(o.id)}return{result:{}}}_setFetchEdgeLocations(t){const o=this._idToComponent.get(t.id);if(o==null||t.uid!==o.uid)return;const n=V.createView(t.locations),e=new Array(n.count),i=p(),s=p();for(let d=0;d<n.count;d++){n.position0.getVec(d,i),n.position1.getVec(d,s);const a=I(i,s,t.origin),E=new T(o,d,a);e[d]=E}this._edges.add(e);const{objectIds:c,origin:r}=t;o.info={locations:n,objectIds:c,origin:r}}_addCandidates(t,o,n){const{info:e}=o.component,{origin:i,objectIds:s}=e,c=e.locations,r=c.position0.getVec(o.index,this._tmpP1),d=c.position1.getVec(o.index,this._tmpP2);h(r,r,i),h(d,d,i);const a=s[c.componentIndex.get(o.index)];this._addEdgeCandidate(t,a,r,d,n),w(t,a,r,n),w(t,a,d,n)}_addEdgeCandidate(t,o,n,e,i){if(!t.returnEdge)return;const s=f(t.bounds),c=j(n,e,this._tmpLineSegment),r=P(c,s,this._tmpP3);C(t.bounds,r)&&i.push({type:"edge",objectId:o,target:m(r),distance:_(s,r),start:m(n),end:m(e)})}};g=v([y("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],g);const R=g;function w(t,o,n,e){if(!t.returnVertex||!C(t.bounds,n))return;const i=f(t.bounds);e.push({type:"vertex",objectId:o,target:m(n),distance:_(i,n)})}class u{constructor(o,n){this.id=o,this.bounds=n,this.info=null,this.uid=++u.uid}}u.uid=0;class T{constructor(o,n,e){this.component=o,this.index=n,this.bounds=e}}export{R as default};