import{jl as Wt,jm as Me,ax as Ae,jo as Qe,kU as Vt,jz as Ke,qM as Bt,ec as H,e0 as Je,at as We,jy as kt,w8 as Ht,dZ as J,dY as xe,aj as Jt,b4 as X,ar as x,cM as Gt,dv as et,it as Yt,cP as qt,a7 as g,vI as Zt,aQ as Xt,l4 as Qt,vP as pe,_ as Kt,kq as tt,qh as Se,dR as De,c0 as Pe,ai as Et,qG as ei,kM as _e,sm as V,e9 as he,a_ as it,ed as rt,dW as Ie,e1 as ti,qr as ii,wc as se,jt as ri,gh as Ve,kO as ni,fm as ai,ak as si,li as oi,wd as li}from"./index-CFrkLCgo.js";import{t as ci}from"./orientedBoundingBox-DIfl0uDP.js";import{r as Ot,k as Ge,am as di,an as pi,W as S,af as yt,ag as At,ah as Rt,o as M,B as Te,ao as nt,a1 as hi,f as ui,w as Ye,j as fi,e as Re,E as mi,ap as vi,a2 as gi,a as Si,D as _i,aq as Ti,a5 as bi,a3 as Ei,a4 as Oi,a6 as yi,J as Ai,K as Ri,P as at,a7 as xi,a8 as Ci,a9 as Di,aa as Li,ab as st,ac as ot,ad as Pi,ar as Ii,as as lt,at as $i,au as wi,av as Ni,aw as Ui,A as k,Y as zi,Q as ae,v as Be,ak as ji,al as Fi,p as Mi}from"./Geometry-Ciweeza9.js";import{t as Wi}from"./basicInterfaces-CZwQPxTp.js";import{s as Vi,m as Bi}from"./Util-BoaVC_nf.js";import{E as ki,e as h}from"./VertexAttribute-Cq4MnHjR.js";import{n as Hi,r as Ji,b as Gi,t as xt}from"./dehydratedFeatureUtils-DpD9-rWK.js";import{Y as Yi,j as be}from"./Octree-BXEpnCbc.js";import{v as Ct,M as qi,b as $e,B as Zi}from"./lineSegment-BqfR-EAK.js";import{H as Xi}from"./InterleavedLayout-B-NlDjFF.js";import{n as G,i as Qi,e as Ki,C as er,f as ct,h as tr}from"./NormalAttribute.glsl-BFoV2-ef.js";import{B as Ee,g as we,c as dt}from"./renderState-CpmjeUaX.js";import{C as ir}from"./computeTranslationToOriginAndRotation-BPoOYux1.js";import{u as rr}from"./hydratedFeatures-DdXNPirD.js";import"./BindType-BmZEZMMh.js";import{o as p}from"./interfaces-DDtDqZYj.js";import"./floatRGBA-0tHfqKrv.js";var pt,ht,ut;(function(t){t[t.RasterImage=0]="RasterImage",t[t.Features=1]="Features"})(pt||(pt={})),function(t){t[t.MapLayer=0]="MapLayer",t[t.ViewLayer=1]="ViewLayer",t[t.Outline=2]="Outline",t[t.SnappingHint=3]="SnappingHint"}(ht||(ht={})),function(t){t[t.WithRasterImage=0]="WithRasterImage",t[t.WithoutRasterImage=1]="WithoutRasterImage"}(ut||(ut={}));var Ce;(function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"})(Ce||(Ce={}));let nr=class extends Ot{get geometries(){return this._geometries}get transformation(){return this._transformation??Wt}set transformation(e){this._transformation=Me(this._transformation??Ae(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Me(this._shaderTransformation??Ae(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=Ge.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new Dt),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){Vi(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const i=this._geometries.splice(e,1)[0];i&&(this._emit("geometryRemoved",{object:this,geometry:i}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,i,r=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:i,sync:r}),ki(i)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const i of this._geometries)i.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new di;for(const i of this._geometries)i.occludees=Hi(i.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const i of this._geometries)i.occludees=Ji(i.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const i=new pi(e);for(const r of this._geometries)r.addHighlight(i);return this._emit("highlightChanged",this),i}removeHighlight(e){for(const i of this._geometries)i.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===Wi.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,i){return Qe(i,this.transformation,e.transformation)}getCombinedShaderTransformation(e,i=Ae()){return Qe(i,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new ft,this._validateBoundingVolume(this._bvWorldSpace,ue.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new ft,this._validateBoundingVolume(this._bvObjectSpace,ue.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,i){const r=i===ue.ObjectSpace;for(const n of this._geometries){const a=n.boundingInfo;a&&ar(a,e,r?n.transformation:this.getCombinedShaderTransformation(n))}Vt(Ke(e.bounds),e.min,e.max,.5);for(const n of this._geometries){const a=n.boundingInfo;if(a==null)continue;const l=r?n.transformation:this.getCombinedShaderTransformation(n),o=Bt(l);H(mt,a.center,l);const s=Je(mt,Ke(e.bounds)),c=a.radius*o;e.bounds[3]=Math.max(e.bounds[3],s+c)}}_invalidateBoundingVolume(){var i;const e=(i=this._bvWorldSpace)==null?void 0:i.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,i){this._parentLayer&&this._parentLayer.events.emit(e,i)}get test(){}};class Dt{constructor(){this.min=We(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=We(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class ft extends Dt{constructor(){super(...arguments),this.bounds=kt()}}function ar(t,e,i){const r=t.bbMin,n=t.bbMax;if(Ht(i)){const a=J(sr,i[12],i[13],i[14]);xe(j,r,a),xe(F,n,a);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],j[l]),e.max[l]=Math.max(e.max[l],F[l])}else if(H(j,r,i),Jt(r,n))for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],j[a]),e.max[a]=Math.max(e.max[a],j[a]);else{H(F,n,i);for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],j[a],F[a]),e.max[a]=Math.max(e.max[a],j[a],F[a]);for(let a=0;a<3;++a){X(j,r),X(F,n),j[a]=n[a],F[a]=r[a],H(j,j,i),H(F,F,i);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],j[l],F[l]),e.max[l]=Math.max(e.max[l],j[l],F[l])}}}const sr=x(),j=x(),F=x(),mt=x();var ue;(function(t){t[t.WorldSpace=0]="WorldSpace",t[t.ObjectSpace=1]="ObjectSpace"})(ue||(ue={}));const or=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let lr=class extends Ot{constructor(e,i,r=""){super(),this.stage=e,this.apiLayerUid=r,this.type=Ge.Layer,this.events=new Gt,this.visible=!0,this.sliceable=!1,this._objectsAdded=new et,this._handles=new Yt,this._objects=new et,this._pickable=!0,this.visible=(i==null?void 0:i.visible)??!0,this._pickable=(i==null?void 0:i.pickable)??!0,this.updatePolicy=(i==null?void 0:i.updatePolicy)??Ce.ASYNC,this._disableOctree=(i==null?void 0:i.disableOctree)??!1,e.add(this);for(const n of or)this._handles.add(this.events.on(n,a=>e.handleEvent(n,a)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),this._octree!=null&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const i of e)i.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),this._octree!=null&&this._objectsAdded.pushArray(e)}removeMany(e){const i=new Array;if(this._objects.removeUnorderedMany(e,e.length,i),i.length!==0){for(const r of i)r.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:i}),this._octree!=null){for(let r=0;r<i.length;)this._objectsAdded.removeUnordered(i[r])?(i[r]=i[i.length-1],i.length-=1):++r;this._octree.remove(i)}}}sync(){this.updatePolicy!==Ce.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,i){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,i)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.length>50&&!this._disableOctree?(this._octree=new Yi(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=qt(this._octree),this._objectsAdded.clear()}},cr=class{constructor(e,i){this.vec3=e,this.id=i}};function vt(t,e,i,r){return new cr(We(t,e,i),r)}var ie,fe;(function(t){t[t.Draped=0]="Draped",t[t.Screen=1]="Screen",t[t.World=2]="World",t[t.COUNT=3]="COUNT"})(ie||(ie={})),function(t){t[t.Center=0]="Center",t[t.Tip=1]="Tip",t[t.COUNT=2]="COUNT"}(fe||(fe={}));let U=class extends yt{constructor(){super(...arguments),this.space=ie.Screen,this.anchor=fe.Center,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=At.None,this.emissionSource=Rt.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===ie.Draped}};g([S({count:ie.COUNT})],U.prototype,"space",void 0),g([S({count:fe.COUNT})],U.prototype,"anchor",void 0),g([S()],U.prototype,"occluder",void 0),g([S()],U.prototype,"hasSlicePlane",void 0),g([S()],U.prototype,"writeDepth",void 0),g([S()],U.prototype,"hideOnShortSegments",void 0),g([S()],U.prototype,"hasCap",void 0),g([S()],U.prototype,"hasTip",void 0),g([S()],U.prototype,"vvSize",void 0),g([S()],U.prototype,"vvColor",void 0),g([S()],U.prototype,"vvOpacity",void 0),g([S()],U.prototype,"hasOccludees",void 0),g([S()],U.prototype,"terrainDepthTest",void 0),g([S()],U.prototype,"cullAboveTerrain",void 0);const gt=8;function dr(t,e){const i=t.vertex;i.uniforms.add(new M("intrinsicWidth",r=>r.width)),e.vvSize?(t.attributes.add(h.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new Te("vvSizeMinSize",r=>r.vvSize.minSize),new Te("vvSizeMaxSize",r=>r.vvSize.maxSize),new Te("vvSizeOffset",r=>r.vvSize.offset),new Te("vvSizeFactor",r=>r.vvSize.factor)),i.code.add(p`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(t.attributes.add(h.SIZE,"float"),i.code.add(p`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(t.attributes.add(h.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new nt("vvOpacityValues",r=>r.vvOpacity.values,gt),new nt("vvOpacityOpacities",r=>r.vvOpacity.opacityValues,gt)),i.code.add(p`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(p`vec4 applyOpacity( vec4 color ){
return color;
}`),e.vvColor?(t.include(hi,e),t.attributes.add(h.COLORFEATUREATTRIBUTE,"float"),i.code.add(p`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(t.attributes.add(h.COLOR,"vec4"),i.code.add(p`vec4 getColor(){
return applyOpacity(color);
}`))}function Lt(t){return t.pattern.map(e=>Math.round(e*t.pixelRatio))}function pr(t){if(t==null)return 1;const e=Lt(t);return Math.floor(e.reduce((i,r)=>i+r))}function hr(t){return Lt(t).reduce((e,i)=>Math.max(e,i))}function ur(t){return t==null?Zt:t.length===4?t:Xt(fr,t[0],t[1],t[2],1)}const fr=Qt();function mr(t,e){e.stippleEnabled?vr(t,e):gr(t)}function vr(t,e){const i=!(e.draped&&e.stipplePreferContinuous),{vertex:r,fragment:n}=t;n.include(Gi),e.draped||(ui(r,e),r.uniforms.add(new M("worldToScreenPerDistanceRatio",(a,l)=>1/l.camera.perScreenPixelRatio)),r.code.add(p`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),r.code.add(p`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${_r};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(p`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(p`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),Ye(r),r.code.add(p`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),n.uniforms.add(new fi("stipplePatternTexture",a=>a.stippleTexture),new M("stipplePatternSDFNormalizer",a=>Sr(a.stipplePattern)),new M("stipplePatternPixelSizeInv",a=>1/Pt(a))),n.code.add(p`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),e.stippleOffColorEnabled?(n.uniforms.add(new Re("stippleOffColor",a=>ur(a.stippleOffColor))),n.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):n.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function gr(t){t.fragment.code.add(p`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function Sr(t){return t?(Math.floor(.5*(hr(t)-1))+.5)/t.pixelRatio:1}function Pt(t){const e=t.stipplePattern;return e?pr(t.stipplePattern)/e.pixelRatio:1}const _r=p.float(.4),It=64,Tr=It/2,br=Tr/5,Er=It/br,Tn=.25;function Or(t,e){const i=t.vertex;Ye(i),i.uniforms.get("markerScale")==null&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",Er).code.add(p`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===ie.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new M("perRenderPixelRatio",(r,n)=>n.camera.perRenderPixelRatio)),i.code.add(p`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var re;(function(t){t[t.BUTT=0]="BUTT",t[t.SQUARE=1]="SQUARE",t[t.ROUND=2]="ROUND",t[t.COUNT=3]="COUNT"})(re||(re={}));let O=class extends yt{constructor(){super(...arguments),this.capType=re.BUTT,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=At.None,this.emissionSource=Rt.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}};g([S({count:re.COUNT})],O.prototype,"capType",void 0),g([S()],O.prototype,"hasSlicePlane",void 0),g([S()],O.prototype,"hasPolygonOffset",void 0),g([S()],O.prototype,"writeDepth",void 0),g([S()],O.prototype,"draped",void 0),g([S()],O.prototype,"stippleEnabled",void 0),g([S()],O.prototype,"stippleOffColorEnabled",void 0),g([S()],O.prototype,"stipplePreferContinuous",void 0),g([S()],O.prototype,"roundJoins",void 0),g([S()],O.prototype,"applyMarkerOffset",void 0),g([S()],O.prototype,"vvSize",void 0),g([S()],O.prototype,"vvColor",void 0),g([S()],O.prototype,"vvOpacity",void 0),g([S()],O.prototype,"falloffEnabled",void 0),g([S()],O.prototype,"innerColorEnabled",void 0),g([S()],O.prototype,"hasOccludees",void 0),g([S()],O.prototype,"occluder",void 0),g([S()],O.prototype,"terrainDepthTest",void 0),g([S()],O.prototype,"cullAboveTerrain",void 0),g([S()],O.prototype,"wireframe",void 0),g([S()],O.prototype,"discardInvisibleFragments",void 0),g([S()],O.prototype,"objectAndLayerIdColorInstanced",void 0);const me=1;function $t(t){const e=new mi,{attributes:i,varyings:r,vertex:n,fragment:a}=e,{applyMarkerOffset:l,draped:o,output:s,capType:c,stippleEnabled:d,falloffEnabled:m,roundJoins:v,wireframe:f,innerColorEnabled:y}=t;e.include(vi),e.include(dr,t),e.include(mr,t),e.include(gi,t);const E=l&&!o;E&&(n.uniforms.add(new M("markerScale",_=>_.markerScale)),e.include(Or,{space:ie.World})),Si(n,t),n.uniforms.add(new _i("inverseProjectionMatrix",(_,u)=>u.camera.inverseProjectionMatrix),new Ti("nearFar",(_,u)=>u.camera.nearFar),new M("miterLimit",_=>_.join!=="miter"?0:_.miterLimit),new Re("viewport",(_,u)=>u.camera.fullViewport)),n.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(h.POSITION,"vec3"),i.add(h.PREVPOSITION,"vec3"),i.add(h.NEXTPOSITION,"vec3"),i.add(h.SUBDIVISIONFACTOR,"float"),i.add(h.UV0,"vec2"),r.add("vColor","vec4"),r.add("vpos","vec3"),r.add("vLineDistance","float"),r.add("vLineWidth","float");const A=t.terrainDepthTest&&s===G.Color;A&&r.add("depth","float");const D=d;D&&r.add("vLineSizeInv","float");const b=c===re.ROUND,N=d&&b,T=m||N;T&&r.add("vLineDistanceNorm","float"),b&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),n.code.add(p`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),n.code.add(p`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),n.code.add(p`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${A?"depth = pos.z;":""}

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),Ye(n),n.constants.add("aaWidth","float",d?0:1).main.add(p`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${D?p`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),E&&n.main.add(p`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),n.main.add(p`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(d||b)&&n.main.add(p`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${b?p`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),n.main.add(p`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),v?n.main.add(p`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${d?p`min(1.0, subdivisionFactor * ${p.float((me+2)/(me+1))})`:p`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):n.main.add(p`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const P=c!==re.BUTT;return n.main.add(p`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${P?p`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),n.main.add(p`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${T?p`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),b&&n.main.add(p`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),d&&(o?n.uniforms.add(new M("worldToScreenRatio",(_,u)=>1/u.screenToPCSRatio)):n.main.add(p`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),n.main.add(p`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),o?n.main.add(p`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):n.main.add(p`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),n.uniforms.add(new M("stipplePatternPixelSize",_=>Pt(_))),n.main.add(p`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),n.main.add(p`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${f&&!o?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),A&&e.include(bi,t),e.include(Ei,t),e.include(Oi,t),a.include(yi),a.main.add(p`
    discardBySlice(vpos);
    ${A?"terrainDepthTest(depth);":""}
  `),f?a.main.add(p`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(b&&a.main.add(p`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${p.float(pe)}) {
          discard;
        }
      `),N?a.main.add(p`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${p.float(pe)}, stippleCoverage);
      `):a.main.add(p`float stippleAlpha = getStippleAlpha();`),s!==G.ObjectAndLayerIdColor&&a.main.add(p`discardByStippleAlpha(stippleAlpha, ${p.float(pe)});`),a.uniforms.add(new Re("intrinsicColor",_=>_.color)),a.main.add(p`vec4 color = intrinsicColor * vColor;`),y&&(a.uniforms.add(new Re("innerColor",_=>_.innerColor??_.color),new M("innerWidth",(_,u)=>_.innerWidth*u.camera.pixelRatio)),a.main.add(p`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),a.main.add(p`vec4 finalColor = blendStipple(color, stippleAlpha);`),m&&(a.uniforms.add(new M("falloff",_=>_.falloff)),a.main.add(p`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),d||a.main.add(p`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),a.main.add(p`outputColorHighlightOID(finalColor, vpos);`),e}const yr=Object.freeze(Object.defineProperty({__proto__:null,build:$t,ribbonlineNumRoundJoinSubdivisions:me},Symbol.toStringTag,{value:"Module"}));let Ar=class extends Ai{constructor(e,i,r){super(e,i,new Ri(yr,()=>Kt(()=>Promise.resolve().then(()=>Xr),void 0,import.meta.url)),r,wt),this.primitiveType=i.wireframe?tt.LINES:tt.TRIANGLE_STRIP}_makePipelineState(e,i){const{oitPass:r,output:n,hasOccludees:a,hasPolygonOffset:l}=e,o=r===at.NONE,s=r===at.FrontFace;return Ee({blending:e.output===G.Color?xi(r):null,depthTest:{func:Ci(r)},depthWrite:Di(e),drawBuffers:n===G.Depth?{buffers:[Se.NONE]}:Li(r,n),colorWrite:we,stencilWrite:a?st:null,stencilTest:a?i?ot:Pi:null,polygonOffset:o||s?l?St:null:Ii})}initializePipeline(e){if(e.occluder){const i=e.hasPolygonOffset?St:null;this._occluderPipelineTransparent=Ee({blending:dt,polygonOffset:i,depthTest:lt,depthWrite:null,colorWrite:we,stencilWrite:null,stencilTest:$i,drawBuffers:e.output===G.Depth?{buffers:[Se.NONE]}:null}),this._occluderPipelineOpaque=Ee({blending:dt,polygonOffset:i,depthTest:lt,depthWrite:null,colorWrite:we,stencilWrite:wi,stencilTest:Ni,drawBuffers:e.output===G.Depth?{buffers:[Se.NONE]}:null}),this._occluderPipelineMaskWrite=Ee({blending:null,polygonOffset:i,depthTest:Ui,depthWrite:null,colorWrite:null,stencilWrite:st,stencilTest:ot,drawBuffers:e.output===G.Depth?{buffers:[Se.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,i){if(e)return this._occludeePipeline;switch(i){case k.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case k.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}};const St={factor:0,units:-4},wt=new Map([[h.POSITION,0],[h.PREVPOSITION,1],[h.NEXTPOSITION,2],[h.SUBDIVISIONFACTOR,3],[h.UV0,4],[h.COLOR,5],[h.COLORFEATUREATTRIBUTE,5],[h.SIZE,6],[h.SIZEFEATUREATTRIBUTE,6],[h.OPACITYFEATUREATTRIBUTE,7],[h.OBJECTANDLAYERIDCOLOR,8]]);var z;(function(t){t[t.LEFT_JOIN_START=-2]="LEFT_JOIN_START",t[t.LEFT_JOIN_END=-1]="LEFT_JOIN_END",t[t.LEFT_CAP_START=-4]="LEFT_CAP_START",t[t.LEFT_CAP_END=-5]="LEFT_CAP_END",t[t.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",t[t.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",t[t.RIGHT_CAP_START=4]="RIGHT_CAP_START",t[t.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(z||(z={}));class Rr extends zi{constructor(e){super(e,Cr),this._configuration=new O,this.vertexAttributeLocations=wt,this.produces=new Map([[k.OPAQUE_MATERIAL,i=>Qi(i)||Ki(i)&&this.parameters.renderOccluded===ae.OccludeAndTransparentStencil],[k.OPAQUE_MATERIAL_WITHOUT_NORMALS,i=>er(i)],[k.OCCLUDER_MATERIAL,i=>ct(i)&&this.parameters.renderOccluded===ae.OccludeAndTransparentStencil],[k.TRANSPARENT_OCCLUDER_MATERIAL,i=>ct(i)&&this.parameters.renderOccluded===ae.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL,i=>i===G.Color&&this.parameters.writeDepth&&this.parameters.renderOccluded!==ae.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>i===G.Color&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==ae.OccludeAndTransparentStencil],[k.DRAPED_MATERIAL,i=>tr(i)]])}getConfiguration(e,i){this._configuration.output=e,this._configuration.oitPass=i.oitPass,this._configuration.draped=i.slot===k.DRAPED_MATERIAL;const r=this.parameters.stipplePattern!=null&&e!==G.Highlight;return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Lr(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=i.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===ae.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){var e;return this.parameters.color[3]>=pe||this.parameters.stipplePattern!=null&&(((e=this.parameters.stippleOffColor)==null?void 0:e[3])??0)>pe}intersectDraped({attributes:e,screenToWorldRatio:i},r,n,a,l,o){if(!n.options.selectionMode)return;const s=e.get(h.SIZE);let c=this.parameters.width;if(this.parameters.vvSize){const D=e.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Pe(this.parameters.vvSize.offset[0]+D*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else s&&(c*=s.data[0]);const d=a[0],m=a[1],v=(c/2+4)*i;let f=Number.MAX_VALUE,y=0;const E=e.get(h.POSITION).data,A=ke(this.parameters,e)?E.length-2:E.length-5;for(let D=0;D<A;D+=3){const b=E[D],N=E[D+1],T=(D+3)%E.length,P=d-b,_=m-N,u=E[T]-b,Z=E[T+1]-N,L=Pe((u*P+Z*_)/(u*u+Z*Z),0,1),ne=u*L-P,I=Z*L-_,Q=ne*ne+I*I;Q<f&&(f=Q,y=D/3)}f<v*v&&l(o.dist,o.normal,y,!1)}intersect(e,i,r,n,a,l){if(!r.options.selectionMode||!e.visible)return;if(!Bi(i))return void Et.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const o=e.attributes,s=o.get(h.POSITION).data;let c=this.parameters.width;if(this.parameters.vvSize){const b=o.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Pe(this.parameters.vvSize.offset[0]+b*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o.has(h.SIZE)&&(c*=o.get(h.SIZE).data[0]);const d=r.camera,m=Pr;ei(m,r.point);const v=c*d.pixelRatio/2+4*d.pixelRatio;J(de[0],m[0]-v,m[1]+v,0),J(de[1],m[0]+v,m[1]+v,0),J(de[2],m[0]+v,m[1]-v,0),J(de[3],m[0]-v,m[1]-v,0);for(let b=0;b<4;b++)if(!d.unprojectFromRenderScreen(de[b],q[b]))return;_e(d.eye,q[0],q[1],Ue),_e(d.eye,q[1],q[2],ze),_e(d.eye,q[2],q[3],je),_e(d.eye,q[3],q[0],Fe);let f=Number.MAX_VALUE,y=0;const E=ke(this.parameters,o)?s.length-2:s.length-5;for(let b=0;b<E;b+=3){$[0]=s[b]+i[12],$[1]=s[b+1]+i[13],$[2]=s[b+2]+i[14];const N=(b+3)%s.length;if(w[0]=s[N]+i[12],w[1]=s[N+1]+i[13],w[2]=s[N+2]+i[14],V(Ue,$)<0&&V(Ue,w)<0||V(ze,$)<0&&V(ze,w)<0||V(je,$)<0&&V(je,w)<0||V(Fe,$)<0&&V(Fe,w)<0)continue;if(d.projectToRenderScreen($,ee),d.projectToRenderScreen(w,te),ee[2]<0&&te[2]>0){he(B,$,w);const P=d.frustum,_=-V(P[be.NEAR],$)/it(B,rt(P[be.NEAR]));Ie(B,B,_),xe($,$,B),d.projectToRenderScreen($,ee)}else if(ee[2]>0&&te[2]<0){he(B,w,$);const P=d.frustum,_=-V(P[be.NEAR],w)/it(B,rt(P[be.NEAR]));Ie(B,B,_),xe(w,w,B),d.projectToRenderScreen(w,te)}else if(ee[2]<0&&te[2]<0)continue;ee[2]=0,te[2]=0;const T=qi($e(ee,te,bt),m);T<f&&(f=T,X(_t,$),X(Tt,w),y=b/3)}const A=r.rayBegin,D=r.rayEnd;if(f<v*v){let b=Number.MAX_VALUE;if(Zi($e(_t,Tt,bt),$e(A,D,Ir),K)){he(K,K,A);const N=ti(K);Ie(K,K,1/N),b=N/Je(A,D)}l(b,K,y,!1)}}get _layout(){const e=Xi().vec3f(h.POSITION).vec3f(h.PREVPOSITION).vec3f(h.NEXTPOSITION).f32(h.SUBDIVISIONFACTOR).vec2f(h.UV0);return this.parameters.vvSize?e.f32(h.SIZEFEATUREATTRIBUTE):e.f32(h.SIZE),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4f(h.COLOR),this.parameters.vvOpacity&&e.f32(h.OPACITYFEATUREATTRIBUTE),Be()&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new Dr(this._layout,this.parameters)}createGLMaterial(e){return new xr(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}}class xr extends ji{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const i=this._material.parameters.stipplePattern;return this._stipplePattern!==i&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(i,this._stipplePattern)}),this._stipplePattern=i),this.acquireTechnique(Ar,e)}}class Cr extends Fi{constructor(){super(...arguments),this.width=0,this.color=ii,this.join="miter",this.cap=re.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){var e;return this.color[3]<1||this.stipplePattern!=null&&(((e=this.stippleOffColor)==null?void 0:e[3])??0)<1}}class Dr{constructor(e,i){this.vertexBufferLayout=e,this._parameters=i,this.numJoinSubdivisions=0;const r=i.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=me+r}}_isClosed(e){return ke(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const r=e.get(h.POSITION).indices.length/2+1,n=this._isClosed(e);let a=n?2:2*2;return a+=((n?r:r-1)-(n?0:1))*(2*this.numJoinSubdivisions+4),a+=2,this._parameters.wireframe&&(a=2+4*(a-2)),a}write(e,i,r,n,a,l){var qe,Ze,Xe;const o=$r,s=wr,c=Nr,d=r.get(h.POSITION),m=d.indices,v=d.data.length/3,f=(qe=r.get(h.DISTANCETOSTART))==null?void 0:qe.data;m&&m.length!==2*(v-1)&&console.warn("RibbonLineMaterial does not support indices");const y=((Ze=r.get(h.SIZEFEATUREATTRIBUTE))==null?void 0:Ze.data[0])??((Xe=r.get(h.SIZE))==null?void 0:Xe.data[0])??1;let E=[1,1,1,1],A=0;const D=this.vertexBufferLayout.fields.has(h.COLORFEATUREATTRIBUTE);D?A=r.get(h.COLORFEATUREATTRIBUTE).data[0]:r.has(h.COLOR)&&(E=r.get(h.COLOR).data);const b=this.vertexBufferLayout.fields.has(h.OPACITYFEATUREATTRIBUTE),N=b?r.get(h.OPACITYFEATUREATTRIBUTE).data[0]:0,T=new Float32Array(a.buffer),P=Be()?new Uint8Array(a.buffer):null,_=this.vertexBufferLayout.stride/4;let u=l*_;const Z=u;let L=0;const ne=f?(R,W,Y)=>L=f[Y]:(R,W,Y)=>L+=Je(R,W),I=(R,W,Y,ce,ve,Ft,Mt)=>{if(T[u++]=W[0],T[u++]=W[1],T[u++]=W[2],T[u++]=R[0],T[u++]=R[1],T[u++]=R[2],T[u++]=Y[0],T[u++]=Y[1],T[u++]=Y[2],T[u++]=ce,T[u++]=Mt,T[u++]=ve,T[u++]=y,D)T[u++]=A;else{const ge=Math.min(4*Ft,E.length-4);T[u++]=E[ge],T[u++]=E[ge+1],T[u++]=E[ge+2],T[u++]=E[ge+3]}b&&(T[u++]=N),Be()&&(n&&(P[4*u]=n[0],P[4*u+1]=n[1],P[4*u+2]=n[2],P[4*u+3]=n[3]),u++)};u+=_,J(s,d.data[0],d.data[1],d.data[2]),e&&H(s,s,e);const Q=this._isClosed(r);if(Q){const R=d.data.length-3;J(o,d.data[R],d.data[R+1],d.data[R+2]),e&&H(o,o,e)}else J(c,d.data[3],d.data[4],d.data[5]),e&&H(c,c,e),I(s,s,c,1,z.LEFT_CAP_START,0,0),I(s,s,c,1,z.RIGHT_CAP_START,0,0),X(o,s),X(s,c);const Le=Q?0:1,le=Q?v:v-1;for(let R=Le;R<le;R++){const W=(R+1)%v*3;J(c,d.data[W],d.data[W+1],d.data[W+2]),e&&H(c,c,e),ne(o,s,R),I(o,s,c,0,z.LEFT_JOIN_END,R,L),I(o,s,c,0,z.RIGHT_JOIN_END,R,L);const Y=this.numJoinSubdivisions;for(let ce=0;ce<Y;++ce){const ve=(ce+1)/(Y+1);I(o,s,c,ve,z.LEFT_JOIN_END,R,L),I(o,s,c,ve,z.RIGHT_JOIN_END,R,L)}I(o,s,c,1,z.LEFT_JOIN_START,R,L),I(o,s,c,1,z.RIGHT_JOIN_START,R,L),X(o,s),X(s,c)}Q?(J(c,d.data[3],d.data[4],d.data[5]),e&&H(c,c,e),L=ne(o,s,le),I(o,s,c,0,z.LEFT_JOIN_END,Le,L),I(o,s,c,0,z.RIGHT_JOIN_END,Le,L)):(L=ne(o,s,le),I(o,s,s,0,z.LEFT_CAP_END,le,L),I(o,s,s,0,z.RIGHT_CAP_END,le,L)),Ne(T,Z+_,T,Z,_),u=Ne(T,u-_,T,u,_),this._parameters.wireframe&&this._addWireframeVertices(a,Z,u,_)}_addWireframeVertices(e,i,r,n){const a=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),l=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT,r-i);let o=0;const s=c=>o=Ne(l,c,a,o,n);for(let c=0;c<l.length-1;c+=2*n)s(c),s(c+2*n),s(c+1*n),s(c+2*n),s(c+1*n),s(c+3*n)}}function Ne(t,e,i,r,n){for(let a=0;a<n;a++)i[r++]=t[e++];return r}function ke(t,e){return t.isClosed?e.get(h.POSITION).indices.length>2:!1}function Lr(t){return t.anchor===fe.Tip&&t.hideOnShortSegments&&t.placement==="begin-end"&&t.worldSpace}const $=x(),w=x(),B=x(),K=x(),Pr=x(),ee=se(),te=se(),_t=x(),Tt=x(),bt=Ct(),Ir=Ct(),$r=x(),wr=x(),Nr=x(),de=[se(),se(),se(),se()],q=[x(),x(),x(),x()],Ue=De(),ze=De(),je=De(),Fe=De();class On{constructor(e){this._originSR=e,this._rootOriginId="root/"+ri(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const i=this._origins.get(this._rootOriginId);if(i==null){const d=vt(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const r=this._gridSize,n=Math.round(e[0]/r),a=Math.round(e[1]/r),l=Math.round(e[2]/r),o=`${n}/${a}/${l}`;let s=this._origins.get(o);const c=.5*r;if(he(C,e,i.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),C[0]<c&&C[1]<c&&C[2]<c){if(s){const d=Math.max(...C);if(he(C,e,s.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),Math.max(...C)<d)return s}return i}return s||(s=vt(n*r,a*r,l*r,o),this._origins.set(o,s)),s}_drawOriginBox(e,i=ni(1,1,0,1)){const r=window.view,n=r._stage,a=i.toString();if(!this._objects.has(a)){this._material=new Rr({width:2,color:i}),n.add(this._material);const f=new lr(n,{pickable:!1}),y=new nr({castShadow:!1});n.add(y),f.add(y),this._objects.set(a,y)}const l=this._objects.get(a),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],s=o.length,c=new Array(3*s),d=new Array,m=.5*this._gridSize;for(let f=0;f<s;f++)c[3*f]=e[0]+(1&o[f]?m:-m),c[3*f+1]=e[1]+(2&o[f]?m:-m),c[3*f+2]=e[2]+(4&o[f]?m:-m),f>0&&d.push(f-1,f);Ve(c,this._originSR,0,c,r.renderSpatialReference,0,s);const v=new Mi(this._material,[[h.POSITION,new ci(c,d,3,!0)]],null,Ge.Line);n.add(v),l.addGeometry(v)}get test(){}}const C=x();class yn{constructor(e,i=null,r=0){this.array=e,this.spatialReference=i,this.offset=r}}function Nt(t){return"array"in t}function Oe(t,e,i="ground"){if(xt(e))return t.getElevation(e.x,e.y,e.z||0,e.spatialReference,i);if(Nt(e)){let r=e.offset;return t.getElevation(e.array[r++],e.array[r++],e.array[r]||0,e.spatialReference??t.spatialReference,i)}return t.getElevation(e[0],e[1],e[2]||0,t.spatialReference,i)}function An(t,e,i,r,n,a,l,o,s,c,d){const m=Br[d.mode];let v,f,y=0;if(Ve(t,e,i,r,s.spatialReference,n,o))return m!=null&&m.requiresAlignment(d)?(y=m.applyElevationAlignmentBuffer(r,n,a,l,o,s,c,d),v=a,f=l):(v=r,f=n),Ve(v,s.spatialReference,f,a,c.spatialReference,l,o)?y:void 0}function Ut(t,e,i,r,n){const a=(xt(t)?t.z:Nt(t)?t.array[t.offset+2]:t[2])||0;switch(i.mode){case"on-the-ground":{const l=Oe(e,t,"ground")??0;return n.verticalDistanceToGround=0,n.sampledElevation=l,void(n.z=l)}case"relative-to-ground":{const l=Oe(e,t,"ground")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"relative-to-scene":{const l=Oe(e,t,"scene")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"absolute-height":{const l=i.geometryZWithOffset(a,r),o=Oe(e,t,"ground")??0;return n.verticalDistanceToGround=l-o,n.sampledElevation=o,void(n.z=l)}default:return void(n.z=0)}}function Rn(t,e,i,r){return Ut(t,e,i,r,oe),oe.z}function xn(t,e,i){return e==="on-the-ground"&&i==="on-the-ground"?t.staysOnTheGround:e===i||e!=="on-the-ground"&&i!=="on-the-ground"?e==null||i==null?t.definedChanged:He.UPDATE:t.onTheGroundChanged}function Cn(t){return t==="relative-to-ground"||t==="relative-to-scene"}function Dn(t){return t!=="absolute-height"}function Ln(t,e,i,r,n){Ut(e,i,n,r,oe),Ur(t,oe.verticalDistanceToGround);const a=oe.sampledElevation,l=Me(kr,t.transformation);return ye[0]=e.x,ye[1]=e.y,ye[2]=oe.z,ir(e.spatialReference,ye,l,r.spatialReference)?t.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),a}function Ur(t,e){for(let i=0;i<t.geometries.length;++i){const r=t.geometries[i].getMutableAttribute(h.CENTEROFFSETANDDISTANCE);r&&r.data[3]!==e&&(r.data[3]=e,t.geometryVertexAttributeUpdated(t.geometries[i],h.CENTEROFFSETANDDISTANCE))}}function zr(t,e,i,r,n,a){let l=0;const o=a.spatialReference;e*=3,r*=3;for(let s=0;s<n;++s){const c=t[e],d=t[e+1],m=t[e+2],v=a.getElevation(c,d,m,o,"ground")??0;l+=v,i[r]=c,i[r+1]=d,i[r+2]=v,e+=3,r+=3}return l/n}function jr(t,e,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,m=a.spatialReference;e*=3,r*=3;for(let v=0;v<n;++v){const f=t[e],y=t[e+1],E=t[e+2],A=a.getElevation(f,y,E,m,"ground")??0;s+=A,i[r]=f,i[r+1]=y,i[r+2]=d==null?E+A+c:A+c,e+=3,r+=3}return s/n}function Fr(t,e,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,m=a.spatialReference;e*=3,r*=3;for(let v=0;v<n;++v){const f=t[e],y=t[e+1],E=t[e+2],A=a.getElevation(f,y,E,m,"scene")??0;s+=A,i[r]=f,i[r+1]=y,i[r+2]=d==null?E+A+c:A+c,e+=3,r+=3}return s/n}function Mr(t){const e=t.meterUnitOffset,i=t.featureExpressionInfoContext;return e!==0||i!=null}function Wr(t,e,i,r,n,a,l,o){const s=o.calculateOffsetRenderUnits(l),c=o.featureExpressionInfoContext;e*=3,r*=3;for(let d=0;d<n;++d){const m=t[e],v=t[e+1],f=t[e+2];i[r]=m,i[r+1]=v,i[r+2]=c==null?f+s:s,e+=3,r+=3}return 0}class Vr{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var He;(function(t){t[t.NONE=0]="NONE",t[t.UPDATE=1]="UPDATE",t[t.RECREATE=2]="RECREATE"})(He||(He={}));const Br={"absolute-height":{applyElevationAlignmentBuffer:Wr,requiresAlignment:Mr},"on-the-ground":{applyElevationAlignmentBuffer:zr,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:jr,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:Fr,requiresAlignment:()=>!0}},kr=Ae(),oe=new Vr,ye=x(),Hr=()=>Et.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function Jr(t){return{cachedResult:t.cachedResult,arcade:t.arcade?{func:t.arcade.func,context:t.arcade.modules.arcadeUtils.createExecContext(null,{sr:t.arcade.context.spatialReference}),modules:t.arcade.modules}:null}}async function Pn(t,e,i,r){const n=t==null?void 0:t.expression;if(typeof n!="string")return null;const a=Zr(n);if(a!=null)return{cachedResult:a};const l=await ai();si(i);const o=l.arcadeUtils,s=o.createSyntaxTree(n);return o.dependsOnView(s)?(r!=null&&r.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:o.createFunction(s),context:o.createExecContext(null,{sr:e}),modules:l}}}function Gr(t,e,i){return t.arcadeUtils.createFeature(e.attributes,e.geometry,i)}function Yr(t,e){if(t!=null&&!zt(t)){if(!e||!t.arcade)return void Hr().errorOncePerTick("Arcade support required but not provided");const i=e;i._geometry&&(i._geometry=rr(i._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function qr(t){if(t!=null){if(zt(t))return t.cachedResult;const e=t.arcade;let i=e==null?void 0:e.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof i!="number"&&(t.cachedResult=0,i=0),i}return 0}function In(t,e=!1){let i=t==null?void 0:t.featureExpressionInfo;const r=i==null?void 0:i.expression;return e||r==="0"||(i=null),i??null}const $n={cachedResult:0};function zt(t){return t.cachedResult!=null}function Zr(t){return t==="0"?0:null}class jt{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=oi(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,i){const r=this.calculateOffsetRenderUnits(i);return this.featureExpressionInfoContext!=null?r:e+r}calculateOffsetRenderUnits(e){let i=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return r!=null&&(i+=qr(r)*this._metersPerElevationInfoUnit),i/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=li(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,i,r){if(e==null)return void(this._featureExpressionInfoContext=null);const n=e==null?void 0:e.arcade;n&&i!=null&&r!=null?(this._featureExpressionInfoContext=Jr(e),Yr(this._featureExpressionInfoContext,Gr(n.modules,i,r))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const i=new jt;return e!=null&&i.setFromElevationInfo(e),i}}const Xr=Object.freeze(Object.defineProperty({__proto__:null,build:$t,ribbonlineNumRoundJoinSubdivisions:me},Symbol.toStringTag,{value:"Module"}));export{nr as A,Tn as B,Ce as C,U as D,Ur as E,Rn as F,Oe as G,Vr as R,Rr as W,On as _,ht as a,ut as b,Pn as c,In as d,pt as e,Ut as f,$n as g,He as h,Cn as i,lr as j,Dn as k,Yr as l,xn as m,re as n,jt as o,Ln as p,ie as q,yn as r,Gr as s,vt as t,An as u,dr as v,Or as w,fe as x,It as y,Tr as z};
