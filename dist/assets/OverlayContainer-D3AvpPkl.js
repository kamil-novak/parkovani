import{a7 as r,iT as D,iU as V,iV as E,cJ as k,bt as G,iI as Q,h3 as X,bB as Y,iJ as Z,gZ as tt,h1 as et,g_ as st,bV as it,iK as ot,g$ as rt,bY as nt,iW as at,iX as B}from"./index-CDF62Mj_.js";import{r as pt}from"./vec3f32-nZdmKIgz.js";import{n as dt}from"./WGLContainer-DNEEuSJw.js";import{t as ht,a as L,i as lt}from"./FeatureCommandQueue-DE0Uw-CO.js";import{h as U,g as a,m as W,I as ct,C as g,P as q,t as ut,j as P,S as ft,a as vt,b as mt,G as xt,H as yt,l as gt,v as wt,w as _t,e as Mt}from"./UpdateTracking2D-Bx0FXwKo.js";class I extends ct{}r([U(0,g)],I.prototype,"pos",void 0),r([U(1,g)],I.prototype,"uv",void 0);class $t extends wt{}class F extends q{}r([a(ut)],F.prototype,"dvs",void 0);class m extends q{}r([a(g)],m.prototype,"perspective",void 0),r([a(g)],m.prototype,"texSize",void 0),r([a(P)],m.prototype,"wrapAroundShift",void 0),r([a(P)],m.prototype,"opacity",void 0),r([a(ft)],m.prototype,"texture",void 0);class y extends vt{vertex(e){const t=e.uv.divide(this.config.texSize),s=new P(1).add(mt(t,this.config.perspective)),i=new xt(e.pos.add(new g(this.config.wrapAroundShift,0)),1),o=this.transform.dvs.multiply(i);return{uv:t,glPosition:new yt(o.xy.multiply(s),0,s)}}fragment(e){const t=gt(this.config.texture,e.uv).multiply(this.config.opacity),s=new _t;return s.glFragColor=t,s}}r([a(F)],y.prototype,"transform",void 0),r([a(m)],y.prototype,"config",void 0),r([D(0,W(I))],y.prototype,"vertex",null),r([D(0,W($t))],y.prototype,"fragment",null);let St=class extends ht{constructor(){super(...arguments),this.type=Mt.Overlay,this._mesh=null,this.shaders={overlay:new y}}render(e,t){const{context:s,painter:i}=e,o=this._getMesh(e,t);i.setPipelineState(L);const{isWrapAround:p,wrapAroundShift:c}=t.config,u={...t.config,wrapAroundShift:0},f={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:u},defines:null,optionalAttributes:null,useComputeBuffer:!1};i.setPipelineState({...L,stencil:{write:!1,test:{compare:V.EQUAL,op:{fail:E.KEEP,zFail:E.KEEP,zPass:E.REPLACE},ref:0,mask:255}}}),i.submitDrawMeshUntyped(s,f,o),p&&(u.wrapAroundShift=c,i.submitDrawMeshUntyped(s,f,o))}shutdown(){k(this._mesh)}_getMesh(e,t){const{context:s}=e;if(this._mesh){const i=this._mesh.vertexBuffers.get("positions");if(!i)throw new Error("Buffer not found");i.setData(t.position)}else{const i=t.index!=null?t.index.length:t.position.length/2;this._mesh=new lt(s,{vertex:{positions:t.position,uvs:t.tex},index:t.index!=null?{index:t.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:G.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:G.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:t.index!=null?"index":void 0,primitive:Q.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:i}]})}return this._mesh}};class It extends dt{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=X(),this._overlayTechnique=new St}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==Y.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const s of this.children)s.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:s,size:i,pixelRatio:o,resolution:p,rotation:c,viewpoint:u,displayMat3:f}=t;if(this._viewStateId===s)return;const w=B(c),d=o*i[0],v=o*i[1];this._localOrigin=u.targetGeometry.clone();const{x,y:$}=this._localOrigin,_=Z(x,t.spatialReference);this._localOrigin.x=_,this._localOrigin.y=$;const S=p*d,b=p*v,n=tt(this._dvsMat3);et(n,n,f),st(n,n,it(d/2,v/2)),ot(n,n,pt(d/S,-v/b,1)),rt(n,n,-w),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:i,spatialReference:o,worldScreenWidth:p,size:c,viewpoint:u}=s,f=this._localOrigin;let w,d=0;const v=nt(o);if(v&&o.isWrappable){const x=c[0],$=c[1],_=B(i),S=Math.abs(Math.cos(_)),b=Math.abs(Math.sin(_)),n=Math.round(x*S+$*b),[T,j]=v.valid,h=at(o),{x:z,y:H}=u.targetGeometry,K=[z,H],O=[0,0];s.toScreen(O,K);const M=[0,0];let R;R=n>p?.5*p:.5*n;const C=Math.floor((z+.5*h)/h),N=T+C*h,J=j+C*h,A=[O[0]+R,0];s.toMap(M,A),M[0]>J&&(d=h),A[0]=O[0]-R,s.toMap(M,A),M[0]<N&&(d=-h),w={worldWidth:h,xBounds:[T,j]}}for(const x of t)x.updateDrawCoords(f,d,o,w)}}export{It as u};
