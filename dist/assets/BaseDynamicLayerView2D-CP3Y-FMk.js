import{cq as o,ai as p,a7 as a,a8 as r,ab as m}from"./index-dSHJTskp.js";import{a as n}from"./BitmapContainer-BMeLPK02.js";import{j as h,y as d}from"./LayerView-C66N1JUX.js";import{_ as c}from"./ExportStrategy-DCut2c6J.js";import{i as y}from"./RefreshableLayerView-DaZFLrI7.js";import"./WGLContainer-ngKNzkbG.js";import"./LabelMetric-BuOKudwp.js";import"./Program-CQdxLcbn.js";import"./BufferObject-C0lcQ-An.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-BTCK6RGz.js";import"./VertexArrayObject-BkX_5UM9.js";import"./ProgramTemplate-WphReH_n.js";import"./vec3f32-nZdmKIgz.js";import"./Container-DAvSZr2m.js";import"./StyleDefinition-i4PWcj78.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-SvddZtod.js";import"./Bitmap-DxB8DwIS.js";let t=class extends y(h(d)){update(e){this._strategy.update(e).catch(i=>{o(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,s){return this.layer.fetchImageBitmap(e,i,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};a([r()],t.prototype,"_strategy",void 0),a([r()],t.prototype,"updating",void 0),t=a([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const I=t;export{I as default};