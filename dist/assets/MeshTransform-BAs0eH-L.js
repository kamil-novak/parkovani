import{eh as j,g6 as q,g7 as B,g8 as I,g9 as P,ga as T,eU as d,P as s,Q as e,Y as U,aS as k,gb as z,aT as C,ec as l,gc as D,ew as F,gd as G,X as H}from"./index-Drt46XzA.js";import{e as f}from"./mat4f64-CSKppSlJ.js";import{v as M,b as p,x as Q}from"./quat-Ddv3js4t.js";import{e as m}from"./quatf64-aQ5IuZRd.js";function a(t=w){return[t[0],t[1],t[2],t[3]]}function c(t,o,n=a()){return j(n,t),n[3]=o,n}function K(t,o=a()){const n=T(i,t);return v(o,d(M(o,n))),o}function y(t,o,n=a()){return p(i,t,h(t)),p(A,o,h(o)),Q(i,A,i),v(n,d(M(n,i)))}function L(t,o,n,x=a()){return c(q,t,u),c(B,o,$),c(I,n,b),y(u,$,u),y(u,b,x),x}function O(t){return t}function S(t){return t[3]}function h(t){return P(t[3])}function v(t,o){return t[3]=o,t}const w=[0,0,1,0],i=m(),A=m();a();const u=a(),$=a(),b=a();var g;let r=g=class extends U{constructor(t){super(t),this.translation=k(),this.rotationAxis=z(w),this.rotationAngle=0,this.scale=C(1,1,1)}get rotation(){return c(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=l(t),this.rotationAngle=S(t)}get localMatrix(){const t=f();return p(N,this.rotation,h(this.rotation)),D(t,N,this.translation,this.scale),t}get localMatrixInverse(){return F(f(),this.localMatrix)}equals(t){return this===t||t!=null&&G(this.localMatrix,t.localMatrix)}clone(){const t={translation:l(this.translation),rotationAxis:l(this.rotationAxis),rotationAngle:this.rotationAngle,scale:l(this.scale)};return new g(t)}};s([e({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"translation",void 0),s([e({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"rotationAxis",void 0),s([e({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"rotationAngle",void 0),s([e({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"scale",void 0),s([e()],r.prototype,"rotation",null),s([e()],r.prototype,"localMatrix",null),s([e()],r.prototype,"localMatrixInverse",null),r=g=s([H("esri.geometry.support.MeshTransform")],r);const N=m(),R=r;export{R as N,L as d,a as j,K as k,O as w,h as z};