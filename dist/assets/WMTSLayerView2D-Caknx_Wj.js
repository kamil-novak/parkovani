import{T as h,cF as y,cG as w,cH as g,cI as I,cJ as p,cB as f,ai as S,a7 as d,a8 as T,ab as V}from"./index-lgQOPtME.js";import{r as v,n as m}from"./imageUtils-Bw0lO-QF.js";import{j as x}from"./LayerView2D-CwGJE0f4.js";import{y as M}from"./LayerView-CmgoQ2td.js";import{i as q}from"./RefreshableLayerView-DSST9sqP.js";import"./Bitmap-Ci4zYtR4.js";import"./Container-Dv4WkFL3.js";import"./WGLContainer-p7aLHH1c.js";import"./LabelMetric-C06nyfqp.js";import"./Program-Csg-crly.js";import"./BufferObject-BvqSAy9P.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-BboFpfXb.js";import"./VertexArrayObject-CAMnuKqS.js";import"./ProgramTemplate-BH2C3mCa.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-CN2hH0cX.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-Dr2TwuUu.js";import"./TileContainer-nuUUpDre.js";const R=[0,0];let a=class extends q(v(x(M))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){var s;const{activeLayer:e}=this.layer,{tileMatrixSet:t}=e;if(t&&h((s=t.tileInfo)==null?void 0:s.spatialReference,this.view.spatialReference))return t;const i=this._getTileMatrixSetBySpatialReference(e);return i&&i.id!==e.tileMatrixSetId?(e.tileMatrixSetId=i.id,i):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){var t;const e=(t=this.tileMatrixSet)==null?void 0:t.tileInfo;e&&(this._tileInfoView=new y(e),this._fetchQueue=new w({tileInfoView:this._tileInfoView,concurrency:16,process:(i,s)=>this.fetchTile(i,s),scheduler:this.scheduler,priority:g.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new I({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>{var i,s;return[(s=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:s.styleId,this.tileMatrixSet]},()=>this.doRefresh())),super.attach())}detach(){var e,t;super.detach(),(e=this._tileStrategy)==null||e.destroy(),(t=this._fetchQueue)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return((t=this.layer.activeLayer.tileMatrixSets)==null?void 0:t.some(i=>{var s;return h((s=i.tileInfo)==null?void 0:s.spatialReference,e)}))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:n=0}=t;if(!i)return this._fetchImage(e,s);const r=new p(0,0,0,0);let o;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,r,{signal:s}),o=await this._fetchImage(r,s)}catch(l){if(f(l))throw l;if(n<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const u=new p(c),_=await this.fetchTile(u,{...t,resamplingLevel:n+1});return m(this._tileInfoView,_,u,e)}}throw l}return m(this._tileInfoView,o,r,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){f(t)||S.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_getTileMatrixSetBySpatialReference(e){var t;return(t=e.tileMatrixSets)==null?void 0:t.find(i=>{var s;return h((s=i.tileInfo)==null?void 0:s.spatialReference,this.view.spatialReference)})}};d([T({readOnly:!0})],a.prototype,"tileMatrixSet",null),a=d([V("esri.views.2d.layers.WMTSLayerView2D")],a);const N=a;export{N as default};
