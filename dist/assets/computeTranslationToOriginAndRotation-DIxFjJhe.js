import{eE as M,hG as h,hH as N,hI as S,hJ as t,T as P,hK as R,hL as A,hM as T,gB as C,aV as O}from"./index-CgUwq-LX.js";function f(u,E,s){const _=Math.sin(u),r=Math.cos(u),o=Math.sin(E),c=Math.cos(E),n=s;return n[0]=-_,n[4]=-o*r,n[8]=c*r,n[12]=0,n[1]=r,n[5]=-o*_,n[9]=c*_,n[13]=0,n[2]=0,n[6]=c,n[10]=o,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,n}function G(u,E,s){return f(u,E,s),M(s,s),s}function F(u,E,s,_){if(u==null||_==null)return!1;const r=h(u,N),o=h(_,S);if(r===o&&!e(o)&&(r!==t.UNKNOWN||P(u,_)))return R(s,E),!0;if(e(o)){const n=A[r][t.LON_LAT],l=A[t.LON_LAT][o];return n!=null&&l!=null&&(n(E,0,a,0),l(a,0,L,0),f(i*a[0],i*a[1],s),s[12]=L[0],s[13]=L[1],s[14]=L[2],!0)}const c=e(r);if((o===t.WEB_MERCATOR||o===t.PLATE_CARREE||o===t.WGS84||o===t.CGCS2000)&&(r===t.WGS84||c||r===t.WEB_MERCATOR||r===t.CGCS2000)){const n=A[r][t.LON_LAT],l=A[t.LON_LAT][o];return n!=null&&l!=null&&(n(E,0,a,0),l(a,0,L,0),c?G(i*a[0],i*a[1],s):T(s),s[12]=L[0],s[13]=L[1],s[14]=L[2],!0)}return!1}function e(u){return u===t.SPHERICAL_ECEF||u===t.SPHERICAL_MARS_PCPF||u===t.SPHERICAL_MOON_PCPF||u===t.WGS84_ECEF}const i=C(1),a=O(),L=O();export{F as C};
