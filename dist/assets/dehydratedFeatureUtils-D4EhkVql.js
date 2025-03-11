import{o as E}from"./interfaces-DDtDqZYj.js";import{au as Pe,gu as Z,ar as I,l5 as Ne,qm as Qe,kI as Me,dY as C,ec as be,dW as V,e1 as Ke,b4 as G,kK as et,b1 as _,ax as je,b7 as tt,jm as _e,jl as He,l4 as nt,qn as st,qo as rt,ek as Ie,nL as ot,qp as at,cb as it,aQ as lt,qq as ct,qr as ut,as as ht,q1 as ft,qs as dt,qt as pt,qu as mt,d3 as gt,qv as Ot,qw as yt,qx as wt,e9 as F,a$ as q,iV as vt,dZ as pe,a_ as Be,dR as xt,qy as At,d$ as $t,kR as Pt,at as Mt}from"./index-DlYLAng9.js";import{s as bt,e as Ce,i as oe}from"./IntersectorInterfaces-BgX4KEwK.js";import"./boundedPlane-BTv8VpRF.js";import{b as Tt,d as Ee,s as St,a as It,f as Rt,e as qe,o as ce,c as Nt,g as _t,w as Ct,h as Et,i as Lt,j as Vt,t as D,p as U,k as ke,l as Le}from"./Geometry--XMmyy_V.js";import{t as zt}from"./doublePrecisionUtils-B0owpBza.js";import{e as A}from"./VertexAttribute-Cq4MnHjR.js";import{u as Dt}from"./meshVertexSpaceUtils-CIoe51m7.js";import{o as Ut,x as Ft}from"./hydratedFeatures-CSsaIKxp.js";import{r as R,n as z,t as Ve}from"./vec3f32-nZdmKIgz.js";import{A as Xe,l as Gt}from"./Indices-Dt1mee1f.js";import{t as b}from"./orientedBoundingBox-Dm6vNPPC.js";import{s as re}from"./Util-U83NQdF9.js";function bn(n){n.code.add(E`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),n.code.add(E`const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`),n.code.add(E`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}let jt=class{constructor(e,s,t){this.object=e,this.geometryId=s,this.triangleNr=t}},Ht=class extends jt{constructor(e,s,t,r){super(e,s,t),this.center=r!=null?Pe(r):null}};class Bt{constructor(e){this.layerUid=e}}let In=class extends Bt{constructor(e,s){super(e),this.graphicUid=s}};function qt(n){return(n==null?void 0:n.dist)!=null}const ze=1e-5;let kt=class{constructor(e){this.options=new bt,this._results=new Xt,this.transform=new Tt,this.tolerance=ze,this.verticalOffset=null,this._ray=Z(),this._rayEnd=I(),this._rayBeginTransformed=I(),this._rayEndTransformed=I(),this.viewingMode=e??Ne.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(e,s,t){this.resetWithRay(Qe(e,s,this._ray),t)}resetWithRay(e,s){this.camera=s,e!==this._ray&&Me(e,this._ray),this.options.verticalOffset!==0?this.viewingMode===Ne.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,C(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(e=null,s,t,r,u){var i;this.point=s,this.filterPredicate=r,this.tolerance=t??ze;const o=Ee(this.verticalOffset);if(e&&e.length>0){const c=u?a=>{u(a)&&this.intersectObject(a)}:a=>{this.intersectObject(a)};for(const a of e){const l=(i=a.getSpatialQueryAccelerator)==null?void 0:i.call(a);l!=null?(o!=null?l.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,c,o):l.forEachAlongRay(this._ray.origin,this._ray.direction,c),this.options.selectionMode&&this.options.hud&&l.forEachDegenerateObject(c)):a.objects.forAll(p=>c(p))}}this.sortResults()}intersectObject(e){const s=e.geometries;if(!s)return;const t=e.effectiveTransformation,r=Ee(this.verticalOffset);for(const u of s){if(!u.visible)continue;const{material:o,id:i}=u;if(!o.visible)continue;this.transform.setAndInvalidateLazyTransforms(t,u.transformation),be(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),be(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const c=this.transform.transform;r!=null&&(r.objectTransform=this.transform),o.intersect(u,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,(a,l,p,v,x,$)=>{if(a>=0){if(this.filterPredicate!=null&&!this.filterPredicate(this._ray.origin,this._rayEnd,a))return;const f=v?this._results.hud:this._results,d=v?m=>{const g=new Ht(e,i,p,$);m.set(oe.HUD,g,a,l,He,x)}:m=>m.set(oe.OBJECT,{object:e,geometryId:i,triangleNr:p},a,l,c,x);if((f.min.drapedLayerOrder==null||x>=f.min.drapedLayerOrder)&&(f.min.dist==null||a<f.min.dist)&&d(f.min),this.options.store!==Ce.MIN&&(f.max.drapedLayerOrder==null||x<f.max.drapedLayerOrder)&&(f.max.dist==null||a>f.max.dist)&&d(f.max),this.options.store===Ce.ALL)if(v){const m=new Te(this._ray);d(m),this._results.hud.all.push(m)}else{const m=new K(this._ray);d(m),this._results.all.push(m)}}})}}sortResults(e=this._results.all){e.sort((s,t)=>s.dist!==t.dist?(s.dist??0)-(t.dist??0):s.drapedLayerOrder!==t.drapedLayerOrder?De(s.drapedLayerOrder,t.drapedLayerOrder):De(s.drapedLayerGraphicOrder,t.drapedLayerGraphicOrder))}};function De(n,e){return(e??-Number.MAX_VALUE)-(n??-Number.MAX_VALUE)}function _n(n){return new kt(n)}let Xt=class{constructor(){this.min=new K(Z()),this.max=new K(Z()),this.hud={min:new Te(Z()),max:new Te(Z()),all:new Array},this.ground=new K(Z()),this.all=[]}init(e){this.min.init(e),this.max.init(e),this.ground.init(e),this.all.length=0,this.hud.min.init(e),this.hud.max.init(e),this.hud.all.length=0}},K=class{get ray(){return this._ray}get distanceInRenderSpace(){return this.dist!=null?(V(ie,this.ray.direction,this.dist),Ke(ie)):null}getIntersectionPoint(e){return!!qt(this)&&(V(ie,this.ray.direction,this.dist),C(e,this.ray.origin,ie),!0)}getTransformedNormal(e){return G(se,this.normal),se[3]=0,et(se,se,this.transformation),G(e,se),_(e,e)}constructor(e){this.intersector=oe.OBJECT,this.normal=I(),this.transformation=je(),this._ray=Z(),this.init(e)}init(e){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=oe.OBJECT,Me(e,this._ray)}set(e,s,t,r,u,o,i){this.intersector=e,this.dist=t,G(this.normal,r??tt),_e(this.transformation,u??He),this.target=s,this.drapedLayerOrder=o,this.drapedLayerGraphicOrder=i}copy(e){Me(e.ray,this._ray),this.intersector=e.intersector,this.dist=e.dist,this.target=e.target,this.drapedLayerOrder=e.drapedLayerOrder,this.drapedLayerGraphicOrder=e.drapedLayerGraphicOrder,G(this.normal,e.normal),_e(this.transformation,e.transformation)}},Te=class extends K{constructor(){super(...arguments),this.intersector=oe.HUD}};function Vn(n){return new K(n)}const ie=I(),se=nt();function zn(n,e){return n==null&&(n=[]),n.push(e),n}function Dn(n,e){if(n==null)return null;const s=n.filter(t=>t!==e);return s.length===0?null:s}function Un(n,e,s,t,r){le[0]=n.get(e,0),le[1]=n.get(e,1),le[2]=n.get(e,2),zt(le,k,3),s.set(r,0,k[0]),t.set(r,0,k[1]),s.set(r,1,k[2]),t.set(r,1,k[3]),s.set(r,2,k[4]),t.set(r,2,k[5])}const le=I(),k=new Float32Array(6),Zt=.5;function Fn(n,e){n.include(St),n.attributes.add(A.POSITION,"vec3"),n.attributes.add(A.NORMAL,"vec3"),n.attributes.add(A.CENTEROFFSETANDDISTANCE,"vec4");const s=n.vertex;It(s,e),Rt(s,e),s.uniforms.add(new qe("viewport",(t,r)=>r.camera.fullViewport),new ce("polygonOffset",t=>t.shaderPolygonOffset),new ce("cameraGroundRelative",(t,r)=>r.camera.aboveGround?1:-1)),e.hasVerticalOffset&&Nt(s),s.constants.add("smallOffsetAngle","float",.984807753012208),s.code.add(E`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),s.code.add(E`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?E.float(0):E`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||_t(s),e.draped||(s.uniforms.add(new ce("perDistancePixelRatio",(t,r)=>Math.tan(r.camera.fovY/2)/(r.camera.fullViewport[2]/2))),s.code.add(E`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${E.float(Zt)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&Ct(s),e.hasScreenSizePerspective&&Et(s),s.code.add(E`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?E`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":E`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function Wt(n){n.uniforms.add(new Lt("alignPixelEnabled",(e,s)=>s.alignPixelEnabled)),n.code.add(E`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),n.code.add(E`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var me;(function(n){n[n.Occluded=0]="Occluded",n[n.NotOccluded=1]="NotOccluded",n[n.Both=2]="Both",n[n.COUNT=3]="COUNT"})(me||(me={}));function Gn(n){n.vertex.uniforms.add(new ce("renderTransparentlyOccludedHUD",(e,s)=>s.hudRenderStyle===me.Occluded?1:s.hudRenderStyle===me.NotOccluded?0:.75),new qe("viewport",(e,s)=>s.camera.fullViewport),new Vt("hudVisibilityTexture",(e,s)=>{var t;return(t=s.hudVisibility)==null?void 0:t.getTexture()})),n.vertex.include(Wt),n.vertex.code.add(E`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function jn(n,e){if(n.type==="point")return B(n,e,!1);if(Ut(n))switch(n.type){case"extent":return B(n.center,e,!1);case"polygon":return B(n.centroid,e,!1);case"polyline":return B(Ue(n),e,!0);case"mesh":return B(Dt(n.vertexSpace,n.spatialReference)??n.extent.center,e,!1);case"multipoint":return}else switch(n.type){case"extent":return B(Yt(n),e,!0);case"polygon":return B(Jt(n),e,!0);case"polyline":return B(Ue(n),e,!0);case"multipoint":return}}function Ue(n){const e=n.paths[0];if(!e||e.length===0)return null;const s=st(e,rt(e)/2);return Ie(s[0],s[1],s[2],n.spatialReference)}function Yt(n){return Ie(.5*(n.xmax+n.xmin),.5*(n.ymax+n.ymin),n.zmin!=null&&n.zmax!=null&&isFinite(n.zmin)&&isFinite(n.zmax)?.5*(n.zmax+n.zmin):void 0,n.spatialReference)}function Jt(n){const e=n.rings[0];if(!e||e.length===0)return null;const s=ot(n.rings,!!n.hasZ);return Ie(s[0],s[1],s[2],n.spatialReference)}function B(n,e,s){const t=s?n:Ft(n);return e&&n?at(n,t,e)?t:null:t}function Hn(n,e,s,t=0){if(n){e||(e=it());const r=n;let u=.5*r.width*(s-1),o=.5*r.height*(s-1);return r.width<1e-7*r.height?u+=o/20:r.height<1e-7*r.width&&(o+=u/20),lt(e,r.xmin-u-t,r.ymin-o-t,r.xmax+u+t,r.ymax+o+t),e}return null}function Bn(n,e,s=null){const t=ct(ut);return n!=null&&(t[0]=n[0],t[1]=n[1],t[2]=n[2]),e!=null?t[3]=e:n!=null&&n.length>3&&(t[3]=n[3]),s&&(t[0]*=s,t[1]*=s,t[2]*=s,t[3]*=s),t}function qn(n=ft,e,s,t=1){const r=new Array(3);if(e==null||s==null)r[0]=1,r[1]=1,r[2]=1;else{let u,o=0;for(let i=2;i>=0;i--){const c=n[i];let a;const l=c!=null,p=i===0&&!u&&!l,v=s[i];c==="symbol-value"||p?a=v!==0?e[i]/v:1:l&&c!=="proportional"&&isFinite(c)&&(a=v!==0?c/v:1),a!=null&&(r[i]=a,u=a,o=Math.max(o,Math.abs(a)))}for(let i=2;i>=0;i--)r[i]==null?r[i]=u:r[i]===0&&(r[i]=.001*o)}for(let u=2;u>=0;u--)r[u]/=t;return ht(r)}function Qt(n){return n.isPrimitive!=null}function kn(n){return Kt(Qt(n)?[n.width,n.depth,n.height]:n)?null:"Symbol sizes may not be negative values"}function Kt(n){const e=s=>s==null||s>=0;return Array.isArray(n)?n.every(e):e(n)}function Xn(n,e,s,t=je()){return n&&dt(t,t,-n/180*Math.PI),e&&pt(t,t,e/180*Math.PI),s&&mt(t,t,s/180*Math.PI),t}function Zn(n,e,s){if(s.minDemResolution!=null)return s.minDemResolution;const t=gt(e),r=Ot(n)*t,u=yt(n)*t,o=wt(n)*(e.isGeographic?1:t);return r===0&&u===0&&o===0?s.minDemResolutionForPoints:.01*Math.max(r,u,o)}var Se;(function(n){function e(o,i){const c=o[i],a=o[i+1],l=o[i+2];return Math.sqrt(c*c+a*a+l*l)}function s(o,i){const c=o[i],a=o[i+1],l=o[i+2],p=1/Math.sqrt(c*c+a*a+l*l);o[i]*=p,o[i+1]*=p,o[i+2]*=p}function t(o,i,c){o[i]*=c,o[i+1]*=c,o[i+2]*=c}function r(o,i,c,a,l,p=i){(l=l||o)[p]=o[i]+c[a],l[p+1]=o[i+1]+c[a+1],l[p+2]=o[i+2]+c[a+2]}function u(o,i,c,a,l,p=i){(l=l||o)[p]=o[i]-c[a],l[p+1]=o[i+1]-c[a+1],l[p+2]=o[i+2]-c[a+2]}n.length=e,n.normalize=s,n.scale=t,n.add=r,n.subtract=u})(Se||(Se={}));const W=Se,ve=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],en=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],tn=[0,0,1,0,1,1,0,1],nn=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ze=new Array(36);for(let n=0;n<6;n++)for(let e=0;e<6;e++)Ze[6*n+e]=n;const X=new Array(36);for(let n=0;n<6;n++)X[6*n]=0,X[6*n+1]=1,X[6*n+2]=2,X[6*n+3]=2,X[6*n+4]=3,X[6*n+5]=0;function Wn(n,e){Array.isArray(e)||(e=[e,e,e]);const s=new Array(24);for(let t=0;t<8;t++)s[3*t]=ve[t][0]*e[0],s[3*t+1]=ve[t][1]*e[1],s[3*t+2]=ve[t][2]*e[2];return new U(n,[[A.POSITION,new b(s,nn,3,!0)],[A.NORMAL,new b(en,Ze,3)],[A.UV0,new b(tn,X,2)]])}const xe=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],sn=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],rn=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],on=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function Yn(n,e){Array.isArray(e)||(e=[e,e,e]);const s=new Array(18);for(let t=0;t<6;t++)s[3*t]=xe[t][0]*e[0],s[3*t+1]=xe[t][1]*e[1],s[3*t+2]=xe[t][2]*e[2];return new U(n,[[A.POSITION,new b(s,rn,3,!0)],[A.NORMAL,new b(sn,on,3)]])}const ue=R(-.5,0,-.5),he=R(.5,0,-.5),fe=R(0,0,.5),de=R(0,.5,0),Y=z(),J=z(),ee=z(),te=z(),ne=z();F(Y,ue,de),F(J,ue,he),q(ee,Y,J),_(ee,ee),F(Y,he,de),F(J,he,fe),q(te,Y,J),_(te,te),F(Y,fe,de),F(J,fe,ue),q(ne,Y,J),_(ne,ne);const Ae=[ue,he,fe,de],an=[0,-1,0,ee[0],ee[1],ee[2],te[0],te[1],te[2],ne[0],ne[1],ne[2]],ln=[0,1,2,3,1,0,3,2,1,3,0,2],cn=[0,0,0,1,1,1,2,2,2,3,3,3];function Jn(n,e){Array.isArray(e)||(e=[e,e,e]);const s=new Array(12);for(let t=0;t<4;t++)s[3*t]=Ae[t][0]*e[0],s[3*t+1]=Ae[t][1]*e[1],s[3*t+2]=Ae[t][2]*e[2];return new U(n,[[A.POSITION,new b(s,ln,3,!0)],[A.NORMAL,new b(an,cn,3)]])}function Qn(n,e,s,t,r={uv:!0}){const u=-Math.PI,o=2*Math.PI,i=-Math.PI/2,c=Math.PI,a=Math.max(3,Math.floor(s)),l=Math.max(2,Math.floor(t)),p=(a+1)*(l+1),v=D(3*p),x=D(3*p),$=D(2*p),f=[];let d=0;for(let O=0;O<=l;O++){const S=[],h=O/l,P=i+h*c,M=Math.cos(P);for(let N=0;N<=a;N++){const j=N/a,y=u+j*o,L=Math.cos(y)*M,T=Math.sin(P),ae=-Math.sin(y)*M;v[3*d]=L*e,v[3*d+1]=T*e,v[3*d+2]=ae*e,x[3*d]=L,x[3*d+1]=T,x[3*d+2]=ae,$[2*d]=j,$[2*d+1]=h,S.push(d),++d}f.push(S)}const m=new Array;for(let O=0;O<l;O++)for(let S=0;S<a;S++){const h=f[O][S],P=f[O][S+1],M=f[O+1][S+1],N=f[O+1][S];O===0?(m.push(h),m.push(M),m.push(N)):O===l-1?(m.push(h),m.push(P),m.push(M)):(m.push(h),m.push(P),m.push(M),m.push(M),m.push(N),m.push(h))}const g=[[A.POSITION,new b(v,m,3,!0)],[A.NORMAL,new b(x,m,3,!0)]];return r.uv&&g.push([A.UV0,new b($,m,2,!0)]),r.offset&&(g[0][0]=A.OFFSET,g.push([A.POSITION,new b(Float64Array.from(r.offset),Xe(m.length),3,!0)])),new U(n,g)}function Kn(n,e,s,t){const r=un(e,s);return new U(n,r)}function un(n,e,s){let t,r;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let c=0;c<t.length;c+=3)W.scale(t,c,n/W.length(t,c));let u={};function o(c,a){c>a&&([c,a]=[a,c]);const l=c.toString()+"."+a.toString();if(u[l])return u[l];let p=t.length;return t.length+=3,W.add(t,3*c,t,3*a,t,p),W.scale(t,p,n/W.length(t,p)),p/=3,u[l]=p,p}for(let c=0;c<e;c++){const a=r.length,l=new Array(4*a);for(let p=0;p<a;p+=3){const v=r[p],x=r[p+1],$=r[p+2],f=o(v,x),d=o(x,$),m=o($,v),g=4*p;l[g]=v,l[g+1]=f,l[g+2]=m,l[g+3]=x,l[g+4]=d,l[g+5]=f,l[g+6]=$,l[g+7]=m,l[g+8]=d,l[g+9]=f,l[g+10]=d,l[g+11]=m}r=l,u={}}const i=Le(t);for(let c=0;c<i.length;c+=3)W.normalize(i,c);return[[A.POSITION,new b(Le(t),r,3,!0)],[A.NORMAL,new b(i,r,3,!0)]]}function es(n,e,s,t,r,u,o,i,c,a=null){const l=s?Pe(s):I(),p=e?Pe(e):Mt(0,0,1),v=t?[255*t[0],255*t[1],255*t[2],t.length>3?255*t[3]:255]:[255,255,255,255],x=u!=null&&u.length===2?u:[1,1],$=r!=null?[r]:[0],f=Xe(1),d=[[A.POSITION,new b(l,f,3,!0)],[A.NORMAL,new b(p,f,3,!0)],[A.COLOR,new b(v,f,4,!0)],[A.SIZE,new b(x,f,2)],[A.ROTATION,new b($,f,1,!0)]];if(i&&d.push([A.UV0,new b(i,f,i.length)]),o!=null&&(o=[o[0],o[1],o[2],o[3]],d.push([A.CENTEROFFSETANDDISTANCE,new b(o,f,4)])),c){const m=[c[0],c[1],c[2],c[3]];d.push([A.FEATUREATTRIBUTE,new b(m,f,4)])}return new U(n,d,null,ke.Point,a)}function hn(n,e,s,t,r=!0,u=!0){let o=0;const i=e,c=n;let a=R(0,o,0),l=R(0,o+c,0),p=R(0,-1,0),v=R(0,1,0);t&&(o=c,l=R(0,0,0),a=R(0,o,0),p=R(0,1,0),v=R(0,-1,0));const x=[l,a],$=[p,v],f=s+2,d=Math.sqrt(c*c+i*i);if(t)for(let h=s-1;h>=0;h--){const P=h*(2*Math.PI/s),M=R(Math.cos(P)*i,o,Math.sin(P)*i);x.push(M);const N=R(c*Math.cos(P)/d,-i/d,c*Math.sin(P)/d);$.push(N)}else for(let h=0;h<s;h++){const P=h*(2*Math.PI/s),M=R(Math.cos(P)*i,o,Math.sin(P)*i);x.push(M);const N=R(c*Math.cos(P)/d,i/d,c*Math.sin(P)/d);$.push(N)}const m=new Array,g=new Array;if(r){for(let h=3;h<x.length;h++)m.push(1),m.push(h-1),m.push(h),g.push(0),g.push(0),g.push(0);m.push(x.length-1),m.push(2),m.push(1),g.push(0),g.push(0),g.push(0)}if(u){for(let h=3;h<x.length;h++)m.push(h),m.push(h-1),m.push(0),g.push(h),g.push(h-1),g.push(1);m.push(0),m.push(2),m.push(x.length-1),g.push(1),g.push(2),g.push($.length-1)}const O=D(3*f);for(let h=0;h<f;h++)O[3*h]=x[h][0],O[3*h+1]=x[h][1],O[3*h+2]=x[h][2];const S=D(3*f);for(let h=0;h<f;h++)S[3*h]=$[h][0],S[3*h+1]=$[h][1],S[3*h+2]=$[h][2];return[[A.POSITION,new b(O,m,3,!0)],[A.NORMAL,new b(S,g,3,!0)]]}function ts(n,e,s,t,r,u=!0,o=!0){return new U(n,hn(e,s,t,r,u,o))}function ns(n,e,s,t,r,u,o){const i=r?Ve(r):R(1,0,0),c=u?Ve(u):R(0,0,0);o??(o=!0);const a=z();_(a,i);const l=z();V(l,a,Math.abs(e));const p=z();V(p,l,-.5),C(p,p,c);const v=R(0,1,0);Math.abs(1-Be(a,v))<.2&&pe(v,0,0,1);const x=z();q(x,a,v),_(x,x),q(v,x,a);const $=2*t+(o?2:0),f=t+(o?2:0),d=D(3*$),m=D(3*f),g=D(2*$),O=new Array(3*t*(o?4:2)),S=new Array(3*t*(o?4:2));o&&(d[3*($-2)]=p[0],d[3*($-2)+1]=p[1],d[3*($-2)+2]=p[2],g[2*($-2)]=0,g[2*($-2)+1]=0,d[3*($-1)]=d[3*($-2)]+l[0],d[3*($-1)+1]=d[3*($-2)+1]+l[1],d[3*($-1)+2]=d[3*($-2)+2]+l[2],g[2*($-1)]=1,g[2*($-1)+1]=1,m[3*(f-2)]=-a[0],m[3*(f-2)+1]=-a[1],m[3*(f-2)+2]=-a[2],m[3*(f-1)]=a[0],m[3*(f-1)+1]=a[1],m[3*(f-1)+2]=a[2]);const h=(y,L,T)=>{O[y]=L,S[y]=T};let P=0;const M=z(),N=z();for(let y=0;y<t;y++){const L=y*(2*Math.PI/t);V(M,v,Math.sin(L)),V(N,x,Math.cos(L)),C(M,M,N),m[3*y]=M[0],m[3*y+1]=M[1],m[3*y+2]=M[2],V(M,M,s),C(M,M,p),d[3*y]=M[0],d[3*y+1]=M[1],d[3*y+2]=M[2],g[2*y]=y/t,g[2*y+1]=0,d[3*(y+t)]=d[3*y]+l[0],d[3*(y+t)+1]=d[3*y+1]+l[1],d[3*(y+t)+2]=d[3*y+2]+l[2],g[2*(y+t)]=y/t,g[2*y+1]=1;const T=(y+1)%t;h(P++,y,y),h(P++,y+t,y),h(P++,T,T),h(P++,T,T),h(P++,y+t,y),h(P++,T+t,T)}if(o){for(let y=0;y<t;y++){const L=(y+1)%t;h(P++,$-2,f-2),h(P++,y,f-2),h(P++,L,f-2)}for(let y=0;y<t;y++){const L=(y+1)%t;h(P++,y+t,f-1),h(P++,$-1,f-1),h(P++,L+t,f-1)}}const j=[[A.POSITION,new b(d,O,3,!0)],[A.NORMAL,new b(m,S,3,!0)],[A.UV0,new b(g,O,2,!0)]];return new U(n,j)}function ss(n,e,s,t,r,u){t=t||10,r=r==null||r,re(e.length>1);const o=[[0,0,0]],i=[],c=[];for(let a=0;a<t;a++){i.push([0,-a-1,-(a+1)%t-1]);const l=a/t*2*Math.PI;c.push([Math.cos(l)*s,Math.sin(l)*s])}return fn(n,c,e,o,i,r,u)}function fn(n,e,s,t,r,u,o=R(0,0,0)){const i=e.length,c=D(s.length*i*3+(6*t.length||0)),a=D(s.length*i*3+(t?6:0)),l=new Array,p=new Array;let v=0,x=0;const $=I(),f=I(),d=I(),m=I(),g=I(),O=I(),S=I(),h=I(),P=I(),M=I(),N=I(),j=I(),y=I(),L=xt();pe(P,0,1,0),F(f,s[1],s[0]),_(f,f),u?(C(h,s[0],o),_(d,h)):pe(d,0,0,1),Fe(f,d,P,P,g,d,Ge),G(m,d),G(j,g);for(let w=0;w<t.length;w++)V(O,g,t[w][0]),V(h,d,t[w][2]),C(O,O,h),C(O,O,s[0]),c[v++]=O[0],c[v++]=O[1],c[v++]=O[2];a[x++]=-f[0],a[x++]=-f[1],a[x++]=-f[2];for(let w=0;w<r.length;w++)l.push(r[w][0]>0?r[w][0]:-r[w][0]-1+t.length),l.push(r[w][1]>0?r[w][1]:-r[w][1]-1+t.length),l.push(r[w][2]>0?r[w][2]:-r[w][2]-1+t.length),p.push(0),p.push(0),p.push(0);let T=t.length;const ae=t.length-1;for(let w=0;w<s.length;w++){let Re=!1;w>0&&(G($,f),w<s.length-1?(F(f,s[w+1],s[w]),_(f,f)):Re=!0,C(M,$,f),_(M,M),C(N,s[w-1],m),At(s[w],M,L),$t(L,Pt(N,$),h)?(F(h,h,s[w]),_(d,h),q(g,M,d),_(g,g)):Fe(M,m,j,P,g,d,Ge),G(m,d),G(j,g)),u&&(C(h,s[w],o),_(y,h));for(let H=0;H<i;H++)if(V(O,g,e[H][0]),V(h,d,e[H][1]),C(O,O,h),_(S,O),a[x++]=S[0],a[x++]=S[1],a[x++]=S[2],C(O,O,s[w]),c[v++]=O[0],c[v++]=O[1],c[v++]=O[2],!Re){const ye=(H+1)%i;l.push(T+H),l.push(T+i+H),l.push(T+ye),l.push(T+ye),l.push(T+i+H),l.push(T+i+ye);for(let we=0;we<6;we++){const Je=l.length-6;p.push(l[Je+we]-ae)}}T+=i}const We=s[s.length-1];for(let w=0;w<t.length;w++)V(O,g,t[w][0]),V(h,d,t[w][1]),C(O,O,h),C(O,O,We),c[v++]=O[0],c[v++]=O[1],c[v++]=O[2];const ge=x/3;a[x++]=f[0],a[x++]=f[1],a[x++]=f[2];const Oe=T-i;for(let w=0;w<r.length;w++)l.push(r[w][0]>=0?T+r[w][0]:-r[w][0]-1+Oe),l.push(r[w][2]>=0?T+r[w][2]:-r[w][2]-1+Oe),l.push(r[w][1]>=0?T+r[w][1]:-r[w][1]-1+Oe),p.push(ge),p.push(ge),p.push(ge);const Ye=[[A.POSITION,new b(c,l,3,!0)],[A.NORMAL,new b(a,p,3,!0)]];return new U(n,Ye)}function rs(n,e,s,t){re(e.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),re(e[0].length===3,"createPolylineGeometry(): malformed vertex"),re(s==null||s.length===e.length,"createPolylineGeometry: need same number of points and normals"),re(s==null||s[0].length===3,"createPolylineGeometry(): malformed normal");const r=vt(3*e.length),u=new Array(2*(e.length-1));let o=0,i=0;for(let a=0;a<e.length;a++){for(let l=0;l<3;l++)r[o++]=e[a][l];a>0&&(u[i++]=a-1,u[i++]=a)}const c=[[A.POSITION,new b(r,u,3,!0)]];if(s){const a=D(3*s.length);let l=0;for(let p=0;p<e.length;p++)for(let v=0;v<3;v++)a[l++]=s[p][v];c.push([A.NORMAL,new b(a,u,3,!0)])}return t&&c.push([A.COLOR,new b(t,Gt(t.length/4),4)]),new U(n,c,null,ke.Line)}function os(n,e,s,t,r,u=0){const o=new Array(18),i=[[-s,u,r/2],[t,u,r/2],[0,e+u,r/2],[-s,u,-r/2],[t,u,-r/2],[0,e+u,-r/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let a=0;a<6;a++)o[3*a]=i[a][0],o[3*a+1]=i[a][1],o[3*a+2]=i[a][2];return new U(n,[[A.POSITION,new b(o,c,3,!0)]])}function as(n,e){const s=n.getMutableAttribute(A.POSITION).data;for(let t=0;t<s.length;t+=3){const r=s[t],u=s[t+1],o=s[t+2];pe(Q,r,u,o),be(Q,Q,e),s[t]=Q[0],s[t+1]=Q[1],s[t+2]=Q[2]}}function is(n,e=n){const s=n.attributes,t=s.get(A.POSITION).data,r=s.get(A.NORMAL).data;if(r){const u=e.getMutableAttribute(A.NORMAL).data;for(let o=0;o<r.length;o+=3){const i=r[o+1];u[o+1]=-r[o+2],u[o+2]=i}}if(t){const u=e.getMutableAttribute(A.POSITION).data;for(let o=0;o<t.length;o+=3){const i=t[o+1];u[o+1]=-t[o+2],u[o+2]=i}}}function $e(n,e,s,t,r){return!(Math.abs(Be(e,n))>r)&&(q(s,n,e),_(s,s),q(t,s,n),_(t,t),!0)}function Fe(n,e,s,t,r,u,o){return $e(n,e,r,u,o)||$e(n,s,r,u,o)||$e(n,t,r,u,o)}const Ge=.99619469809,Q=I();function ls(n){return n.type==="point"}export{Bn as A,fn as B,Wn as C,qn as D,Zn as E,Vn as G,as as O,Hn as S,_n as T,kn as U,Kt as Z,me as a,bn as b,hn as c,Wt as d,Fn as e,Gn as f,Jn as g,ns as h,ts as i,jn as j,Yn as k,Un as l,is as m,zn as n,In as o,Zt as p,es as q,Dn as r,Kn as s,ls as t,Xn as u,Fe as v,rs as w,Qn as x,os as y,ss as z};
