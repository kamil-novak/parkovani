import{P as t,Q as l,X as S,de as j,gS as p,fv as w,bO as E,ey as m,gT as y,gU as h,gV as c,gH as x,gW as z,gX as i,aX as H}from"./index-i1xHX9d5.js";import{p as J}from"./normalizeUtilsSync-Ae1WbTBP.js";import{e as d}from"./mat3f64-q3fE-ZOt.js";let s=class extends j{constructor(o){super(o)}get bounds(){const o=this.coords;return(o==null?void 0:o.extent)==null?null:p(o.extent)}get coords(){var e;const o=(e=this.element.georeference)==null?void 0:e.coords;return w(o,this.spatialReference).geometry}get normalizedCoords(){return E.fromJSON(J(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?p(o):null}};t([l()],s.prototype,"spatialReference",void 0),t([l()],s.prototype,"element",void 0),t([l()],s.prototype,"bounds",null),t([l()],s.prototype,"coords",null),t([l()],s.prototype,"normalizedCoords",null),t([l()],s.prototype,"normalizedBounds",null),s=t([S("esri.layers.support.MediaElementView")],s);const r=H(),a=d(),u=d(),g=d();function T(o,e,n){return m(r,e[0],e[1],1),y(r,r,h(a,n)),r[2]===0?c(o,r[0],r[1]):c(o,r[0]/r[2],r[1]/r[2])}function U(o,e,n){return f(u,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),f(g,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),x(o,z(u,u),g),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function f(o,e,n,v,b,C,V,X,B){i(o,e,v,C,n,b,V,1,1,1),m(r,X,B,1),z(a,o);const[N,O,R]=y(r,r,h(a,a));return i(a,N,0,0,0,O,0,0,0,R),x(o,a,o)}export{U as j,s as m,T as p};