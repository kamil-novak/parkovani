const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editingTools-JHWVO3qT.js","./index-Drt46XzA.js","./index-DY8WXqem.css","./projectVectorToVector-0W9ouO6G.js","./projectPointToVector-Bp4JnL7n.js","./elevationInfoUtils-BK_qX7TO.js","./GraphicsLayer-BtRcaCYg.js","./geodesicUtils-BmJ7kPGq.js","./geometryEngine-5wkk00TF.js","./geometryEngineBase-yFIvKOkM.js","./_commonjsHelpers-DCkdB7M8.js","./hydrated-Bcx5BzgW.js","./quat-Ddv3js4t.js","./mat3f64-q3fE-ZOt.js","./quatf64-aQ5IuZRd.js","./ReactiveSet-CvDvKQPa.js","./ByteSizeUnit-BsxeN7wM.js","./plane-Bml5lddE.js","./mat4f64-CSKppSlJ.js","./sphere-Cps1fXFk.js","./MeshTransform-BAs0eH-L.js","./meshVertexSpaceUtils-DsF25cLL.js","./MeshLocalVertexSpace-W3BxGE7x.js","./earcut-Lltz9D9k.js","./triangle-DfF0gaLK.js","./lineSegment-DcJxqrSR.js","./spatialReferenceEllipsoidUtils-2OinnsTc.js","./drapedUtils-4itJzy0U.js","./boundedPlane-4OZe-ldf.js"])))=>i.map(i=>d[i]);
import{dd as m,fI as v,fJ as y,b$ as r,fK as g,cx as d,fL as h,fM as f,_ as T,P as s,Q as i,X as w}from"./index-Drt46XzA.js";const c={redo:"r",undo:"z"},_=Symbol(),p=Symbol(),u=Symbol();let n=class extends m{constructor(e){super(e),this._tool=null,this._updatingHandles=new v,this.enabled=!1,this._onPointerMove=y(async t=>{const o=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(t));this.destroyed||(this.removeHandles(p),o&&o!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles(r(()=>this.view.cursor=null),p)))})}initialize(){this.addHandles(g(this._updatingHandles)),this._updatingHandles.add(()=>this.enabled,e=>this._setEnabled(e),d),this._updatingHandles.add(()=>this._preferredInteractionTool,()=>this._preferredInteractionToolChanged())}get _validatedSelectedElement(){const e=this.selectedElement;if(!e)return null;const{layer:{source:t}}=this;return t?"hasElement"in t?t.hasElement(e)?e:null:t===e?e:null:null}get _preferredInteractionTool(){var e;return((e=this.options)==null?void 0:e.tool)??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(e){if(this.removeHandles(_),!e)return;const{view:t}=this;this.addHandles([t.on("immediate-click",o=>this._onClick(o),h.TOOL),t.on("pointer-move",o=>this._onPointerMove(o).catch(()=>{}),h.TOOL),t.on("key-down",o=>{var l,a;o.key===c.undo&&((l=this._tool)!=null&&l.canUndo())&&(this._tool.undo(),o.stopPropagation()),o.key===c.redo&&((a=this._tool)!=null&&a.canRedo())&&(this._tool.redo(),o.stopPropagation())}),this._updatingHandles.add(()=>this._validatedSelectedElement,o=>this._selectedElementChanged(o),d),r(()=>{t.cursor=null,this._removeTool()})],_)}async _findElementAtScreenPoint(e){const t=(await this.view.hitTest(e,{include:[this.layer]})).results[0];return(t==null?void 0:t.type)==="media"?t.element:null}async _onClick(e){await this._updatingHandles.addPromise(e.async(async()=>{const t=await this._findElementAtScreenPoint(e);this.destroyed||(t&&e.stopPropagation(),this.selectedElement=t,this.selectedElement&&(this.view.cursor=null))}))}_preferredInteractionToolChanged(){const{_tool:e}=this;e&&(this._preferredInteractionTool===e.type||this._updatingHandles.addPromise(this._recreateTool()))}async _recreateTool(){this.removeHandles(u),this._removeTool();const e=this._validatedSelectedElement;if(!e)return;const t=new AbortController;this.addHandles(f(t),u);const{TransformTool:o,ControlPointsTransformTool:l}=await T(()=>import("./editingTools-JHWVO3qT.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url);if(t.signal.aborted)return;const{view:a}=this;switch(this._preferredInteractionTool){case"transform":this._tool=new o({target:e,view:a});break;case"reshape":this._tool=new l({mediaElement:e,view:a})}this.addHandles([r(()=>{this._tool&&(a.tools.remove(this._tool),this._tool=null)})],this._tool),a.addAndActivateTool(this._tool)}_removeTool(){this._tool&&this.removeHandles(this._tool)}async _selectedElementChanged(e){e!=null&&e.georeference?await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}};s([i()],n.prototype,"_validatedSelectedElement",null),s([i()],n.prototype,"_preferredInteractionTool",null),s([i({constructOnly:!0})],n.prototype,"view",void 0),s([i({constructOnly:!0})],n.prototype,"layer",void 0),s([i()],n.prototype,"selectedElement",void 0),s([i()],n.prototype,"enabled",void 0),s([i()],n.prototype,"options",void 0),s([i()],n.prototype,"updating",null),n=s([w("esri.views.2d.layers.support.MediaLayerInteraction")],n);export{n as MediaLayerInteraction};