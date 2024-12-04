import{P as r,iu as j,iv as J,iw as A,cM as Q,br as G,i7 as V,gJ as X,bz as Y,i8 as Z,gC as tt,gH as et,gD as st,gE as it,i9 as ot,gF as rt,bS as nt,ix as at,iy as L}from"./index-i1xHX9d5.js";import{r as pt}from"./vec3f32-nZdmKIgz.js";import{n as dt}from"./WGLContainer-BOGow5OB.js";import{t as ht,a as q,i as lt}from"./FeatureCommandQueue-Du2O2zJ7.js";import{h as B,g as a,m as F,I as ct,C as y,P as H,a as ut,j as P,S as ft,b as vt,c as mt,G as xt,H as gt,l as yt,v as wt,w as _t,e as Mt}from"./UpdateTracking2D-B4C358IZ.js";class I extends ct{}r([B(0,y)],I.prototype,"pos",void 0),r([B(1,y)],I.prototype,"uv",void 0);class St extends wt{}class U extends H{}r([a(ut)],U.prototype,"dvs",void 0);class m extends H{}r([a(y)],m.prototype,"perspective",void 0),r([a(y)],m.prototype,"texSize",void 0),r([a(P)],m.prototype,"wrapAroundShift",void 0),r([a(P)],m.prototype,"opacity",void 0),r([a(ft)],m.prototype,"texture",void 0);class g extends vt{vertex(e){const t=e.uv.divide(this.config.texSize),s=new P(1).add(mt(t,this.config.perspective)),i=new xt(e.pos.add(new y(this.config.wrapAroundShift,0)),1),o=this.transform.dvs.multiply(i);return{uv:t,glPosition:new gt(o.xy.multiply(s),0,s)}}fragment(e){const t=yt(this.config.texture,e.uv).multiply(this.config.opacity),s=new _t;return s.glFragColor=t,s}}r([a(U)],g.prototype,"transform",void 0),r([a(m)],g.prototype,"config",void 0),r([j(0,F(I))],g.prototype,"vertex",null),r([j(0,F(St))],g.prototype,"fragment",null);let $t=class extends ht{constructor(){super(...arguments),this.type=Mt.Overlay,this._mesh=null,this.shaders={overlay:new g}}render(e,t){const{context:s,painter:i}=e,o=this._getMesh(e,t);i.setPipelineState(q);const{isWrapAround:p,wrapAroundShift:c}=t.config,u={...t.config,wrapAroundShift:0},f={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:u},defines:null,optionalAttributes:null,useComputeBuffer:!1};i.setPipelineState({...q,stencil:{write:!1,test:{compare:J.EQUAL,op:{fail:A.KEEP,zFail:A.KEEP,zPass:A.REPLACE},ref:0,mask:255}}}),i.submitDrawMeshUntyped(s,f,o),p&&(u.wrapAroundShift=c,i.submitDrawMeshUntyped(s,f,o))}shutdown(){Q(this._mesh)}_getMesh(e,t){const{context:s}=e;if(this._mesh){const i=this._mesh.vertexBuffers.get("positions");if(!i)throw new Error("Buffer not found");i.setData(t.position)}else{const i=t.index!=null?t.index.length:t.position.length/2;this._mesh=new lt(s,{vertex:{positions:t.position,uvs:t.tex},index:t.index!=null?{index:t.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:G.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:G.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:t.index!=null?"index":void 0,primitive:V.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:i}]})}return this._mesh}};class It extends dt{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=X(),this._overlayTechnique=new $t}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==Y.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const s of this.children)s.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:s,size:i,pixelRatio:o,resolution:p,rotation:c,viewpoint:u,displayMat3:f}=t;if(this._viewStateId===s)return;const w=L(c),d=o*i[0],v=o*i[1];this._localOrigin=u.targetGeometry.clone();const{x,y:S}=this._localOrigin,_=Z(x,t.spatialReference);this._localOrigin.x=_,this._localOrigin.y=S;const $=p*d,b=p*v,n=tt(this._dvsMat3);et(n,n,f),st(n,n,it(d/2,v/2)),ot(n,n,pt(d/$,-v/b,1)),rt(n,n,-w),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:i,spatialReference:o,worldScreenWidth:p,size:c,viewpoint:u}=s,f=this._localOrigin;let w,d=0;const v=nt(o);if(v&&o.isWrappable){const x=c[0],S=c[1],_=L(i),$=Math.abs(Math.cos(_)),b=Math.abs(Math.sin(_)),n=Math.round(x*$+S*b),[z,C]=v.valid,h=at(o),{x:D,y:W}=u.targetGeometry,N=[D,W],E=[0,0];s.toScreen(E,N);const M=[0,0];let O;O=n>p?.5*p:.5*n;const T=Math.floor((D+.5*h)/h),K=z+T*h,k=C+T*h,R=[E[0]+O,0];s.toMap(M,R),M[0]>k&&(d=h),R[0]=E[0]-O,s.toMap(M,R),M[0]<K&&(d=-h),w={worldWidth:h,xBounds:[z,C]}}for(const x of t)x.updateDrawCoords(f,d,o,w)}}export{It as u};