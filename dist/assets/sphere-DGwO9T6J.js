import{kR as Q,aV as g,es as q,eo as f,aS as w,aU as O,aR as F,er as p,ep as M,en as E,eF as l,kS as U,eD as j,j8 as L,aQ as T,aG as R,jf as I,aF as X,eE as V,eL as Y,eK as B,eq as J,eH as W,eM as d,ji as tt,jh as nt,hP as et}from"./index-CDF62Mj_.js";import"./mat3f64-q3fE-ZOt.js";import{c as u,a as it,b as rt}from"./plane-DHKeJrPR.js";class st{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&Q(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*k);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,k));e++)this._items.push(this._allocator())}}const k=1024;function P(t){return t?v(E(t.origin),E(t.direction)):v(g(),g())}function v(t,e){return{origin:t,direction:e}}function Lt(t,e){const n=ut.get();return n.origin=t,n.direction=e,n}function Tt(t,e=P()){return ct(t.origin,t.direction,e)}function ot(t,e,n=P()){return q(n.origin,t),f(n.direction,e,t),n}function ct(t,e,n=P()){return q(n.origin,t),q(n.direction,e),n}function It(t,e){const n=w(u.get(),O(u.get(),t.direction),f(u.get(),e,t.origin));return F(n,n)}function at(t,e,n){const i=F(t.direction,f(n,e,t.origin));return p(n,t.origin,M(n,t.direction,i)),n}const ut=new st(()=>P());function C(t,e){const n=l(t),i=U(t[2]/n),r=Math.atan2(t[1]/n,t[0]/n);return j(e,n,i,r),e}const ft=y();function y(){return L()}const ht=T,gt=T;function Z(t,e){return R(e,t)}function lt(t,e){return I(t[0],t[1],t[2],e)}function mt(t){return t}function Mt(t){t[0]=t[1]=t[2]=t[3]=0}function _t(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function _(t){return t[3]}function dt(t){return t}function $t(t,e,n,i){return I(t,e,n,i)}function pt(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n}function Pt(t,e,n){return t!==n&&Z(t,n),n}function St(t,e){return e}function S(t,e,n){if(e==null||!z(t,e,$))return!1;let{t0:i,t1:r}=$;if((i<0||r<i&&r>0)&&(i=r),i<0)return!1;if(n){const{origin:s,direction:o}=e;n[0]=s[0]+o[0]*i,n[1]=s[1]+o[1]*i,n[2]=s[2]+o[2]*i}return!0}function bt(t,e,n){const i=ot(e,n);if(!z(t,i,$))return[];const{origin:r,direction:s}=i,{t0:o,t1:c}=$,a=h=>{const m=g();return et(m,r,s,h),A(t,m,m)};return Math.abs(o-c)<X()?[a(o)]:[a(o),a(c)]}const $={t0:0,t1:0};function z(t,e,n){const{origin:i,direction:r}=e,s=qt;s[0]=i[0]-t[0],s[1]=i[1]-t[1],s[2]=i[2]-t[2];const o=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(o===0)return!1;const c=2*(r[0]*s[0]+r[1]*s[1]+r[2]*s[2]),a=c*c-4*o*(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]-t[3]*t[3]);if(a<0)return!1;const h=Math.sqrt(a);return n.t0=(-c-h)/(2*o),n.t1=(-c+h)/(2*o),!0}const qt=g();function wt(t,e){return S(t,e,null)}function jt(t,e,n){if(S(t,e,n))return n;const i=D(t,e,u.get());return p(n,e.origin,M(u.get(),e.direction,V(e.origin,i)/l(e.direction))),n}function D(t,e,n){const i=u.get(),r=it.get();w(i,e.origin,e.direction);const s=_(t);w(n,i,e.origin),M(n,n,1/l(n)*s);const o=G(t,e.origin),c=rt(e.origin,n);return Y(r,c+o,i),B(n,n,r),n}function Rt(t,e,n,i){const r=_(t),s=r*r,o=e+.5*Math.PI,c=n*n+s-2*Math.cos(o)*n*r,a=Math.sqrt(c),h=c-s;if(h<=0)return .5;const m=Math.sqrt(h),N=Math.acos(m/a)-Math.asin(r/(a/Math.sin(o)));return Math.min(1,(N+.5*i)/i)}function xt(t,e,n){return S(t,e,n)?n:(at(e,t,n),A(t,n,n))}function A(t,e,n){const i=f(u.get(),e,t),r=M(u.get(),i,t[3]/l(i));return p(n,r,t)}function yt(t,e){const n=f(u.get(),e,t),i=J(n),r=t[3]*t[3];return Math.sqrt(Math.abs(i-r))}function G(t,e){const n=f(u.get(),e,t),i=l(n),r=_(t),s=r+Math.abs(r-i);return W(r/s)}const b=g();function H(t,e,n,i){const r=f(b,e,t);switch(n){case d.X:{const s=C(r,b)[2];return j(i,-Math.sin(s),Math.cos(s),0)}case d.Y:{const s=C(r,b),o=s[1],c=s[2],a=Math.sin(o);return j(i,-a*Math.cos(c),-a*Math.sin(c),Math.cos(o))}case d.Z:return O(i,r);default:return}}function K(t,e){const n=f(x,e,t);return l(n)-t[3]}function At(t,e,n,i){const r=K(t,e),s=H(t,e,d.Z,x),o=M(x,s,n-r);return p(i,e,o)}function Et(t,e){const n=tt(t,e),i=_(t);return n<=i*i}function kt(t,e,n=L()){const i=V(t,e),r=t[3],s=e[3];return i+s<r?(R(n,t),n):i+r<s?(R(n,e),n):(nt(n,t,e,(i+s-r)/(2*i)),n[3]=(i+r+s)/2,n)}const x=g(),vt=y(),Vt=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:ft,altitudeAt:K,angleToSilhouette:G,axisAt:H,cameraFrustumCoverage:Rt,clear:Mt,closestPoint:xt,closestPointOnSilhouette:D,containsPoint:Et,copy:Z,create:y,distanceToSilhouette:yt,elevate:pt,equals:gt,exactEquals:ht,fromCenterAndRadius:lt,fromRadius:_t,fromValues:$t,getCenter:dt,getExtent:St,getRadius:_,intersectLine:bt,intersectRay:S,intersectRayClosestSilhouette:jt,intersectsRay:wt,projectPoint:A,setAltitudeAt:At,setExtent:Pt,tmpSphere:vt,union:kt,wrap:mt},Symbol.toStringTag,{value:"Module"}));export{A as $,y as E,wt as H,bt as I,_ as N,lt as O,mt as T,dt as U,$t as V,ht as _,Z as a,P as b,Vt as f,Et as i,Lt as k,st as s,Tt as v,It as w};
