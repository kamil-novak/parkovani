import{a7 as t,a8 as l,ab as w,dl as D,hd as p,fJ as E,bR as M,eD as m,he as g,hf as y,hg as c,h1 as x,hh as z,hi as i,aV as O}from"./index-CDF62Mj_.js";import{p as S}from"./normalizeUtilsSync-DGLLay_q.js";import{e as d}from"./mat3f64-q3fE-ZOt.js";let s=class extends D{constructor(o){super(o)}get bounds(){const o=this.coords;return(o==null?void 0:o.extent)==null?null:p(o.extent)}get coords(){var e;const o=(e=this.element.georeference)==null?void 0:e.coords;return E(o,this.spatialReference).geometry}get normalizedCoords(){return M.fromJSON(S(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?p(o):null}};t([l()],s.prototype,"spatialReference",void 0),t([l()],s.prototype,"element",void 0),t([l()],s.prototype,"bounds",null),t([l()],s.prototype,"coords",null),t([l()],s.prototype,"normalizedCoords",null),t([l()],s.prototype,"normalizedBounds",null),s=t([w("esri.layers.support.MediaElementView")],s);const r=O(),a=d(),u=d(),h=d();function A(o,e,n){return m(r,e[0],e[1],1),g(r,r,y(a,n)),r[2]===0?c(o,r[0],r[1]):c(o,r[0]/r[2],r[1]/r[2])}function F(o,e,n){return f(u,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),f(h,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),x(o,z(u,u),h),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function f(o,e,n,b,v,C,R,V,B){i(o,e,b,C,n,v,R,1,1,1),m(r,V,B,1),z(a,o);const[J,N,j]=g(r,r,y(a,a));return i(a,J,0,0,0,N,0,0,0,j),x(o,a,o)}export{F as j,s as m,A as p};
