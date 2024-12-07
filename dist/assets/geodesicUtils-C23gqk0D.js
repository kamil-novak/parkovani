import{az as _,s as $,bF as W,bG as z,bH as tt,bI as et,aB as nt,G as Z,Z as st,bJ as at,bK as it}from"./index-D-EuQFPo.js";function D(t){if(!t)return null;const n=t.wkid;if(n)return tt[n];const e=t.wkt2??t.wkt;return e?ot(e):null}function ot(t){const n=et.exec(t);if(!n||n.length!==2)return null;const e=n[1].split(",");if(!e||e.length<3)return null;const c=parseFloat(e[1]),s=parseFloat(e[2]);return isNaN(c)||isNaN(s)?null:{a:c,f:s===0?0:1/s}}function C(t){const n=D(t);if(rt(n))return n;const e=n.a*(1-n.f);return Object.assign(n,{b:e,eSq:1-(e/n.a)**2,radius:(2*n.a+e)/3,densificationRatio:1e4/((2*n.a+e)/3)})}function rt(t){return t!=null&&"b"in t&&"eSq"in t&&"radius"in t}function O(t,n,e){const{a:c,eSq:s}=C(e),a=Math.sqrt(s),i=Math.sin(n[1]*z),l=c*n[0]*z;let r;return s>0?r=c*((1-s)*(i/(1-s*(i*i))-1/(2*a)*Math.log((1-a*i)/(1+a*i))))*.5:r=c*i,t[0]=l,t[1]=r,t}function E(t){return _(t)&&!!D(t)}function lt(t,n="square-meters"){if(t.some(i=>!E(i.spatialReference)))throw new $("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const e=[];for(let i=0;i<t.length;i++){const l=t[i],r=l.spatialReference,{radius:h,densificationRatio:u}=C(r),o=h*u;e.push(ht(l,o))}const c=[],s=[0,0],a=[0,0];for(let i=0;i<e.length;i++){const{rings:l,spatialReference:r}=e[i];let h=0;for(let u=0;u<l.length;u++){const o=l[u];O(s,o[0],r),O(a,o[o.length-1],r);let M=a[0]*s[1]-s[0]*a[1];for(let d=0;d<o.length-1;d++)O(s,o[d+1],r),O(a,o[d],r),M+=a[0]*s[1]-s[0]*a[1];h+=M}h=W(h,"square-meters",n),c.push(h/-2)}return c}function ut(t,n="meters"){if(!t)throw new $("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some(c=>!E(c.spatialReference)))throw new $("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const e=[];for(let c=0;c<t.length;c++){const s=t[c],{spatialReference:a}=s,i=s.type==="polyline"?s.paths:s.rings;let l=0;for(let r=0;r<i.length;r++){const h=i[r];let u=0;for(let o=1;o<h.length;o++){const M=h[o-1][0],d=h[o][0],m=h[o-1][1],g=h[o][1];if(m!==g||M!==d){const p=new L;Q(p,[M,m],[d,g],a),u+=p.distance}}l+=u}l=W(l,"meters",n),e.push(l)}return e}function ht(t,n){if(t.type!=="polyline"&&t.type!=="polygon")throw new $("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:e}=t;if(!E(e))throw new $("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const c=t.type==="polyline"?t.paths:t.rings,s=[],a=[0,0],i=new L;for(const r of c){const h=[];s.push(h),h.push([r[0][0],r[0][1]]);let u,o,M=r[0][0],d=r[0][1];for(let m=0;m<r.length-1;m++){if(u=r[m+1][0],o=r[m+1][1],M===u&&d===o)continue;const g=[M,d];Q(i,[M,d],[u,o],e);const{azimuth:p,distance:v}=i,w=v/n;if(w>1){for(let S=1;S<=w-1;S++)J(a,g,p,S*n,e),h.push(a.slice());J(a,g,p,(v+Math.floor(w-1)*n)/2,e),h.push(a.slice())}J(a,g,p,v,e),h.push(a.slice()),M=a[0],d=a[1]}}const l=st(Z,e);return t.type==="polyline"?new at({paths:s,spatialReference:l}):new it({rings:s,spatialReference:l})}class L{constructor(n=0,e=void 0,c=void 0){this.distance=n,this.azimuth=e,this.reverseAzimuth=c}}function J(t,n,e,c,s){const a=n[0],i=n[1],l=a*z,r=i*z,h=(e??0)*z,{a:u,b:o,f:M}=C(s),d=Math.sin(h),m=Math.cos(h),g=(1-M)*Math.tan(r),p=1/Math.sqrt(1+g*g),v=g*p,w=Math.atan2(g,m),S=p*d,F=S*S,R=1-F,f=R*(u*u-o*o)/(o*o),G=1+f/16384*(4096+f*(f*(320-175*f)-768)),I=f/1024*(256+f*(f*(74-47*f)-128));let b,N,y,j,k=c/(o*G),q=2*Math.PI;for(;Math.abs(k-q)>1e-12;)y=Math.cos(2*w+k),b=Math.sin(k),N=Math.cos(k),j=I*b*(y+I/4*(N*(2*y*y-1)-I/6*y*(4*b*b-3)*(4*y*y-3))),q=k,k=c/(o*G)+j;const A=v*b-p*N*m,x=Math.atan2(v*N+p*b*m,(1-M)*Math.sqrt(F+A*A)),U=Math.atan2(b*d,p*N-v*b*m),P=M/16*R*(4+M*(4-3*R)),B=x/z,H=(l+(U-(1-P)*M*S*(k+P*b*(y+P*N*(2*y*y-1)))))/z;return t[0]=H,t[1]=B,t}function Q(t,n,e,c){const s=n[0]*z,a=n[1]*z,i=e[0]*z,l=e[1]*z,{a:r,b:h,f:u,radius:o}=C(c),M=i-s,d=Math.atan((1-u)*Math.tan(a)),m=Math.atan((1-u)*Math.tan(l)),g=Math.sin(d),p=Math.cos(d),v=Math.sin(m),w=Math.cos(m);let S,F,R,f,G,I,b,N,y,j,k=1e3,q=M;do{if(b=Math.sin(q),N=Math.cos(q),R=Math.sqrt(w*b*(w*b)+(p*v-g*w*N)*(p*v-g*w*N)),R===0)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;G=g*v+p*w*N,I=Math.atan2(R,G),y=p*w*b/R,F=1-y*y,f=G-2*g*v/F,isNaN(f)&&(f=0),j=u/16*F*(4+u*(4-3*F)),S=q,q=M+(1-j)*u*y*(I+j*R*(f+j*G*(2*f*f-1)))}while(Math.abs(q-S)>1e-12&&--k>0);if(k===0){const H=o,T=Math.acos(Math.sin(a)*Math.sin(l)+Math.cos(a)*Math.cos(l)*Math.cos(i-s))*H,K=i-s,V=Math.sin(K)*Math.cos(l),X=Math.cos(a)*Math.sin(l)-Math.sin(a)*Math.cos(l)*Math.cos(K),Y=Math.atan2(V,X);return t.azimuth=Y/z,t.distance=T,t.reverseAzimuth=void 0,t}const A=F*(r*r-h*h)/(h*h),x=A/1024*(256+A*(A*(74-47*A)-128)),U=h*(1+A/16384*(4096+A*(A*(320-175*A)-768)))*(I-x*R*(f+x/4*(G*(2*f*f-1)-x/6*f*(4*R*R-3)*(4*f*f-3)))),P=Math.atan2(w*Math.sin(q),p*v-g*w*Math.cos(q)),B=Math.atan2(p*Math.sin(q),p*v*Math.cos(q)-g*w);return t.azimuth=P/z,t.distance=U,t.reverseAzimuth=B/z,t}function ft(t){return E(t)?t:nt(t)?Z.WGS84:null}export{ft as N,ut as R,L as b,J as j,Q as q,lt as v,E as y};