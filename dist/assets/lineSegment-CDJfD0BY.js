import{ei as g,aV as v,ej as a,aR as c,ek as f,el as b,bS as m,em as h,en as k}from"./index-COfaIqIK.js";import{s as l}from"./sphere-w_hpqJML.js";import{c as s}from"./plane-D2AtuDyv.js";function p(o){return o?{origin:g(o.origin),vector:g(o.vector)}:{origin:v(),vector:v()}}function P(o,n,r=p()){return k(r.origin,o),a(r.vector,n,o),r}function R(o,n){const r=a(s.get(),n,o.origin),u=c(o.vector,r),t=c(o.vector,o.vector),e=m(u/t,0,1),i=a(s.get(),f(s.get(),o.vector,e),r);return c(i,i)}function S(o,n,r){return w(o,n,0,1,r)}function w(o,n,r,u,t){const{vector:e,origin:i}=o,$=a(s.get(),n,i),j=c(e,$)/b(e);return f(t,e,m(j,r,u)),h(t,t,o.origin)}new l(()=>p());export{w as A,R as M,P as b,S as j,p as v};
