import{h3 as m,bX as M,bB as c,a7 as V,ab as y}from"./index-CDF62Mj_.js";import{S as I}from"./Bitmap-B9AfDDeR.js";import{r as T,t as $}from"./WGLContainer-DNEEuSJw.js";import{i as A}from"./TileContainer-BrDrmHHX.js";let F=class extends T{constructor(e,i,s,r,a,o,n=null){super(e,i,s,r,a,o),this.bitmap=new I(n),this.bitmap.coordScale=[a,o],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{displayViewScreenMat3:m(),tileMat3:m()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}},L=class extends A{get requiresDedicatedFBO(){return this.children.some(e=>e.bitmap.blendFunction==="additive")}createTile(e){const i=this.tileInfoView.getTileBounds(M(),e),s=this.tileInfoView.getTileResolution(e.level),[r,a]=this.tileInfoView.tileInfo.size;return new F(e,s,i[0],i[3],r,a)}prepareRenderPasses(e){const i=e.registerRenderPass({name:"bitmap (tile)",brushes:[$.bitmap],target:()=>this.children.map(s=>s.bitmap),drawPhase:c.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===c.MAP&&super.doRender(e)}};const O=t=>{let e=class extends t{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new L(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var i;this.container.removeChild(this._bitmapView),(i=this._bitmapView)==null||i.removeAllChildren(),this._bitmapView=null}};return e=V([y("esri.views.2d.layers.BitmapTileLayerView2D")],e),e};function P(t){return t instanceof HTMLImageElement?t.naturalWidth:t.width}function _(t){return t instanceof HTMLImageElement?t.naturalHeight:t.height}function X(t,e,i,s){if(i.level===s.level)return e;const r=t.tileInfo.size,a=t.getTileResolution(i.level),o=t.getTileResolution(s.level);let n=t.getLODInfoAt(s.level);const p=n.getXForColumn(s.col),u=n.getYForRow(s.row);n=t.getLODInfoAt(i.level);const f=n.getXForColumn(i.col),b=n.getYForRow(i.row),l=P(e)/r[0],h=_(e)/r[1],w=Math.round(l*((p-f)/a)),g=Math.round(h*(-(u-b)/a)),R=Math.round(l*r[0]*(o/a)),v=Math.round(h*r[1]*(o/a)),d=C(r);return d.getContext("2d").drawImage(e,w,g,R,v,0,0,r[0],r[1]),d}function C(t){const e=document.createElement("canvas");return[e.width,e.height]=t,e}export{X as n,C as o,O as r};
