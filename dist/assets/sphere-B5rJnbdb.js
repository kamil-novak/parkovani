import{kT as X,aV as g,en as S,ej as f,aS as w,aU as O,aR as T,em as p,ek as _,ei as R,eA as l,kU as Y,ey as q,ja as F,aQ as z,aG as y,jh as G,aF as B,ez as I,eG as D,eF as J,el as K,eC as W,eH as d,jk as tt,jj as nt,hP as et}from"./index-CgUwq-LX.js";import"./mat3f64-q3fE-ZOt.js";import{c as u,a as it,b as rt}from"./plane-Dth5e0XS.js";class st{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&X(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*C);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,C));e++)this._items.push(this._allocator())}}const C=1024;function P(t){return t?v(R(t.origin),R(t.direction)):v(g(),g())}function v(t,e){return{origin:t,direction:e}}function Ft(t,e){const n=ut.get();return n.origin=t,n.direction=e,n}function zt(t,e=P()){return ct(t.origin,t.direction,e)}function ot(t,e,n=P()){return S(n.origin,t),f(n.direction,e,t),n}function ct(t,e,n=P()){return S(n.origin,t),S(n.direction,e),n}function Gt(t,e){const n=w(u.get(),O(u.get(),t.direction),f(u.get(),e,t.origin));return T(n,n)}function at(t,e,n){const i=T(t.direction,f(n,e,t.origin));return p(n,t.origin,_(n,t.direction,i)),n}const ut=new st(()=>P());function E(t,e){const n=l(t),i=Y(t[2]/n),r=Math.atan2(t[1]/n,t[0]/n);return q(e,n,i,r),e}const ft=x();function x(){return F()}const ht=z,gt=z;function L(t,e){return y(e,t)}function lt(t,e){return G(t[0],t[1],t[2],e)}function mt(t){return t}function _t(t){t[0]=t[1]=t[2]=t[3]=0}function Mt(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function M(t){return t[3]}function dt(t){return t}function $t(t,e,n,i){return G(t,e,n,i)}function pt(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n}function Pt(t,e,n){return t!==n&&L(t,n),n}function bt(t,e){return e}function b(t,e,n){if(e==null||!U(t,e,$))return!1;let{t0:i,t1:r}=$;if((i<0||r<i&&r>0)&&(i=r),i<0)return!1;if(n){const{origin:s,direction:o}=e;n[0]=s[0]+o[0]*i,n[1]=s[1]+o[1]*i,n[2]=s[2]+o[2]*i}return!0}function jt(t,e,n){const i=ot(e,n);if(!U(t,i,$))return[];const{origin:r,direction:s}=i,{t0:o,t1:c}=$,a=h=>{const m=g();return et(m,r,s,h),A(t,m,m)};return Math.abs(o-c)<B()?[a(o)]:[a(o),a(c)]}const $={t0:0,t1:0};function U(t,e,n){const{origin:i,direction:r}=e,s=St;s[0]=i[0]-t[0],s[1]=i[1]-t[1],s[2]=i[2]-t[2];const o=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(o===0)return!1;const c=2*(r[0]*s[0]+r[1]*s[1]+r[2]*s[2]),a=c*c-4*o*(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]-t[3]*t[3]);if(a<0)return!1;const h=Math.sqrt(a);return n.t0=(-c-h)/(2*o),n.t1=(-c+h)/(2*o),!0}const St=g();function wt(t,e){return b(t,e,null)}function qt(t,e,n){if(b(t,e,n))return n;const i=V(t,e,u.get());return p(n,e.origin,_(u.get(),e.direction,I(e.origin,i)/l(e.direction))),n}function V(t,e,n){const i=u.get(),r=it.get();w(i,e.origin,e.direction);const s=M(t);w(n,i,e.origin),_(n,n,1/l(n)*s);const o=Z(t,e.origin),c=rt(e.origin,n);return D(r,c+o,i),J(n,n,r),n}function yt(t,e,n,i){const r=M(t),s=r*r,o=e+.5*Math.PI,c=n*n+s-2*Math.cos(o)*n*r,a=Math.sqrt(c),h=c-s;if(h<=0)return .5;const m=Math.sqrt(h),Q=Math.acos(m/a)-Math.asin(r/(a/Math.sin(o)));return Math.min(1,(Q+.5*i)/i)}function kt(t,e,n){return b(t,e,n)?n:(at(e,t,n),A(t,n,n))}function A(t,e,n){const i=f(u.get(),e,t),r=_(u.get(),i,t[3]/l(i));return p(n,r,t)}function xt(t,e){const n=f(u.get(),e,t),i=K(n),r=t[3]*t[3];return Math.sqrt(Math.abs(i-r))}function Z(t,e){const n=f(u.get(),e,t),i=l(n),r=M(t),s=r+Math.abs(r-i);return W(r/s)}const j=g();function H(t,e,n,i){const r=f(j,e,t);switch(n){case d.X:{const s=E(r,j)[2];return q(i,-Math.sin(s),Math.cos(s),0)}case d.Y:{const s=E(r,j),o=s[1],c=s[2],a=Math.sin(o);return q(i,-a*Math.cos(c),-a*Math.sin(c),Math.cos(o))}case d.Z:return O(i,r);default:return}}function N(t,e){const n=f(k,e,t);return l(n)-t[3]}function At(t,e,n,i){const r=N(t,e),s=H(t,e,d.Z,k),o=_(k,s,n-r);return p(i,e,o)}function Rt(t,e){const n=tt(t,e),i=M(t);return n<=i*i}function Ct(t,e,n=F()){const i=I(t,e),r=t[3],s=e[3];return i+s<r?(y(n,t),n):i+r<s?(y(n,e),n):(nt(n,t,e,(i+s-r)/(2*i)),n[3]=(i+r+s)/2,n)}const k=g(),vt=x(),It=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:ft,altitudeAt:N,angleToSilhouette:Z,axisAt:H,cameraFrustumCoverage:yt,clear:_t,closestPoint:kt,closestPointOnSilhouette:V,containsPoint:Rt,copy:L,create:x,distanceToSilhouette:xt,elevate:pt,equals:gt,exactEquals:ht,fromCenterAndRadius:lt,fromRadius:Mt,fromValues:$t,getCenter:dt,getExtent:bt,getRadius:M,intersectLine:jt,intersectRay:b,intersectRayClosestSilhouette:qt,intersectsRay:wt,projectPoint:A,setAltitudeAt:At,setExtent:Pt,tmpSphere:vt,union:Ct,wrap:mt},Symbol.toStringTag,{value:"Module"}));export{A as $,x as E,wt as H,jt as I,M as N,lt as O,mt as T,dt as U,$t as V,ht as _,L as a,P as b,It as f,Rt as i,Ft as k,st as s,zt as v,Gt as w};
