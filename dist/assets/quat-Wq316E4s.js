import{e as S}from"./mat3f64-q3fE-ZOt.js";import{e as A}from"./quatf64-aQ5IuZRd.js";import{aF as _,aG as T,aH as v,aI as z,aJ as W,aK as X,aL as Y,aM as F,aN as G,aO as H,aP as J,aQ as K,aR as N,aS as d,aT as Q,aU as R,aV as U,aW as x,aX as V}from"./index-Bf1OihDl.js";function Z(a){return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a}function b(a,o,s){s*=.5;const e=Math.sin(s);return a[0]=e*o[0],a[1]=e*o[1],a[2]=e*o[2],a[3]=Math.cos(s),a}function k(a,o){const s=2*Math.acos(o[3]),e=Math.sin(s/2);return e>_()?(a[0]=o[0]/e,a[1]=o[1]/e,a[2]=o[2]/e):(a[0]=1,a[1]=0,a[2]=0),s}function j(a,o,s){const e=o[0],r=o[1],c=o[2],t=o[3],i=s[0],u=s[1],n=s[2],h=s[3];return a[0]=e*h+t*i+r*n-c*u,a[1]=r*h+t*u+c*i-e*n,a[2]=c*h+t*n+e*u-r*i,a[3]=t*h-e*i-r*u-c*n,a}function w(a,o,s){s*=.5;const e=o[0],r=o[1],c=o[2],t=o[3],i=Math.sin(s),u=Math.cos(s);return a[0]=e*u+t*i,a[1]=r*u+c*i,a[2]=c*u-r*i,a[3]=t*u-e*i,a}function B(a,o,s){s*=.5;const e=o[0],r=o[1],c=o[2],t=o[3],i=Math.sin(s),u=Math.cos(s);return a[0]=e*u-c*i,a[1]=r*u+t*i,a[2]=c*u+e*i,a[3]=t*u-r*i,a}function C(a,o,s){s*=.5;const e=o[0],r=o[1],c=o[2],t=o[3],i=Math.sin(s),u=Math.cos(s);return a[0]=e*u+r*i,a[1]=r*u-e*i,a[2]=c*u+t*i,a[3]=t*u-c*i,a}function D(a,o){const s=o[0],e=o[1],r=o[2];return a[0]=s,a[1]=e,a[2]=r,a[3]=Math.sqrt(Math.abs(1-s*s-e*e-r*r)),a}function P(a,o,s,e){const r=o[0],c=o[1],t=o[2],i=o[3];let u,n,h,f,l,m=s[0],$=s[1],p=s[2],q=s[3];return n=r*m+c*$+t*p+i*q,n<0&&(n=-n,m=-m,$=-$,p=-p,q=-q),1-n>_()?(u=Math.acos(n),h=Math.sin(u),f=Math.sin((1-e)*u)/h,l=Math.sin(e*u)/h):(f=1-e,l=e),a[0]=f*r+l*m,a[1]=f*c+l*$,a[2]=f*t+l*p,a[3]=f*i+l*q,a}function aa(a){const o=V,s=o(),e=o(),r=o(),c=Math.sqrt(1-s),t=Math.sqrt(s);return a[0]=c*Math.sin(2*Math.PI*e),a[1]=c*Math.cos(2*Math.PI*e),a[2]=t*Math.sin(2*Math.PI*r),a[3]=t*Math.cos(2*Math.PI*r),a}function oa(a,o){const s=o[0],e=o[1],r=o[2],c=o[3],t=s*s+e*e+r*r+c*c,i=t?1/t:0;return a[0]=-s*i,a[1]=-e*i,a[2]=-r*i,a[3]=c*i,a}function ea(a,o){return a[0]=-o[0],a[1]=-o[1],a[2]=-o[2],a[3]=o[3],a}function L(a,o){const s=o[0]+o[4]+o[8];let e;if(s>0)e=Math.sqrt(s+1),a[3]=.5*e,e=.5/e,a[0]=(o[5]-o[7])*e,a[1]=(o[6]-o[2])*e,a[2]=(o[1]-o[3])*e;else{let r=0;o[4]>o[0]&&(r=1),o[8]>o[3*r+r]&&(r=2);const c=(r+1)%3,t=(r+2)%3;e=Math.sqrt(o[3*r+r]-o[3*c+c]-o[3*t+t]+1),a[r]=.5*e,e=.5/e,a[3]=(o[3*c+t]-o[3*t+c])*e,a[c]=(o[3*c+r]+o[3*r+c])*e,a[t]=(o[3*t+r]+o[3*r+t])*e}return a}function ra(a,o,s,e){const r=.5*Math.PI/180;o*=r,s*=r,e*=r;const c=Math.sin(o),t=Math.cos(o),i=Math.sin(s),u=Math.cos(s),n=Math.sin(e),h=Math.cos(e);return a[0]=c*u*h-t*i*n,a[1]=t*i*h+c*u*n,a[2]=t*u*n-c*i*h,a[3]=t*u*h+c*i*n,a}function sa(a){return"quat("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"}const ca=T,ta=v,ia=z,ua=j,na=W,ha=X,Ma=Y,E=F,fa=E,O=G,la=O,g=H,ma=J,$a=K;function pa(a,o,s){const e=N(o,s);return e<-.999999?(d(M,qa,o),Q(M)<1e-6&&d(M,Pa,o),R(M,M),b(a,M,Math.PI),a):e>.999999?(a[0]=0,a[1]=0,a[2]=0,a[3]=1,a):(d(M,o,s),a[0]=M[0],a[1]=M[1],a[2]=M[2],a[3]=1+e,g(a,a))}const M=U(),qa=x(1,0,0),Pa=x(0,1,0);function da(a,o,s,e,r,c){return P(I,o,r,c),P(y,s,e,c),P(a,I,y,2*c*(1-c)),a}const I=A(),y=A();function ga(a,o,s,e){const r=Ia;return r[0]=s[0],r[3]=s[1],r[6]=s[2],r[1]=e[0],r[4]=e[1],r[7]=e[2],r[2]=-o[0],r[5]=-o[1],r[8]=-o[2],g(a,L(a,r))}const Ia=S();Object.freeze(Object.defineProperty({__proto__:null,add:ia,calculateW:D,conjugate:ea,copy:ca,dot:ha,equals:$a,exactEquals:ma,fromEuler:ra,fromMat3:L,getAxisAngle:k,identity:Z,invert:oa,len:fa,length:E,lerp:Ma,mul:ua,multiply:j,normalize:g,random:aa,rotateX:w,rotateY:B,rotateZ:C,rotationTo:pa,scale:na,set:ta,setAxes:ga,setAxisAngle:b,slerp:P,sqlerp:da,sqrLen:la,squaredLength:O,str:sa},Symbol.toStringTag,{value:"Module"}));export{oa as L,ma as N,ea as O,pa as R,ra as T,ta as X,b,k as v,j as x};
