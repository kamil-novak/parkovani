import{eE as N,hF as h,hG as S,hH as M,hI as t,T as P,hJ as R,hK as l,hL as T,gA as C,aV as O}from"./index-dSHJTskp.js";function f(u,E,s){const A=Math.sin(u),r=Math.cos(u),o=Math.sin(E),_=Math.cos(E),n=s;return n[0]=-A,n[4]=-o*r,n[8]=_*r,n[12]=0,n[1]=r,n[5]=-o*A,n[9]=_*A,n[13]=0,n[2]=0,n[6]=_,n[10]=o,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,n}function F(u,E,s){return f(u,E,s),N(s,s),s}function W(u,E,s,A){if(u==null||A==null)return!1;const r=h(u,S),o=h(A,M);if(r===o&&!e(o)&&(r!==t.UNKNOWN||P(u,A)))return R(s,E),!0;if(e(o)){const n=l[r][t.LON_LAT],c=l[t.LON_LAT][o];return n!=null&&c!=null&&(n(E,0,a,0),c(a,0,L,0),f(i*a[0],i*a[1],s),s[12]=L[0],s[13]=L[1],s[14]=L[2],!0)}const _=e(r);if((o===t.WEB_MERCATOR||o===t.PLATE_CARREE||o===t.WGS84||o===t.CGCS2000)&&(r===t.WGS84||_||r===t.WEB_MERCATOR||r===t.CGCS2000)){const n=l[r][t.LON_LAT],c=l[t.LON_LAT][o];return n!=null&&c!=null&&(n(E,0,a,0),c(a,0,L,0),_?F(i*a[0],i*a[1],s):T(s),s[12]=L[0],s[13]=L[1],s[14]=L[2],!0)}return!1}function e(u){return u===t.SPHERICAL_ECEF||u===t.SPHERICAL_MARS_PCPF||u===t.SPHERICAL_MOON_PCPF||u===t.WGS84_ECEF}const i=C(1),a=O(),L=O();export{W as C};