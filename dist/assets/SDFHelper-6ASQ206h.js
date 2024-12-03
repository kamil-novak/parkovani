import{o as X}from"./floatRGBA-CpVDYbaY.js";import{bC as Y,bD as k,bE as L}from"./index-i1xHX9d5.js";import{t as j}from"./UpdateTracking2D-B4C358IZ.js";const q=.45;function E(n,t=.5){var i;switch(n.type){case"CIMPointSymbol":{const o=n.symbolLayers;if(!o||o.length!==1)return null;const a=o[0];return a.type!=="CIMVectorMarker"?null:E(a)}case"CIMVectorMarker":{const o=n.markerGraphics;if(!o||o.length!==1)return null;const a=o[0];if(!a)return null;const r=a.geometry;if(!r)return null;const e=a.symbol;return!e||e.type!=="CIMPolygonSymbol"&&e.type!=="CIMLineSymbol"||(i=e.symbolLayers)!=null&&i.some(l=>!!l.effects)?null:{type:"sdf",geom:r,sdfPaddingRatio:t,asFill:e.type==="CIMPolygonSymbol"}}}}function G(n){return n?n.rings?n.rings:n.paths?n.paths:n.xmin!==void 0&&n.ymin!==void 0&&n.xmax!==void 0&&n.ymax!==void 0?[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]:null:null}function U(n){let t=1/0,i=-1/0,o=1/0,a=-1/0;for(const r of n)for(const e of r)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<o&&(o=e[1]),e[1]>a&&(a=e[1]);return new j(t,o,i-t,a-o)}function V(n){let t=1/0,i=-1/0,o=1/0,a=-1/0;for(const r of n)for(const e of r)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<o&&(o=e[1]),e[1]>a&&(a=e[1]);return[t,o,i,a]}function B(n){return n?n.rings?V(n.rings):n.paths?V(n.paths):Y(n)?[n.xmin,n.ymin,n.xmax,n.ymax]:null:null}function T(n,t){const[i,o,a,r]=B(n),e=a-i,l=r-o,m=k,c=L,f=Math.floor(.5*(m*t-c)),s=(m-2*(f+c))/Math.max(e,l),d=Math.round(e*s),h=Math.round(l*s);return{pixelDimensions:[e,l],texelDimensions:[Math.round((d+2*f)/s),Math.round((h+2*f)/s)]}}function W(n,t,i,o,a,r,e){const[l,m,c,f]=n;if(c<l||f<m)return{frameSizeRatio:0,anchorX:0,anchorY:0,widthRatio:1,sdfPaddingRatio:.5};const s=c-l,d=f-m,h=Math.max(s,d);let u=.5;if(r!=null&&i!=null){!e&&t!=null&&(r*=(t.ymax-t.ymin)/i);const C=r/(r+h);C>q&&C<1&&(u=Math.min(C+.1,.99))}const x=k,M=L,p=Math.floor(.5*(x*u-M)),g=(x-2*(p+M))/h,I=Math.round(s*g)+2*p,R=Math.round(d*g)+2*p;let y=1;t&&(y=R*(1-u)/((t.ymax-t.ymin)*g));let w=0,b=0,P=1;o&&(a?t&&i&&t.ymax-t.ymin>0&&(P=(t.xmax-t.xmin)/(t.ymax-t.ymin),w=o.x/(i*P),b=o.y/i):(w=o.x,b=o.y)),t&&(w=.5*(t.xmax+t.xmin)+w*(t.xmax-t.xmin),b=.5*(t.ymax+t.ymin)+b*(t.ymax-t.ymin)),w-=l,b-=m,w*=g,b*=g,w+=p,b+=p;let S=w/I-.5,v=b/R-.5;return a&&i&&(S*=i*P,v*=i),{frameSizeRatio:y,anchorX:S,anchorY:v,widthRatio:P,sdfPaddingRatio:u}}function Z(n){const t=G(n.geom),i=U(t),o=k,a=L,r=Math.floor(.5*(o*n.sdfPaddingRatio-a)),e=o-2*(r+a),l=e/Math.max(i.width,i.height),m=Math.round(i.width*l)+2*r,c=Math.round(i.height*l)+2*r,f=[];for(const d of t)if(d&&d.length>1){const h=[];for(const u of d){let[x,M]=u;x-=i.x,M-=i.y,x*=l,M*=l,x+=r-.5,M+=r-.5,n.asFill?h.push([x,M]):h.push([Math.round(x),Math.round(M)])}if(n.asFill){const u=h.length-1;h[0][0]===h[u][0]&&h[0][1]===h[u][1]||h.push(h[0])}f.push(h)}const s=H(f,m,c,r);return n.asFill&&J(f,m,c,r,s),{data:K(s,r),width:m,height:c,sdfPaddingRatio:n.sdfPaddingRatio,sdfDecodeCoeff:2*r/e}}function H(n,t,i,o){const a=t*i,r=new Array(a),e=o*o+1;for(let l=0;l<a;++l)r[l]=e;for(const l of n){const m=l.length;for(let c=1;c<m;++c){const f=l[c-1],s=l[c];let d,h,u,x;f[0]<s[0]?(d=f[0],h=s[0]):(d=s[0],h=f[0]),f[1]<s[1]?(u=f[1],x=s[1]):(u=s[1],x=f[1]);let M=Math.floor(d)-o,p=Math.floor(h)+o,g=Math.floor(u)-o,I=Math.floor(x)+o;M<0&&(M=0),p>t&&(p=t),g<0&&(g=0),I>i&&(I=i);const R=s[0]-f[0],y=s[1]-f[1],w=R*R+y*y;for(let b=M;b<p;b++)for(let P=g;P<I;P++){const S=b+.5,v=P+.5;let C,D,F=(S-f[0])*R+(v-f[1])*y;F<0?(C=f[0],D=f[1]):F>w?(C=s[0],D=s[1]):(F/=w,C=f[0]+F*R,D=f[1]+F*y);const z=(S-C)*(S-C)+(v-D)*(v-D),A=(i-P-1)*t+b;z<r[A]&&(r[A]=z)}}}for(let l=0;l<a;++l)r[l]=Math.sqrt(r[l]);return r}function J(n,t,i,o,a){for(const r of n){const e=r.length;for(let l=1;l<e;++l){const m=r[l-1],c=r[l];let f,s,d,h;m[0]<c[0]?(f=m[0],s=c[0]):(f=c[0],s=m[0]),m[1]<c[1]?(d=m[1],h=c[1]):(d=c[1],h=m[1]);let u=Math.floor(f),x=Math.floor(s)+1,M=Math.floor(d),p=Math.floor(h)+1;u<o&&(u=o),x>t-o&&(x=t-o),M<o&&(M=o),p>i-o&&(p=i-o);for(let g=M;g<p;++g){if(m[1]>g==c[1]>g)continue;const I=g+.5,R=(i-g-1)*t;for(let y=u;y<x;++y)y+.5<(c[0]-m[0])*(I-m[1])/(c[1]-m[1])+m[0]&&(a[R+y]=-a[R+y]);for(let y=o;y<u;++y)a[R+y]=-a[R+y]}}}}function K(n,t){const i=2*t,o=n.length,a=new Uint8Array(4*o);for(let r=0;r<o;++r){const e=.5-n[r]/i;X(e,a,4*r)}return a}export{E as a,T as c,W as h,B as m,Z as u};
