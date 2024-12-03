import{ae as r,af as l,df as o,ai as d,aR as V,cK as y,fo as h,de as w}from"./index-ZNyjz3YK.js";import{y as p,j as v}from"./LayerView-CoM8wpCc.js";import"./Container-D-ALvfw4.js";let a=class extends p{constructor(i){super(i),this.type="group",this.layerViews=new V}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.addHandles([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),y(()=>{var i;return(i=this.layer)==null?void 0:i.visibilityMode},()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},h),y(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},h)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){var i,e;return((e=(i=this.view)==null?void 0:i.layerViewManager)==null?void 0:e.isCreatingLayerViewsForLayer(this.layer))??!1}set layerViews(i){this._set("layerViews",w(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>{const s=this._findLayerViewForLayer(e);return!!(s!=null&&s.visible)});return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder())==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map(s=>y(()=>s.visible,t=>this._applyVisibility(()=>{t!==this.visible&&(s.visible=this.visible)},()=>this._applyExclusiveVisibility(t?s:null)),h)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e!=null&&e.visible?e:null))}_applyVisibility(i,e){var s,t;this._hasLayerViewVisibleOverrides()&&(((s=this.layer)==null?void 0:s.visibilityMode)==="inherited"?i():((t=this.layer)==null?void 0:t.visibilityMode)==="exclusive"&&e())}};r([l({readOnly:!0})],a.prototype,"creatingLayerViews",null),r([l({cast:o})],a.prototype,"layerViews",null),r([l({readOnly:!0})],a.prototype,"updatingProgress",null),r([l()],a.prototype,"view",void 0),a=r([d("esri.views.layers.GroupLayerView")],a);const u=a;let n=class extends v(u){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};n=r([d("esri.views.2d.layers.GroupLayerView2D")],n);const _=n;export{_ as default};
