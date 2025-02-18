import{it as X,cj as I,iu as J,cX as b,iv as Y,bP as k,dc as B,dg as K,dh as N,d2 as g,d4 as Q,iw as V,ag as z,eR as Z,gL as ee,aJ as v,gc as te,dQ as R,dP as q,cP as W,cW as M,a7 as x,a8 as $,ab as ie}from"./index-lgQOPtME.js";import{l as U}from"./TelemetryDisplay-2k187NSh.js";import{u as re}from"./OverlayContainer-pY1wBnct.js";import{e as se}from"./Container-Dv4WkFL3.js";import{a as oe,j as ne}from"./LayerView2D-CwGJE0f4.js";import{t as ae}from"./GraphicContainer-CGgHgJeD.js";import{F as le}from"./GraphicsView2D-BJa7QH4p.js";import{y as he}from"./LayerView-CmgoQ2td.js";import"./vec3f32-nZdmKIgz.js";import"./WGLContainer-p7aLHH1c.js";import"./LabelMetric-C06nyfqp.js";import"./Program-Csg-crly.js";import"./BufferObject-BvqSAy9P.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-BboFpfXb.js";import"./VertexArrayObject-CAMnuKqS.js";import"./ProgramTemplate-BH2C3mCa.js";import"./StyleDefinition-CN2hH0cX.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-Dr2TwuUu.js";import"./FeatureCommandQueue-in_zRkXg.js";import"./CIMSymbolHelper-DkpYqIKm.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-DqzC1DAz.js";import"./GeometryUtils-C9n-QoeX.js";import"./Rect-CUzevAry.js";import"./UpdateTracking2D-C_o_ZGda.js";import"./BindType-BmZEZMMh.js";import"./Util-Hd338qk-.js";import"./constants-F8oTIn7N.js";import"./AGraphicContainer-BiE74Pv_.js";import"./TechniqueInstance-B54UmClR.js";import"./TileContainer-nuUUpDre.js";import"./AttributeStore-zqw5yu32.js";import"./centroid-DdLmOD72.js";import"./queryUtils-ByaIVarH.js";import"./json-Wa8cmqdu.js";import"./timeSupport-g8M9cfWQ.js";import"./normalizeUtilsSync-CzCjEquS.js";const C=2;class me extends se{constructor(e){super(),this.element=e,this._handles=new X,this.isWrapAround=!1,this.perspectiveTransform=I(),this.wrapAroundShift=0,this.clipGeometry=null,this._handles.add(J(()=>this.element,()=>{const t=this.element;this.ready(),t&&this._handles.add(Y(t,"play",()=>this.requestRender()))},b))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=k(this.texture)}get textureSize(){if(!this.texture)return[1,1];const e=this.texture.descriptor;return[e.width,e.height]}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const t=this.element;if(t==null)return;const{context:i}=e,{videoWidth:o,videoHeight:s}=t;if(o!==0&&s!==0){if(this.texture)t.paused||this.texture.setData(t);else{const n=new B;n.wrapMode=K.CLAMP_TO_EDGE,n.preMultiplyAlpha=!0,n.width=o,n.height=s,this.texture=new N(i,n,t)}t.paused||(this.texture.generateMipmap(),this.requestRender()),super.beforeRender(e)}}_createTransforms(){return null}updateDrawCoords(e,t,i,o){const s=this.element,n=this._getFrameInfo();if(!s||!n)return;this._initializeData(e,n,i);const{controlPoints:l,horizon:m}=n,h=Math.sqrt(l.length),p=h,{x:a,y}=e,u=this._vertices,T=l[0],P=l[h-1],F=l[(p-1)*h],j=l[(p-1)*h+h-1],G=g(m?m[0].mapPoint:T.mapPoint,i),O=g(m?m[1].mapPoint:P.mapPoint,i),f=g(F.mapPoint,i),L=g(j.mapPoint,i);this.clipGeometry=m?new oe({geometry:Q.fromJSON({rings:[[[f.x,f.y],[L.x,L.y],[O.x,O.y],[G.x,G.y],[f.x,f.y]]],spatialReference:i})}):null;for(let c=0;c<l.length;c++){const E=l[c],{sourcePoint:S,mapPoint:A}=E;if(S==null||A==null)continue;const w=g(A,i);u[c*C+0]=w.x-a,u[c*C+1]=w.y-y}let D=t;if(o){const c=Math.min(G.x,O.x,f.x,L.x),E=Math.max(G.x,O.x,f.x,L.x),{worldWidth:S,xBounds:A}=o,[w,H]=A;c<w&&E>w?D=S:E>H&&c<H&&(D=-S)}this.wrapAroundShift=D,this.isWrapAround=D!==0}draw(e,t){this.isReady&&this._vertices&&this._indices&&this._texCoords?t.render(e,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:this.textureSize,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._texCoords,index:this._indices}):this.requestRender()}_initializeData(e,t,i){if(this._vertices!=null&&this._indices!=null)return;const{controlPoints:o}=t,s=Math.sqrt(o.length),n=s,l=new Float32Array(C*o.length),m=new Uint16Array(2*o.length);for(let a=0;a<o.length;a++){const y=o[a],{sourcePoint:u,mapPoint:T}=y;if(u==null||T==null)continue;const P=g(T,i);l[a*C+0]=P.x-e.x,l[a*C+1]=P.y-e.y,m[2*a+0]=u.x,m[2*a+1]=u.y}const h=new Uint16Array(n*s+(n-2)*(s+2));let p=0;for(let a=0;a<n;a++){for(let y=0;y<s;y++)h[p++]=a*s+y,h[p++]=(a+1)*s+y;a<n-2&&(h[p++]=(a+1)*s+(s-1),h[p++]=(a+1)*s)}this._vertices=l,this._texCoords=m,this._indices=h}_getFrameInfo(){if(!this.groundControlPoints)return null;const e=this._getFrameControlPoints(),t=this.frameHorizonPoints;let i=null;if(t){const o=t.startX,s=t.startY,n=t.endX,l=t.endY;i=[{sourcePoint:V(o,s),mapPoint:new z(t.startLongitude,t.startLatitude)},{sourcePoint:V(n,l),mapPoint:new z(t.endLongitude,t.endLatitude)}]}return{controlPoints:e,horizon:i}}_getFrameControlPoints(){const e=this.groundControlPoints,t=e==null?void 0:e.length;if(!t)return[];const i=new Array(t),o=Math.max(...e.map(({x:n})=>n)),s=this.element.videoWidth/o;for(let n=0;n<t;n++){const{x:l,y:m,lat:h,lon:p}=e[n];i[n]={sourcePoint:V(l*s,-m*s),mapPoint:new z(p,h)}}return i}}const _=new Z([255,127,0]);let d=class extends ne(he){constructor(){super(...arguments),this._graphicsLayer=new ee,this._frameOutlineGraphic=new v({symbol:new te({outline:{type:"simple-line",color:_}})}),this._sensorTrailGraphic=new v({symbol:new R({color:_})}),this._lineOfSightGraphic=new v({symbol:new R({color:_})}),this._sensorLocationGraphic=new v({symbol:new q({color:_})}),this._frameCenterGraphic=new v({symbol:new q({color:_,style:"cross"})}),this._overlayContainer=null,this.layer=null,this.symbolColor=_,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=W(this._graphicsLayer)}initialize(){var r,e,t,i,o,s;this.addHandles(M(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},b)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new U({frame:((r=this.layer.telemetryDisplay)==null?void 0:r.frame)??!1,frameCenter:((e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter)??!0,frameOutline:((t=this.layer.telemetryDisplay)==null?void 0:t.frameOutline)??!0,lineOfSight:((i=this.layer.telemetryDisplay)==null?void 0:i.lineOfSight)??!0,sensorLocation:((o=this.layer.telemetryDisplay)==null?void 0:o.sensorLocation)??!0,sensorTrail:((s=this.layer.telemetryDisplay)==null?void 0:s.sensorTrail)??!0})}attach(){this._overlayContainer=new re,this.container.addChild(this._overlayContainer),this._addOverlayMultipoint(),this.graphicsView=new le({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new ae(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([M(()=>{var r,e,t,i,o,s;return[(r=this.layer.telemetryDisplay)==null?void 0:r.frame,(e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter,(t=this.layer.telemetryDisplay)==null?void 0:t.frameOutline,(i=this.layer.telemetryDisplay)==null?void 0:i.sensorLocation,(o=this.layer.telemetryDisplay)==null?void 0:o.sensorTrail,(s=this.layer.telemetryDisplay)==null?void 0:s.lineOfSight]},()=>this._updateVisibleTelemetryElements(),b),M(()=>{var r,e,t,i,o;return[this.layer.telemetry,(r=this.visibleTelemetryElements)==null?void 0:r.frameCenter,(e=this.visibleTelemetryElements)==null?void 0:e.frameOutline,(t=this.visibleTelemetryElements)==null?void 0:t.sensorLocation,(i=this.visibleTelemetryElements)==null?void 0:i.sensorTrail,(o=this.visibleTelemetryElements)==null?void 0:o.lineOfSight]},()=>this._updateGraphicGeometries(),b)])}detach(){this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this.graphicsView=W(this.graphicsView)}supportsSpatialReference(r){return!0}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(r){this.graphicsView.processUpdate(r)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frame=this.layer.telemetryDisplay.frame,this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:r}=this.layer,{visibleTelemetryElements:e}=this;r&&e&&(e.frameOutline&&r.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,e.sensorTrail&&r.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,e.lineOfSight&&r.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,e.sensorLocation&&r.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,e.frameCenter&&r.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}async _addOverlayMultipoint(){if(!this.layer.videoElement)return;const r=new me(this.layer.videoElement);this.addAttachHandles([M(()=>[this.layer.frameHorizonPoints,this.layer.groundControlPoints],()=>{const{visibleTelemetryElements:e}=this;e!=null&&e.frame?(r.frameHorizonPoints=this.layer.frameHorizonPoints,r.groundControlPoints=this.layer.groundControlPoints,r.opacity=1):r.opacity=0},b)]),this._overlayContainer.addChild(r),this.view.stage.requestRender()}};x([$()],d.prototype,"graphicsView",void 0),x([$()],d.prototype,"layer",void 0),x([$()],d.prototype,"symbolColor",void 0),x([$({type:U})],d.prototype,"visibleTelemetryElements",void 0),d=x([ie("esri.views.2d.layers.VideoLayerView2D")],d);const Ne=d;export{Ne as default};
