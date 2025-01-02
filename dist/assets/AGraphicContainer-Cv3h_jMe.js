import{h3 as g,bz as I,bI as b,iI as O,bt as S,iJ as V,gZ as z,h1 as $,g_ as D,bV as E,iK as w,g$ as C,bq as v,cJ as L,iL as N}from"./index-BpNyIYYF.js";import{i as T,r as k,n as F}from"./TechniqueInstance-Dkb9kq8h.js";import{T as c}from"./FeatureCommandQueue-CeVdfQKK.js";import{r as P}from"./vec3f32-nZdmKIgz.js";import{e as U}from"./Container-BcB8UqrJ.js";import{b as q}from"./LabelMetric-w-QMeWw-.js";import{E as x}from"./BufferObject-CI2tBmfY.js";import{o as H}from"./VertexArrayObject-DDf17xp1.js";let W=0;function h(f,e){return new T(k(W++),f,e)}const d={visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null,visualVariableSizeOutlineScaleStops:null};class j{constructor(){this.instances={fill:h(c.fill,{uniforms:d,optionalAttributes:{zoomRange:!0}}),marker:h(c.marker,{uniforms:d,optionalAttributes:{zoomRange:!0}}),line:h(c.line,{uniforms:d,optionalAttributes:{zoomRange:!0}}),text:h(c.text,{uniforms:d,optionalAttributes:{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}}),complexFill:h(c.complexFill,{uniforms:d,optionalAttributes:{zoomRange:!0}}),texturedLine:h(c.texturedLine,{uniforms:d,optionalAttributes:{zoomRange:!0}}),animatedMarker:h(c.animatedMarker,{uniforms:d,optionalAttributes:{zoomRange:!0}})},this._instancesById=Object.values(this.instances).reduce((e,t)=>(e.set(t.instanceId,t),e),new Map)}getInstance(e){return this._instancesById.get(e)}}const G=Math.PI/180,J=4;class Y extends U{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=g(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=I(this._program)}doRender(e){const{context:t}=e,s=this._getBounds();if(s.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,s),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(b.ONE,b.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const n=this._program;t.bindVAO(this._vao),t.useProgram(n),n.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(O.LINES,8*s.length,S.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{displayViewScreenMat3:g()}}_createShaderProgram(e){if(this._program)return;const t=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,s=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=e.programCache.acquire(t,s,M().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:s,size:n,resolution:_,pixelRatio:a,rotation:o,viewpoint:i}=t,l=G*o,{x:r,y}=i.targetGeometry,R=V(r,t.spatialReference);this._localOrigin.x=R,this._localOrigin.y=y;const p=a*n[0],m=a*n[1],A=_*p,B=_*m,u=z(this._dvsMat3);$(u,u,s),D(u,u,E(p/2,m/2)),w(u,u,P(n[0]/A,-m/B,1)),C(u,u,-l)}_updateBufferData(e,t){const{x:s,y:n}=this._localOrigin,_=2*J*t.length,a=new Float32Array(_),o=new Uint32Array(8*t.length);let i=0,l=0;for(const r of t)r&&(a[2*i]=r[0]-s,a[2*i+1]=r[1]-n,a[2*i+2]=r[0]-s,a[2*i+3]=r[3]-n,a[2*i+4]=r[2]-s,a[2*i+5]=r[3]-n,a[2*i+6]=r[2]-s,a[2*i+7]=r[1]-n,o[l]=i+0,o[l+1]=i+3,o[l+2]=i+3,o[l+3]=i+2,o[l+4]=i+2,o[l+5]=i+1,o[l+6]=i+1,o[l+7]=i+0,i+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=x.createVertex(e,v.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=x.createIndex(e,v.DYNAMIC_DRAW,o),!this._vao){const r=M();this._vao=new H(e,r.attributes,r.bufferLayouts,new Map([["geometry",this._vertexBuffer]]),this._indexBuffer)}}}const M=()=>q("bounds",{geometry:[{location:0,name:"a_position",count:2,type:S.FLOAT}]});class ne extends F{constructor(e){super(e),this._instanceStore=new j,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=L(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new Y(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}_renderChildren(e,t){e.selection=t;for(const s of this.children){if(!s.visible)continue;const n=s.getDisplayList(this._instanceStore,N.STRICT_ORDER);n==null||n.render(e)}}}export{ne as i};