import{P as r,il as D,im as Q,io as E,cB as J,bm as G,i1 as V,gz as X,bu as Y,i2 as Z,gt as tt,gx as et,gu as st,bO as ot,i3 as it,gv as rt,bR as nt,ip as at,iq as q}from"./index-DObp-awF.js";import{r as pt}from"./vec3f32-nZdmKIgz.js";import{n as dt}from"./WGLContainer-DDZvYwOU.js";import{t as ht,a as B,i as lt}from"./FeatureCommandQueue-BRiVxN7P.js";import{h as L,g as a,m as U,I as ut,C as y,P as W,t as ct,j as P,S as ft,a as vt,b as mt,G as xt,H as gt,l as yt,v as wt,w as _t,e as Mt}from"./UpdateTracking2D-BmJN_wHm.js";class I extends ut{}r([L(0,y)],I.prototype,"pos",void 0),r([L(1,y)],I.prototype,"uv",void 0);class $t extends wt{}class F extends W{}r([a(ct)],F.prototype,"dvs",void 0);class m extends W{}r([a(y)],m.prototype,"perspective",void 0),r([a(y)],m.prototype,"texSize",void 0),r([a(P)],m.prototype,"wrapAroundShift",void 0),r([a(P)],m.prototype,"opacity",void 0),r([a(ft)],m.prototype,"texture",void 0);class g extends vt{vertex(e){const t=e.uv.divide(this.config.texSize),s=new P(1).add(mt(t,this.config.perspective)),o=new xt(e.pos.add(new y(this.config.wrapAroundShift,0)),1),i=this.transform.dvs.multiply(o);return{uv:t,glPosition:new gt(i.xy.multiply(s),0,s)}}fragment(e){const t=yt(this.config.texture,e.uv).multiply(this.config.opacity),s=new _t;return s.glFragColor=t,s}}r([a(F)],g.prototype,"transform",void 0),r([a(m)],g.prototype,"config",void 0),r([D(0,U(I))],g.prototype,"vertex",null),r([D(0,U($t))],g.prototype,"fragment",null);let St=class extends ht{constructor(){super(...arguments),this.type=Mt.Overlay,this._mesh=null,this.shaders={overlay:new g}}render(e,t){const{context:s,painter:o}=e,i=this._getMesh(e,t);o.setPipelineState(B);const{isWrapAround:p,wrapAroundShift:u}=t.config,c={...t.config,wrapAroundShift:0},f={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:c},defines:null,optionalAttributes:null,useComputeBuffer:!1};o.setPipelineState({...B,stencil:{write:!1,test:{compare:Q.EQUAL,op:{fail:E.KEEP,zFail:E.KEEP,zPass:E.REPLACE},ref:0,mask:255}}}),o.submitDrawMeshUntyped(s,f,i),p&&(c.wrapAroundShift=u,o.submitDrawMeshUntyped(s,f,i))}shutdown(){J(this._mesh)}_getMesh(e,t){const{context:s}=e;if(this._mesh){const o=this._mesh.vertexBuffers.get("positions");if(!o)throw new Error("Buffer not found");o.setData(t.position)}else{const o=t.index!=null?t.index.length:t.position.length/2;this._mesh=new lt(s,{vertex:{positions:t.position,uvs:t.tex},index:t.index!=null?{index:t.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:G.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:G.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:t.index!=null?"index":void 0,primitive:V.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:o}]})}return this._mesh}};class It extends dt{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=X(),this._overlayTechnique=new St}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==Y.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const s of this.children)s.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:s,size:o,pixelRatio:i,resolution:p,rotation:u,viewpoint:c,displayMat3:f}=t;if(this._viewStateId===s)return;const w=q(u),d=i*o[0],v=i*o[1];this._localOrigin=c.targetGeometry.clone();const{x,y:$}=this._localOrigin,_=Z(x,t.spatialReference);this._localOrigin.x=_,this._localOrigin.y=$;const S=p*d,b=p*v,n=tt(this._dvsMat3);et(n,n,f),st(n,n,ot(d/2,v/2)),it(n,n,pt(d/S,-v/b,1)),rt(n,n,-w),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:o,spatialReference:i,worldScreenWidth:p,size:u,viewpoint:c}=s,f=this._localOrigin;let w,d=0;const v=nt(i);if(v&&i.isWrappable){const x=u[0],$=u[1],_=q(o),S=Math.abs(Math.cos(_)),b=Math.abs(Math.sin(_)),n=Math.round(x*S+$*b),[z,T]=v.valid,h=at(i),{x:j,y:H}=c.targetGeometry,N=[j,H],O=[0,0];s.toScreen(O,N);const M=[0,0];let R;R=n>p?.5*p:.5*n;const C=Math.floor((j+.5*h)/h),K=z+C*h,k=T+C*h,A=[O[0]+R,0];s.toMap(M,A),M[0]>k&&(d=h),A[0]=O[0]-R,s.toMap(M,A),M[0]<K&&(d=-h),w={worldWidth:h,xBounds:[z,T]}}for(const x of t)x.updateDrawCoords(f,d,i,w)}}export{It as u};
